$(function() {

    $('body').css({ 'background-color': 'lightgreen' });
    $('.card').css({ 'background-color': 'yellow' });
    //$('.card__btn').css({ 'display': 'none' });


    //setInterval(checkButtonStatus('.card__btn'), 1500);
    // setInterval(function() {
    //console.log('Time');
    checkButtonStatus('.card__btn', 1500);
    // }, 1500);



    function checkButtonStatus(elem, time) {

        setInterval(function() {
            var getDefaultState = $(elem).attr('disabled');

            if (getDefaultState == 'disabled') {
                $(elem).removeAttr('disabled', 'true');
            } else {
                $(elem).attr('disabled', 'false');
            }
            //console.log($(elem));
        }, time);

    };

    // function stopButtonInterval(elem) {
    //     clearInterval()    
    // }

    $('.card__btn--stop').on('click', checkButtonStatus);

});