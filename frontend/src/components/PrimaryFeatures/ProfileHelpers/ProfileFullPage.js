

import ProfileImage from "./ImageHelpers/ProfileImage"
import ExternalLinksList from "./ExternalLinksHelpers/ExternalLinksList"
import EditProfileLink from "./ProfileCRUD/EditProfileLink"
import DeleteProfileLink from "./ProfileCRUD/DeleteProfileLink"
import TagsGroup from "./TagHelpers/TagsGroup"
import ProfileCallToAction from "./CTAHelpers/ProfileCallToAction"
import OwnerTaskList from "./OwnerTasksHelpers/OwnerTaskList"
// import EventFeed from "../Event/EventFeed"
// import TicketFeed from "../Ticket/TicketFeed"
// import UserFeed from "../User/UserFeed"
// import CompanyFeed from "../Company/CompanyFeed"
import FeedArea from './FeedHelpers/FeedArea'
import AddEventButton from "../Event/EventCRUDButtons/AddEventButton"
import AddEmployeeButton from "../Employee/EventCRUDButtons/AddEventButton"
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
    hasEvents,
    hasCompanies,
    hasTickets,
    children,
}) => {

    const menuChildren = children[0]
    console.log(menuChildren)


    return (
    <section className='profile-full-page'>



            { hasCrud && <div className="crud-left-col">

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

                            </div>
                        </div>


                    <div className='secondary-info'>
                    <div className='static-column'>
                        {externalLinksArray.length > 0 && <ExternalLinksList
                            externalLinksArray={externalLinksArray}
                        />
                        }
                        {pageDescription &&

                            <div className='detailed-description glass'>
                                <p>{pageDescription}</p>
                            </div>
                        }
                                <ProfileCallToAction className='glass'
                                    dataObject={dataObject}
                                    ctaType={ctaType}
                                />
                    </div>
                    <div className='action-column glass'>

                                <div className='newsfeed'>
                                    {
                                        // hasTickets &&
                                        //     <FeedArea
                                        //         entries={dataObject.Tickets}
                                        //         urlPathName='events'
                                        //         alias={`Contributors`}
                                        //     >
                                        // </FeedArea>
                                    }
                                    {
                                        hasEvents &&
                                        <FeedArea
                                            entries={dataObject.Events}
                                            urlPathName='events'
                                            alias={`${pageTitle}'s Events`}
                                        >
                                            {
                                                isProfileOwner && profileType === 'company' &&
                                                <AddEventButton />
                                            }
                                        </FeedArea>
                                    }
                                    {
                                        hasUsers &&
                                        <FeedArea
                                            entries={dataObject.Users}
                                            urlPathName='users'
                                            alias={`Contributors`}
                                        >
                                             {
                                                isProfileOwner && profileType === 'company' &&
                                                <AddEmployeeButton />
                                            }
                                        </FeedArea>

                                    }
                                    {
                                        hasCompanies &&
                                            <FeedArea
                                                      entries={dataObject.Companies}
                                                      urlPathName='companies'
                                                      alias={`Contributors`}
                                            >
                                            </FeedArea>
                                    }
                                </div>
                            </div>
                </div>
                    <div className='crud-area'>
                        {hasCrud && <div className="cover-up" /> }
                        {hasCrud && children[2]}
                    </div>
                </div>
    </section>
    )
}

export default ProfileFullPage
