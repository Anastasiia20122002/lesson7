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
  document.getElementById("line").style.visibility="visible";
  document.getElementById("divider3").innerHTML=`<h3>name:</h3>`;
  document.getElementById("divider4").innerHTML=`<h3>email:</h3>`;
  document.getElementById("divider5").innerHTML=`<h3>phone:</h3>`;
  const res=await fetch('https://jsonplaceholder.typicode.com/users');
  const users=await res.json(); 
  document.getElementById("divider6").innerHTML=`<h3>${users[input.value-1].name}</h3>`;
  document.getElementById("divider7").innerHTML=`<h3>${users[input.value-1].email}</h3>`;
  document.getElementById("divider8").innerHTML=`<h3>${users[input.value-1].phone}</h3>`
  button.disabled=false;
  button.innerHTML="GET";
});