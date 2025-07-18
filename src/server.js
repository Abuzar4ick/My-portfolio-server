require('dotenv').config()
const app = require('./app')
require('./config/db')()

// Server listening
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))