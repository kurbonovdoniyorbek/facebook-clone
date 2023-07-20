import React, { useState } from 'react'
import './Navbar.css'
import default_pfp from '../../assets/main/default_profile_pfp.png'
import { FiSearch, FiSettings } from 'react-icons/fi'
import { AiOutlineHome, AiOutlineMenu } from 'react-icons/ai'
import { HiOutlineUsers } from 'react-icons/hi'
import { PiMonitorPlayBold, PiBellRingingFill } from 'react-icons/pi'
import { BsShop, BsFacebook, BsPlusLg, BsFillQuestionCircleFill, BsFillExclamationCircleFill } from 'react-icons/bs'
import { CgMenuGridO, CgGames } from 'react-icons/cg'
import { RiMessengerFill, RiDoorOpenLine } from 'react-icons/ri'
import { NavLink, useLocation } from 'react-router-dom'
import { BiEdit, BiMoon } from 'react-icons/bi'
import { IoVideocam } from 'react-icons/io5'
import { ImEnlarge } from 'react-icons/im'
import { BsThreeDots } from 'react-icons/bs'
import profile_picture from '../../assets/profile_picture.jpeg'
import Menu from '../menu/Menu'

const Navbar = () => {
    const [profileToggle, setProfileToggle] = useState(""),
        [menuActive, setMenuActive] = useState(false),
        [postActive, setPostActive] = useState(false),
        [navbarActive, setNavbarActive] = useState("0"),
        [mesenger, setMessenger] = useState(false),
        [notifcation, setNotification] = useState(false),
        [profileActive, setProfileActive] = useState(false),
        auth = localStorage.getItem("auth")






    const { pathname } = useLocation()
    if (pathname.includes("login")) {
        return <></>
    }

    return (
        auth ? <nav>
            <div className="navbar">
                <div className="navbar-logo">
                    <div className="navbar-logo-image">
                        <NavLink to={"/"}>
                            <BsFacebook />
                        </NavLink>
                    </div>
                    <div className="navbar-logo_search">
                        <FiSearch />
                        <input type="text" placeholder='Search Facebook' />
                    </div>
                </div>
                <ul className="navbar-container">
                    <li className="navbar-container-item"
                        onClick={() => {
                            setNavbarActive("0")
                        }}
                    >
                        <NavLink to={'/'}
                            className={pathname === "/" && navbarActive !== "5" ? "active_navbar" : ""}
                        >
                            <AiOutlineHome />
                        </NavLink>
                    </li>
                    <li className="navbar-container-item"
                        onClick={() => {
                            setNavbarActive("1")
                        }}>
                        <NavLink to={'/friends'}
                            className={pathname.includes("friends") && navbarActive !== "5" ? "active_navbar" : ""}
                        >
                            <HiOutlineUsers />
                        </NavLink>
                    </li>
                    <li className="navbar-container-item"
                        onClick={() => {
                            setNavbarActive("2")
                        }}>
                        <NavLink to={"/watch"}
                            className={pathname.includes("watch") && navbarActive !== "5" ? "active_navbar" : ""}

                        >
                            <PiMonitorPlayBold />
                        </NavLink>
                    </li>
                    <li className="navbar-container-item"
                        onClick={() => {
                            setNavbarActive("3")
                        }}>
                        <NavLink to={"/market"}
                            className={pathname.includes("market") && navbarActive !== "5" ? "active_navbar" : ""}
                        >
                            <BsShop />
                        </NavLink>
                    </li>
                    <li className="navbar-container-item"
                        onClick={() => {
                            setNavbarActive("4")
                        }}>
                        <NavLink to={'/games'}
                            className={pathname.includes("games") && navbarActive !== "5" ? "active_navbar" : ""}
                        >
                            <CgGames className='navbar_container_item-games' />
                        </NavLink>
                    </li>
                    <li className="navbar-container-item"
                        onClick={() => {
                            setMenuActive(p => !p)
                            setNavbarActive("5")
                        }}
                    >
                        <NavLink
                            className={navbarActive === "5" ? "active_navbar" : ""}
                        >
                            <AiOutlineMenu className="navbar_container_item_menu" />
                        </NavLink>
                    </li>
                </ul>
                <ul className="navbar-profile-part">
                    <li className={`navbar-profile-items ${profileToggle === "1" && menuActive ? "active_profile" : ""}`}
                        onClick={() => {
                            setProfileToggle("1")

                        }}
                    >
                        <CgMenuGridO className='navbar_profile_item_menu' onClick={() => {
                            setMenuActive(p => !p)
                        }} />
                        <BsPlusLg className='navbar_profile_item_plus'
                            onClick={() => {
                                setPostActive(p => !p)
                            }}
                        />
                    </li>
                    <li className={`navbar-profile-items ${profileToggle === "2" && mesenger ? "active_profile" : ""}`}
                        onClick={() => {
                            setProfileToggle("2")
                            setMessenger(p => !p)
                        }}>
                        <RiMessengerFill />
                    </li>
                    <li className={`navbar-profile-items ${profileToggle === "3" && notifcation ? "active_profile" : ""}`}
                        onClick={() => {
                            setProfileToggle("3")
                            setNotification(p => !p)
                        }}>
                        <PiBellRingingFill />
                    </li>
                    <li className={`navbar-profile-items ${profileToggle === "4" ? "active_profile" : ""}`}
                        onClick={() => {
                            setProfileToggle("4")
                            setProfileActive(p => !p)
                        }}>
                        <img src={profile_picture} alt="" />
                    </li>
                </ul>
            </div>
            <Menu menuActive={menuActive} setMenuActive={setMenuActive} setPostActive={setPostActive} postActive={postActive} />
            <Messenger setMessenger={setMessenger} mesenger={mesenger} />
            <Notification setNotification={setNotification} notifcation={notifcation} />
            <Profile setProfileActive={setProfileActive} profileActive={profileActive} />
        </nav > :
            <></>
    )
}

