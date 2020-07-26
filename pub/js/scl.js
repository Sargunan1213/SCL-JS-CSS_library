"use strict";

function Card() {
  this.cards = [];
  this.slider = [];
}
let travel = 0;
function tranRight(event) {
  const container = document.getElementById("scl_Slider_imgholder");
  const count = container.childElementCount;
  const img_size = container.offsetWidth;
  travel -= img_size;
  if (travel <= count * img_size * -1) {
    travel = 0;
    container.style.transform = "translateX(0px)";
  } else {
    container.style.transform = "translateX(" + travel + "px)";
  }
}
function tranLeft(event) {
  const container = document.getElementById("scl_Slider_imgholder");
  const count = container.childElementCount;
  const img_size = container.offsetWidth;
  if (travel >= 0) {
    travel = (count - 1) * img_size;
    travel = travel * -1;
    container.style.transform = "translateX(" + travel + "px)";
  } else {
    travel += img_size;
    container.style.transform = "translateX(" + travel + "px)";
  }
}

Card.prototype = {
  makeCardANone: function (elementname, image_src, text) {
    const card = document.createElement("div");
    card.className = "scl_ANone";
    const container = document.createElement("div");
    container.className = "scl_ANone_container";
    const img = document.createElement("img");
    img.src = image_src;
    img.className = "scl_ANone_img";
    container.appendChild(img);
    card.appendChild(container);
    const info = document.createElement("p");
    info.appendChild(document.createTextNode(text));
    info.className = "scl_ANone_text";
    card.appendChild(info);
    const elem = document.getElementsByName(elementname);
    elem[0].appendChild(card);
    this.cards.push(card);
  },

  makeCardAOpacity: function (
    elementname,
    image_src1,
    image_src2,
    title_text,
    text,
    links
  ) {
    const card = document.createElement("div");
    card.className = "scl_AOpacity";
    card.style.backgroundImage = "url(" + image_src1 + ")";

    const container = document.createElement("div");
    container.className = "scl_AOpacity_container";
    const icon = document.createElement("img");
    icon.src = image_src2;
    icon.className = "scl_AOpacity_icon";
    container.appendChild(icon);
    card.appendChild(container);

    const container2 = document.createElement("div");
    container2.className = "scl_AOpacity_container2";
    const info = document.createElement("h1");
    info.appendChild(document.createTextNode(title_text));
    info.className = "scl_AOpacity_text";
    const description = document.createElement("p");
    description.appendChild(document.createTextNode(text));
    description.className = "scl_AOpacity_text2";

    const face_div = document.createElement("div");
    face_div.className = "scl_AOpacity_aholder";

    const facebook_a = document.createElement("a");
    facebook_a.className = "scl_AOpacity_a";
    facebook_a.href = links[0];
    facebook_a.target = "_blank";
    const facebook_icon = document.createElement("i");
    facebook_icon.className = "fa fa-facebook-square";
    facebook_icon.setAttribute("aria-hidden", "true");
    facebook_a.appendChild(facebook_icon);
    face_div.appendChild(facebook_a);

    const github_a = document.createElement("a");
    github_a.className = "scl_AOpacity_agit";
    github_a.href = links[1];
    github_a.target = "_blank";
    const github_icon = document.createElement("i");
    github_icon.className = "fa fa-github-square";
    github_icon.setAttribute("aria-hidden", "true");
    github_a.appendChild(github_icon);
    face_div.appendChild(github_a);

    const linked_a = document.createElement("a");
    linked_a.className = "scl_AOpacity_agit";
    linked_a.href = links[2];
    linked_a.target = "_blank";
    const linked_icon = document.createElement("i");
    linked_icon.className = "fa fa-linkedin-square";
    linked_icon.setAttribute("aria-hidden", "true");
    linked_a.appendChild(linked_icon);
    face_div.appendChild(linked_a);

    container2.appendChild(info);
    container2.appendChild(description);
    container2.appendChild(face_div);
    card.appendChild(container2);

    const elem = document.getElementsByName(elementname);
    elem[0].appendChild(card);
    this.cards.push(card);
  },

  makeCardAFlip: function (
    elementname,
    image_src1,
    image_src2,
    title_text,
    text,
    links
  ) {
    const card = document.createElement("div");
    card.className = "scl_AFlip";

    const front = document.createElement("div");
    front.className = "scl_AFlip_front";
    front.style.backgroundImage = "url(" + image_src1 + ")";

    const text_container = document.createElement("div");
    text_container.className = "scl_AFlip_container2";
    const info = document.createElement("h1");
    info.appendChild(document.createTextNode(title_text));
    info.className = "scl_AFlip_text";
    const description = document.createElement("p");
    description.appendChild(document.createTextNode(text));
    description.className = "scl_AFlip_text2";
    text_container.appendChild(info);
    text_container.appendChild(description);
    front.appendChild(text_container);

    card.appendChild(front);

    const back = document.createElement("div");

    back.className = "scl_AFlip_back";

    const img_container = document.createElement("div");
    img_container.className = "scl_AFlip_container";
    const icon = document.createElement("img");
    icon.src = image_src2;
    icon.className = "scl_AFlip_icon";
    img_container.appendChild(icon);
    back.appendChild(img_container);

    const details = document.createElement("div");
    details.className = "scl_AFlip_details";
    const info_back = document.createElement("h1");
    info_back.appendChild(document.createTextNode(title_text));
    info_back.className = "scl_AFlip_text3";
    details.appendChild(info_back);

    const face_div = document.createElement("div");
    face_div.className = "scl_AFlip_aholder";

    const facebook_a = document.createElement("a");
    facebook_a.className = "scl_AFlip_a";
    facebook_a.href = links[0];
    facebook_a.target = "_blank";
    const facebook_icon = document.createElement("i");
    facebook_icon.className = "fa fa-facebook-square";
    facebook_icon.setAttribute("aria-hidden", "true");
    facebook_a.appendChild(facebook_icon);
    face_div.appendChild(facebook_a);

    const github_a = document.createElement("a");
    github_a.className = "scl_AFlip_agit";
    github_a.href = links[1];
    github_a.target = "_blank";
    const github_icon = document.createElement("i");
    github_icon.className = "fa fa-github-square";
    github_icon.setAttribute("aria-hidden", "true");
    github_a.appendChild(github_icon);
    face_div.appendChild(github_a);

    const linked_a = document.createElement("a");
    linked_a.className = "scl_AFlip_agit";
    linked_a.href = links[2];
    linked_a.target = "_blank";
    const linked_icon = document.createElement("i");
    linked_icon.className = "fa fa-linkedin-square";
    linked_icon.setAttribute("aria-hidden", "true");
    linked_a.appendChild(linked_icon);
    face_div.appendChild(linked_a);

    const face_div2 = document.createElement("div");
    face_div2.className = "scl_AFlip_aholder";

    const twitter_a = document.createElement("a");
    twitter_a.className = "scl_AFlip_a";
    twitter_a.href = links[3];
    twitter_a.target = "_blank";
    const twitter_icon = document.createElement("i");
    twitter_icon.className = "fa fa-twitter-square";
    twitter_icon.setAttribute("aria-hidden", "true");
    twitter_a.appendChild(twitter_icon);
    face_div2.appendChild(twitter_a);

    const instagram_a = document.createElement("a");
    instagram_a.className = "scl_AFlip_agit";
    instagram_a.href = links[4];
    instagram_a.target = "_blank";
    const instagram_icon = document.createElement("i");
    instagram_icon.className = "fa fa-instagram";
    instagram_icon.setAttribute("aria-hidden", "true");
    instagram_a.appendChild(instagram_icon);
    face_div2.appendChild(instagram_a);

    const watsapp_a = document.createElement("a");
    watsapp_a.className = "scl_AFlip_agit";
    watsapp_a.href = links[5];
    watsapp_a.target = "_blank";
    const watsapp_icon = document.createElement("i");
    watsapp_icon.className = "fa fa-envelope";
    watsapp_icon.setAttribute("aria-hidden", "true");
    watsapp_a.appendChild(watsapp_icon);
    face_div2.appendChild(watsapp_a);

    back.appendChild(details);
    back.appendChild(face_div);
    back.appendChild(face_div2);
    card.appendChild(back);

    const elem = document.getElementsByName(elementname);
    elem[0].appendChild(card);
    this.cards.push(card);
  },
  makeSliderOne: function (elementname, image_list) {
    const slider = document.createElement("div");
    slider.className = "scl_Slider";

    const left_button = document.createElement("button");
    left_button.appendChild(document.createTextNode("<"));
    left_button.className = "scl_Slider_left_button";
    left_button.onclick = tranLeft;
    slider.appendChild(left_button);

    const image_holder = document.createElement("div");
    image_holder.id = "scl_Slider_imgholder";
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

    const elem = document.getElementsByName(elementname);
    elem[0].appendChild(slider);
    this.cards.push(slider);
  },
};
