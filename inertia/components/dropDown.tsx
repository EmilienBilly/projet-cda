import styled from 'styled-components'

export default function DropDownButton() {
  const DropDown = styled.div`
    display: inline-block;
  `
  return (
    <>
      <DropDown>
        <button>Créer</button>
      </DropDown>
    </>
  )
}