export const Messenger = ({ setMessenger, mesenger }) => {
    return (
        <div>
            {mesenger && <div className="menu_shadow"
                onClick={() => setMessenger(p => !p)}
            ></div>}
            {
                mesenger && <div className='messenger'>
                    <div className="messenger_head_txt">
                        <h1>Chats</h1>
                        <ul className="messenger_head_icons">
                            <li><BsThreeDots /></li>
                            <li><ImEnlarge /></li>
                            <li><IoVideocam /></li>
                            <li><BiEdit /></li>
                        </ul>
                    </div>
                    <div className="market_menu_search">
                        <FiSearch />
                        <input type="text" placeholder='Search Messenger' />
                    </div>
                    <ul className="messenger_container">
                        <li>
                            <img src={default_pfp} alt="" />
                            <div className="messenger_container_item_text">
                                <h5>Doniyorbek Kurbonov</h5>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, eligendi?</p>
                            </div>
                        </li>
                        <li>
                            <img src={default_pfp} alt="" />
                            <div className="messenger_container_item_text">
                                <h5>Doniyorbek Kurbonov</h5>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, eligendi?</p>
                            </div>
                        </li>
                        <li>
                            <img src={default_pfp} alt="" />
                            <div className="messenger_container_item_text">
                                <h5>Doniyorbek Kurbonov</h5>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, eligendi?</p>
                            </div>
                        </li>
                        <li>
                            <img src={default_pfp} alt="" />
                            <div className="messenger_container_item_text">
                                <h5>Doniyorbek Kurbonov</h5>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, eligendi?</p>
                            </div>
                        </li>
                        <li>
                            <img src={default_pfp} alt="" />
                            <div className="messenger_container_item_text">
                                <h5>Doniyorbek Kurbonov</h5>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, eligendi?</p>
                            </div>
                        </li>
                        <li>
                            <img src={default_pfp} alt="" />
                            <div className="messenger_container_item_text">
                                <h5>Doniyorbek Kurbonov</h5>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, eligendi?</p>
                            </div>
                        </li>
                        <li>
                            <img src={default_pfp} alt="" />
                            <div className="messenger_container_item_text">
                                <h5>Doniyorbek Kurbonov</h5>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, eligendi?</p>
                            </div>
                        </li>
                    </ul>
                    <div className="menu-right-container-line"></div>
                    <NavLink className="messenger_see_all">
                        See all in Messenger
                    </NavLink>
                </div>
            }
        </div>
    )
}

