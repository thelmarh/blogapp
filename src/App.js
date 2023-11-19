import React, { Fragment } from "react";
import MainNav from "./components/MainNav";
import BlogList from "./components/BlogList";

function App() {
  return (
    <Fragment>
      <MainNav />
      <BlogList />
    </Fragment>
  );
}

export default App;
