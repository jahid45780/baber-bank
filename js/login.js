 // step 1
document.getElementById('btn-submit').addEventListener('click',function(){
     // step2 set up email
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
     // step3 set up password
     const passwordField = document.getElementById('user-password');
     const password = passwordField.value;
    
     // step4 vrify email and password
     if(email ==='sontan@baap.com'&& password === 'secret'){
         window.location.href = 'bank.html' 
        //console.log('valid user')
     }
     else{
        alert('Kamon Sontan tume Jay Baap Ar Bank Ar Password Vul Daw');
     }

});