const passwordField = document.querySelector('#password');

const regexUppercase = /(?=.*[A-Z])/;
const regexLowercase = /(?=.*[a-z])/;
const regexNumber = /(?=.*[0-9])/;
const regexSpecial = /[^0-9a-zA-Z]+/;

passwordField.addEventListener(
  'input',
  () => {
    let newPassword = passwordField.value;

    if (newPassword.length >= 8 && newPassword.length <= 16) {
      document.querySelector('.rule-1').style['color'] = '#32a852';
      document.querySelector('.rule-1').style.setProperty('--bullet-color', '#32a852');
    } else {
      document.querySelector('.rule-1').style['color'] = '#c9c54f';
      document.querySelector('.rule-1').style.setProperty('--bullet-color', '#c9c54f');
    }
    
    if (regexUppercase.test(newPassword)) {
      document.querySelector('.rule-2').style['color'] = '#32a852';
      document.querySelector('.rule-2').style.setProperty('--bullet-color', '#32a852');
    } else {
      document.querySelector('.rule-2').style['color'] = '#c9c54f';
      document.querySelector('.rule-2').style.setProperty('--bullet-color', '#c9c54f');
    }
    
    if (regexLowercase.test(newPassword)) {
      document.querySelector('.rule-3').style['color'] = '#32a852';
      document.querySelector('.rule-3').style.setProperty('--bullet-color', '#32a852');
    } else {
      document.querySelector('.rule-3').style['color'] = '#c9c54f';
      document.querySelector('.rule-3').style.setProperty('--bullet-color', '#c9c54f');
    }
    
    if (regexNumber.test(newPassword)) {
      document.querySelector('.rule-4').style['color'] = '#32a852';
      document.querySelector('.rule-4').style.setProperty('--bullet-color', '#32a852');
    } else {
      document.querySelector('.rule-4').style['color'] = '#c9c54f';
      document.querySelector('.rule-4').style.setProperty('--bullet-color', '#c9c54f');
    }
    
    if (regexSpecial.test(newPassword)) {
      document.querySelector('.rule-5').style['color'] = '#32a852';
      document.querySelector('.rule-5').style.setProperty('--bullet-color', '#32a852');
    } else {
      document.querySelector('.rule-5').style['color'] = '#c9c54f';
      document.querySelector('.rule-5').style.setProperty('--bullet-color', '#c9c54f');
    }
  }
)