const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

// Callable function to set user role and branch (admin only)
exports.setUserRole = functions.https.onCall(async (data, context) => {
    // Check if caller is admin
    if (!context.auth || context.auth.token.role !== 'admin') {
        throw new functions.https.HttpsError(
            'permission-denied',
            'Only admins can set user roles.'
        );
    }

    const { uid, role, branch } = data;

    if (!uid || !role) {
        throw new functions.https.HttpsError(
            'invalid-argument',
            'The function must be called with a uid and role.'
        );
    }

    const validRoles = ['admin', 'vendedor', 'cliente'];
    if (!validRoles.includes(role)) {
        throw new functions.https.HttpsError(
            'invalid-argument',
            'Invalid role specified.'
        );
    }

    try {
        const claims = { role: role };
        if (branch) {
            claims.branch = branch;
        }

        await admin.auth().setCustomUserClaims(uid, claims);
        
        // Also update the user document in Firestore
        await admin.firestore().collection('users').doc(uid).set({
            role: role,
            branch: branch || null,
            updatedAt: admin.firestore.FieldValue.serverTimestamp()
        }, { merge: true });

        return { message: `Successfully set custom claims and updated document for user ${uid}.` };
    } catch (error) {
        throw new functions.https.HttpsError('internal', 'Error setting custom claims', error);
    }
});

// Auth trigger to create profile in Firestore and set default claims on sign-up
exports.onUserCreate = functions.auth.user().onCreate(async (user) => {
    try {
        // Set default claims
        await admin.auth().setCustomUserClaims(user.uid, { role: 'cliente' });
        
        // Create user profile in Firestore
        await admin.firestore().collection('users').doc(user.uid).set({
            email: user.email,
            role: 'cliente',
            displayName: user.displayName || '',
            createdAt: admin.firestore.FieldValue.serverTimestamp()
        });
        
        console.log(`Created profile and set default claims for user ${user.uid}`);
    } catch (error) {
        console.error('Error during onUserCreate trigger:', error);
    }
});

// Callable function to create a new user entirely from Admin (admin only)
exports.createUserByAdmin = functions.https.onCall(async (data, context) => {
    // Check if caller is admin
    if (!context.auth || context.auth.token.role !== 'admin') {
        throw new functions.https.HttpsError(
            'permission-denied',
            'Only admins can create users.'
        );
    }

    const { email, password, displayName, role, branch } = data;

    if (!email || !password || !role) {
        throw new functions.https.HttpsError(
            'invalid-argument',
            'Missing required fields (email, password, role).'
        );
    }

    try {
        // 1. Create the user in Auth
        const userRecord = await admin.auth().createUser({
            email: email,
            password: password,
            displayName: displayName || '',
        });

        // 2. Set custom claims
        const claims = { role: role };
        if (branch) claims.branch = branch;
        await admin.auth().setCustomUserClaims(userRecord.uid, claims);

        // 3. Create document in Firestore
        await admin.firestore().collection('users').doc(userRecord.uid).set({
            email: email,
            displayName: displayName || '',
            role: role,
            branch: branch || null,
            createdAt: admin.firestore.FieldValue.serverTimestamp()
        });

        return { 
            message: `Successfully created user ${userRecord.uid}`,
            uid: userRecord.uid
        };
    } catch (error) {
        throw new functions.https.HttpsError('internal', 'Error creating user', error);
    }
});
