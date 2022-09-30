window.addEventListener('load',()=>{
    const encode=document.querySelector('#encode-url-button');
    const decode= document.querySelector('#decode-url-button');
    const inputvalue= document.querySelector('#input');
    const outputvalue= document.querySelector('#output');
    encode.addEventListener('click',event=>{
        let i= inputvalue.value;
        const encoded= encodeURIComponent(i);
        outputvalue.value= encoded;
        console.log(encoded);



    })
    decode.addEventListener('click',event =>{
        let i= inputvalue.value;
        const decoded= decodeURIComponent(i);
        outputvalue.value= decoded;
    })
})