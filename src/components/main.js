import React from "react";

const Main = ({ children, title = "this is the dummy title" }) => {
  return (
    <React.Fragment>
      <main>{children}</main>
    </React.Fragment>
  );
};

export default Main;
