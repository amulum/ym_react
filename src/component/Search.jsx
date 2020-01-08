import React from 'react'
import '../styles/bootstrap.min.css'

class Search extends React.Component {
    render() {
        return (
            // search bar with button
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" placeholder="Search" aria-label="Search"
                    type="search"
                    name="search"
                    id="search"
                    placeholder={this.props.placeholder}
                    onChange={this.props.doSearch}
                    value={this.props.keyword}
                />
                <button class="btn btn-outline-success my-2 my-sm-0 mr-lg-5" type="submit">
                    <i class="fa fa-fw fa-search"></i>
                </button>
            </form>
        )
    }
}

export default Search;