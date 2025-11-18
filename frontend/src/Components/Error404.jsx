import React from "react";
import {Link} from "react-router-dom"

const Error404 = () => {
  return (
    <div className="h-screen w-full flex flex-col gap-10 justify-center items-center text-5xl underline-offset-1 p-5">
      <p>Error 404 page not found </p>
      <button className="border-2 rounded-2xl p-5"><Link to={'/'}> back to home </Link></button>
    </div>
  );
};

export default Error404;
