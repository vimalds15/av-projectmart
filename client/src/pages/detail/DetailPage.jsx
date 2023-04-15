import React from "react";

const DetailPage = () => {
  const tags = ["React", "Three.js", "3D"];

  return (
    <div>
      <h2 className="truncate text-3xl font-bold mb-8">
        3D Website with Three.js | React
      </h2>
      <div className="flex flex-col md:flex-row items-start justify-between gap-6">
      <div className="mb-6 w-full">
        <img
          src="https://i.ytimg.com/vi/0fYi8SGA20k/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDWce0k5XmT0oYgy1xdoRsioH_u5A"
          alt="project"
          className="w-full rounded-md"
        />
      </div>
        <div className="w-full">      
      <p>
        Category: <span className="font-semibold">Web Development</span>
      </p>
      <p className=" mt-3">
        Ratings: <span className="font-semibold">5</span>
      </p>
      <div className="flex  items-center mt-4 gap-2">
        <p>Tags:</p>
        {tags.map((tag) => (
          <p className=" bg-blue-100 px-2 rounded-md">{tag}</p>
        ))}
      </div>
      <div className="flex mt-4 ">
        <p>Tech Stack: React, MongoDB, Node, Express</p>
      </div>
      <div className="flex items-center justify-between  gap-20 mt-4 bg-blue-50 p-4 rounded-md">
        <div>
          <p>
            Price: <span className="font-semibold ">$1499</span>
          </p>
        </div>
        <div>
          <button
            onClick={() => navigate("/detail/1")}
            className="bg-blue-200 px-3 py-2 rounded-md font-semibold"
          >
            Buy Project
          </button>
        </div>
      </div>
      </div>
      </div>
      <hr className="my-5" />
      <div>
        <h3 className=" font-semibold mb-4">Description:</h3>
        <p>
          In this course, you'll learn the following: - ThreeJS - a powerful 3D
          graphics library for rendering and animating the 3D model - React
          Three Fiber - a popular library for creating 3D graphics with ThreeJS
          in React - TailwindCSS - a popular utility-first CSS styling framework
          - Framer Motion - the most popular library used to bring your React
          website to life with animations You'll also learn how to: - Load,
          create and customize stunning 3D models and geometries with various
          lights, as well as understand the 3D world with a camera and
          positioning of an object in space. - Make your code reusable and
          scalable using Higher Order Components (HOCs) and other
          industry-standard best practices - Implement sending emails through a
          form on the website - Ensure responsiveness across all devices and
          improve your site's performance using Suspense and Preload.
        </p>
      </div>
    </div>
  );
};

export default DetailPage;
