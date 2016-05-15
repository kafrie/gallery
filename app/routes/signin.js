import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        getUser(userDetails){
            if(userDetails.userid !== "" && userDetails.password !== ""){
            var getuser = this.get('signin');
            var self = this;
                $(function(){
                    getuser.verifyUser(userDetails,function(msg){
                        if(msg ==='success'){
                            getuser.getUserDetails(function(msg){
                                if(msg ==='success'){
                                    self.transitionTo('home.home',userDetails);
                                }
                            });
                        }
                    });
                });
            }
        }
    },
    model() {
        const signin = this.get('signin');
        return signin.retrieveCurrentUser();
    },
    signin: Ember.inject.service()
});
