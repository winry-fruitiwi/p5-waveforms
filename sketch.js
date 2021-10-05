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
// So we have our font. But what about our waveforms?
// tiger is a girl, Elphanae is also a girl
let tiger, elphanae

function preload() {
    font = loadFont('fonts/Meiryo-01.ttf')
    frameRate(144)
}

function setup() {
    createCanvas(640, 360)
    colorMode(HSB, 360, 100, 100, 100)
    // ok my tiger wants to join the fun! Let's make her a fundamental.
    // she says "hey, my mom should be the fundamental!"
    tiger = new Waveform(-2, height/4, 4, 0)
    // Elphanae, for some reason, wants to be really wavy.
    elphanae = new Waveform(2, height/4, 4, 0)
    noFill()
    stroke(0, 0, 100)
}

function sumWaves(a, b) {
    beginShape()

    // where are we drawing? let's creatively use i as our index!
    for (let x = 0; x < width; x += 1) {
        // we want an x-value and a y-value for our vertex.
        // x and our getValue function do just the job!
        vertex(x, a.getValue(x) + b.getValue(x))
    }

    endShape()
}

function draw() {
    background(209, 80, 30)
    tiger.update()
    elphanae.update()

    translate(0, height/2)
    stroke(360, 89, 93)
    // try commenting and uncommenting the show calls!
    tiger.show()
    stroke(240, 70, 100)
    elphanae.show()
    stroke(120, 80, 80)
    // So we have our individuals, but they want to be together and be happy
    // as two. So let's make them added together!
    sumWaves(tiger, elphanae)
}