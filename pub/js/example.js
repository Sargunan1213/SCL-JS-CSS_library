const s = new Card();
s.makeCard("card2", 2, 2, [
  "./images/sargu2.jpg",
  "./images/sargu.jpg",
  "Sargunan",
  "WEB APP DESIGNER",
  [
    "https://www.facebook.com/sargu.sargu/",
    "https://github.com/Sargunan1213",
    "https://www.linkedin.com/in/sargu/",
  ],
]);
s.makeCard("card", 1, 2, [
  "./images/sargu2.jpg",
  "./images/sargu.jpg",
  "Sargunan",
  "WEB APP DESIGNER",
  [
    "https://www.facebook.com/sargu.sargu/",
    "https://github.com/Sargunan1213",
    "https://www.linkedin.com/in/sargu/",
  ],
]);

s.makeCard(
  "card3",
  3,
  [2, 3],
  [
    [
      "./images/sargu2.jpg",
      "./images/sargu.jpg",
      "Sargunan",
      "WEB APP DESIGNER",
      [
        "https://www.facebook.com/sargu.sargu/",
        "https://github.com/Sargunan1213",
        "https://www.linkedin.com/in/sargu/",
      ],
    ],
    ["./images/sargu7.jpg", "Sargunan", "WEB APP DESIGNER"],
  ]
);

s.makeCard("card4", 1, 1, [
  "./images/sargu4.jpg",
  "The library and this website were designed by Sargunan Gurumurthy.",
]);
s.makeCard("card5", 1, 2, [
  "./images/sargu2.jpg",
  "./images/sargu.jpg",
  "Sargunan",
  "WEB APP DESIGNER",
  [
    "https://www.facebook.com/sargu.sargu/",
    "https://github.com/Sargunan1213",
    "https://www.linkedin.com/in/sargu/",
  ],
]);
s.makeCard("card6", 1, 3, [
  "./images/sargu7.jpg",
  "Sargunan",
  "WEB APP DESIGNER",
]);
s.makeCard("card7", 1, 4, [
  "http://techslides.com/demos/sample-videos/small.mp4",
  "video/mp4",
  "./images/sargu.jpg",
  "Sargunan",
  [
    "https://www.facebook.com/sargu.sargu/",
    "https://github.com/Sargunan1213",
    "https://www.linkedin.com/in/sargu/",
    "#",
    "https://www.instagram.com/sarguskillzzz",
    "mailto:sargunan1213@gmail.com",
  ],
]);
s.makeExpand("card8", ["Sargunan", "I am a professional developer"]);
// s.Expandable("hi", [
//   ["Sargunan", "I am a professional developer"],
//   ["Sargunan", "I am a professional developer"],
// ]);
const id = s.carouselDots(
  "card9",
  [1, 2, 1, 2, 1, 2],
  [
    [
      "./images/sargu4.jpg",
      "The library and this website were designed by Sargunan Gurumurthy.",
    ],
    [
      "./images/sargu2.jpg",
      "./images/sargu.jpg",
      "Sargunan",
      "WEB APP DESIGNER",
      [
        "https://www.facebook.com/sargu.sargu/",
        "https://github.com/Sargunan1213",
        "https://www.linkedin.com/in/sargu/",
      ],
    ],
    [
      "./images/sargu4.jpg",
      "The library and this website were designed by Sargunan Gurumurthy.",
    ],
    [
      "./images/sargu2.jpg",
      "./images/sargu.jpg",
      "Sargunan",
      "WEB APP DESIGNER",
      [
        "https://www.facebook.com/sargu.sargu/",
        "https://github.com/Sargunan1213",
        "https://www.linkedin.com/in/sargu/",
      ],
    ],
    [
      "./images/sargu4.jpg",
      "The library and this website were designed by Sargunan Gurumurthy.",
    ],
    [
      "./images/sargu2.jpg",
      "./images/sargu.jpg",
      "Sargunan",
      "WEB APP DESIGNER",
      [
        "https://www.facebook.com/sargu.sargu/",
        "https://github.com/Sargunan1213",
        "https://www.linkedin.com/in/sargu/",
      ],
    ],
  ],
  { buttons: true, numbers: true }
);
s.autoPlay(id);

const step = document.getElementsByName("buttonset");
const stepbutton1 = step[0];
const stepbutton2 = step[1];
const stepbutton3 = step[2];

for (let i = 0; i < step.length; i++) {
  step[i].addEventListener("click", (event) => {
    const button = event.target;
    const id = parseInt(button.id.slice(9));
    let k = 1;
    for (; k <= id; k++) {
      step[k - 1].style.background = "linear-gradient(45deg, #f12711, #f5af0a)";
    }
    for (; k <= 3; k++) {
      step[k - 1].style.background =
        "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),linear-gradient(45deg, #f12711, #f5af0a)";
    }
    const div = button.parentElement.parentElement;
    const child = Array.from(div.childNodes);
    for (let j = 0; j < 3; j++) {
      const m = j + 1;
      const ele = document.getElementById("child" + m);
      ele.style.display = "none";
    }
    const ele = document.getElementById("child" + id);
    ele.style.display = "block";
    const progress = step[0].parentElement.firstElementChild;
    if (id === 1) {
      progress.style.background = "white";
    }
    if (id === 2) {
      progress.style.background =
        "linear-gradient(to right, orange 50%, white 50%)";
    }
    if (id === 3) {
      progress.style.background = "orange";
    }
  });
}
