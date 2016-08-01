import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      firstName: '',
      lastName: '',
      birthday: new Date(1986, 8, 18),
      favoriteBand: 'Sonic Youth'
    };
  }
});
