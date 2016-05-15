import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        newUser(userDetails){
            const regularExpression = /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s)/;
            if(userDetails.password.length >= 6){
                if(regularExpression.test(userDetails.password)){
                    if(userDetails.password === userDetails.comparepassword){                                                       
                        var storeData = this.get('store');
                        var self = this;
                        $(function(){
                            storeData.postNewUser(function(msg){
                                if(msg ==='success'){
                                   storeData.newUser(userDetails);
                                   self.transitionTo('signin');  
                                }                              
                            });
                        });                         
                    } 
                }
            }           
        }
    },
    model() {
        const store = this.get('store');
        return store.getUser();
    },
    store: Ember.inject.service()
}); 
