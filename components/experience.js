import styled from 'styled-components'

const Container = styled.div`
  border-top: 1px solid #f4f0f030;
  padding-block: 1rem;
  width: 100%;

  &:first-of-type {
    border-top: none;
  }
`

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
`

const Company = styled.p``

const Description = styled.p``

const Period = styled.p`
  font-size: 0.875rem;
  font-weight: 300;
  margin-bottom: 0.75rem;
`

export default function Experience({
  title,
  company,
  start,
  end,
  description,
}) {
  return (
    <Container>
      <Title>{title}</Title>

      <Company>{company}</Company>

      <Period>
        {start} - {end}
      </Period>

      <Description>{description}</Description>
    </Container>
  )
}
