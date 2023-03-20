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
    coverText = "<a href='https://github.com/Potato22/HTML5RetroUX'>https://github.com/Potato22/HTML5RetroUX</a><br><br>INTERACTIVE RETRO STYLIZED UX MOCKUP (4:3) 768p BY POTTO<br><b>[!] build may not work properly with devices screen smaller than 720p viewport.</b><br><br>###################<br>Music 'Configuration', by DV-i<br>###################<br><br>BUILD IS STILL UNFINISHED! current todos:<br>-scene states<br>-background<br>started on 22 Oct 2022<br><br><br> (READY)<br><br> Click to start."
    
    console.log('READY [OK]')
    $('.grid, #buttonArrayInline').hide();
    $('.cover').on('click', function () {
        console.log('Starting...')
        $('.cover').css('display', 'none');
        $('.grid, #buttonArrayInline').show();
        $('.fader').attr('started', 'true');

        enter.play(), bgm.play()
    })
    $('#shutdown').on('click', function() {
        setTimeout(() => {
            $('.grid, #buttonArrayInline').hide();
            $('.fader').attr('started', 'false');
            $('.cover').css('pointer-events', 'none');
            bgm.stop();
            $('.cover').css('display', 'block').html(' Terminated!');
            setTimeout(() => {
                $('.mainWindow').hide();
                setTimeout(() => {
                    $('.mainWindow').show();
                    $('.cover').html(coverText);
                    //window.close();
                }, 1000);
                $('.cover').css('pointer-events', 'auto');
            }, 2000);
        }, 500);
    })
})