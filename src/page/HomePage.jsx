import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const HomePage = () => {
  const { auth } = useAuth();
  console.log("home-context-api-check", auth);
  return (
    <div>
      Home Page
      <Link to={"/me"}> show me page </Link>
    </div>
  );
};

export default HomePage;
