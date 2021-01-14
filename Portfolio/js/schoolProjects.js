"use strict";

/********************************************************************

********************************************************************/
let logoId = ["EERIC", "LoyolaCommittee", "ATLAS", "GAP_EUGOLAID"];
let gameId = ["JigsawGame", "GameOfLife", "RealLifeGame", "ChaserGame"];
let gameButtons = {
  link: [
    "https://a-zahra.github.io/Cart-263/Projects/project-3/index.html",
    "https://a-zahra.github.io/cart253/Projects/project3/index.html",
    "https://a-zahra.github.io/cart253/Projects/project2/index.html",
    "https://a-zahra.github.io/cart253/Projects/project1/index.html"
  ],
  code: [
    "https://github.com/A-Zahra/Cart-263/tree/master/Projects/project-3",
    "https://github.com/A-Zahra/cart253/tree/master/Projects/project3",
    "https://github.com/A-Zahra/cart253/tree/master/Projects/project2",
    "https://github.com/A-Zahra/cart253/tree/master/Projects/project1"
  ]
};
let project;
let logoProjectImg = [];
let logoTitle = [];
let logoProjectBrief = [];
let logoBackgroundImg = [];
let logoBackgroundColor = [];
let gameProjectImg = [];
let gameTitle = [];
let gameProjectBrief = [];
let gameBackgroundImg = 0;
let gameBackgroundColor = [];

$(document).ready(setup);
// Sets up everything

function setup() {
  // Load in json file data
  $.getJSON("data/data.json")
    .done(dataLoaded) // If there is no error, runs dataLoaded function
    .fail(dataError); // otherwise, runs the dataError function

  $('.tree').on("click", treePopUp);
  $('.vest').on("click", vestPopUp);
  $('h4').on("click", gameLogoPopUp);
  $('.monster').on("click", monsterPopUp);
  $('.planet').on("click", planetPopUp);
  $('.exit').on("click", closeWindow);

}

function treePopUp() {
  $('.popUps').css({
    "display": "block"
  });

  $('.treePopUp').css({
    "display": "flex"
  });
}

function vestPopUp() {
  $('.popUps').css({
    "display": "block"
  });

  $('.vestPopUp').css({
    "display": "flex"
  });
}

function monsterPopUp() {
  $('.popUps').css({
    "display": "block"
  });

  $('.monsterPopUp').css({
    "display": "flex"
  });
}


function planetPopUp() {
  $('.popUps').css({
    "display": "block"
  });

  $('.planetPopUp').css({
    "display": "flex"
  });
}


function dataLoaded(data) {
  project = [{
      img: data.schoolProjects.projectImages.logos,
      title: data.schoolProjects.titles.logoTitles,
      backgroundImg: data.schoolProjects.backgroundImages.logoBackgroundImg,
      backgroundColor: data.schoolProjects.backgroundColor.logoBackgroundColor,
      brief: data.schoolProjects.projectsBriefs.logosBriefs
    },
    {
      img: data.schoolProjects.projectImages.games,
      title: data.schoolProjects.titles.gameTitles,
      backgroundImg: data.schoolProjects.backgroundImages.gameBackgroundImg,
      backgroundColor: data.schoolProjects.backgroundColor.gameBackgroundColor,
      brief: data.schoolProjects.projectsBriefs.gamesBriefs
    }
  ];

  console.log("data loaded");
  addProjectElements(data);
}

function addProjectElements(data) {
  // console.log(`${project[0].img[0]}`);
  for (let i = 0; i < 4; i++) {
    logoProjectImg.push(project[0].img[i]);
    logoTitle.push(project[0].title[i]);
    logoProjectBrief.push(project[0].brief[i]);
    logoBackgroundImg.push(project[0].backgroundImg[i]);
    logoBackgroundColor.push(project[0].backgroundColor[i]);
    // console.log(logoProjectImg[i] + ", " + logoTitle[i] + ", " + logoProjectBrief[i]);

  }
  for (let i = 0; i < 4; i++) {
    gameProjectImg.push(project[1].img[i]);
    gameTitle.push(project[1].title[i]);
    gameProjectBrief.push(project[1].brief[i]);
    gameBackgroundImg = project[1].backgroundImg;
    gameBackgroundColor.push(project[1].backgroundColor[i]);
    // console.log(gameProjectImg[i] + ", " + gameTitle[i] + ", " + gameProjectBrief[i]);
  }
}


