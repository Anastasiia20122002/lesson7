const input=document.getElementById("input");
const button=document.getElementById("button");
input.addEventListener("input", (e)=>{{}
  const value=e.currentTarget.value;
  if(value===""){
    button.disabled=true;
  }
  else{
    button.disabled=false;
    button.style.background='#9B59B6';
  }
})
button.addEventListener("click", async ()=>{
  button.innerHTML="Loading...";
  document.getElementById("info").style.visibility="visible";
  const res=await fetch('https://jsonplaceholder.typicode.com/users');
  const users=await res.json(); 
  document.getElementById("info1").style.visibility="visible";
  document.getElementById("name-info").innerHTML=`${users[input.value-1].name}`;
  document.getElementById("email-info").innerHTML=`${users[input.value-1].email}`;
  document.getElementById("phone-info").innerHTML=`${users[input.value-1].phone}`
  document.getElementById("button1").style.visibility="visible";
  button.disabled=false;
  button.innerHTML="GET";
});