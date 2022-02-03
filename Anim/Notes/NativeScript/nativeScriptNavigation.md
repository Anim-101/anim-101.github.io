# NativeScript Navigation
Navigation is the act of moving around on screen. Without navigation, there is no way to go up and forth in an application. Each mobile application has it's own way of navigating through screens.

There are three distinct navigation directions that a user can navigate through the screens.
- **Forward**: It represents to navigate through a screen on the next level in the hierarchy.
- **Backward**: It represents to navigate through a screen either on the previous level in the hierarchy or chronologically.
- **Lateral**: It represents to navigate between screens which are on the same level in the hierarchy.

Now we need to focus on how we can implement those navigation in a NativeScript application.

## Forward Navigation
Following image is attached from v7 documentation for better visualization. As forward navigation is navigating through screens which are in next level from hierarchy, it can be called downward navigation too.

![](https://raw.githubusercontent.com/Anim-101/anim-101.github.io/master/srv/images/Notes/NativeScript/NativeScriptNavigations/forwardNavigation.png)

In NativeScript, there are two components to enable implementing forward navigation. One is **Frame** and another one is **Page**. A **Frame** represents as a navigation controller that navigates through **Page** instances.

![](https://raw.githubusercontent.com/Anim-101/anim-101.github.io/master/srv/images/Notes/NativeScript/NativeScriptNavigations/forwardNavigationDiagram.png)

### Page
Page is a screen which user can navigate through. It is basic component of NativeScript. It holds single UI component of a screen and at the same time it provides navigation life cycle events.

As described in **Reference [1]**'s documentation, a Page component can be developed as a child of another component. It is used as a root component a module. Thus a module of Page as component becomes a Page module. Follwing is the code segment taken from the v7 documentation of implementing a Page with NativeScript framework.

```XML
<Page loaded="onPageLoaded">
    <ActionBar title="Item" class="action-bar"></ActionBar>
    <StackLayout>
        <Label text="Item Details"/>
    </StackLayout>
</Page>
```
```TypeScript
import { EventData } from "@nativescript/core";
export function onPageLoaded(args: EventData): void {
    console.log("Page Loaded");
}
```
There are four specific events related to Page triggeres when a Page is being navigate to and from. Following is the list which is also available in **Reference [2]**.
- *navigatingTo* - This event is triggered when entering a Page. The navigation just has started.
- *navigatedTo* - This event is triggered when entering a Page. The navigation just has ended.
- *navigatingFrom* - This event is trigerred when leaving a Page. The navigation just has started.
- *navigatedFrom* - This event is triggered when leaving a Page. The navigation has ended.

Details related to Page is given in **Reference [2]**. To grasp more understanding related to Page, reader should go through the explanation from referenced link.

### Frame
With Frame component, we can navigate through Pages in NativeScript based mobile application. This is the actual provider of forward and backward navigation in NativeScript. But it doesn't have any visible representation. It is like a container which allows transitions among Pages. It also provides navigation **API** which let developer manipulate history and setting custom navigation transitions.

For basic forward navigation we need these two features:
- defaultPage attribute: Using this attribute we can declare the initial Page module that is displayed.
- navigate() method: Using this method we can force a navigation to another page module.

Following code example is taken from v7 documentation to set an example of a frame which is declared in app-root module. During load, Frame will automatically navigate to the feature-page module. And feature-page module in turn has a button that navigates to the item-page module.

```app-root.xml
<Frame id="featured" defaultPage="featured-page" />
```
```featured-page.xml
<Page>
    <ActionBar title="Featured" class="action-bar"></ActionBar>
    <StackLayout>
        <Button text="navigate('item-page')" tap="onTap"/>
    </StackLayout>
</Page>
```
```featured-page.ts
import { EventData, Button, Page } from "@nativescript/core";
export function onTap(args: EventData) {
    const button: Button = <Button>args.object;
    const page: Page = button.page;
    page.frame.navigate("item-page");
}
```
This navigate method also accepts NavigationEntry object. Following is the list of navigation entry object which are available in Frame in NativeScript.
- **animated** - It is True to navigate to the new Page using animated transition, false if opposite.
- **backstackVisible** - It is True to record the navigation in the backstack, False if opposite. If parameter is set to false the nthe Page will be displayed but once navigated from it will be able to be navigated back to.
- **bindingContext** - It is optional. It is an object to become the binding context of the page navigating to.
- **clearHistory** - It is True to clear the navigation history, false if opposite. It is very useful when navigating away from login pages.
- **context** - It is an object, passed to onNavigatedTo callback of the Page. This is used to pass some data among pages. It is also an optional property.
- **create** - It is an optional function. Which is used to create the view instance.
- **moduleName** - It is an optional property. It holds the name of the module containing the view instance to load.
- **transition** - It specifies an optional navigation transition for all platforms. It it's not specified, the default platform transition will be used.
- **transitionAndroid** - It specifies an optional navigation transition for Android . If not specified, the default platform transition will be used.
- **transitioniOS** - It specifies an optional navigation transition for iOS. If not specified, the default platform transition will be used.

Following is the code example of NavigationEntry object.
```TypeScript
const frame = getFrameById("my-frame-id");
const navigationEntry: NavigationEntry = {
    moduleName: "home/second-page",
    context: { info: "something you want to pass to your page" },
    animated: false
};
frame.navigate(navigationEntry);
```
Frame holds importannce of NativeScript framework's UI transition. v7 documentation provides a very detailed explanation and code example for every required details. Readers are reffered to **Reference [3]** for further studies and hands-on code example.

## Backward Navigation
Navigating pages backwardly, which also can be described as upward navigation. Since we are going up to our navigation hierarchy. It is opposite of forward navigation and fully supported by Frame API. To go back to previous page, Frame calls **goBack()** method.

![](https://raw.githubusercontent.com/Anim-101/anim-101.github.io/master/srv/images/Notes/NativeScript/NativeScriptNavigations/backwardNavigation.png)

Follwing is the code example from v7 documentation of backward navigation of a page called item-page.

```item-page.xml
<Page loaded="onPageLoaded">
    <ActionBar title="Item" class="action-bar"></ActionBar>
    <StackLayout>
        <Label text="Item Details"/>
        <Button text="goBack()" tap="onTap"/>
    </StackLayout>
</Page>
```

```item-page.ts
import { EventData, Button, Page } from "@nativescript/core";
export function onPageLoaded(args: EventData): void {
    console.log("Page Loaded");
}
export function onTap(args: EventData) {
    const button: Button = <Button>args.object;
    const page: Page = button.page;
    page.frame.goBack();
}
```

## Lateral Navigation
Lateral Navigation means to go through difference instances of the Frame components and provide interface to the user to switc between those components. These are usually enabled through specific navigation components. Which includes **BottomNavigation**, **Tabs**, **TabView**, **SideDrawer**, **ModalView** and **Frame** which provide an unique mobile navigation patterns.

![](https://raw.githubusercontent.com/Anim-101/anim-101.github.io/master/srv/images/Notes/NativeScript/NativeScriptNavigations/lateralNavigation.png)

There are few ways/patterns to navigate as lateral navigation. Bellow as an explanation and understanding from v7 documentation to go through those patterns.

### Hub Navigation
Hub Navigation is more of like a forwad navigation of lateral navigation. It consist of a screen called a hub that holds navigation buttons leading to different features. In NativeScript we can implement it with a Frame and having a page to serve as hub screen.

![](https://raw.githubusercontent.com/Anim-101/anim-101.github.io/master/srv/images/Notes/NativeScript/NativeScriptNavigations/hubNavigation.png)

Following is the code from v7 documentation which shows implementation of hub navigation.

```hub-page.xml
<Page class="page">
    <ActionBar title="Hub" class="action-bar">
    </ActionBar>
    <StackLayout>
        <Button text="navigate('featured-page')" tap="navigateToFeatured" />
        <Button text="navigate('browse-page')" tap="navigateToBrowse" />
        <Button text="navigate('search-page')" tap="navigateToSearch" />
    </StackLayout>
</Page>
```
```hub-page.ts
import { EventData, Button, Page } from "@nativescript/core";
export function navigateToFeatured(args: EventData) {
    const button: Button = <Button>args.object;
    const page: Page = button.page;
    page.frame.navigate("featured-page");
}
export function navigateToBrowse(args: EventData) {
    const button: Button = <Button>args.object;
    const page: Page = button.page;
    page.frame.navigate("browse-page");
}
export function navigateToSearch(args: EventData) {
    const button: Button = <Button>args.object;
    const page: Page = button.page;
    page.frame.navigate("search-page");
}
```
### Bottom Navigation & Tabs Navigation
Bottom Navigation & Tabs Navigation allows us to arbitrarily navigate between several UI containers at the same level of hierarchy. An important feature of this components are that they keep state of the containers that are not visible. Which means when an user comes back to previous tab, data and scroll position of navigation state remain as it was when user left the page.

![](https://raw.githubusercontent.com/Anim-101/anim-101.github.io/master/srv/images/Notes/NativeScript/NativeScriptNavigations/tabViewNavigation.png)

## Conclusion
Navigation is one of the main block of application. Without navigation options user interaction would feel invalid. As a framework, NativeScript provides important navigation features to developer so that we can our desired application. This note is based on learning of official documentation. Please follow the reference to learn more concretely.

## Reference
- [1] - https://v7.docs.nativescript.org/core-concepts/navigation
- [2] - https://v7.docs.nativescript.org/ui/components/page
- [3] - https://v7.docs.nativescript.org/ui/components/frame
