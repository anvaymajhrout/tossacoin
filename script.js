const tossButton = document.getElementById('toss-button');
const coinImage = document.getElementById('coin-image');

tossButton.addEventListener('click', tossCoin);

function tossCoin() {
    const coinSides = ['heads', 'tails'];
    const randomSide = coinSides[Math.floor(Math.random() * 2)];

    if (randomSide === 'heads') {
        coinImage.src = 'HEAD/2.png';
    } else {
        coinImage.src = 'HEAD/1.png';
    }
}