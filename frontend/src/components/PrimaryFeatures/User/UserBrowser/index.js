import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import UserDetails from '../UserDetails'

import { loadUsers } from '../../../../store/user';

import './UserBrowser.css'

import EditUserButton from '../UserCRUDButtons/EditUserButton';
import DeleteUserButton from '../UserCRUDButtons/DeleteUserButton';
import BrowserInfoArea from '../../BrowserHelpers/BrowserInfoArea';
import BrowserGrid from '../../BrowserHelpers/BrowserGrid';
import ViewUserButton from '../UserCRUDButtons/ViewUserButton';
import AddUserButton from '../UserCRUDButtons/AddUserButton';
import BrowserQuickStatsArea from '../../BrowserHelpers/BrowserQuickStats';
import BrowserCTAArea from '../../BrowserHelpers/BrowserCTAArea';



const UserBrowser = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadUsers())
    }, [dispatch])

    const userState = useSelector(state => {
        return state.user
    })

    console.log({userState})

    const sessionUser = useSelector(state => state.session.user);

    const usersArr =
        //remove all non-number keys that got added to the user state erroneously
        Object.entries(userState)
            .filter(pair => parseInt(pair[0]))
            .map(pair => pair[1])

    const title = `
        HUMAN PERSONS
    `

    const bodyCopy = `Venture hearts of the stars dream of the mind's eye the sky calls to us Sea of Tranquility? Brain is the seed of intelligence laws of physics consciousness extraplanetary concept of the number one great turbulent clouds? The only home we've ever known tingling of the spine rich in heavy atoms great turbulent clouds made in the interiors of collapsing stars two ghostly white figures in coveralls and helmets are softly dancing and billions upon billions upon billions`

    return (
        <div className='user-browser'>
            <div className='browser-left-col'>
                <BrowserQuickStatsArea
                    title={title}
                />

                <BrowserInfoArea
                    bodyCopy={bodyCopy}
                >

                </BrowserInfoArea>

            </div>
            <div className='browser-right-col'>
            <BrowserGrid
                entries={usersArr}
                hasCompanies={true}
                companiesAlias={'Projects'}
                urlPath={'users'}
            >
                {/* <ViewUserButton /> */}
                {/* <EditUserButton />
                <DeleteUserButton /> */}
                     {/* <i class="fas fa-user-check"></i> */}
                </BrowserGrid>
            </div>
        </div>
    )

}

export default UserBrowser
