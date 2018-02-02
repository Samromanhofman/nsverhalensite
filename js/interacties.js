//BEETJE HULP GEHAD VAN MITCH GOUDKUIL V210


//FILTER FUNCTIE
var genreButton = document.getElementsByClassName('tags')[0];
var genreButton1 = document.getElementsByClassName('tags')[1];
var genreButton2 = document.getElementsByClassName('tags')[2];
var genreButton3 = document.getElementsByClassName('tags')[3];
var genreButton4 = document.getElementsByClassName('tags')[4];
var genreButton5 = document.getElementsByClassName('tags')[5];

function getBlueBackground() {
    for(var i = 0; i < document.getElementsByClassName('tags').length; i++) {
        console.log (i);
    }
    this.classList.toggle('bluebackground');
}

genreButton.addEventListener('click', getBlueBackground, false);
genreButton1.addEventListener('click', getBlueBackground, false);
genreButton2.addEventListener('click', getBlueBackground, false);
genreButton3.addEventListener('click', getBlueBackground, false);
genreButton4.addEventListener('click', getBlueBackground, false);
genreButton5.addEventListener('click', getBlueBackground, false);



//LIKE BUTTON
var likeButton = document.querySelector('.likebutton');
var likeImg = document.querySelector('.like-image');
var plusOne = document.querySelector('.plusone');


function itemlike(){
    likeImg.src = "../image/icon/favorieten-full.svg";
    plusOne.classList.add('show');
}

likeButton.addEventListener("click", itemlike);




//ZOEKBALK
var searchbar = document.querySelector('.searchbar');
var searchButton = document.querySelector('.searchbutton');

function showbar(){
    searchbar.classList.toggle('search-open')
}

searchButton.addEventListener("click", showbar);


