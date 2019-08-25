import React, { Component } from 'react'
import Search from './Search'
import Calculate from './Calculate'
import axios from 'axios'


class PortfolioContainer extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            // name: '',
            portfolio: [],
            search_results: [],
            active_currency: null,
            amount: ''
        }
        // this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange = (e) => {
        // this.setState({
        //     [e.target.name]: e.target.value
        // })
        axios.post('/search', {
            search: e.target.value
        })
        .then( (data) => {
            this.setState({
                search_results: [...data.data.currencies]
            })
            // console.log(data)
            // debugger
        })
        .catch( (data) => {
            // debugger
        })
        // console.log(this.state.search_results)
    }
    
    handleSelect = (e) => {
        e.preventDefault()
        const id = e.target.getAttribute('data-id')
        const activeCurrency = this.state.search_results.filter( item => item.id == parseInt(id))
        this.setState({
            active_currency: activeCurrency[0],
            search_results: []
        })
        // debugger
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        
        let currency = this.state.active_currency
        let amount = this.state.amount
        
         axios.post('/calculate', {
            id: currency.id,
            amount: amount
        })
        .then( (data) => {
            console.log(data)
            this.setState({
                amount: '',
                active_currency: null,
                portfolio: [...this.state.portfolio, data.data]
            })
        })
        .catch( (data) => {
            // debugger
        })
        // console.log(this.state)
    }
    
    handleAmount = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    render(){
        var searchOrCalculate = ""
        // const searchOrCalculate = 
            if(this.state.active_currency != null){
                searchOrCalculate =  <Calculate
                    handleChange={this.handleAmount}
                    handleSubmit={this.handleSubmit}
                    active_currency={this.state.active_currency}
                    amount={this.state.amount} />
            }else{
                searchOrCalculate = <Search
                    handleSelect={this.handleSelect}
                    searchResults={this.state.search_results}
                    handleChange={this.handleChange} />
            }
        return(
            <div>
                {searchOrCalculate}
            </div>
        )
    }
}

export default PortfolioContainer