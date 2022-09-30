window.addEventListener('load',()=>{
    const puttime= document.querySelector('.epoch-value');
    window.setInterval(()=>{
        var today= new Date().getTime();
        puttime.innerHTML= today;
    },1000);
    var today= new Date().getTime();
    puttime.innerHTML= today;

    const epoch= document.querySelector(".epoch");
    const time= document.querySelector(".time");
    const epochinput= document.querySelector("#unix-timestamp");
    const year= document.querySelector("#year");
    const month=document.querySelector("#month");
    const  date= document.querySelector('#day');
    const hour= document.querySelector('#hour');
    const minute= document.querySelector('#minutes');
    const second= document.querySelector('#seconds');
    const normaltime= document.querySelector('.normaltime');
    epoch.addEventListener('click',event=>{
        if(epochinput.value.length!=0){
        const mydate=new Date(epochinput.value*1000);
        year.value= mydate.getFullYear();
        month.value= mydate.getMonth();
        date.value= mydate.getDate();
        hour.value= mydate.getHours();
        minute.value= mydate.getMinutes();
        second.value= mydate.getSeconds();
        const container= document.querySelector('#info');
        if(!container){
        const info= document.createElement('h2');
        info.setAttribute('id','info');
        let user_output=mydate;
        info.innerHTML= user_output;
        const epoch_container=document.querySelector('#epoch-container');
        epoch_container.appendChild(info);
        }
        else{
            container.innerHTML= mydate;
        }
        
        






        }
    
    })
    normaltime.addEventListener('click',event=>{
        var myDate=new Date(year.value,month.value,date.value,hour.value,minute.value,second.value);
        epochinput.value= myDate.getTime()/1000.0;
        const container= document.querySelector('#date_time_converter');
        if(!container){
        
        const date_time_converter= document.createElement('h2');
        date_time_converter.setAttribute('id','date_time_converter');
        let user_output="Timestamp value is :" + epochinput.value;

        date_time_converter.innerHTML= user_output;

        document.body.appendChild(date_time_converter);
        }
        else{
            container.innerHTML= "Timestamp value is :" + epochinput.value;
        }
        

    })
})