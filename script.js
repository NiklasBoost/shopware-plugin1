    const buttonClasses = ['.add-button-row1', '.add-button-row2', '.add-button-row3'];

    buttonClasses.forEach((buttonClass) => {
      const addButton = document.querySelector(buttonClass);
      addButton.addEventListener('click', () => {
        resetButtonStyle(buttonClass);
        changeButtonStyle(buttonClass);
      });
    });
    
    function resetButtonStyle(buttonClassPara) {
      const addButton = document.querySelector(buttonClassPara);
      setTimeout(() => {
          addButton.style.backgroundColor = "rgb(2,132,144)";
          addButton.innerHTML = 'In den Warenkorb';
        }, 1000);
    }

    function changeButtonStyle(buttonClassPara) {
      const addButton = document.querySelector(buttonClassPara);
      addButton.style.backgroundColor = "rgb(89,89,89)";
      addButton.innerHTML = 'wird in den Warenkorb gelegt';
    }