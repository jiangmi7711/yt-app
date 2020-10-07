import React from 'react';
import App from '../App';


class SearchBar extends React.Component {
    state = {term : ''};

    onInputChange=(e)=>{
        this.setState({term: e.target.value})
        };

    onFormSubmit = (e) =>{
        e.preventDefault();
        // !! call the search fn from APP
      this.props.onSubmit(this.state.term)
    };

    render(){
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit= {this.onFormSubmit}>
                    <div className="field">
                        <label>Video Seach</label>
                        <input type="text" onChange={this.onInputChange} value= {this.state.term}></input>
                    </div>
                </form>
            </div>
        )

    }
};


export default SearchBar;