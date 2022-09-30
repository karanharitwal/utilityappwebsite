const algo = 'md5'; 
window.addEventListener('load',()=>{
    const generate= document.querySelector('#generate');
    const text= document.querySelector('#input');
    const container= document.querySelector('#table-space');
    generate.addEventListener('click',event =>{
        const hash =  CryptoJS.MD5(text.value);
        const sha1hash= CryptoJS.SHA1(text.value);
        let row1_data1, row1_data2,row2_data1,row2_data2,row3_data1,row3_data2;
        if (!document.querySelector('#result_table')){
        const result_table= document.createElement('table');
        result_table.setAttribute('id','result_table');
        result_table.style.width= "80vw";
        result_table.style.border= "1px solid";
        container.appendChild(result_table);
        let tbody=document.createElement('tbody');
        result_table.appendChild(tbody);
        let row1= document.createElement('tr');
        let row2= document.createElement('tr');
        let row3= document.createElement('tr');
        tbody.appendChild(row1);
        tbody.appendChild(row2);
        tbody.appendChild(row3);
        row1_data1= document.createElement('td');
        row1_data1.setAttribute('id','row1_data1');
        row1_data2= document.createElement('td');
        row1_data2.setAttribute('id','row1_data2');
         row2_data1= document.createElement('td');
        row2_data1.setAttribute('id','row2_data1');
         row2_data2= document.createElement('td');
        row2_data2.setAttribute('id','row2_data2');
         row3_data1= document.createElement('td');
        row3_data1.setAttribute('id','row3_data1');
         row3_data2= document.createElement('td');
        row3_data2.setAttribute('id','row3_data2');
        tbody.appendChild(row1);
        tbody.appendChild(row2);
        tbody.appendChild(row3);
        row1.appendChild(row1_data1);
        row1.appendChild(row1_data2);
        row2.appendChild(row2_data1);
        row2.appendChild(row2_data2);
        row3.appendChild(row3_data1);
        row3.appendChild(row3_data2);
        }
        else{
             result_table = document.querySelector('#result_table');
            row1_data1 = result_table.querySelector('#row1_data1');
             row1_data2 = result_table.querySelector('#row1_data2');
             row2_data1 = result_table.querySelector('#row2_data1');
             row2_data2 = result_table.querySelector('#row2_data2');
             row3_data1 = result_table.querySelector('#row3_data1');
             row3_data2 = result_table.querySelector('#row3_data2');
            }


        row1_data1.innerHTML="Your String";
        row1_data2.innerHTML=text.value;
        row2_data1.innerHTML="MD5 Hash";
        row2_data2.innerHTML=hash;
        row3_data1.innerHTML="SHA1 hash";
        row3_data2.innerHTML=sha1hash;

       })
})