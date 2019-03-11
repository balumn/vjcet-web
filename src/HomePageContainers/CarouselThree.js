import React, { Component } from "react";
import "./CarouselThree.css";
import HeadingTwo from "../Components/Texts/HeadingTwo";
import HeadingFour from "../Components/Texts/HeadingFour";
import HeadingFive from "../Components/Texts/HeadingFive";
import ImageOne from "../Components/Images/ImageOne";

class CarouselThree extends Component {
  state = { sliderSize: 3, currentPage: 0 };
  componentDidMount() {
    this.setState({ sliderSize: window.innerWidth < 768 ? 1 : 3 });
  }
  rotateLeft = () => {
    console.log("rotateLeft");
    console.log(this.state.currentPage);
    if (this.state.currentPage - 1 < 0) {
      this.setState({
        currentPage: Math.floor(this.slides.length / this.state.sliderSize) - 1
      });
    } else {
      this.setState({
        currentPage: this.state.currentPage - 1
      });
    }
  };
  rotateRight = () => {
    console.log("rotateRight");
    console.log(this.state.currentPage);
    if (
      this.state.currentPage + 1 >
      Math.floor(this.slides.length / this.state.sliderSize) - 1
    ) {
      this.setState({
        currentPage: 0
      });
    } else {
      this.setState({
        currentPage: this.state.currentPage + 1
      });
    }
  };
  News = {
    instanceID: "CarouselThreeNews",
    title: "News"
  };

  Previous = {
    instanceID: "CarouselThreePreviousArrow",
    image: "CarouselThreePrevious.svg",
    width: "30px"
  };

  Next = {
    instanceID: "CarouselThreeNextArrow",
    image: "CarouselThreeNext.svg",
    width: "30px"
  };

  Read = {
    instanceID: "Read",
    title: "Read"
  };

  SlideOneCategory = {
    instanceID: "SlideOneCategory",
    title: "Exams"
  };

  SlideOneTitle = {
    instanceID: "SlideOneTitle",
    title: "Schedule For Internal Redo Of Examinations"
  };

  SlideOneImage = {
    instanceID: "CarouselThreeSlideOneImage",
    image: "stock1.png",
    width: "210px"
  };

  SlideTwoCategory = {
    instanceID: "SlideOneCategory",
    title: "Placements"
  };

  SlideTwoTitle = {
    instanceID: "SlideOneTitle",
    title: "Placement Details for 2019"
  };

  SlideTwoImage = {
    instanceID: "CarouselThreeSlideOneImage",
    image: "stock2.png",
    width: "210px"
  };

  SlideThreeCategory = {
    instanceID: "SlideOneCategory",
    title: "Activities"
  };

  SlideThreeTitle = {
    instanceID: "SlideOneTitle",
    title:
      "Congratulations to Mr.Sanil Cyriac Mathew, Mr.Abraham George, Ms. Mahima Harikrishnan…."
  };

  SlideThreeImage = {
    instanceID: "CarouselThreeSlideOneImage",
    image: "stock1.png",
    width: "0px"
  };
  slides = [
    {
      Category: {
        instanceID: "SlideOneCategory",
        title: "Exams"
      },

      Title: {
        instanceID: "SlideOneTitle",
        title: "Schedule For Internal Redo Of Examinations"
      },

      Image: {
        instanceID: "CarouselThreeSlideOneImage",
        image: "stock1.png",
        width: "210px"
      }
    },
    {
      Category: {
        instanceID: "SlideOneCategory",
        title: "Placements"
      },

      Title: {
        instanceID: "SlideOneTitle",
        title: "Placement Details for 2019"
      },

      Image: {
        instanceID: "CarouselThreeSlideOneImage",
        image: "stock2.png",
        width: "210px"
      }
    },
    {
      Category: {
        instanceID: "SlideOneCategory",
        title: "Activities"
      },

      Title: {
        instanceID: "SlideOneTitle",
        title:
          "Congratulations to Mr.Sanil Cyriac Mathew, Mr.Abraham George, Ms. Mahima Harikrishnan…."
      },

      Image: {
        instanceID: "CarouselThreeSlideOneImage",
        image: "stock1.png",
        width: "0px"
      }
    }
  ];
  render() {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 768 && this.state.sliderSize > 1) {
        this.setState({ sliderSize: 1 });
      } else if (window.innerWidth >= 768 && this.state.sliderSize < 3) {
        this.setState({ sliderSize: 3 });
      }
    });

    const { instanceID } = this.props.data;

    return (
      <div className="CarouselThree" id={instanceID}>
        <div className="CarouselThreeContentWrapper">
          <div className="CarouselThreeTop">
            <HeadingTwo data={this.News} />
            <div className="CarouselThreeArrows">
              <ImageOne data={this.Previous} onClickAction={this.rotateLeft} />
              <ImageOne
                className="CarouselThreeArrowRight"
                data={this.Next}
                onClickAction={this.rotateRight}
              />
            </div>
          </div>
          <div className="CarouselThreeSlider">
            {this.slides.map((item, index, arr) => {
              if (
                index < this.state.sliderSize + this.state.currentPage &&
                index >= this.state.currentPage * this.state.sliderSize
              ) {
                return (
                  <div
                    className="CarouselThreeSlide"
                    id={instanceID + "SlideThree"}
                  >
                    <HeadingFive data={item.Category} />
                    <HeadingFour data={item.Title} />
                    <HeadingFive data={this.Read} />
                    <ImageOne data={item.Image} />
                  </div>
                );
              }
            })}
          </div>
        </div>

        <div className="CarouselThreePagination">
          {this.slides.map((item, index, arr) => {
            if (index % this.state.sliderSize === 0)
              return (
                <div
                  style={{
                    height: "6px",
                    width: "6px",
                    backgroundColor:
                      index === this.state.currentPage ? "#880D1E" : "#aaa",
                    margin: "5px",
                    borderRadius: "100%"
                  }}
                />
              );
          })}
        </div>
      </div>
    );
  }
}

export default CarouselThree;
