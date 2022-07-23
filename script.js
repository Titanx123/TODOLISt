// window.onload = () =>{

        //     getdata();
        // };
        // var array = [];}

let array = [];
function Showall (){
        
        let h1 = document.querySelector("h1");
        h1.innerText = "Todo-List-All";
        let para = document.querySelectorAll("p");
        for(let i = 0; i < para.length;i++){
                let ptag = para[i];
                document.body.removeChild(ptag);
        }
        
        for(let i = 0; i < array.length;i++){
                let obj = array[i];
                let p = document.createElement("p");
                if(obj.completed){
                        p.style.color = "green";
                }
                else{
                        p.style.color = "red";
                }
                p.innerText = obj.title;
                document.body.appendChild(p);
        }
}

function ShowCompleted(){
        // alert("completed");
        let h1 = document.querySelector("h1").innerText = "ToDo-List-Completed";
        let para = document.querySelectorAll("p");
        for(let i = 0; i < para.length;i++){
                let ptag = para[i];
                document.body.removeChild(ptag);
        }
        for(let i = 0; i < array.length;i++){
                let obj = array[i];
                let p = document.createElement("p");
                if(obj.completed){
                        p.style.color = "green";
                        p.innerText = obj.title;
                        document.body.appendChild(p);
                }
        }
}
function ShowPending(){
        // alert("pending");
        let h1 = document.querySelector("h1").innerHTML = "ToDo-List-Pending";
        let para = document.querySelectorAll("p");
        for(let i = 0; i < para.length;i++){
                let ptag = para[i];
                document.body.removeChild(ptag);
        }
        for(let i = 0;i < array.length;i++){
                let obj = array[i];
                let p = document.createElement("p");
                if(obj.completed == false){
                        p.style.color = "red";
                        p.innerText = obj.title;
                        document.body.appendChild(p);
                }
        }
}

// window.onload = async () =>{
//         var response = await fetch("https://jsonplaceholder.typicode.com/todos");
//         array = await response.json();
//         console.log(array);
//         // Showall();
// }
        
async function getdata(){
        let response = await fetch("https://jsonplaceholder.typicode.com/todos");
        array = await response.json();
        console.log(array);
}
getdata();