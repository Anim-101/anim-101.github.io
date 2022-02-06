# AEM Basic Authoring Capabilities Part: 1

In previous section we have learned some technological aspect of AEM. Now it's time to get some hands on experience.

## AEM Create, Edit and Delete Pages

To create, edit and delete pages we can use AEM touch based UI. If AEM instance is installed as on-premise solution then we can use old UI. But in AEM as Cloud Instance only touch based UI is available.

![](https://raw.githubusercontent.com/Anim-101/anim-101.github.io/master/srv/images/Notes/AEM/AuthoringCapabilities/createEditDelete.png)

We can edit a page. And from the attached image edit modes are visible for a page. By edit mode, page can be edited. By layout mode, page can be visualize based on how it appears and where it appears. By developer mode, we can see the template and it's components which build the pages. By timewarp mode, we can see what other author has done in the page in different timelines. By live copy status, author can visualize live copy updates in a page if this page has reference of components from other pages.

Also there is a preview mode beside the edit mode. Which will let us visualize how our authored websites will be looked like to our end user. Now aside from editing and previewing a page, there is a create mode. While creating a page becomes necessity, authors can create page using it.

Creating a new page, author can reference a template which already exits in AEM templates. And while the definition comes of creating and editing, there comes deleting also. So as it is shown in the attached image, author can delete a page also. But all of the user as AEM authors can't delete a page, a permission is required.

### Roles

To work on AEM several roles are categorized. Roles based permission provide authoring capabilities, editing site and publishing it to target user. Following are the available roles in AEM Authoring Capabilities.

- **Author / Marketer:** Human resource of this role can edit a page, add contents based on requirement. They use template to edit a page. But template is pre developed by developers.
- **Developer:** Developers decides every page components based on requirements. It is up to them whether what type of experience fragments they want to use in footer or what type of experience fragments they want to use in header. It is based on their template making, Author can add images, other necessary contents to the web page.
- **Super Author:** Super authors are not only expert in AEM but also they understand duties and market roles of marketer. They also understand the designs. Which means they understand what type of branding are necessary in a web application. They are the one who talk to developer and provide requirements for development.

![](https://raw.githubusercontent.com/Anim-101/anim-101.github.io/master/srv/images/Notes/AEM/AuthoringCapabilities/authorSuperAuthor.png)

So author uses the template and add required contents in it. Developers develop templates. And super authors understand the requirements, ask developer to change components or entire template based on needs and can edit the templates.

### Layout Containers
WKND is the best version of AEM reference site which can be easily installed in aem instances. So we can use this site to model our own site. Following is the sample image of WKND site when it is installed and loaded in AEM instance.

![](https://raw.githubusercontent.com/Anim-101/anim-101.github.io/master/srv/images/Notes/AEM/AuthoringCapabilities/wkndSite.png)

On the left side of this image there is components such as *Accordion*, *Breadcumb*, *Button* etc, etc. These are the components developers drag in the layout to assemble a web site. So author or developers drag those component in the site and keeps in a place where components are placed. It is called as layout container. And this layout container can be used by activating or clicking layout mode.

So as explained before developer or author can drag components of in the layout container. And super authors not only able to drag those components, but also develop as like as develop for required necessities. So styling can be added and components can be dragged by authors based on what developer or super author has provided for a certain page to be edited.

Which makes AEM a powerful ecosystem. Once developed then it can be referenced and then super authors can restrict those drag and drop capabilities for target authors or for developers. And it makes re usability at it's core. And another important thing is layout containers are responsive design. Responsive layout for a mobile device is totally going to be different than a responsive layout for a iPad.

## AEM Tagging

There are many benefits to implement comprehensive tagging system inside of AEM. There are lots of benefits of AEM Tagging system. It is an easy way to classify a web content. Using tagging we can search and find things much more easier and we can use these information in all kind of matrix, analytic related stuffs.

![](https://raw.githubusercontent.com/Anim-101/anim-101.github.io/master/srv/images/Notes/AEM/AuthoringCapabilities/aemTagging.png)

As image included the fact that AEM can also automatically tag our uploaded digital assets using an artificial intelligence as refereed as Adobe Sensei. But we also can tag assets manually. And custom smart tags are used based on provided information. So we can tag any image and it it will automatically tag that image and along with it we also can add our own smart tag. For example if we want to tag a image as a cat. And then we want to AEM tag cat photos in cat category. Then basically we can train Adobe Sensei using custom smart tags feature.

So we can tag assets using smart tags. Also we can train smart tags to tag specific images in certain categories. Furthermore, we also can tag for videos as well using the same structure as assets. Or we can manually tag contents of web pages for what the requirement of tagging is.

Following image shows creation process of AEM Tagging. First we need to go to tools. Then from that place we need to go to *tagging* option. Then we go to create option and select *create namespace* and it will create a tagging section as namespace. Then we select this namesapce and then click on *create tag*.

![](https://raw.githubusercontent.com/Anim-101/anim-101.github.io/master/srv/images/Notes/AEM/AuthoringCapabilities/createTagging.png)

A tagging component will open. We add tagging options. Let's say our lagging's name is **biking**. We provide the name of it and also add description if needed in the component. Then our first tag as **biking** under **Adventures** name space is created

## AEM DAM (Digital Assets Management)
DAM stands for digital assets. Now what is digital assets? It is nothing but digital documents, images, videos, files, pdf etc etc. Also these assets can have multiple renditions. Renditions can be for thumbnails, phones, ipads or other available interactive devices. In AEM, assets can be added and directly interact from adobe creative cloud.

So generally assets are binary format of files of different formats. But we also can add metadata to those binary files. As we have discussed about AEM Tagging in previous section, it is point to be added that using binary metadata custom tagging manager can retrieve similar assets based on same tags.

DAM can be usable in different places through AEM. It can be used in marketing cloud. Using Adobe Target, specialists can optimize and create personalized experienced for users. They can retrieve assets for their specialized solutions from marketing cloud. And it is possible because of connecting DAM with marketing cloud.

Also using sensei technology DAM's assets can be smartly cropped. It is important for smart renditons. Using smart cropping, assets can be used in ipads, web sites, phones at the same time. Same can be done with tagging too. Using sensei technology smart tags can be used for tagging assets more dynamic ways.

Now to upload assets in AEM, we can upload assets using AEM UI and and upload those assets. But what if we need to upload a batch files with large size. Which can be time consuming. For this, Adobe has provided **WebDAV** to access AEM assets in a smart way.

## Conclusion
Authoring capabilities are main topic of AEM. Writing about authoring capabilities in one note can not be finished. It will be better if we store information as sections. In this section, we have learned very basic authoring capabilities. In next section we are going to be learning templates and many more authoring capabilities.
