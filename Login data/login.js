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
let use=verifyUsers(email.value,password.value,usersData);

    if(email.value==='admin@gmail.com'&&password.value==='admin'){
        alert('Admin login sucssesful');
        window.location.assign('dummyAdmin.html')
    }else if(verifyUsers(email.value,password.value,usersData)){
     alert('login succssesful')
    }else{
        alert('invalid credintials')
        return;
    }
})

function verifyUsers(name,password,arr){

    for(let i=0;i<arr.length;i++){
        if(name===arr[i].name&&password===arr[i].password){
          return true;
        }
    }

    return false;
}