import { useEffect, useRef, useState } from 'react'

const DragArea = ({ src }) => {
  const [inAction, setInAction] = useState(false)
  const box = useRef(null)
  const mousedown = () => {
    setInAction(true)
  }
  const mousemove = (event) => {
    const editBox = box.current
    const boxWidth = editBox.offsetWidth
    const editTool = editBox.childNodes[0]
    const xPosition = event.pageX - editBox.offsetLeft
    const yPosition = event.pageY - editBox.offsetTop
    if (!inAction) return
    if (xPosition > 0 && xPosition < boxWidth) {
      editTool.style.left = `${xPosition}px`
    }

    editTool.style.top = `${yPosition}px`
  }
  const mouseup = () => {
    setInAction(false)
  }
  const mouseleave = () => {
    setInAction(false)
  }
  //
  useEffect(() => {
    // const editBox = box.current
    const editBox = box.current
    console.log(src)
    editBox.style.backgroundImage = `url('${src}')`
    editBox.addEventListener('mousedown', mousedown)
    editBox.addEventListener('mousemove', mousemove)
    editBox.addEventListener('mouseup', mouseup)
    editBox.addEventListener('mouseleave', mouseleave)

    return () => {
      editBox.removeEventListener('mousedown', mousedown)
      editBox.removeEventListener('mousemove', mousemove)
      editBox.removeEventListener('mouseup', mouseup)
      editBox.removeEventListener('mouseleave', mouseleave)
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
          <button className='editBtn'>Done</button>
          <button className='editBtn'>Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default DragArea
