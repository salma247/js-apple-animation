//parent element
const features = document.querySelector('#features');

//elements to animate
const text1 = document.querySelector('#text1');
const text2 = document.querySelector('#text2');
const image = document.querySelector('#image');

//scrolling animation
const animateOnSroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const featuresTop = features.offsetTop;
    const featuresHeight = features.offsetHeight;
    const featuresProgress = (scrollY - featuresTop + windowHeight) / featuresHeight;

    console.log(featuresProgress);

    //text1 animation
    if (featuresProgress >= 0.1 && featuresProgress < 0.15) {
        text1.style.opacity = 0;
        text1.style.transform = 'translateY(100px)';
    } else if (featuresProgress >= 0.15 && featuresProgress < 0.35) {
        text1.style.opacity = 1;
        text1.style.transform = 'translateY(0)';
    } else {
        text1.style.opacity = 0;
        text1.style.transform = 'translateY(-100px)';
    }

    //text2 animation
    if (featuresProgress >= 0.35 && featuresProgress < 0.4) {
        text2.style.opacity = 0;
        text2.style.transform = 'translateY(120px)';
    } else if (featuresProgress >= 0.4 && featuresProgress < 0.6) {
        text2.style.opacity = 1;
        text2.style.transform = 'translateY(0)';
    } else {
        text2.style.opacity = 0;
        text2.style.transform = 'translateY(-120px)';
    }

    //image animation
    if (featuresProgress >= 0.7 && featuresProgress < 0.75) {
        image.style.opacity = 1;
        image.style.transform = 'scale(1)';
    }
    if (featuresProgress >= 0.8) {
        image.style.opacity = 0.5;
        image.style.transform = 'scale(0.7)';
    }
    if (featuresProgress >= 0.9) {
        image.style.opacity = 0;
        image.style.transform = 'scale(0)';
    }
}

window.addEventListener('scroll', animateOnSroll);
