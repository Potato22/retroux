import $ = require("jquery");
import {select, enter} from './driver'

$(() => {
    $('.buttonComponent').on('mouseenter mouseleave click', function (e) {
        switch (e.type) {
            case 'mouseenter':
                $(this).attr('button-state', 'true');
                select.play();
                break;
            case 'mouseleave':
                $(this).attr('button-state', 'false')
                break;
            case 'click':
                $(this).closest('.buttonComponent').children('.menuButton').attr('poke', 'true');
                let buttonData =$(this).attr('buttonData')
                console.log('buttonData = ' + buttonData)
                setTimeout(() => {
                    buttonEvent()
                }, 100);
                enter.play();
                setTimeout(() => {
                    $('.menuButton').attr('poke', 'false');
                }, 500);
        }
    })

    function buttonEvent() {
        $('#menuButtons').addClass('buttonEnter')
        setTimeout(() => {
            console.log('scene')
        }, 250);
        //debug
        setTimeout(() => {
            $('#menuButtons').removeClass('buttonEnter')
        }, 1000);
    }
})