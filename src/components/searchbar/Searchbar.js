import React, { Component } from 'react';

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
                <form onSubmit={this.onHandleSubmit}>
                    <button type="submit">
                        <span>Search</span>
                    </button>

                    <input
                        type="text"
                        onChange={this.onInputChange}
                    />
                </form>
            </header>
            
        );
    }
}

export default Searchbar;
