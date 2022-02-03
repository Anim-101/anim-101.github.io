# NativeScript Application LifeCycle
In previous section we have learned about introductory to architectural level of studies on NativeScript. Now it's time to go through some application related deep dive. NativeScript manages application in different segments. Some are for running the application and connecting UI design and business logic altogether. Some work as event cactcher which triggers when event is invoked. And some are related to application settings. Let's deep dive into **Application LifeCycle** and related contents.

## Application Run
Run method form Application module needs to start the application. This is more of an entry point to the entire application. Following is the code from v7 documentation whcih shows invocation of run method from NativeScript's application module.
```TypeScript
import { Application } from "@nativescript/core";
Application.run({ moduleName: "app-root" });
```
## Application Events
Following are the lifecycles we get as *Application Events* from NativeScript4
- **launch** - This event is raised when Application is launched.
- **suspend** - This event is raised when Application is suspended.
- **resume** - This event is raised when Application is resumed after being suspended.
- **displayed** - This event is raised when Application's UIelements are rendered.
- **orientationChanged** - This event is raised when device's orientation is changed.
- **exit** - This event is raised when Application is about to exit.
- **suspend** - This event is raised when Application is suspended.
- **lowMemory** - This event is raised when the target device's memory is low.
- **uncaughtError** - This event is raised when an uncaught application error is raised.

Following is the code of Event invocation which is taken from v7 documentation. It pretty much shows how each of those Events need to be invoked. Please take look and try on IDE.
```TypeScript
import { Application, ApplicationEventData, LaunchEventData, OrientationChangedEventData, UnhandledErrorEventData } from "@nativescript/core";

Application.on(Application.launchEvent, (args: LaunchEventData) => {
    if (args.android) {
        // For Android applications, args.android is an android.content.Intent class.
        console.log("Launched Android application with the following intent: " + args.android + ".");
    } else if (args.ios !== undefined) {
        // For iOS applications, args.ios is NSDictionary (launchOptions).
        console.log("Launched iOS application with options: " + args.ios);
    }
});

Application.on(Application.suspendEvent, (args: ApplicationEventData) => {
    if (args.android) {
        // For Android applications, args.android is an android activity class.
        console.log("Activity: " + args.android);
    } else if (args.ios) {
        // For iOS applications, args.ios is UIApplication.
        console.log("UIApplication: " + args.ios);
    }
});

Application.on(Application.resumeEvent, (args: ApplicationEventData) => {
    if (args.android) {
        // For Android applications, args.android is an android activity class.
        console.log("Activity: " + args.android);
    } else if (args.ios) {
        // For iOS applications, args.ios is UIApplication.
        console.log("UIApplication: " + args.ios);
    }
});

Application.on(Application.displayedEvent, (args: ApplicationEventData) => {
    console.log("displayedEvent");
});

Application.on(Application.orientationChangedEvent, (args: OrientationChangedEventData) => {
    // "portrait", "landscape", "unknown"
    console.log(args.newValue)
});

Application.on(Application.exitEvent, (args: ApplicationEventData) => {
    if (args.android) {
        // For Android applications, args.android is an android activity class.
        console.log("Activity: " + args.android);
    } else if (args.ios) {
        // For iOS applications, args.ios is UIApplication.
        console.log("UIApplication: " + args.ios);
    }
});

Application.on(Application.lowMemoryEvent, (args: ApplicationEventData) => {
    if (args.android) {
        // For Android applications, args.android is an android activity class.
        console.log("Activity: " + args.android);
    } else if (args.ios) {
        // For iOS applications, args.ios is UIApplication.
        console.log("UIApplication: " + args.ios);
    }
});

Application.on(Application.uncaughtErrorEvent, function (args: UnhandledErrorEventData) {
    console.log("Error: " + args.error);
});

Application.run({ moduleName: "app-root" });
```
## Android Activity Events
Following are the Activity Events in NativeScript.
- **activityCreated** - This event is raised when an Activity is created.
- **activityDestroyed** - This event is raised when an Activity is destroyed.
- **activityStarted** - This event is raised when an Activity is started.
- **activtiyPaused** - This event is raised when an Activity is paused.
- **activityResumed** - This event is raised when an Activity is resumed.
- **activityStopped** - This event is raised when an Activity is stopped.
- **saveActivityState** - This event is raised to retrieve per instance state from an Activity before being killed so that the store can be restored.
- **activityResult** - This event is raised when an Activity we have launched exits, giving us the requestCode that we started it with, and the resultCode it returned with additional data from it.
- **activityBackPressed** - This event is raised when the Activity has detected the user's press of back key.

