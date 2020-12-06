// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import {
//   FlickingEvent,
//   SelectEvent,
//   ChangeEvent,
//   NeedPanelEvent,
// } from "@egjs/flicking";
// import Flicking from "@egjs/react-flicking";
// import { Fade, AutoPlay } from "@egjs/flicking-plugins";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer,
} from "mdbreact";
import header_img1 from "../../assets/images/header_img1.jpg";
import header_img2 from "../../assets/images/header_img2.jpg";
import header_img3 from "../../assets/images/header_img3.jpg";
import header_img4 from "../../assets/images/header_img4.jpg";

// const responsive = {
//   superLargeDesktop: {
//     // the naming can be any, depends on you.
//     breakpoint: { max: 4000, min: 3000 },
//     items: 1,
//   },
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 1,
//     partialVisibilityGutter: 40, // this is needed to tell the amount of px that should be visible.
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 1,
//     partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//     partialVisibilityGutter: 30, // this is needed to tell the amount of px that should be visible.
//   },
// };

// const MultiCarousel = () => {
//   return (
//     <Carousel
//       swipeable={false}
//       draggable={false}
//       showDots={true}
//       responsive={responsive}
//       //   ssr={true} // means to render carousel on server-side.
//       infinite={true}
//       autoPlaySpeed={1000}
//       keyBoardControl={true}
//       centerMode={true}
//       customTransition="all .5"
//       transitionDuration={500}
//       //   containerClass="carousel-container"
//       arrows={false}
//       //   dotListClass="custom-dot-list-style"
//       //   itemClass="carousel-item-padding-40-px"
//       className="header_carousel"
//     >
//       <div>
//         <img src={header_img1} alt="header" />
//       </div>
//       <div>Item 2</div>
//       <div>Item 3</div>
//       <div>Item 4</div>
//     </Carousel>
//   );
// };

// export default MultiCarousel;

// const MultiCarousel = () => {
//   let plugins = [new Fade()];
//   return (
//     <Flicking circular={true} gap={10} plugins={plugins}>
//       <div>
//         <img src={header_img1} alt="header" />
//       </div>
//       <div>
//         <img src={header_img2} alt="header" />
//       </div>
//       <div>
//         <img src={header_img3} alt="header" />
//       </div>
//       <div>
//         <img src={header_img4} alt="header" />
//       </div>
//     </Flicking>
//   );
// };

// export default MultiCarousel;

// import React from "react";
// import {
//   MDBCarousel,
//   MDBCarouselInner,
//   MDBCarouselItem,
//   MDBView,
//   MDBContainer,
// } from "mdbreact";

const ImageCarousel = () => {
  return (
    <MDBContainer className="image_carousel">
      <MDBCarousel
        activeItem={1}
        length={4}
        showControls={false}
        showIndicators={false}
        className="z-depth-1"
        slide
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src={header_img1}
                alt="First slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src={header_img2}
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src={header_img3}
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="4">
            <MDBView>
              <img
                className="d-block w-100"
                src={header_img4}
                alt="Fourth slide"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
};

export default ImageCarousel;
