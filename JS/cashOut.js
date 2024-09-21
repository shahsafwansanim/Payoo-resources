document.getElementById('btn-cash-out')
.addEventListener('click', function(event){

    event.preventDefault();
    const addMoneyInput = document.getElementById('input-cash-out').value;
    
    console.log(addMoneyInput);
        const pinNumberInput = document.getElementById('input-cash-out-pin-number').value;
        console.log(pinNumberInput);

        if(pinNumberInput === '1234'){
            console.log('adding money to your account');
            const balance = document.getElementById('account-balance').innerText;
             console.log(balance)
            const addMoneyNumber = parseFloat(addMoneyInput);
            const balanceNumber = parseFloat(balance);
            const newBalance = balanceNumber - addMoneyNumber;

             console.log(newBalance)
             document.getElementById('account-balance').innerText= newBalance;
        }
        else{
            alert('Please try again')
        }



})



