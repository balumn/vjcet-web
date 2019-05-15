import React from "react";
import HeadingTwo from "../../Components/Texts/HeadingTwo";
import ImageOne from "../../Components/Images/ImageOne";
import BodyOneJustified from "../../Components/Texts/BodyOneJustified";
import "../styles.css"
import Gym from "../Gym";
import HeadingOne from "../../Components/Texts/HeadingOne";
import Header from "../../Components/Header&Footer/Header";
import Footer from "../../Components/Header&Footer/Footer";
import MenuOverlay from "../../Components/MenuOverlay/MenuOverlay";


class Sports extends React.Component{
    state = { showMenu: false };
    openMenu = () => {
      console.log("opening Menu");
      this.setState({ showMenu: true });
    };
    closeMenu = () => {
      this.setState({ showMenu: false });
    };

    HomePageHeader = {
        instanceID: "HomePageHeader"
      };
      HomePageFooter = {
        instanceID: "HomePageFooter"
      };

    SportsTitle = {
        instanceID: "SportsTitle",
        title: "Sports at VJCET"
    };
    SportsContent1 = {
        instanceID: "SportsContent1",
        title:"Viswajyothi believes that Sports plays a pivotal role in moulding one’s personality and maintaining good health. We have specially developed a sports-centric environment that truly gives a global experience to all our students.There are well-equipped gyms. The facilities are accessible all year round for use for all. Moreover, an Annual Sports Day “DRONA” is celebrated every year to give our students an opportunity to exhibit their athletic talents in front of their friends and teachers."
    }
    StatdiumTitle = {
        instanceID: "StatdiumTitle",
        title: "Stadium"
    };    
    StatdiumContent = {
        instanceID: "StatdiumContent",
        title: "Viswajyothi is maintaining a Multi purpose stadium with 200 Meter track as well as a Football and Cricket ground. Many football as well as cricket tournaments are held in this stadium."
    };

    CourtsTitle = {
        instanceID: "CourtsTitle",
        title: "Courts"
    }; 
    CourtsContent = {
        instanceID: "CourtsContent",
        title: "Viswajyothi has 2 basketball courts within the campus. It also boasts of about having 9 badminton courts (4 indoor and 5 outdoor) where students and staffs are practicing daily."
    };

