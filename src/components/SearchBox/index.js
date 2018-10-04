import React from "react";
import PropTypes from "prop-types";
import {noop} from "lodash";

import "./SearchBox.css"

class SearchBox extends React.PureComponent {

    constructor(props){
        super(props)
        this.state = {
            value: ""
        }
    }

    static propTypes = {
        handleOnClick: PropTypes.func
    }

    static defaultProps = {
        handleOnClick: noop
    }

    handleOnSearch = () => {
        const { state: { value } } = this;
        const trimmedVal = value.trim();
        if (trimmedVal === "") {
            return;
        }
        this.props.handleOnSearch(trimmedVal);
    }

    handleOnChange = event => {
        const { target: { value } } = event;
        this.setState({
            value
        });
    } 

    handleOnKeyPress = event => {
        if(event.key === "Enter"){
            this.handleOnSearch();
        }
    }
    
    render() {
        const { handleOnChange, handleOnKeyPress, handleOnSearch, state: { value } } = this;
        return (<div className="input-group search-box">
            <input type = "text" value={value} onChange={handleOnChange} onKeyPress={handleOnKeyPress}/>
            <button className="btn" type="button" onClick={handleOnSearch}>
                Search
            </button>
        </div>);
    }
}

export default SearchBox;
