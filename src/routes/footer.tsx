import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/footer')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/footer"!</div>
}
