import React from 'react'
import { NavLink } from 'react-router-dom'
import POST_DATA from '../../static/PostData'
import "./Create.css"




const Create = () => {
    return (
        <div className='create'>
            <h2>Create</h2>
            <ul className='create-page-container'>
                {
                    POST_DATA?.map((items, inx) =>
                        <div className='post_data_mapping' key={inx}>
                            {
                                items?.data.map((item) =>
                                (
                                    <NavLink key={item._id}>
                                        <li className='create-page-item'>
                                            <div className="create-page_item_svg">
                                                <item.icon_name />
                                            </div>
                                            <div className="create_page_item_text">
                                                <h3>
                                                    {
                                                        item.header_text
                                                    }
                                                </h3>
                                                <p>{item.desc}</p>
                                            </div>
                                        </li>
                                    </NavLink>
                                )
                                )
                            }
                            <div className='create-page-hr'></div>
                        </div>
                    )
                }

            </ul>
        </div>
    )
}

export default Create
