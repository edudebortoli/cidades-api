import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Paises extends BaseSchema {
  protected tableName = 'paises'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_pais').primary()
      table.string('nom_pais')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
