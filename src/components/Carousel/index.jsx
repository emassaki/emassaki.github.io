import React from 'react';

import { Carousel } from 'react-responsive-carousel';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

const nextArrow = (onClickHandler, hasNext, label) => {
  return (
    hasNext && (
      <IoChevronForward onClick={onClickHandler} title={label} className="arrows right" />
    )
  );
};

const prevArrow = (onClickHandler, hasPrev, label) => {
  return (
    hasPrev && (
      <IoChevronBack onClick={onClickHandler} title={label} className="arrows left" />
    )
  );
};

const indicator = (onClickHandler, isSelected, index, label) => {
  if (isSelected) {
    return (
      <li
        className="indicator selected-indicator"
        aria-label={`Selected: ${label} ${index + 1}`}
        title={`Selected: ${label} ${index + 1}`}
      />
    );
  }
  return (
    <li
      className="indicator"
      onClick={onClickHandler}
      onKeyDown={onClickHandler}
      value={index}
      key={index}
      role="button"
      tabIndex={0}
      title={`${label} ${index + 1}`}
      aria-label={`${label} ${index + 1}`}
    />
  );
};

const carouselProps = {
  autoPlay: true,
  emulateTouch: true,
  infiniteLoop: true,
  interval: 10000,
  showStatus: false,
  showThumbs: false,
  stopOnHover: true,
  swipeable: true,
  renderArrowNext: nextArrow,
  renderArrowPrev: prevArrow,
  renderIndicator: indicator,
};

export default function CarouselProjects({ projects }) {
  return (
    <Carousel {...carouselProps}>
      {projects.map((project) => {
        const { githubUrl, description, images, summary, website } = project;
        const image = images[0].resolutions.desktop.url;
        return (
          <div className="carousel-container" key={summary}>
            <div className="text-container">
              <h1>{summary}</h1>
              <p>{description}</p>
              <div className="project-links">
                <a href={githubUrl} target="_blank" rel="noreferrer">
                  Visite o Repositório
                </a>
                <a href={website} target="_blank" rel="noreferrer">
                  Visite o site
                </a>
              </div>
            </div>
            <div className="image-container">
              <img src={image} alt={summary} />
            </div>
          </div>
        );
      })}
    </Carousel>
  );
}
