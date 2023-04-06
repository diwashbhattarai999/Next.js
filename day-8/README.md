# Next build, start and export

- next build: Builds the application for production in the .next folder
- next start: starts a node.js server that supports hybrid pages, serving both statically generated and server-side rendered pages
- next export: Exports all your pages to static HTML files that you can serve without the need of a Node.js server

- Host your app on any static hosting service or a - - CDN without having to maintain a server
Cannot use ISR or SSR
- Client side data fetching for dynamic content
- Landing pages, blogs and any app where the content is generated at build time


# Preview Mode

- Help application that rely on a CMS

- CMS stands for content management system and is a tool that helps users create, manage and modify content on a website the need for specialized technical knowledge.

### When to use Preview Mode ?

- In the pre-rendering, we understood about static generation where the pages are pre-rendered at build time. It is pretty useful when your pages fetch data from a CMS.

- However, it's not suitable when you're creating a draft in your CMS and want to preview the draft changes immediately on your page.

- You want Next.js to bypass static generation for this scenario

- You deploy your app and then when you make changes in your CMS, they won't be reflected as pages are only generated when you build the application.

- There was a need to handle this scenario of 'Previw of Publish' as I call it.