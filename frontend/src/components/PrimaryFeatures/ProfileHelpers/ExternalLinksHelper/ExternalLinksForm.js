import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { deleteCompanyLinks, loadCompanies } from "../../../../store/company"
import { addExternalLinks } from "../../../../store/externallinks"

import FormInput from "../../../Basic/FormHelpers/FormInput"
import './ExternalLinksForm.css'



export const linkMatch = [
    {
        name: 'alibaba',
        pattern: /^\S*alibaba[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*?$/,
        backgroundImage: `url('/assets/icons/alibaba.svg')`
    },
    {
        name: 'angellist',
        pattern: /^\S*angel[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*?$/,
        backgroundImage: `url('/assets/icons/angellist.svg')`
    },
    {
        name: 'behance',
        pattern: /^\S*behance[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*?$/,
        backgroundImage: `url('/assets/icons/behance.svg')`
    },
    {
        name: 'dribbble',
        pattern: /^\S*dribbble[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*?$/,
        backgroundImage: `url('/assets/icons/dribbble.svg')`
    },
    {
        name: 'facebook',
        pattern: /^\S*facebook[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*?$/,
        backgroundImage: `url('/assets/icons/facebook.svg')`
    },
    {
        name: 'github',
        pattern: /^\S*github[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*?$/,
        backgroundImage: `url('/assets/icons/github.svg')`
    },
    {
        name: 'google',
        pattern: /^\S*google[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*?$/,
        backgroundImage: `url('/assets/icons/google.svg')`
    },
    {
        name: 'heroku',
        pattern: /^\S*heroku[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*?$/,
        backgroundImage: `url('/assets/icons/heroku.svg')`
    },
    {
        name: 'instagram',
        pattern: /^\S*instagram[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*?$/,
        backgroundImage: `url('/assets/icons/instagram.svg')`
    },
    {
        name: 'kickstarter',
        pattern: /^\S*kickstarter[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*?$/,
        backgroundImage: `url('/assets/icons/kickstarter.svg')`
    },
    {
        name: 'linkedin',
        pattern: /^\S*linkedin[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*?$/,
        backgroundImage: `url('/assets/icons/linkedin.svg')`
    },
    {
        name: 'pinterest',
        pattern: /^\S*pinterest[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*?$/,
        backgroundImage: `url('/assets/icons/pinterest.svg')`
    },
    {
        name: 'producthunt',
        pattern: /^\S*producthunt[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*?$/,
        backgroundImage: `url('/assets/icons/producthunt.svg')`
    },
    {
        name: 'quora',
        pattern: /^\S*quora[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*?$/,
        backgroundImage: `url('/assets/icons/quora.svg')`
    },
    {
        name: 'reddit',
        pattern: /^\S*reddit[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*?$/,
        backgroundImage: `url('/assets/icons/reddit.svg')`
    },
    {
        name: 'snapchat',
        pattern: /^\S*snapchat[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*?$/,
        backgroundImage: `url('/assets/icons/snapchat.svg')`
    },
    {
        name: 'stackoverflow',
        pattern: /^\S*stacko[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*?$/,
        backgroundImage: `url('/assets/icons/stackoverflow.svg')`
    },
    {
        name: 'stackshare',
        pattern: /^\S*stackshare[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*?$/,
        backgroundImage: `url('/assets/icons/stackshare.svg')`
    },
    {
        name: 'tableau',
        pattern: /^\S*tableau[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*?$/,
        backgroundImage: `url('/assets/icons/tableau.svg')`
    },
    {
        name: 'tiktok',
        pattern: /^\S*tiktok[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*?$/,
        backgroundImage: `url('/assets/icons/tiktok.svg')`
    },
    {
        name: 'twitch',
        pattern: /^\S*twitch[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*?$/,
        backgroundImage: `url('/assets/icons/twitch.svg')`
    },
    {
        name: 'twitter',
        pattern: /^\S*twitter[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*?$/,
        backgroundImage: `url('/assets/icons/twitter.svg')`
    },
    {
        name: 'udemy',
        pattern: /^\S*udemy[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*?$/,
        backgroundImage: `url('/assets/icons/udemy.svg')`
    },
    {
        name: 'vercel',
        pattern: /^\S*vercel[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*?$/,
        backgroundImage: `url('/assets/icons/vercel.svg')`
    },
    {
        name: 'vimeo',
        pattern: /^\S*vimeo[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*?$/,
        backgroundImage: `url('/assets/icons/vimeo.svg')`
    },
    {
        name: 'wordpress',
        pattern: /^\S*wordpress[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*?$/,
        backgroundImage: `url('/assets/icons/wordpress.svg')`
    },
    {
        name: 'youtube',
        pattern: /^\S*youtu[A-Za-z0-9\-\._~:\/\?#\[\]@!$&'\(\)\*\+,;\=]*?$/,
        backgroundImage: `url('/assets/icons/youtube.svg')`
    },
    {
        name: 'default',
        pattern: /^\S+$/,
        backgroundImage: `url('/assets/icons/default.svg')`
    }
]

const ExternalLinksForm = ({
    profileType,
    id,
    routeName,
    social1,
    setSocial1,
    social2,
    setSocial2,
    social3,
    setSocial3,
    social4,
    setSocial4,
    social5,
    setSocial5,
    social1Icon,
    setSocial1Icon,
    social2Icon,
    setSocial2Icon,
    social3Icon,
    setSocial3Icon,
    social4Icon,
    setSocial4Icon,
    social5Icon,
    setSocial5Icon,
    primaryExternalLink,
    setPrimaryExternalLink,
    primaryExternalLabel,
    setPrimaryExternalLabel,
    setEditLinksMode
}) => {

    const dispatch = useDispatch();

    const findMatchingUrl = (str) => {
        for (let i = 0; i < linkMatch.length; i++) {
            let pattern = linkMatch[i].pattern
            let backgroundImage = linkMatch[i].backgroundImage
            if (pattern.test(str)) return backgroundImage
        }
        return ``
    }

    useEffect(() => {
        setSocial1Icon(findMatchingUrl(social1))
    }, [social1])

    useEffect(() => {
        setSocial2Icon(findMatchingUrl(social2))
    }, [social2])

    useEffect(() => {
        setSocial3Icon(findMatchingUrl(social3))
    }, [social3])

    useEffect(() => {
        setSocial4Icon(findMatchingUrl(social4))
    }, [social4])

    useEffect(() => {
        setSocial5Icon(findMatchingUrl(social5))
    },[social5])

    let userId, companyId, eventId
    if (profileType === 'user') userId = id
    if (profileType === 'company') companyId = id
    if (profileType === 'event') eventId = id


    const handleSubmit = async (e) => {
        e.preventDefault()
        let newLinks = [
            {
                url: social1,
                icon: social1Icon,
                primaryLink: false,
                primaryLinkName: null,
                userId,
                eventId,
                companyId
            },
            {
                url: social2,
                icon: social2Icon,
                primaryLink: false,
                primaryLinkName: null,
                userId,
                eventId,
                companyId

            },
            {
                url: social3,
                icon: social3Icon,
                primaryLink: false,
                primaryLinkName: null,
                userId,
                eventId,
                companyId

            },
            {
                url: social4,
                icon: social4Icon,
                primaryLink: false,
                primaryLinkName: null,
                userId,
                eventId,
                companyId

            },
            {
                url: social5,
                icon: social5Icon,
                primaryLink: false,
                primaryLinkName: null,
                userId,
                eventId,
                companyId

            },
            {
                url: primaryExternalLink,
                icon: null,
                primaryLink: true,
                primaryLabel: primaryExternalLabel,
                userId,
                eventId,
                companyId
            }
        ]


        try {
            // dispatch(addExternalLinks(submission))
            let submission = newLinks.filter(link => link.url)
            if (profileType === 'company') {
                dispatch(deleteCompanyLinks(id))
                for (let i = 0; i < submission.length; i++) {
                    dispatch(addExternalLinks(submission[i]))
                }
                dispatch(loadCompanies())
            }
            setEditLinksMode(false)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className="external-links-form">
            <div className="form-container">
            <form
                className="add-external-links"
                onSubmit={handleSubmit}
            >
                <div className="all-inputs">
                        <FormInput
                            labelText={'CALL TO ACTION LABEL'}
                            id={1}
                            type={'text'}
                            stateVar={primaryExternalLabel}
                            maxLength={40}
                            setStateVar={setPrimaryExternalLabel}
                            required={false}
                            placeholder={`i.e WEBSITE or PORTFOLIO`}
                            >
                        </FormInput>
                        <FormInput
                            labelText={'CALL TO ACTION URL'}
                            id={1}
                            type={'url'}
                            stateVar={primaryExternalLink}
                            setStateVar={setPrimaryExternalLink}
                            required={false}
                            placeholder={''}
                            >
                        </FormInput>

                    <div className="input-line">
                        {
                            social1Icon && social1Icon.length>0 &&
                    <div className="icon-holder"
                        >
                                <div className="icon-image"
                            style={{backgroundImage: social1Icon}}
                                    >
                            </div>
                        </div>
                            }
                        <FormInput
                            labelText={'SOCIAL URL (OPTIONAL)'}
                            id={1}
                            type={'url'}
                            stateVar={social1}
                            setStateVar={setSocial1}
                            required={false}
                            placeholder={''}
                            >
                        </FormInput>
                    </div>
                    <div className="input-line">
                        {
                            social2Icon && social2Icon.length>0 &&
                    <div className="icon-holder"
                        >
                                <div className="icon-image"
                            style={{backgroundImage: social2Icon}}
                                    >
                            </div>
                        </div>
                            }
                        <FormInput
                            labelText={'SOCIAL URL (OPTIONAL)'}
                            id={1}
                            type={'url'}
                            stateVar={social2}
                            setStateVar={setSocial2}
                            required={false}
                            placeholder={''}
                            >
                        </FormInput>
                    </div>
                    <div className="input-line">
                        {
                            social3Icon && social3Icon.length>0 &&
                    <div className="icon-holder"
                        >
                                <div className="icon-image"
                            style={{backgroundImage: social3Icon}}
                                    >
                            </div>
                        </div>
                            }
                        <FormInput
                            labelText={'SOCIAL URL (OPTIONAL)'}
                            id={1}
                            type={'url'}
                            stateVar={social3}
                            setStateVar={setSocial3}
                            required={false}
                            placeholder={''}
                            >
                        </FormInput>
                    </div>
                    <div className="input-line">
                        {
                            social4Icon && social4Icon.length>0 &&
                    <div className="icon-holder"
                        >
                                <div className="icon-image"
                            style={{backgroundImage: social4Icon}}
                                    >
                            </div>
                        </div>
                            }
                        <FormInput
                            labelText={'SOCIAL URL (OPTIONAL)'}
                            id={1}
                            type={'url'}
                            stateVar={social4}
                            setStateVar={setSocial4}
                            required={false}
                            placeholder={''}
                            >
                        </FormInput>
                    </div>


                    <div className="input-line">
                        {
                            social5Icon && social5Icon.length>0 &&
                    <div className="icon-holder"
                        >
                                <div className="icon-image"
                            style={{backgroundImage: social5Icon}}
                                    >
                            </div>
                        </div>
                            }
                        <FormInput
                            labelText={'SOCIAL URL (OPTIONAL)'}
                            id={1}
                            type={'url'}
                            stateVar={social5}
                            setStateVar={setSocial5}
                            required={false}
                            placeholder={''}
                            >
                        </FormInput>
                    </div>



                </div>

                <button
              className='fake-submit'
              type='submit'
              >UPDATE SOCIAL LINKS</button>
                </form>
                </div>
            </div>

    )
}

export default ExternalLinksForm
