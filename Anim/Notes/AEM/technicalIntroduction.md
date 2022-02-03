# AEM
Adobe Experience Manager as referred as AEM is content management solution provided by Adobe. It is used for building websites, mobile apps and forms. It is an enterprise solutions, which allows author to combine **Content Management System (CMS)** & **Digital Asset Management (DAM)** system altogether.

To handle the system, AEM has provided Author & Publish terminology. It provides an excellent ecosystem, which helps both the developer and the digital content maker work together in a synced process.

## AEM Author & Publish Tier
In AEM terminology, a "Tier" is a copy of AEM environment on AEM as a cloud service. AEM usually involve at least two tiers. One is **Author Instance** & another one is **Publish Instance**.

### Author Tier
AEM Author tier is used to create, upload and edit content to administer the website. Once content is ready to go live, it is published to Publish tier.

This is for the business practitioner,s marketers or authors as people who are managing our sites contents, images or assets. Author environment is going to be maintained by the team who is responsible of develop or maintenance task.

Through Author environment authors can author multiple jobs. These are the some important features available in the environment.

-  Use predefined templates to create new content pages
-  Add new content or edit exiting content on a page
-  Create, edit, and manage assets and collections
-  Move, copy or delete content pages and so on
-  Publish (or unpublish) pages, assets and so on
-  Manage users and user permission based on their role
-  Perform administrative and maintenance tasks
-  Create, manage and run workflows that control how changes are managed
-  Create projects that coordinate individual tasks


### Publish Tier
AEM Publish tier is used to serve the published content to the public. When contents are signed and accepted through authors via Author tier, using Publish tier site visitor can connect through those experience.

Through Publish environment users experience allowed features by authors. With that, user behaviors, sites' activities are also tracked for marketing purposes.  These are the some important features available in the environment.
-  Serves the published content to the public
-  It is user facing environment where visitors can interact with brands and their experience
-  Visitors can sign up, login and manage their site preference
-  Personalized content can be served on publish environment based on user segment
-  User behavior and activities can be tracked on Publish environment

## Content Publishing
AEM provides content publishing on high level. When our business practitioner or author comes to author instance and authors digital assets for new digital experience they make changes. Once they have got the approval for the changes they make, the content will be published to adobe pipeline.

