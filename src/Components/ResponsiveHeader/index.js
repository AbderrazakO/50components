import { useState } from 'react'
import { MenuIcon } from './icons'

const ResponsiveNavBar = ({ logo, navBar }) => {
  const [state, setState] = useState(false)

  const root = document.querySelector('#root')
  const showResponsive = () => {
    if (state) {
      setState(false)
      root.style.height = 'auto'
    } else {
      setState(true)
      root.style.height = '100vh'
    }
  }

  // console.log(state)

  return (
    <header>
      {logo}
      <input type='checkbox' name='showNav' id='showNav' />
      <label
        htmlFor='showNav'
        className='menuBtn'
        onClick={() => {
          showResponsive()
        }}
      >
        <MenuIcon />
      </label>
      <div className='handleNavigator'>{navBar}</div>
    </header>
  )
}

export default ResponsiveNavBar
