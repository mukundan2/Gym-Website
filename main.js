 document.addEventListener("DOMContentLoaded", function () {
const form = document.getElementById("contact");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    form.reset();
    alert("Form submitted successfully!");
  });
}

 
  const bmiButton = document.querySelector(".weight");
  
  bmiButton.addEventListener("click", function(e) { 
       
    // Height & weight values
    let heightCm = parseFloat(document.getElementById("height").value);
    let weight = parseFloat(document.getElementById("weight").value);

    if(heightCm > 0 && weight > 0) {
      let heightM = heightCm / 100; // cm to meters
      let bmi = weight / (heightM * heightM);
      bmi = bmi.toFixed(2); // 2 decimal places

      let category = "";
      if(bmi < 18.5){
        category = "Underweight";
      } else if(bmi >= 18.5 && bmi < 25){
        category = "Normal weight";
      } else if(bmi >= 25 && bmi < 30){
        category = "Overweight";
      } else{
        category = "Obese";
      }
           
    
      // Result show panna
      alert(`Your BMI is ${bmi} (${category})`);
    } else {
      alert("Please enter valid height and weight!");
    }
  });
  })

const plan = document.getElementById("plan");
const amount = document.getElementById("amount");
const payBtn = document.getElementById("payBtn");
const msg = document.getElementById("msg");

plan.addEventListener("change", () => {
  amount.textContent = plan.value;
});

payBtn.addEventListener("click", () => {
  msg.textContent = "Payment Successful! Welcome to IRON EDGE 💪";
});
