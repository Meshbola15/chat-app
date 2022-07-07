import React from 'react'

const FooterLinks = ({ linkText }) => {
  return (
    <a
      href="#"
      className="text-gray-600 text-sm md:text-base no-underline cursor-pointer"
    >
      {linkText}
    </a>
  );
};

export default FooterLinks;

