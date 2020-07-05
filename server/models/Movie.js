const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Movie = new Schema({
   name: {
      type: String
   },
   description: {
      type: String
   },
   director: {
       type: String
   }
}, {
   collection: 'Movies'
})

module.exports = mongoose.model('Movie', Movie)