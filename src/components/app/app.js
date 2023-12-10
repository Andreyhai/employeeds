import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployersList from "../employers-list/employers-list";
import EmployersAddForm from "../employers-add-form/employers-add-form";

import './app.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data : [
                {
                    id: 1,
                    name: 'name1',
                    salary: 800+'$',
                    increase: true,
                    rise: false
                },
                {
                    id: 2,
                    name : 'name2',
                    salary : 1000+'$',
                    increase: false,
                    rise: false
                },
                {
                    id: 3,
                    name : 'name3',
                    salary : 1500+'$',
                    increase: false,
                    rise: false
                },
            ]
        }
        this.maxId = 4
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            // const index = data.findIndex(element => element.id === id)
            //
            // const before = data.slice(0, index)
            // const after = data.slice(index + 1)
            //
            // return {
            //     data : [...before, ...after]
            // }

            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            id: this.maxId++,
            name: name,
            salary: salary+'$',
            increase: false,
            rise: false,
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem]
            return {
                data: newArr
            }
        })
    }

    onToggleIncrease = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = {...old, increase: !old.increase};
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data: newArr
            }
        })
    }

    onToggleRise = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = {...old, rise: !old.rise};
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {
                data: newArr
            }
        })
    }

    render() {
        return (
            <div className="app">
                <AppInfo
                    count={this.state.data.length}
                    data={this.state.data}
                />

                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>

                <EmployersList
                    data={this.state.data}
                    onDelete={this.deleteItem}
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleRise={this.onToggleRise}
                />
                <EmployersAddForm onAdd={this.addItem} />
            </div>
        );
    }


}

export default App;