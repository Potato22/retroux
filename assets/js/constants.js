var bgmVol = .6
var sfxVol = 1
const bgm1 = new Howl({
    src: ['assets/audio/lq/Bee Extended resample.ogg'],
    loop: true,
    volume: bgmVol
})
const bgm2 = new Howl({
    src: ['assets/audio/lq/Turn Me On Extended resample.ogg'],
    loop: true,
    volume: bgmVol
})
const bgm3 = new Howl({
    src: ['assets/audio/lq/turn me on x modern life resample extended.ogg'],
    loop: true,
    volume: bgmVol
})
const bgm4 = new Howl({
    src: ['assets/audio/lq/dv-i_logo_bitcrush.ogg'],
    loop: true,
    volume: bgmVol
})
const bgmS = new Howl({
    src: ['assets/audio/lq/dv-i_implementation_bitcrush.ogg'],
    loop: true,
    volume: bgmVol
})
const logo = new Howl({
    src: ['assets/audio/lq/@pottocard resample.ogg']
})
const enter = new Howl({
    src: ['assets/audio/lq/enter.ogg'],
    volume: sfxVol
})
const cancel = new Howl({
    src: ['assets/audio/lq/cancel.ogg'],
    volume: sfxVol
})
const confirm = new Howl({
    src: ['assets/audio/lq/confirm.ogg'],
    volume: sfxVol
})
const confirm2 = new Howl({
    src: ['assets/audio/lq/confirm2.ogg'],
    volume: sfxVol
})
const select = new Howl({
    src: ['assets/audio/lq/select.ogg'],
    volume: sfxVol
})
const click = new Howl({
    src: ['assets/audio/lq/click.ogg'],
    volume: sfxVol
})
const warning = new Howl({
    src: ['assets/audio/lq/warning.ogg'],
    volume: sfxVol
})
var bgmDefault = bgm4
var bgm = bgmDefault