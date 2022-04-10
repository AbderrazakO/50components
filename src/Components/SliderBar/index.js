import { useState, useRef, useEffect, useMemo } from 'react'
import { LeftArrowIcon, RightArrowIcon } from './icons'

const Index = () => {
  const [isDown, setIsDown] = useState(false) // Mouse Down Status
  const sliderWrapper = useRef(null) // Get Wrapper Div
  const startX = useRef(0) // Get Mouse Down Position
  const endX = useRef(0) // Get Mouse On Mouve Position

  // Set Responsive Cards Width
  useEffect(() => {
    const slider = sliderWrapper.current
    const containerWidth = slider.parentNode.offsetWidth // Get Container Width
    const cardWidth = slider.childNodes[0].offsetWidth // Get Card Width

    //
    const cardShowed = Math.floor(containerWidth / cardWidth)
    const newCardWidth = (containerWidth - (cardShowed + 1) * 10) / cardShowed
    for (let i = 0; i < slider.childNodes.length; i++) {
      slider.childNodes[i].style.width = `${newCardWidth}px`
      slider.childNodes[i].style.height = `${newCardWidth}px`
    }
    // console.log(cardShowed, containerWidth, cardWidth, slider.childNodes.length)
  })

  // Button Swip
  const dragWithButton = (direction) => {
    const slider = sliderWrapper.current
    const sliderWidth = sliderWrapper.current.offsetWidth
    const containerWidth = slider.parentNode.offsetWidth // Get Container Width
    const cardWidth = slider.childNodes[0].offsetWidth // Get Card Width

    // console.log(sliderWrapper.current.offsetLeft, wrapperWidth)
    // slider.style.left = `${endX.current - startX.current}px` // Move Slider
    const sliderLeft = slider.offsetLeft // Get Slider Wrapper Left Position
    if (
      direction === 'right' &&
      Math.abs(sliderLeft) < sliderWidth - containerWidth
      // && sliderLeft - cardWidth - 10 < sliderWidth - containerWidth
    ) {
      slider.style.left = `${sliderLeft - cardWidth - 10}px` // Move Slider
    } else if (
      direction === 'left' &&
      Math.abs(sliderLeft) > 0
      // && sliderLeft + cardWidth + 10 > 0
    ) {
      slider.style.left = `${sliderLeft + cardWidth + 10}px` // Move Slider
    } else {
      return
    }
    // const max = (obj.length - Math.floor(ariaWidth / cardWidth)) * cardWidth
    // // const min =
    // console.log(boxWidth)
    // if (direction === 'right' && Math.abs(ariaLeft) < max) {
    //   // && Math.abs(ariaLeft) < (obj.length - 4) * 260
    //   setAriaLeft(ariaLeft - cardWidth)
    //   // return console.log('left', ariaLeft)
    // } else if (direction === 'left' && Math.abs(ariaLeft) > 0) {
    //   // && Math.abs(ariaLeft) > 0
    //   setAriaLeft(ariaLeft + cardWidth)
    //   // return console.log('right')
    // }
  }

  // Set Mouse Events
  const mousedown = (event) => {
    // Get Mouse Initial Position
    startX.current = event.pageX - sliderWrapper.current.offsetLeft
    setIsDown(true)
  }

  const mouseleave = (event) => {
    // Do None
    setIsDown(false)
  }

  const mouseup = (event) => {
    setIsDown(false)
    const slider = sliderWrapper.current
    const sliderWidth = sliderWrapper.current.offsetWidth
    const slideLeft = slider.offsetLeft
    const containerWidth = slider.parentNode.offsetWidth // Get Container Width
    const cardWidth = slider.childNodes[0].offsetWidth // Get Card Width

    const newPosition = Math.floor(slideLeft / cardWidth) * (cardWidth + 10)
    if (Math.abs(newPosition) > sliderWidth - containerWidth) return
    slider.style.left = `${newPosition}px`
    // console.log(newPosition)
  }

  const mousemove = (event) => {
    event.preventDefault()
    const slider = sliderWrapper.current
    //
    const containerWidth = slider.parentNode.offsetWidth // Get Container Width
    const sliderWidth = slider.offsetWidth // Get Slider Wrapper Width
    // const sliderLeft = slider.offsetLeft // Get Slider Wrapper Left Position
    endX.current = event.pageX // Set Cursor Position
    // console.log(sliderLeft, sliderWidth - containerWidth)

    if (!isDown) return
    // console.log(sliderLeft, sliderWidth - containerWidth)
    if (endX.current - startX.current > 0) {
      slider.style.left = `0px`
    } else if (
      Math.abs(endX.current - startX.current) >
      sliderWidth - containerWidth
    ) {
      return
    } else {
      slider.style.left = `${endX.current - startX.current}px` // Move Slider
    }
  }

  // Add Mouse Events
  useEffect(() => {
    const element = sliderWrapper.current
    element.addEventListener('mousedown', mousedown)
    element.addEventListener('mousemove', mousemove)
    element.addEventListener('mouseup', mouseup)
    element.addEventListener('mouseleave', mouseleave)

    return () => {
      element.removeEventListener('mousedown', mousedown)
      element.removeEventListener('mousemove', mousemove)
      element.removeEventListener('mouseup', mouseup)
      element.removeEventListener('mouseleave', mouseleave)
    }
  })

  // Return Our Slide
  return (
    <div className='slider'>
      <div className='sliderHeader'>
        <div className='sliderTitle'>Untitled</div>
        <a className='sliderMore'>See All</a>
      </div>
      <div className='sliderContainer'>
        <button
          className='sliderLeftBtn'
          onClick={() => {
            dragWithButton('left')
          }}
        >
          <LeftArrowIcon />
        </button>
        <div
          ref={sliderWrapper}
          onMouseDown={() => {
            setIsDown(true)
          }}
          className='sliderWrapper'
        >
          <div className='card'>
            <div className='cardInfo'>kjscj</div>
          </div>
          <div className='card'></div>
          <div className='card'></div>
          <div className='card'></div>
          <div className='card'></div>
          <div className='card'></div>
          <div className='card'></div>
        </div>
        <button
          className='sliderRightBtn'
          onClick={() => {
            dragWithButton('right')
          }}
        >
          <RightArrowIcon />
        </button>
      </div>
    </div>
  )
}

export default Index
