let btns= document.querySelectorAll('.btns');
let p1=true;
let h1=document.querySelector('h1');
let arr=[
          [0,1,2],
          [0,3,6],
          [0,4,8],
          [1,4,7],
          [2,5,8],
          [3,4,5],
          [6,7,8],  
          [2,4,6],    
        ]
        

function checkwinner(){
          for(let arra of arr){
            let btn1=btns[arra[0]].innerText;
            let btn2=btns[arra[1]].innerText;
            let btn3=btns[arra[2]].innerText;
               if(btn1!=''&& btn2!='' && btn3!=''){
                if((btn1===btn2)&&(btn2===btn3)) return true;
                
               }
            }
        }
function handlebuttonclick(){
  if(p1){
    this.style.color='red';
    this.innerText='O';
    p1=false;
}else{
  this.style.color='#000'
this.innerText='X';
p1=true;
}
this.disabled='true'
if (checkwinner()) 
{ 
  for (const i of btns) {
 i.disabled=true;
}
if(p1){
 
  h1.innerHTML="P2 has won the game .<a onclick='restart()'> Want to Restrat?</a>";
  
}
  else{
    h1.innerHTML="P1 has won the game. <a onclick='restart()'> Want to Restrat?</a> ";
    
}
}
}

function start(){
      btns.forEach((btn)=>{
        btn.addEventListener('click',handlebuttonclick);
    });
  }
function restart(){
    p1=true;   
    h1.innerHTML="Welcome to the tic-tac-Toe Game ";
  for (const i of btns) {
    i.innerText="";
    i.disabled= false;
    i.removeEventListener('click',handlebuttonclick);
    
  }

start();
}
start();

