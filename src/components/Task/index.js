import {Component} from 'react'

import {v4} from 'uuid'

import InputItem from '../InputItem'

import './index.css'

class Task extends Component {
  state = {
    nameInput: '',
    inputsList: [],
  }

  deleteInput = inputId => {
    const {inputsList} = this.state

    this.setState({
      inputsList: inputsList.filter(input => input.id !== inputId),
    })
  }

  renderInputList = () => {
    const {inputsList} = this.state

    return inputsList.map(eachInput => (
      <InputItem
        key={eachInput.id}
        inputDetails={eachInput}
        deleteInput={this.deleteInput}
      />
    ))
  }

  onAddInput = event => {
    event.preventDefault()
    const {nameInput} = this.state

    const newInput = {
      id: v4(),
      name: nameInput,
    }

    this.setState(prevState => ({
      inputsList: [...prevState.inputsList, newInput],
      nameInput: '',
    }))
  }

  onChangeNameInput = event => {
    this.setState({
      nameInput: event.target.value,
    })
  }

  render() {
    const {nameInput} = this.state
    return (
      <div className="main-container">
        <ul>{this.renderInputList()}</ul>
        <div>
          <form onSubmit={this.onAddInput} className="form-container">
            <input
              type="text"
              value={nameInput}
              onChange={this.onChangeNameInput}
            />
            <button type="submit" className="add-button">
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default Task
