import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Cidade from './Cidade'

export default class Pais extends BaseModel {
  @hasMany(() => Cidade, { foreignKey: 'id_pais' })
  public cidades: HasMany<typeof Cidade>

  @column({ isPrimary: true })
  public id_pais: number

  @column()
  public nom_pais: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
