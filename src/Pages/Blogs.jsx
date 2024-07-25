import React, { useEffect, useState } from "react";
import { Card } from "flowbite-react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await fetch(
      "https://blog-app-be-ps7i.onrender.com/api/post/getposts"
    );
    const data = await response.json();
    setBlogs(data);
    console.log(data);
  };
  return (
    <div className="p-10 w-full  min-h-screen">
      <h1 className="text-xl md:text-3xl text-emerald-700 text-center uppercase font-medium border-b-amber-300 border-b-4 mb-3 pb-4">
        List of Blogs
      </h1>
      <div className=" flex flex-wrap h-full w-full flex-col ">
        {blogs.map((ele, index) => {
          return (
            <div key={index} className="mx-auto">
              <Card
                className="md:w-[400px] w-[280px] h-fit m-4 ml-3 p-5"
                imgAlt="image"
                imgSrc={ele.image}
              >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white border-t-4 mt-2">
                  {ele.title}
                </h5>
                <h4 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {ele.category}
                </h4>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {ele.content}
                </p>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
