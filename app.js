document.getElementById("form").addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();
  var formData = new FormData(event.target);
  var formObject = {};
  formData.forEach(function(value, key) {
    formObject[key] = value;
  });

  
  fetch(
    "https://script.google.com/macros/s/AKfycbyvVv5QrbMM4yX_BZpGCGgCGALV9yI12nZyk5oR0aAJxCfCfgOJdxc82tbMyBApEuOT/exec",
    {
      method: "POST",
      body: JSON.stringify(formObject),
    }
  )
  .then(res => {
    if (res.ok) {
      alert("Thank you for your feedback");
    } else {
      // Handle error if needed
    }
  })
  .catch(err => console.log(err));

  event.target.reset();
}
