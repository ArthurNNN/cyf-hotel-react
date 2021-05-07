import React from "react";
import Heading from "./Heading";
import TouristInfoCards from "./TouristInfoCards";
import Bookings from "./Bookings";
import Restaurant from "./Restaurant";
import Footer from "./Footer";
import "./App.css";

const App = () => {
  var cities = [
    {
      name: "Glasgow",
      imgUrl: "https://media.timeout.com/images/105396642/image.jpg",
      text:
        "Explore the city's must-see sights, cultural attractions, amazing shopping, vibrant nightlife and more - make your next stop Glasgow!",
      citySiteUrl: "https://peoplemakeglasgow.com"
    },
    {
      name: "London",
      imgUrl:
        "https://cdn.londonandpartners.com/-/media/images/london/visit/general-london/jl_201410_visit_london_1801-edit.jpg?mw=1030&hash=5925E97836C2219F839926B932015987707BB7E7",
      text:
        "From iconic sightseeing spots and fun-filled days out to top restaurants, theatre and unmissable London events. If you’re not able to visit just yet, plan ahead to make the most of your next visit.",
      citySiteUrl: "https://visitlondon.com"
    },
    {
      name: "Manchester",
      imgUrl:
        "https://absolutely.london/wp-content/uploads/2017/05/MANCHESTER-HERO-1068x712.jpg",
      text:
        "Youthful, diverse, energetic and bursting with character; Manchester is one of the most exciting places to visit in the UK right now where everybody and anybody is very warmly welcomed.",
      citySiteUrl: "https://visitmanchester.com/"
    }
  ];
  const footerArr = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards citiesArr={cities} />
      <Bookings />
      <Restaurant />
      <Footer footerArr={footerArr} />
    </div>
  );
};

export default App;
