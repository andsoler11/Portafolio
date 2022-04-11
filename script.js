
element = document.getElementById("menu");
element.classList.remove('open');

function showContent() {
    showElement = document.getElementById("header-menu");
    element = document.getElementById("menu");
    check = document.getElementById("toggle");
    let menuOpen = false;
    if (check.checked) {
        element.classList.add('open');
        menuOpen = true
        showElement.classList.add('open');
        // showElement.style.display='flex';
    }
    else {
        element.classList.remove('open');
        menuOpen = false;
        showElement.classList.remove('open');
        // showElement.style.display='none';
    }
}
showContent();





function showContent1() {
    showElement = document.getElementById("work-menu");
    element = document.getElementById("burger-content");
    eye = document.getElementById("eye");
    check = document.getElementById("toggle1");
    let menuOpen = false;
    if (check.checked) {
        element.classList.add('open');
        menuOpen = true
        showElement.classList.add('open');
        eye.style.color='transparent';
        eye.style.transition='1s';
        // showElement.style.display='flex';
    }
    else {
        element.classList.remove('open');
        menuOpen = false;
        showElement.classList.remove('open');
        eye.style.color='rgb(202, 202, 202)';
        eye.style.transition='2s';
        // showElement.style.display='none';
    }
}




function showContent2() {
    element = document.getElementById("square");
    check = document.getElementById("toggle2");
    let menuOpen = false;
    if (check.checked) {
        element.classList.add('open');
        menuOpen = true
    }
    else {
        element.classList.remove('open');
        menuOpen = false;
    }
}

showContent2();


window.addEventListener("scroll", function(event) {
    let scroll = this.scrollY;
    let header = document.getElementById("header");

    let element = document.getElementById("square");

    let headerPhrase = document.getElementById('header-phrase');
    let descriptionPhrase = document.getElementById("description-phrase");
    let arrow = document.getElementById('arrow-appear')

    let secondImage = document.getElementById('second-image');
    let check1 = document.getElementById("toggle1");
    let check2 = document.getElementById("toggle2");




    if(scroll >= 700) {
        document.body.style.background = "rgb(233, 233, 233)";
        header.style.backgroundColor = "black";
        element.classList.add('open');
        arrow.classList.add('open');
        
        descriptionPhrase.classList.add('open');
        secondImage.classList.add('open')
        check2.checked = true;
    } 

    if (scroll <= 200) {
        document.body.style.background = "black";
        header.style.backgroundColor = " #000000";
        element.classList.remove('open');
        arrow.classList.remove('open');

        headerPhrase.classList.add('open');
        descriptionPhrase.classList.remove('open');
        secondImage.classList.remove('open')
        check2.checked = false;
    }


    showElement1 = document.getElementById("work-menu");
    element1 = document.getElementById("burger-content");

    if(scroll >= 1370) {
        document.body.style.background = "black";
        element1.classList.add('open');
        showElement1.classList.add('open');
        header.style.backgroundColor = " #000000";
        check1.checked = true;
    }
    else {
        element1.classList.remove('open');
        showElement1.classList.remove('open');
        check1.checked = false;
    }

});



