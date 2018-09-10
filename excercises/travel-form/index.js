var info = document.info;

function display() {
  alert(
    "First name: " +
      info.first.value +
      "\nLast Name: " +
      info.last.value +
      "\nAge: " +
      info.age.value +
      "\nGender: " +
      info.gender.value +
      "\nLocation: " +
      info.location.value +
      "\nDietary Restrictions :"
  );
}

document.info.addEventListener("submit", display);
