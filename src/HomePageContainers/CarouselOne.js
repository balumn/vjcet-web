import React, { Component } from "react";
import "./CarouselOne.css";
import ImageOne from "../Components/Images/ImageOne";
import HeadingFive from "../Components/Texts/HeadingFive";

class CarouselOne extends Component {
  state = {
    currentSelected: 1
  };
  PreviousArrow = {
    instanceID: "CarouselOnePreviousArrow",
    image: "previousArrow.svg",
    width: "47px"
  };

  NextArrow = {
    instanceID: "CarouselOneNextArrow",
    image: "nextArrow.svg",
    width: "47px"
  };

  StockPhoto = {
    instanceID: "CarouselOneStockPhoto",
    image: "stock1.png",
    width: "100%"
  };
  StockPhoto2 = {
    instanceID: "CarouselOneStockPhoto",
    image: "stock2.png",
    width: "100%"
  };

  lorem = {
    instanceID: "lorem",
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur iaculis turpis eu turpis gravida, sed pellentesque odio ultricies. Cras mattis odio neque, sed placerat metus tempor pulvinar.  Read More"
  };
  dataArray = [
    {
      image: this.StockPhoto,
      caption: this.lorem
    },
    {
      image: this.StockPhoto2,
      caption: this.lorem
    },
    {
      image: this.StockPhoto,
      caption: this.lorem
    },
    {
      image: this.StockPhoto2,
      caption: this.lorem
    },
    {
      image: this.StockPhoto,
      caption: this.lorem
    },
    {
      image: this.StockPhoto2,
      caption: this.lorem
    }
  ];
  rotateLeft = () => {
    this.dataArray.unshift(this.dataArray.pop());
    console.log("rotateLeft");
    this.setState({});
  };
  rotateRight = () => {
    this.dataArray.push(this.dataArray.shift());
    console.log("rotateRight");
    this.setState({});
  };
  render() {
    const { instanceID } = this.props.data;
    return (
      <div
        className="CarouselOne"
        id={instanceID}
        style={{ position: "relative" }}
      >
        <div className="CarouselOneSlider">
          <div
            className="CarouselOneSlide leftHalfSlide"
            id={instanceID + "SlideOne"}
          >
            <ImageOne
              data={this.dataArray[this.state.currentSelected - 1].image}
              imgStyle={{ height: "100%", objectFit: "cover" }}
              containerStyle={{ height: "100%" }}
            />
          </div>
          <div
            className="CarouselOneSlide mainSlideContainer"
            id={instanceID + "SlideTwo"}
          >
            <ImageOne
              data={this.dataArray[this.state.currentSelected].image}
              className="MainSlideImageContainer"
              imgStyle={{
                height: "inherit",
                objectFit: "cover"
              }}
            />
            <div className="MainSlideDescription">
              <HeadingFive data={this.lorem} />
            </div>
            <div className="CarouselOneControls">
              <div style={{ position: "relative", width: "100%" }}>
                <ImageOne
                  data={this.PreviousArrow}
                  className="PreviousArrow"
                  onClickAction={this.rotateLeft}
                />
                <ImageOne
                  data={this.NextArrow}
                  className="NextArrow"
                  onClickAction={this.rotateRight}
                />
              </div>
            </div>
          </div>
          <div
            className="CarouselOneSlide rightHalfSlide"
            id={instanceID + "SlideThree"}
          >
            <ImageOne
              data={this.dataArray[this.state.currentSelected + 1].image}
              imgStyle={{ height: "100%", objectFit: "cover" }}
              containerStyle={{ height: "100%" }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CarouselOne;
