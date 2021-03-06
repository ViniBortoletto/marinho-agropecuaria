import styled from 'styled-components';

export const ButtonPill = styled.button`
  height: ${(props) => (props.mini ? '2.5rem' : '3rem')};
  padding: 0 var(--m_md);

  border-radius: 2rem;
  border: ${(props) =>
    props.transparent ? '1px solid var(--l_green)' : 'none'};

  font-size: ${(props) => (props.mini ? 'var(--fz_sm)' : 'var(--fz_md)')};

  color: ${(props) => (props.transparent ? 'var(--l_green)' : 'var(--l_gold)')};
  background-color: ${(props) =>
    props.transparent ? 'transparent' : 'var(--l_green)'};

  background-color: ${(props) => props.disabled && 'darkgray'};

  transition: 0.2s ease-out;
  &:hover {
    filter: ${(props) => !props.transparent && 'brightness(90%)'};
  }
`;

export const ButtonSquare = styled(ButtonPill)`
  border-radius: var(--br_sm);
`;

export const ButtonBullet = styled(ButtonPill)`
  width: 100%;
  border-radius: var(--br_sm) 2rem 2rem var(--br_sm);

  text-align: right;
  font-weight: bold;
  padding-right: var(--m_md);
`;
