  function appendToDisplay(value) {
      document.getElementById('display').value += value;
    }
    
    function clearDisplay() {
      document.getElementById('display').value = '';
    }
    
    function backspace() {
      let display = document.getElementById('display');
      display.value = display.value.toString().slice(0, -1);
    }
    
    function calculate() {
      try {
        let expression = document.getElementById('display').value;
        
        expression = expression.replace(/×/g, '*');
        
        expression = expression.replace(/([\d.]+)\+([\d.]+)%/, function(match, num, percent) {
          return num + '+' + (num * percent / 100);
        });
        
        expression = expression.replace(/([\d.]+)\-([\d.]+)%/, function(match, num, percent) {
          return num + '-' + (num * percent / 100);
        });
        
        expression = expression.replace(/([\d.]+)%/, function(match, num) {
          return num / 100;
        });
        
        const result = eval(expression);
        document.getElementById('display').value = result;
      } catch (error) {
        document.getElementById('display').value = 'Error';
      }
    }