Following is the code of Activity invocation which is taken from v7 documentation. It pretty much shows how each of those Activities need to be invoked. Please take look and try on IDE.
```TypeScript
mport { isAndroid, Application, AndroidApplication, AndroidActivityBundleEventData } from "@nativescript/core";

// Android activity events
if (isAndroid) {
    Application.android.on(AndroidApplication.activityCreatedEvent, function (args: AndroidActivityBundleEventData) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity + ", Bundle: " + args.bundle);
    });

    Application.android.on(AndroidApplication.activityDestroyedEvent, function (args: AndroidActivityEventData) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity);
    });

    Application.android.on(AndroidApplication.activityStartedEvent, function (args: AndroidActivityEventData) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity);
    });

    Application.android.on(AndroidApplication.activityPausedEvent, function (args: AndroidActivityEventData) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity);
    });

    Application.android.on(AndroidApplication.activityResumedEvent, function (args: AndroidActivityEventData) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity);
    });

    Application.android.on(AndroidApplication.activityStoppedEvent, function (args: AndroidActivityEventData) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity);
    });

    Application.android.on(AndroidApplication.saveActivityStateEvent, function (args: AndroidActivityBundleEventData) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity + ", Bundle: " + args.bundle);
    });

    Application.android.on(AndroidApplication.activityResultEvent, function (args: AndroidActivityResultEventData) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity +
            ", requestCode: " + args.requestCode + ", resultCode: " + args.resultCode + ", Intent: " + args.intent);
    });

    Application.android.on(AndroidApplication.activityBackPressedEvent, function (args: AndroidActivityBackPressedEventData) {
        console.log("Event: " + args.eventName + ", Activity: " + args.activity);
        // Set args.cancel = true to cancel back navigation and do something custom.
    });
}

Application.run({ moduleName: "app-root" });
```
## IOS UI Application Delegate
NativeScript supports IOS UI Application Delegate. For this plugin needs to be added in the project. Following is the code snippet from v7 documentation which can be used to develop UI Application Delegate.
```TypeScript
import { Application } from "@nativescript/core";

@NativeClass()
class MyDelegate extends UIResponder implements UIApplicationDelegate {
    public static ObjCProtocols = [UIApplicationDelegate];

    applicationDidFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary<string, any>): boolean {
        console.log("applicationWillFinishLaunchingWithOptions: " + launchOptions)

        return true;
    }

    applicationDidBecomeActive(application: UIApplication): void {
        console.log("applicationDidBecomeActive: " + application)
    }
}
Application.ios.delegate = MyDelegate;
Application.run({ moduleName: "main-page" });
```
## Persist and Restore Application Settings
The Application Settings module is a static singleton hash table module that store key-value pair for the entire application. Developers need it to persist user-defined settings. Following is the code example from v7 documentation. Which shows getter and setter methods for the module's function. Getter takes only one field which then search for the argument's value from hash table and returns it. Setter takes two argument as hash value to store the setting in hash table.
```TypeScript
import { EventData, ApplicationSettings } from "@nativescript/core";
// Event handler for Page "loaded" event attached in main-page.xml.
export function pageLoaded(args: EventData) {
    ApplicationSettings.setString("Name", "John Doe");
    console.log(ApplicationSettings.getString("Name"));// Prints "John Doe".
    ApplicationSettings.setBoolean("Married", false);
    console.log(ApplicationSettings.getBoolean("Married"));// Prints false.
    ApplicationSettings.setNumber("Age", 42);
    console.log(ApplicationSettings.getNumber("Age"));// Prints 42.
    console.log(ApplicationSettings.hasKey("Name"));// Prints true.
    ApplicationSettings.remove("Name");// Removes the Name entry.
    console.log(ApplicationSettings.hasKey("Name"));// Prints false.
}
```
## Conclusion
Application Life Cycle is important for every frameworks. It binds developer and application in a process where developers get options to make an application the way business requirement described. Above mentioned contents are not only important but also necessary to develop mobile application through NativeScript framework.

## Reference
- [1] https://v7.docs.nativescript.org/core-concepts/application-lifecycle
