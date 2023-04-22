const toggleInput = document.querySelector('.toggle__input');
const result = document.querySelector('.result');


toggleInput.addEventListener('click',(e)=>{
  if(e.target.checked){
    result.innerHTML = 'On';
  }else{
    result.innerHTML = 'Off';
  }
})