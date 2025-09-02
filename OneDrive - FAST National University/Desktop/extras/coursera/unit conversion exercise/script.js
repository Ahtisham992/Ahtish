function temperatureConversion() {
  var c = document.getElementById("c").value;

  if (c == "") {
    alert("Enter temperature in Celcius");
    document.getElementById("c").focus();

    return false;
  }
  var f = (c * 9) / 5 + 32;
  document.getElementById("f").value = f;
  return true;
}

function weightConversion() {
  var kg = document.getElementById("kg").value;
  if (kg == 0) {
    alert("enter weight in kg");
    document.getElementById("kg").focus();

    return false;
  }
  var pd = kg * 2.205;
  document.getElementById("pd").value = pd;
  return true;
}

function distanceConversion() {
  var km = document.getElementById("km").value;
  if (km == "") {
    alert("enter distance in km");
    document.getElementById("km").focus();
    return false;
  }
  var ml = km / 1.609;
  document.getElementById("ml").value = ml;
  return true;
}
