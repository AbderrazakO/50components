import React from 'react'
import { UserIcon } from './icon'

const Index = () => {
  return (
    <div className='userAvatarWrapper'>
      <UserIcon />
      <input
        type='file'
        id='avatar'
        name='avatar'
        accept='image/png, image/jpeg'
      />
    </div>
  )
}

export default Index
