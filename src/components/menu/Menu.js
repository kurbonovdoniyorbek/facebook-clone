import React from 'react'
import Create from '../create/Create'
import MENU_DATA from '../../static/MenuData'
import { FiSearch } from 'react-icons/fi'
import "./Menu.css"
import { NavLink } from 'react-router-dom'


const Menu = ({ setMenuActive, menuActive, setPostActive, postActive }) => {
    const [searchInp, setSearchInp] = React.useState("")

    // const filtering = (data) => {
    //     const filter = data?.map(i => i.data.filter((r) => r.text.toLowerCase().includes(searchInp)))
    //     for (let i = 0; i < filter.length; i++) {
    //         const filter_arr = []
    //         if (filter[i].length > 0) {
    //             filter_arr.push(filter[i])
    //         }
    //         for (const el of filter_arr) {
    //             return el
    //         }
    //     }
    // }


    // console.log(filtering(MENU_DATA)?.map((item) => console.log(item)));
    return (
        <div>
            {menuActive && <div className="menu_shadow"
                onClick={() => setMenuActive(p => !p)}
            ></div>}

            {
                menuActive && <div className="menu">
                    <h1>Menu</h1>
                    <div className="menu_page">
                        <div className="menu_right_part">
                            <div className="menu_right-part-input">
                                <FiSearch />
                                <input
                                    type="text"
                                    placeholder='Search Menu'
                                    value={searchInp}
                                    onChange={(e) => setSearchInp(e.target.value)}
                                />
                            </div>
                            <ul className='menu-right-container'>
                                {
                                    MENU_DATA?.map((item, inx) =>
                                        <div key={inx} className="menu-right_page_map_container">
                                            <p>{item.header_text}</p>
                                            {
                                                item?.data.map((i) =>
                                                    <NavLink key={i._id}>
                                                        <li className='menu-right_items'>
                                                            <div className="menu-right_item-pic">
                                                                <img src={require(`../../assets/menu_icons/${i?.url_text}.png`)} alt={`${i.url_text}`} />
                                                            </div>
                                                            <div className='menu-right-item-text'>
                                                                <h2>{i.text}</h2>
                                                                <p>{i.desc}</p>
                                                            </div>
                                                        </li>
                                                    </NavLink>
                                                )
                                            }
                                            <div className="menu-right-container-line"></div>
                                        </div>
                                    )
                                }
                            </ul>
                        </div>
                        <div className="menu_left_part">
                            <Create />
                        </div>
                    </div>
                </div>
            }

            {postActive && <div className="menu_shadow"
                onClick={() => setPostActive(p => !p)}
            ></div>}

            {
                postActive &&
                <div className="post_part">
                    <Create />
                </div>
            }
        </div>
    )
}




export default Menu
