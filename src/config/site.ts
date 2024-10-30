import { type NavItem, type NavItemFooter } from "@/types"

const links = {
  github:
    "https://github.com/pjborowiecki/SAASY-LAND-Next-14-Starters-With-Authentication-And-Database-Implemented",
  twitter: "https://twitter.com/pjborowiecki",
  linkedin: "https://www.linkedin.com/in/pjborowiecki",
  discord: "",
  authorsWebsite: "https://pjborowiecki.com",
  authorsGitHub: "https://github.com/pjborowiecki",
  openGraphImage: "https://saasyland.com/images/opengraph-image.png",
}

export const siteConfig = {
  name: "Your Site Name",
  description: "Your site description goes here",
  url: "https://your-site.com",
  author: "Your Name",
  links: {
    authorsWebsite: "https://your-personal-site.com",
    openGraphImage: "https://your-site.com/og-image.jpg",
  },
  keywords: [
    "Next.js",
    "React",
    "TypeScript",
    // Add more keywords
  ],
  navItems: [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Features",
      href: "/features",
    },
    {
      title: "Pricing",
      href: "/pricing",
    },
    {
      title: "FAQ",
      href: "/faq",
    },
    {
      title: "Docs",
      href: "/docs",
    },
    {
      title: "Blog",
      href: "/blog",
    },
  ] satisfies NavItem[],
  navItemsMobile: [],
  navItemsFooter: [
    {
      title: "Company",
      items: [
        {
          title: "About",
          href: "/about",
          external: false,
        },
        {
          title: "Privacy",
          href: "/privacy",
          external: false,
        },
        {
          title: "Terms",
          href: "/tos",
          external: false,
        },
        {
          title: "Careers",
          href: "/careers",
          external: false,
        },
      ],
    },
    {
      title: "Support",
      items: [
        {
          title: "Docs",
          href: "/docs",
          external: false,
        },
        {
          title: "FAQ",
          href: "/faq",
          external: false,
        },
        {
          title: "Blog",
          href: "/blog",
          external: false,
        },
        {
          title: "Contact",
          href: "/contact",
          external: false,
        },
      ],
    },
    {
      title: "Inspiration",
      items: [
        {
          title: "Shadcn",
          href: "https://ui.shadcn.com/",
          external: true,
        },
        {
          title: "Taxonomy",
          href: "https://tx.shadcn.com/",
          external: true,
        },
        {
          title: "Skateshop",
          href: "https://skateshop.sadmn.com/",
          external: true,
        },
        {
          title: "Acme Corp",
          href: "https://acme-corp.jumr.dev/",
          external: true,
        },
      ],
    },
  ] satisfies NavItemFooter[],
}
