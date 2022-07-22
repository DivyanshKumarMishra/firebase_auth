# firebase_auth

1. Create a React Native app.

2. Create a Firebase project ( https://firebase.google.com/?gclid=Cj0KCQjw8uOWBhDXARIsAOxKJ2HsLB6KqRTbYhmgfsgDwboa2nPj9qGCHXwxWpHJ_KLOQs_cDMhxM1AaAttsEALw_wcB&gclsrc=aw.ds) 

        a. Click on Add Project.

        b. Enter your project name.(demo-project) and click continue.

        c. Disable google analytics for the project.

3. Install via NPM (in your project)

        # Using npm
        npm install --save @react-native-firebase/app

        # Using Yarn
        yarn add @react-native-firebase/app
        yarn add @react-native-firebase/auth

4. Android Setup

        a. On the firebase console click on the android icon.

        b. Add firebase to your Android app. Register app.

        c. Give name to the app. Go to you react native project > android > app > src > main > AndroidManifest.xml

        d. Download the google-services.json file.

        e. Skip the other steps for now.

        f. After this go to project settings and add SHA-256 key.
              Go to project_name > android > app and run this command ( keytool -list -v -keystore debug.keystore -alias androiddebugkey -storepass android -		  	keypass android ).
              Select the SHA-256 key and then add in the project.

        g. Configure Firebase with Android credentials

              First, add the google-services plugin as a dependency inside of your /android/build.gradle file: 
                buildscript {
                    dependencies {
                        // ... other dependencies
                        classpath 'com.google.gms:google-services:4.3.13'
                        // Add me --- /\
                    }
                }

              Lastly, execute the plugin by adding the following to your /android/app/build.gradle file:
                apply plugin: 'com.android.application'
                apply plugin: 'com.google.gms.google-services'

5. Now Go to ( Build > Authentication > Sign-in method ) in Firebase Console.

6. Select phone and click Enable, now select android in the popup that appears, then save.

7. Enable app verification (https://console.cloud.google.com/apis/library/androidcheck.googleapis.com)

        SafetyNet: To enable SafetyNet for use with Firebase Authentication
        
            In the Google Cloud Console, enable the Android DeviceCheck API for your project. The default Firebase API Key will be used, and needs to be allowed to access the DeviceCheck API. 

8. Downloaded google.services.json file to be copied and pasted in project-name > android > app.

9. Now use the code under Sign-in section of following link: (https://rnfirebase.io/auth/phone-auth) in project's App.js file.

Video for reference: https://www.youtube.com/watch?v=3kFX3QLrpEU

IMPORT USERS IN FIREBASE: (https://firebase.google.com/docs/auth/admin/import-users)

The Firebase Admin SDK provides the 𝐀𝐮𝐭𝐡.𝐢𝐦𝐩𝐨𝐫𝐭𝐔𝐬𝐞𝐫𝐬() API for importing users in bulk to Firebase Authentication with elevated privileges. While this feature is also available in the Firebase CLI, the Admin SDK lets you upload existing users from an external authentication system or other Firebase project programmatically without having to create intermediate CSV or JSON files.

The user import API offers the following advantages:

        a. Ability to migrate users from an external authentication system using a different password hashing algorithm.
        b. Ability to migrate users from another Firebase project.
        c. Optimization for speedy and efficient bulk import operations. This operation processes users without checking for uid, email, phoneNumber or other identifier duplication.
        d. Ability to migrate existing or create new OAuth users (Google, Facebook, etc).
        e. Ability to import users with custom claims directly in bulk.
