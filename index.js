var display=document.querySelector("#screen");
var buttons=document.getElementsByTagName('button');
var screen="";
for(btn in buttons){
    buttons[btn].addEventListener('click' ,function cal(event){
       var value=this.innerText;
       if(value=="="){
        display.value=eval(screen);}
       else if(value=="AC"){
        screen="";  
        display.value=screen;
       }
       else if(value=="+/-"){
            if((screen)>0){
                screen="-"+screen;
                display.value=screen;
            }
            else{
                screen=screen.substr(1);
                display.value=screen;
            }
       }
       else{
           screen+=value;
           display.value=screen;
       }
       
    })
}