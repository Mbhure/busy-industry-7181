let passwordIcon=document.querySelectorAll('.icon-eye-slash');
let passwordText=document.querySelectorAll('.inp-pass');
let formData=document.getElementById('formData');


// password visibility program

passwordIcon.forEach(icon=>
icon.addEventListener('click',()=>{
    passwordText.forEach(passwordInput=>{
    if(passwordInput.type==='password'){
        passwordInput.type ='text';
        icon.classList.replace('uil-eye-slash','uil-eye');
        // .replace('uil-eye-slash','uil-eye')
    }else{
        passwordInput.type='password'; 
        icon.classList.replace('uil-eye','uil-eye-slash');
    }
})
})
)
   

// capturing user data

let usersData=JSON.parse(localStorage.getItem('users'))||[];

formData.addEventListener('submit',(event)=>{
    event.preventDefault();
    let user={
        name:`${formData.firstName.value} ${formData.lastName.value}`,
        email:formData.email.value,
        password:formData.pass2.value
    };
    usersData.push(user);
    localStorage.setItem('users',JSON.stringify(usersData));
})