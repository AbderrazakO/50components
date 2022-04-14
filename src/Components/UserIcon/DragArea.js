import { useEffect, useRef, useState } from 'react'

const DragArea = ({ src }) => {
  const [inAction, setInAction] = useState(false)
  const box = useRef(null)

  //
  const mousedown = (event) => {
    setInAction(true)
    const editBox = box.current
    const boxWidth = editBox.offsetWidth
    const boxHeight = editBox.offsetHeight
    const editTool = editBox.childNodes[0]
    const editToolWidth = editTool.offsetWidth
    const editToolHeight = editTool.offsetHeight
    const xPosition = event.pageX - editBox.offsetLeft
    const yPosition = event.pageY - editBox.offsetTop
    const cursorX = xPosition - editToolWidth / 2
    const cursorY = yPosition - editToolHeight / 2

    // console.log([yPosition, cursorY, editToolHeight / 2])
    //
    if (cursorX >= 0 && cursorX <= boxWidth - editToolWidth) {
      editTool.style.left = `${cursorX}px`
    } else if (cursorX < 0) {
      editTool.style.left = `${0}px`
    } else if (cursorX > boxWidth - editToolWidth) {
      editTool.style.left = `${boxWidth - editToolWidth}px`
    }

    // console.log([cursorY, 0, editToolHeight, editToolHeight - cursorY])
    if (cursorY >= 0 && cursorY <= boxHeight - editToolHeight) {
      editTool.style.top = `${cursorY}px`
    } else if (cursorY < 0) {
      editTool.style.top = `${0}px`
    } else if (cursorY > boxHeight - editToolHeight) {
      editTool.style.top = `${boxHeight - editToolHeight}px`
    }

    //
  }

  const mousemove = (event) => {
    const editBox = box.current
    const boxWidth = editBox.offsetWidth
    const boxHeight = editBox.offsetHeight
    const editTool = editBox.childNodes[0]
    const editToolWidth = editTool.offsetWidth
    const editToolHeight = editTool.offsetHeight
    const xPosition = event.pageX - editBox.offsetLeft
    const yPosition = event.pageY - editBox.offsetTop
    const cursorX = xPosition - editToolWidth / 2
    const cursorY = yPosition //+ editToolHeight / 2

    if (!inAction) return
    // Drag X
    if (cursorX >= 0 && cursorX <= boxWidth - editToolWidth) {
      editTool.style.left = `${cursorX}px`
    } else if (cursorX < 0) {
      editTool.style.left = `${0}px`
    } else if (cursorX > boxWidth - editToolWidth) {
      editTool.style.left = `${boxWidth - editToolWidth}px`
    }

    // Drag Y
    if (cursorY >= 0 && cursorY <= boxHeight - editToolHeight) {
      editTool.style.top = `${cursorY}px`
    } else if (cursorY < 0) {
      editTool.style.top = `${0}px`
    } else if (cursorY > boxHeight - editToolHeight) {
      editTool.style.top = `${boxHeight - editToolHeight}px`
    }

    // End
  }
  const mouseup = () => {
    setInAction(false)
  }

  //
  useEffect(() => {
    // const editBox = box.current
    const editBox = box.current
    // console.log(src)
    editBox.style.backgroundImage = `url('./01.png')`
    editBox.addEventListener('mousedown', mousedown)
    editBox.addEventListener('mousemove', mousemove)
    editBox.addEventListener('mouseup', mouseup)

    return () => {
      editBox.removeEventListener('mousedown', mousedown)
      editBox.removeEventListener('mousemove', mousemove)
      editBox.removeEventListener('mouseup', mouseup)
    }
  })
  //
  return (
    <div className='editConatiner'>
      <div className='editWrapper'>
        <div className='boxTitle'>Lorem, ipsum dolor.</div>
        <div ref={box} className='editBox'>
          <div className='dragTool'></div>
        </div>
        <div className='editActions'>
          <button className='editBtn'>Cancel</button>
          <button className='editBtn'>Done</button>
        </div>
      </div>
    </div>
  )
}

export default DragArea
