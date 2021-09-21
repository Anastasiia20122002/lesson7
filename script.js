const input=document.getElementById("input");
const button=document.getElementById("button");
input.addEventListener("input", (e)=>{{}
  const value=e.currentTarget.value;
  if(value===""){
    button.disabled=true;
  }
  else{
    button.disabled=false;
    button.style.background='purple';
  }
})
button.addEventListener("click", async ()=>{
  button.innerHTML="Loading...";
  let name=document.getElementById("divider2")
  name.insertAdjacentHTML('afterbegin','<hr>');
  name.insertAdjacentHTML('beforeend', '<div id="divider3"><h3>name: </h3></div>')
  name.insertAdjacentHTML('beforeend', '<div id="divider4"><h3>email: </h3></div>')
  name.insertAdjacentHTML('beforeend', '<div id="divider5"><h3>phone: </h3></div>')
  const res=await fetch('https://jsonplaceholder.typicode.com/users/1');
  const users=await res.json(); 
  console.log(users) 
  name.insertAdjacentHTML('beforeend', `<div id="divider6"><h3>${users.name}</h3></div>`);
  name.insertAdjacentHTML('beforeend', `<div id="divider7"><h3>${users.email}</h3></div>`);
  name.insertAdjacentHTML('beforeend', `<div id="divider8"><h3>${users.phone}</h3></div>`);   
  button.disabled=false;
  button.innerHTML="GET";
});