import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'tasks'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('title').notNullable()
      table.timestamp('created_at')
      table.timestamp('modified_at')
      table.text('description')
      table.integer('status_id').notNullable().defaultTo(1) //TODO: créer la table task_statuses
      table.integer('created_by').notNullable()
      table.integer('assigned_to')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
