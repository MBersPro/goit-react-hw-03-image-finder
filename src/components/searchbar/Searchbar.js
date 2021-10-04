import React, { Component } from 'react';
import {searchForm, searchForm_button} from './Searchbar.module.css'

class Searchbar extends Component {
    state = {
        name: "",
    }

    onInputChange = (e) => {
        this.setState({ name: e.target.value })
        console.log(this.state.name)
    };

    onHandleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.name)
        this.setState({name: ""})
    }

    render() {
        return (
            <header>
                <form onSubmit={this.onHandleSubmit} className={searchForm}>
                    <button type="submit" className={searchForm_button}>
                        <span>Search</span>
                    </button>

                    <input
                        type="text"
                        onChange={this.onInputChange}
                        value={this.state.name}
                    />
                </form>
            </header>
            
        );
    }
}

export default Searchbar;
