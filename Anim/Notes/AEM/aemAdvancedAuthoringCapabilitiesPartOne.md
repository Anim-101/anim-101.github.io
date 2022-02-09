# AEM Advanced Authoring Capabilities Part: 1
In previous sections we learned about some of the very basic authoring capabilities which are available in **Adobe Experience Manager**. As we have leveled up we need to progress through our learning and continue with some of the advanced available topics.

## Experience Fragment
An experience fragment is a fraction of a website. It can be group of one or more than one components. It includes content, layout and all of the design aspects which are available in a web page. It can be reused, resized, restored across many different web pages in a same web site.

One of the live example of Experience Fragment can be when we load the wknd site we automatically get *header* and *footer* section already loaded up. These are the Experience Fragment. Which means one Experience Fragment are to be used in multiple different pages on a site.

It can have different variations. So size of a site's component can be different based on different devices. It is obvious that mobile device will not have same size of components which are available for iPad. So Experience Fragment also can be dynamic based on components across the available devices.

One of the very important information about Experience Fragment is it is based on Template as like as other regular web pages in AEM. Which are connected to pages and components can be used in it. And Super Author authors these templates.

## Building Blocks
Building Blocks is a powerful functionality of Experience Fragment. Because we can select sets of components or a component and then reuse it across to other Experience Fragment. For example let's say that we have one image, one button and one hyper link in a page. We can select those all together as component and using Building Blocks we can use those in another Experience Fragment.

We also can use one Experience Fragment's component as Building Blocks in to it's variations. And what makes it more powerful is that it will not work only with same template type's Experience Fragment. No, It will work across the other available template type in AEM.

As it can be used it in Experience Fragment's variations, we also can ungroup component from building block and re adjust components, add component and then use it it in the variations. Which allows to use same components to be used in variations and author can upgrade those Building Blocks based on device's requirement in the same time.

## EF to Adobe Target
In last two sections we have already figured it out how important Experience Fragment for developing a website in AEM. Based on different type of variations author can target the audience. Let's say we design a web page based on a continent of the world, it may not become well known in another continent. It is obvious as there are cultural differences.

As Author uses Experience Fragment and keeps versioning of it in web pages, then how author can target an Experience Fragment to certain  audience. Here comes the importance of another important feature of Adobe Experience Manager. Following is the image of Experience Fragment to be used with Adobe Target.

![](https://raw.githubusercontent.com/Anim-101/anim-101.github.io/master/srv/images/Notes/AEM/AuthoringCapabilities/publishExperienceFragmentsToAdobeTarget.png)

So content creators as Authors create, update, make variations or building blocks of Experience Fragments as per requirements for different audiences. Then AEM optimization specialists target as personalize those Experience Fragments. Using Adobe Target, it becomes more powerful as users all over the world can experience different sectors of websites and managing this solution becomes easier for Authors and optimization specialists.

## Content Fragment
Content Fragment are sets of dataset in AEM. It can be said that a schema defined data. Thus to handle it a defined data structures is necessary. As content can be different type of data (string, boolean, integer etc etc. For this reason a data model is required for a similar set of data set. And in AEM it is known as Content Fragment Model.

There is a Content Fragment Model Editor UI available to make schema or add contents after defining the models in AEM. Defining the model and adding content may sound easy but there are few roles paired in this work. Following is the image who are involved directly or indirectly to Content Fragment Model editing.

![](https://raw.githubusercontent.com/Anim-101/anim-101.github.io/master/srv/images/Notes/AEM/AuthoringCapabilities/workingWithContentFragments.png)

First, an Information Architect defines the schema or structure of contents to be added. Using Content Fragment Model Editor UI, a Content Author creates content to be added. Using those content, an AEM Developer develop AEM website. Apart from using contents in AEM website, AEM developer export those content in JSON format.

So then using those JSON, independent web or mobile developer can be able to use those content in mobile applications or SPA (Single Page Application).

## Conclusion
Covering up advanced authoring capabilities in one note would become little bit hard. As like we have covered basic authoring capabilities in 2 segments. It shall continue in the case of advanced authoring capabilities. In next part we will traverse more on Content Fragment and related authoring capabilities.
