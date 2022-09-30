window.addEventListener('load',()=>{
    const generate= document.querySelector('#generate');
    const text= document.querySelector('#input');
    const container= document.querySelector('#md5-input');
    generate.addEventListener('click',event =>{
        const sha256hash =  CryptoJS.SHA256(text.value);
        const sha512= CryptoJS.SHA512(text.value);
        const sha512hash =sha512.toString(CryptoJS.enc.Hex);
        const result_table= document.createElement('table');
        result_table.setAttribute('id','result_table');
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
        let row1_data1= document.createElement('td');
        let row1_data2= document.createElement('td');
        let row2_data1= document.createElement('td');
        let row2_data2= document.createElement('td');
        let row3_data1= document.createElement('td');
        let row3_data2= document.createElement('td');
        tbody.appendChild(row1);
        tbody.appendChild(row2);
        tbody.appendChild(row3);
        row1.appendChild(row1_data1);
        row1.appendChild(row1_data2);
        row2.appendChild(row2_data1);
        row2.appendChild(row2_data2);
        row3.appendChild(row3_data1);
        row3.appendChild(row3_data2);
        row1_data1.innerHTML="Your String";
        row1_data2.innerHTML=text.value;
        row2_data1.innerHTML="SHA-512 Hash";
        row2_data2.innerHTML=sha512hash
        row3_data1.innerHTML="SHA-256 hash";
        row3_data2.innerHTML=sha256hash;

       })
})