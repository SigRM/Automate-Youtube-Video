const moongose = require('mongoose')

const{NOTES_APP_MONGODB_HOST, NOTES_APP_MONGODB_DATABASE} = process.env;
const MONGODB_URI = `mongodb://${NOTES_APP_MONGODB_HOST}/${NOTES_APP_MONGODB_DATABASE}`;

//This is other way to do the line before this one.
// const NOTES_APP_MONGODB_HOST = process.env.NOTES_APP_MONGODB_HOST;
// const NOTES_APP_MONGODB_DATABASE = process.env.NOTES_APP_MONGODB_DATABASE;


moongose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
} )

.then(db => console.log('Database is connected'))
.catch(err => console.log(err));