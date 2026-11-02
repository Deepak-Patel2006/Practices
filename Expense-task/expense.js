const input = document.getElementById('amount');
const name = document.getElementById('name');
const add = document.getElementById('add');
let total = document.getElementById('total');
const list = document.getElementById('list');

let current = 0;

let calculate = (num, text)=>{

   current += num ;
   total.innerText = current ;

let innerlist = document.createElement('li');
innerlist.innerText =`${text} :- ${num}`;

let del = document.createElement('button');
  del.innerText = 'X';

del.addEventListener('click',()=>{
   innerlist.remove();
   current = current - num;
   total.innerText = current;
});

innerlist.appendChild(del);
list.appendChild(innerlist);

};


add.addEventListener('click', ()=>{

if(input.value === ""|| input.value <=0){
    alert('Please enter an amount !');
    return ;

}else{
  if(name.value === ""){
    alert('Please enter the title !');
    return;
  }else{
    let text = name.value.toUpperCase();
    let num = Number(input.value);
    calculate(num, text);
  }
    
}
  input.value = "";
  name.value = "";
});