export const Notification = ({ setNotification, notifcation }) => {
    return (
        <div>
            {notifcation && <div className="menu_shadow"
                onClick={() => setNotification(p => !p)}
            ></div>}
            {
                notifcation && <div className='notifacation'>
                    <div className="messenger_head_txt">
                        <h1>Notifcation</h1>
                        <ul className="messenger_head_icons">
                            <li><BsThreeDots /></li>
                        </ul>
                    </div>
                    <div className="notification_btn">
                        <button>
                            All
                        </button>
                        <button>
                            Unread
                        </button>
                    </div>
                    <div className="notifcation_container">
                        <div className="notifcation_container_txt">
                            <h1>Earlier</h1>
                            <p>See all</p>
                        </div>
                        <ul className="notification_items">
                            <li>
                                <div className="notfication_item_pfp">
                                    <img src={default_pfp} alt="" />
                                    <div className="notifcation_item_icn">
                                        <PiBellRingingFill />
                                    </div>
                                </div>
                                <div className="notification_item_txt">
                                    <h6>You have a new friend suggestion:</h6>
                                    <h2>Doniyorbek Kurbonov</h2>
                                    <p>a day agao</p>
                                </div>
                            </li>
                            <li>
                                <div className="notfication_item_pfp">
                                    <img src={default_pfp} alt="" />
                                    <div className="notifcation_item_icn">
                                        <PiBellRingingFill />
                                    </div>
                                </div>
                                <div className="notification_item_txt">
                                    <h6>You have a new friend suggestion:</h6>
                                    <h2>Doniyorbek Kurbonov</h2>
                                    <p>a day agao</p>
                                </div>
                            </li>
                            <li>
                                <div className="notfication_item_pfp">
                                    <img src={default_pfp} alt="" />
                                    <div className="notifcation_item_icn">
                                        <PiBellRingingFill />
                                    </div>
                                </div>
                                <div className="notification_item_txt">
                                    <h6>You have a new friend suggestion:</h6>
                                    <h2>Doniyorbek Kurbonov</h2>
                                    <p>a day agao</p>
                                </div>
                            </li>
                            <li>
                                <div className="notfication_item_pfp">
                                    <img src={default_pfp} alt="" />
                                    <div className="notifcation_item_icn">
                                        <PiBellRingingFill />
                                    </div>
                                </div>
                                <div className="notification_item_txt">
                                    <h6>You have a new friend suggestion:</h6>
                                    <h2>Doniyorbek Kurbonov</h2>
                                    <p>a day agao</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            }
        </div>
    )
}

export const Profile = ({ profileActive, setProfileActive }) => {
    return (
        <div>
            {profileActive && <div className="menu_shadow"
                onClick={() => setProfileActive(p => !p)}
            ></div>}
            {
                profileActive && <div className="navbar_profile">
                    <NavLink className="navbar_profile_manage" to="profile">
                        <div className="navbar_profile_pfp">
                            <img src={profile_picture} alt="img-1" />
                            <p>Doniyorbek Kurbonov</p>
                        </div>
                        <div className="navbar-profile-line"></div>
                        <NavLink>
                            See all profile
                        </NavLink>
                    </NavLink>
                    <div className="navbar_profile_items">
                        <NavLink>
                            <div className="navbar_profile_item_icons">
                                <FiSettings />
                            </div>
                            <p>Setting & privacy</p>
                        </NavLink>
                        <NavLink>
                            <div className="navbar_profile_item_icons">
                                <BsFillQuestionCircleFill />
                            </div>
                            <p>Help & Support</p>
                        </NavLink>
                        <NavLink>
                            <div className="navbar_profile_item_icons">
                                <BiMoon />
                            </div>
                            <p>Display & accessiblity</p>
                        </NavLink>
                        <NavLink>
                            <div className="navbar_profile_item_icons">
                                <BsFillExclamationCircleFill />
                            </div>
                            <p>Give feedback</p>
                        </NavLink>
                        <NavLink>
                            <div className="navbar_profile_item_icons">
                                <RiDoorOpenLine />
                            </div>
                            <p>Log Out</p>
                        </NavLink>
                    </div>
                </div>
            }
        </div>
    )
}

export default Navbar
