import Ember from 'ember';

export function confirmPassword(params/*, hash*/) {
  if(params[0]!==params[1]){
      return true;
  }
  return false;
}

export default Ember.Helper.helper(confirmPassword);
