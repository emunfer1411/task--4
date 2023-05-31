let Velocidad = 40
let Velocidad_de_Giro = 40
let obstaculo = 0
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 7) {
        obstaculo = obstaculo + 1
        if (obstaculo == 1) {
            maqueen.motorStop(maqueen.Motors.All)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, Velocidad_de_Giro)
            basic.pause(1500)
            maqueen.motorStop(maqueen.Motors.All)
        }
        if (obstaculo == 2) {
            maqueen.motorStop(maqueen.Motors.All)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, Velocidad_de_Giro)
            basic.pause(1800)
            maqueen.motorStop(maqueen.Motors.All)
        }
        if (obstaculo == 3) {
            maqueen.motorStop(maqueen.Motors.All)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, Velocidad_de_Giro)
            basic.pause(2000)
            maqueen.motorStop(maqueen.Motors.All)
            obstaculo = 4
        }
        if (obstaculo == 4) {
            maqueen.motorStop(maqueen.Motors.All)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, Velocidad_de_Giro)
            basic.pause(1850)
            maqueen.motorStop(maqueen.Motors.All)
            obstaculo = 5
        }
        if (obstaculo == 5) {
            maqueen.motorStop(maqueen.Motors.All)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, Velocidad_de_Giro)
            basic.pause(1900)
            maqueen.motorStop(maqueen.Motors.All)
            obstaculo = 6
        }
        if (obstaculo == 6) {
            maqueen.motorStop(maqueen.Motors.All)
        }
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, Velocidad)
    }
})
