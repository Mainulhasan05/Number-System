
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

function decimal2(){
    const deci=document.getElementById('twoscomplement');
    const length=document.getElementById('length');
    let len=Number(length.value);
    const x=Number(deci.value);
    let value=x.toString(2);
    console.log(len)
    console.log(value.length);
    let store=value;
    let changeInZero=false;
    if(value.length<len){
        let loop=len-value.length-1;
        let z='';
        for (let index = 0; index <loop ; index++) {
            z+='0';
            
        }
        value=z+value;
        changeInZero=true;
        console.log("after adding length  "+value);
    }
    if(Number(value)>=0){
        if(len!=0){
            if(value[0]=='-'){
                value=Number(value)*-1;
                value=String(value);
                let strlen=value.length;
                len=len-strlen;
                let zeros=''
                for (let index = 0; index < len; index++) {
                    zeros=zeros+'0';
                    
                }
                value=zeros+value;
            }
    
        }
        let signed=value;
        if(value[0]=='-'){
            // signed.shift();
            // signed=signed.split();
            // signed.unshift('1');
            signed=signed.replace('-','1');
            // signed='1'+signed;
        }else{
            // signed=signed.split();
            signed='0'+signed;
            // signed.unshift('0');
        }
        let ones='';
        for (let index = 0; index < signed.length; index++) {
            if(signed[index]=='0'){
                ones+='1';
            }
            else if(signed[index]=='1'){
                ones+='0';
            }else{
                ones+=signed[index];
            }
            
        }
        const makeDeci=changeBinary(ones)+1;
        let twos=makeDeci.toString(2);
        
        const arr=document.querySelectorAll('.right');
        if(changeInZero){
            arr[0].innerText=`Binary number: ${store}`;
        }else{
            arr[0].innerText=`Binary number: ${value}`;
        }
        
        arr[1].innerText=`Signed number: ${signed}`;
        arr[2].innerText=`1's complement: ${ones}`;
        arr[4].innerText=`2's complement: ${twos}`;
    }
    
}

function changeBinary(x){//receive string


    let myArr=x.split('.');   
    let size=myArr[0].length;
    let text=String(myArr[0]);

        let ans=parseInt(myArr[0], 2); 

   
    if(myArr.length>1){
        let p=myArr[1];
        let sz=String(p).length;

            let sum=0;
            p=String(p);
            for(let i=sz; i>=1;i--){
                sum=sum+parseFloat(p[i-1])/Math.pow(2,i); 
            }
            sum=parseFloat(sum);
            return Number(ans)+Number(sum);
    }
    return ans;
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
function reset(){
    const deci=document.getElementById('deci');
    const base=document.getElementById('base');
    const output=document.getElementById('output');
    deci.value='';
    base.value='';
    output.innerText='Output will be shown here...'
}
// tostbar function
function myFunction() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }