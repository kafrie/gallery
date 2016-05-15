import Ember from 'ember';
import Signin from '../models/signin';

const user = 
    Signin.create({
        userid:'',
        username:'',
        password:'',
        unverified: ''
    });
 
 export default Ember.Service.extend({
    retrieveCurrentUser(){
        Ember.set(user, 'username', window.localStorage['username']);
        Ember.set(user, 'userid', window.localStorage['userid']);
        return user;
    },
    verifyUser(userDetails, callback){
        var userData = JSON.parse(JSON.stringify(user));
        return Em.$.ajax('http://localhost:10029/api/SignInModels', {
            type: 'POST', // HTTP method
            crossDomain: true,
            dataType: 'json',
            data: userData, // type of data expected from the API response
            success: function () {
                var msg = "success";
                window.localStorage['username'] = userDetails.username;
                user.setProperties({username: userDetails.username, unverified: false});
                return callback(msg);
            },
            error: function () {
                var msg = "406"; //406 not acceptable
                user.setProperties({unverified: true});
                return callback(msg);
            }
        });
    },
    getUserDetails(callback){
        return Em.$.ajax('http://localhost:10029/api/SignInModels?userName=' + window.localStorage['username'], {
            type: 'GET', // HTTP method
            crossDomain: true,
            dataType: 'json', // type of data expected from the API response
            success: function (response) {
                var msg = "success";
                window.localStorage['userid'] = response.UserId;
                window.localStorage['username'] = response.UserName;                
                return callback(msg);
            },
            error: function () {
                var msg = "409";
                user.setProperties({unverified: true});
                return callback(msg);
            }
        });
    }
});
