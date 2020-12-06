import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer,
} from "mdbreact";
import "./Carousel.css";

const Carousel = () => {
  return (
    <MDBContainer className="header_carousel">
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={false}
        showIndicators={false}
        className="z-depth-1"
        slide
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <p className="quote">
                Are you good enough, do you have a chance? "Yes, definitely!" is
                the answer that each of us can give with certainty after the
                boot camp. It's all just a matter of preparation and after the
                camp we are absolutely ready to apply and accept!
              </p>
              <p className="quotee_name">Florian</p>
              <p className="quotee_year">Bootcamp participant 2018</p>
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <p className="quote">
                Project Access has managed to take away my fear of applying and
                to demystify the universities.
              </p>
              <p className="quotee_name">Fabian</p>
              <p className="quotee_year">Bootcamp participant 2018</p>
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <p className="quote">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat
              </p>
              <p className="quotee_name">Fabian</p>
              <p className="quotee_year">Bootcamp participant 2018</p>
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
};

export default Carousel;
