document.getElementById('button-login')
   .addEventListener('click', function(event){

    event.preventDefault();

     const phoneNumber = document.getElementById('phone-number').value;
     const pinNumber = document.getElementById('pin-=number').value;
      console.log(phoneNumber,pinNumber);
      if(phoneNumber==='5' && pinNumber === '1234'){
         console.log('you are logged in ');
         window.location.href = '/index2.html';

      }
      else{
         alert('Wrong phone number or pin');
      }
   })