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

db.Countries = require('./models/countries')(db.connection, DataTypes)
db.States = require('./models/states')(db.connection, DataTypes)
db.Cities = require('./models/cities')(db.connection, DataTypes)
db.Categories = require('./models/categories')(db.connection, DataTypes)
db.Profiles = require('./models/profiles')(db.connection, DataTypes)
db.Users = require('./models/users')(db.connection, DataTypes)
db.Notifications = require('./models/notifications')(db.connection, DataTypes)

db.Searches = require('./models/searches')(db.connection, DataTypes)
db.Offers = require('./models/offers')(db.connection, DataTypes)
db.Attachments = require('./models/attachments')(db.connection, DataTypes)

// db.BidderApplications = require('./models/bidderApplications')(db.connection, DataTypes)

db.Applications = require('./models/applications')(db.connection, DataTypes)



db.Users.belongsTo(db.Profiles)
db.Users.belongsTo(db.Cities)
db.Users.belongsTo(db.Categories)
db.Cities.belongsTo(db.States)
db.States.belongsTo(db.Countries)
db.Notifications.belongsTo(db.Users)
db.Searches.belongsTo(db.Users)
db.Searches.belongsTo(db.Categories)
db.Searches.belongsTo(db.Cities)
db.Offers.belongsTo(db.Searches)
db.Offers.belongsTo(db.Users)

db.Applications.belongsTo(db.Searches)
db.Applications.belongsTo(db.Users)




db.Attachments.belongsTo(db.Searches)







module.exports = db
