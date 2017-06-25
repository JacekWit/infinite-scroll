'use strict';


$(function () {



    $(window).scroll(function () {
            if ($(window).scrollTop() + $(window).height() == $(document).height()) {
        $.getJSON('http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl', function(data){
            data.forEach(function(element){
                console.log(element.name);
                console.log(element.id);
                console.log(website.id);
            });
        });
        }
    });

});