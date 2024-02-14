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
        created_at: new Date(), //1002
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
      {
        user_name: 'paula',
        name: 'Paula Figueroa',
        pass: 'joaquin27',
        profile_id: 1001
      }

     

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
        name: 'Sin Destinatario',
        repository: false,
        url_repository: '',
        department_id: 1001,
        user_id: 1001
      }
    ], {})

    await queryInterface.bulkInsert('decrees_categories', [
      {
        name: 'Revóquese',
      },
      {
        name: 'Rectifíquese',
      }
    ], {})

    

    // await queryInterface.bulkInsert('mail_references', [
    //   {
    //     name: 'Cuenta de agua',
    //   },
    //   {
    //     name: 'Cuenta de luz CGE'
    //   }
    // ], {})

    // await queryInterface.bulkInsert('job_titles', [
    //   {
    //     name: 'Administrador Municipal Parral',
    //   },
    //   {
    //     name: 'Funcionario SII'
    //   }
    // ], {})

  },

};