function gameLogoPopUp() {
  let id = $(this).attr("class").split(' ')[1];
  // console.log(id);
  
  for (let i = 0; i < 4; i++) {
    if (id === logoId[i]) {
      console.log(id + " === " + logoId[i]);
      $('.projectImage > img').attr({
        src: `${logoProjectImg[i]}`
      });
      $('.projectImage').css({
        "background-image": `url(${logoBackgroundImg[i]})`,
        "background-size": "cover"
      });
      $('.projectImage > img').css({
        "border-radius": "200px"
      });
      $('.projectTitle').html(`${logoTitle[i]}`);
      $('.projectBrief2').html(`${logoProjectBrief[i].brief}`);
      $('.shortDescription2').css({
        "background-color": "rgb(" + logoBackgroundColor[i].r + ", " + logoBackgroundColor[i].g + ", " + logoBackgroundColor[i].b + ");"
      });

      $('.gameCode').css('display', 'none');
      $('.linkCode').css('display', 'none');
        i = 4;
        
    } else if (id === gameId[i]) {
      console.log(id + " === " + gameId[i]);
      $('.projectImage > img').attr({
        src: `${gameProjectImg[i]}`
      });
      $('.projectImage').css({
        "background-image": `url(${gameBackgroundImg})`,
        "background-size": "cover",
        "padding": "3vw",
        "padding-bottom": "1vw"
      });
      $('.projectImage > img').css({
        "border-radius": "10px"
      });
      $('.projectTitle').html(`${gameTitle[i]}`);
      $('.projectBrief2').html(`${gameProjectBrief[i].brief}`);
      $('.shortDescription2').css({
        "background-color": "rgb(" + gameBackgroundColor[i].r + ", " + gameBackgroundColor[i].g + ", " + gameBackgroundColor[i].b + ");"
      });

      let gameLink = $('<a></a>').addClass("gameLink").attr({
        href: `${gameButtons.link[i]}`,
        target: '_blank'
      }).text("Play Now").css({
        "margin": "1.2vw",
        "float": "left",
        "font-size": "1.3vw",
        "background-color": "rgba(17, 24, 71, 1)",
        "color":"rgb(225, 126, 153, 1)"
      }).appendTo(".projectImage");
      gameLink.button();

      let gameCode = $('<a></a>').addClass("gameCode").attr({
        href: `${gameButtons.code[i]}`,
        target: '_blank'
      }).text("See Code").css({
        "margin": "1.2vw",
        "float": "right",
        "font-size": "1.3vw",
        "background-color": "rgba(17, 24, 71, 1)",
        "color":"rgb(225, 126, 153, 1)"
      }).appendTo(".projectImage");
      gameCode.button();
      break;
    }
  }

  $('.popUps').css({
    "display": "block"
  });
  $('.gameLogoPopUp').css({
    "display": "flex"
  });
}

function closeWindow() {

  $('.popUps').fadeOut(1000);

  $('.treePopUp').css({
    "display": "none"
  });
  $('.vestPopUp').css({
    "display": "none"
  });
  $('.monsterPopUp').css({
    "display": "none"
  });
  $('.planetPopUp').css({
    "display": "none"
  });
  $('.gameLogoPopUp').css({
    "display": "none"
  });

  $('.gameLink').remove();
  $('.gameCode').remove();
}


function dataError(request, textStatus, error) {
  // Displays the error on console
  console.error(error);
}
