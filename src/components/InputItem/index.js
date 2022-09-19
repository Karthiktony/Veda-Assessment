import {BsFillCaretDownFill, BsFillCaretUpFill} from 'react-icons/bs'
import {IoClose} from 'react-icons/io5'
import './index.css'

const InputItem = props => {
  const {inputDetails} = props
  const {id, name} = inputDetails

  const onDeleteInput = () => {
    const {deleteInput} = props
    deleteInput(id)
  }

  return (
    <li>
      <p className="text">{name}</p>
      <div>
        <button type="button">
          <BsFillCaretUpFill className="arrows" />
        </button>
        <button type="button">
          <BsFillCaretDownFill className="arrows" />
        </button>
        <button type="button" onClick={onDeleteInput}>
          <IoClose className="close" />
        </button>
      </div>
    </li>
  )
}

export default InputItem
