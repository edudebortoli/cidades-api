import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Cidade from './Cidade'

export default class Estado extends BaseModel {
  @hasMany(() => Cidade, { foreignKey: 'id_estado' })
  public cidades: HasMany<typeof Cidade>

  @column({ isPrimary: true })
  public id_estado: number

  @column()
  public nom_estado: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
