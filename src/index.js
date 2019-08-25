/*Acá va tu código*/
// cambio de pagina info
const btnDecode = document.getElementById("decode1");
btnDecode.addEventListener('click', ()=>{
    document.getElementById("step3").style.display = "block";
    document.getElementById("step1").style.display = "none";
    document.getElementById("step2").style.display = "none";
    document.getElementById("step4").style.display = "none";
});

// btn return info a home
const btnHome2 = document.getElementById("return2");
btnHome2.addEventListener('click', ()=>{
    document.getElementById("step1").style.display = "block";
    document.getElementById("step2").style.display = "none";
    document.getElementById("step3").style.display = "none";
    document.getElementById("step4").style.display = "none";
});

//cambio de pantalla a cipher
const btnEncode = document.getElementById("encode1");
btnEncode.addEventListener('click', ()=>{
    document.getElementById("step2").style.display = "block";
    document.getElementById("step1").style.display = "none";
    document.getElementById("step3").style.display = "none";
    document.getElementById("step4").style.display = "none";
});

//btn return cipher a home
const btnHome1 = document.getElementById("return1");
btnHome1.addEventListener('click', ()=>{
    document.getElementById("step1").style.display = "block";
    document.getElementById("step2").style.display = "none";
    document.getElementById("step3").style.display = "none";
    document.getElementById("step4").style.display = "none";
});
// cipher a links
const btnLinks = document.getElementById("links");
btnLinks.addEventListener('click', ()=>{
    document.getElementById("step4").style.display = "block";
    document.getElementById("step2").style.display = "none";
    document.getElementById("step3").style.display = "none";
    document.getElementById("step1").style.display = "none";
});

// btn return links a home
const btnHome3 = document.getElementById("return3");
btnHome3.addEventListener('click', ()=>{
    document.getElementById("step1").style.display = "block";
    document.getElementById("step2").style.display = "none";
    document.getElementById("step3").style.display = "none";
    document.getElementById("step4").style.display = "none";
});
// btn back links a cipher
const btnBack = document.getElementById("back");
btnBack.addEventListener('click', ()=>{
    document.getElementById("step2").style.display = "block";
    document.getElementById("step1").style.display = "none";
    document.getElementById("step3").style.display = "none";
    document.getElementById("step4").style.display = "none";
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