'use strict';

const sequelize = require("sequelize");

module.exports = {
    up: async (queryInterface, Sequelize) => {

        await queryInterface.createTable('countries',
            {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
                name: { type: Sequelize.STRING },
                region: { type: Sequelize.STRING },
                created_at: { type: Sequelize.DATE },
                updated_at: { type: Sequelize.DATE }
            },
            {
                initialAutoIncrement: 1001,
            }
        )

        await queryInterface.createTable('states',
            {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
                name: { type: Sequelize.STRING },
                country_id: {
                    allowNull: true,
                    unique: false,
                    type: Sequelize.INTEGER,
                    onDelete: 'SET NULL',
                    references: {
                        model: 'countries',
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

        await queryInterface.createTable('cities',
            {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
                name: { type: Sequelize.STRING },
                state_id: {
                    allowNull: true,
                    unique: false,
                    type: Sequelize.INTEGER,
                    onDelete: 'SET NULL',
                    references: {
                        model: 'states',
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

        await queryInterface.createTable('categories',
            {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
                name: { type: Sequelize.STRING },
                description: { type: Sequelize.STRING },
                created_at: { type: Sequelize.DATE },
                updated_at: { type: Sequelize.DATE }
            },
            {
                initialAutoIncrement: 1001,
            }
        )

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
            mail: { type: Sequelize.STRING },
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
            city_id: {
                allowNull: true,
                unique: false,
                type: Sequelize.INTEGER,
                onDelete: 'SET NULL',
                references: {
                    model: 'cities',
                    key: 'id'
                }
            },
            category_id: {
                allowNull: true,
                unique: false,
                type: Sequelize.INTEGER,
                onDelete: 'SET NULL',
                references: {
                    model: 'categories',
                    key: 'id'
                }
            },
            dni: { type: Sequelize.STRING },
            phone: { type: Sequelize.STRING },
            state: { type: Sequelize.BOOLEAN },
            created_at: { type: Sequelize.DATE },
            updated_at: { type: Sequelize.DATE }
        },
            {
                initialAutoIncrement: 1001,
            }
        )

        await queryInterface.createTable('notifications', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            title: { type: Sequelize.STRING },
            description: { type: Sequelize.STRING },
            amount: { type: Sequelize.INTEGER },
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

        await queryInterface.createTable('searches', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            city_id: {
                allowNull: true,
                unique: false,
                type: Sequelize.INTEGER,
                onDelete: 'SET NULL',
                references: {
                    model: 'cities',
                    key: 'id'
                }
            },
            category_id: {
                allowNull: true,
                unique: false,
                type: Sequelize.INTEGER,
                onDelete: 'SET NULL',
                references: {
                    model: 'categories',
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
            description: { type: Sequelize.STRING },
            latency_code: { type: Sequelize.INTEGER },
            state_code: { type: Sequelize.INTEGER },
            close_date: { type: Sequelize.DATE },   
            created_at: { type: Sequelize.DATE },
            updated_at: { type: Sequelize.DATE }
        },
            {
                initialAutoIncrement: 1001,
            }
        )

        await queryInterface.createTable('offers', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            search_id: {
                allowNull: true,
                unique: false,
                type: Sequelize.INTEGER,
                onDelete: 'SET NULL',
                references: {
                    model: 'searches',
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
            amount: { type: Sequelize.INTEGER },
            description: { type: Sequelize.STRING },
            state_code: { type: Sequelize.BOOLEAN },
            created_at: { type: Sequelize.DATE },
            updated_at: { type: Sequelize.DATE }
        },
            {
                initialAutoIncrement: 1001,
            }
        )

        await queryInterface.createTable('bidder_applications', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            offer_id: {
                allowNull: true,
                unique: false,
                type: Sequelize.INTEGER,
                onDelete: 'SET NULL',
                references: {
                    model: 'offers',
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
            rut: { type: Sequelize.STRING },
            state: { type: Sequelize.BOOLEAN },
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
            search_id: {
                allowNull: true,
                unique: false,
                type: Sequelize.INTEGER,
                onDelete: 'SET NULL',
                references: {
                    model: 'searches',
                    key: 'id'
                }
            },
            offer_id: {
                allowNull: true,
                unique: false,
                type: Sequelize.INTEGER,
                onDelete: 'SET NULL',
                references: {
                    model: 'offers',
                    key: 'id'
                }
            },
            bidder_application_id: {
                allowNull: true,
                unique: false,
                type: Sequelize.INTEGER,
                onDelete: 'SET NULL',
                references: {
                    model: 'bidder_applications',
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

        await queryInterface.createTable('applications', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            search_id: {
                allowNull: true,
                unique: false,
                type: Sequelize.INTEGER,
                onDelete: 'SET NULL',
                references: {
                    model: 'searches',
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
            state_code: { type: Sequelize.INTEGER },
            created_at: { type: Sequelize.DATE },
            updated_at: { type: Sequelize.DATE }
        },
            {
                initialAutoIncrement: 1001,
            }
        )

        await queryInterface.createTable('social_networks', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: { type: Sequelize.STRING },
            url: { type: Sequelize.STRING },
            created_at: { type: Sequelize.DATE },
            updated_at: { type: Sequelize.DATE }
        }, 
        {
            initialAutoIncrement: 1001,
        })

    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropAllTables()
    }
};


