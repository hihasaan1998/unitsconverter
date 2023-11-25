// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // Temperature Conversion
    document.getElementById('temperature').addEventListener('click', function () {
      const celsius = parseFloat(document.getElementById('c').value);
      const fahrenheit = (celsius * 9 / 5) + 32;
      document.getElementById('f').value = fahrenheit.toFixed(2); // Display result with 2 decimal places
    });
  
    // Weight Conversion
    document.getElementById('weight').addEventListener('click', function () {
      const kilograms = parseFloat(document.querySelectorAll('#weight input[type="number"]')[0].value);
      const pounds = kilograms * 2.205;
      document.querySelectorAll('#weight input[type="number"]')[1].value = pounds.toFixed(2);
    });
  
    // Distance Conversion
    document.getElementById('distance').addEventListener('click', function () {
      const kilometers = parseFloat(document.querySelectorAll('#distance input[type="number"]')[0].value);
      const miles = kilometers / 1.609;
      document.querySelectorAll('#distance input[type="number"]')[1].value = miles.toFixed(2);
    });
  
  });
  
