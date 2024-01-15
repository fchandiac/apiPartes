require('dotenv').config()
const { Sequelize, DataTypes } = require('sequelize')
const db = {}

db.connection = new Sequelize(
    process.env.DATABASE,
    process.env.USER_NAME,
    process.env.PASSWORD,
    {
        host: process.env.HOST,
        dialect: process.env.DIALECT,
    }
)

// db.connection = new Sequelize(
//     "partes",
//     "root",
//     "dom1234",
//     {
//         host: "localhost",
//         dialect: "mysql",
//     }
// )


db.Profiles = require('./models/profiles')(db.connection, DataTypes)
db.Users = require('./models/users')(db.connection, DataTypes)
db.Departments = require('./models/departments')(db.connection, DataTypes)
db.Recipients = require('./models/recipients')(db.connection, DataTypes)
db.DecreesCategories = require('./models/decrees_categories')(db.connection, DataTypes)
db.Attachments = require('./models/attachments')(db.connection, DataTypes)
db.Decrees = require('./models/decrees')(db.connection, DataTypes)
db.Distributions = require('./models/distributions')(db.connection, DataTypes)
db.MailReferences = require('./models/mail_references')(db.connection, DataTypes)
db.JobTitles = require('./models/job_titles')(db.connection, DataTypes)
db.Mails = require('./models/mails')(db.connection, DataTypes)
db.Letters = require('./models/letters')(db.connection, DataTypes)




db.Users.belongsTo(db.Profiles)
db.Recipients.belongsTo(db.Users)
db.Recipients.belongsTo(db.Departments)
db.Decrees.belongsTo(db.Attachments)
db.Decrees.belongsTo(db.DecreesCategories)
db.Decrees.belongsTo(db.Departments)
db.Decrees.belongsTo(db.Users)
db.Decrees.belongsTo(db.Attachments)
db.Distributions.belongsTo(db.Recipients)

db.Mails.belongsTo(db.MailReferences)
db.Mails.belongsTo(db.Users)
db.Mails.belongsTo(db.Attachments)
db.Mails.belongsTo(db.Departments)

db.Letters.belongsTo(db.Attachments)
db.Letters.belongsTo(db.Users)
db.Letters.belongsTo(db.JobTitles)





module.exports = db
