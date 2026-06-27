
// ========================================
// INTRO SCREEN
// ========================================

window.onload = () => {

    setTimeout(() => {

        document.getElementById("intro").style.display = "none";

        document.getElementById("mainContent").style.display = "block";

    }, 6000);

};




// ========================================
// TYPE WRITER
// ========================================

const message = `

To My Beautiful Wife ❤️

Thank you for making my life beautiful.

Happy Birthday My Queen ❤️

May all your dreams come true.

`;

let i = 0;

function typingEffect() {

    if (i < message.length) {

        let char = message.charAt(i);

        if (char === '\n') {

            document.getElementById("typing").innerHTML += "<br>";

        } else {

            document.getElementById("typing").innerHTML += char;

        }

        i++;

        setTimeout(typingEffect, 60);

    }

}

typingEffect();




// ========================================
// OPEN SURPRISE PAGE
// ========================================

document
.getElementById("surpriseBtn")
.onclick = () => {

    document
    .getElementById("welcomePage")
    .style.display = "none";

    document
    .getElementById("surprisePage")
    .style.display = "flex";

    startFireworks();

};




// ========================================
// CANVAS
// ========================================

const canvas =
document.getElementById("canvas");

const ctx =
canvas.getContext("2d");

canvas.width = innerWidth;

canvas.height = innerHeight;

window.addEventListener("resize", () => {

    canvas.width = innerWidth;

    canvas.height = innerHeight;

});




// ========================================
// FIREWORK PARTICLES
// ========================================

let particles = [];

class Particle {

    constructor(x, y) {

        this.x = x;

        this.y = y;

        this.dx = (Math.random() - 0.5) * 10;

        this.dy = (Math.random() - 0.5) * 10;

        this.radius = Math.random() * 3 + 2;

        this.alpha = 1;

        this.color =
        `hsl(${Math.random() * 360},100%,50%)`;

    }

    draw() {

        ctx.globalAlpha = this.alpha;

        ctx.beginPath();

        ctx.arc(
            this.x,
            this.y,
            this.radius,
            0,
            Math.PI * 2
        );

        ctx.fillStyle = this.color;

        ctx.fill();

    }

    update() {

        this.x += this.dx;

        this.y += this.dy;

        this.alpha -= .01;

    }

}



function createExplosion(x, y) {

    for (let i = 0; i < 120; i++) {

        particles.push(
            new Particle(x, y)
        );

    }

}



function animate() {

    requestAnimationFrame(animate);

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    particles.forEach((particle, index) => {

        particle.update();

        particle.draw();

        if (particle.alpha <= 0) {

            particles.splice(index, 1);

        }

    });

}

animate();




let started = false;

function startFireworks() {

    if (started) return;

    started = true;

    setInterval(() => {

        createExplosion(

            Math.random() * canvas.width,

            Math.random() * canvas.height / 2

        );

    }, 500);

}




// ========================================
// FLOATING HEARTS
// ========================================

setInterval(() => {

    let heart =
    document.createElement("div");

    heart.innerHTML = "❤️";

    heart.className = "heart";

    heart.style.left =
    Math.random() * 100 + "vw";

    heart.style.fontSize =
    Math.random() * 20 + 20 + "px";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 8000);

}, 500);




// ========================================
// SPARKLES
// ========================================

setInterval(() => {

    let sparkle =
    document.createElement("div");

    sparkle.className = "sparkle";

    sparkle.innerHTML = "✨";

    sparkle.style.left =
    Math.random() * innerWidth + "px";

    sparkle.style.top =
    Math.random() * innerHeight + "px";

    document.body.appendChild(sparkle);

    setTimeout(() => {

        sparkle.remove();

    }, 2000);

}, 300);



// =====================================
// GIFT BOX CLICK
// =====================================

const giftBox =
document.getElementById("giftBox");

const music =
document.getElementById("music");

giftBox.onclick = () => {

    giftBox.style.transition = "1s";

    giftBox.style.transform =
    "scale(1.5) rotateY(720deg)";

    setTimeout(() => {

        giftBox.style.display = "none";

    },1000);



    // Start music

    music.play();



    // Show Cake

    document.querySelector(".cake")
    .style.animation =
    "cakeShow 2s ease forwards";



    // Start Balloons

    createBalloons();



    // Start Petals

    createPetals();

};




// =====================================
// BALLOONS
// =====================================

function createBalloons(){

setInterval(()=>{

let balloon =
document.createElement("div");

balloon.className = "balloon";

let colors = [

"#ff4d6d",
"#ffb703",
"#00b4d8",
"#9b5de5",
"#f15bb5"

];

balloon.style.background =
colors[Math.floor(Math.random()*colors.length)];

balloon.style.left =
Math.random()*100 + "vw";

document
.getElementById("balloons")
.appendChild(balloon);

setTimeout(()=>{

balloon.remove();

},15000);

},800);

}




// =====================================
// ROSE PETALS
// =====================================

function createPetals(){

setInterval(()=>{

let petal =
document.createElement("div");

petal.className = "petal";

petal.innerHTML = "🌹";

petal.style.left =
Math.random()*100 + "vw";

petal.style.fontSize =
Math.random()*20 + 20 + "px";

document
.getElementById("petals")
.appendChild(petal);

setTimeout(()=>{

petal.remove();

},10000);

},500);

}




