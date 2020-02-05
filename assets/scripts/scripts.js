// landing page


let mainPage = document.getElementById('mainPage');


const landingBtn = document.getElementById('landing-btn');
landingBtn.addEventListener('click', function(){
	
	mainPage.firstElementChild.style.display = "none";
	mainPage.firstElementChild.nextElementSibling.classList.remove('d-none');
})

// Web App
const randonBtn = document.getElementById('randomBtn');

randonBtn.addEventListener('click', function(){
	mainPage.firstElementChild.nextElementSibling.style.display = "none";
	mainPage.lastElementChild.classList.remove('d-none');

});

const custBtn = document.getElementById('custBtn');
custBtn.addEventListener('click', function(){
	mainPage.firstElementChild.nextElementSibling.style.display = "none";
	mainPage.lastElementChild.previousElementSibling.firstElementChild.classList.remove('d-none');

})



// RANDOM QUOTE
let quotes = [
"I choose you na nga, pero you wanna catch them all",
"Love parang barya lang po sa umaga. Alam mo naman na di ka masusuklian nagbigay kapa ng buo",
"Maganda kasi yung daan kaya kumaliwa",
"Taken na nga, for granted naman",
"Isa lang ang way para maka move on Pakabusog ka",
"Malabo. minsan  mata, minsan ikaw",
"Walang isda sa baybayin, saka never kang makakahuli. Choosy ka kasi",
]

function newQuote(){
	let randomNumber = Math.floor(Math.random()*(quotes.length));
	document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];

}


function display_random_image() 
{
     var theImages = [{
        src: "assets/images/image2.jpeg",
        width: "702",
        height: "395"
    }, {
        src: "assets/images/image1.jpeg",
        width: "702",
        height: "395"
    }, {
        src: "assets/images/image3.jpeg",
        width: "702",
        height: "395"
    }];
    
    var preBuffer = [];
    for (var i = 0, j = theImages.length; i < j; i++) {
        preBuffer[i] = new Image();
        preBuffer[i].src = theImages[i].src;
        preBuffer[i].width = theImages[i].width;
        preBuffer[i].height = theImages[i].height;
    }
   
// create random image number
  function getRandomInt(min,max) 
    {
      //  return Math.floor(Math.random() * (max - min + 1)) + min;
    
 imn = Math.floor(Math.random() * (max - min + 1)) + min;
    return preBuffer[imn];
    }  

// 0 is first image,   preBuffer.length - 1) is  last image
  
var newImage = getRandomInt(0, preBuffer.length - 1);

 
// remove the previous images
var images = document.getElementsByTagName('img');
var l = images.length;
for (var p = 0; p < l; p++) {
    images[0].parentNode.removeChild(images[0]);
}
// display the image  
document.body.appendChild(newImage);
}

// j -----
function display_random_image() {
     let theImages = [{
        src: "assets/images/hugot1.jpg",
        width: "400",
        height: "400"
    }, {
        src: "assets/images/hugot2.jpg",
        width: "400",
        height: "400"
    }, {
        src: "assets/images/hugot3.jpg",
        width: "400",
        height: "400"
    },
    {
        src: "assets/images/hugot4.jpg",
        width: "400",
        height: "400"
    },
    {
        src: "assets/images/hugot5.png",
        width: "400",
        height: "400"
    }, {
        src: "assets/images/hugot6.jpg",
        width: "400",
        height: "400"
    }, {
        src: "assets/images/hugot7.png",
        width: "400",
        height: "400"
    },
    {
        src: "assets/images/hugot8.jpg",
        width: "400",
        height: "400"
    },
    {
        src: "assets/images/hugot9.png",
        width: "400",
        height: "400"
    },
    {
        src: "assets/images/hugot10.png",
        width: "400",
        height: "400"
    }, {
        src: "assets/images/hugot11.png",
        width: "400",
        height: "400"
    }, {
        src: "assets/images/hugot12.png",
        width: "400",
        height: "400"
    },
    {
        src: "assets/images/hugot13.png",
        width: "400",
        height: "400"
    },
    {
        src: "assets/images/hugot14.png",
        width: "400",
        height: "400"
    },
    {
        src: "assets/images/hugot15.png",
        width: "400",
        height: "400"
    },
    {
        src: "assets/images/hugot16.png",
        width: "400",
        height: "400"
    }
    ];
    
    let preBuffer = [];
    for (let i = 0, j = theImages.length; i < j; i++) {
        preBuffer[i] = new Image();
        preBuffer[i].src = theImages[i].src;
        preBuffer[i].width = theImages[i].width;
        preBuffer[i].height = theImages[i].height;
    }
   
// create random image number
  function getRandomInt(min,max) 
    {
//  return Math.floor(Math.random() * (max - min + 1)) + min;
    
imn = Math.floor(Math.random() * (max - min + 1)) + min;
    return preBuffer[imn];
    }  

// 0 is first image,   preBuffer.length - 1) is  last image
  
let newImage = getRandomInt(0, preBuffer.length - 1);
 
// remove the previous images
let images = document.getElementsByTagName('img');
let l = images.length;
for (let p = 0; p < l; p++) {
    images[0].parentNode.removeChild(images[0]);
}

// display image  
document.getElementById('image-container').appendChild(newImage);
}