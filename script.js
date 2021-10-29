
function decimal(){
    const deci=document.getElementById('decimal');
    const binary=document.getElementById('binary');
    const octal=document.getElementById('octal');
    const hexadecimal=document.getElementById('hexadecimal');
    const x=Number(deci.value);
    // console.log(typeof x);
    // let value=parseInt(x,2);
    let value=x.toString(2);
    let ocValue=x.toString(8);
    let hexValue=x.toString(16);
    // console.log(value);
    
    binary.value=value;
    octal.value=ocValue;
    hexadecimal.value=hexValue.toString().toUpperCase();
    // const valu=82;
    // console.log(valu.toString(5));

}

function binary(){
    const deci=document.getElementById('decimal');
    const binary=document.getElementById('binary');
    const octal=document.getElementById('octal');
    const hexadecimal=document.getElementById('hexadecimal');
    let x=binary.value;
    let myArr=x.split('.');   
    let size=myArr[0].length;
    let text=String(myArr[0]);
    let valid=0;
    for(let i=0; i<size; i++){
        if(text[i]==1 || text[i]==0){
            
        }
        else{
            valid=1;
            break;
        }
    }
    if(valid){
        deci.value=-1;
    }
    else{
        deci.value=parseInt(myArr[0], 2); 
    }
   
    if(myArr.length>1){
        let p=myArr[1];
        let sz=String(p).length;
        let check=0;
        for(let j=0; j<sz; j++){
            if(p[j]=='1' || p[j]=='0'){

            }
            else{
                check=1;
                break;
            }
        }
        
        if(check==0){
            let sum=0;
            p=String(p);
            console.log(sz);
            for(let i=sz; i>=1;i--){
                sum=sum+parseFloat(p[i-1])/Math.pow(2,i);
                
            }
            sum=parseFloat(sum);
            deci.value=Number(deci.value)+Number(sum);
        
        }else{
            deci.value=-1;
        }

    }
    let lala=Number(deci.value);
    let ocValue=lala.toString(8);
    let hexValue=lala.toString(16);

    octal.value=ocValue;
    hexadecimal.value=hexValue.toString().toUpperCase();


    

}

function deciToN(){
    const deci=document.getElementById('deci').value;
    const base=document.getElementById('base').value;
    const output=document.getElementById('output');
    if(deci=='' ||base==''){
        myFunction();
    }
    else{
        let out=Number(deci).toString(parseInt(base));
        output.innerText="Answer is:    "+String(out).toUpperCase();
        
    }

}

// tostbar function
function myFunction() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }