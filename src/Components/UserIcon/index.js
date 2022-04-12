import { useEffect, useRef } from 'react'
import { UserIcon, CamIcon } from './icon'

const Index = () => {
  const avatar = useRef(null)

  // Set Mouse Events
  const mousedown = (event) => {
    // Get Mouse Initial Position
    // startX.current = event.pageX - avatar.current.offsetLeft
    const actionsMenu = avatar.current.childNodes[2]
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
    // console.log()
  }

  // Add Mouse Events
  useEffect(() => {
    console.log(avatar.current.childNodes[2])
    const avatarContainer = avatar.current
    avatarContainer.addEventListener('mousedown', mousedown)

    return () => {
      avatarContainer.removeEventListener('mousedown', mousedown)
    }
  })

  return (
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
        <button className='actionsBtn'>Upload Photo</button>
      </div>
      {/* <input type="file" accept="image/gif,image/jpeg,image/jpg,image/png" style="display: none;"></input> */}
      {/* <input
        className='avatarInput'
        type='file'
        id='avatar'
        name='avatar'
        accept='image/png, image/jpeg'
      /> */}
    </div>
  )
}

export default Index
