var htmlEditor = CodeMirror.fromTextArea(document.getElementById("code"), {
    lineNumbers: true,
    tabSize: 2,
    theme: 'monokai'
    });
    let encodedecode = document.querySelector('#encode-decode')
window.addEventListener('load',()=>{
    let decode= document.querySelector('#code');
    let decodebutton= document.querySelector('#decode_button');
    var resultEditor
    let encodebutton= document.querySelector('#encode_button');
    decodebutton.addEventListener('click', event =>{
        let decodevalue= htmlEditor.getValue();
        let resultvalue= atob(decodevalue);
        let ispresent= document.querySelector('#result');
        if(!ispresent){    
        const container= document.createElement('div');
        container.setAttribute('id','container');
        const result= document.createElement('textarea');
        result.setAttribute('id','result');
        encodedecode.appendChild(container);
        container.appendChild(result);
        container.style.marginTop= "2vw";
         resultEditor = CodeMirror.fromTextArea(document.getElementById("result"), {
            lineNumbers: true,
            tabSize: 2,
            theme: 'monokai'
            });
        }
            resultvalue= "decoded string is:" + resultvalue;
            resultEditor.getDoc().setValue(resultvalue);
       
    })
    encodebutton.addEventListener('click', event =>{
        let encodevalue= htmlEditor.getValue();
        let resultvalue= btoa(encodevalue);
        let ispresent= document.querySelector('#result');
        if(!ispresent){    
        const container= document.createElement('div');
        container.setAttribute('id','container');
        const result= document.createElement('textarea');
        result.setAttribute('id','result');
        encodedecode.appendChild(container);
        container.appendChild(result);
        container.style.marginTop= "2vw";
         resultEditor = CodeMirror.fromTextArea(document.getElementById("result"), {
            lineNumbers: true,
            tabSize: 2,
            theme: 'monokai'
            });
        }
            resultvalue= "encoded string is:" + resultvalue;
            resultEditor.getDoc().setValue(resultvalue);
       
    })


})

