import React, { useState } from 'react';

const Card = (props) => {

    const [buttonText, setButtonText] = useState('See More');

    const [displayStyle, setDisplayStyle] = useState('none');

    let detailStyle = {
        display: displayStyle
    };

    function showCardDetails() {
        if (displayStyle === 'none') {
            setDisplayStyle('block');
            setButtonText('See Less');
        }
        else {
            setDisplayStyle('none');
            setButtonText('See More');
        }
    };

    return (
        <div className="col s12 m6 l3">
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    {
                        props.image == null ? <img src={`https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg`} alt=""/> : <img src={`https://image.tmdb.org/t/p/w185${props.image}`} alt=""/>
                    }
                </div>
                <div className = "card-content">
                    <h2 className="movie-title">{props.title}</h2>
                    <p><button className="button-as-link" onClick={showCardDetails}>{buttonText}</button></p>
                    <div className="details" style={detailStyle}>
                        <p>{props.overview}</p>
                        <p>Released on {props.release}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;