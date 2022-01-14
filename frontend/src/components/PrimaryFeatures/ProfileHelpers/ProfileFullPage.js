import { useState, useEffect } from "react"

import ProfileImage from "./ImageHelpers/ProfileImage"
import EditProfileLink from "./ProfileCRUD/EditProfileLink"
import DeleteProfileLink from "./ProfileCRUD/DeleteProfileLink"
import TagsGroup from "./TagHelpers/TagsGroup"
import ProfileCallToAction from "./CTAHelpers/ProfileCallToAction"
import OwnerTaskList from "./OwnerTasksHelpers/OwnerTaskList"

import FeedArea from './FeedHelpers/FeedArea'
import AddEventButton from "../Event/EventCRUDButtons/AddEventButton"
import AddEmployeeButton from "../Employee/EmployeeCRUDButtons/AddEventButton"
// import SocialLinksForm from "./ExternalLinksHelper/SocialLinksHelper/SocialLinksForm"
import ExternalLinks from "./ExternalLinksHelper/ExternalLinks"

import './ProfileFullPage.css'
import DropDownMenu from "../../Basic/Navigation/Menus/DropDownMenu"
import AddCompanyButton from "../Company/CompanyCRUDButtons/AddCompanyButton"
import ExternalLinksForm from "./ExternalLinksHelper/ExternalLinksForm"
import ImageForm from './ImageHelpers/ImageForm'

import { linkMatch } from "./ExternalLinksHelper/ExternalLinksForm"

//pass in CRUD form as TRUE and include as child element

