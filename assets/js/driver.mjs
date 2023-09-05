$(() => {

    const coverText = "Click again to restart."

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
    //debugSkipIntro();

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
                        //
                    }, 1000);
                    $('.wrapper').css('pointer-events', 'auto');
                }, 2000);
            }, 1000);
        }, 500);
    })
})

function debugSkipIntro() {
    //DEBUG:: SKIP
    console.log('Starting...')
    $('.cover').css('display', 'none');
    $('.grid, #buttonArrayInline, #screenOrnaments, .bglive').show();
    $('.fader').attr('started', 'true');
    enter.play(), bgm.play()
    $('.logoSplash').css({
        'opacity': '0'
    })
}