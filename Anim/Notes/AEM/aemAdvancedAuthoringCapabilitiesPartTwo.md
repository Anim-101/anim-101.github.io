# AEM Advanced Authoring Capabilities Part: 2
In previous sections we learned about some of advanced authoring capabilities which are available in **Adobe Experience Manager**. Let's go through other topics as well.

## Content Fragment Editor
Content Fragment allows us to create experiences. It is a process to move contents from author to AEM site. It doesn't provide any css nor any UI data. It just allows us to input content so that it can be visualized in AEM site. Though for content addition, it provides a good UI, so that Authors can easily add content to the AEM site.

When authors done providing the content using Content Fragment Editor, we as the developer can output those data through HTTP API. Authors' uploaded content can be output as JSON through the HTTP API and bulk delivery it to Angular web apps, React web apps , SPAs, IOTs, mobile apps and more.

Which means uploaded content not only will be consumed in AEM but also it can be channeled or outsourced in different stacks. Thus it makes this solution as a headless solution. Isn't it sounding like AEM should be a Hybrid of CMS? Yes, it is. Following is the image of AEM being a Hybrid CMS.

![](https://raw.githubusercontent.com/Anim-101/anim-101.github.io/master/srv/images/Notes/AEM/AuthoringCapabilities/hybridCMSAEM.png)

Authors do provide content using AEM. Which can be shown in our sites or screens or forms or SPA editor. It is obvious and it is what we have been knowing from the start of writing notes. But allowing a REST API to channel those contents in other applications makes it powerful as it becomes Hybrid CMS.

## Content Service
In previous sections, we have talked about Information Architect making schema via Content Fragment Model so that those content can be added based on the schema. And In another previous section we also learned that Author add content based on those schema, using Content Fragment Editor.

![](https://raw.githubusercontent.com/Anim-101/anim-101.github.io/master/srv/images/Notes/AEM/AuthoringCapabilities/aemContentServices.png)

As we have discussed before we can channel out the content using REST API then who does these things and how they do it? Well, it is a work of AEM Developers and web producers. They have development rights to outsource content based on requirements. It can be through HTML or JSON. Either way, data will be passed. And it is what called as Content Service.

## Bulk Activation and Workflows
Bulk activation simply select all definitions and options required for publishing a page tree. We just select a top level of tree and then we click on 'Manage Publication' and we can see all of the publish references then we can either chose those at the moment we are clicking through or schedule an appropriate timing to publish.

Which makes it really very powerful. Because we can activate and publish multiple pages through Bulk Activation. Off course we can click on publish and publish one page at a time. But using this feature, multiple publication becomes easier and handy.

![](https://raw.githubusercontent.com/Anim-101/anim-101.github.io/master/srv/images/Notes/AEM/AuthoringCapabilities/aemWorkflow.png)

And with workflow in AEM, we can manage different processes such as managing resources, publishing content and more. As Author can publish contnet based on roles and authorities. But a developer is always required to do jobs which don't come from out of the box features in AEM.

There are certain level of tasks which might be required and become handy to use, Authors can requests those features to be added using workflows. For example, automatically activating a page, sending an email message to target users or Authors etc etc,

Using Workflow, developers can make dynamic solution. Because Workflows can interact with assets in the content repository, user accounts and other AEM services. Which really makes Authoring easier for Authors.

## Template Editor
As we have discussed before that in AEM implementations there are different type of roles. One of the most important role is for developers. Now adobe makes it easier for developers by providing lots of out of the box features when AEM gets installed as an instance.

Out of those contents, many standard templates, components, layout containers are auto loaded as out of the box. Then developer edit or customize those based on project requirements. They make sure whether those fits in required web applications or not, they provide size. They generally edit or updated or add more content features to Authors, so that they can add contents and assets in it.

![](https://raw.githubusercontent.com/Anim-101/anim-101.github.io/master/srv/images/Notes/AEM/AuthoringCapabilities/aemRoles.png)

It is developer duties to ensure whether whole web app's functionalities are working properly or not. On the other hand, an Admin role decides the access right. Because by default we don't want to provide every type of access to every type of Authors or even developers. They may be or may not be developers. But they do have in depth knowledge of AEM. They have been working in AEM for a long time, so it is up to them to give access rights to proper person.

Admins are usually a super user or power user. As they have many rights, they also able to edit or create templates for a web app based on what developer has asked as per requirements. They can create policies, use of the component in a page, look in the fields, they have all kind of powers which really simplifies things. Because Author as content creator and uploaders don't need to go to developers and keep bragging about updates.

Back in the old days, AEM had static templates. Which only could be developed and edited by developers. It became such overwhelming tasks as developers needed to focus all of the tasks, then Adobe has added editable templates. It was AEM customer's request which made this features available along with static templates. Following is the differences between Editable Templates and Static Templates.

![](https://raw.githubusercontent.com/Anim-101/anim-101.github.io/master/srv/images/Notes/AEM/AuthoringCapabilities/editableAndStaticTemplates.png)

So as it is shown in the image, Template Authors do edit and create the templates. But here is the thing, Template Authors can not be everybody. As per development, we need to maintain a standard number of authored template in AEM project, thus certain group of Template Authors are required.

Admin as Template Authors create those templates. And using those created template Authors add content in a page. To do so, Template Editor is needed. Because without template editor, page can't be dynamically designed by Template Authors. From the very first discussion to till now we have seen roles and work based on those roles. In the end, what we have understood is Editable Templates are designed and developed by Template Authors. And using Template Editor, they dynamically handle the process. Which mean, they can add policies, add css, design based on required specifications.

## Data Layer
A Data Layer is important for gathering information of users who surf through our websites. We can use these data from Data Layer to Adobe Analytic. So that we can easily analyze it. Following is the functional diagram of Data Layer from AEM Official Webstie.

![](https://raw.githubusercontent.com/Anim-101/anim-101.github.io/master/srv/images/Notes/AEM/AuthoringCapabilities/aemDataLayer.png)

If we look at the diagram, Using Data Layer we can get user's basic agent string, URL, basic request parameters, custom cookies, page details etc etc. The we can leverage this Data Layer for everything from AEM Audience Manager for audience segmentation, AEM Target for personalaization, AEM Analytic for analytical works, etc etc. And what Data Layer does is manage different input to channel into targeted solution in AEM. It adds custom code to parse to manipulate and to modify these Data Layer elements.

For every architecture DTM as refereed as Data Layer is very important. Using Adobe Launch DTM is managed and launched. Each page needs to have a Data Layer. And one option for Data Layer is using context hub. It is a framework for manipulating user data. It also allows marketer to simulate what users will see.

But there is a problem with Context Hub. It is a heavy solution. But it does all most everything a Data Layer should have done. In many cases we don't need this UI if we are just only tracking user data. So there are much more light weight options available. Which can become much more useful. Following is the GitHub link of Data Layer:
- **Adobe Data Layer:** https://github.com/adobe/adobe-client-data-layer

## Conclusion
We have discussed very advanced topics in our part one and part two series of advanced authoring capabilities section. These are very high informative topics. Reading these notes can be overwhelming. But I believe hands on experience will make these topic more easier. So hands on try is the best recommendation after reading these notes. Thank you very much to the reader for reading it.
