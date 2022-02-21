# Introduction to Cloud Acceleration Manager
Cloud Acceleration Manager is an online application that is designed to be able to help in evaluating and assessing in term of AEM Implemented and plan to smoother move to AEM as a Cloud Service. Depending on requirements and customization starting from assessment to seting up, implementing, optimizing as whole migration of the system are done using AEM Cloud Instance. And Cloud Acceleration Manager is designed to help us throughout this journey.

![](https://raw.githubusercontent.com/Anim-101/anim-101.github.io/master/srv/images/Notes/AEM/UseCloudAccelerationManager/cloudAccelerationManager.png)

It is important for us to know for which test cases we need to move in to use Cloud Acceleration Manager. It is for all of AEM On-Premise and Managed Service customers who are looking to the following use cases to use Cloud Acceleration Manager.

- Evaluation or assessing health of their current system or instance.
- Considering upgrading AEM version.
- Considering moving to AEM as Cloud Service or currently in the process of moving to AEM as Cloud Service.
- Looking to create their internal roadmap or cloud adoption strategy

Following are the benefits of AEM as Cloud Service.

- **Plan Better and Smarter:** We can plan much better and smarter with all of the actionable insights that we can get from instance.
- **Streamline the Journey:** Adobe team has provided the recommended streamline journey to go through with best practices and better guidelines. Which makes cloud service smoother.
- **Optimize & Accelerate Efforts:** In cloud instance, many of the automation tools & optimization tools do come as pre load which help us from our manual efforts. So that we can accelerate our journey in cloud service.

As we mentioned before that streamlining of the the journey is available in Cloud Acceleration Manager. Following is the image which shows combined image of that journey.

![](https://raw.githubusercontent.com/Anim-101/anim-101.github.io/master/srv/images/Notes/AEM/UseCloudAccelerationManager/streamlineJourneyAdobeBestPractice.png)

And in the benefits we have also mentioned that some of the optimization and accelerate efforts are available in the AEM. Those were manually and critically implemented done before but thanks to Cloud Acceleration Manager from AEM, it has become automated and easier to handle.

![](https://raw.githubusercontent.com/Anim-101/anim-101.github.io/master/srv/images/Notes/AEM/UseCloudAccelerationManager/criticalActivitiesDuringImplementation.png)

Following are the list of tools introduced by Adobe for Code Refactoring.

- Automate code refactoring tasks via:
    - Repository Modernizer
    - Index Converter
    - Asset Workflow Migration
    - Dispatcher Converter
    - Modernization Tool Suite
- Execute tools via single command using:
    - Unified Experience Plugin

Also automating content transferring from current instance to cloud instance is tough task. For that it needs to run extraction and ingestion with ease by the content subset to be transferred. Following are the list of tools introduced by Adobe for Content Transferring.

- User Mapping Tool
    - It is a tool to map users and groups to their Adobe Identity Management System (IMS) identities.
    - It utilizes single sign on function so that users and groups can be recognized correctly.
- Content Transfer Calculator
    - It ensures a smooth transition, estimate content extractor and ingest times.
    - It minimizes disruption due to content freezes with the content transfer tool's top-up (delta) transfer feature.

# Rediness & Best Practice Analyzer in AEM
In Rediness phase, first we need to start with Cloud Acceleration Manager (CAM). Which is a free Adobe application that provides assessment of current AEM implementation. It helps the journey to AEM following Adobe's recommended methodology. Following are the key benefits of CAM.

- Cloud first application is built in Adobe Experience Cloud
- Provide step-by-step guided journey based on Adobe's recommendation
- Provides contextual help throughout the journey
- Provides best practice for tools and methodology

Best Practice Analyzer was first built as known as overall rediness analyzer in AEM. Following are the overview of BPA as Best Practice Analyzer in AEM.

- BPA checks an AEM Instance against cloud service requirements and provides a report that highlights
    - Area that need refactoring
    - Features are in use which are no longer supported
    - Best practice recommendation
- Utilize an updated version of Pattern Detector with new pattern specific to AEM as Cloud Service
- The BPA report can be useful input during the process of determining upgrade LOE.

As we have mentioned that BPA uses Pattern Detector. Now question is how this Pattern Detector may work. Following is the lsit of uses of Pattern Detector of BPA.

- Analyzes state of AEM repository using pattern to identify finding of potential or likely backward compatibility issues for planned upgrades
- Findings have type, sub type and importance levels
    - INFO: Information only
    - Advisory: Potential upgrade issue
    - Major: Likely upgrade issue
    - Critical: Very likely upgrade issue
- Execution time may be minutes to over an hour depending on repository size and other factors
    - Results are cached
- Embedded within best practices analyzer install package

Following table visualize the patterns added to support transition to AEM as a Cloud Service Include

| Type | Description |
| ------- | -------------- |
| Custom Component (CCOM) | Identifies the usability to Custom Component I
| Custom Template (CTEM) | Identifies the usability to Custom Template |
| Custom Client Libraries (CCL) | Custom client libraries and versions |

## Introduction to  Implementation Phase of CAM
Before implementation we need to verify following steps:

- We have an IMS org provisioned for Adobe Experience Cloud
- We have been on board to cloud manager
- One of the users must be Sysadmin to manage roles and permission in the Admin Console

Once these verification is done, Sysadmin will be able to create environments after logging into cloud manager. Following picture shows the steps of implementation phase.

![](https://raw.githubusercontent.com/Anim-101/anim-101.github.io/master/srv/images/Notes/AEM/UseCloudAccelerationManager/camImplementationPhase.png)

## Migration Tools
Migration tools are rediness tools which are developed and made public. These tools save time while transitioning AEM Cloud Services. These tools also help converting current implementation to AEM Cloud compatible. Following is the list of available Migration Tools.

- Cloud Transition Tools
    - Content Transfer Tool
        - User Mapping Tool
- Code Refactoring Tools
    - Unified Experience Plugin
        - Repository Modernizer
        - Index Converter
        - AEM Dispatcher Converter
    - Asset Workflow Migration
    - AEM Modernization Tools

## Content Transfer Tool
Content Transfer Tool helps to load source instance from on premise AEM to cloud instance. It can be complex and time consuming process. Which is why it is recommended to plan this activity early in the project. During transforming, tool also transfers users and groups so that permission gets transferred in cloud instance as well.\

There are two phases associated with Content Transfer Tool. One is extraction. During this phase it extracts the content from the source instance into a temporary area called as migration set.

![](https://raw.githubusercontent.com/Anim-101/anim-101.github.io/master/srv/images/Notes/AEM/UseCloudAccelerationManager/contentTransferTool.png)

The second part of the Content Transfer Tool is called Ingestion. Which ingests content from migration side to the target cloud service instance. The migration set is an azure blob store area provided by Adobe to temporarily store the content. A maximum of four migration activity can be created at a time. Each migration set should have an unique name and if a migration set remain inactive for more than 30 days then it will be automatically deleted.

During ingestion time target AEM Cloud Instance will scale down. Which means it will be unavailable. So we need to pre plan this activity with proper timeline. Because during this time AEM Cloud Service author and public will not be available. Before the migration following are the important points which need to be under consideration.

- The minimum system requirements for CTT are AEM 6.3+ and Java 8
    - If we are on a lower AEM version, we will need to upgrade content repository to AEM 6.5 to use Content Transfer Tool
- The Content Transfer Tool can be used with the following types of data stores
    - File Data Store
    - S3 Data Store
    - Shared S3 Data Store
    - Azure Blob Store Sta Store
- User Mapping
    - The user mapping tool automates the mapping of existing AEM users to IMS
    - One configured using Content Transfer Tool this tool will save significant time migrating users to IMS

Content migration is resource intensive activity. It is recommended to allocate enough disk and cpu before stating the tool. There are a couple of approaches that can be adapted to perform migration.

- Cloning the source AEM production Author and Publish and install Content Transfer Tool on these cloned environments
    - Run the migration from cloned Author to AEM Cloud Author and cloned publish to AEM Cloud Publish instances. If this method is chosen then the delta migrations must be performed via AEM packages.
- Installing the Content Transfer Tool on current AEM production Author and Public instances. This method supports differential top-up extraction to transfer changes made since the previous content transfer.

## Code Refactoring Tool - Unified Experience
The AEM as a Cloud Service Code Refactoring plugin for the Adobe I/O CLI unifies tools that operate on code and repositories.

- Automate code refactoring tasks required to be compatible with AEM as a Cloud Service
    - Modernize Maven Modules
    - Modernize Dispatcher
    - Convert Indexes
- Reduce complexity associated with installation and setup of code refactoring tools

To install libraries node js version 10 is required. Following are the command of installation the tool.

- Install aio-cli core libraries
```
$ npm install -g @adobe/aio-cli
```
- Install AEM cloud service migration plugin
```
$ npm install -g @adobe/aio-cli-plugin-aem-cloud-service-migration
```
- Link AEM cloud service migration plugin with aio
```
$ aio plugins:install @adobe/aio-cli-plugin-aem-cloud-service-migration
```
- Verify plugin
```
$ aio aem-migration --help
```

## Code Repository Modernizer
It is an utility developed to restructure existing project packages to be compatible with the project structure required by AEM as a cloud service.

Following is the aio command to run the migration

```
$ aio aem-migration:repository-modernizer
```

It creates a compatible AEM as a Cloud Service project structure by creating the following deployment structure.

- ui.apps package deploys to /apps and contains all the code
- ui.contnet package deploys to runtime-writable areas (eg /content, /conf, /hom, or anything not /apps) and contains all the content and configuration
- all package is a container package that contains the sub-packages ui.apps and ui.content

## AEM Dispatcher Converter
AEM Dispatcher Converter was created to migrate existing on-premise or Adobe Managed Service (AMS) dispatcher configurations to an AEM as a Cloud Service compatible dispatcher configuration.

- The Dispatcher Converter must be configured before executing. In case on on-premise impementation more specific configration are required
- The nature of AMS Dispatcher Configration is know it enough to provide the root folder to convert.
- Chose on-premise or arms for configuration input
       ```
        $ aio aem-migration.dispatcher-converted -t=arms
      ```
- Use dispatcher validator on the converted configuration to validate locally
       ```
        $ validator dispatcher
      ```

## Index Converter
The Index Converter migrates existing Custom Oak Index Definitions into AEM as a Cloud Service compatible Custom Oak Index Definitions. This utility transforms only Luecne type Custom Oak Index Definitions which are present under /apps or /oak:index. It will not transform those Lucene type indexes which are created for `nt:base`

- AEM as a Cloud Service does not support Ensure Oak Index Definitions, and hence they need to be converted to Oak Index Definitions.
- To handle custom OOTB, the tool will compare the two custom OOTB Oak Index Definition to the associated OOTB Index Definition in AEM cloud. The naming convention used is:
  "Name of the OAK Index Definition on AEM as a Cloud Service" - "latest version of this index on AEM as a Cloud Service"-"custom"-1
- To handle custom indexes the tool will validate the indexes against AEM cloud service Oak index, if its valid. The index will be renamed as
  "Name of the Custom Oak Index Definition"-"custom"-1 For example, testindex-custom-1

## Asset Workflow Migration
The Workflow Migration tool was created to help ease transition from older version of AEM to AEM as a Cloud Service by automating their transition form a workflow-based asset processing configuration to our new processing-profile based configuration for use with the Asset Compute service.

- We download the tool as a compiled jar file. The will run against maven project
        ```
        $ java -jar aem-cloud-migration-0.3.0,jar <PATH_TO_MAEN_PROJECT>
        ```
  When finished, a report (migration-report.md) will be generated on the changes mode
- Workflow launchers that are determined in the project to be used for asset processing will be disabled
- The script analyzes all workflow models that are references by these disabled launchers and automatically generate Processing Profiles for the Asset Compute Service
- The tool will edit the workflow model in-place to remove UNSUPPORTED steps and migrate SUPPORTED, Required or OPTIONAL. The detailed list can be found in the link below:
  https://github.com/adobe/aem-cloud-migration/blob/master/src/main/resources/workflowSteps.properties
- Currently the script is not able to process AND or OR splits. Development team will need to inspect manually and migrate these configurations.

## Conclusion
This note conclude information gathered through the study sessions. Cloud Acceleration Manager provide various benefits.In this note those important tools of CAM (Cloud Acceleration Manager) are described.
