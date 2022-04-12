import { useState } from 'react'
import { MinusIcon, ShopIcon, CloseIcon, PlusIcon } from './icon'

const ShopButton = () => {
  const [bagDisplay, setBagDisplay] = useState('none')
  return (
    <div className='popUpContainer'>
      <div
        className='popUpButton'
        onClick={() => {
          setBagDisplay('flex')
        }}
      >
        <ShopIcon />
      </div>

      <div className='bagContainer' style={{ display: bagDisplay }}>
        <div className='bagWrapper'>
          <div className='bagHeader'>
            <div className='bagTitle'>Untitled</div>
            <div
              className='closeBtn'
              onClick={() => {
                setBagDisplay('none')
              }}
            >
              <CloseIcon />
            </div>
          </div>
          <div className='bagMain'>
            Hello Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Provident et assumenda animi consectetur debitis quasi nostrum
            fugiat dolore nam nisi.
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopButton
