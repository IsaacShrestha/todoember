import Ember from 'ember';
import ENV from 'todo-ember/config/environment';

export default Ember.Controller.extend({

  username: '',
  email: '',
  password: '',
  confirm_password: '',

  isValid: Ember.computed.match('email', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid'),
  isDisabled: Ember.computed.empty('username'),
  isDisabled: Ember.computed.empty('password'),
  isDisabled: Ember.computed.empty('confirm_password'),

  

  actions: {
    register() {
      let {username, email, password, confirm_password} = this.getProperties(
        'username',
        'email',
        'password',
        'confirm_password'
      );

      Ember.$.ajax({
        url: ENV.host + '/api-register/',
        type: 'POST',
        data: JSON.stringify({
          username: username,
          email: email,
          password: password,
          confirm_password: confirm_password
        }),
        contentType: 'application/json;charset=utf-8',
        dataType: 'json'
      }).then((response) => {
        this.set('signupComplete', true);
      }, (xhr, status, error) => {
        this.set('error', xhr.responseText);
      });
    }
  }
});