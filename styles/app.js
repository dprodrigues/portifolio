'use client'

import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  padding: 4rem 4rem 12rem;
  width: 100%;

  @media only screen and (max-width: 768px) {
    font-size: 3rem;
    line-height: 3rem;
  }
`

export const Subtitle = styled.p`
  color: var(--color-text);
  font-family: var(--font-title);
`

export const Title = styled.h1`
  color: var(--color-text);
  font-family: var(--font-title);
  font-size: 6rem;
  font-weight: 500;
  line-height: 5.5rem;
  letter-spacing: -2px;
  margin-left: -6px;
`
