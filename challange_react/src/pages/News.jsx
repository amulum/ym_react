import React from 'react'
import MainBerita from '../component/MainBerita'


class News extends React.Component {

    render () {
        const { listNews, isLoading } = this.props;
        // filter news yang ada content dan imagenya
        const topHeadlines = listNews.filter(item => {
            if (item.content !== null && item.urlToImage !== null) {
                return item;
            }
            return false;
        });

        const headlineNews = topHeadlines.map((item, key) => {
            return (
                MainBerita(item.urlToImage,item.title, item.url, item.description, item.publishedAt)
            );
        });

        return (
            <div className="headlineNews">
                {isLoading ?<div style={{textAlign:"center"}}><img className="App-logo-loading" src={require('../images/logo.svg')}/></div> : headlineNews }
            </div>
        )

    }

}

export default News;