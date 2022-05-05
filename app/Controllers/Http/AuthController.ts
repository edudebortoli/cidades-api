import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { rules, schema } from '@ioc:Adonis/Core/Validator'
import User from 'App/Models/User'

export default class AuthController {
  public async login({ auth, request, response }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')

    try {
      const user = await User.findBy('email', email)
      const token = await auth.use('api').attempt(email, password, { expiresIn: '2days' })
      return { token, user }
    } catch {
      return response.badRequest('Invalid credentials')
    }
  }

  public async register({ request, response }: HttpContextContract) {
    try {
      const validations = await schema.create({
        email: schema.string({}, [
          rules.email(),
          rules.unique({ table: 'users', column: 'email' }),
        ]),
        fullname: schema.string({}, [rules.unique({ table: 'users', column: 'fullname' })]),
        password: schema.string({}),
      })
      const data = await request.validate({ schema: validations })
      const user = await User.create(data)
      return response.created(user)
    } catch {
      return response.badRequest('Usuário ou Email já registrado')
    }
  }
}
