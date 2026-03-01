// Function to Read Line Sensors to Detect Edge of Dohyo
function read_line (list2: number[]) {
    s = 0
    for (let value of list2) {
        s = s + value
    }
    return s
}
input.buttonD12.onEvent(ButtonEvent.Click, function () {
    music.playMelody("B A G A G F A C5 ", 250)
    zumo.clear()
    pause(2000)
    zumo.runMotor(ZumoMotor.All, 99)
    pause(2000)
    zumo.stopMotor(ZumoMotor.All)
    pause(2000)
    zumo.runMotor(ZumoMotor.All, 100)
    pause(2000)
    zumo.stopMotor(ZumoMotor.All)
})
let s = 0
zumo.createI2C(pins.SCL, pins.SDA)
zumo.init(128, 64)
zumo.enableIMU()
zumo.Initialization(Lightype.DIGITAL)
zumo.writeStringNewLine("ready 1.10")
music.baDing.play()
