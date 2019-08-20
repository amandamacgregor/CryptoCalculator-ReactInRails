import React, { Component } from 'react'
import Search from './Search'
import Calculate from './Calculate'
import axios from 'axios'


class PortfolioContainer extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            name: '',
            portfolio: [],
            search_results: [],
            active_currency: null,
            amount: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(e){
        // this.setState({
        //     [e.target.name]: e.target.value
        // })
        
        axios.post('http://18.220.234.156/search', {
            search: e.target.value
        })
        .then( (data) => {
            debugger
        })
        .catch( (data) => {
            debugger
        })
        console.log(this.state.name)
    }
    
    render() {
        return(
            <div>
                <Search handleChange={this.handleChange}/>
                <Calculate />
            </div>
        )
    }
}

export default PortfolioContainer