// =====================================
// CAKE SHOW
// =====================================

document.querySelector(".cake")
.style.opacity = "0";

setTimeout(()=>{

document.querySelector(".cake")
.style.opacity = "1";

},1000);




// =====================================
// LETTER EFFECT
// =====================================

document.querySelector(".letter")
.addEventListener("mouseenter",()=>{

document.querySelector(".letter")
.style.transform =
"rotateX(10deg) scale(1.05)";

});



document.querySelector(".letter")
.addEventListener("mouseleave",()=>{

document.querySelector(".letter")
.style.transform =
"rotateX(0deg) scale(1)";

});




// =====================================
// GLOWING NAME EFFECT
// =====================================

setInterval(()=>{

document.querySelector(".srushti")
.style.textShadow =

`0 0 20px pink,
 0 0 60px cyan,
 0 0 100px red`;

setTimeout(()=>{

document.querySelector(".srushti")
.style.textShadow =

`0 0 20px white`;

},500);

},1000);




// =====================================
// RANDOM SPARKLE BURSTS
// =====================================

setInterval(()=>{

createExplosion(

Math.random()*canvas.width,

Math.random()*canvas.height/2

);

},2000);


// =====================================
// PHOTO SPREAD EFFECT
// =====================================

function spreadPhotos(){

const photos =
document.querySelectorAll(".photo");

photos.forEach(photo=>{

photo.style.opacity="0";

});

photos.forEach((photo,index)=>{

setTimeout(()=>{

photo.style.opacity="1";

photo.style.transition="1s";

photo.style.transform=

`translate(
${Math.random()*300-150}px,
${Math.random()*200-100}px)

rotate(

${Math.random()*40-20}deg)`;

},index*2000);

});

}



// =====================================
// FLYING PIGEONS
// =====================================

function createBird(){

let bird =
document.createElement("div");

bird.className="bird";

bird.innerHTML="🕊️";

bird.style.top=
Math.random()*40+"%";

document.body.appendChild(bird);

setTimeout(()=>{

bird.remove();

},15000);

}



setInterval(()=>{

createBird();

},8000);




// =====================================
// LETTER BY LETTER
// =====================================

const birthdayName =

"HAPPY BIRTHDAY SRUSHTI ❤️";

let index2=0;

function showLetters(){

if(index2 < birthdayName.length){

document.querySelector(".birthdayText")
.innerHTML +=

birthdayName.charAt(index2);

index2++;

setTimeout(showLetters,150);

}

}




// =====================================
// HEART RAIN
// =====================================

function heartRain(){

setInterval(()=>{

let heart=
document.createElement("div");

heart.innerHTML="💖";

heart.className="heart";

heart.style.left=

Math.random()*100+"vw";

heart.style.fontSize=

Math.random()*30+20+"px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},10000);

},300);

}




// =====================================
// FINAL TEXT
// =====================================

function finalMessage(){

setTimeout(()=>{

let end=document.createElement("div");

end.innerHTML=

"💍 Forever Together ❤️";

end.style.position="fixed";

end.style.top="50%";

end.style.left="50%";

end.style.transform=

"translate(-50%,-50%)";

end.style.fontSize="70px";

end.style.color="white";

end.style.textShadow=

"0 0 30px hotpink";

document.body.appendChild(end);

},60000);

}




// =====================================
// SUPER FIREWORKS
// =====================================

setInterval(()=>{

createExplosion(

Math.random()*canvas.width,

Math.random()*canvas.height/2

);

createExplosion(

Math.random()*canvas.width,

Math.random()*canvas.height/2

);

},1500);




// =====================================
// START EFFECTS
// =====================================

setTimeout(()=>{

spreadPhotos();

showLetters();

heartRain();

finalMessage();

},5000);





// Birthday starts at 12 AM
const birthdayStart =
new Date("June 27, 2026 00:00:00");

// Birthday ends at 12 PM
const birthdayEnd =
new Date("June 27, 2026 12:00:00");

setInterval(()=>{

    const now = new Date();

    // Before Birthday
    if(now < birthdayStart){

        let diff = birthdayStart - now;

        let days =
        Math.floor(diff/(1000*60*60*24));

        let hours =
        Math.floor((diff%(1000*60*60*24))/(1000*60*60));

        let minutes =
        Math.floor((diff%(1000*60*60))/(1000*60));

        let seconds =
        Math.floor((diff%(1000*60))/1000);

        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;

        document.getElementById("comingSoon")
        .innerHTML =
        "✨ Coming Soon Surprise ❤️";

        document.getElementById("surpriseBtn")
        .style.display = "none";

    }

    // Between 12 AM and 12 PM
    else if(now >= birthdayStart && now <= birthdayEnd){

        document.getElementById("comingSoon")
        .style.display = "none";

        document.getElementById("surpriseBtn")
        .style.display = "inline-block";

    }

    // After 12 PM
    else{

        document.getElementById("surpriseBtn")
        .style.display = "inline-block";


       document.getElementById("surpriseBtn")
        .style.display = "inline-block";


        document.getElementById("comingSoon")
        .innerHTML =
        "❤️ Hope you enjoyed your special day ❤️";

    }

},1000);

