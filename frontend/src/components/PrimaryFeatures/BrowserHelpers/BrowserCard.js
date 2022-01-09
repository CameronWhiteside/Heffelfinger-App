// import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import CompanyOwnerButtons from '../CompanyOwnerButtons'
import './BrowserCard.css'
import ProfileImage from '../ProfileHelpers/ImageHelpers/ProfileImage';
import PrettyDate from '../../Basic/PrettyData/PrettyDate';
import PrettyHost from '../../Basic/PrettyData/PrettyHost';
import TinyCompanyPreview from '../Company/TinyCompanyPreview';
import TinyUserPreview from '../User/TinyUserPreview';
import StaticTagList from '../ProfileHelpers/TagHelpers/StaticTagList'



export const BrowserCard = ( props ) => {

    const  { entry, hasUsers, usersAlias, hasHost, hasCompanies, companiesAlias } = props

    let id = entry.id

    //account for different 'name' variable aliases
    let name
    if (entry.name) name = entry.name
    if (entry.username) name = entry.username

    //acount for different 'url' variable aliases
    let url
    if (entry.logo) url = entry.logo
    if (entry.imageUrl) url = entry.imageUrl
    if (entry.picture) url = entry.imageUrl

    let startDateTime
    if (entry.startDateTime) startDateTime = entry.startDateTime

    let tagline
    if (entry.tagline) tagline = entry.tagline

    let location
    if (entry.location) location = entry.location

    let host
    if (hasHost && entry.Company) host = entry.Company

    let users
    if(hasUsers) users=entry.User

    let companies
    if (hasCompanies) companies = entry.Company

    let tags
    if (entry.Tag) tags = entry.Tag


    const imageSize = 'medium'

    return (
        <div className='browser-card glass'>
            <div className='browser-card-menu-button'>
                <i class="fas fa-chevron-circle-down"></i>
                { props.children}
            </div>
                <NavLink to={`/companies/${id}`}>
                    <div className='browser-card-overlay'></div>
                    <div className='browser-card-image-area'>
                        <ProfileImage url={url} size={imageSize} name={name}/>
                    </div>
                    <div className='browser-card-info-area'>
                        {startDateTime && <PrettyDate date={startDateTime} />}
                        {name && <h2 className='browser-card-name'>{name}</h2>}
                        {tagline && <p className='tagline'>{tagline}</p>}
                        {location && <p className='browser-short-details'>{location}</p>}
                        {hasHost && <PrettyHost event={host} />}
                    </div>

                    <div className='browser-card-tiny-preview'>
                    {usersAlias && <h6 className='user-alias'>{usersAlias}</h6>}
                    {users && <TinyUserPreview type='users' data={users} />}
                    {companiesAlias &&  <h6>{companiesAlias}</h6>}
                    {companies && <TinyCompanyPreview type='users' data={companies} />}
                    </div>
                    <div className='tagList'>
                        {tags && <StaticTagList tags={tags} />}
                    </div>
                </NavLink>

        </div>
  );
}


export default BrowserCard;
