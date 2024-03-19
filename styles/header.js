'use client'

import NextLink from 'next/link'
import styled from 'styled-components'

export const Container = styled.header`
  align-items: center;
  backdrop-filter: blur(12px);
  background-color: rgba(29, 27, 27, 0.4);
  border-radius: 1rem;
  bottom: 3rem;
  display: flex;
  justify-content: space-between;
  left: 50%;
  padding: 0 3rem;
  padding: 0.75rem 2rem;
  position: fixed;
  transform: translateX(-50%);
  width: calc(var(--screen-width) - 5rem);
  z-index: 5;
`

export const Navigation = styled.nav`
  bottom: 0;
  height: 100%;
  width: max-content;
`

export const List = styled.ul`
  align-items: center;
  border-radius: 1rem;
  display: flex;
  font-size: 0.875rem;
  text-align: center;
  width: 100%;
  z-index: 15;
`

export const Item = styled.li`
  list-style: none;
  margin-right: 1.25rem;

  &:last-of-type {
    margin-right: 0;
  }
`

export const Link = styled(NextLink)`
  color: #fff;
  text-decoration: none;
`
