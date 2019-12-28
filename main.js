var TXT=document.getElementById('para');
function Gras(){
    if ( TXT.style.fontWeight=='normal'){
        TXT.style.fontWeight='bold';
    }
    else {
        TXT.style.fontWeight='normal';
    }
}

function Itali(){
    if ( TXT.style.fontStyle=='normal'){
        TXT.style.fontStyle='italic';
    }
    else {
        TXT.style.fontStyle='normal';
    }
}

function Under(){
    if ( TXT.style.textDecoration=='none'){
        TXT.style.textDecoration='underline';
    }
    else {
        TXT.style.textDecoration='none';
    }
}

function Size(){
    var t=document.getElementById('liste1').value;
    TXT.style.fontSize = t + 'px';
}

function Char(){
    var C=document.getElementById('liste2').value;
    TXT.style.fontFamily = C ;
}