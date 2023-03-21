const bgm = new Howl({
    src: ['assets/audio/dv-i_configuration_bitcrush.ogg'],
    loop: true,
    volume: .6,
})
const enter = new Howl({
    src: ['assets/audio/enter.ogg']
})
const cancel = new Howl({
    src: ['assets/audio/cancel.ogg']
})
const confirm = new Howl({
    src: ['assets/audio/confirm.ogg']
})
const confirm2 = new Howl({
    src: ['assets/audio/confirm2.ogg']
})
const select = new Howl({
    src: ['assets/audio/select.ogg']
})
const warning = new Howl({
    src: ['assets/audio/warning.ogg']
})
$(() => {
    coverText = "<a href='https://github.com/Potato22/HTML5RetroUX'>https://github.com/Potato22/HTML5RetroUX</a><br><br>INTERACTIVE RETRO STYLIZED UX MOCKUP (4:3) 768p BY POTTO<br><b>[!] build may not work properly with devices screen smaller than 720p viewport.</b><br><br>###################<br>Music 'Configuration', by DV-i<br>###################<br><br>Click again to restart."

    console.log('READY [OK]')
    $('.grid, #buttonArrayInline').hide();
    $('.cover').on('click', function () {
        console.log('Starting...')
        $('.cover').css('display', 'none');
        $('.grid, #buttonArrayInline').show();
        $('.fader').attr('started', 'true');
        enter.play(), bgm.play()
    })

    ////SKIP
    //console.log('Starting...')
    //$('.cover').css('display', 'none');
    //$('.grid, #buttonArrayInline').show();
    //$('.fader').attr('started', 'true');
    //enter.play(), bgm.play()

    $('#shutdown').on('click', function () {
        $('.wrapper').css('pointer-events', 'none');
        setTimeout(() => {
            $('.fader').attr('started', 'false');
            setTimeout(() => {
                $('.grid, #buttonArrayInline').hide();
                $('.cover').css('display', 'block').html(' Terminated!');
                bgm.stop();
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