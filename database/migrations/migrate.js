'use strict';

//next

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

        await queryInterface.createTable('classifications', {
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
            matter: { type: Sequelize.STRING(1600) },
            date: { type: Sequelize.DATE },
            third: { type: Sequelize.BOOLEAN },
            sensitive: { type: Sequelize.BOOLEAN },
            classification_id: {
                allowNull: true,
                unique: false,
                type: Sequelize.INTEGER,
                onDelete: 'SET NULL',
                references: {
                    model: 'classifications',
                    key: 'id'
                }
            },
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

        await queryInterface.createTable('distributions', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            reference_type: { type: Sequelize.STRING },
            reference_id: { type: Sequelize.INTEGER },
            recipient_id: { type: Sequelize.INTEGER },
            user_update_id: { type: Sequelize.INTEGER },
            status: { type: Sequelize.INTEGER },
            created_at: { type: Sequelize.DATE },
            updated_at: { type: Sequelize.DATE }
        },
            {
                initialAutoIncrement: 1001,
            }
        )

        await queryInterface.createTable('mail_references', {
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

        await queryInterface.createTable('mails', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            year: { type: Sequelize.INTEGER },
            folio: { type: Sequelize.INTEGER },
            matter: { type: Sequelize.STRING(1600) },
            external: { type: Sequelize.BOOLEAN },
            sender: { type: Sequelize.STRING },
            date: { type: Sequelize.DATE },
            mail_reference_id: {
                allowNull: true,
                unique: false,
                type: Sequelize.INTEGER,
                onDelete: 'SET NULL',
                references: {
                    model: 'mail_references',
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
            created_at: { type: Sequelize.DATE },
            updated_at: { type: Sequelize.DATE }
        },
            {
                initialAutoIncrement: 1001,

            }
        )

        await queryInterface.createTable('job_titles', {
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

        await queryInterface.createTable('letters', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            }, 
            year: {type: Sequelize.INTEGER },
            folio: {type: Sequelize.INTEGER },
            matter: {type: Sequelize.STRING(1600)},
            recipient: {type: Sequelize.STRING},
            job_title_id: {
                allowNull: true,
                unique: false,
                type: Sequelize.INTEGER,
                onDelete: 'SET NULL',
                references: {
                    model: 'job_titles',
                    key: 'id'
                }
            },
            type: {type: Sequelize.INTEGER },
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
            created_at: { type: Sequelize.DATE },
            updated_at: { type: Sequelize.DATE }

        }, 
    
            {
                initialAutoIncrement: 1001,

            }
        )

        await queryInterface.createTable('routes', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            }, 
            name: {type: Sequelize.STRING },
            url: {type: Sequelize.STRING },
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


