import Ember from 'ember';

export function checkPswUppercase(params/*, hash*/) {
  const regularExpression = /^(?=.*?[A-Z])(?=(.*[a-z]){1,})/;
    if(!regularExpression.test(params[0])){
            return true;
    }
    
  return false;
}

export default Ember.Helper.helper(checkPswUppercase);
