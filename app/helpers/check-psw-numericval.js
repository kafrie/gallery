import Ember from 'ember';

export function checkPswNumericval(params/*, hash*/) {
  const regularExpression = /^(?=(.*[\d]){1,})/;
  
  if(!regularExpression.test(params[0])){
            return true;
    }
    
  return false;
}

export default Ember.Helper.helper(checkPswNumericval);
