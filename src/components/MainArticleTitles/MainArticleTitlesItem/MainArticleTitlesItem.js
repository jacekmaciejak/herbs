import React from 'react'
import './MainArticleTitlesItem.scss'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function MainArticleTitlesItem({ path, image, title, description }) {
    const ImageTag = image ? "img" : "div"

    return (
        <div className='mainArticleTitlesItem__container'>
            <Link to={path} className="mainArticleTitlesItem__item">
                <figure className="mainArticleTitlesItem__item__pic-wrap" data-category={title}>
                    <ImageTag src={image} className={image ? 'mainArticleTitlesItem__item__img' : 'mainArticleTitlesItem__imageNone'} alt={title} />
                </figure>
                <div className="mainArticleTitlesItem__item__info">
                    {/* <h2 className="cards__item__text">{title}</h2> */}
                    <p>{description}</p>

                </div>
            </Link>
        </div>
    )
}

export default MainArticleTitlesItem
