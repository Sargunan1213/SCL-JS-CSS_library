"use strict";
const s = new Card();
s.makeCardANone(
  "card",
  "./images/function1.jpg",
  "The library and this website were designed by Sargunan Gurumurthy."
);
s.makeCardAOpacity(
  "card2",
  "./images/background.jpg",
  "./images/background.jpg",
  "Sargunan",
  "WEB APP DESIGNER"
);
s.makeCardAFlip(
  "card3",
  "./images/background.jpg",
  "./images/background.jpg",
  "Sargunan",
  "WEB APP DESIGNER"
);
s.makeSliderOne("card4", [
  "./images/background.jpg",
  "./images/nature.jpg",
  "./images/background.jpg",
]);
