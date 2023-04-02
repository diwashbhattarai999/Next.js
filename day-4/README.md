# Static Generation and Issues:

Static Generation is a method of pre-rendering where the HTML pages are generated at build time.

- The pre-rendered static pages can be pushed to a CDN(Content Delivery Network), cached and served to clients across the globe almost instantly.
- Static content is fast and better for SEO as they are immediately indexed by search engines.
- Static generation with getStaticProps for data fetching and getStaticPaths for dynamic pages seems like a really good approach to a wide variety of applications in production.

### Issues:

- The build time is proportional to the number of pages in the application.So, it may take a large time for large application with thousands of pages.
- A page once generated can contain statle data till the time you rebuild the application


## Incremental Static Regeneration

There was need to update only those pages which needed a change without having to rebuild the entire app.

- Next.js introduced ISR.
- With ISR, Next.js allows you to update static pages after you've built your application
- You can statically generate individual pages without needing to rebuild the entire site, effectively solving the issue of dealing with stale data.

#### How to use?
- In the getStaticProps function, apart from the props key, we can specify a revalidate key 
- The value for revalidate is the number of seconds after which a page re-generation can occur


## Problems with Static Generation
#### 1.We cannot fetch data at request time
- With not being able to fetch data per request, we run into the problem of stale data
- Let's say we are building a news website
- The content is very dynamic in the sense that new articles cna be published almost every second
- getStaticProps will fetch the news at build time which is not suitable at all
- getStaticPaths will help fetch the data on the initial request but it is then cached for subsequent request.
- Incremental static regeneratino(ISR) can help but if revalidate is 1 second, we still might not always see the most up to date news when the regeneration is happening in the background
- Rather fetch the data on the client side by making a get request from the component. But no SEO

#### 2.We don't get access to the incoming request.
- Problem when the data that needs to be fetched is specific to a user
- Let's say we are building a website similar to twitter
- As a user, I should be able to see tweets that are personalized based on my interests.
- The tweets that I see also need to be SEO friendly as it is public content that anyone in the world can see.
- To fetch tweets specific to the user, we need the userId. And that can be obtained only if we have acess to the incoming request.
- You could do it client side in useEffect for example but that means you again miss out on SEO.

# getServerSideProps
- It runs only on the server side
- The function will never run client-side
- The code you write inside getServerSideProps won't even be included in the JS bundle that is sent to the browser.

- You can write server-side code directly in getServerSideProps
- Acessing the file system using the fs module or quering a database can be done inside getServerSideProps
- You also don't have to worry about including API keys in getServerSideProps as that won't make it to the browser.

- It is allowed only in a page and cannot be run from a regular component file.

- It should return an object and object should contain a props key which is an object.

- It will run at request time.