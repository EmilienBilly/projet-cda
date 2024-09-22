import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class List extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare title: string

  @column()
  declare board_id: number
}
