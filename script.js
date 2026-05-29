const roles = [

    "Full Stack Developer",
    "Java Developer",
    "Python Developer",
    "Cloud Enthusiast"

];

let roleIndex = 0;
let charIndex = 0;

const typing = document.getElementById("typing");

function typeText() {

    if (charIndex < roles[roleIndex].length) {

        typing.innerHTML += roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeText, 100);

    }

    else {

        setTimeout(deleteText, 1500);

    }

}

function deleteText() {

    if (typing.innerHTML.length > 0) {

        typing.innerHTML =
            typing.innerHTML.slice(0, -1);

        setTimeout(deleteText, 50);

    }

    else {

        roleIndex++;

        if (roleIndex >= roles.length) {

            roleIndex = 0;

        }

        charIndex = 0;

        setTimeout(typeText, 300);

    }

}

window.onload = typeText;