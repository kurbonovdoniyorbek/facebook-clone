import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { RiChatSmile3Line } from 'react-icons/ri'
import { BsCamera, BsFillCameraFill, BsThreeDots } from 'react-icons/bs'
import { AiOutlineFileGif, AiOutlinePlus, AiOutlineSmile, AiTwotoneSetting } from 'react-icons/ai'
import { BiChevronDown, BiSolidChevronDown, BiSolidChevronUp, BiSolidPencil } from 'react-icons/bi'
import { AiFillLike, AiOutlineLike } from 'react-icons/ai'
import { RxCross2 } from 'react-icons/rx'
import { GiEarthAfricaEurope } from 'react-icons/gi'
import { PiShareFatThin, PiSquaresFourLight, PiSticker } from 'react-icons/pi'
import { GoComment } from 'react-icons/go'
import { HiOutlineAdjustmentsHorizontal } from 'react-icons/hi2'
import { IoReorderThreeSharp } from 'react-icons/io5'
import default_pfp from '../../assets/main/default_profile_pfp.png'
import live_video from '../../assets/main/live_video.png'
import photo_video from '../../assets/main/photo_video.png'
import feeling from '../../assets/main/feeling.png'
import MyPosts from '../../static/MyPosts'
import profile_pfp from '../../assets/profile_picture.jpeg'
import thumbnail from '../../assets/thumbnail.jpeg'
import post1 from '../../assets/post-1.jpeg'
import post2 from '../../assets/post-2.jpeg'
import './Account.css'

