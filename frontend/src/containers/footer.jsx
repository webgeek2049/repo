import React from "react";
import "./footer.scss";
import Logo from "../components/logo.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Divider from "../components/divider.jsx";
import Copyright from "../components/copyright.jsx";


const Footer = () => {
  return (
    <footer className="bg-black text-center text-lg-start text-white bg-black mt-auto overflow-x-hidden">
      <div className="p-5 p-page start">
        <div className="row">
          {renderColumn("Subjects", [
            "AI",
            "Code Foundations",
            "Computer Science",
            "Cybersecurity",
            "Data Science",
            "Data Visualization",
            "IT",
            "Machine Learning",
            "Mobile Development",
            "Web Development",
          ])}
          {renderColumn("Languages", [
            "C",
            "C++",
            "C#",
            "HTML & CSS",
            "Java",
            "JavaScript",
            "PHP",
            "Python",
            "Ruby",
            "SQL",
          ])}
          {/* Render Resources and Team in the same column */}
          {renderColumnWithTeamUnderResources(
            "Resources",
            ["Articles", "DOCs"],
            ["About Us"]
          )}
          {renderColumnContact(
            "Contact",
            ["support@edtech.com", "(+62) 85923935983"],
            [faInstagram, faTwitter, faLinkedin, faYoutube]
          )}
        </div>
      </div>
      <div className="text-start p-5 p-page pt-0">
        <Logo color="White" />
        <Divider className="opacity-100" />
        <Copyright text_align="text-end" />
      </div>
    </footer>
  );
};

// Modified renderColumn function to handle Resources and Team together
const renderColumnWithTeamUnderResources = (title, resources, team) => {
  return (
    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
      <h5 className="text-uppercase electrolize-bold">{title}</h5>
      <ul className="list-unstyled">
        {resources.map((resource, index) => (
          <li key={index}>
            <a href="#!" className="text-body electrolize-regular">
              {resource}
            </a>
          </li>
        ))}
        {/* Render Team under Resources */}
        <div className="mb-5"></div>
        <li>
          <h6 className="text-uppercase electrolize-bold h5">Team</h6>
          <ul className="list-unstyled">
            {team.map((member, index) => (
              <li key={index}>
                <a href="#!" className="text-body electrolize-regular">
                  {member}
                </a>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
};

const renderColumn = (title, links) => {
  return (
    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
      <h5 className={"text-uppercase electrolize-bold"}>{title}</h5>
      <ul className="list-unstyled">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href="#!"
              className={`text-body electrolize-regular${
                title === "Contact" ? " text-white" : ""
              }`}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const renderColumnContact = (title, links, icons = []) => {
  return (
    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
      <h5 className={"text-uppercase electrolize-bold"}>{title}</h5>
      <ul className="list-unstyled">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href="#!"
              className={`text-body electrolize-regular mb-3 ${
                title === "Contact" ? "" : ""
              }`}
            >
              {link}
            </a>
          </li>
        ))}
        {/* Render icons if provided and if it's the Contact section */}
        {title === "Contact" && icons.length > 0 && (
          <div className="contact-icons">
            {icons.map((icon, index) => (
              <FontAwesomeIcon
                key={index}
                icon={icon}
                className="contact-icon"
                style={{ color: "blue" }}
              />
            ))}
          </div>
        )}
      </ul>
    </div>
  );
};

export default Footer;
