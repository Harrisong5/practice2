
let playerTurn = true;
let gameRunning = true;
const fightStatusElement = document.getElementById("fightStatus");

let p1 = {
    name: "Oliver Twist",
    image: "https://www.wholeheartedmen.com/wp-content/uploads/2013/12/oliver_twist-more.jpg",
    health: 100,
    attacks: [
        {
            name: "Eye Stab",
            dialogue: "Here, hold this!",
        },
        {
            name: "Whooping Cough",
            dialogue: "Catch this!",
        },
        {
            name: "Stale Baguette",
            dialogue: "Please sir, have some more... PAIN.",
        },
    ],
    attack() {
        return Math.ceil(Math.random() * 10);
    },
    die() {
        fightStatusElement.innerText = `Mighty Hulk picked up Oliver's frail frame and tore the poor little boy in half. "HULK WIIIIINNNNSSSS," he roared.`;
    },
};
