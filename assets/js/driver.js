var bgmVol = .5
var sfxVol = 1
const bgm1 = new Howl({
    src: ['assets/audio/lq/dv-i_configuration_bitcrush.ogg'],
    loop: true,
    volume: bgmVol
})
const bgm2 = new Howl({
    src: ['assets/audio/lq/dv-i_instinct_abyss_bitcrush.ogg'],
    loop: true,
    volume: bgmVol
})
const bgm3 = new Howl({
    src: ['assets/audio/lq/dv-i_implementation_bitcrush.ogg'],
    loop: true,
    volume: bgmVol
})
const logo = new Howl({
    src: ['assets/audio/lq/dv-i_logo_bitcrush.ogg']
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

var bgm = bgm2

const warning = new Howl({
    src: ['assets/audio/lq/warning.ogg'],
    volume: sfxVol
})
$(() => {
    coverText = "Click again to restart."

    console.log('READY [OK]')
    $('.grid, #buttonArrayInline, #screenOrnaments, .bglive').hide();
    $('.cover').on('click', function () {
        warning.play()
        setTimeout(() => {
            $('.logoSplash').show();
            $('.logoSplash').css({
                'opacity': '1'
            })
            $('.logoSplash').css({
                'background': 'white'
            })
            $('.cover').css('display', 'none');
            setTimeout(() => {
                logo.play()
            }, 200);
        }, 300);
        setTimeout(() => {
            console.log('Starting...')
            setTimeout(() => {
                $('.logoSplash').css({
                    'opacity': '0'
                })
                setTimeout(() => {
                    $('.fader').attr('started', 'true');
                    $('.logoSplash').hide();
                    $('.grid, #buttonArrayInline, #screenOrnaments, .bglive').show();
                    bgm.play()
                }, 500);
            }, 300);
        }, 3000);
    })

    //DEBUG:: SKIP
    debugSkipIntro();

    $('#shutdown').on('click', function () {
        $('.wrapper').css('pointer-events', 'none');
        setTimeout(() => {
            $('.fader').attr('started', 'false');
            setTimeout(() => {
                $('.grid, #buttonArrayInline, #screenOrnaments, .bglive').hide();
                $('.cover').css('display', 'block').html(' Terminated!');
                bgm.stop();
                bgm2.stop();
                setTimeout(() => {
                    $('.mainWindow').hide();
                    setTimeout(() => {
                        $('.mainWindow').show();
                        $('.cover').html(coverText);
                        //window.close();
                    }, 1000);
                    $('.wrapper').css('pointer-events', 'auto');
                }, 2000);
            }, 1000);
        }, 500);
    })
})
function debugSkipIntro () {
    //DEBUG:: SKIP
    console.log('Starting...')
    $('.cover').css('display', 'none');
     $('.grid, #buttonArrayInline, #screenOrnaments, .bglive').show();
    $('.fader').attr('started', 'true');
    enter.play(), //bgm.play()
    $('.logoSplash').css({
        'opacity': '0'
    })
}