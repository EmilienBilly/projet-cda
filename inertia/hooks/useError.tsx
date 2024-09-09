import { usePage } from '@inertiajs/react'
import { SharedProps } from '@adonisjs/inertia/types'

export default function useError(id: string | undefined): string | undefined {
  const props = usePage<SharedProps>().props.flash

  if (!props.errors) {
    return undefined
  }

  if (!id) {
    return undefined
  }

  if (!props.errors[id]) {
    return undefined
  }

  return props.errors[id]
}