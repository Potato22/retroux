//buttonStates
$('.buttonComponent').on('mouseenter mouseleave click', function (e) {
    var select = new Audio('assets/audio/select.ogg')
    var enter = new Audio('assets/audio/enter.ogg')
    var selectv = 1
    var enterv = 1
    switch (e.type) {
        case 'mouseenter':
            $(this).attr('button-state', true);
            $(this).css('z-index', '100');
            select.volume = selectv
            select.play();
            break;
        case 'mouseleave':
            $(this).attr('button-state', false)
            break;
        case 'click':
            $(this).closest('.buttonComponent').children('.menuButton').attr('poke', true);
            select.volume = enterv
            enter.play();
            setTimeout(() => {
                $('.menuButton').attr('poke', false).removeClass('buttonEvent');
            }, 500);
    }
})