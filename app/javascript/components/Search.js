import React, { Component } from 'react'

class Search extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        const searchResults = this.props.searchResults.map( curr => 
                <li key={curr.id}
                data-id={curr.id} 
                onClick={this.props.handleSelect}
                className="currency-list-item">
                <a href="a" className="currency">
                <span>{curr.name}</span>
                <span> {curr.currency_symbol}
                </span></a></li>)
        return(
            <div>
                <h1>Cryptocurrency Portfolio Calculator</h1>
                <form>
                    <div className="form-group">
                        <label>Search for a Currency:</label><br/>
                        <input onChange={this.props.handleChange} autoComplete="off" 
                            type="text" 
                            name="name" 
                            placeholder="Ex: Bitcoin, Litecoint, Ethereum..." 
                            value={this.props.name} 
                            className="field"/>
                    </div>
                    <div className="currency-list">
                        {searchResults}
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default Search