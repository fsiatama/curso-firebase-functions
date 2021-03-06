const { UserAdmin } = require('./UserAdmin.js')

exports.usuarioCreacionController = usuario => {
  const usuarioAdmin = new UserAdmin()

  return usuarioAdmin
    .enviarEmailBienvenida(usuario.displayName, usuario.email)
    .then(() => {
      return usuarioAdmin.registrarEmailsUsuario(
        usuario.displayName,
        usuario.email
      )
    })
    .catch(error => {
      console.error(`Error en la creación de usuario => ${error}`)
    })
}

exports.usuarioEliminadoController = usuario => {
  const usuarioAdmin = new UserAdmin()

  return usuarioAdmin
    .enviarEmailDespedida(usuario.displayName, usuario.email)
    .catch(error => {
      console.error(`Error en la creación de usuario => ${error}`)
    })
}

exports.creacionUsuarioCRM = usuario => {
  const usuarioAdmin = new UserAdmin()
  return usuarioAdmin.sincronizarCRM(
    usuario.displayName,
    usuario.displayName,
    usuario.email
  )
}