const Account = () => {
    const [screenSize, setScreenSize] = useState(getCurrentDimension());
    const [buttonActive, setButtonActive] = useState("")
    const [sticky, setSticky] = useState(false)
    const [like, setLike] = React.useState(false)

    function getCurrentDimension() {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }

    useEffect(() => {
        const updateDimension = () => {
            setScreenSize(getCurrentDimension())
        }
        window.addEventListener('resize', updateDimension);


        return (() => {
            window.removeEventListener('resize', updateDimension);
        })
    }, [screenSize])

    function stickyFunc() {
        if (screenSize.width <= 1160) {
            if (window.scrollY >= 805) {
                setSticky(true)
            }
            else {
                setSticky(false)
            }
        }
        else {
            if (window.scrollY >= 645) {
                setSticky(true)
            }
            else {
                setSticky(false)
            }
        }
    }

    window.addEventListener("scroll", stickyFunc)


    return (
        <div className="account_page">
            <div className="account_page_profile_pictures">
                <div className="account_page_container">
                    <div className="account_page_pfp_container">
                        <div className="account_page_thumbnails">
                            <img src={thumbnail} alt="img-1" />
                            <div className="account_page_thumbnails_btn">
                                <button><RiChatSmile3Line />Create with avatar</button>
                                <button><BsFillCameraFill />Edit cover photo</button>
                            </div>
                        </div>
                        <div className="account_page_edit_profile">
                            <div className="acccount_page_edit_profile">
                                <img src={profile_pfp} alt="" />
                            </div>
                            <div className="accout_page_edit_profile_name">
                                <div className="account_page_edit_profile_txt">
                                    <p>Doniyorbek Kurbonov</p>
                                    <NavLink>
                                        2 friends
                                    </NavLink>
                                </div>
                                <div className="account_page_edit_profile_img_container">
                                    <img src={post1} alt="" />
                                    <img src={post2} alt="" />
                                </div>
                            </div>
                            <div className="account_page_editting">
                                <div className="account_page_edditing_both_btn">
                                    <button
                                        className={buttonActive === "1" ? "active_profile_btn" : ""}
                                        onClick={() => {
                                            setButtonActive("1")
                                        }}
                                    >
                                        <AiOutlinePlus />
                                        Add to story</button>
                                    <button
                                        className={buttonActive === "2" ? "active_profile_btn" : ""}
                                        onClick={() => {
                                            setButtonActive("2")
                                        }}
                                    >
                                        <BiSolidPencil />
                                        Edit Profile</button>
                                </div>
                                <div className="account_page_editting_last_child">
                                    <button
                                        className={buttonActive === "3" ? "active_profile_btn" : ""}
                                        onClick={() => {
                                            setButtonActive("3")
                                        }}
                                    >{buttonActive === "3" ? <BiSolidChevronUp /> : <BiSolidChevronDown />}</button>
                                </div>
                            </div>
                        </div>
                        <div className="account_page-line"></div>
                        <div className={`account_page_navbar ${sticky ? "account_page_sticky" : ""}`}>
                            <div className="account_profile_navbar_container">
                                <NavLink>
                                    Posts
                                </NavLink>
                                <NavLink>
                                    About
                                </NavLink>
                                <NavLink>
                                    Friends
                                </NavLink>
                                <NavLink>
                                    Photos
                                </NavLink>
                                <NavLink>
                                    Videos
                                </NavLink>
                                <NavLink>
                                    Check-ins
                                </NavLink>
                                <NavLink>
                                    More
                                    <BiChevronDown />
                                </NavLink>
                            </div>
                            <div className="account_page_navbar_icon">
                                <BsThreeDots />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`accounnt_page_posts_part ${screenSize.width > 850 && sticky ? "account_page_posts_sticky" : ""}`}>
                <div className="account_page_container">
                    <div className="account_page_posts_style">
                        <div className="account_page_picture_posts">
                            <div className="account_page_picture_posts_intro">
                                <h1>Intro</h1>
                                <button>Add Bio</button>
                                <button>Add Details</button>
                                <button>Add hobbies</button>
                                <button>Add featured</button>
                            </div>
                            <div className="account_page_picture_posts_photos">
                                <div className="account_page_picture_posts_photos_txt">
                                    <h1>Photos</h1>
                                    <NavLink>
                                        See all photos
                                    </NavLink>
                                </div>
                                <div className="account_page_picture_posts_photos_container">
                                    <img src={profile_pfp} alt="" />
                                    <img src={post1} alt="" />
                                    <img src={post2} alt="" />
                                </div>
                            </div>
                            <div className="account_page_picture_posts_friends">
                                <div className="account_page_picture_posts_photos_txt">
                                    <h1>Friends
                                    </h1>
                                    <NavLink>
                                        See all photos
                                    </NavLink>
                                </div>
                                <p>3 friends</p>
                                <div className="account_page_picture_friends_photos_container">
                                    <div className="account_page_picture_friends_box">
                                        <img src={default_pfp} alt="" />
                                        <NavLink>
                                            Doniyorbek Kurbonov
                                        </NavLink>
                                    </div>
                                    <div className="account_page_picture_friends_box">
                                        <img src={default_pfp} alt="" />
                                        <NavLink>
                                            Doniyorbek Kurbonov
                                        </NavLink>
                                    </div>
                                    <div className="account_page_picture_friends_box">
                                        <img src={default_pfp} alt="" />
                                        <NavLink>
                                            Doniyorbek Kurbonov
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="account_page_picture_posts_txt">
                                <p className='account_page_picture_posts_txt_text'>
                                    <span><a href="/">Privacy</a></span>  ·   <span><a href="/">Terms</a></span>  ·   <span><a href="/">Advertising</a></span>  ·   <span><a href="/">Ad Choices</a></span>
                                    ·   <span><a href="/">Cookies</a></span>  ·  More · Meta © 2023
                                </p>
                            </div>
                        </div>
                        <div className="account_page_posts_container">
                            <div className="main_page_posts_upload">
                                <div className="main_page_posts_upload_up_part">
                                    <div className="main_page_posts_upload_up_part_pfp">
                                        <img src={profile_pfp} alt="" />
                                    </div>
                                    <div className="main_page_post_upload_up_part_text">
                                        What's on your mind , Doniyorbek ?
                                    </div>
                                </div>
                                <div className="main_page_post_upload_line">

                                </div>
                                <ul className="main_page_posts_upload_down_part">
                                    <li>
                                        <img src={live_video} alt="" />
                                        Live Video</li>
                                    <li>
                                        <img src={photo_video} alt="" />
                                        Photo/Video</li>
                                    <li>
                                        <img src={feeling} alt="" />
                                        Feeling/Activity</li>
                                </ul>
                            </div>

                            <div className="account_page_posts_list">
                                <div className="account_page_posts_list_txt">
                                    <h1>
                                        Posts
                                    </h1>
                                    <div className="account_page_posts_list_txt_icons">
                                        <NavLink>
                                            <HiOutlineAdjustmentsHorizontal />  Filters
                                        </NavLink>
                                        <NavLink>
                                            <AiTwotoneSetting />  Manage Posts
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="main_page_post_upload_line"></div>
                                <div className="accounnt_page_posts_list_link">
                                    <NavLink>
                                        <IoReorderThreeSharp />  List view
                                    </NavLink>
                                    <NavLink>
                                        <PiSquaresFourLight /> Grid view
                                    </NavLink>
                                </div>
                            </div>
                            <div className="main_page_posts_container">
                                {
                                    MyPosts?.map((item) =>
                                        item?.visible && <div className="main_page_posts_container_item" key={item._id}>
                                            <p className='main_page_posts_item_suggest_text'>Suggested for you</p>
                                            <div className="main_page_post_upload_line"></div>
                                            <div className="main_page_posts_item_head_part">
                                                <div className="main_page_posts_item_left">
                                                    <div className="main_page_posts_upload_up_part_pfp">
                                                        <img src={item.user_img} alt="" />
                                                    </div>
                                                    <div className="main_page_posts_item_left_nickname_text">
                                                        <h6>{item.username}</h6>
                                                        <p>{item.post_data}  ·  <GiEarthAfricaEurope /></p>
                                                    </div>
                                                </div>
                                                <div className="main_page_posts_item_right">
                                                    <div className="main_page_posts_item_right_svg">
                                                        <BsThreeDots />
                                                    </div>
                                                    <div className="main_page_posts_item_right_svg">
                                                        <RxCross2 />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="main_page_posts_describtion_text">
                                                {
                                                    item.post_desc
                                                }
                                            </div>
                                            <div className="main_page_posts_item_image">
                                                <img src={item.post_img} alt="" />
                                            </div>
                                            <div className="main_page_posts_item_comment_section">
                                                <div className={`main_page_posts_item_comment_right ${like ? "active" : ""}`}
                                                    onClick={() => setLike(p => !p)}
                                                >
                                                    <p><AiFillLike /> {item.likes.length}</p>
                                                </div>
                                                <div className="main_page_posts_item_comment_left">
                                                    <p>{item.comments.length} comments</p>
                                                    <p>{item.shares.length} share</p>
                                                </div>
                                            </div>
                                            <div className="main_page_post_upload_line"></div>
                                            <ul className="main_page_posts_item_reaction_section">
                                                <li>
                                                    <AiOutlineLike /> Like
                                                </li>
                                                <li>
                                                    <GoComment /> Comment
                                                </li>
                                                <li>
                                                    <PiShareFatThin /> Share
                                                </li>
                                            </ul>
                                            <div className="main_page_post_upload_line"></div>
                                            <div className="account_profile_picture_posts_comment">
                                                <div className="account_profile_picture_comment_pfp">
                                                    <img src="https://scontent.ftas1-1.fna.fbcdn.net/v/t39.30808-6/278170683_163001849496904_2278256263714684385_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_ohc=UkMXFGJeBOEAX8-Z_Rq&_nc_ht=scontent.ftas1-1.fna&oh=00_AfDGLCGxXQe3msdCuH8GanD82mXKx9lGs4uerwCVmAhDyA&oe=64BD779B" alt="" />
                                                    <div className="account_profile_picture_comment_pfp_icon">
                                                        <BiChevronDown />
                                                    </div>
                                                </div>
                                                <div className="account_profile_picture_comment_section">
                                                    <input type="text" placeholder='write a comment' />
                                                    <AiOutlineSmile />
                                                    <BsCamera />
                                                    <AiOutlineFileGif />
                                                    <PiSticker />
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account
