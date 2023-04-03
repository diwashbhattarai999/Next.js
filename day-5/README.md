# Client-side Data Fetching

Two forms of pre-rendering

- Static Generation
- Server-side Rendering

#### How to fetch data?

- getStaticProps
- getServerSideProps

You might not always need to pre-render the data. Eg. User dashboard page

- It is private, that is behind a login screen
- Highly user-specific and SEO is not relevant
- No need to pre-render the data
- You can rely on client side data fetching

# Pre-rendering + Client Side Data fetching

#### Event Listing Page

- A page that shows a list of events happening around you
- SEO + Request time data fetching -> Server-side rendering with getServerSideProps
- Client-side data fetching for filtering events
  (Ideally, both pagination and filtering would take place client side but, for this example, we're only going to focus on filtering)
