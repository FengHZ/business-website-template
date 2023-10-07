import React from 'react'

const Button = ({ styles }) => {
  const handleClick = () => {
    window.open('https://chat.jarvis73.com', '_blank')
  }

  return (
    <button
      type='button'
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}
      onClick={handleClick}
    >
      Get Started
    </button>
  )
}

export default Button
