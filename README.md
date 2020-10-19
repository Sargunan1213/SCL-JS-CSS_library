# SCL Library

**Deployed App:**  https://polar-coast-80311.herokuapp.com/example.html

## Description:
The library is designed to provide users an easy way to create customisable cards and scrolling
elements. The most basic feature of the library is generating a fully styled card element that can be customised with information, images and animations.
These include flipping the card, making the card a popup or clipart animations among other things.
The library also provides the user the power to generate fully customisable scrolling elements that
contains multiple cards.

### Usage



## Getting Started:
The first step to use the library is adding the script and link tags into the code.

<link rel="stylesheet" type="text/css" href="./css/scl.css"/>

<script defer type="text/javascript" src="./js/scl.js"></script>

Secondly, initialise a new card variable in your javascript file and passin the name of an empty div.

const card = new Card();

card.makeCard("card_name", 1, 3, ["image_link","TITLE","SUB-TITLE"]);

**Voila,** the website looks stunning now. 

NOTE: Users using face numbers 2 and 4 must import the Font awesome 4.7 library for the icons.(https://fontawesome.com/v4.7.0/)
