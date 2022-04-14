const { connect, connection } = require('mongoose');

// Connects db to mongo db
const connectionString = 
    process.env.MONGODB_URI || 'mongodb://localhost:27017/socialNetworkdb';

connect('mongodb://localhost/videosAndResponses', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
