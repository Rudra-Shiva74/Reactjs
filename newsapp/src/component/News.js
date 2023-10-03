import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';


export default class News extends Component {
  Capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
    document.title = `${this.Capitalize(this.props.category)} - NewsMonkey`;
  }
  static defaultProps = {
    country: 'in',
    PageSize: 6,
    category: 'genneral'

  }

  static propTypes = {
    country: PropTypes.string,
    PageSize: PropTypes.number,
    category: PropTypes.string,

  }
  formatTimestamp(timestamp) {
    const options = {
      year: '2-digit',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    }
    const date = new Date(timestamp);
    return date.toLocaleString('en-IN', options);
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=540f8d4b8a6b49deb680ff852c5db649&PageSize=${this.props.PageSize}&page=1`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles, totalResults: parseData.totalResults
    })
    // console.log(this.state.articles);
  }

  Next = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=540f8d4b8a6b49deb680ff852c5db649&PageSize=${this.props.PageSize}&page=${this.state.page + 1}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      page: this.state.page + 1, loading: false
    })
  };

  Prev = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=540f8d4b8a6b49deb680ff852c5db649&PageSize=${this.props.PageSize}&page=${this.state.page - 1}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      page: this.state.page - 1,
      loading: false
    })

  }
  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center'>NewsMonkey - Top Headlines on {this.Capitalize(this.props.category)}</h1>
        {this.state.loading && <Spinner />}
        <div className='row g-3 mt-4 text-start'>
          {this.state.articles && !this.state.loading && this.state.articles.map((element) => {
            return (<div className="col-lg-4 d-flex justify-content-center" key={element.url}>
              <NewsItem title={element.title ? element.title.slice(0, 40) : "No Title here"} desc={element.description ? element.description.slice(0, 70) : "No Description here"} imgurl={element.urlToImage ? element.urlToImage : 'http://via.placeholder.com/640x360'} newsurl={element.url} publishedAt={this.formatTimestamp(element.publishedAt)} author={element.author ? element.author : "Uknown"} sourse={element.source.name} />
            </div>)
          })}
        </div>
        <div className="d-flex justify-content-between m-2">
          <button disabled={this.state.page <= 1} className='btn btn-dark btn-sm' onClick={this.Prev}>&#8592;Prev</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.PageSize)} className='btn btn-dark btn-sm' onClick={this.Next}>Next &#8594;</button>
        </div>
      </div>
    )
  }
}
