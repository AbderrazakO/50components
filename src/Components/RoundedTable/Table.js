import { useRef, useEffect } from 'react'

const Table = () => {
  const plates = useRef(null)
  // (x + r cos(2kπ/n), y + r sin(2kπ/n))
  useEffect(() => {
    const platesChilds = plates.current.childNodes
    const numbreOfPlate = platesChilds.length
    for (let index = 0; index < numbreOfPlate; index++) {
      const x = Math.cos((2 * index * Math.PI) / numbreOfPlate)
      const y = Math.sin((2 * index * Math.PI) / numbreOfPlate)
      console.log(x, y)
      platesChilds[index].style.transform = `translate(${200 * x}px,${
        200 * y
      }px)`
    }
    // platesChilds.forEach((element) => {
    //   console.log(element, numbreOfPlate)
    //   // element.style.left = x + 'px'
    //   // element.style.top = y + 'px'
    // })
  }, [plates])

  return (
    <div className='tableContainer'>
      <div className='mainTable'>cool</div>
      <div ref={plates} className='orbit'>
        <div className='plate'>
          <div className='mm'>njsc</div>
        </div>
        <div className='plate'>HHH</div>
        <div className='plate'>HHH</div>
        <div className='plate'>HHH</div>
        <div className='plate'>HHH</div>
      </div>
    </div>
  )
}

export default Table
