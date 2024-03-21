import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <p>Not Found this page</p>
      <Link to={"/"}>
        <p>Go to Home page</p>
      </Link>
    </div>
  );
};

export default NotFoundPage;
