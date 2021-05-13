


function resize(id, ancho, font_size, warp) {
    var active = false;
    document.getElementById(id).style.fontSize = font_size + "px";
    //console.log($('#'+warp+' div').width());
    while (ancho < $('#' + warp + ' div').width()) {
        $('#' + warp + ' div').css('font-size', (parseInt($('#' + warp + ' div').css('font-size')) - 1) + "px");
        active = true;
    }
    return active;
}

/*function resize_height(id, alto, font_size, warp) {
    var active = false;
    document.getElementById(id).style.fontSize = font_size + "px";
    while (alto < $('#' + warp + ' div').height()) {
        //console.log("ANCHO DADO: "+ancho+" . ANCHO ACTUAL : "+$('#'+warp+' div').height()+" . FONTSIZE : "+parseInt($('#'+warp+' div').css('font-size')));
        $('#' + warp + ' div').css('font-size', (parseInt($('#' + warp + ' div').css('font-size')) - 0.5) + "px");
        active = true;
    }
    return active;
}

function reorder_words(id) {
    var text = document.getElementById(id).innerHTML;
    var lines = parseInt(document.getElementById(id).offsetHeight / parseInt(document.getElementById(id).style.fontSize));
    var fix_text;

    if (lines == 1) return false;

    par = text.length / lines;
    var parte = [];
    for (var i = 0; i < lines; i++) {
        parte.push(text.slice(parseInt(par * i), parseInt(par * (i + 1))));
        if (i > 0)
            parte[i] = parte[i].replace(' ', '<br>');
    }
    fix_text = parte[0];
    for (var i = 1; i < lines; i++) {
        fix_text += parte[i];
    }
    document.getElementById(id).innerHTML = fix_text;

    var new_lines = parseInt(document.getElementById(id).offsetHeight / parseInt(document.getElementById(id).style.fontSize));

    if (new_lines > lines) {
        document.getElementById(id).innerHTML = text;
        return false;
    }

    return true;
}*/
