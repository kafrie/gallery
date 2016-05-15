import Ember from 'ember';
import SignUp from '../models/sign-up';

const newuser = 
    SignUp.create({
        userid:'',
        username:'',
        name:'',
        surname:'',
        email:'',
        password:'',
        comparepassword:'',
        userExist:false
    });
        
export default Ember.Service.extend({
   getUser(){ 
       Ember.set(newuser, 'userid', window.localStorage['userid']);
       Ember.set(newuser, 'username', window.localStorage['username']);
       return newuser;
     },
   newUser(userDetails){
       return newuser.setProperties({ 
           userid: userDetails.userid,
           username: userDetails.username,
           name: userDetails.name,
           surname: userDetails.surname,           
           email: userDetails.email,
           password: userDetails.password,
           comparepassword: userDetails.comparepassword
        });
    },
    postNewUser(callback){
        var userData = JSON.parse(JSON.stringify(newuser));
        return Em.$.ajax('http://localhost:10029/api/SignUpUserModels', {
            type: 'POST', // HTTP method
            crossDomain: true,
            dataType: 'json', // type of data expected from the API response
            data: userData, // End data payload
            success: function () {
                var msg = "success";
                window.localStorage['userid'] = newuser.userid;
                window.localStorage['username'] = newuser.username;
                newuser.setProperties({userExist: false});
                return callback(msg);
            },
            error: function () {
                var msg = "409";
                newuser.setProperties({userExist: true});
                return callback(msg);
            }
        });
    }
});
