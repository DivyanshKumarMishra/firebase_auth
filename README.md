# firebase_auth
1.Create a React Native app.

2.Create a Firebase project ( https://firebase.google.com/?gclid=Cj0KCQjw8uOWBhDXARIsAOxKJ2HsLB6KqRTbYhmgfsgDwboa2nPj9qGCHXwxWpHJ_KLOQs_cDMhxM1AaAttsEALw_wcB&gclsrc=aw.ds) 
    a.Click on Add Project.
    b.Enter your project name.(demo-project) and click continue.
    c.Disable google analytics for the project.

3.Install via NPM
    # Using npm
    npm install --save @react-native-firebase/app
    # Using Yarn
    yarn add @react-native-firebase/app
    also install : yarn add @react-native-firebase/auth

4.Android Setup
    a.On the firebase console click on the android icon.
    b.Add firebase to your Android app. Register app
    c.Give name to the app. Go to you react native project > android > app > src > main > AndroidManifest.xml
    d.Download the google-services.json file.
    e.Skip the other steps for now.
    f.After this go to project settings and add SHA-256 key.
        Go to project_name > android > app and run this command ( keytool -list -v -keystore debug.keystore -alias androiddebugkey -storepass android -keypass  android ).
        Select the SHA-256 key and then add in the project.
    g.Configure Firebase with Android credentials
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

5.Now Go to ( Build > Authentication > Sign-in method ) in Firebase Console.

6.Select phone and click Enable, now select android in the popup that appears.

7.Enable app verification
    SafetyNet: To enable SafetyNet for use with Firebase Authentication:
        In the Google Cloud Console, enable the Android DeviceCheck API for your project. The default Firebase API Key will be used, and needs to be allowed to access the DeviceCheck API. (https://console.cloud.google.com/apis/library/androidcheck.googleapis.com)

8.Downloaded google.services.json file to be copied and pasted in project-name > android > app.

9.Now use the code under Sign-in section of following link: (https://rnfirebase.io/auth/phone-auth)

Video for reference: https://www.youtube.com/watch?v=_msNczBgHUE
