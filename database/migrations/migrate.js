'use strict';

const sequelize = require("sequelize");

module.exports = {
    up: async (queryInterface, Sequelize) => {

        await queryInterface.createTable('profiles',
            {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
                name: { type: Sequelize.STRING },
                created_at: { type: Sequelize.DATE },
                updated_at: { type: Sequelize.DATE }
            },
            {
                initialAutoIncrement: 1001,
            }
        )

        await queryInterface.createTable('users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            user_name: { type: Sequelize.STRING, unique: true },
            name: { type: Sequelize.STRING },
            pass: { type: Sequelize.STRING },

            profile_id: {
                allowNull: true,
                unique: false,
                type: Sequelize.INTEGER,
                onDelete: 'SET NULL',
                references: {
                    model: 'profiles',
                    key: 'id'
                }
            },
            created_at: { type: Sequelize.DATE },
            updated_at: { type: Sequelize.DATE }
        },
            {
                initialAutoIncrement: 1001,
            }
        )

        await queryInterface.createTable('departments', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: { type: Sequelize.STRING },

            created_at: { type: Sequelize.DATE },
            updated_at: { type: Sequelize.DATE }
        },
            {
                initialAutoIncrement: 1001,
            }
        )

        await queryInterface.createTable('recipients', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: { type: Sequelize.STRING },
            repository: { type: Sequelize.BOOLEAN },
            url_repository: { type: Sequelize.STRING },
            user_id: {
                allowNull: true,
                unique: false,
                type: Sequelize.INTEGER,
                onDelete: 'SET NULL',
                references: {
                    model: 'users',
                    key: 'id'
                }
            },
            department_id: {
                allowNull: true,
                unique: false,
                type: Sequelize.INTEGER,
                onDelete: 'SET NULL',
                references: {
                    model: 'departments',
                    key: 'id'
                }
            },
            created_at: { type: Sequelize.DATE },
            updated_at: { type: Sequelize.DATE }
        },
            {
                initialAutoIncrement: 1001,
            }
        )

        await queryInterface.createTable('decrees_categories', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: { type: Sequelize.STRING },
            created_at: { type: Sequelize.DATE },
            updated_at: { type: Sequelize.DATE }
        },
            {
                initialAutoIncrement: 1001,
            }
        )

        await queryInterface.createTable('attachments', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            url: { type: Sequelize.STRING },
            created_at: { type: Sequelize.DATE },
            updated_at: { type: Sequelize.DATE }
           
        },
            {
                initialAutoIncrement: 1001,
            }
        )



        await queryInterface.createTable('decrees', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            folio: { type: Sequelize.INTEGER },
            year: { type: Sequelize.INTEGER },
            type: { type: Sequelize.INTEGER },
            matter: { type: Sequelize.STRING },
            date: { type: Sequelize.DATE },
            attachment_id: {
                allowNull: true,
                unique: false,
                type: Sequelize.INTEGER,
                onDelete: 'SET NULL',
                references: {
                    model: 'attachments',
                    key: 'id'
                }
            },
          
            decrees_category_id: {
                allowNull: true,
                unique: false,
                type: Sequelize.INTEGER,
                onDelete: 'SET NULL',
                references: {
                    model: 'decrees_categories',
                    key: 'id'
                }
            },
            department_id: {
                allowNull: true,
                unique: false,
                type: Sequelize.INTEGER,
                onDelete: 'SET NULL',
                references: {
                    model: 'departments',
                    key: 'id'
                }
            },
            user_id: {
                allowNull: true,
                unique: false,
                type: Sequelize.INTEGER,
                onDelete: 'SET NULL',
                references: {
                    model: 'users',
                    key: 'id'
                }
            },
            created_at: { type: Sequelize.DATE },
            updated_at: { type: Sequelize.DATE }
        },
            {
                initialAutoIncrement: 1001,
            }
        )
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropAllTables()
    }
};


