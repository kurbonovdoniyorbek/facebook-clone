import React from 'react'
import { NavLink } from 'react-router-dom'
import './ErrorPage.css'

const ErrorPage = () => {

    return (
        <div className='error_page'>
            <img src="https://www.facebook.com/images/comet/empty_states_icons/permissions/permissions_gray_wash.svg" alt="" />
            <h1>This content isn't available right now</h1>
            <p>When this happens, it's usually because the owner only shared it with a small group of people, changed who can see it or it's been deleted.</p>
            <NavLink
                to="/"
            >Go to HomePage</NavLink>
        </div>
    )
}

export default ErrorPage
