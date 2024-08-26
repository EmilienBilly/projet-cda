import { useForm } from '@inertiajs/react'
import styled from 'styled-components'
import { Flex } from '~/components/utils/Flex'
import { useProjectContext } from '~/hooks/useProject'

const Modal = styled.div`
  background-color: #f7f8fa;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  gap: 16px;

  input {
    padding: 6px;
    font-family: inherit;
  }

  textarea {
    padding: 6px;
    font-family: inherit;
  }
`
export default function CreateBoardModal() {
  const { selectedProject } = useProjectContext()
  const { data, setData, post, processing } = useForm({
    title: '',
    description: '',
    projectId: selectedProject?.id,
  })

  function submit(event: { preventDefault: () => void }) {
    event.preventDefault()
    post('/create-board')
  }

  return (
    <>
      <Modal>
        <h2>Nouveau projet</h2>
        <Form onSubmit={submit}>
          <Flex $flxCol>
            <label htmlFor="title">Titre du projet</label>
            <input
              id="title"
              type="text"
              value={data.title}
              onChange={(e) => setData('title', e.target.value)}
            />
          </Flex>
          <Flex $flxCol>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              value={data.description}
              onChange={(e) => setData('description', e.target.value)}
            />
          </Flex>
          <button type="submit" disabled={processing}>
            Créer
          </button>
        </Form>
      </Modal>
    </>
  )
}