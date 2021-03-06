// describes a wave that propagates down a string like a wave in real life

class Waveform {
    constructor(ω, amplitude=height/4, n, phaseShift) {
        this.amplitude = amplitude
        // what's the speed of the wave? It's ω!
        this.ω = ω // it works!! Normally weird characters like ω don't pass.
        // ωT = 2π so T = 2π/ω.
        this.n = n // the nth harmonic

        this.T = 2*width/this.n // gives the period of the nth harmonic.
        // Remember: λ = T where λ lambda is the wavelength. Slipped up on that.

        // we need a phase shift!
        this.phaseShift = phaseShift
        // we'll use a changing phase shift
        this.animationShift = 0;
    }


    // We want to get a y-value for each of the points in our waveform.
    getValue(i) {
        // the general sine formula is:
        // amplitude * sin(b(x+phase_shift)) + y_intercept/average_y
        // We're interested in the value at this function.
        return (this.amplitude*
            -sin(TAU/this.T*(i + this.phaseShift + this.animationShift)))
    }


    // now we can actually draw the function!
    show() {
        // we want a sine wave shape
        beginShape()

        for (let x = 0; x < width; x += 1) {
            // we want an x-value and a y-value for our vertex.
            // x and our getValue function do just the job!
            vertex(x, this.getValue(x))
        }

        // a super easy simplification O.o We'll have it in update.
        // this.animationShift += this.ω

        endShape()

    }

    update() {
        this.animationShift += this.ω
    }

}
