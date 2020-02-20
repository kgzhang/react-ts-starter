import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import {ClassNameProp} from '../../types';



export type ButtonType = 'contained' | 'outlined' | 'text';
export type ButtonColor = 'primary' | 'accent' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';


export type ButtonProps = Readonly<{
  label: string;
  typed?: ButtonType;
  color?: ButtonColor;
  size?: ButtonSize;
  disabled?: boolean;
}> & Pick<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> & Partial<
Pick<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onPointerDown' | 'onPointerUp' | 'onPointerOver' | 'onPointerLeave'>
> & ClassNameProp;



const Wrapper = styled.button<Pick<ButtonProps, 'typed' | 'size' | 'disabled'> & { isPointerOver?: boolean, isPointerDown?: boolean }>`

    display: inline-flex;
    flex-flow: row nowrap;
    justify-content: center;


    border-radius: var(--rounded);
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: var(--tracking-wide);
    font-weight: var(--font-normal);
    background-color: var(--gray-100);
    color: var(--primary-600);
    height: 3rem;

    ${props => props.color === 'primary' && css`
        background-color: var(--primary-600);
        color: var(--white);
    `}

    ${props => props.typed === 'contained' && css`
        border-style: none;
    `}


    ${props => props.size=== 'sm' && css`
        font-size: var(--text-xs);
        padding: 0 var(--spacing-2);
    `}


    ${props => props.size=== 'md' && css`
        font-size: var(--text-md);
        padding: var(--spacing-2) var(--spacing-4);
    `}


    ${props => props.size=== 'lg' && css`
        font-size: var(--text-lg);
        padding: var(--spacing-4) var(--spacing-8);
    `}


    ${props => props.disabled && css`
        color: var(--gray-300);
    `}


    ${props => props.isPointerOver && css`
        box-shadow: var(--shadow);
    `}
`;


const Label = styled.span`
    text-align: center;
`; 


export const Button: React.FC<ButtonProps> = ({
  label,
  typed,
  color,
  size,
  disabled,
  className,
  onClick,
  onPointerDown,
  onPointerLeave,
  onPointerOver,
  onPointerUp
}) => {
  const [ isPointerOver, setIsPointerOver ] = useState<boolean>(false);
  const [ isPointerDown, setIsPointerDown ] = useState<boolean>(false);


  const handlePointerOver: React.PointerEventHandler<HTMLButtonElement> = (e) => {
    setIsPointerOver(true);

    if (onPointerOver) {  
      onPointerOver(e);
    }
  };
  const handlePointerLeave : React.PointerEventHandler<HTMLButtonElement> = (e) => {
    setIsPointerOver(false);

    if (onPointerLeave) {
      onPointerLeave(e);
    }
  };
  const handlePointerDown : React.PointerEventHandler<HTMLButtonElement> = (e) => {
    setIsPointerDown(true);
    if (onPointerDown) {
      onPointerDown(e);
    }
  };
  const handlePointerUp: React.PointerEventHandler<HTMLButtonElement> = (e) => {
    setIsPointerDown(false);
    if (onPointerUp) {
      onPointerUp(e);
    }
  };

  return (
    <Wrapper
      typed={typed}
      size={size}
      color={color}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerOver={handlePointerOver}
      onPointerLeave={handlePointerLeave}
      isPointerOver={isPointerOver}
      isPointerDown={isPointerDown}
      disabled={disabled}
      className={className}
      onClick={onClick}
    >
      <Label>{label}</Label>
    </Wrapper>
  );
};


Button.defaultProps = {
  color: 'primary',
  size: 'md',
  typed: 'contained'
};

export default Button;