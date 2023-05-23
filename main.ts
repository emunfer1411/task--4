let Velocidad = 40
let Velocidad_de_Giro = 30
let obstaculo = 0
basic.forever(function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, Velocidad)
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 5) {
        if (obstaculo == 1) {
            obstaculo = 2
        }
        if (obstaculo == 2) {
            obstaculo = 3
        }
        if (obstaculo == 3) {
            obstaculo = 4
        }
        if (obstaculo == 4) {
            obstaculo = 5
        }
        if (obstaculo == 5) {
            obstaculo = 6
        }
        if (obstaculo == 6) {
            obstaculo = 7
        }
        if (obstaculo == 0) {
            maqueen.motorStop(maqueen.Motors.All)
        }
    }
})