const ProfileFullPage = ({
    id,
    // hasCrud,
    // setHasCrud,
    editInfoMode,
    setEditInfoMode,
    editImageMode,
    setEditImageMode,
    editLinksMode,
    setEditLinksMode,
    editEmployeesMode,
    setEditEmployeesMode,
    dataObject,
    profileType,
    pageTitle,
    pageDescription,
    imageSize,
    pageShortInfo,
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

    console.log({
        id,
        editInfoMode,
        setEditInfoMode,
        editImageMode,
        setEditImageMode,
        editLinksMode,
        setEditLinksMode,
        editEmployeesMode,
        setEditEmployeesMode,
        dataObject,
        profileType,
        pageTitle,
        pageDescription,
        imageSize,
        pageShortInfo,
        isProfileOwner,
        hasTags,
        tagsAlias,
        tagsSize,
        ctaType,
        hasUsers,
        hasEvents,
        hasCompanies,
        hasTickets,
        children
    })

    const findMatchingUrl = (str) => {
        for (let i = 0; i < linkMatch.length; i++) {
            let pattern = linkMatch[i].pattern
            let backgroundImage = linkMatch[i].backgroundImage
            if (pattern.test(str)) return backgroundImage
        }
    }

    let
        social1Default,
        social2Default,
        social3Default,
        social4Default,
        social5Default,
        social1IconDefault,
        social2IconDefault,
        social3IconDefault,
        social4IconDefault,
        social5IconDefault,
        primaryExternalLinkDefault,
        primaryExternalLabelDefault

        if (dataObject && dataObject.ExternalLinks) {

            let fullLinksArray = dataObject.ExternalLinks

            if (dataObject.ExternalLinks.length) {
                let linksArray = []
                for (let i = 0; i < fullLinksArray.length; i++) {
                    if (fullLinksArray[i].isPrimary) {
                        primaryExternalLinkDefault = fullLinksArray[i].url
                        primaryExternalLabelDefault = fullLinksArray[i].primaryLabel
                    } else {
                        linksArray.push(fullLinksArray[i])
                    }
                }

                console.log({linksArray})

                     if (linksArray[0]) {
                        social1Default = linksArray[0].url
                        social1IconDefault = findMatchingUrl(social1Default)
                     }

                    if (linksArray[1]) {
                        social2Default = linksArray[1].url
                        social2IconDefault = findMatchingUrl(social2Default)
                    }

                    if (linksArray[2]) {
                        social3Default = linksArray[2].url
                        social3IconDefault = findMatchingUrl(social3Default)
                    }

                    if (linksArray[3]) {
                        social4Default = linksArray[3].url
                        social4IconDefault = findMatchingUrl(social4Default)
                    }

                    if (linksArray[4]) {
                        social5Default = linksArray[4].url
                        social5IconDefault = findMatchingUrl(social5Default)
                    }
                }
            }

    const [imageUrl, setImageUrl] = useState(dataObject.imageUrl)
    const [social1, setSocial1] = useState(social1Default)
    const [social2, setSocial2] = useState(social2Default)
    const [social3, setSocial3] = useState(social3Default)
    const [social4, setSocial4] = useState(social4Default)
    const [social5, setSocial5] = useState(social5Default)
    const [social1Icon, setSocial1Icon] = useState(social1IconDefault)
    const [social2Icon, setSocial2Icon] = useState(social2IconDefault)
    const [social3Icon, setSocial3Icon] = useState(social3IconDefault)
    const [social4Icon, setSocial4Icon] = useState(social4IconDefault)
    const [social5Icon, setSocial5Icon] = useState(social5IconDefault)

    const [primaryExternalLink, setPrimaryExternalLink] = useState(primaryExternalLinkDefault)
    const [primaryExternalLabel, setPrimaryExternalLabel] = useState(primaryExternalLabelDefault)

    let routeName
    if(profileType === 'company') routeName='companies'
    if(profileType === 'user') routeName='users'
    if(profileType === 'event') routeName='events'

    return (

        <section className='profile-full-page'>


            {dataObject &&
                <div className="crud-left-col"></div>
            }

            {dataObject &&
                    <div className='primary-info-col'>

                        <div className='top-banner glass'>
                            <div className='image-container'>
                        <ProfileImage
                            imageUrl={imageUrl}
                            setImageUrl={setImageUrl}
                            size={imageSize}
                            defaultName={pageTitle}
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

                            </div>
                        </div>


                    <div className='secondary-info'>
                    <div className='static-column'>
                        {(

                            social1 ||
                            social2 ||
                            social3 ||
                            social4 ||
                            social5 ||
                            primaryExternalLabel
                        ) && <ExternalLinks
                            social1={social1}
                            social2={social2}
                            social3={social3}
                            social4={social4}
                            social5={social5}
                            social1Icon={social1Icon}
                            social2Icon={social2Icon}
                            social3Icon={social3Icon}
                            social4Icon={social4Icon}
                            social5Icon={social5Icon}
                            primaryExternalLink={primaryExternalLink}
                            primaryExternalLabel={primaryExternalLabel}
                        />}

                        {pageDescription &&

<div className='detailed-description glass'>
                                <p>{pageDescription}</p>
                            </div>
                        }
                        {ctaType &&<ProfileCallToAction className='glass'
                            dataObject={dataObject}
                            ctaType={ctaType}
                        />
                        }
                    </div>
                    <div className='action-column glass scroll-area'>


                                <div className='newsfeed'>
                                    {
                                        hasTickets &&
                                        <FeedArea
                                        entries={dataObject.Tickets}
                                        urlPathName='events'
                                        alias={`tickets`}
                                        >
                                        </FeedArea>
                                    }
                                    {
                                        hasEvents &&
                                        <FeedArea
                                        entries={dataObject.Events}
                                        urlPathName='events'
                                        alias={`${pageTitle}'s Events`}
                                        profileType={profileType}
                                        >
                                            {
                                                isProfileOwner && profileType === 'company' &&
                                                <AddEventButton />
                                            }
                                        </FeedArea>
                                    }
                                    {
                                        hasUsers &&
                                        dataObject.Users &&
                                        profileType == 'company' &&
                                        <FeedArea
                                        entries={dataObject.Users}
                                        urlPathName='users'
                                        alias={`Contributors`}
                                        profileType={profileType}
                                        >
                                             {
                                                 isProfileOwner  &&
                                                <AddEmployeeButton />
                                             }
                                        </FeedArea>

                            }

                            {/* //event attendee list */}
                                {
                                        hasUsers &&
                                        dataObject.Tickets &&
                                        (profileType === 'event') &&
                                        <FeedArea
                                            entries={dataObject.Tickets.map(ticket => ticket.User)}
                                            urlPathName='users'
                                            alias={`Attendees`}
                                        >
                                             {/* {
                                                isProfileOwner  &&
                                                <AddEmployeeButton />
                                             } */}
                                        </FeedArea>

                            }

                            {/* //event attendee list */}
                                    {
                                        hasCompanies &&
                                        dataObject.Companies &&
                                            <FeedArea
                                                      entries={dataObject.Companies}
                                                      urlPathName='companies'
                                                      alias={`Contributors`}
                                            >
                                                {isProfileOwner && profileType === 'user'
                                                && <AddCompanyButton/>
                                                }
                                            </FeedArea>
                                    }
                                </div>
                            </div>
                </div>
                {
                    isProfileOwner &&
                    !(
                        editInfoMode ||
                        editEmployeesMode ||
                        editLinksMode ||
                        editImageMode
                    ) &&
                        <div className="owner-menu-container">
                            <DropDownMenu entry={dataObject}>
                                {children[0]}
                                {children[1]}
                                {children[2]}
                                {children[3]}
                            </DropDownMenu>
                        </div>
                }
                    <div className='crud-area'>
                        {(
                            editInfoMode ||
                            editEmployeesMode ||
                            editLinksMode ||
                            editImageMode
                        ) && <div className="cover-up" />
                        }

                        {editInfoMode && children[4]}
                        {editLinksMode &&

                        <ExternalLinksForm
                        profileType={profileType}
                        id={id}
                        routeName={routeName}
                        social1={social1}
                        setSocial1={setSocial1}
                        social2={social2}
                        setSocial2={setSocial2}
                        social3={social3}
                        setSocial3={setSocial3}
                        social4={social4}
                        setSocial4={setSocial4}
                        social5={social5}
                        setSocial5={setSocial5}
                        social1Icon={social1Icon}
                        setSocial1Icon={setSocial1Icon}
                        social2Icon={social2Icon}
                        setSocial2Icon={setSocial2Icon}
                        social3Icon={social3Icon}
                        setSocial3Icon={setSocial3Icon}
                        social4Icon={social4Icon}
                        setSocial4Icon={setSocial4Icon}
                        social5Icon={social5Icon}
                        setSocial5Icon={setSocial5Icon}
                        primaryExternalLink={primaryExternalLink}
                        setPrimaryExternalLink={setPrimaryExternalLink}
                        primaryExternalLabel={primaryExternalLabel}
                        setPrimaryExternalLabel={setPrimaryExternalLabel}
                        setEditLinksMode={setEditLinksMode}

                        />

                    }

                    {editImageMode &&

                    <ImageForm
                        pageTitle={pageTitle}
                        imageUrl={imageUrl}
                        setImageUrl={setImageUrl}
                        setEditImageMode={setEditImageMode}
                        profileType={profileType}
                        dataObject={dataObject}
                        id={id}
                    />

}
                    </div>
            </div>
            }

    </section>
    )
}

export default ProfileFullPage
