import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

import Estado from 'App/Models/Estado'

export default class EstadosController {
  public async index() {
    // const estados = await Estado.all()
    const estados = await Database.table('estados')
    return estados
  }
  public async store({ request, response }: HttpContextContract) {
    const body = request.only(['nom_estado'])
    const estado = await Estado.create(body)
    response.status(201)
    return estado
  }
  public async show({ params }: HttpContextContract) {
    const estado = await Estado.findOrFail(params.id)
    return estado
  }
  public async update({ params, request }: HttpContextContract) {
    const estado = await Estado.findOrFail(params.id)
    const body = request.only(['nom_estado'])
    estado.merge(body)
    await estado.save()
    return estado
  }
  public async destroy({ params }: HttpContextContract) {
    const estado = await Estado.findOrFail(params.id)
    estado.delete()
    return estado
  }
}
