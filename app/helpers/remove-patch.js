import Ember from 'ember';

export function removePatch(params/*, hash*/) {
  const regularExpression = /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s)/;
  if(params[0].length < 6 || !regularExpression.test(params[0])){
      return true;
    }    
  return false;
}

export default Ember.Helper.helper(removePatch);
