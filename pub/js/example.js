const s = new Card();
// s.makeCard("card", 2, 1, [
//   "./images/sargu4.jpg",
//   "The library and this website were designed by Sargunan Gurumurthy.",
// ]);
// s.makeCard("card2", 2, 2, [
//   "./images/sargu2.jpg",
//   "./images/sargu.jpg",
//   "Sargunan",
//   "WEB APP DESIGNER",
//   [
//     "https://www.facebook.com/sargu.sargu/",
//     "https://github.com/Sargunan1213",
//     "https://www.linkedin.com/in/sargu/",
//   ],
// ]);
// s.makeCard("card3", 2, 3, [
//   "./images/sargu7.jpg",
//   "Sargunan",
//   "WEB APP DESIGNER",
// ]);
// s.makeCard("card4", 2, 4, [
//   "http://techslides.com/demos/sample-videos/small.mp4",
//   "video/mp4",
//   "./images/sargu.jpg",
//   "Sargunan",
//   [
//     "https://www.facebook.com/sargu.sargu/",
//     "https://github.com/Sargunan1213",
//     "https://www.linkedin.com/in/sargu/",
//     "#",
//     "https://www.instagram.com/sarguskillzzz",
//     "mailto:sargunan1213@gmail.com",
//   ],
// ]);

/*








*/

s.carouseldots(
  "card",
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
  { buttons: true }
);
s.carouseldots(
  "card2",
  [2, 1],
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
    [
      "./images/sargu4.jpg",
      "The library and this website were designed by Sargunan Gurumurthy.",
    ],
  ]
);
s.carouseldots(
  "card3",
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
s.carouseldots(
  "card4",
  [3, 4],
  [
    ["./images/sargu7.jpg", "Sargunan", "WEB APP DESIGNER"],
    [
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
    ],
  ]
);
// s.makeSlider("card", 1, [
//   "./images/sargu.jpg",
//   "./images/sargu2.jpg",
//   "./images/sargu3.jpg",
//   "./images/sargu4.jpg",
//   "./images/sargu5.jpg",
//   "./images/sargu6.jpg",
//   "./images/sargu7.jpg",
// ]);
// s.makeSlider("card2", 1, [
//   "./images/sargu.jpg",
//   "./images/sargu2.jpg",
//   "./images/sargu3.jpg",
//   "./images/sargu4.jpg",
//   "./images/sargu5.jpg",
//   "./images/sargu6.jpg",
//   "./images/sargu7.jpg",
// ]);

// s.makeSlider("card3", 1, [
//   "./images/sargu.jpg",
//   "./images/sargu2.jpg",
//   "./images/sargu3.jpg",
//   "./images/sargu4.jpg",
//   "./images/sargu5.jpg",
//   "./images/sargu6.jpg",
//   "./images/sargu7.jpg",
// ]);

// s.makeSlider("card4", 1, [
//   "./images/sargu.jpg",
//   "./images/sargu2.jpg",
//   "./images/sargu3.jpg",
//   "./images/sargu4.jpg",
//   "./images/sargu5.jpg",
//   "./images/sargu6.jpg",
//   "./images/sargu7.jpg",
// ]);

// s.makeexpand("card", [
//   "Sargunan",
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum augue venenatis, tristique quam non, rhoncus mi. In mattis sed mi eget ultricies. Quisque consequat imperdiet accumsan. Nam tincidunt sagittis nisi non hendrerit. Curabitur et bibendum tellus. In hac habitasse platea dictumst. Praesent quis sem vel est interdum congue. Proin in massa ex. Suspendisse venenatis tellus justo, vitae bibendum nisl tempus vitae. Nulla orci dui, varius vitae varius non, pellentesque quis tortor. Nulla condimentum vel sem et rhoncus. Aenean congue ex a massa facilisis, quis gravida leo blandit. Suspendisse feugiat justo at augue maximus volutpat. Vestibulum nec porttitor felis. Proin augue nisi, lobortis et nisl et, mattis lobortis ipsum.",
// ]);
// s.makeexpand("card2", [
//   "Sargunan",
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum augue venenatis, tristique quam non, rhoncus mi. In mattis sed mi eget ultricies. Quisque consequat imperdiet accumsan. Nam tincidunt sagittis nisi non hendrerit. Curabitur et bibendum tellus. In hac habitasse platea dictumst. Praesent quis sem vel est interdum congue. Proin in massa ex. Suspendisse venenatis tellus justo, vitae bibendum nisl tempus vitae. Nulla orci dui, varius vitae varius non, pellentesque quis tortor. Nulla condimentum vel sem et rhoncus. Aenean congue ex a massa facilisis, quis gravida leo blandit. Suspendisse feugiat justo at augue maximus volutpat. Vestibulum nec porttitor felis. Proin augue nisi, lobortis et nisl et, mattis lobortis ipsum.",
// ]);

// s.makeexpand("card3", [
//   "Sargunan",
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum augue venenatis, tristique quam non, rhoncus mi. In mattis sed mi eget ultricies. Quisque consequat imperdiet accumsan. Nam tincidunt sagittis nisi non hendrerit. Curabitur et bibendum tellus. In hac habitasse platea dictumst. Praesent quis sem vel est interdum congue. Proin in massa ex. Suspendisse venenatis tellus justo, vitae bibendum nisl tempus vitae. Nulla orci dui, varius vitae varius non, pellentesque quis tortor. Nulla condimentum vel sem et rhoncus. Aenean congue ex a massa facilisis, quis gravida leo blandit. Suspendisse feugiat justo at augue maximus volutpat. Vestibulum nec porttitor felis. Proin augue nisi, lobortis et nisl et, mattis lobortis ipsum.",
// ]);

// s.makeexpand("card4", [
//   "Sargunan",
//   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum augue venenatis, tristique quam non, rhoncus mi. In mattis sed mi eget ultricies. Quisque consequat imperdiet accumsan. Nam tincidunt sagittis nisi non hendrerit. Curabitur et bibendum tellus. In hac habitasse platea dictumst. Praesent quis sem vel est interdum congue. Proin in massa ex. Suspendisse venenatis tellus justo, vitae bibendum nisl tempus vitae. Nulla orci dui, varius vitae varius non, pellentesque quis tortor. Nulla condimentum vel sem et rhoncus. Aenean congue ex a massa facilisis, quis gravida leo blandit. Suspendisse feugiat justo at augue maximus volutpat. Vestibulum nec porttitor felis. Proin augue nisi, lobortis et nisl et, mattis lobortis ipsum.",
// ]);
