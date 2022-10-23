$(() => {
    $('.buttonComponent').on('mouseenter mouseleave click', function (e) {
        switch (e.type) {
            case 'mouseenter':
                $(this).attr('button-state', true);
                $(this).css('z-index', '100');
                select.play();
                break;
            case 'mouseleave':
                $(this).attr('button-state', false)
                break;
            case 'click':
                $(this).closest('.buttonComponent').children('.menuButton').attr('poke', true);
                enter.play();
                setTimeout(() => {
                    $('.menuButton').attr('poke', false).removeClass('buttonEvent');
                }, 500);
        }
    })
})