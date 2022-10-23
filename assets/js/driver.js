const bgm = new Howl({
    src: ['assets/audio/dv-i_configuration_bitcrush.mp3'],
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
    console.log('READY [OK]')
    $('.grid, #menuButtons').hide();
    $('.cover').on('click', function () {
        console.log('Starting...')
        $('.cover').css('display', 'none');
        $('.grid, #menuButtons').show();
        $('.fader').attr('started', 'true');

        enter.play(), bgm.play()
    })
    $('#shutdown').on('click', function() {
        setTimeout(() => {
            $('.grid, #menuButtons').hide();
            $('.fader').attr('started', 'false');
            $('.cover').css('pointer-events', 'none');
            bgm.pause();
            $('.cover').css('display', 'block').html(' Terminated!');
            setTimeout(() => {
                $('.cover').html('INTERACTIVE RETRO STYLIZED UX MOCKUP (4:3) 768p BY POTTO<br><b>[!] build may not work properly with devices screen smaller than 720p viewport.</b><br><br>###################<br>Music "Configuration", by DV-i<br>###################<br><br>BUILD IS STILL UNFINISHED! current todos:<br>-button events<br>-scene states<br>-background<br>started on 22 Oct 2022<br><br><br> (READY)<br><br> Click to start.');
                $('.cover').css('pointer-events', 'auto');
            }, 2000);
        }, 500);
    })
})
//init