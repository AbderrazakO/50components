import './Style/index.css'
import Slider from './Components/SliderBar/index'
import ResHeader from './Components/ResponsiveHeader/index'
import PopMenu from './Components/PopUpMenu/index'
import DropMenu from './Components/DropDownMenu/index'

const App = () => {
  return (
    <div>
      <ResHeader logo={<div>Logo Here</div>} navBar={<div>Nav Here</div>} />
    </div>
  )
}

export default App
