import React from "react";

const Copyright = ({ text_align }) => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return <p className={text_align}>&copy; {currentYear} CSGeeks</p>;
};

export default Copyright;
