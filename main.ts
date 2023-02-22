input.onButtonPressed(Button.A, function () {
    radio.sendString("Button A!")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("Excellent!")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("Button B!")
})
radio.setGroup(9)
