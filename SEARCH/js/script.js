'use strict'
$(function () {
    var API_KEY = '3297254-79da6932ff97f2db0b75bf2b8'; // My Reg KEY

    var statusForm = false;

    $('#search_form').on('submit', function (e) {
        e.preventDefault();

        if (statusForm === true) {
            return false;
        }
        // inquiry url
        var URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + encodeURIComponent($('#question').val());
        var $template = $('#total').html();
        // Ajax-inquiry
        $.ajax({
            dataType: "json",
            url: URL,
            async: false,
            success: function (data) {
                if (parseInt(data.totalHits) > 0) {
                    $('section').html('');
                    $.each(data.hits, function (i, hit) {
                        $('section').append(tmpl($template, hit));
                    });
                } else {
                    $('section').html('<h2><em>Not found</em></h2>');
                }

            }
        });

    });

});


