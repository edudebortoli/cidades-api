import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Cidades extends BaseSchema {
  protected tableName = 'cidades'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_cidade')
      table.string('nom_cidade')
      table.integer('id_ibge')
      table.integer('id_estado').unsigned().references('estados.id_estado').onDelete('CASCADE') //se o estado for deletado, todas cidades irão tambem
      table.integer('id_pais').unsigned().references('paises.id_pais').onDelete('CASCADE')

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
