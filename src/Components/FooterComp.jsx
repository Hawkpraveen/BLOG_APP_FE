import { Footer } from "flowbite-react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import React from "react";

const FooterComp = () => {
  return (
    <Footer container className="border border-t-8 dark:bg-black">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              href="#"
              src="https://cdn.pixabay.com/photo/2022/01/16/16/44/blogger-logo-6942640_1280.png"
              alt="Logo"
              name="Blogger Hunt!"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="Technologies used" />
              <Footer.LinkGroup col>
                <Footer.Link href="https://flowbite.com/" target="blank">
                  Flowbite
                </Footer.Link>
                <Footer.Link href="https://tailwindcss.com/" target="blank">
                  Tailwind CSS
                </Footer.Link>
                <Footer.Link href="https://react.dev/" target="blank">
                  React
                </Footer.Link>
                <Footer.Link href="https://react-redux.js.org/" target="blank">
                  Redux
                </Footer.Link>
                <Footer.Link href="https://firebase.google.com/" target="blank">
                  FireBase
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between font-bold">
          <Footer.Copyright
            href="#"
            by="Praveen™"
            year={new Date().getFullYear()}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="https://github.com/Hawkpraveen"
              icon={BsGithub}
            />
            <Footer.Icon
              href="https://www.linkedin.com/in/praveen-kumar-496255190/"
              icon={BsLinkedin}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterComp;
