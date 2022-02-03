# Hello, NativeScript !!
NativeScript is a framework which is built using JavaScript programming language for native mobile application development. The beauty of this framework is, we can use our existing knowledge of JavaScript, HTML & CSS and design the UI of mobile application. For this we don't need webview anymore. Which means no need to control **DOM** (Document Object Model).

## Architecture
We are saying it doesn't control DOM to render UI. Still we are working with javascript, html, & css. Then how it works? Well this is the main point of using v8 engine. Which means NativeScript uses V8 engine to compile js, html and css codes for android os. On the other hand, same can be accomplished using **JSC** (JavaScript Core) ios. Point to be noted, these engines are provided by google and webkits respectively and are open sourced.

It feels like we can call it a **NodeJS** of mobile application development. Well, it too serves it's purpose in a simillar way. Before NativeScript different mobile application framewarks were available. For example ionic, xamarin etc etc. But none of those frameworks provided full native api support as NativeScript did. Following image is for refrence of this concept of accessing native api. It is taken from the actual version 7 of the documentaion.

// NativeScript Common Image

So what happens that we download a template of a codebase or generates using commands (given in installation section) then framework binds the codebase altogether. Why the binding? because there are different type of frameworks which are being used. Till now, vanilla **JavaScript**, vanilla **TypeScript**, **AngularJS**, **ReactJS**, **Vue JS**, **Svelte** are available. Thus binding is required between **NativeScript Core Modules**, Plugins and selected JS Framework.

During the data binding, XML based procedure binds UI, Data and Navigations so that selected web framework can work altogether, And after that, **NativeScript Runtimes** makes an communication environment with **NativeAPIs**. It uses gesture API to control the communication. I blieve there are no need of **Re-inventing the wheels** when there is an amazing documentation available and provided by creators of this framework. Using the Native CLI following procedures are handled by developers.

## Installation
NativeScript provides many template projects to kick start the coding phase. Following command is used to download and install a project in local machine.
```
tns create HelloWorld --templace nativescript-template-tutorial
```
**tns** stands for **Telerik NativeScript**. Parent organization which created NativeScript. If we need any help with the commands. Then ths provide following command to go through available commands which tns provide.
```
tns help
```
Windows, MacOS, Linux Distros - these are the available operating system where NativeScript based project can be installed. A installation guide is provided in official documentation. So please go through the **Reference Number [5]** for your desired installation procedure.

## Application Architecture
### Entry Point
There is a .json file placed under the main property, which handles the entry point of NativeScript. It is usually an app.ts file or app.js if we are using JavaScript. This file is used for app level initializations. Purpose of this intialization is to control of app's root module. To have this control, we need to run Application.run() method, where we pass the **NavigationEntry** with desired module name. Following is the process of writing Application.run method with appropiate imports.
```
import { Application } from "@nativescript/core";
Application.run({ moduleName: "app-root" });
````
### Application Modules
There is three application level files in core NativeScript modules. One is xml file to load UI, one is js file for load business logic and another one is css file for UI related designs.
- home-page.xml
- home-page.js
- home-page.css

There are two root level modules in NativeScript core modules.
- The app container
- ModelView containers
The app container is the one we pass through Application.run() method. Only one app container can be available at a time. But ModelView containers are for different type of development of views.

### Global App Styling
NativeScript supports global app styling format. All css files should be mentioned in app.css file. Which is considered to be root file of css. Also if we are going to use any custom name for our main css file instead of naming it app.css file. Then it should be mentioned before Application.run() method is invoked. On this case Application.setCssFileName() method should be invoked with css file's name passed as parameter to the function.

```
import { Application } from "@nativescript/core";
Application.setCssFileName("style.css");
Application.run({ moduleName: "main-page" });
```

### Supporting Multiple Screens
As we run same application on different devices. Those devices come with different ratios and sizes. So any framework of mobile application development must provide support for multiple screens. NativeScript is also supporting multiple screen of application development. It has three type of qualifiers:

#### Screen Size Qualifier
All of screen size qualifiers are in Density Independent Principle (DIP) or (DP). Which means physical dimensions of screen. It is assumed that there are 160DP in a screen. For example, according to Android guidelines if a screen has more than 600 DP (~3.75) inches then is considered as a tablet.

While coding too, seprate xml file should be developed by developers for each type of devices. Following is the example which is shown in the main NativeScript v7 documentation.
- main-page.minWH600.xml - XML file to be used for tablet devices
- main-page.xml - XML file to be used for phones

#### Platform Qualifier
As multiple platform is the option of NativeScript. It also support platform qualifier. Following is the example of a css file for two type of platforms available in NativeScript.
- app.android.css - CSS file to be used for Android platform
- app.ios.css - CSS file to be used for IOS platform

#### Orientiation Qualifier
NativeScript supports orientation qualifiers too.
- land - Orientation is in land mode
- port - Orientation is in portrait mode

### Data Binding
Data Binding is binding UI component to data object. Through NativeScript each UI can be bound to a binding source. We can bind a binding source with UI with bindingContext property. Following example is from NativeScript's v7 document ion. Where binding is done to UI component and then it is invoked from code level to manipulate it with business logic.

```XML
<Page class="page" loaded="onPageLoaded">
    <StackLayout>
        <Label text=""/>
    </StackLayout>
</Page>
```

```TypeScript
import { Page, EventData, fromObject } from "@nativescript/core";
export function onPageLoaded(args: EventData): void {
    const page: Page = args.object;
    const source = fromObject({ text: "Hooray! Home Page loaded!" });
    page.bindingContext = source;
}
```

These are the main points about **Application Architecture** of NativeScript. Furthermore, important side notes related to **Application Architecture** is given in **Reference Number [4]**.

## Conclusion
This is my understanding while reading the official v7 documentation of NativeScript framework. Image is also used from the documentation for better understanding. As it is a note, it contains only official information from the official documentation as a summarized composition.

## References
- [1] https://courses.nativescripting.com/p/nativescript-core-getting-started-guide
- [2] https://docs.nativescript.org/tutorial/
- [3] https://v7.docs.nativescript.org/core-concepts/modules.html
- [4] https://v7.docs.nativescript.org/core-concepts/application-architecture
- [5] https://docs.nativescript.org/environment-setup.html