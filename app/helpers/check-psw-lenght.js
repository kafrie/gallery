import Ember from 'ember';

export function checkPswLenght(params/*, hash*/) {
  if(params[0].length < 6){
      return true;
    }    
  return false;
}

export default Ember.Helper.helper(checkPswLenght);
