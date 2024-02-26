
require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const { PORT, PATH_PUBLIC } = require('./appConfig')


app.set('json spaces', 2)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors({ origin: '*' }))
app.use(express.static(PATH_PUBLIC))



app.use(require('./routes/profiles'))
app.use(require('./routes/users'))
app.use(require('./routes/departments'))
app.use(require('./routes/recipients'))
app.use(require('./routes/decrees_categories'))
app.use(require('./routes/attachments'))
app.use(require('./routes/decrees'))
app.use(require('./routes/distributions'))
app.use(require('./routes/mail_references'))
app.use(require('./routes/job_titles'))
app.use(require('./routes/mails'))
app.use(require('./routes/letters'))
app.use(require('./routes/classifications'))
app.use(require('./routes/routes'))
app.use(require('./routes/records'))



app.listen(PORT, () => {
    console.log('server work! at port: ' + PORT)
})
