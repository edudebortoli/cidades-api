import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

import Estado from 'App/Models/Estado'

export default class EstadosController {
  public async index() {
    // const estados = await Estado.all()
    const estados = await Database.table('estados')
    return {
      message: 'Estados listados',
      estados: estados,
    }
  }
  public async store({ request, response }: HttpContextContract) {
    const body = request.body()
    const estado = await Estado.create(body)
    response.status(201)
    return {
      message: 'Estado Criado',
      estado: estado,
    }
  }
  public async show({ params }: HttpContextContract) {
    const estado = await Estado.findOrFail(params.id)

    return {
      estado: estado,
    }
  }
  public async destroy({ params }: HttpContextContract) {
    const estado = await Estado.findOrFail(params.id)
    estado.delete()
    return {
      message: 'estado deletado',
      estado: estado,
    }
  }
  public async update({ params, request }: HttpContextContract) {
    const body = request.body()
    const estado = await Estado.findOrFail(params.id)
    estado.nom_estado = body.nom_estado
    estado.save()
    return {
      message: 'estado alterado',
      estado: estado,
    }
  }
}
