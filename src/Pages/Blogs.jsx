import React, { useEffect, useState } from "react";
import { Card } from "flowbite-react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await fetch("https://blog-app-be-ps7i.onrender.com/api/post/getposts");
    const data = await response.json();
    setBlogs(data);
    console.log(data);
  };
  return (
    <div className="p-10 w-full flex flex-wrap">
      {blogs.map((ele, index) => {
        return (
          <div key={index}>
            <Card className="w-fit m-4 ml-3 " imgAlt="image" imgSrc={ele.image} >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
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
  );
};

export default Blogs;