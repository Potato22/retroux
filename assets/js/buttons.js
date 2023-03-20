$(() => {
    $('.buttonComponent').on('mouseenter mouseleave click', function (e) {
        switch (e.type) {
            case 'mouseenter':
                buttonData = $(this).attr('buttonData')
                applyData = $(this).attr('applyData')
                $(this).attr('button-state', true).css('animation', 'var(--buttonJump)');
                //console.log('hovering ' + buttonData)
                select.play();
                break;
            case 'mouseleave':
                $(this).attr('button-state', false).css('animation', 'var(--xWiggle)');
                break;
            case 'click':
                $(this).closest('.buttonComponent').children('.menuButton').attr('poke', true);
                buttonData = $(this).attr('buttonData')
                console.log('buttonData = ' + buttonData)
                setTimeout(() => {
                    buttonEvent()
                }, 100);
                enter.play();
                setTimeout(() => {
                    $('.menuButton').attr('poke', false);
                }, 500);
        }
    })

    function buttonEvent() {
        //hide buttons
        $('.initMenu').addClass('buttonEnter')

        //buttonFunc
        setTimeout(() => {
            switch (buttonData) {
                case "gameplay":
                    console.log('scene', buttonData);
                    icon = "spinner"
                    scenePageName = "GAMEPLAY"
                    sceneName = ".menuGameplay"
                    sceneEnter();
                    break;
                case "audio":
                    console.log('scene', buttonData);
                    icon = "boombox"
                    scenePageName = "AUDIO"
                    sceneName = ".menuAudio"
                    sceneEnter();
                    break;
                case "gameData":
                    console.log('scene', buttonData);
                    icon = "data"
                    scenePageName = "GAME DATA"
                    sceneName = ".menuGameData"
                    sceneEnter();
                    break;
                case "about":
                    console.log('scene', buttonData);
                    icon = "spinner"
                    scenePageName = "ABOUT"
                    sceneName = ".menuAbout"
                    sceneEnter();
                    break;
                case "apply":
                    switch (applyData) {
                        case "gameplay":
                            sceneName = ".menuGameplay"
                            break;
                        case "audio":
                            sceneName = ".menuAudio"
                            break;
                        case "gameData":
                            sceneName = ".menuGameData"
                            break;
                        case "about":
                            sceneName = ".menuAbout"
                            break;
                    }
                    console.log('exiting...', sceneName)
                    $(sceneName).addClass('buttonEnter');
                    setTimeout(() => {
                        $(sceneName).hide();
                        $('.pageName').html('SETTINGS')
                        $('.initMenu').show();
                        $('.iconSpinner').css('opacity', 1);
                        $('.iconBoombox').css('opacity', 0);
                        $('.iconData').css('opacity', 0);
                        setTimeout(() => {
                            $('.initMenu').removeClass('buttonEnter')
                        }, 100);
                    }, 200);
                    break;
                default:
                    // default code to execute if none of the cases match
                    $('.initMenu').removeClass('buttonEnter')
                    break;
            }

            function sceneEnter() {
                $('.pageName').html(scenePageName)
                switch (icon) {
                    case "spinner":
                        console.log(icon)
                        $('.iconSpinner').css('opacity', 1);
                        $('.iconBoombox').css('opacity', 0);
                        $('.iconData').css('opacity', 0);
                        break;
                        case "boombox":
                        console.log(icon)
                        $('.iconSpinner').css('opacity', 0);
                        $('.iconBoombox').css('opacity', 1);
                        $('.iconData').css('opacity', 0);
                        break;
                        case "data":
                        console.log(icon)
                        $('.iconSpinner').css('opacity', 0);
                        $('.iconBoombox').css('opacity', 0);
                        $('.iconData').css('opacity', 1);
                        break;
                }
                $('.initMenu').hide();
                $(sceneName).show();
                setTimeout(() => {
                    $(sceneName).removeClass('buttonEnter');
                }, 100);
            }
        }, 300);
    }
})