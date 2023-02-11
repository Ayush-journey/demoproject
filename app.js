const register = document.querySelector('.login_btn');
const register_body = document.querySelector('.register-body');
const register_form =document.querySelector('.register-container');
const aboutus = document.querySelector('.aboutus');
console.log(aboutus);
register.addEventListener('click',()=>{
    register_body.classList.remove('hidden');
    register_form.classList.remove('hidden');    
});


