
require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const port = process.env.PORT //|| 3003


app.set('json spaces', 2)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors({ origin: '*' }))
app.use(express.static(path.join(__dirname, './public')))


app.use(require('./routes/countries'))
app.use(require('./routes/states'))
app.use(require('./routes/cities'))
app.use(require('./routes/categories'))
app.use(require('./routes/profiles'))
app.use(require('./routes/users'))
app.use(require('./routes/notifications'))
app.use(require('./routes/searches'))
app.use(require('./routes/attachments'))
app.use(require('./routes/applications'))
app.use(require('./routes/offers'))


app.listen(port, () => {
    console.log('server work! at port: ' + port)
})
