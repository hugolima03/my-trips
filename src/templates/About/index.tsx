import React from 'react'

import * as S from './styles'

import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'

import LinkWrapper from '../../components/LinkWrapper'

const AboutTemplate = () => {
  return (
    <S.Content>
      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="Home" />
      </LinkWrapper>

      <S.Heading>My Trips</S.Heading>

      <S.Body>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quis
          architecto veniam. Voluptas commodi maiores modi quod facilis
          quisquam, possimus explicabo nisi, qui cupiditate laborum assumenda
          pariatur repudiandae quos similique!
        </p>
      </S.Body>
    </S.Content>
  )
}

export default AboutTemplate
