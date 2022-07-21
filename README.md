# firebase_auth
Create a React Native app.

Create a Firebase project ( https://firebase.google.com/?gclid=Cj0KCQjw8uOWBhDXARIsAOxKJ2HsLB6KqRTbYhmgfsgDwboa2nPj9qGCHXwxWpHJ_KLOQs_cDMhxM1AaAttsEALw_wcB&gclsrc=aw.ds) 
    Click on Add Project.
    Enter your project name.(demo-project) and click continue.
    Disable google analytics for the project.

Install via NPM
    # Using npm
    npm install --save @react-native-firebase/app
    # Using Yarn
    yarn add @react-native-firebase/app
    also install : yarn add @react-native-firebase/auth

Android Setup
    On the firebase console click on the android icon.
    Add firebase to your Android app. Register app
    Give name to the app. Go to you react native project > android > app > src > main > AndroidManifest.xml
    Download the google-services.json file.
    Skip the other steps for now.
    After this go to project settings and add SHA-256 key.
        Go to project_name > android > app and run this command ( keytool -list -v -keystore debug.keystore -alias androiddebugkey -storepass android -keypass android ).
        Select the SHA-256 key and then add in the project.
    Configure Firebase with Android credentials
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

Now Go to ( Build > Authentication > Sign-in method ) in Firebase Console.

Select phone and click Enable, now select android in the popup that appears.

Enable app verification
    SafetyNet: To enable SafetyNet for use with Firebase Authentication:
        In the Google Cloud Console, enable the Android DeviceCheck API for your project. The default Firebase API Key will be used, and needs to be allowed to access the DeviceCheck API. (https://console.cloud.google.com/apis/library/androidcheck.googleapis.com)

Downloaded google.services.json file to be copied and pasted in project-name > android > app.

Now use the code under Sign-in section of following link: (https://rnfirebase.io/auth/phone-auth)

Video for reference: https://www.youtube.com/watch?v=_msNczBgHUE
