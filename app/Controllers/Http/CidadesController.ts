import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Cidade from 'App/Models/Cidade'
import Estado from 'App/Models/Estado'
import Paises from 'App/Models/Pais'

export default class CidadesController {
  public async index() {
    // const cidades = await Cidade.all()
    const cidades = await Database.query()
      .select(
        'cidades.id_cidade',
        'cidades.nom_cidade',
        'cidades.id_ibge',
        'estados.id_estado',
        'estados.nom_estado',
        'paises.id_pais',
        'paises.nom_pais',
        'cidades.created_at',
        'cidades.updated_at'
      )
      .from('cidades')
      .innerJoin('estados', 'cidades.id_estado', 'estados.id_estado')
      .innerJoin('paises', 'cidades.id_pais', 'paises.id_pais')
    return {
      message: 'listando todas cidades',
      cidades: cidades,
    }
  }
  public async store({ request, response }: HttpContextContract) {
    const body = request.body()
    const cidade = await Cidade.create(body)
    cidade.nom_cidade = body.nom_cidade
    const estado = await Estado.findOrFail(body.id_estado)
    cidade.id_estado = estado.id_estado
    response.status(201)

    return {
      message: 'cidade Criada',
      data: cidade,
    }
  }
  public async show({ params }: HttpContextContract) {
    const cidade = await Cidade.findOrFail(params.id)
    return {
      message: 'cidade encontrada',
      cidade: cidade,
    }
  }
  public async destroy({ params }: HttpContextContract) {
    const cidade = await Cidade.findOrFail(params.id)
    cidade.delete()
    return {
      message: 'cidade deletada',
      cidade: cidade,
    }
  }
  public async update({ params, request }: HttpContextContract) {
    const body = request.body()
    const cidade = await Cidade.findOrFail(params.id)
    if (body.nom_cidade) {
      cidade.nom_cidade = body.nom_cidade
    }
    if (body.id_ibge) {
      cidade.id_ibge = body.id_ibge
    }
    if (body.id_estado) {
      cidade.id_estado = body.id_estado
    }
    if (body.id_pais) {
      try {
        Paises.findOrFail(body.id_pais)
        cidade.id_pais = body.id_pais
      } catch {
        return { message: 'pais não existe' }
      }
    }
    cidade.save()
    return {
      message: 'cidade alterada',
      cidade: cidade,
    }
  }
}
