//app/models/nerd.js
//grab the mongoose module
var mongoose = require('mongoose');

// define our nerd models
// modeule.exports allow us to pass this to this to other fiels when it is called

module.exports = mongoose.model('Nerd', {

	name: {type: String, default: ''}

});


