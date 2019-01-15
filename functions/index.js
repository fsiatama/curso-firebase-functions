const functions = require('firebase-functions')
const admin = require('firebase-admin')
const userController = require('./components/users/UserController.js')
const notificacionController = require('./components/notifications/NotificationsController.js')
const postsController = require('./components/posts/PostsController.js')
const errorController = require('./components/errors/ErrorController.js')
const analyticsController = require('./components/analytics/AnalyticsController.js')

admin.initializeApp()
admin.firestore().settings({ timestampsInSnapshots: true })


/**
 * Configuracion de Variables de entorno
 */
// firebase functions:config:set configuration.email="XXXX" configuration.password="XXXXXX"
// firebase functions:config:set configuration.claveapihubspot="XXXX"

/********** para el ambiente de pruebas se copian las variables de entorno a runtimeconfig.json */
// firebase functions:config:get | ac .runtimeconfig.json

/** iniciar ambiente de pruebas (Ejecutar funciones de manera local) */
// firebase functions:shell
/***** en la shell de firebase ejecutar las funciones una a una para probar */
// creacionUsuario({"displayName" : "juan guillermo", "email" : "fas0980@gmail.com"})


exports.creacionUsuario = functions.auth
  .user()
  .onCreate(userController.usuarioCreacionController)

exports.eliminacionUsuario = functions.auth
  .user()
  .onDelete(userController.usuarioEliminadoController)

exports.creacionUsuarioCRM = functions.auth
  .user()
  .onCreate(userController.creacionUsuarioCRM)