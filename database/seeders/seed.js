'use strict';



module.exports = {
  async up(queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('profiles', [
      {
        name: 'Administrador', //1001
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Funcionario', //1002
        created_at: new Date(), 
        updated_at: new Date()
      },
      { 
        name: 'Transparencia',
        created_at: new Date(), //1003
        updated_at: new Date()
      },
      { 
        name: 'Destinatario',
        created_at: new Date(), //1003
        updated_at: new Date()
      }
    ], {})


    await queryInterface.bulkInsert('users', [
      {
        user_name: 'admin',
        name: 'Administrador',
        pass: '9898',
        profile_id: 1001
      }, 
     

    ], {})

    await queryInterface.bulkInsert('departments', [
      {
        name: 'Oficina de Partes'
      }, 
      {
        name: 'Unidad de Transparencia',
      },
      {
        name: 'Unidad de Informática',
      }
     

    ], {})

    await queryInterface.bulkInsert('recipients', [
      {
        name: 'test',
        repository: true,
        url_repository: 'test_URL',
        department_id: 1001,
        user_id: 1001
      }
    ], {})

    await queryInterface.bulkInsert('decrees_categories', [
      {
        name: 'Otorga',
      },
      {
        name: 'Entreguese',
      }
    ], {})

  },

};
