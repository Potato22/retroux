import {
    updateVolumeValues,
    exportBgmVal
} from './soundVolHandler.mjs';

const enterDelay = 400;
const ornamentDelay = 200;
var ornamentTransition = "";
const buttonComponent = $('.buttonComponent')
const bglive = $('.bglive')
var enablePoke = true;
var buttonData = "";
var buttonInherit = "";
var subButtonData = "";
var applyData = "";
var toggle = "";
var toggleData = "";
var icon = "";
var scenePageName = "";
var sceneName = "";
var prevSceneName = "";

var monoBoolean = "";
var enablePoke = "true";
var notransition = "false";
var darkBoolean = "";
updateVolumeValues()
exportBgmVal()
console.log("exportBgmVal", exportBgmVal())

$(() => {

    buttonComponent.on('mouseenter mouseleave click', function (e) {
        switch (e.type) {
            case 'mouseenter':
                buttonData = $(this).attr('buttonData')
                applyData = $(this).attr('applyData')
                $(this).attr('button-state', true).css('animation', 'var(--buttonJump)');
                //console.log('hovering ' + buttonData)

                //customIconOnHover
                select.play();
                break;

            case 'mouseleave':
                $(this).attr('button-state', false).css('animation', 'var(--xWiggle)');
                break;
            case 'click':
                $(this).closest('.buttonComponent').children('.menuButton').attr('poke', enablePoke);

                //pull button data
                buttonData = $(this).attr('buttonData')
                buttonInherit = $(this).attr('buttonInherit')
                subButtonData = $(this).attr('subButtonData')
                toggle = $(this).attr('toggle')
                toggleData = $(this).attr('toggleData')

                console.log('buttonData= ' + buttonData, 'buttonInherit=', buttonInherit, 'subButtonData=', subButtonData, 'toggle=', toggle, 'toggleData=', toggleData)
                setTimeout(() => {
                    buttonEvent()
                    bgmChanger()
                }, 100);
                switch (buttonData) {
                    case "apply":
                        cancel.play()
                        break;

                    default:
                        enter.play();
                        break;
                }
                setTimeout(() => {
                    $('.menuButton').attr('poke', false);
                }, 500);

                //all settingsData
                if (toggle == "true") {
                    switch (toggleData) {
                        case "mono":
                            $('[toggleData = "mono"]').toggleClass('toggleON');
                            monoBoolean = $('[toggleData = "mono"]').hasClass('toggleON')
                            if (monoBoolean == true) {
                                $('.monoFilter').attr('mono', "true")
                            } else {
                                $('.monoFilter').attr('mono', "false")
                            }
                            break;
                        case "noflashy":
                            $('[toggleData = "noflashy"]').toggleClass('toggleON');
                            enablePoke = !enablePoke;
                            break;
                        case "notransition":
                            $('[toggleData = "notransition"]').toggleClass('toggleON')
                            notransition = $('[toggleData = "notransition"]').hasClass('toggleON')
                            if (notransition == true) {
                                $('.buttonComponent, .menuButtons, #screenOrnaments').attr('notransition', "true")
                            } else {
                                $('.buttonComponent, .menuButtons, #screenOrnaments').attr('notransition', "false")
                            }
                            break;
                        case "dark":
                            $('[toggleData = "dark"]').toggleClass('toggleON')
                            darkBoolean = $('[toggleData = "dark"]').hasClass('toggleON')
                            if (darkBoolean == true) {
                                $('.darkFilter').attr('dark', "true")
                            } else {
                                $('.darkFilter').attr('dark', "false")
                            }
                            break;
                        case "bgmVol":
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
                console.log('exiting', applyData)
                switch (applyData) {
                    case "gameplay":
                        console.log('applying gameplay')
                        ornamentTransition = ""
                        prevSceneName = ".initMenu"
                        sceneName = ".menuGameplay"
                        scenePageName = "SETTINGS"
                        break;
                    case "audio":
                        prevSceneName = ".initMenu"
                        sceneName = ".menuAudio"
                        scenePageName = "SETTINGS"
                        bgmReturn()
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
                console.log("sub", buttonInherit, '->', subButtonData)
                switch (buttonInherit) {
                    case "gameplay":
                        switch (subButtonData) {
                            case "where":
                                bgm1.stop(), bgm2.stop();
                                $('.bglive, #iconOrnament, .buttonHighlight, .buttonComponent').remove()
                                setTimeout(() => {
                                    $('*').remove()
                                    setTimeout(() => {
                                        window.close();
                                    }, 200);
                                }, 1000);
                                break;
                            case "accessibility":
                                sceneName = ".menuGameplay"
                                $(sceneName).addClass('buttonEnter');
                                sceneName = ".submenuGameplayAccessibility"
                                console.log("sceneName", sceneName)
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

    function bgmChanger() {
        updateVolumeValues()
        switch (buttonData) {
            case "audio":
                bgm.fade((exportBgmVal()), 0, 600)
                setTimeout(() => {
                    bgm.stop()
                    bgm = bgm2
                    bgm.play()
                    bgm.fade(0, (exportBgmVal()), 300)
                    console.log("bgm", (exportBgmVal()))
                }, 600);
                break;
            case "apply":
                updateVolumeValues()
                if (applyData =~ "audio") {
                    break
                } else { bgm.fade((exportBgmVal()), 0, 300) }
                break;
        }
    }

    function bgmReturn() {
        console.log("returning to bgm1...")
        setTimeout(() => {
            bgm.stop()
            bgm = bgm1
            bgm.play()
            bgm.fade(0, (exportBgmVal()), 300)
            console.log("bgm", (exportBgmVal()))
        }, 300);
    }
})