import React from 'react';
import './Button.scss';
import { Link } from 'react-router-dom'

const STYLES = ['btn--primary', 'btn--outline', 'btn--center']
const SIZES = ['btn--medium', 'btn--large']

const Button = ({ path, children, type, onClick, buttonStyle, buttonSize }) => {

  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

  return (
    <Link to={path} className='btn__mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  )

};

export default Button;