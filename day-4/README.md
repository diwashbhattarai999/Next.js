# Static Generation and Issues:

Static Generation is a method of pre-rendering where the HTML pages are generated at build time.

- The pre-rendered static pages can be pushed to a CDN(Content Delivery Network), cached and served to clients across the globe almost instantly.
- Static content is fast and better for SEO as they are immediately indexed by search engines.
- Static generation with getStaticProps for data fetching and getStaticPaths for dynamic pages seems like a really good approach to a wide variety of applications in production.

### Issues:

- The build time is proportional to the number of pages in the application.So, it may take a large time for large application with thousands of pages.
- A page once generated can contain statle data till the time you rebuild the application


## Incremental Static Regeneration

There was need to update only those pages which needed a change without having to rebuild the entile app.

- Next.js introduced ISR.
- With ISR, Next.js allows you to update static pages after you've uilt your application
- You can statically generate individual pages without needing to rebuild the entire site, effectively solving the issue of dealing with stale data.

#### How to use?
- In the getStaticProps function, apart from the props key, we can specify a revalidate key 
- The value for revalidate is the number of seconds after which a page re-generation can occur