$(window).on('load', function () {
    //Preloader
    // for (let i = 0; i < 4; i++) {
    //     $('.preload .letter').fadeOut(400).fadeIn(400).delay(200);
    // }
    // $('.preload').delay(5000).fadeOut('slow');

    //Send form 
    $(".login-form").submit(function () {
        $.ajax({
            type: "POST",
            url: '/send.php',
            data: $(".login-form").serialize(),
            beforeSend: function () {
                $('.login-form .load-wrapper').show();
            },
            success: function (data) {
                setTimeout(function(){
                    $('.login-form input').hide();
                    $('.wellcome').text(data);
                },5000);
            },
            error: function (jqXHR, text, error) {
                setTimeout(function(){
                    $(".login-form").html('<p class=\"form-error\">' + error +'</p>');
                },5000);
            }
        });
        return false;
    });
});