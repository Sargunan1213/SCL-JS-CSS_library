"use strict";

const default_image =
  "https://res.cloudinary.com/doaxg76qe/image/upload/v1596985177/ben1xw6w8jfpaoltn1qz.png";
function Card() {
  this.cards = [];
  this.slider = [];
}
let travel = [];

function tranRight(event) {
  const container = event.target.parentElement.childNodes[1];
  // const container = document.getElementById("scl_Slider_imgholder");
  // console.log(event);
  const count = container.childElementCount;
  const img_size = container.offsetWidth;
  const id = parseInt(container.id);
  travel[id] -= img_size;
  if (travel[id] <= count * img_size * -1) {
    travel[id] = 0;
    container.style.transform = "translateX(0px)";
  } else {
    container.style.transform = "translateX(" + travel[id] + "px)";
  }
}
function tranLeft(event) {
  // const container = document.getElementById("scl_Slider_imgholder");
  const container = event.target.parentElement.childNodes[1];
  const count = container.childElementCount;
  const img_size = container.offsetWidth;
  const id = parseInt(container.id);
  if (travel[id] >= 0) {
    travel[id] = (count - 1) * img_size;
    travel[id] = travel[id] * -1;
    container.style.transform = "translateX(" + travel[id] + "px)";
  } else {
    travel[id] += img_size;
    container.style.transform = "translateX(" + travel[id] + "px)";
  }
}

function makeicon(face_div, link, icon) {
  const div = document.createElement("div");
  div.className = "scl_icondiv";
  const facebook_a = document.createElement("a");
  facebook_a.className = "scl_icon";
  facebook_a.href = link;
  facebook_a.target = "_blank";
  const facebook_icon = document.createElement("i");
  facebook_icon.className = icon;
  facebook_icon.setAttribute("aria-hidden", "true");
  facebook_a.appendChild(facebook_icon);
  div.appendChild(facebook_a);
  face_div.appendChild(div);
}

function card1(card, input) {
  // input - image, text
  const div = document.createElement("div");
  div.className = "scl_card1_holder";
  const container = document.createElement("div");
  container.className = "scl_card1_container";
  const img = document.createElement("img");
  img.src = input[0];
  img.className = "scl_card1_img";
  container.appendChild(img);
  div.appendChild(container);
  const info = document.createElement("p");
  info.appendChild(document.createTextNode(input[1]));
  info.className = "scl_card1_text";
  div.appendChild(info);
  card.appendChild(div);
}

function card2(card, input) {
  // input - image1, image2, titletext , text, links

  //set 100% 100%
  const div = document.createElement("div");
  div.className = "scl_card2_holder";
  const links = input[4];
  const container = document.createElement("div");
  container.className = "scl_card2_container";
  const icon = document.createElement("div");
  // icon.src = input[1];
  icon.className = "scl_card2_icon";
  icon.style.backgroundImage = "url(" + input[1] + ")";
  container.appendChild(icon);
  div.appendChild(container);

  const container2 = document.createElement("div");
  container2.className = "scl_card2_container2";
  const info = document.createElement("h1");
  info.appendChild(document.createTextNode(input[2]));
  info.className = "scl_card2_text";
  const description = document.createElement("p");
  description.appendChild(document.createTextNode(input[3]));
  description.className = "scl_card2_text2";

  const face_div = document.createElement("div");
  face_div.className = "scl_card2_aholder";

  makeicon(face_div, links[0], "fa fa-facebook-square");
  makeicon(face_div, links[1], "fa fa-github-square");
  makeicon(face_div, links[2], "fa fa-linkedin-square");

  container2.appendChild(info);
  container2.appendChild(description);
  container2.appendChild(face_div);
  div.appendChild(container2);
  div.style.backgroundImage = "url(" + input[0] + ")";
  card.appendChild(div);
}

function card3(card, input) {
  //input - image, text, text
  // card.style.backgroundImage = "url(" + input[0] + ")";
  const div = document.createElement("div");
  div.className = "scl_card2_holder";
  const text_container = document.createElement("div");
  text_container.className = "scl_card3_container2";
  const info = document.createElement("h1");
  info.appendChild(document.createTextNode(input[1]));
  info.className = "scl_card3_text";
  const description = document.createElement("p");
  description.appendChild(document.createTextNode(input[2]));
  description.className = "scl_card3_text2";
  text_container.appendChild(info);
  text_container.appendChild(description);
  div.appendChild(text_container);
  div.style.backgroundImage = "url(" + input[0] + ")";
  card.appendChild(div);
}

