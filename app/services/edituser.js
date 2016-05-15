import Ember from 'ember';
import EditUser from '../models/edituser';

const edituser = 
    EditUser.create({
        userid:'',
        username:'',
        name:'',
        surname:'',
        email:'',
        userExist:false,
    });
    
export default Ember.Service.extend({
    getUser(){ 
       Ember.set(edituser, 'userid', window.localStorage['userid']);
       Ember.set(edituser, 'username', window.localStorage['username']);
       return edituser;
     },
    getUserDetails(callback){
        return Em.$.ajax('http://localhost:10029/api/SignUpUserModels/' + window.localStorage['userid'], {
            type: 'GET', // HTTP method
            crossDomain: true,
            dataType: 'json', // type of data expected from the API response
            success: function (response) {
                var msg = "success";
                window.localStorage['username'] = response.UserName;
                window.localStorage['userid'] = response.UserId;
                edituser.setProperties({
                    userid: response.UserId,
                    username: response.UserName,
                    name: response.Name,
                    surname: response.Surname,
                    email: response.Email,
                    userExist: false
                });
                return callback(msg);
            },
            error: function () {
                var msg = "409";
                edituser.setProperties({userExist: true});
                return callback(msg);
            }
        });
    },
    updateUserDetails(callback){
        var userData = JSON.parse(JSON.stringify(edituser));
        return Em.$.ajax('http://localhost:10029/api/SignUpUserModels/' + window.localStorage['userid'], {
            type: 'PUT', // HTTP method
            crossDomain: true,
            dataType: 'json', // type of data expected from the API response
            data: userData,
            success: function () {
                var msg = "success";
                window.localStorage['userid'] = edituser.userid;
                window.localStorage['username'] = edituser.username;
                return callback(msg);
            },
            error: function () {
                var msg = "409";
                edituser.setProperties({userExist: true});
                return callback(msg);
            }
        });
    }
});
