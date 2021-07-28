input.onGesture(Gesture.Shake, function () {
    Timer = 0
    basic.showIcon(IconNames.Happy)
    soundExpression.giggle.playUntilDone()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Timer = 0
    basic.showIcon(IconNames.Happy)
    soundExpression.happy.playUntilDone()
})
let Timer = 0
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
soundExpression.hello.playUntilDone()
basic.forever(function () {
    basic.pause(1000)
    Timer += 1
    if (Timer == 30) {
        basic.showIcon(IconNames.Sad)
        soundExpression.sad.playUntilDone()
    }
    if (Timer == 30) {
        basic.showIcon(IconNames.Asleep)
        soundExpression.yawn.playUntilDone()
    }
    if (Timer == 40) {
        soundExpression.mysterious.playUntilDone()
        music.setBuiltInSpeakerEnabled(false)
        while (true) {
            basic.showIcon(IconNames.Skull)
        }
    }
})
