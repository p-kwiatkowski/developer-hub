// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const sidebars = {
  allcontent: [
    // Documentation Parent
    {
      type: "category",
      label: "Documentation",
      link: {
        // type: "generated-index",
        type: "doc",
        id: "index",
      },
      collapsed: true,
      items: [
        {
          type: "category",
          label: "Get started with Harness",
          link: {
            type: "generated-index",
            slug: "getting-started",
          },
          customProps: {
            description: "Learn Harness fundamentals and key concepts.",
          },          
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "getting-started",
            },
          ],
        },
        // Custom Continuous Integration landing page
        {
          /* Uncomment this block while we have a generated-index page for module docs
          type: "category",
          label: "Continuous Integration",
          link: {
            type: "generated-index",
            slug: "/continuous-integration",
          },
          */
          type: "category",
          label: "Continuous Integration",
          link: {
            type: "doc",
            id: "continuous-integration",
          },
          customProps: {
            description: "Learn how you can build faster and be more productive.",
          },
          collapsed: true,
          items: [{ type: "autogenerated", dirName: "continuous-integration" }],
        },
        // Custom Continuous Delivery Landing Page
        {
          /* Uncomment this block while we have a generated-index page for module docs
          type: "category",
          label: "Continuous Delivery & GitOps",
          link: {
            type: "generated-index",
            slug: "/continuous-delivery",
          },
          */
          type: "category",
          label: "Continuous Delivery & GitOps",
          link: {
            type: "doc",
            id: "continuous-delivery",
          },
          customProps: {
            description: "Learn how to make your software releases more efficient and reliable.",
          },
          collapsed: true,
          items: [{ type: "autogenerated", dirName: "continuous-delivery" }],
        },
        {
          /*
          type: "doc",
          label: "Feature Flags",
          id: "feature-flags",
          */
          type: "category",
          label: "Feature Flags",
          link: {
            type: "generated-index",
            slug: "/feature-flags",
            /* Uncomment this block while we have a landing page for module docs
            type: "doc",
            id: "feature-flags",
          },
          */
          },
          customProps: {
            description: "Learn how to change your software's functionality without deploying new code.",
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "feature-flags",
            },
          ],
        },
        // Custom Cloud Cost ManagementLanding Page
        {
          /* Uncomment this block while we have a generated-index page for module docs
          type: "category",
          label: "Cloud Cost Management",
          link: {
            type: "generated-index",
            slug: "/cloud-cost-management",
          },
          */
          type: "category",
          label: "Cloud Cost Management",
          link: {
            type: "doc",
            id: "cloud-cost-management",
          },
          customProps: {
            description: "Learn how to manage and optimize cloud costs.",
          },
          collapsed: true,
          items: [{ type: "autogenerated", dirName: "cloud-cost-management" }],
        },
        {
          /*
          type: "doc",
          label: "Service Reliability Management",
          id: "service-reliability-management",
          */
          type: "category",
          label: "Service Reliability Management",
          link: {
            type: "generated-index",
            slug: "/service-reliability-management",
            /* Uncomment this block while we have a landing page for module docs
            type: "doc",
            id: "security-testing-orchestration",
          },
          */
          },
          customProps: {
            description: "Learn how to use real-time insights to improve the reliability of applications and services.",
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "service-reliability-management",
            },
          ],
        },
        {
          /*
          type: "doc",
          label: "Security Testing Orchestration",
          id: "security-testing-orchestration",
          */
          type: "category",
          label: "Security Testing Orchestration",
          link: {
            type: "generated-index",
            slug: "/security-testing-orchestration",
            /* Uncomment this block while we have a landing page for module docs
            type: "doc",
            id: "security-testing-orchestration",
          },
          */
          },
          customProps: {
            description: "Learn how to left shift your security testing.",
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "security-testing-orchestration",
            },
          ],
        },
        {
          /*
          type: "doc",
          label: "Chaos Engineering",
          id: "chaos-engineering",
          */
          type: "category",
          label: "Chaos Engineering",
          link: {
            type: "generated-index",
            slug: "/chaos-engineering",
            /* Uncomment this block while we have a landing page for module docs
            type: "doc",
            id: "chaos-engineering",
          },         
          */
          },
          customProps: {
            description: "Learn how to build and validate resilience.",
          },   
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "chaos-engineering",
            },
          ],
        },
        {
          /*
          type: "doc",
          label: "Harness Platform",
          id: "platform",
          */
          type: "category",
          label: "Harness Platform",
          link: {
            type: "generated-index",
            slug: "/platform",
            /* Uncomment this block while we have a landing page for module docs
            type: "doc",
            id: "platform",
          },         
           */
          },
          customProps: {
            description: "Learn how to manage Harness features that integrate with all modules.",
          },   
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "platform",
            },
          ],
        },
        {
          /*
          type: "doc",
          label: "Self-Managed Enterprise Edition",
          id: "self-managed-enterprise-edition",
          */
          type: "category",
          label: "Self-Managed Enterprise Edition",
          link: {
            type: "generated-index",
            slug: "/self-managed-enterprise-edition",
            /* Uncomment this block while we have a landing page for module docs
            type: "doc",
            id: "self-managed-enterprise-edition",
          },          
            */
          },
          customProps: {
            description: "Learn how to use this end-to-end solution for continuous, self-managed delivery.",
          },  
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "self-managed-enterprise-edition",
            },
          ],
        },
        {
          /*
          type: "doc",
          label: "FirstGen docs",
          id: "first-gen",
          */
          type: "category",
          label: "Harness FirstGen",
          link: {
            type: "generated-index",
            slug: "/first-gen",
            /* Uncomment this block while we have a landing page for module docs
            type: "doc",
            id: "first-gen",
          },
          */
          },
          customProps: {
            description: "Learn how to use Harness FirstGen modules.",
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "first-gen",
            },
          ],
        },
        // Release Notes
        {
          type: "link",
          label: "Release notes",
          href: "/release-notes/whats-new",
        },
        {
          /*
          type: "doc",
          label: "FAQs",
          id: "frequently-asked-questions",
          */
          type: "category",
          label: "FAQs",
          link: {
            type: "generated-index",
            slug: "/frequently-asked-questions",
            /* Uncomment this block while we have a landing page for module docs
            type: "doc",
            id: "frequently-asked-questions",
          },           
          */
          },
          customProps: {
            description: "Find answers to frequently asked questions.",
          }, 
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "frequently-asked-questions",
            },
          ],
        },
        {
          /*
          type: "doc",
          label: "Integrations",
          id: "integrations",
          */
          type: "category",
          label: "Integrations",
          link: {
            type: "generated-index",
            slug: "/integrations",
            /* Uncomment this block while we have a landing page for module docs
            type: "doc",
            id: "integrations",
            */
          },
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "integrations",
            },
          ],
        },
        {
          /*
          type: "doc",
          label: "Troubleshooting",
          id: "troubleshooting",
          */
          type: "category",
          label: "Troubleshooting",
          link: {
            type: "generated-index",
            slug: "/troubleshooting",
            /* Uncomment this block while we have a landing page for module docs
            type: "doc",
            id: "troubleshooting",
          },         
            */
          },
          customProps: {
            description: "Find details about common error messages, what causes them, and solutions.",
          },   
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "troubleshooting",
            },
          ],
        },
      ],
    },

    //Additional Items in this parent can go here.
  ],
};

module.exports = sidebars;
