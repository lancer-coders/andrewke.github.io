

var app_cards = [
  {
    title: "Tripcipe",
    background_image: "ny.jpeg",
    logo: "tripcipe.jpeg",
    description: "I built a trip planning app for a startup that helps people drastically simplify the process of trip planning and allows travelers to take their travel plans on the go. ",
    link: "https://itunes.apple.com/us/app/tripcipe/id917896046?mt=8"
  },
  {
    title: "Formative",
    background_image: "formative-bg.png",
    logo: "formative.jpeg",
    description: "I created a full social network that helps dementia caregivers and their families. It has posts, comments, images, user accounts, and many other features.",
    link: "http://www.formative.care/"
  },
  {
    title: "Remixes",
    background_image: "ultra.jpg",
    logo: "remixes.png",
    description: "I built this app to help music lovers like me easily find remixes of songs that we love. It also plays HD music videos and has a delightful UI",
    link: "https://itunes.apple.com/us/app/remixes-find-remixes-your/id1070012493"
  },
  {
    title: "Drive Safe",
    background_image: "traffic.jpg",
    logo: "drive-safe.png",
    description: "Drive Safe is a revoluionary driving safety app that helps teen drivers keep safe driving habits. This app won 2nd Place in the Congressional App Challenge in our district. ",
    link: "https://github.com/SFHSHacks/DriveSafe"
  },
  {
    title: "Shuffle",
    background_image: "teaching.jpg",
    logo: "shuffle.jpeg",
    description: "Shuffle is a delightful and addicting word game that helps students learn vocabulary. Shuffle was the #1 Free Word Games in 7 countries  and was featured over 1000 times total on the App Store.",
    link: "https://github.com/AndrewKe/Shuffle"
  },
  {
    title: "Game of Life",
    background_image: "life.png",
    logo: "empty.png",
    description: "Full iOS Simulator of Conway's game of life featuring preloaded structures, a help menu, draggable grid, and environment control. ",
    link: "https://github.com/AndrewKe/Conway-s-Game-Of-Life-Simulator"
  },
  {
    title: "PiDrone App",
    background_image: "inspire.jpg",
    logo: "3dr.png",
    description: "Control drones from an iPad. Features HD video stream, flight mode change, live attitude stats, GPS data, and remote shutter trigger.",
    link: "https://github.com/AndrewKe/PiDrone"
  }

]

var grid_cards = [
  {
    title: "The Grid",
    background_image: "davis.jpeg",
    logo: "empty.png",
    description: "Award winning large scale gaming platform exhibited at Maker Faires across the country. I worked on all aspects of the project from coding to power wiring to electronics work.",
    link: "https://sites.google.com/site/teampathfinderdsm/"
  },

  {
    title: "The PiDrone",
    background_image: "droneparts.jpg",
    logo: "empty.png",
    description: "Award winning large scale gaming platform exhibited at Maker Faires across the country. I worked on all aspects of the project from coding to power wiring to electronics work.",
    link: "http://andrewke.org/?s=pi+drone"
  }
]

$(function() {
    console.log( "ready!" );
    for (var i = 0; i < app_cards.length; i++){
      var card = app_cards[i];
      $( "#app-cards" ).append( `<a href="${card.link}" class = "card hvr-glow hvr-underline-from-left">
        <div class = "card-image" style = "background: url('img/${card.background_image}'); background-size: 100%;">
          <img class = "card-logo" src="img/${card.logo}"/>
        </div>
        <p class = "card-title">${card.title}</p>
        <p class = "card-text">${card.description}</p>
      </a>` );
    }

    for (var i = 0; i < grid_cards.length; i++){
      var card = grid_cards[i];
      $( "#grid-cards" ).append( `<a href="${card.link}" class = "card hvr-glow hvr-underline-from-left">
        <div class = "card-image" style = "background: url('img/${card.background_image}'); background-size: 100%;">
          <img class = "card-logo" src="img/${card.logo}"/>
        </div>
        <p class = "card-title">${card.title}</p>
        <p class = "card-text ">${card.description}</p>
      </a>` );
    }
});
