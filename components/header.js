import { Container, Navigation, List, Item, Link } from '@/styles/header'

export default function Header() {
  return (
    <Container>
      <div />

      <Navigation>
        <List>
          <Item>
            <Link href="/">Home</Link>
          </Item>

          <Item>
            <Link href="/about">About</Link>
          </Item>

          <Item>
            <Link href="/contact">Contact</Link>
          </Item>
        </List>
      </Navigation>

      <div />
    </Container>
  )
}
