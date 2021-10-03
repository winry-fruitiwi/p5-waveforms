/*
@author Winry/Tigrrex
@date 2021-10-3

version comments:
    note: I made the project myself!
    these version comments and the project creation, small run test
    add the waveform file and basic class with simple constructor with test
    add the show method with test
    create a getValue(t) function, use in show method to test
    in draw, create a standing wave by summing waveforms up.
    and maybe more!

    special challenge projects:
        Try making a class called summedWaveform. Make it the sum of two waves
        and that's its draw function.

 */
let font

function preload() {
    font = loadFont('fonts/Meiryo-01.ttf')
}

function setup() {
    createCanvas(640, 360)
    colorMode(HSB, 360, 100, 100, 100)
}

function draw() {
    background(209, 80, 30)
}