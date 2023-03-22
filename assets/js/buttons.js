const enterDelay = 400;
const ornamentDelay = 200;
var ornamentTransition = "";
const buttonComponent = $('.buttonComponent')
$(() => {
    $('.buttonComponent').on('mouseenter mouseleave click', function (e) {
        switch (e.type) {
            case 'mouseenter':
                buttonData = $(this).attr('buttonData')
                applyData = $(this).attr('applyData')
                $(this).attr('button-state', true).css('animation', 'var(--buttonJump)');
                //console.log('hovering ' + buttonData)

                //customIconOnHover
                select.play();
                switch (buttonData) {
                    case "mono":
                        console.log('monochromatic')
                        break;
                    case "norgb":
                        console.log('noflashy')
                        break;
                }
                break;

            case 'mouseleave':
                $(this).attr('button-state', false).css('animation', 'var(--xWiggle)');
                break;
            case 'click':
                $(this).closest('.buttonComponent').children('.menuButton').attr('poke', true);

                //pull button data
                buttonData = $(this).attr('buttonData')
                buttonInherit = $(this).attr('buttonInherit')
                subButtonData = $(this).attr('subButtonData')
                toggle = $(this).attr('toggle')
                toggleData = $(this).attr('toggleData')

                console.log('buttonData= ' + buttonData, 'buttonInherit=', buttonInherit, 'subButtonData=', subButtonData, 'toggle=', toggle, 'toggleData=', toggleData)
                setTimeout(() => {
                    buttonEvent()
                }, 100);
                enter.play();
                setTimeout(() => {
                    $('.menuButton').attr('poke', false);
                }, 500);

                if (toggle == "true") {
                    switch (toggleData) {
                        case "mono":
                            $('[toggleData = "mono"]').toggleClass('toggleON')
                            break;
                        case "noflashy":
                            $('[toggleData = "noflashy"]').toggleClass('toggleON')
                            break;
                    }
                }
                break;
        }
    })

    function buttonEvent() {
        //alert("hide curr menu animation for " + buttonData)

        //buttonFunc
        switch (buttonData) {
            case "gameplay":
                console.log('scene', buttonData);
                icon = "spinner"
                scenePageName = "GAMEPLAY"
                sceneName = ".menuGameplay"
                prevSceneName = ".initMenu"
                $(prevSceneName).addClass('buttonEnter');
                setTimeout(() => {
                    hideOrnaments();
                }, ornamentDelay);
                setTimeout(() => {
                    sceneEnter();
                }, enterDelay);
                break;
            case "audio":
                console.log('scene', buttonData);
                icon = "boombox"
                scenePageName = "AUDIO"
                sceneName = ".menuAudio"
                prevSceneName = ".initMenu"
                $(prevSceneName).addClass('buttonEnter');
                setTimeout(() => {
                    hideOrnaments();
                }, ornamentDelay);
                setTimeout(() => {
                    sceneEnter();
                }, enterDelay);
                break;
            case "gameData":
                console.log('scene', buttonData);
                icon = "data"
                scenePageName = "GAME DATA"
                sceneName = ".menuGameData"
                prevSceneName = ".initMenu"
                $(prevSceneName).addClass('buttonEnter');
                setTimeout(() => {
                    hideOrnaments();
                }, ornamentDelay);
                setTimeout(() => {
                    sceneEnter();
                }, enterDelay);
                break;
            case "about":
                console.log('scene', buttonData);
                icon = "spinner"
                scenePageName = "ABOUT"
                sceneName = ".menuAbout"
                prevSceneName = ".initMenu"
                $(prevSceneName).addClass('buttonEnter');
                setTimeout(() => {
                    hideOrnaments();
                }, ornamentDelay);
                setTimeout(() => {
                    sceneEnter();
                }, enterDelay);
                break;
            case "apply":
                switch (applyData) {
                    case "gameplay":
                        ornamentTransition = ""
                        prevSceneName = ".initMenu"
                        sceneName = ".menuGameplay"
                        scenePageName = "SETTINGS"
                        break;
                    case "audio":
                        prevSceneName = ".initMenu"
                        sceneName = ".menuAudio"
                        scenePageName = "SETTINGS"
                        break;
                    case "gameData":
                        prevSceneName = ".initMenu"
                        sceneName = ".menuGameData"
                        scenePageName = "SETTINGS"
                        break;
                    case "about":
                        prevSceneName = ".initMenu"
                        sceneName = ".menuAbout"
                        scenePageName = "SETTINGS"
                        break;
                    case "submenuGameplayAccessibility":
                        ornamentTransition = "1"
                        prevSceneName = ".menuGameplay"
                        sceneName = ".submenuGameplayAccessibility"
                        break;
                }
                console.log('[APPLY]', ' sceneName=', sceneName, '->', 'prevSceneName=', prevSceneName)
                $(sceneName).addClass('buttonEnter');
                setTimeout(() => {
                    $('#buttonArrayInline').hide();
                    $(sceneName).hide();
                    if (!ornamentTransition) {
                        hideOrnaments();
                    }
                    setTimeout(() => {
                        $(prevSceneName).show();
                        $('#buttonArrayInline').show();
                        $('.iconSpinner').css('opacity', 1);
                        $('.iconBoombox').css('opacity', 0);
                        $('.iconData').css('opacity', 0);
                        $(prevSceneName).removeClass('buttonEnter')
                        unhideOrnaments();
                        $('.pageName').html(scenePageName)
                    }, 200);
                }, 200);
                break;
            case "subButton":
                switch (buttonInherit) {
                    case "gameplay":
                        switch (subButtonData) {
                            case "where":
                                bgm1.stop(), bgm2.stop();
                                $('.bglive').remove()
                                setTimeout(() => {
                                    $('*').remove()
                                }, 1000);
                                break;
                            case "accessibility":
                                sceneName = ".menuGameplay"
                                $(sceneName).addClass('buttonEnter');
                                sceneName = ".submenuGameplayAccessibility"
                                setTimeout(() => {
                                    sceneEnter();
                                }, enterDelay);
                                break;
                            default:
                                break;
                        }
                        break;
                    default:
                        break;
                }
                break;

        }


        function sceneEnter() {
            console.log('[BUTTONEVENT]', ' sceneName=', sceneName, '->', 'prevSceneName=', prevSceneName)
            //change title
            $('.pageName').html(scenePageName)
            //alert('reveal animation ' + scenePageName)

            //check which pressed for icons
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
            switch (buttonInherit) {
                case "gameplay":
                    $('.menuGameplay').hide();
                    break;
                default:
                    $('#buttonArrayInline, .initMenu').hide();
                    break;

            }
            $(sceneName).show();

            //enter animation
            unhideOrnaments();
            setTimeout(() => {
                $('#buttonArrayInline').show();
                $(sceneName).removeClass('buttonEnter');
            }, 100);
        }
    }

    function hideOrnaments() {
        $('#screenOrnaments').addClass('hideOrnaments');
    }

    function unhideOrnaments() {
        $('#screenOrnaments').removeClass('hideOrnaments');
    }
})