let passwordIcon=document.querySelector('.icon-eye-slash');
let passwordInput=document.getElementById('inp-pass');
let formData=document.getElementById('formData');
let email=document.getElementById('inp-email');
let password=document.getElementById('inp-pass');


// show hide password
passwordIcon.addEventListener('click',()=>{
    if(passwordInput.type==='password'){
        passwordInput.type ='text';
        passwordIcon.classList.replace('uil-eye-slash','uil-eye');
        // .replace('uil-eye-slash','uil-eye')
    }else{
        passwordInput.type='password'; 
        passwordIcon.classList.replace('uil-eye','uil-eye-slash');
    }
})

// verifying userdata
let usersData=JSON.parse(localStorage.getItem('users'))||[];
formData.addEventListener('submit',(event)=>{
    event.preventDefault();
// let use=verifyUsers(email.value,password.value,usersData);

    if(email.value==='admin@gmail.com'&&password.value==='admin'){
        alert('Admin login successful');
        window.location.href='dummyAdmin.html';
    }else if(verifyUsers(email.value,password.value,usersData)){
     alert('login successful');
     window.location.href='afterlogin.html';
    }else{
        alert('invalid credintials')
    }
})

 var userName;
function verifyUsers(email,password,arr){
    let flag=false;
    for(let i=0;i<arr.length;i++){
       
        if(email===arr[i].email&&password===arr[i].password){
        (userName=arr[i].name);
          localStorage.setItem('userName',userName);
         flag=true;
          break;
        }
    }
if(flag){
    return true
}else{
    return false;
}
    
}
