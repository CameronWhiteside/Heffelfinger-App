

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

import './ProfileFullPage.css'
import DropDownMenu from "../../Basic/Navigation/Menus/DropDownMenu"

//pass in CRUD form as TRUE and include as child element

const ProfileFullPage = ({
    dataObject,
    profileType,
    pageTitle,
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
    hasCrud,
    children,
}) => {
    return (
    <section className='profile-full-page'>



            { hasCrud && <div className="crud-left-col">
                {children}
            </div>}
            <div className="non-crud-left-col">


                        <div className='primary-info-col glass'>

                        <div className='top-banner'>
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
                                        {children}
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
                        <div className='page-links'>
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
                            </div>
                    </div>

                    <div className='secondary-info'>
                    <div className='detail-column'>
                            {dataObject.decription &&
                                <div className='detailed-description'>
                                    <p>{dataObject.description}</p>
                                </div>
                            }
                            </div>
                            <div className='action-column'>
                                {isProfileOwner &&
                                    (<div className='owner-tasks glass'>
                                    <OwnerTaskList
                                        dataObject={dataObject}
                                        profileType={profileType}
                                    />
                                    </div>)
                                }
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
                                        <EventFeed

                                            dataObject={dataObject}
                                            eventsSize={eventsSize}
                                            eventsAlias={eventsAlias}
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

                                            dataObject={dataObject}
                                            companiesSize={companiesSize}
                                            companiesAlias={companiesAlias}
                                        />
                                    }
                                </div>
                            </div>
                    </div>
                {hasCrud && <div className="cover-up" />}
            </div>

    </section>
    )
}

export default ProfileFullPage
