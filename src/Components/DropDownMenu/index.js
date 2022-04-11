import { useState, useRef, useEffect } from 'react'

const DropBtn = () => {
  const [isHover, setIsHover] = useState(false)
  const dropDown = useRef(null)

  useEffect(() => {
    const dropContainer = dropDown.current // Set Container
    const itemsList = dropDown.current.childNodes // Get Items

    // On Hover
    if (isHover) {
      // Set container height with animation
      dropContainer.style.height = `${55 * itemsList.length}px`
      dropContainer.animate(
        [
          { height: `60px` }, // From
          { height: `${55 * itemsList.length}px` }, // To
        ],
        {
          duration: 300,
          easing: 'cubic-bezier(.5,.62,.68,.57)',
        }
      )

      //
      for (let index = 0; index < itemsList.length; index++) {
        // Drop Down
        const itemWidth = dropDown.current.childNodes[index].offsetWidth
        itemsList[index].style.top = `${index * 55}px`
        itemsList[index].style.width = `${250}px`
        itemsList[index].animate(
          [
            { top: `0px`, width: `${itemWidth}px` },
            { top: `${index * 55}px`, width: `${250}px` },
          ],
          {
            duration: 300,
            easing: 'cubic-bezier(.5,.62,.68,.57)',
          }
        )
      }
    }

    // Set default parametres
    else {
      // Set container height with animation
      dropContainer.style.height = `${60}px`
      dropContainer.animate(
        [
          { height: `${55 * itemsList.length}px` }, // From
          { height: `60px` }, // To
        ],
        {
          duration: 300,
          easing: 'cubic-bezier(.5,.62,.68,.57)',
        }
      )

      // Set Items Width and Position
      for (let index = 0; index < itemsList.length; index++) {
        // Set every new card behind last one
        itemsList[index].style.zIndex = `${99 + itemsList.length - index}`

        // Set Items Width and Position
        if (index < 3) {
          itemsList[index].style.top = `${index * 4}px`
          itemsList[index].style.width = `${250 - index * 10}px`
          itemsList[index].animate(
            [
              { top: `${index * 55}px`, width: `${250}px` }, // From
              { top: `0px`, width: `${250 - index * 10}px` }, // To
            ],
            {
              duration: 300,
              easing: 'cubic-bezier(.5,.62,.68,.57)',
            }
          )
        } else {
          itemsList[index].style.top = `${8}px`
          itemsList[index].style.width = `${230}px`
          itemsList[index].animate(
            [
              { top: `${index * 55}px`, width: `${250}px` },
              { top: `0px`, width: `${230}px` },
            ],
            {
              duration: 300,
              easing: 'cubic-bezier(.5,.62,.68,.57)',
            }
          )
        }

        // End
      }
    }

    // End
  })

  return (
    <div
      className='dropDownContainer'
      ref={dropDown}
      onMouseOver={() => {
        setIsHover(true)
      }}
      onMouseOut={() => {
        setIsHover(false)
      }}
    >
      <div className='dropItem'>Lorem, ipsum dolor.</div>
      <div className='dropItem'>Lorem, ipsum dolor.</div>
      <div className='dropItem'>Lorem, ipsum dolor.</div>
      <div className='dropItem'>Lorem, ipsum dolor.</div>
      <div className='dropItem'>Lorem, ipsum dolor.</div>
      <div className='dropItem'>Lorem, ipsum dolor.</div>
    </div>
  )
}

export default DropBtn
