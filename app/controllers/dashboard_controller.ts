import type { HttpContext } from '@adonisjs/core/http'

export default class DashboardController {
  view({ inertia }: HttpContext) {
    return inertia.render('dashboard')
  }
}
