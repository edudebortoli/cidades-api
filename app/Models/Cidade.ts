import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Estado from './Estado'
// import Estado from './Estado'

export default class Cidade extends BaseModel {
  @column({ isPrimary: true })
  public id_cidade: number

  @column()
  public nom_cidade: string

  @column()
  public id_ibge: number

  @column()
  public id_estado: number

  @belongsTo(() => Estado, { localKey: 'id_estado', foreignKey: 'id_estado' })
  public estado: BelongsTo<typeof Estado>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
