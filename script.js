
function decimal(){
    const deci=document.getElementById('decimal');
    const binary=document.getElementById('binary');
    const octal=document.getElementById('octal');
    const hexadecimal=document.getElementById('hexadecimal');
    const x=Number(deci.value);
    console.log(typeof x);
    // let value=parseInt(x,2);
    let value=x.toString(2);
    let ocValue=x.toString(8);
    let hexValue=x.toString(16);
    console.log(value);
    
    binary.value=value;
    octal.value=ocValue;
    hexadecimal.value=hexValue.toString().toUpperCase();

}