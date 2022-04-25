import { useRef, useEffect } from 'react'

const Table = () => {
  const plates = useRef(null)
  // (x + r cos(2kπ/n), y + r sin(2kπ/n))
  useEffect(() => {
    const container = plates.current.parentNode
    const platesChilds = plates.current.childNodes
    const numbreOfPlate = platesChilds.length

    //
    container.childNodes[0].style.width = `${
      (50 * container.offsetHeight) / 100
    }px`
    container.childNodes[0].style.height = `${
      (50 * container.offsetHeight) / 100
    }px`

    //
    for (let index = 0; index < numbreOfPlate; index++) {
      platesChilds[index].style.width = `${
        (20 * container.offsetHeight) / 100
      }px`
      platesChilds[index].style.height = `${
        (20 * container.offsetHeight) / 100
      }px`
    }
  }, [])

  //
  useEffect(() => {
    const platesChilds = plates.current.childNodes
    const numbreOfPlate = platesChilds.length
    const containerHeight = plates.current.parentNode.offsetHeight
    const margin = (40 * containerHeight) / 100
    for (let index = 0; index < numbreOfPlate; index++) {
      const x = Math.cos((2 * index * Math.PI) / numbreOfPlate)
      const y = Math.sin((2 * index * Math.PI) / numbreOfPlate)
      console.log(x, y)
      platesChilds[index].style.transform = `translate(${margin * x}px,${
        margin * y
      }px)`
    }
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
