input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + (input.temperature()))
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
})
input.onGesture(Gesture.Shake, function () {
    basic.showArrow(ArrowNames.North)
    basic.showArrow(ArrowNames.NorthEast)
    basic.showArrow(ArrowNames.East)
    basic.showArrow(ArrowNames.SouthEast)
    basic.showArrow(ArrowNames.South)
    basic.showArrow(ArrowNames.SouthWest)
    basic.showArrow(ArrowNames.West)
    basic.showArrow(ArrowNames.NorthWest)
    basic.pause(1000)
    basic.showString("I AM DIZZY")
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showString("I DO NOT WANT TO BE UPSIDEDOWN")
})
input.onGesture(Gesture.FreeFall, function () {
    basic.showString("HELP!")
})
basic.showString("WELCOME I AM MICROBIT TOBIAS'S ROBOT")
