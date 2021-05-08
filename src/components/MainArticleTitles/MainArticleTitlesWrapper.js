import React from 'react'
import './MainArticleTitlesWrapper.scss'
import { mainArticles } from '../../data/mainArticles'
import MainArticleTitlesItem from './MainArticleTitlesItem/MainArticleTitlesItem'

function MainArticleTitlesWrapper() {
    return (
        <div className='mainArticleTitles__wrapper'>
            { mainArticles.map(item => (
                <MainArticleTitlesItem key={item.title} {...item} />
            ))
            }
        </div>
    )
}

export default MainArticleTitlesWrapper
