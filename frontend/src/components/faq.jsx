import React, { useState } from "react";
import "./faq.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Define your FAQ items
  const faqItems = [
    {
      title: "How do I start a course on this platform?",
      content:
        "To start a course, simply create an account on our website by providing your basic information. Once registered, you can browse through the course catalog, select the ones that interest you, and proceed to enroll.",
    },
    {
      title: "How do I track my progress in a course?",
      content:
        "Each course comes with a progress tracking feature. You can view your completed lessons, Additionally, some courses or badges to mark your achievements.",
    },
    {
      title: "How can i view my students’ statistics?",
      content:
        "If you are a Teacher , simply create an account on our website by providing your basic information. Once registered, you can view students’ statistics in",
    },
    // Add more FAQ items as needed
  ];

  return (
    <div
      class="part part-6 row"
    >
      <div class="left col-md-6">
        <svg
          width="111"
          height="65"
          viewBox="0 0 111 65"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="path-1-outside-1_128_70534"
            maskUnits="userSpaceOnUse"
            x="0"
            y="19"
            width="85"
            height="47"
            fill="black"
          >
            <rect fill="white" y="19" width="85" height="47"></rect>
            <path d="M2.5 59V21.5H22.5V26.5H7.5V36.5H22.5V41.5H7.5V59H2.5ZM32.6798 26.5V21.5H47.6798V26.5H32.6798ZM27.6798 59V26.5H32.6798V41.5H47.6798V26.5H52.6798V59H47.6798V46.5H32.6798V59H27.6798ZM62.84 26.5V21.5H77.84V26.5H62.84ZM57.84 54V26.5H62.84V54H57.84ZM77.84 54V26.5H82.84V54H77.84ZM67.84 64V59H62.84V54H67.84V49H72.84V54H77.84V59H72.84V64H67.84Z"></path>
          </mask>
          <path
            d="M2.5 59V21.5H22.5V26.5H7.5V36.5H22.5V41.5H7.5V59H2.5ZM32.6798 26.5V21.5H47.6798V26.5H32.6798ZM27.6798 59V26.5H32.6798V41.5H47.6798V26.5H52.6798V59H47.6798V46.5H32.6798V59H27.6798ZM62.84 26.5V21.5H77.84V26.5H62.84ZM57.84 54V26.5H62.84V54H57.84ZM77.84 54V26.5H82.84V54H77.84ZM67.84 64V59H62.84V54H67.84V49H72.84V54H77.84V59H72.84V64H67.84Z"
            fill="white"
          ></path>
          <path
            d="M2.5 59H0.5V61H2.5V59ZM2.5 21.5V19.5H0.5V21.5H2.5ZM22.5 21.5H24.5V19.5H22.5V21.5ZM22.5 26.5V28.5H24.5V26.5H22.5ZM7.5 26.5V24.5H5.5V26.5H7.5ZM7.5 36.5H5.5V38.5H7.5V36.5ZM22.5 36.5H24.5V34.5H22.5V36.5ZM22.5 41.5V43.5H24.5V41.5H22.5ZM7.5 41.5V39.5H5.5V41.5H7.5ZM7.5 59V61H9.5V59H7.5ZM4.5 59V21.5H0.5V59H4.5ZM2.5 23.5H22.5V19.5H2.5V23.5ZM20.5 21.5V26.5H24.5V21.5H20.5ZM22.5 24.5H7.5V28.5H22.5V24.5ZM5.5 26.5V36.5H9.5V26.5H5.5ZM7.5 38.5H22.5V34.5H7.5V38.5ZM20.5 36.5V41.5H24.5V36.5H20.5ZM22.5 39.5H7.5V43.5H22.5V39.5ZM5.5 41.5V59H9.5V41.5H5.5ZM7.5 57H2.5V61H7.5V57ZM32.6798 26.5H30.6798V28.5H32.6798V26.5ZM32.6798 21.5V19.5H30.6798V21.5H32.6798ZM47.6798 21.5H49.6798V19.5H47.6798V21.5ZM47.6798 26.5V28.5H49.6798V26.5H47.6798ZM27.6798 59H25.6798V61H27.6798V59ZM27.6798 26.5V24.5H25.6798V26.5H27.6798ZM32.6798 26.5H34.6798V24.5H32.6798V26.5ZM32.6798 41.5H30.6798V43.5H32.6798V41.5ZM47.6798 41.5V43.5H49.6798V41.5H47.6798ZM47.6798 26.5V24.5H45.6798V26.5H47.6798ZM52.6798 26.5H54.6798V24.5H52.6798V26.5ZM52.6798 59V61H54.6798V59H52.6798ZM47.6798 59H45.6798V61H47.6798V59ZM47.6798 46.5H49.6798V44.5H47.6798V46.5ZM32.6798 46.5V44.5H30.6798V46.5H32.6798ZM32.6798 59V61H34.6798V59H32.6798ZM34.6798 26.5V21.5H30.6798V26.5H34.6798ZM32.6798 23.5H47.6798V19.5H32.6798V23.5ZM45.6798 21.5V26.5H49.6798V21.5H45.6798ZM47.6798 24.5H32.6798V28.5H47.6798V24.5ZM29.6798 59V26.5H25.6798V59H29.6798ZM27.6798 28.5H32.6798V24.5H27.6798V28.5ZM30.6798 26.5V41.5H34.6798V26.5H30.6798ZM32.6798 43.5H47.6798V39.5H32.6798V43.5ZM49.6798 41.5V26.5H45.6798V41.5H49.6798ZM47.6798 28.5H52.6798V24.5H47.6798V28.5ZM50.6798 26.5V59H54.6798V26.5H50.6798ZM52.6798 57H47.6798V61H52.6798V57ZM49.6798 59V46.5H45.6798V59H49.6798ZM47.6798 44.5H32.6798V48.5H47.6798V44.5ZM30.6798 46.5V59H34.6798V46.5H30.6798ZM32.6798 57H27.6798V61H32.6798V57ZM62.84 26.5H60.84V28.5H62.84V26.5ZM62.84 21.5V19.5H60.84V21.5H62.84ZM77.84 21.5H79.84V19.5H77.84V21.5ZM77.84 26.5V28.5H79.84V26.5H77.84ZM57.84 54H55.84V56H57.84V54ZM57.84 26.5V24.5H55.84V26.5H57.84ZM62.84 26.5H64.84V24.5H62.84V26.5ZM62.84 54V56H64.84V54H62.84ZM77.84 54H75.84V56H77.84V54ZM77.84 26.5V24.5H75.84V26.5H77.84ZM82.84 26.5H84.84V24.5H82.84V26.5ZM82.84 54V56H84.84V54H82.84ZM67.84 64V59H62.84V54H67.84V49H72.84V54H77.84V59H72.84V64H67.84ZM67.84 59H69.84V57H67.84V59ZM62.84 59H60.84V61H62.84V59ZM62.84 54V52H60.84V54H62.84ZM67.84 54V56H69.84V54H67.84ZM67.84 49V47H65.84V49H67.84ZM72.84 49H74.84V47H72.84V49ZM72.84 54H70.84V56H72.84V54ZM77.84 54H79.84V52H77.84V54ZM77.84 59V61H79.84V59H77.84ZM72.84 59V57H70.84V59H72.84ZM72.84 64V66H74.84V64H72.84ZM64.84 26.5V21.5H60.84V26.5H64.84ZM62.84 23.5H77.84V19.5H62.84V23.5ZM75.84 21.5V26.5H79.84V21.5H75.84ZM77.84 24.5H62.84V28.5H77.84V24.5ZM59.84 54V26.5H55.84V54H59.84ZM57.84 28.5H62.84V24.5H57.84V28.5ZM60.84 26.5V54H64.84V26.5H60.84ZM62.84 52H57.84V56H62.84V52ZM79.84 54V26.5H75.84V54H79.84ZM77.84 28.5H82.84V24.5H77.84V28.5ZM80.84 26.5V54H84.84V26.5H80.84ZM82.84 52H77.84V56H82.84V52ZM69.84 64V59H65.84V64H69.84ZM67.84 57H62.84V61H67.84V57ZM64.84 59V54H60.84V59H64.84ZM62.84 56H67.84V52H62.84V56ZM69.84 54V49H65.84V54H69.84ZM67.84 51H72.84V47H67.84V51ZM70.84 49V54H74.84V49H70.84ZM72.84 56H77.84V52H72.84V56ZM75.84 54V59H79.84V54H75.84ZM77.84 57H72.84V61H77.84V57ZM70.84 59V64H74.84V59H70.84ZM72.84 62H67.84V66H72.84V62Z"
            fill="black"
            mask="url(#path-1-outside-1_128_70534)"
          ></path>
        </svg>
        <h3
          class="mb-3 w-75 electrolize-regular text-black mt-3"
          style={{"lineHeight":" 40px"}}
        >
          Find answers to most common questions
        </h3>
      </div>
      <div class="right col-md-6 text-center">
        <div
          className="faq-container row align-items-start align-left text-black"
          style={{ textAlign: "left" }}
        >
          {faqItems.map((item, index) => (
            <div
              className="faq"
              key={index}
              onClick={() => toggleAccordion(index)}
            >
              <div className="question">
                <div className="title electrolize-regular fw-bold">
                  {item.title}
                </div>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`chevron-down-ic ${
                    activeIndex === index ? "rotate" : ""
                  }`}
                />
              </div>
              <div
                className={`answer ${activeIndex === index ? "active" : ""}`}
              >
                <p className="electrolize-regular">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div >
  );
}

export default FAQ;
