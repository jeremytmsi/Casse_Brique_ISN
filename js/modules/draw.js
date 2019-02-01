import {canvasJeu, y} from "../app.js";

export let nbBriquesParLigne = 12

export let nbreLignes = 5

// Tableau contenant toutes les briques
let bricks = []

//Position initiale de la barre
let barreX = 130

/**Permet de dessiner les briques
 * @param couleur Couleur des briques
 */
export function drawBrique(couleur = "green") {
    let x = 2
    let width = 20
    let height = 5

    for (let l = 0; l < nbreLignes; l++) {
        bricks[l] = [];
        for (let r = 0; r < nbBriquesParLigne; r++) {
            bricks[l][r] = {x: 0, y: 0}
            bricks[l][r].x = x
            bricks[l][r].y = y
            canvasJeu.beginPath()
            canvasJeu.fillStyle = couleur
            canvasJeu.fillRect(x, y, width, height)
            canvasJeu.closePath()
            x = x + width + 5
        }
    }
}

/**
 * Permet de dessiner la balle
 */
function drawBall() {
    let smash_ball = new Image(100, 100)
    smash_ball.src = "imgs/smash_ball.png"
    smash_ball.addEventListener('load', function () {
        canvasJeu.drawImage(smash_ball, 150, 115, 20, 20)
    })
}

/**
 * Permet de dessiner la barre de déplacement
 */
function drawPaddle(){
    canvasJeu.beginPath()
    canvasJeu.fillStyle = "gray"
    canvasJeu.fillRect(barreX ,135 , 50, 5)
    canvasJeu.closePath()
}

/**
 * Dessine la balle et la barre de déplacement
 */
export function draw(){
    drawBall()
    drawPaddle()
}


document.addEventListener('keydown',function(e) {
    let toucheClavier = e.key
    if (toucheClavier == "ArrowLeft") {
        barreX -= 7
    } else if (toucheClavier == "ArrowRight") {
        barreX += 7
    }
})