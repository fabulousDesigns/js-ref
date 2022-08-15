const AMOUNT = document.getElementById("limit");

const SUBMIT = document.getElementById("btn");

const showUserAmount = (e) => {
  let VALUE = e.target.value;
  console.log(VALUE);
};

SUBMIT.addEventListener("click", showUserAmount);
