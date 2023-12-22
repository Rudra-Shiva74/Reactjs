import React, { useEffect, useState } from 'react'
import axios from 'axios';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";
import PostDetails from './PostDetails';
export default function Navbar() {
    const [query, setQuery] = useState('');
    const [result, setResult] = useState([]);
    const [page, setPage] = useState(0);
    const [flag, setFlag] = useState(true);
    const [news, setNews] = useState([]);
    const [posttitle, setPosttitle] = useState('');
    const [postpoints, setPostpoints] = useState(0);

    const Capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const performSearch = async () => {
        try {
            const response = await axios.get(`https://hn.algolia.com/api/v1/search?query=${query}&page=${page}`);
            setResult(response.data.hits);
        } catch (err) {
            console.error(err);
        }
        document.title = `${Capitalize(query) ? Capitalize(query) : "Home"} - Hacker News`;
    };
    const performPostSearch = async (val) => {
        try {
            const response = await axios.get(`http://hn.algolia.com/api/v1/items/${val}`);
            setNews(response.data.children);
        } catch (err) {
            console.error(err);
        }
        document.title = `${"Comment"} - Hacker News`;
    };

    const searchquery = async (e) => {
        e.preventDefault();
        await performSearch();
    }
    useEffect(() => {
        performSearch();
    }, []);

    // const next = async () => {
    //     setPage(page + 1);
    //     await performSearch();
    // }
    // const prev = async () => {
    //     setPage(page - 1);
    //     await performSearch();
    // }
    const calculateDaysAgo = (inputDate) => {
        const date = new Date(inputDate);
        const currentDate = new Date();
        const timeDifference = currentDate - date;
        const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        return daysAgo;
    }
    const fetchMoreData = async () => {
        try {
            setPage(page + 1);
            let url = `https://hn.algolia.com/api/v1/search?query=${query}&page=${page + 1}`;
            let data = await axios.get(url);
            const newItems = data.data.hits;
            setResult(result.concat(newItems));
        } catch (error) {
            console.error(error);
        }
    };
    const move = async (val) => {
        setFlag(false);
        await performPostSearch(val);
    }
    const back = () => {
        setNews([]);
        setFlag(true);
        document.title = `${query} - Hacker News`;
    }
    return (
        <div>
            {flag ? <><nav className="navbar navbar-expand-lg navbar-dark bg-warning">
                <div className="mx-auto  order-0">
                    <form onSubmit={searchquery} className='d-flex'>
                        <input className="form-control" value={query} onChange={(e) => { setQuery(e.target.value); setPage(0) }} type="text" placeholder="Search" aria-label="Search" />
                        <button className='btn btn-primary ms-2' type='submit'>search</button>
                    </form>
                </div>
            </nav>
                <div className='container pb-5'>
                    <InfiniteScroll
                        dataLength={result.length}
                        next={fetchMoreData}
                        hasMore={true}
                        loader={<Spinner />}
                    >
                        <div className="row g-3 mt-4">
                            {result.map((Element, index) => {
                                return (
                                    <div className='col-lg-6 col-md-6' key={index}>
                                        <NewsItem title={Element.title ? Element.title : "No Tittle Here"} author={Element.author ? Element.author : 'No Author'} comments={Element.num_comments ? Element.num_comments : 0} points={Element.points ? Element.points : 0} link={Element.url ? Element.url : "#"} time={calculateDaysAgo(Element.updated_at)} move={() => { move(Element.objectID); setPosttitle(Element.title); setPostpoints(Element.points) }} />
                                    </div>
                                )
                            })}
                        </div>
                        {/* <div className="d-flex mt-5 justify-content-between">
                        <button className='btn btn-primary' disabled={page < 0} onClick={prev}>Prev</button>
                        <button className='btn btn-primary' disabled={result.length !== 20} onClick={next}>Next</button>
                    </div> */}
                    </InfiniteScroll>
                </div></> :
                <div className="container p-3">
                    <div className="card-body">
                        <div className="d-flex">
                            <h5 className="card-title">{posttitle ? posttitle : "No Tittle Here"}</h5>
                            <button className='btn btn-success mx-4' onClick={back}>Back</button>
                        </div>
                        <p>{postpoints ? postpoints : 0} points</p>
                        {posttitle ? news.length === 0 ? < Spinner /> : news.map((Element, index) => {
                            return (
                                <div key={index}>
                                    <PostDetails comments={Element.text.length > 0 ? Element.text : "No Comment on This Post"} />
                                </div>
                            )
                        }) : "No Comment Here"}
                    </div>
                </div>}
        </div >
    )
}