function card4(card, input) {
  //input - video, type,  image, title, links
  const div = document.createElement("div");
  div.className = "scl_card4_holder";
  const video = document.createElement("video");
  video.className = "scl_card4_video";
  video.loop = true;
  video.autoplay = true;
  video.muted = true;
  const source = document.createElement("source");
  source.src = input[0];
  source.type = input[1];
  video.appendChild(source);
  div.appendChild(video);
  const links = input[4];
  const container = document.createElement("div");
  container.className = "scl_card2_container";
  const icon = document.createElement("div");
  icon.className = "scl_card2_icon";
  icon.style.backgroundImage = "url(" + input[2] + ")";
  container.appendChild(icon);
  div.appendChild(container);

  const container2 = document.createElement("div");
  container2.className = "scl_card2_container2";
  const info = document.createElement("h1");
  info.appendChild(document.createTextNode(input[3]));
  info.className = "scl_card2_text";

  const face_div = document.createElement("div");
  face_div.className = "scl_card4_aholder";

  makeicon(face_div, links[0], "fa fa-facebook-square");
  makeicon(face_div, links[1], "fa fa-github-square");
  makeicon(face_div, links[2], "fa fa-linkedin-square");

  const face_div2 = document.createElement("div");
  face_div2.className = "scl_card4_aholder";
  makeicon(face_div2, links[3], "fa fa-twitter-square");
  makeicon(face_div2, links[4], "fa fa-instagram");
  makeicon(face_div2, links[5], "fa fa-envelope");

  container2.appendChild(info);
  container2.appendChild(face_div);
  container2.appendChild(face_div2);
  div.appendChild(container2);
  // div.style.backgroundImage = "url(" + input[0] + ")";
  card.appendChild(div);
}

const functions = {
  1: card1,
  2: card2,
  3: card3,
  4: card4,
};

function makeCardANone(elementname, facenumber, inputs) {
  const card = document.createElement("div");
  card.className = "scl_ANone";
  functions[facenumber](card, inputs);
  const elem = document.getElementsByName(elementname);
  elem[0].appendChild(card);
  return card;
}

function makeCardAOpacity(elementname, facenumber, inputs) {
  const card = document.createElement("div");
  card.className = "scl_AOpacity";
  functions[facenumber](card, inputs);
  const elem = document.getElementsByName(elementname);
  elem[0].appendChild(card);
  return card;
}

function makeCardAFlip(
  elementname,
  facenumber1,
  inputs1,
  facenumber2,
  inputs2
) {
  const card = document.createElement("div");
  card.className = "scl_AFlip";

  const front = document.createElement("div");
  front.className = "scl_AFlip_front";
  functions[facenumber1](front, inputs1);
  card.appendChild(front);

  const back = document.createElement("div");
  back.className = "scl_AFlip_back";
  functions[facenumber2](back, inputs2);
  card.appendChild(back);

  const elem = document.getElementsByName(elementname);
  elem[0].appendChild(card);
  return card;
}

function makeSliderOne(elementname, image_list) {
  const slider = document.createElement("div");
  slider.className = "scl_Slider";

  const left_button = document.createElement("button");
  left_button.appendChild(document.createTextNode("<"));
  left_button.className = "scl_Slider_left_button";
  left_button.onclick = tranLeft;
  slider.appendChild(left_button);

  const image_holder = document.createElement("div");
  image_holder.id = "" + travel.length;
  image_holder.className = "scl_Slider_imgholder";
  for (let i = 0; i < image_list.length; i++) {
    const img = document.createElement("img");
    img.src = image_list[i];
    img.className = "scl_Slider_img";
    image_holder.appendChild(img);
  }
  slider.appendChild(image_holder);

  const right_button = document.createElement("button");
  right_button.appendChild(document.createTextNode(">"));
  right_button.className = "scl_Slider_right_button";
  right_button.onclick = tranRight;
  slider.appendChild(right_button);
  travel.push(0);

  const elem = document.getElementsByName(elementname);
  elem[0].appendChild(slider);
  return slider;
}

const cards = {
  1: makeCardANone,
  2: makeCardAOpacity,
  3: makeCardAFlip,
};

const sliders = {
  1: makeSliderOne,
};

Card.prototype = {
  makeCard: function (
    element,
    cardnumber = 1,
    facenumber = 1,
    faces = [],
    optional = {}
  ) {
    if (cardnumber === 3) {
      const card = cards[cardnumber](
        element,
        facenumber[0],
        faces[0],
        facenumber[1],
        faces[1]
      );
      this.cards.push(card);
    } else {
      const card = cards[cardnumber](element, facenumber, faces);
      this.cards.push(card);
    }
  },
  makeSlider: function (element, slidernumber, inputs, facenumber = []) {
    if (facenumber.length === 0) {
      const slider = sliders[slidernumber](element, inputs);
      this.slider.push(slider);
    }
  },
};
