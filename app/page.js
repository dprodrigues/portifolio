import { Container, Subtitle, Title } from '@/styles/app'

export default function Page() {
  return (
    <Container>
      <div>
        <Subtitle>Hi, my name is</Subtitle>

        <Title>
          DANIEL
          <br />
          RODRIGUES
        </Title>

        <Subtitle style={{ textAlign: 'right' }}>
          and I am a Software Engineer
        </Subtitle>
      </div>
    </Container>
  )
}
