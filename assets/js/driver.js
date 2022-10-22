const bgm = new Audio('assets/audio/dv-i_configuration_bitcrush.mp3')
const enter = new Audio('assets/audio/enter.ogg')
const bgmv = .6 //for now
$(() => {
    $('.grid').hide();
    $('.cover').on('click', function () {
        $('.cover').css('display', 'none');
        $('.grid').show();
        $('.fader').attr('started', 'true');

        bgm.currentTime = 0;
        bgm.loop = true
        bgm.volume = bgmv
        enter.play(), bgm.play()
    })
    $('#shutdown').on('click', function() {
        $('.grid').hide();
        $('.fader').attr('started', 'false');
        setTimeout(() => {
            bgm.pause();
            $('.cover').css('display', 'block').html(' Terminated!');
            setTimeout(() => {
                $('.cover').html('INTERACTIVE RETRO STYLIZED UX MOCKUP (4:3) 768p BY POTTO<br><b>[!] build may not work with devices screen smaller than 720p viewport.</b><br> (READY)<br><br>###################<br>Music "Configuration", by DV-i<br>###################<br><br>BUILD IS STILL UNFINISHED! current todos:<br>-button events<br>-scene states<br>-background<br>started on 22 Oct 2022<br><br><br> Click to start.');
            }, 2000);
        }, 500);
    })
})
//init