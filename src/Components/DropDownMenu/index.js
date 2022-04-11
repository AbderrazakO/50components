import { useState, useRef, useEffect } from 'react'

const DropBtn = () => {
  const [isClicked, setIsClicked] = useState(false)
  const dropDown = useRef(null)

  useEffect(() => {
    const container = dropDown.current
    if (isClicked) {
      const itemsList = dropDown.current.childNodes
      container.style.height = `${55 * itemsList.length}px`
      for (let index = 0; index < itemsList.length; index++) {
        // console.log(itemsList[index])
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
    } else {
      const itemsList = dropDown.current.childNodes
      for (let index = 0; index < itemsList.length; index++) {
        // console.log(itemsList[index])
        itemsList[index].style.zIndex = `${99 + itemsList.length - index}`
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
      }
    }
  })

  const dropMenu = () => {
    console.log('Over')
    const itemsList = dropDown.current.childNodes
    for (let index = 0; index < itemsList.length; index++) {
      console.log(itemsList[index])
      itemsList[index].style.top = `${index * 45}px`
    }
    // dropDown.current.addEventListener('mouseout', () => {
    //   console.log('Out')
    //   const itemsList = dropDown.current.childNodes
    //   for (let index = 0; index < itemsList.length; index++) {
    //     console.log(itemsList[index])
    //     itemsList[index].style.top = `${45} px`
    //   }
    // })
  }

  return (
    <div
      className='dropDownBtn'
      ref={dropDown}
      // onClick={() => {
      //   isClicked ? setIsClicked(false) : setIsClicked(true)
      // }}
      onMouseOver={() => {
        setIsClicked(true)
      }}
      onMouseOut={() => {
        setIsClicked(false)
      }}
    >
      <div className='dropItem'>ENG</div>
      <div className='dropItem'>ENG</div>
      <div className='dropItem'>ENG</div>
      <div className='dropItem'>ENG</div>
      <div className='dropItem'>ENG</div>
    </div>
  )
}

export default DropBtn
