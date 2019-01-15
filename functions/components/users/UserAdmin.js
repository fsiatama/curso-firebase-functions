const { Email } = require('../helpers/EmailHelper.js')
const { HubSpotHelper } = require('../helpers/HubSpotHelper.js')
const {
  plantillaEmailBienvenida,
  plantillaEmailDespedida
} = require('../helpers/PlantillasEmail.js')
const admin = require('firebase-admin')

class UserAdmin {
  registrarEmailsUsuario (nombres, email) {
    console.log('se registra email')
    return admin
      .firestore()
      .collection('emailsusuarios')
      .add({
        nombres: nombres,
        email: email
      })
  }

  enviarEmailBienvenida (nombres, email) {
    const to = email
    const from = 'info@blogeek.com'

    const textHtml = plantillaEmailBienvenida(nombres)

    const objEmail = new Email()

    return objEmail.sendEmail(
      from,
      to,
      '',
      'Video Blogeek - Bienvenido a la Comunidad de Videos Geek',
      textHtml
    )
  }

  enviarEmailDespedida (nombres, email) {
    const to = email
    const from = 'info@blogeek.com'

    const textHtml = plantillaEmailDespedida(nombres)

    const objEmail = new Email()

    return objEmail.sendEmail(
      from,
      to,
      '',
      'Video Blogeek - Espera!! no te vayas de la Comunidad de Videos Geek',
      textHtml
    )
  }

  sincronizarCRM (nombres, apellidos, email) {
    const hubSpot = new HubSpotHelper()
    return hubSpot.crearUsuario(nombres, apellidos, email)
  }
}

exports.UserAdmin = UserAdmin