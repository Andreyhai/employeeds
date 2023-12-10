import {Component} from "react";

import './employers-add-form.css';

class EmployersAddForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputName: '',
            inputSalary: '',
        }
    }

    changeInputName = (e) => {
        e.preventDefault();
        this.setState({
            inputName : e.target.value
        })
    }

    changeInputSalary = (e) => {
        e.preventDefault();
        let elem = e.target.value;
        let idx = elem.length-1;
        let chrCode = elem.charCodeAt(idx)
        if (chrCode > 47 && chrCode < 58) {
            this.setState({
                inputSalary : elem
            })
        } else {
            alert('Зарплата должна быть числом!')
        }
    }

    clearInput = () => {
        let elem = document.querySelectorAll('.new-post-label');
        for (const Element of elem) {
            Element.value = ''
        }
    }

    render() {
        const { onAdd } = this.props;
        const { inputName, inputSalary } = this.state;
      return (
          <div className="app-add-form">
              <h3>Добавьте нового сотрудника</h3>
              <form
                  className="add-form d-flex">
                  <input type="text"
                         className="form-control new-post-label"
                         placeholder="Как его зовут?"
                         onChange={this.changeInputName}
                  />
                  <input type="text"
                         className="form-control new-post-label"
                         placeholder="З/П в $?"
                         onChange={this.changeInputSalary}
                  />

                  <button
                          className="btn btn-outline-light"
                          onClick={(e) => {
                              e.preventDefault()
                              if (inputName.length < 3) {
                                  console.log('Ошибка! слишком короткое имя!')
                              } else {
                                  onAdd(inputName, inputSalary)
                                  this.clearInput()
                              }
                          }}
                  >
                      Добавить
                  </button>
              </form>
          </div>
      );
  }
}

export default EmployersAddForm;