import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Component.extend({
	errors: DS.Errors.create(),

	actions: {
		save: function(){
			if(this.validate()){
					this.sendAction('action', this.get('todo'));

				}
		}
	},

	validate: function() {
		this.set('errors', DS.Errors.create());

		if(this.get(todo.label) === '' || this.get(todo.label) === undefined)
		{
			this.get('errors').add('label',"can't be empty");
		}

		if(this.get(todo.text) === '' || this.get(todo.text) === undefined)
		{
			this.get('errors').add('text',"can't be empty");
		}

		return this.get('errors.isEmpty');
	}
});