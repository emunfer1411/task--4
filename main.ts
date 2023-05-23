let Velocidad = 40
let Velocidad_de_Giro = 40
let obstaculo = 0
basic.forever(function () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, Velocidad)
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 5) {
        if (obstaculo == 1) {
            maqueen.motorStop(maqueen.Motors.All)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, Velocidad_de_Giro)
            basic.pause(2000)
            maqueen.motorStop(maqueen.Motors.All)
            obstaculo = 2
        }
        if (obstaculo == 2) {
            maqueen.motorStop(maqueen.Motors.All)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, Velocidad_de_Giro)
            basic.pause(2000)
            maqueen.motorStop(maqueen.Motors.All)
            obstaculo = 3
        }
        if (obstaculo == 3) {
            maqueen.motorStop(maqueen.Motors.All)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, Velocidad_de_Giro)
            basic.pause(2000)
            maqueen.motorStop(maqueen.Motors.All)
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
