// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery
//= require jquery_ujs
//= require jquery.mobile
//= require_tree .

function favoritos(id, favorito) {
    $.ajax({
        url: 'favorito',
        type: 'POST',
        data: {id: id, favorito: favorito}
    });
    if (favorito) {
        cambio = document.getElementById('menos');
        cambio.removeClass('ui-icon-plus');
        cambio.addClass('ui-icon-minus');
    } else {
        cambio = document.getElementById('mas');
        cambio.removeClass('ui-icon-minus');
        cambio.addClass('ui-icon-plus');
    }
}

