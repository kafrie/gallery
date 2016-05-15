import Ember from 'ember';

export function unverified(params/*, hash*/) {
  if(params[0] === true){
      return true;
    }    
  return false;
}

export default Ember.Helper.helper(unverified);
