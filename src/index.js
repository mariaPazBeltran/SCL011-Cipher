/*Acá va tu código*/
//cambio de pantalla a encode
const btnEncode = document.getElementById("encode1");
btnEncode.addEventListener('click', ()=>{
    document.getElementById("step2").style.display = "block";
    document.getElementById("step1").style.display = "none";
    document.getElementById("step3").style.display = "none";
});


//btn return encode a home
const btnHome1 = document.getElementById("return1");
btnHome1.addEventListener('click', ()=>{
    document.getElementById("step1").style.display = "block";
    document.getElementById("step2").style.display = "none";
    document.getElementById("step3").style.display = "none";
});
// cambio de pagina decode
const btnDecode = document.getElementById("decode1");
btnDecode.addEventListener('click', ()=>{
    document.getElementById("step3").style.display = "block";
    document.getElementById("step1").style.display = "none";
    document.getElementById("step2").style.display = "none";
});


// btn return decode a home
const btnHome2 = document.getElementById("return2");
btnHome2.addEventListener('click', ()=>{
    document.getElementById("step1").style.display = "block";
    document.getElementById("step2").style.display = "none";
    document.getElementById("step3").style.display = "none";
});




// encode cipher
//const para boton
//Funcion
//input variable value.mayusculas()
//numero variable parsear value
// for
//var assci input.charcodeat(i)
//var offset fotmula(codeAscci-65+numberEncode)%26+65;
//var result string.fromcharcode(offset)
//inner
const btnCipherEncode = document.getElementById ("cipherEncode")

btnCipherEncode.addEventListener('click',()=>{
let textCipher= document.getElementById("inputCipher").value;
let numberCipher=parseInt(document.getElementById("offsetCipher").value);

    document.getElementById("outputCipher").innerHTML = cipher.encode(textCipher,numberCipher);
});

// decode
const btnCipherDecode = document.getElementById ("cipherDecode")
btnCipherDecode.addEventListener('click',()=>{
    let textCipher= document.getElementById("inputCipher").value;
    let numberCipher=parseInt(document.getElementById("offsetCipher").value);
    
    document.getElementById("outputCipher").innerHTML = cipher.decode(textCipher,numberCipher);
});