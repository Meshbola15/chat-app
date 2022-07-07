import React from "react";
import FooterLinks from "./FooterLinks";
import FooterLinkText from "./FooterLinkText";

const Footer = () => {
  return (
    <footer className="container flex flex-col w-full py-10 md:flex-row items-start md:items-center justify-between">
      <div className="flex flex-col w-auto md:w-[30%] space-y-5 mb-5 md:mb-0">
        <h2 className="text-2xl md:text-3xl font-semibold  text-blue-600">
          chat<span className="font-[400] text-blue-400">app</span>
        </h2>
        <p className="text-xl md:text-2xl text-left text-gray-600">
          The last team you will ever need.
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:space-x-6  w-auto items-baseline justify-between">
        <div className="flex flex-col text-left items-start md:mb-0 mb-4 space-y-4 capitalize">
          <FooterLinkText text="help" />
          <FooterLinks linkText="support" />
          <FooterLinks linkText="knowledgebase" />
          <FooterLinks linkText="tutorials" />
        </div>
        <div className="flex flex-col text-left items-start md:mb-0 mb-4 space-y-4 capitalize">
          <FooterLinkText text="features" />
          <FooterLinks linkText="screen sharing" />
          <FooterLinks linkText="IOS & android apps" />
          <FooterLinks linkText="file sharing" />
          <FooterLinks linkText="Text link" />
        </div>
        <div className="flex flex-col text-left items-start md:mb-0 mb-4 space-y-4 capitalize">
          <FooterLinkText text="company" />
          <FooterLinks linkText="about us" />
          <FooterLinks linkText="careers" />
          <FooterLinks linkText="contact us" />
        </div>
        <div className="flex flex-col text-left items-start md:mb-0 mb-4 space-y-4 capitalize">
          <FooterLinkText text="contact us" />
          <FooterLinks linkText="info@chatapp" />
          <FooterLinks linkText="1-800-200-300" />
          <FooterLinks linkText="3500 deer creek Rd palo alto, CA" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
