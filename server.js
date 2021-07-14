const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 8000;

const app = express();

app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// mongoose.connect('mongodb://localhost/workout', {
//     useNewUrlParser: true,
//     useFindAndModify: false
// })

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout-tracker',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false 
    }
);


app.use(require('./routes/apiRoutes'));
app.use(require('./routes/htmlRoutes'));

app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
})