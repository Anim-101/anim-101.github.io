# Introduction
AEM as a cloud service is the next generation of AEM product line. It is a cloud-native solution which provides excellence performance and scaling while preserving all AEM use cases and functionalities.

AEM as a Cloud Service provides different type of benefits to all the available roles in AEM. Following is the summarized list of those benefits based on different roles.

- **Business Practitioners:**
    - Better user experience with faster performance
    - Latest innovations delivered to them regularly
- **Marketing Professionals:**
    - Quicker time to value. Thanks to deeper integration within the Adobe Experience Cloud
    - Generalized use of Adobe ID for excising the Adobe Author tier. Which also results into single sign on across all adobe cloud application. For instance, if an user logs first into Cloud Manager  or AEM Sites Cloud Service Instance or AEM Asset Cloud Instance or Adobe Analytic then this user won't have to login in any of the other 3 solutions.
    - User profile information is centralized in the Adobe IMS System. Eventually profile notifications and profile related information will be shared all of the available cloud services. On the other hand user's preference remain as it has been set up in each of the cloud instances.
- **Developers:**
    - Leverage the same patterns that have made AEM successful over the years
    - Augmented with the new cloud-based development platform
- **System Administrators:**
    - Don't have to worry about infrastructure and operators thanks to a fully automated service. Because infrastructure and tasks are all automated.

One of the major changes that come as AEM as a Cloud Service is that the ability of all service that the Author and Publish to be always on. In the past, specially in Author instance there was need of periodic stop the service  for different type of maintanance operation like updates, patches and some routine operation. For some customer which did result some downtime. But AEM as a Cloud service has come with all of those problem solved. Which makes customers don't need any type of downtime.

Various part of AEM as a Cloud Service Architecture is self healing. There are rediness and life checks as health check. If for some reason some node of Architecture deems unhealthy then it is removed from the service and silently replace with new healthy one. AEM cloud operations are supported by whole new monitoring, reporting and alerting infrastructure. Which allow Adobe Site Reliability Engineers to pro actively keep the service healthy.

Other benefit of AEM as a Cloud Service is it always scale. All instances of AEM as a Cloud Service are created equally with the same default sizing characteristics. In case of number of nodes, memories, compute capacities are allocated to each of them. It is based on Orchestration engine. That constantly monitors the state of the service and dynamically scale each of the service instance as per the actual need. Both for up and down. It is true for number of nodes, memories and compute capacities. It also accommodate traffic patterns for customers.

The scaling of per tenant instance of service can be both automatic or manual. And it can be on two axis. The vertical axis, where the amount of memory and CPU capabilities can be scaled up or down for the fixed number of nodes. Or horizontal axis, where the number of nodes for the given service can be increased or decreased.

Out of all the changes coming with AEM as a Cloud Service the ability built always current is the most significance for the AEM Customer. Adobe takes care updating all running instances of the service to the latest version of AEM code base on frequently base, up to daily updates. The updates are happening silently without no interruption in service. For updates are done for maintenance and security reasons. Customers are updated with latest bug fixes so that customer experiences are not significantly impacted.

The other benefit of AEM as a Cloud Service is it always learning. It is always upto date with performance enhancement and security updates. AEM as a Cloud Service evolves in daily basis. Based on the project implemented by customers. Content, code and configuration are constantly reviewed and vetted against the best practice.
