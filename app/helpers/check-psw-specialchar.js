import Ember from 'ember';

export function checkPswSpecialchar(params/*, hash*/) {
  const regularExpression = /^(?=(.*[\W]){1,})(?!.*\s)/;  
   if(!regularExpression.test(params[0])){
            return true;
    }
    
  return false;
}

export default Ember.Helper.helper(checkPswSpecialchar);
