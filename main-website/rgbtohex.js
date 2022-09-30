
window.addEventListener('load', ()=>{
    function ColorToHex(color) {
        var hexadecimal = parseInt(color,10).toString(16);
        return hexadecimal.length === 1 ? "0" + hexadecimal : hexadecimal;
      }
    
    const redvalue = document.querySelector('#Red');
    const bluevalue = document.querySelector('#Blue');
    const greenvalue = document.querySelector('#Green');
    const Hexvalue = document.querySelector('#Hex');
    const rgbtohexbutton= document.querySelector('#rgbtohex');
    const hextorgbbutton= document.querySelector('#hextorgb');
    const box= document.querySelector('#box');
    const parentNode= document.querySelector('#info');
    let i=0;
    rgbtohexbutton.addEventListener('click',event=>{
        const hex= "#" + ColorToHex(redvalue.value)+ColorToHex(greenvalue.value)+ColorToHex(bluevalue.value);
        Hexvalue.value= hex;
        if(i==0){
        const para= document.createElement('h2');
        para.setAttribute('id','para');
        para.innerHTML="The color looks as follows:"
        parentNode.insertBefore(para,box);
        para.style.textAlign="center"
        i++;
        }
        box.style.backgroundColor= hex;
})
   hextorgbbutton.addEventListener('click',event=>{
    var hex= Hexvalue.value;
    redvalue.value = parseInt(hex[1]+hex[2],16);
    greenvalue.value = parseInt(hex[3]+hex[4],16);
    bluevalue.value = parseInt(hex[5]+hex[6],16);
    if(i==0){
      const para= document.createElement('h2');
      para.setAttribute('id','para');
      para.innerHTML="The color looks as follows:"
      parentNode.insertBefore(para,box);
      para.style.textAlign="center";
      i++;
      }

    box.style.backgroundColor= hex;
   
   })


})