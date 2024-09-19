

document.getElementById('btn-cashout').addEventListener('click', function(event){
    event.preventDefault();

    const cashOut = document.getElementById('input-cashout').value;
    const pinNumberInput = document.getElementById('cashout-pin-number').value;
      

    if(pinNumberInput === '1234'){
        console.log("reducing money");
        const balance = document.getElementById('account-balance').innerText;
        const deductMoneyNumber = parseFloat(cashOut);
        const balanceNumber = parseFloat(balance);
        const newBalance =  balanceNumber - deductMoneyNumber;
        console.log(newBalance);
        document.getElementById('account-balance').innerText= newBalance;

    }
    else{
        alert("Wrong");
    }
})


//cashout click

document.getElementById('btn-show-cashout').addEventListener('click',function(){
    document.getElementById('cash-out-form').classList.remove('hidden');
    document.getElementById('add-money-form').classList.add('hidden');
})
document.getElementById('btn-show-addmoney').addEventListener('click',function(){
    document.getElementById('add-money-form').classList.remove('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
})