import _ from 'lodash';
function component() {
    let element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello','lalla' ,'webpack'], ' ');
   let ease = 1;
   console.log(ease)
    return element;
  }
  
  document.body.appendChild(component());