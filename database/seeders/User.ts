import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        email: 'edudebortoli@icloud.com',
        password: '123456',
      },
      {
        email: 'outro@email.com',
        password: '654321',
      },
    ])
  }
}