![](https://raw.githubusercontent.com/Anim-101/anim-101.github.io/master/srv/images/Notes/AEM/TechnicalIntroduction/contentPublishing.jpg)

Adobe pipeline plays the most important role in this ecosystem by taking content from author to publish instance. Now, If we have images, audios or vides as these are heavy contents then we don't want those content be going through a queue in pipeline. For those reason, we have Shared Binary Storage. So when a author uploads any of those heavy content then it gets uploaded to Shared Binary Storage. When it is published then it is available in sites. There is also CDN or Load Balancer in front of Publish intance. Which provides some load balancing related solutions with extra caching mechanisms.

## AEM Architecture Stack
As AEM provides one of the most smartest CMS solution in the business, it also needed to come with some combination of smartest technologies.

![](https://raw.githubusercontent.com/Anim-101/anim-101.github.io/master/srv/images/Notes/AEM/TechnicalIntroduction/aemArchitectureStack.jpg)

So AEM combines Apache Felix (OSGI Java Container), Apache Jackrabbit OAK (JCR Repository / Storage Layer), Apache Sling (Web Application Framework) altogether.
Including these frames together, AEM gets content repository, user interface, business process management, security, logging and topology management. With that AEM provides sites, assets and forms to develop digital experience.
Above mentioned software are open source. With those open source applications, AEM also added various properties components. Following components are proprietary components:
-  Granite / Coral UI framework
-  Workflow Engine
-  Translation, localization and internationalization enhancements
-  Asset and Asset Metadata (XMP) Support
-  Marketing Cloud Support
-  Process Offloading Support
-  SAML, oAuth and other Security enhancements

## Java Content Repository (JCR)
JCR is a database but more of a file system which supports both structured and unstructured files. It supports full-text search, indexing, access-control, event monitoring and many more of the powerful processes.
It is a database where contents are saved in a hierarchical format. It was first introduced through Java Specification Request as refer as JSR in 2002. So JCR comes from JSR-170 (first proposed version of JCR). Since then JCR provides APIs for both Java and JavaScript programming language. And concept and principles are maintained by a stable group.And they are based on open standard.

![](https://raw.githubusercontent.com/Anim-101/anim-101.github.io/master/srv/images/Notes/AEM/TechnicalIntroduction/javaContentRepository.jpg)

Thus there is another update which came through JSR-283 in 2005 and another came in 2010 through JSR-333 and continuing till now. Followings are the principles of JCR.
- A common programmatic interface to content repositories
- An API not tied directly to the underlying architecture, data source, or protocol
- Content organization in a repository model-hierarchical modeling
- Implemented by Apache Jackrabbit Oak
- RDBMS Features:
    - Transactions
    - Query
    - Structure
    - Integrity
- File System Features:
    - Binaries
    - Hierarchy
    - Looking
    - Access Control
- Other Good Stuff:
    - Multi-Value Properties
    - Unstructured
    - Ordering
    - Full Test
    - Versioning
    - Observation

So on high level, JCR is a tree level structure. It has two type of items, which are nodes & properties. And this iteam naming conventions should be meaning full. It is not recommended to use id as item name. JCR v2 specification is given in the following reference material's link.
**Reference Material (JCR):** - https://www.adobe.io/experience-manager/reference-materials/spec/jcr/2.0/

## Sling
It is a framework for RESTful web-application based on an extensible content tree. AEM is built using Sling. And Sling is based on RESTful principle for easier content-oriented applications development. It uses JCR and CRX Content Repository from AEM as its data store.
Sling is resource oriented. And resources are maintained in a virtual tree in AEM. Most of those resources are mapped to JCR nodes. So Sling decomposes the URL . Then resolves the resource to be rendered from path (JCR node or contents from CRX Content Repository). And then locales rendering scripts or servlet to process the resource.

![](https://raw.githubusercontent.com/Anim-101/anim-101.github.io/master/srv/images/Notes/AEM/TechnicalIntroduction/apacheSlingURLDecomposition.png)

This image shows how sling decomposes an URL with a request. In first step, URL is decomposed through Sling. And then content resolution starts. Unlike JSP, Sling doesn't go and find the script first. Instead of it, Sling goes and find the content first in repository.
So summarizing it, Sling takes the URL and goes to content repository to identify whether the path exits in repository or not. And if that path exits, the it will find a property called **Sling Resource Type**. A every content from the content repository must have this information. And this resource type is the identifier to Sling for what type of scripts or components that are required to run.
So it will go to either apps directory or lib directory in AEM. And apps directory got the higher precedence and if it doesn't find appropriate results in apps directory then it goes to libs directory.
Once it finds required content then it will re-check with the selectors and compare to identify whether it is right script or nor. And then it will rendered the content in the requested format based on the URL. Sling's specification is given in the following reference material's link.
**Reference Material (Sling):** - https://sling.apache.org/documentation/the-sling-engine/url-decomposition.html

## OSGI
OSGI is the fundamental element of AEM Architecture Stack. it is set of specifications that defines dynamic component system of Java. It means it defines modular development of Java appliation.
OSGI is used to build highly complex applications like eclipse idea, glassfish, JBoss and many industrial framework or automation type of applications, etc.
In OSGI components are packaged as bundles. So using it, AEM supports modular deployment of bundles. Thus it is used to control of composite bundles and their configuration. It enables to application development from smaller, reusable and in collaborative components. And it interacts using service interfaces.
Bundles are independently developed and deployed because of the bundle deployment features. Also bundles can be installed, started, stopped individually. Inter dependencies between modules are automatically handled. So as a summary, following are benefits of OSGI integration in any software architecture.
-  Each OSGI components is contained in Bundle
-  Bundles are independently developed and deployed
-  Bundles can be installed, started or stopped individually
-  Bundles and their services may appear or disappear at any time
-  Inter dependencies between modules are handled automatically
-  Used to control the composite bundles of AEM and their configurations
-  Enables applications to be created from smaller, reusable and collaborative components

![](https://raw.githubusercontent.com/Anim-101/anim-101.github.io/master/srv/images/Notes/AEM/TechnicalIntroduction/osgiArchitecture.png)

In architecture level, OSGI uses native operating sytem & JVM (Java Virtual Machine) in the very bottom. And on the side it has bundles. Which are OSGI components that are made by developers. Service layer connects with bundles in dynamic ways by offering publish bind model for plain old java object.
Execution Environment defines what classes and methods are available in specific platforms. Modules define how a bundle should export or import a code. Life Cycle is an API to update, start, stop, install, uninstall a bundle. And the Security is the layer, which handles security aspects.

## Dispatcher
Dispatcher is AEM's caching and load-balancing tool. And it's most important task is to cache responses from AEM's published instances. Lot of the site contents are always going to be static. Those are needed to be cached and directly rendered from the servers not from the published instances. And this is the main reason of the existence of dispatcher in AEM.
But it is also used as Load Balancing tool. When a system has multiple published instance then dispatcher works as load balancing tool. Which helps responsiveness of a site. And it helps any security thread from external sites. Following are important features of dispatcher.
-  Converts dynamically published content to static HTML, served by static web server
-  Caches static assets
-  Content can be flushed by a built-in AEM Replication Agent
-  Environment is fast and dynamic
-  Is a web server plug-in available for Apache and Internet Information Server (IIS)

![](https://raw.githubusercontent.com/Anim-101/anim-101.github.io/master/srv/images/Notes/AEM/TechnicalIntroduction/Dispatcher.jpg)

This is dispatcher's module architecture. Following are the features of dispatcher's load balancing.

- Increased processing power
   - Shares document requests among several instances
    - Reduces the response time
    - Maintains internal statistics for each document category
    - Estimates the load and distributes the queries efficiently
- Increased fail-safe coverage
    - Relays requests to one of the other instances automatically
    - Slows down the site proportionate to the computational power lost
    - Manages different websites on the same static web server

## Conclusion
This is the very start of AEM. It is a vast technology which needs many more explanation to justifiably spread it's knowledge. In this introductory part, I have tried to explain what I have learned through the **Business Practitioner Training**. I believe this document has helped reader understand what was conveyed in official videos.

## Reference
- All of the pictures were taken while watching the videos from AEM official sites. It would help reader to understand while watching those picture, this is why pictures are saved in this documents.
