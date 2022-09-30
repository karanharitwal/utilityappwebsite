window.addEventListener('load',()=>{
    const lowercase = document.querySelector('#LOWERCASE');
    const uppercase= document.querySelector('#UPPERCASE');
    const reverse= document.querySelector('#REVERSE');
    const charactercount = document.querySelector('#CHARACTER');
    const wordcount = document.querySelector('#WORDCOUNT');
    const userinput= document.querySelector('#string_input');
    let el=document.querySelector('#content')
    lowercase.addEventListener('click',event=>{
        userinput.value=userinput.value.toLowerCase();
        const res= document.querySelector('#result');
        if(res){
            document.body.removeChild(res);
        }

    })
    uppercase.addEventListener('click',event=>{
        userinput.value=userinput.value.toUpperCase();
        const res= document.querySelector('#result');
        if(res){
            document.body.removeChild(res);
        }
        
    })
    reverse.addEventListener('click',event=>{
        userinput.value= userinput.value.split("").reverse().join("");
        const res= document.querySelector('#result');
        if(res){
            el.removeChild(res);
        }
    })
    charactercount.addEventListener('click',event=>{
        if (userinput.value.length!=0){
        const res= document.querySelector('#result');
        let val= userinput.value;
        const arr=val.split("");
        let c=0;
        arr.forEach(element => {
            if(element.toLowerCase() != element.toUpperCase()){
                c++
            }
            
        });
        val= "The number of characters in the string is " + c;
        if(!res){
        const result =document.createElement('h2');
        result.setAttribute('id','result');
        result.innerHTML= val;
        el.appendChild(result);
        }
        else{
            res.innerHTML= val;
        }

        
    }
    })
    wordcount.addEventListener('click',event=>{
        if (userinput.value.length!=0){
        const res= document.querySelector('#result');
        let val= userinput.value.split(" ");
        let res1= val.length;
        res1= "The number of words in the string is:" + res1;
        if(!res){

        const result =document.createElement('h2');
        result.setAttribute('id','result');
        result.innerHTML= res1;
        el.appendChild(result);
        }
        else{
            res.innerHTML=res1;
        }
        }
    })
})