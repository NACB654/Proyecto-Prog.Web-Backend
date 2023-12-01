import Sequelize from 'sequelize'

const hostname = 'nacb-progweb-db.postgres.database.azure.com'
const username = 'postgres'
const password = 'Password123'
const database = 'biblioteca'
const dbPort = 5432
const dialect = 'postgres'

const sequelize = new Sequelize(database, username, password, {
    host: hostname,
    port: dbPort,
    dialect: dialect,
    operatorAliases: false,
    define: {
        timestamps: false
    },
    pool: {
        max: 100,
        min:0,
        acquire: 20000,
        idle: 5000
    }
})

export default sequelize;