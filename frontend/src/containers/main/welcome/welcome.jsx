import React, { useState, useEffect } from "react";
import "./welcome.scss";
import CourseCard from "../../../components/card-course";
import univImg from "../../../ressources/svg/univLogo.svg";
import Star from "../../../ressources/svg/star.svg";
import FAQ from "../../../components/faq";

function Welcome() {
  const [carouselImages, setCarouselImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // Carousel
  useEffect(() => {
    const importImages = async () => {
      const images = [];
      for (let i = 1; i <= 6; i++) {
        const importedImage = await import(
          `../../../ressources/svg/welcomeC${i}.svg`
        );
        images.push(importedImage.default);
      }
      setCarouselImages(images);
    };
    importImages();

    // Set up automatic slide transition
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change the interval as desired (in milliseconds)

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  // Functions to handle manual navigation
  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const courseCards = [];
  for (let index = 0; index <= 2; index++) {
    courseCards.push(
      <CourseCard
        key={index}
        header="Operating Systems"
        content="Explore the principles and functionality of operating systems, including process management and memory management"
        footer="12 Lessons"
      />
    );
  }
  const univs = [];
  for (let index = 0; index < 10; index++) {
    univs.push("University 2 -Constantine-");
  }
  return (
    <div className="welcome-page">
      <div
        className="carousel mb-5"
        style={{
          width: "100%",
          position: "relative",
        }}
      >
        <img
          src={carouselImages[currentImageIndex]}
          alt="Welcome Slide"
        />
        <div className="row justify-content-evenly d-none">
          <h4
            style={{ cursor: "pointer", width: "min-content" }}
            onClick={handlePrevious}
          >
            Previous
          </h4>
          <h4
            style={{ cursor: "pointer", width: "min-content" }}
            onClick={handleNext}
          >
            Next
          </h4>
        </div>
      </div>
      <div className="gStar right my-3">
        <img className="star" src={Star} alt="Star" />
        <divider />
      </div>
      <div className="cards-part">
        <h2 className="text-center m-4">Discover Courses</h2>
        <div className="row row-cols-1 mb-3 justify-content-evenly">
          <h5 className="w-auto">Most Popular</h5>
          <h5 className="w-auto">All</h5>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4 p-0 justify-content-evenly">
          {courseCards}
        </div>
      </div>
      <div className="gStar left my-3">
        <img className="star" src={Star} alt="Star" />
        <divider />
      </div>
      <div className="univ-part my-3">
        <div className="row flex-nowrap">
          <h2
            style={{ width: "min-content", height: "min-content" }}
            className="m-auto me-5"
          >
            Universities' Collabs
          </h2>
          <div className="uni-carousel">
            <div className="uni-carousel-inner">
              {/* Repeat the university logos */}
              {[...univs, ...univs].map((univ) => (
                <div key={univ} className="uni-logo-container">
                  <img
                    className="d-block mx-auto"
                    src={univImg}
                    alt="University Logo"
                  />
                  <span className="d-block">{univ}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="gStar right my-3">
        <img className="star" src={Star} alt="Star" />
        <divider />
      </div>
      <div className="faq-part">
        <FAQ />
      </div>
      <div className="gStar left my-3">
        <img className="star" src={Star} alt="Star" />
        <divider />
      </div>
    </div>
  );
}

export default Welcome;
