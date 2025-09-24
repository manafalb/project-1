let counter = 0
let time = 0
input.onButtonPressed(Button.A, function () {
    basic.showString("" + (input.lightLevel() / 30))
})
input.onButtonPressed(Button.AB, function () {
    counter = 0
    time = 0
})
loops.everyInterval(1000, function () {
    time += 1
    if (counter >= 10) {
        basic.showIcon(IconNames.No)
    } else if (input.lightLevel() < 25) {
        basic.showIcon(IconNames.Sad)
        counter += 1
    } else if (input.lightLevel() >= 25) {
        basic.showIcon(IconNames.Yes)
    }
})
loops.everyInterval(2000, function () {
    serial.writeValue("light level", input.lightLevel())
    if (time >= 60) {
        game.pause()
    }
})
