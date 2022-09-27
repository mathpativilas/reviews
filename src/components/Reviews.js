import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import people from "./data";

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checknumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextperson = () => {
    setIndex((index) => {
      let newindex = index + 1;
      return checknumber(newindex);
    });
  };
  const prevperson = () => {
    setIndex((index) => {
      let newindex = index - 1;
      return checknumber(newindex);
    });
  };

  const randomperson = () => {
    let random = Math.floor(Math.random() * people.length);
    if (random === index) {
      random = random + 1;
    }
    setIndex(checknumber(random));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt="hh" className="person-img" />
        <span className="quote-icon">
          {" "}
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevperson}>
          {" "}
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextperson}>
          {" "}
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomperson}>
        surprise me
      </button>
    </article>
  );
};

export default Reviews;
