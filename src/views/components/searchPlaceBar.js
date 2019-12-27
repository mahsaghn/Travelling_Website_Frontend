import React from 'react'
import '../styles/searchBar.css'
import { MDBIcon } from "mdbreact";


export default class searchPlace extends React.Component {

    constructor() {
        super();
        this.state = {
            searchedVal: "",
        }
        this.handleSubmite = this.handleSubmite.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleEnter = this.handleEnter.bind(this)
    }

    handleSubmite() {
        return window.location.replace(`/places/${this.state.searchedVal}`)
    }

    handleEnter(e) {
        console.log("here", e.key)
        if (e.key === "Enter")
            this.handleSubmite(e)
    }

    handleChange(e) {
        console.log(this.state.searchedVal)
        this.setState({
            searchedVal: e.target.value
        })
        console.log(this.state.searchedVal)
    }

    render() {
        return (
            <div className=" searchBar">
                <MDBIcon className="text-white" icon="search" />
                <img onClick={this.handleSubmite} id="imgSearchBar" src="https://cdn2.iconfinder.com/data/icons/picons-basic-1/57/basic1-015_search_zoom_find-512.png" />
                <input value={this.state.searchedVal} onKeyPress={this.handleEnter} onChange={this.handleChange} className="searchItem" type="text" placeholder="جست و جو مکان" aria-label="Search" />
            </div>


        );
    }
}