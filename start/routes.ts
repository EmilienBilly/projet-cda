/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

const LoginController = () => import('#controllers/auth/auth_controller')

router.on('/inertia').renderInertia('home', { version: 6 })

router.get('login', [LoginController, 'show'])
