const express = require('express');
const connectDB = require('./config/db');
const path = require('path')

const app = express();
connectDB();

app.use(express.json({ extended: false }));

// app.get('/', (req, res) => res.send('API running.'));

app.use('/api/users', require('./routes/api/user'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));



if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}




const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));