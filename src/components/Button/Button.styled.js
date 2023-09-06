import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { HiArrowNarrowLeft } from 'react-icons/hi';

export const Button = styled.button`
display: inline-flex;;
border: none;
background: transparent;
cursor: pointer;
min-width: 350px;

`;

export const ButtonLink = styled(Link)`
display: flex;
justify-content: space-around;
align-items: center;
gap: 5px;
font-size: 18px;
font-weight: 500;
color: #301934;
transition: color 250ms ease-in-out;
text-shadow: 0 1px 0 rgba(19, 74, 70, 0.4);

  &:hover {
    color: #FFFFFF;
  }
`;