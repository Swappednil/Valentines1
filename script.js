//Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn= document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const catImg2 = document.getElementById("letter2-cat")
const buttons= document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// AUDIO
const bgMusic = document.getElementById("bg-music");
const whoosh = document.getElementById("whoosh");
const whoosh2 = document.getElementById("whoosh2");

const noSounds = [
    document.getElementById("no1"),
    document.getElementById("no2"),
    document.getElementById("no3"),
    document.getElementById("no4"),
    document.getElementById("no5")
];

//Click Envelope
catImg2.style.display = "none";

envelope.addEventListener("click",() =>{
    bgMusic.volume = 0.5;
    bgMusic.play();

    envelope.style.display="none";
    letter.style.display = "flex";


    setTimeout ( ()=> {
        document.querySelector(".letter-window").classList.add("open");
    },50);
});

//Logic to make YES btn to grow

let noClickCount = 0;

let yesScale = 1;

yesBtn.style.position = "relative";
yesBtn.style.transformOrigin="center center";
yesBtn.style.transition="transform 0.3s ease";

noBtn.addEventListener("click", () => {

    noClickCount++;

    if (noClickCount === 1) {
        bgMusic.pause();
    }

    // Play different sound depending on clicks
    let soundIndex = Math.min(noClickCount - 1, noSounds.length - 1);

    noSounds[soundIndex].currentTime = 0;
    noSounds[soundIndex].play();


    yesScale +=1;

    if (yesBtn.style.position!== "fixed"){
        yesBtn.style.position = "fixed";
        yesBtn.style.top = "50%";
        yesBtn.style.left = "50%";
        yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
    }else {
        yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
    }
});


//Logic to make NO btn run

noBtn.addEventListener("mouseover", ()=> {
    const min = 100;
    const max = 100;

    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI *2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle)* distance;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;

    whoosh.currentTime = 0;
    whoosh.play();

})

noBtn.addEventListener("click", ()=> {
    const min = 150;
    const max = 150;

    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI *2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle)* distance;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
})

//YES is clicked

yesBtn.addEventListener("click", () =>{

    bgMusic.play();
    bgMusic.volume = 0.8;


    document.body.style.backgroundImage = "url('hrt.jpg')";

    title.textContent = "YIP- ahem ts ts!";

    catImg.style.display = "none"; //src= "cat_dance.gif";

    catImg2.style.display = "flex"

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";

    finalText.style.display = "block"
});



