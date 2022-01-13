$(window).on('load', function () {
    //Preloader
    $('.preload').show();
    for (let i = 0; i < 4; i++) {
        $('.preload .letter').fadeOut(400).fadeIn(400).delay(200);
    }
    $('.preload').delay(5000).fadeOut('slow');

    //Send form 
    $(".login-form").submit(function () {
        $.ajax({
            type: "POST",
            url: '/submit.php',
            data: $(".login-form").serialize(),
            beforeSend: function () {
                $('.login-form .load-wrapper').show();
            },
            success: function (data) {
                setTimeout(function(){
                    $('.login-form .load-wrapper').hide();
                    if(data == 'Добро пожаловать!') {
                        $('.login-form').html('<h3>Авторизация успешна</h3>').delay(3000).fadeOut('fast');
                        $('.welcome').text(data).delay(3000).fadeIn('slow');
                    } else {
                        $('.login-form').html('<h3>' + data + '</h3>');
                        setTimeout(function(){
                            location.reload();
                        }, 3000);
                    }
                    console.log(data);
                    
                },3000);
            },
            error: function (jqXHR, text, error) {
                setTimeout(function(){
                    $(".login-form").html('<p class=\"form-error\">' + error +'</p>');
                },3000);
            }
        });
        return false;
    });
});