import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, desc, imgurl, newsurl, publishedAt, author, sourse } = this.props;
        return (   
            <div>
                <div className="card"><span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{ left: "90%", zIndex: 1}}>
                    {sourse}
                    <span class="visually-hidden">unread messages</span>
                </span>
                    <img src={imgurl} className="card-img-top" alt="..." style={{ height: '200px' }} />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{desc}...</p>
                        <p className=''>By {author} on {publishedAt}</p>
                        <a href={newsurl} target="_blanck" className="btn btn-sm btn-primary">Read More..</a>
                    </div>
                </div>
            </div >
        )
    }
}

export default NewsItem
