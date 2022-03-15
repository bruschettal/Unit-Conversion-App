function meterNfoot() {
  let inputVal = document.getElementById("top-yazi-alt").value;
  let convertedVal = inputVal * 3.2808;
  convertedVal = convertedVal.toFixed(3);

  let convertedValrev = inputVal / 3.2808;
  convertedValrev = convertedValrev.toFixed(3);

  document.getElementsByClassName("bottom-desc")[0].innerHTML =
    inputVal +
    " meters = " +
    convertedVal +
    " feet | " +
    inputVal +
    " feet = " +
    convertedValrev +
    " meters";
}

function literNgal() {
  let inputVal = document.getElementById("top-yazi-alt").value;
  let convertedVal = inputVal * 0.264172;
  convertedVal = convertedVal.toFixed(3);

  let convertedValrev = inputVal / 0.264172;
  convertedValrev = convertedValrev.toFixed(3);

  document.getElementsByClassName("bottom-desc")[1].innerHTML =
    inputVal +
    " liters = " +
    convertedVal +
    " gallons | " +
    inputVal +
    " gallons = " +
    convertedValrev +
    " liters";
}

function kiloNpound() {
  let inputVal = document.getElementById("top-yazi-alt").value;
  let convertedVal = inputVal * 2.2046;
  convertedVal = convertedVal.toFixed(3);

  let convertedValrev = inputVal / 2.2046;
  convertedValrev = convertedValrev.toFixed(3);

  document.getElementsByClassName("bottom-desc")[2].innerHTML =
    inputVal +
    " kilograms = " +
    convertedVal +
    " pounds | " +
    inputVal +
    " pounds = " +
    convertedValrev +
    " kilograms";
}
