function frombinary(value){
    const hexa = parseInt(value,2).toString(16).toUpperCase();
    const octal= parseInt(value,2).toString(8);
    const decimal= parseInt(value,2).toString(10);
    const ans={hexa,decimal,octal};
    return ans;
}
function fromhexa(value){
    const binary= parseInt(value, 16).toString(2);
    const decimal=parseInt(value,16).toString(10);
    const octal=parseInt(value,16).toString(8);
    const ans= {binary,decimal,octal}
    return ans;
     
}
function fromoctal(value){
    const binary=parseInt(value,8).toString(2);
    const hexa=parseInt(value,8).toString(16).toUpperCase();
    const decimal=parseInt(value,8).toString(10);
    const ans= {binary,hexa,decimal}
    return ans;
}
function fromdecimal(value){
    const binary= parseInt(value, 10).toString(2);
    const hexa=  parseInt(value,10).toString(16).toUpperCase();
    const octal= parseInt(value,10).toString(8);
    const ans= {binary,hexa,octal}
    return ans;

}



window.addEventListener('load', ()=>{
    const binary= document.querySelector('#Binary');
    const hexa= document.querySelector('#Hexadecimal');
    const decimal= document.querySelector('#Decimal');
    const octal= document.querySelector('#Octal');
    const generate= document.querySelector('#generate');
    binary.addEventListener('input',event=>{
        hexa.value='';
        decimal.value='';
        octal.value='';
    })
    hexa.addEventListener('input',event=>{
        binary.value='';
        decimal.value='';
        octal.value='';
    })
    octal.addEventListener('input',event=>{
        hexa.value='';
        decimal.value='';
        binary.value='';
    })
    decimal.addEventListener('input',event=>{
        hexa.value='';
        binary.value='';
        octal.value='';
    })
    generate.addEventListener('click',event=>{
        if(binary.value.length!=0){
            let value=binary.value;
            hexa.value = parseInt(value,2).toString(16).toUpperCase();
            octal.value= parseInt(value,2).toString(8);
            decimal.value= parseInt(value,2).toString(10);

        }
        if (hexa.value.length!=0){
            let value= hexa.value;
            binary.value= parseInt(value, 16).toString(2);
            decimal.value=parseInt(value,16).toString(10);
            octal.value=parseInt(value,16).toString(8);
        }
        if(octal.value.length!=0){
            let value= octal.value;
             binary.value=parseInt(value,8).toString(2);
     hexa.value=parseInt(value,8).toString(16).toUpperCase();
     decimal.value=parseInt(value,8).toString(10);
        }
        if(decimal.value.length!=0){
            let value= decimal.value;
             binary.value= parseInt(value, 10).toString(2);
             hexa.value=  parseInt(value,10).toString(16).toUpperCase();
             octal.value= parseInt(value,10).toString(8);
        }
        let el= document.querySelector('#Number-converter-content');
        const result_table= document.createElement('table');
        result_table.setAttribute('id','result_table');
        result_table.style.border= "1px solid";
        el.appendChild(result_table);
        let tbody=document.createElement('tbody');
        result_table.appendChild(tbody);
        let row1= document.createElement('tr');
        let row2= document.createElement('tr');
        let row3= document.createElement('tr');
        let row4= document.createElement('tr');   
        let row1_data1= document.createElement('td');
        let row1_data2= document.createElement('td');
        let row2_data1= document.createElement('td');
        let row2_data2= document.createElement('td');
        let row3_data1= document.createElement('td');
        let row3_data2= document.createElement('td');
        let row4_data1= document.createElement('td');
        let row4_data2= document.createElement('td');
        tbody.appendChild(row1);
        tbody.appendChild(row2);
        tbody.appendChild(row3);
        tbody.appendChild(row4);
        row1.appendChild(row1_data1);
        row1.appendChild(row1_data2);
        row2.appendChild(row2_data1);
        row2.appendChild(row2_data2);
        row3.appendChild(row3_data1);
        row3.appendChild(row3_data2);
        row4.appendChild(row4_data1);
        row4.appendChild(row4_data2);
        row1_data1.innerHTML="Binary Value";
        row1_data2.innerHTML=binary.value;
        row2_data1.innerHTML="Hexadecimal Value";
        row2_data2.innerHTML=hexa.value;
        row3_data1.innerHTML="Octal Value";
        row3_data2.innerHTML=octal.value
        row4_data1.innerHTML="Decimal Value";
        row4_data2.innerHTML= decimal.value;

    })
})