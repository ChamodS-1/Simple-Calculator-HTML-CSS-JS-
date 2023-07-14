const allButtons = document.querySelectorAll(".button");
const output = document.querySelector(".output");
const history = document.querySelector("button");
const ul = document.querySelector(".history");

let final="";

let array = [];

allButtons.forEach(button=>{
    button.addEventListener('click',e=>{

        if((e.target.value)=="="){

            if(output.value ==""){
                output.value="Enter values Idiot"
            }
            else{

            const data = {
                    value:"",
                    result:""
                }

            data.value=final;
            final=eval(final);

            output.value=final;
            data.result=final;
            console.log(final);

            array.push(data);
            }
            
        }
        else if((e.target.value)=="AC"){
            final="";
            output.value=final;

        }

        else{
            final+=e.target.value;
            output.value=final;
        }
       
    })
})

history.addEventListener('click',()=>{

    ul.textContent="";
    let number=1;

    if(array.length==0){
        alert("No history");
    }
    else{
        for(const key of array){
            const li=document.createElement('li');
            li.innerHTML= `${number}. ${key.value} = ${key.result}`
            ul.append(li);
            number++;
    
        }
    }
   
})

