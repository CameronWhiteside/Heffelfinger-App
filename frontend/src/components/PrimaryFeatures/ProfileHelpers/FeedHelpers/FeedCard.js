// import { useSelector } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';

import './FeedCard.css'
import ProfileImage from '../ImageHelpers/ProfileImage';
import PrettyDate from '../../../Basic/PrettyData/PrettyDate'
// import StaticTagList from '../ProfileHelpers/TagHelpers/StaticTagList'

export const FeedCard = ( {  entry, urlPathName } ) => {
    useHistory();

    let id = entry.id

    let name
    if (entry.name) name = entry.name
    if (entry.firstName) name = `${entry.firstName} ${entry.lastName}`
    // if (entry.username) name = entry.username

    //acount for different 'url' variable aliases
    let url
    if (entry.logo) url = entry.logo
    if (entry.imageUrl) url = entry.imageUrl
    if (entry.picture) url = entry.imageUrl

    let startDateTime
    if (entry.startDateTime) startDateTime = entry.startDateTime

    let headline
    if (entry.headline) headline = entry.headline

    let location
    if (entry.location) location = entry.location

    let attendees
    if (entry.Tickets && urlPathName === 'events' && entry.Tickets.length > 0) attendees = entry.Tickets.length

    let contributors
    if (entry.Users && urlPathName === 'companies' && entry.Users.length > 0) contributors = entry.Users.length


    let tags
    if (entry.Tag) tags = entry.Tag


    const imageSize = 'small'

    return (
        <div className='feed-card glass'>
            <NavLink to={`/${urlPathName}/${id}`}>
                <div className='primary-feed-info' >
                    <div className='feed-card-image-area'>
                        <ProfileImage url={url} size={imageSize} defaultName={name}/>
                        {name && <h4 className='feed-card-name'>{name}</h4>}
                </div>
                </div>
                    <div className='feed-card-info-area'>
                        {location && <p className='feed-short-details'>{location}</p>}


                        {startDateTime && <PrettyDate date={startDateTime} />}
                        {contributors && <p className='contributors'>{attendees} Attending</p>}


                        {headline && <p className='headline'>{headline}</p>}
                        {contributors && <p className='contributors'>{contributors} Contributors</p>}
                    </div>

                    {/* <div className='tagList'>
                        {tags && <StaticTagList tags={tags} />}
                    </div> */}
                </NavLink>
        </div>
  );
}


export default FeedCard;
