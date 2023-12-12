export default function News(props) {
    return (
        <div className="card" >
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5> <a href={props.link} target={props.link === '#' ? '' : `_blanck`}><i className="fa-solid fa-link"></i></a>
                &nbsp;<button className='btn btn-success' onClick={props.move}>POST</button>
                <div className="d-flex">
                    <p>{props.points} points</p>&nbsp;|&nbsp;
                    <p>{props.author}</p>&nbsp;|&nbsp;
                    <p>{props.comments} comments</p>&nbsp;|&nbsp;
                    <p>{props.time === 1 ? `${props.time} day ago` : props.time === 0 ? `Today` : `${props.time} days ago`}</p>&nbsp;
                </div>
            </div>
        </div>
    )
}
