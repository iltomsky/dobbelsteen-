input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(getal, 6))
    basic.pause(2000)
    basic.clearScreen()
})
let getal = 0
basic.showNumber(getal)
