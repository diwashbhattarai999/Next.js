# Day 1

## Pages

Next js supports pre-rendering which can be done in two ways:
--Static Generation
--Server-side Rendering

### Static Generation:

The HTML will be generated will be generated on build time and reused on each request since it is cached by CDN(Content Delivery Network.) This method is recommended for fast rendering.
Pages can be statically generated with or without fetching data(default).

1. Static Generation without data:
    Next.js generates a single HTML file per page during build time.

2. Static Generation with data:
    If some pages require fetching external data for pre-rendering, there are two cases:
     a. Page content depends on external data: Use getStaticProps 
     b. Page paths depends on external data: Use getStaticPaths

-When to use Static Generation:
Whenever the page can be pre-rendered ahead of user's request.
If it can't be pre-rendered ahead of user's request then use:
    a. Static Generation with Client-side data fetching
    b. Server-Side Rendering
### Server-side Rendering(Or SSR Or Dynamic Rendering):

The HTML is generated on each request
