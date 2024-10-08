import { Head, usePage } from '@inertiajs/react'
import CreateProjectForm from '~/components/CreateProjectForm'
import { SharedProps } from '@adonisjs/inertia/types'
import styled from 'styled-components'
import { Flex } from '~/components/utils/Flex'

export default function CreateProject() {
  const flash = usePage<SharedProps>().props.flash

  const Flash = styled.div`
    background-color: seagreen;
    padding: 10px 10px;
    color: #f7f8fa;
  `

  return (
    <>
      <Head title="Create project" />
      <div className="container">
        <Flex $flxCol={true} $center={true}>
          <div className="title">Nouveau projet</div>
          {flash.success && <Flash>{flash.success}</Flash>}
          <CreateProjectForm />
        </Flex>
      </div>
    </>
  )
}
