# AEM Basic Authoring Capabilities Part: 2

In previous section we have learned different type of authoring capabilities of AEM. In this section too we are going to continue learning process.

## AEM Template
Developers create template. So a template is specified to certain things which are required to be added if this template is being used. For example, selecting a template means there might have specified that a head or a footer for that template is must. Or if a template is designed to have navigation system then navigation system is must to be added in every single page that use this particular template. A template also contain layout system. By which authors can drag and drops components. And developers always setup all of these criteria in a template.

Authors just go in and edit existing templates. They can choose where controls are actually allowed to be added in. They can create new templates and add permission to certain templates for certain authors. But allowing these permissions to all authors can become uncontrollable. So most of the cases super authors do these type of permissions and creating new templates related work. And hold power to give permission to certain authors to do certain type of authoring. They also control policies and use style system to create block styles in those templates.

So super authors' roles are powerful. Generally they work in a conjunction with developer. It is a good practice to create as few templates as possible. But giving template creation power to super author allow reducing workload of developers. They can drag and drop components to layout in a template.

Components are costumed to a template. AEM does provide out of the box components which are very useful for a template. Those basic components are available for every type of templates that developer builds. But sometimes based on business requirements new type of components become necessary. Thus developer or super authors can develop new components for particular template. From AEM side, creating new components are always not preferable. As per business requirement it seems that almost every page requires few to many customized components.

But from AEM we get lots of components, so it is good for developer to understand those pre-built components before setting components in new way. Because AEM provides powerful solutions so reinventing the wheels are not required. As all of the components are highly customize able, all of the JSONs can be used as headless solution. And it really becomes a very powerful ecosystem.

## AEM Author Email
Authoring to send email through touch based UI is pretty much dependent task. Following is the image from AEM site where workflow is visalized.

![](https://raw.githubusercontent.com/Anim-101/anim-101.github.io/master/srv/images/Notes/AEM/AuthoringCapabilities/authorEmailWorkFlow.png)

Lets say we have a content author to create a simple Adobe Experience Manager page. For that content author needs to select a template. And content author edits the page as per requirements. At the same time, Auth can also add an Adobe Campaign Cloud service on this page. Then Adobe Campaign will deliver all the channels which needs information from this authored page. Also using Adobe Campaign Cloud service will allow content author to have all required variables available directly inside in AEM.

## AEM Launch
AEM Launch allows us release our future version of web in parallel with current version's release. It is really powerful in the case of developing future releases in the mean time when we are developing or running present cycle of released products.

For example, let's say we have a cycling website. We must provide winter cycling gears in our page which are needed by users in winter season. At the same time we should think and design our page for summer season and spring season. Using AEM launches we would be able to set pre-deployment of those pages. So that when a season changes our web page can get changed and become more interactive to users.

![](https://raw.githubusercontent.com/Anim-101/anim-101.github.io/master/srv/images/Notes/AEM/AuthoringCapabilities/aemLaunch.png)

In AEM server as Author environment, authors create launch from the production pages and source pages. Production pages are published to publish environment. Creating launch will allow to have multiple launch copy to authors to edit those page. Re promote those pages to production pages and then it gets to publish environment.

It is really handful technology for sites like retailer websites. When those sites try marketing based on seasonal shopping contents, using launch they can process multiple development processes of pages at the same time. And the beauty of AEM is that publishing in publish environment can be done either manually or automatically. Using timeline functionalities, after developing source pages in launch copy authors can set auto launch based on their target timeline. Also there can be nested launches. Following is the image of nested launch of AEM.

![](https://raw.githubusercontent.com/Anim-101/anim-101.github.io/master/srv/images/Notes/AEM/AuthoringCapabilities/aemNestedLaunch.png)

## AEM Versioning & Timewarp
AEM provides smart versioning of web pages. When we click for a versioning in AEM, it takes snapshot of the page at that particular time. And if already some version was created, then those list can be seen using AEM versioning. It allows to visualize page based differences which has occurred at different versions.

Not only the comparison but also if we need revert to the previous version then it is also possible using versioning. And it becomes more significant because we can preview it. Which makes it useful to make any unwanted differences in the versions.

When a page is deleted AEM automatically takes a version of this. So that author can preview later if it is needed. It might be a good solution but it becomes more storage weighty and it makes performance related issues when we we have more pages to control. So author can turn off this auto versioning features.

As powerful as it sounds it is, then there is should be a question that how useful page difference comparison view should look like? Well, following is the example from the main site which shows page difference comparison view using AEM Versioning.

![](https://raw.githubusercontent.com/Anim-101/anim-101.github.io/master/srv/images/Notes/AEM/AuthoringCapabilities/aemPageComparisonDifferentialView.png)

Watching this image of a pages from two different versions, it is easily visualized that in right hand side's page wknd logo, menu bar and search option is not available. There might be some problem in that version. Thus it showcases how important page comparison different view can be. So following are the important key feature from page comparison different view.

- **Diff View**
    - Provides a single page or side by side view of content.
    - Provides visual emphasis on content differences
    - Enable quick access to what has changed in iterative authoring process
    - Detects changes to
        - Components
        - HTML
        - Links
        - Images with different IDs

Page comparison diff view can be accessed from multiple sections. Following are the list of multiple entry points.

- **Multiple Entry Points**
    - *Versions*: Earlier versions vs current state
    - *Launches*: Launch vs Source
    - *Live Copies*: Live copy vs Blueprint
    - *Language Copies*: After and Before (re) translation

On the other hand,  AEM Timewarp allows functionality which is slightly different than versioning. It allows author & developer to visualize a page content based on a timeline. Which make author to visualize what type of changes has deployed over the time. And it make this feature powerful too. We just specify a date and if this site was deployed before that date, we can see the page status on the specified date.

## AEM Responsive Design
AEM provides responsive design functionalities. It means if we create a page on AEM, it will smoothly run different type of devices. Such desktop, android, laptop, ipad etc etc. Design will look fine in all over those screens and it will automatically change it selves. It will auto recognize agents, and what type of devices are being used to access the page.

AEM fully supports responsive design. Responsive design in AEM is based on different tenets, such as:
- Dynamic CSS
- Flexible Images
- Fluid Grids

## AEM Page Properties
Page properties can be accessed by the touch optimized UI. It contains following features with it.

- Name and Information about the pages
- On/Off time and vanity URLs
- Design associated with the page
- Permissions for the page
- Cloud services that the page connects to

## Conclusion:
In these two series of Basic Authoring Capabilities, we have been introduced to main authoring interface. Traversing through all of the building block of authoring, it can be said that now we are ready for advanced topic. AEM has diversity in it's technology stack. Basic Authoring Capabilities only contained the starting authoring contents which should be studied to proceed through next step.
