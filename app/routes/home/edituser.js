import Ember from 'ember';

export default Ember.Route.extend({
   actions:{
       updateUser(userDetails){
           if(userDetails.userid !== ""){
           var storeData = this.get('edituser');
           var self = this;
           $(function(){
               storeData.updateUserDetails(function(msg){
                   if(msg ==='success'){
                       self.transitionTo('home.home',userDetails);
                    }
                });
            });
        }
    }
},
   model() {        
        const store = this.get('edituser');
        $(function(){
               store.getUserDetails(
                    function(msg){
                        if(msg!=='success'){
                            return null;
                        }
                    }
                );
            });
        return store.getUser();
    },
    edituser: Ember.inject.service()
});
