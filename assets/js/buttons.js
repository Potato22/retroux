"use strict";
exports.__esModule = true;
var $ = require("jquery");
var driver_1 = require("./driver");
$(function () {
    $('.buttonComponent').on('mouseenter mouseleave click', function (e) {
        switch (e.type) {
            case 'mouseenter':
                $(this).attr('button-state', 'true');
                driver_1.select.play();
                break;
            case 'mouseleave':
                $(this).attr('button-state', 'false');
                break;
            case 'click':
                $(this).closest('.buttonComponent').children('.menuButton').attr('poke', 'true');
                var buttonData = $(this).attr('buttonData');
                console.log('buttonData = ' + buttonData);
                setTimeout(function () {
                    buttonEvent();
                }, 100);
                driver_1.enter.play();
                setTimeout(function () {
                    $('.menuButton').attr('poke', 'false');
                }, 500);
        }
    });
    function buttonEvent() {
        $('#menuButtons').addClass('buttonEnter');
        setTimeout(function () {
            console.log('scene');
        }, 250);
        //debug
        setTimeout(function () {
            $('#menuButtons').removeClass('buttonEnter');
        }, 1000);
    }
});
