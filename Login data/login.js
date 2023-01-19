let passwordIcon=document.querySelector('.icon-eye-slash');
let passwordInput=document.querySelector('#inp-pass');
let formData=document.getElementById('formData');

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
for(let user of usersData){
    if(user.name===inputName|| user.password===inputPassword){
     
    }
}
})