function Layout({ children }) {
  return (
    <div className="flex h-screen bg-blue-200 ">
      <h1>Layout</h1>
      {children}
    </div>
  );
}

export default Layout;
