import React from 'react'
import Header from '../component/Header'
import BeritaTerkini from  '../component/BeritaTerkini'
import News from '../component/NewsGenerate'
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store";

import axios from 'axios'
const apiKey = '9ea283ba45c54460a0d372ae2612c6bd'
const baseUrl = 'https://newsapi.org/v2/'


class Home extends React.Component {
    componentDidMount = () => {
        const self = this;
        axios
        .get(`${baseUrl}/everything?q=${self.props.selected}&sortBy=popularity&pageSize=5&apiKey=${apiKey}`)
        .then(function(response) {
            store.setState ({ listNews: response.data.articles, isLoading: false});
            // handle success
        })
        .catch(function(error){
            store.setState({ isLoading : false});
            // error handle
        })
        console.log(this.props)
    }

    render() {
        return (
            <div>
                <div className="container-fluid">
                    <Header 
                        lstCategory={this.props.catHeader} 
                        cobaClick={this.props.cobaClick}
                        doSearch={(event) => this.inputChange(event)}
                        keyword={this.props.search}
                        placeholder="mau cari apa"
                    />
                </div>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-4 ml-0">
                            <BeritaTerkini/>
                        </div>
                        <div className="col-md-8 mr-0">
                            <News listNews={this.props.listNews} isLoading={this.props.isLoading}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default connect('catHeader, listNews, isLoading',actions)(withRouter(Home));