

import ProfileImage from "./ImageHelpers/ProfileImage"
import ExternalLinksList from "./ExternalLinksHelpers/ExternalLinksList"
import EditProfileLink from "./ProfileCRUD/EditProfileLink"
import DeleteProfileLink from "./ProfileCRUD/DeleteProfileLink"
import TagsGroup from "./TagHelpers/TagsGroup"
import ProfileCallToAction from "./CTAHelpers/ProfileCallToAction"
import OwnerTaskList from "./OwnerTasksHelpers/OwnerTaskList"
import EventFeed from "../Event/EventFeed"
import TicketFeed from "../Ticket/TicketFeed"
import UserFeed from "../User/UserFeed"
import CompanyFeed from "../Company/CompanyFeed"
import FeedArea from './FeedHelpers/FeedArea'
// import FeedArea from "."

import './ProfileFullPage.css'
import DropDownMenu from "../../Basic/Navigation/Menus/DropDownMenu"

//pass in CRUD form as TRUE and include as child element

const ProfileFullPage = ({
    hasCrud,
    dataObject,
    profileType,
    pageTitle,
    pageDescription,
    imageUrl,
    imageSize,
    pageShortInfo,
    externalLinksArray,
    isProfileOwner,
    hasTags,
    tagsAlias,
    tagsSize,
    ctaType,
    hasUsers,
    usersAlias,
    usersSize,
    hasEvents,
    eventsAlias,
    eventsSize,
    hasCompanies,
    companiesAlias,
    companiesSize,
    hasTickets,
    ticketsAlias,
    ticketsSize,
    children,
}) => {

    const menuChildren = children[0]
    console.log(menuChildren)


    return (
    <section className='profile-full-page'>



            { hasCrud && <div className="crud-left-col">
                {children[2]}
            </div>}



                    <div className='primary-info-col'>

                        <div className='top-banner glass'>
                            <div className='image-container'>
                                    <ProfileImage
                                        url={imageUrl}
                                        size={imageSize}
                                        name={
                                            (dataObject && dataObject.name) || (dataObject && dataObject.firstName) || 'H'
                                        }
                                    />
                            </div>
                            <div className='banner-text'>
                                    <h1 className='page-title'>
                                        {pageTitle}
                                    </h1>
                                    <div className='page-short-info'>
                                        <p>
                                        {pageShortInfo}
                                        </p>
                                    </div>
                                    {hasTags && <TagsGroup
                                        tagsAlias={tagsAlias}
                                        dataObject={dataObject}
                                        tagsSize={tagsSize}
                                        isProfileOwner={isProfileOwner}
                                    />}
                            {isProfileOwner &&
                                <div className="owner-menu-container">
                                    <DropDownMenu entry={dataObject}>
                                        {children[0]}
                                        {children[1]}
                                    </DropDownMenu>
                                </div>
                            }
                                {/* REPLACE WITH MENU COMP */}
                                {/* <div className="menu-icon">
                                        {isProfileOwner && <EditProfileLink />}
                                        {isProfileOwner && <DeleteProfileLink />}
                                    </div> */}
                            </div>
                        </div>
                        {/* <div className='page-links glass'>
                            <div className='external-links'>
                                <ExternalLinksList
                                    externalLinksArray={externalLinksArray}
                                />
                            </div>
                                <div className='interact-links'>
                                    <ProfileCallToAction className='glass'
                                        dataObject={dataObject}
                                        ctaType={ctaType}
                                    />
                                </div>
                        </div> */}


                    <div className='secondary-info glass'>
                    <div className='static-column'>
                                <div className='detailed-description glass'>
                            {pageDescription && <p>{pageDescription}</p>}
                                </div>
                            {isProfileOwner &&
                                (<div className='owner-tasks'>
                                    <OwnerTaskList
                                        dataObject={dataObject}
                                        profileType={profileType}
                                    />
                                </div>)
                            }
                    </div>
                    <div className='action-column'>

                                <div className='newsfeed'>
                                    {
                                        hasTickets &&
                                        <TicketFeed
                                            dataObject={dataObject}
                                            ticketsSize={ticketsSize}
                                            ticketsAlias={ticketsAlias}
                                        />
                                    }
                                    {
                                        hasEvents &&
                                        <FeedArea

                                        entries={dataObject.Events}
                                        urlPathName='events'
                                        alias='Event Feed'
                                            // dataObject={dataObject}
                                            // eventsSize={eventsSize}
                                            // eventsAlias={eventsAlias}
                                        />
                                    }
                                    {
                                        hasUsers &&
                                        <UserFeed
                                            dataObject={dataObject}
                                            usersSize={usersSize}
                                            usersAlias={usersAlias}
                                        />
                                    }
                                    {
                                        hasCompanies &&
                                <CompanyFeed

                                    entries
                                    urlPathName
                                    alias

                                            dataObject={dataObject}
                                            companiesSize={companiesSize}
                                            companiesAlias={companiesAlias}
                                        />
                                    }
                                </div>
                            </div>
                </div>
                    { hasCrud && <div className="cover-up" /> }
                </div>


    </section>
    )
}

export default ProfileFullPage
