const InDates = document.getElementById('InDates')
const InCates = document.getElementById('InCates')
const InDes = document.getElementById('InDes')
const InAmount = document.getElementById('InAmount')
const InAmount1 = document.getElementById('InAmount1')

const MoneyForm = document.getElementById('MoneyForm')

MoneyForm.addEventListener('submit', (e) => {
    // let formInvalid = false;
    // let message = []
    // if (!InDates.value) {
    //     message.push('Date is required!');
    //     formInvalid = true;
    // }
    // if (!InAmount.value) {
    //     message.push('Amount is required!');
    //     formInvalid = true;
    // }
    // if (InAmount.value < 0) {
    //     message.push('Income can not be negative!');
    //     formInvalid = true;
    // }

    // // if(formInvalid) {
    // //     e.preventDefault(false);
    // // } 

    // if (message.length > 0) {
    //     e.preventDefault();
    //     errorElement.innerHTML = message.join(", ")
    // }
})

function CalculateTotalIn(){
  let total = 0;
  total += parseInt(InAmount.value);
  total += parseInt(InAmount1.value);
  document.getElementById("TotalIn").value = total;
}

function ValidateYear(obj, msg) {
    var userInput = obj.value;
    if (userInput.length != 0) {
      if (isNaN(userInput))
        msg.innerHTML = "Numbers only please.";
      else if (userInput > 2023)
        msg.innerHTML = "You are not living in the future STUPID.";
      else
        msg.innerHTML = "";
      }
  
    return;
}

function ValidateDescription(obj, msg) {
  var userInput = obj.value;
  if (userInput.length != 0) {
    msg.innerHTML = "";
  }
  else
    msg.innerHTML = "";

  return;
}


function ValidateAmount(obj, msg) {
  var userInput = obj.value;
  if (userInput.length != 0) {
    msg.innerHTML = "";
  }
  else
    msg.innerHTML = "";

  return;
}