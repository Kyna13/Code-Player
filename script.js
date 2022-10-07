document.getElementById('HTML').style.backgroundColor='lightcoral';
document.getElementById('CSS').style.backgroundColor='lightcoral';
document.getElementById('JS').style.backgroundColor='lightcoral';
document.getElementById('Result').style.backgroundColor='lightcoral';

var elementsOnScreen = 1;
console.log(elementsOnScreen);

function buttonFunction(button, input, otherInput1, otherInput2, otherInput3){

    console.log(document.getElementById(button).style.backgroundColor)

    if (document.getElementById(button).style.backgroundColor=="lightcoral") {

        document.getElementById(input).style.width= 98/elementsOnScreen+"vw";
        document.getElementById(input).style.display= "inline-block";
        document.getElementById(otherInput1).style.width= 98/elementsOnScreen+"vw";
        document.getElementById(otherInput2).style.width= 98/elementsOnScreen+"vw";
        document.getElementById(otherInput3).style.width= 98/elementsOnScreen+"vw";
        elementsOnScreen=elementsOnScreen+1;
        console.log(elementsOnScreen);
        document.getElementById(button).style.backgroundColor='chocolate';

    } else {

        document.getElementById(input).style.display= "none";
        elementsOnScreen=elementsOnScreen-1;
        console.log(elementsOnScreen);
        document.getElementById(otherInput1).style.width= 98/(elementsOnScreen-1)+"vw";
        document.getElementById(otherInput2).style.width= 98/(elementsOnScreen-1)+"vw";
        document.getElementById(otherInput3).style.width= 98/(elementsOnScreen-1)+"vw";
        document.getElementById(button).style.backgroundColor='lightcoral';

    }

}

document.getElementById('HTML').onclick=function(){
    buttonFunction('HTML', 'HTMLinput', 'CSSinput', 'JSinput', 'ResultInput');
}

document.getElementById('CSS').onclick=function(){
    buttonFunction('CSS', 'CSSinput', 'HTMLinput', 'JSinput', 'ResultInput');
}

document.getElementById('JS').onclick=function(){
    buttonFunction('JS', 'JSinput', 'CSSinput', 'HTMLinput', 'ResultInput');
}

document.getElementById('Result').onclick=function(){
    buttonFunction('Result', 'ResultInput', 'HTMLinput', 'JSinput', 'CSSinput');
}

$('#run').click(function(){

    $("#ResultInput").contents().find('html').html('<style>'+$('#CSSinput').val()+'</style>'+$('#HTMLinput').val());

    document.getElementById('ResultInput').contentWindow.Function($('#JSinput').val())();
    Function($('#JSinput').val())();

});
