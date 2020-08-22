"use strict";
/*
 * Resources Used:
 *  https://fontawesome.com/v4.7.0/ - Font Awesome 4.7 library for icons
 *
 */
(function (global) {
  function Card() {
    this.cards = [];
    this.slider = [];
  }

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
          faces[1],
          optional
        );
        this.cards.push(card);
      } else {
        const card = cards[cardnumber](element, facenumber, faces, optional);
        this.cards.push(card);
      }
    },
    makeSlider: function (element, slidernumber, inputs, facenumber = []) {
      if (facenumber.length === 0) {
        const slider = sliders[slidernumber](element, inputs);
        this.slider.push(slider);
      }
    },
    makeExpand: function (element, inputs) {
      const card = expandablecard(element, inputs);
      this.cards.push(card);
      return card;
    },
    autoPlay: function (id) {
      const element = document.getElementById(id);
      holders.push(element);
      if (holders.length === 1) {
        setTimeout(() => {
          window.requestAnimationFrame(move);
        }, 5000);
      }
    },
    carouselDots: function (
      element,
      facenumbers,
      faceinputs,
      optional = {},
      optionalface = {}
    ) {
      const holder = document.createElement("div");
      holder.className = "scl_carosel";
      holder.id = "holder" + carosel.length;
      carosel.push(0);
      current.push(0);
      const dots = document.createElement("div");
      dots.className = "scl_carosel_dots";
      for (let j = 0; j < facenumbers.length && j < 5; j++) {
        const dotobject = document.createElement("div");
        dotobject.className = "scl_dot";
        dotobject.id = "" + j;
        dotobject.addEventListener("click", caroseldot);
        dots.appendChild(dotobject);
      }
      dots.children[0].style.background = "white";
      holder.appendChild(dots);
      const left_button = document.createElement("h1");
      left_button.appendChild(document.createTextNode("<"));
      left_button.className = "scl_carosel_left";
      left_button.addEventListener("click", caroselleft);
      const right_button = document.createElement("h1");
      right_button.appendChild(document.createTextNode(">"));
      right_button.addEventListener("click", caroselright);
      right_button.className = "scl_carosel_right";
      if ("buttons" in optional && optional["buttons"]) {
        holder.appendChild(left_button);
        holder.appendChild(right_button);
      }
      const first = document.createElement("h1");
      first.appendChild(document.createTextNode("1"));
      first.className = "scl_carosel_first";
      first.addEventListener("click", caroselfirst);
      const last = document.createElement("h1");
      last.appendChild(document.createTextNode(facenumbers.length));
      last.className = "scl_carosel_last";
      last.addEventListener("click", carosellast);
      if ("numbers" in optional && optional["numbers"]) {
        holder.appendChild(first);
        holder.appendChild(last);
      }
      const cards = document.createElement("div");
      cards.className = "scl_carosel_cards";
      for (let i = 0; i < facenumbers.length; i++) {
        const j = i + 1;
        const str = "" + j;
        if (str in optionalface) {
          const div = functions[facenumbers[i]](
            cards,
            faceinputs[i],
            optionalface[str]
          );
          div.style.minWidth = "100%";
        } else {
          const div = functions[facenumbers[i]](cards, faceinputs[i]);
          div.style.minWidth = "100%";
        }
      }
      holder.appendChild(cards);
      const elem = document.getElementsByName(element);
      elem[0].appendChild(holder);
      this.slider.push(holder);
      return holder.id;
    },
    expandable: function (element, inputs) {
      const holder = document.createElement("div");
      holder.id = "scl_expandbar_holder" + expandbar.length;
      holder.className = "scl_expandbar_holder";
      expandbar.push(0);
      const button = document.createElement("div");
      button.className = "scl_expandbar_button";
      button.appendChild(document.createTextNode("+"));
      button.addEventListener("click", open);
      holder.appendChild(button);
      for (let i = 0; i < inputs.length; i++) {
        const card = this.makeExpand(holder, inputs[i]);
        holder.appendChild(card);
        card.style.display = "none";
      }
      const elem = document.getElementsByName(element);
      elem[0].appendChild(holder);
      this.slider.push(holder);
    },
  };

  function makeicon(face_div, link, icon, optional = {}) {
    const div = document.createElement("div");
    div.className = "scl_icondiv";
    const facebook_a = document.createElement("a");
    facebook_a.className = "scl_icon";
    facebook_a.href = link;
    facebook_a.target = "_blank";
    const facebook_icon = document.createElement("i");
    facebook_icon.className = icon;
    facebook_icon.setAttribute("aria-hidden", "true");
    if ("iconcolor" in optional) {
      facebook_icon.style.color = optional["iconcolor"];
    }
    facebook_a.appendChild(facebook_icon);
    div.appendChild(facebook_a);
    face_div.appendChild(div);
  }

  function card1(card, input, optional = {}) {
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
    if ("background" in optional) {
      info.style.background = optional["background"];
    }
    if ("color" in optional) {
      info.style.color = optional["color"];
    }
    div.appendChild(info);
    card.appendChild(div);
    return div;
  }

  function card2(card, input, optional = {}) {
    // input - image1, image2, titletext , text, links

    const div = document.createElement("div");
    div.className = "scl_card2_holder";
    const links = input[4];
    const container = document.createElement("div");
    container.className = "scl_card2_container";
    const icon = document.createElement("div");
    icon.className = "scl_card2_icon";
    icon.style.background = "url(" + input[1] + ")";
    icon.style.backgroundSize = "100% 100%";

    container.appendChild(icon);
    div.appendChild(container);

    const container2 = document.createElement("div");
    container2.className = "scl_card2_container2";
    const info = document.createElement("h1");
    info.appendChild(document.createTextNode(input[2]));
    info.className = "scl_card2_text";
    if ("title" in optional) {
      info.style.color = optional["title"];
    }
    const description = document.createElement("p");
    description.appendChild(document.createTextNode(input[3]));
    description.className = "scl_card2_text2";
    if ("subtitle" in optional) {
      description.style.color = optional["subtitle"];
    }
    const face_div = document.createElement("div");
    face_div.className = "scl_card2_aholder";

    makeicon(face_div, links[0], "fa fa-facebook-square", optional); //https://fontawesome.com/v4.7.0/ -Font Awesome Library 4.7 version used here to generate a facebook icon
    makeicon(face_div, links[1], "fa fa-github-square", optional); //https://fontawesome.com/v4.7.0/ - Font Awesome Library 4.7 version used here to generate a github icon
    makeicon(face_div, links[2], "fa fa-linkedin-square", optional); //https://fontawesome.com/v4.7.0/ - Font Awesome Library 4.7 version used here to generate a linkedin icon

    container2.appendChild(info);
    container2.appendChild(description);
    container2.appendChild(face_div);
    div.appendChild(container2);
    if ("opacity" in optional) {
      div.style.background =
        "linear-gradient(rgba(0,0,0," +
        optional["opacity"] +
        "), rgba(0,0,0," +
        optional["opacity"] +
        ")), url(" +
        input[0] +
        ")";
    } else {
      div.style.background = "url(" + input[0] + ")";
    }
    div.style.backgroundSize = "100% 100%";
    card.appendChild(div);
    return div;
  }

  function card3(card, input, optional = {}) {
    //input - image, text, text
    const div = document.createElement("div");
    div.className = "scl_card2_holder";
    const text_container = document.createElement("div");
    text_container.className = "scl_card3_container2";
    const info = document.createElement("h1");
    info.appendChild(document.createTextNode(input[1]));
    info.className = "scl_card3_text";
    if ("title" in optional) {
      info.style.color = optional["title"];
    }
    const description = document.createElement("p");
    description.appendChild(document.createTextNode(input[2]));
    description.className = "scl_card3_text2";
    if ("subtitle" in optional) {
      description.style.color = optional["subtitle"];
    }
    text_container.appendChild(info);
    text_container.appendChild(description);
    div.appendChild(text_container);
    if ("opacity" in optional) {
      div.style.background =
        "linear-gradient(rgba(0,0,0," +
        optional["opacity"] +
        "), rgba(0,0,0," +
        optional["opacity"] +
        ")), url(" +
        input[0] +
        ")";
    } else {
      div.style.background = "url(" + input[0] + ")";
    }
    div.style.backgroundSize = "100% 100%";
    card.appendChild(div);
    return div;
  }

  function card4(card, input, optional = {}) {
    //input - video, type,  image, title, links
    const div = document.createElement("div");
    div.className = "scl_card4_holder";
    const vidholder = document.createElement("div");
    vidholder.className = "scl_vid_holder";
    if ("opacity" in optional) {
      vidholder.style.opacity = optional["opacity"];
    }
    const video = document.createElement("video");
    video.className = "scl_card4_video";
    video.loop = true;
    video.autoplay = true;
    video.muted = true;
    const source = document.createElement("source");
    source.src = input[0];
    source.type = input[1];
    video.appendChild(source);
    vidholder.appendChild(video);
    div.appendChild(vidholder);
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
    if ("title" in optional) {
      info.style.color = optional["title"];
    }

    const face_div = document.createElement("div");
    face_div.className = "scl_card4_aholder";

    makeicon(face_div, links[0], "fa fa-facebook-square", optional); // https://fontawesome.com/v4.7.0/ -Font Awesome Library 4.7 version used here to generate a facebook icon
    makeicon(face_div, links[1], "fa fa-github-square", optional); // https://fontawesome.com/v4.7.0/ -Font Awesome Library 4.7 version used here to generate a github icon
    makeicon(face_div, links[2], "fa fa-linkedin-square", optional); // https://fontawesome.com/v4.7.0/ -Font Awesome Library 4.7 version used here to generate a linkedin icon

    const face_div2 = document.createElement("div");
    face_div2.className = "scl_card4_aholder";
    makeicon(face_div2, links[3], "fa fa-twitter-square", optional); // https://fontawesome.com/v4.7.0/ -Font Awesome Library 4.7 version used here to generate a twitter icon
    makeicon(face_div2, links[4], "fa fa-instagram", optional); // https://fontawesome.com/v4.7.0/ -Font Awesome Library 4.7 version used here to generate a instagram icon
    makeicon(face_div2, links[5], "fa fa-envelope", optional); // https://fontawesome.com/v4.7.0/ -Font Awesome Library 4.7 version used here to generate a email icon

    container2.appendChild(info);
    container2.appendChild(face_div);
    container2.appendChild(face_div2);
    div.appendChild(container2);
    card.appendChild(div);
    return div;
  }

  const functions = {
    1: card1,
    2: card2,
    3: card3,
    4: card4,
  };

  function makeCardANone(elementname, facenumber, inputs, optional = {}) {
    const card = document.createElement("div");
    card.className = "scl_ANone";
    functions[facenumber](card, inputs, optional);
    const elem = document.getElementsByName(elementname);
    elem[0].appendChild(card);
    return card;
  }

  function makeCardAOpacity(elementname, facenumber, inputs, optional = {}) {
    const card = document.createElement("div");
    card.className = "scl_AOpacity";
    functions[facenumber](card, inputs, optional);
    const elem = document.getElementsByName(elementname);
    elem[0].appendChild(card);
    return card;
  }

  function makeCardAFlip(
    elementname,
    facenumber1,
    inputs1,
    facenumber2,
    inputs2,
    optional = {}
  ) {
    const card = document.createElement("div");
    card.className = "scl_AFlip";

    const front = document.createElement("div");
    front.className = "scl_AFlip_front";
    functions[facenumber1](front, inputs1, optional);
    card.appendChild(front);

    const back = document.createElement("div");
    back.className = "scl_AFlip_back";
    functions[facenumber2](back, inputs2, optional);
    card.appendChild(back);

    const elem = document.getElementsByName(elementname);
    elem[0].appendChild(card);
    return card;
  }

  const travel = [];
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

  const clicks = [];
  function infoclick(event) {
    const element = event.target.parentElement;
    const para = element.lastChild;
    const button = element.children[1];
    const title = element.children[0];
    const id = parseInt(element.id.slice(5));
    if (clicks[id] === 0) {
      element.style.overflow = "auto";
      title.style.paddingTop = "10%";
      function doit(para) {
        para.style.display = "block";
      }
      function over(para) {
        para.style.overflow = "auto";
      }
      setTimeout(doit, 500, para);
      setTimeout(over, 400, element);
      button.innerText = "Less info";
      clicks[id] = 1;
    } else {
      const element = event.target.parentElement;
      const para = element.lastChild;
      element.style.overflow = "hidden";
      title.style.paddingTop = "3%";
      button.innerText = "More info";
      para.style.display = "none";
      clicks[id] = 0;
    }
  }

  function expandablecard(element, inputs) {
    const div = document.createElement("div");
    div.className = "scl_expand_holder";
    div.id = "click" + clicks.length;
    clicks.push(0);
    const title = document.createElement("h1");
    title.className = "scl_expand_title";
    title.appendChild(document.createTextNode(inputs[0]));
    const description = document.createElement("description");
    description.className = "scl_expand_description";
    description.appendChild(document.createTextNode(inputs[1]));
    const button = document.createElement("button");
    button.appendChild(document.createTextNode("More info"));
    button.className = "scl_expand_button";
    button.onclick = infoclick;
    div.appendChild(title);
    div.appendChild(button);
    div.appendChild(description);
    const elem = document.getElementsByName(element);
    if (elem.length === 0) {
      return div;
    }
    elem[0].appendChild(div);
    return elem;
  }

  const sliders = {
    1: makeSliderOne,
  };

  function func(dots, child, child2) {
    dots.children[child].style.background = "white";
    dots.children[child2].style.background = "transparent";
  }

  const carosel = [];
  const current = [];
  function caroseldot(event) {
    const dotid = parseInt(event.target.id);
    const holder = event.target.parentElement.parentElement;
    const eleid = parseInt(holder.id.slice(6));
    const div = holder.lastChild;
    const dots = holder.firstChild;
    const size = div.children[0].offsetWidth;
    const dist = current[eleid] - dotid;
    carosel[eleid] += size * dist;
    if (
      div.childElementCount > 5 &&
      dotid === 4 &&
      carosel[eleid] !== -1 * (div.childElementCount - 1) * size
    ) {
      current[eleid] = 3;
      div.style.transform = "translateX(" + carosel[eleid] + "px)";
      for (let i = 0; i < dots.childElementCount; i++) {
        dots.children[i].style.background = "transparent";
      }
      dots.children[4].style.background = "white";
      setTimeout(func, 500, dots, 3, 4);
      return;
    } else if (
      div.childElementCount > 5 &&
      dotid === 0 &&
      carosel[eleid] !== 0
    ) {
      current[eleid] = 1;
      div.style.transform = "translateX(" + carosel[eleid] + "px)";
      for (let i = 0; i < dots.childElementCount; i++) {
        dots.children[i].style.background = "transparent";
      }
      dots.children[0].style.background = "white";
      setTimeout(func, 500, dots, 1, 0);
      return;
    } else {
      current[eleid] = dotid;
      div.style.transform = "translateX(" + carosel[eleid] + "px)";
      for (let i = 0; i < dots.childElementCount; i++) {
        dots.children[i].style.background = "transparent";
      }
      dots.children[dotid].style.background = "white";
    }
  }

  function leftlogic(eleid, div, dots, size, dotid) {
    if (carosel[eleid] >= 0) {
      carosel[eleid] = -1 * (div.childElementCount - 1) * size;
      current[eleid] = 4;
      div.style.transform = "translateX(" + carosel[eleid] + "px)";
      for (let i = 0; i < dots.childElementCount; i++) {
        dots.children[i].style.background = "transparent";
      }
      dots.children[4].style.background = "white";
      return;
    } else {
      if (current[eleid] !== 0) {
        current[eleid] -= 1;
        for (let i = 0; i < dots.childElementCount; i++) {
          dots.children[i].style.background = "transparent";
        }
        dots.children[dotid - 1].style.background = "white";
      }
      carosel[eleid] += size;
      div.style.transform = "translateX(" + carosel[eleid] + "px)";
      if (
        div.childElementCount > 5 &&
        current[eleid] == 0 &&
        carosel[eleid] !== 0
      ) {
        current[eleid] = 1;
        for (let i = 0; i < dots.childElementCount; i++) {
          dots.children[i].style.background = "transparent";
        }
        dots.children[0].style.background = "white";
        setTimeout(func, 500, dots, 1, 0);
      }
      return;
    }
  }

  function rightlogic(eleid, div, dots, size, dotid) {
    if (carosel[eleid] <= -1 * (div.childElementCount - 1) * size) {
      current[eleid] = 0;
      carosel[eleid] = 0;
      div.style.transform = "translateX(" + carosel[eleid] + "px)";
      for (let i = 0; i < dots.childElementCount; i++) {
        dots.children[i].style.background = "transparent";
      }
      dots.children[0].style.background = "white";
      return;
    } else {
      if (current[eleid] !== 4) {
        current[eleid] += 1;
        for (let i = 0; i < dots.childElementCount; i++) {
          dots.children[i].style.background = "transparent";
        }
        dots.children[dotid + 1].style.background = "white";
      }
      carosel[eleid] -= size;
      div.style.transform = "translateX(" + carosel[eleid] + "px)";
      if (
        current[eleid] == 4 &&
        div.childElementCount > 5 &&
        carosel[eleid] !== -1 * (div.childElementCount - 1) * size
      ) {
        current[eleid] = 3;
        for (let i = 0; i < dots.childElementCount; i++) {
          dots.children[i].style.background = "transparent";
        }
        dots.children[4].style.background = "white";
        setTimeout(func, 500, dots, 3, 4);
      }
      return;
    }
  }

  function caroselleft(event) {
    const holder = event.target.parentElement;
    const dots = holder.firstChild;
    const div = holder.lastChild;
    const size = div.children[0].offsetWidth;
    const eleid = parseInt(holder.id.slice(6));
    const dotid = current[eleid];
    leftlogic(eleid, div, dots, size, dotid);
  }
  function caroselright(event) {
    const holder = event.target.parentElement;
    const dots = holder.firstChild;
    const div = holder.lastChild;
    const size = div.children[0].offsetWidth;
    const eleid = parseInt(holder.id.slice(6));
    const dotid = current[eleid];
    rightlogic(eleid, div, dots, size, dotid);
  }
  function caroselfirst(event) {
    const holder = event.target.parentElement;
    const dots = holder.firstChild;
    const div = holder.lastChild;
    const eleid = parseInt(holder.id.slice(6));
    current[eleid] = 0;
    carosel[eleid] = 0;
    div.style.transform = "translateX(" + carosel[eleid] + "px)";
    for (let i = 0; i < dots.childElementCount; i++) {
      dots.children[i].style.background = "transparent";
    }
    dots.children[0].style.background = "white";
  }
  function carosellast(event) {
    const holder = event.target.parentElement;
    const dots = holder.firstChild;
    const div = holder.lastChild;
    const eleid = parseInt(holder.id.slice(6));
    const size = div.children[0].offsetWidth;
    carosel[eleid] = -1 * (div.childElementCount - 1) * size;
    current[eleid] = 4;
    div.style.transform = "translateX(" + carosel[eleid] + "px)";
    for (let i = 0; i < dots.childElementCount; i++) {
      dots.children[i].style.background = "transparent";
    }
    dots.children[4].style.background = "white";
  }

  const holders = [];

  function move(timestamp) {
    for (let i = 0; i < holders.length; i++) {
      const holder = holders[i];
      const dots = holder.firstChild;
      const div = holder.lastChild;
      const size = div.children[0].offsetWidth;
      const eleid = parseInt(holder.id.slice(6));
      const dotid = current[eleid];
      if (carosel[eleid] <= -1 * (div.childElementCount - 1) * size) {
        current[eleid] = 0;
        carosel[eleid] = 0;
        div.style.transform = "translateX(" + carosel[eleid] + "px)";
        for (let i = 0; i < dots.childElementCount; i++) {
          dots.children[i].style.background = "transparent";
        }
        dots.children[0].style.background = "white";
      } else {
        rightlogic(eleid, div, dots, size, dotid);
      }
    }
    setTimeout(() => {
      window.requestAnimationFrame(move);
    }, 5000);
  }

  function tranRight(event) {
    const container = event.target.parentElement.childNodes[1];
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

  const expandbar = [];
  function open(event) {
    const holder = event.target.parentElement;
    const button = event.target;
    const id = parseInt(holder.id.slice(20));
    console.log(id);
    console.log(holder.id);
    if (expandbar[id] === 0) {
      button.innerText = "x";
      const elements = Array.from(holder.childNodes).slice(1);
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = "block";
        elements[i].style.opacity = 1;
        elements[i].style.marginTop = "4%";
        elements[i].style.marginLeft = "2%";
      }
      expandbar[id] = 1;
    } else {
      button.innerText = "+";
      const elements = Array.from(holder.childNodes).slice(1);
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
        elements[i].style.opacity = 0;
      }
      expandbar[id] = 0;
    }
  }

  global.Card = global.Card || Card;
})(window);
