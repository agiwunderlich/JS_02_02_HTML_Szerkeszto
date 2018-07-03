// elemek összegyűjtése

let buttonStrong = document.getElementById('buttonStrong');
let buttonPink = document.getElementById('buttonPink');
let buttonItalic = document.getElementById('buttonItalic');

let input = document.getElementById('input');
let output = document.getElementById('output');

//init
RenderOutput();


// eseményekre feliratkozás

buttonStrong.addEventListener('click', ClickOnStrong);
buttonPink.addEventListener('click', ClickOnPink);
buttonItalic.addEventListener('click', ClickOnItalic);

input.addEventListener('keyup', RenderOutput);

// függvények

function ClickOnStrong(){

    let text = input.value;
    let startTag = '<strong>';
    let endTag = '</strong>'

    input.value = GetWrappepSelection(
        text,
        input.selectionStart,
        input.selectionEnd,
        startTag,
        endTag
    );

    RenderOutput();
}

function ClickOnPink(){
    
    let text = input.value;
    let startTag = '<span style="color:pink">';
    let endTag = '</span>';

    input.value = GetWrappepSelection(
        text,
        input.selectionStart,
        input.selectionEnd,
        startTag,
        endTag
    );

    RenderOutput(); 
}

function ClickOnItalic(){

    let text = input.value;
    let startTag = '<span style="font-style:italic">';
    let endTag = '</span>';

    input.value = GetWrappepSelection(
        text,
        input.selectionStart,
        input.selectionEnd,
        startTag,
        endTag
    );

    RenderOutput();
}

function GetWrappepSelection(text, start, end, before, after){
    let wrappedText = text;

    // beszúrás hátra
    wrappedText = [wrappedText.slice(0,end),after,wrappedText.slice(end)].join('');

    // beszúrás előre
    wrappedText = [wrappedText.slice(0,start),before,wrappedText.slice(start)].join('');

    // érték frissítése
    return wrappedText;

}

function RenderOutput(){
    let html = input.value;
    output.innerHTML = html;
}