    FootballTitle = {
        instanceID: "FootballTitle",
        title: "Football"
    };     
    FootballContent = {
        instanceID: "FootballContent",
        title: "Ever dreamt of playing in an environment as the ones you watch in premiership football? This being the most followed and played sport in the institute along with the state of art facilities available at your disposal, Football at Viswajyothi surely contributes to making your stay at the campus memorable! Together, lets make this excellent sport flourish even further and take it to new heights!Football is one of the successful clubs among all the clubs. Our football team has set up their mark in many inter colleges competition. Every year this group has a lot of young and enthusiasts athletes. The club gives an opportunity to show their talent by providing proper training with the help of well-trained coaches."
    }; 
    CricketTitle = {
        instanceID: "CricketTitle",
        title: "Cricket"
    }; 
    CricketContent = {
        instanceID: "CricketContent",
        title: "Cricket is surely one of the most loved sports of the country and the Viswajyothi Cricket Club was formed to nurture this love of the cricket enthusiasts in the institute. Cricket is one of the favourites and well-played game. This club offers proper ground with all international rules and norms. Viswajyothi organises cricket tournament every year. Our present cricket team is one of the best team we have ever had. Our cricket team expecting more participation next time and we expect favorable results from them."
    }; 
    BasketballTitle = {
        instanceID: "BasketballTitle",
        title: "Basketball"
    };
    BasketballContent = {
        instanceID: "BasketballContent",
        title: "Basketball is not just a sport at Viswajyothi, it is a culture of it's own. There is a robust community of basketball players who enjoy and practice basketball all days of the week! Every year Viswajyothi is conducting all kerala Basket Ball tournament “MAGNUM” in the mid of February. The institute men's and women's teams have shown exemplary performances at Inter-college competitions as well as in “MAGNUM” and also in the local circuit in Ernakulam time and again. All enthusiastic players are guided wonderfully by the coach and encouraged to pursue the sport wholeheartedly. He is a master trainer who delves into the intricacies of the game and brings out the best out of all his players. The infrastructure at Viswajyothi boasts of two outdoor state-of-the-art basketball courts. So come along and let's play basketball!"
    };
    TableTennisTitle = {
        instanceID: "TableTennisTitle",
        title: "Table Tennis"
    };
    TableTennisContent = {
        instanceID: "TableTennisContent",
        title: "Ever fancied playing in a state of the art, fully developed table tennis court which you get to see in your dreams? Look no further! We strive to portray table tennis as a sport with absolutely no prerequisites with a massive number of people picking up and excelling in this sport every year with the guidance of a dedicated coach and our team players. Headed by the Table Tennis secretary and driven by the conveners, Table Tennis Club promises fun to everyone who is a part of it. Let’s take the game to a higher level."
    };
    BadmintonTitle = {
        instanceID: "BadmintonTitle",
        title: "Badminton"
    };
    BadmintonContent = {
        instanceID: "BadmintonContent",
        title: "For all badminton loving folks of Viswajyothi. It has been one of the most active clubs handling the most active sport in the institute. With promotion of Badminton as its true motive, it has organised a wide range of events every year. This club’s activities are gonna be bigger and better. Badminton Club will be one of the most happening clubs of the year. Let's take the game in the institute to a higher level. Badminton Club offers 9 courts(4 indoor and 5 outdoor) with high standard inside the campus and has won many accolades. The club is formed with all categories single, double and regroups male and female athletes."
    };
    VolleyballTitle = {
        instanceID: "VolleyballTitle",
        title: "Volleyball"
    };
    VolleyballContent = {
        instanceID: "VolleyballContent",
        title: "Viswajyothi Volleyball Club is one of the most enthusiastic clubs at the institute and is committed to training athletes to perform at their highest level by uniting talented and passionate players. We view the volleyball court as our classroom, transformed to teach lessons of accountability, character, commitment, communication, cooperation, courage, discipline, integrity, leadership, respect, responsibility, teamwork, work ethic, and the importance of sacrifice and sportsmanship. We strive to have a positive impact on each and every individual in our club. We participate in various tournaments in and around Ernakulam."
    };
    SportsImagedata = {
        instanceID: "SportsImagedata",
        image: "basket.jpg",
        width: "100%"
    }
    render() {
      return (
          <React.Fragment>
            <Header data={this.HomePageHeader} openMenuFunction={this.openMenu} />
            <div className="contain">
            <HeadingOne data={this.SportsTitle} className="Heading" />
            <ImageOne data={this.SportsImagedata} />
            <div className="bodyContainer">
            <BodyOneJustified data={this.SportsContent1} />
            </div>
            <Gym />
            <HeadingTwo data={this.BasketballTitle} className="Heading" />
            <BodyOneJustified data={this.BasketballContent} />
            <HeadingTwo data={this.StatdiumTitle} className="Heading" />
            <BodyOneJustified data={this.StatdiumContent} />
            <HeadingTwo data={this.CourtsTitle} className="Heading" />
            <BodyOneJustified data={this.CourtsContent} />
            <HeadingTwo data={this.FootballTitle} className="Heading" />
            <BodyOneJustified data={this.FootballContent} />
            <HeadingTwo data={this.CricketTitle} className="Heading" />
            <BodyOneJustified data={this.CricketContent} />
            <HeadingTwo data={this.TableTennisTitle} className="Heading" />
            <BodyOneJustified data={this.TableTennisContent} />
            <HeadingTwo data={this.BadmintonTitle} className="Heading" />
            <BodyOneJustified data={this.BadmintonContent} />
            <HeadingTwo data={this.VolleyballTitle} className="Heading" />
            <BodyOneJustified data={this.VolleyballContent} />
            </div>
            <Footer data={this.HomePageFooter} />
            {this.state.showMenu ? (<MenuOverlay closeMenuFunction={this.closeMenu} /> ) : ("")}
          </React.Fragment>
      )
    }

}

export default Sports;