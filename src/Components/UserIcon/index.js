import { useEffect, useRef, useState } from 'react'
import { UserIcon, CamIcon } from './icon'
import DragArea from './DragArea'

const Index = () => {
  const [mouseOver, setMouseOver] = useState(false)
  const [inputValue, setInputValue] = useState('') // '' is the initial state value
  const avatar = useRef(null)
  // console.log(input)

  // Set Mouse Events
  const focusout = () => {
    const actionsMenu = avatar.current.childNodes[2]
    if (!mouseOver) {
      actionsMenu.style.display = 'none'
    }
  }

  const mousedown = (event) => {
    if (mouseOver) return
    const actionsMenu = avatar.current.childNodes[2]
    if (
      actionsMenu.style.display === '' ||
      actionsMenu.style.display === 'none'
    ) {
      actionsMenu.style.display = 'flex'
      actionsMenu.animate(
        [
          { display: 'none' }, // From
          { display: 'flex' }, // To
        ],
        {
          duration: 300,
          easing: 'cubic-bezier(.5,.62,.68,.57)',
        }
      )
      const xPosition = event.pageX - avatar.current.offsetLeft
      const yPosition = event.pageY - avatar.current.offsetTop
      actionsMenu.style.left = `${xPosition}px`
      actionsMenu.style.top = `${yPosition}px`
      // setMouseOver(false)
    }

    //
    else {
      actionsMenu.style.display = 'none'
    }
  }

  // Add Mouse Events
  useEffect(() => {
    // console.log(avatar.current.childNodes[2])
    const actionsMenu = avatar.current.childNodes[2]
    const avatarContainer = avatar.current
    avatarContainer.addEventListener('mousedown', mousedown)
    avatarContainer.addEventListener('focusout', focusout)
    actionsMenu.addEventListener('mousedown', () => {
      setMouseOver(true)
    })
    actionsMenu.addEventListener('mouseup', () => {
      setMouseOver(false)
    })

    return () => {
      avatarContainer.removeEventListener('mousedown', mousedown)
      avatarContainer.removeEventListener('focusout', focusout)
      actionsMenu.removeEventListener('mousedown', () => {
        setMouseOver(true)
      })
      actionsMenu.removeEventListener('mouseup', () => {
        setMouseOver(false)
      })
    }
  })

  //
  useEffect(() => {
    console.log(inputValue)
    if (inputValue) {
      const actionsMenu = avatar.current.childNodes[2]
      actionsMenu.style.display = 'none'
    }
  }, [inputValue])

  return (
    <>
      <div ref={avatar} className='avatarContainer'>
        <div className='userAvatar'>
          <UserIcon />
        </div>
        <button className='avatarWrapper'>
          <CamIcon />
          <h1>ADD PROFILE PHOTO</h1>
        </button>
        <div className='actionsMenu'>
          <button className='actionsBtn'>Take Photo</button>
          <label htmlFor='uploadAvatar' className='actionsBtn'>
            Upload Photo
          </label>
          <input
            value={inputValue}
            onInput={(e) => setInputValue(e.target.value)}
            type='file'
            id='uploadAvatar'
            accept='image/gif,image/jpeg,image/jpg,image/png'
          />
        </div>
      </div>
      {inputValue ? <DragArea src={inputValue} /> : <></>}
      {/* <DragArea /> */}
    </>
  )
}

export default Index
