import React from 'react'
import WATCH_MENU from '../../static/WatchPage'
import POSTS from '../../static/UsersPost'
import "./Watch.css"
import { NavLink } from 'react-router-dom'
import { AiTwotoneSetting } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'
import { BsThreeDots } from 'react-icons/bs'
import { AiFillLike, AiOutlineLike } from 'react-icons/ai'
import { RxCross2 } from 'react-icons/rx'
import { GiEarthAfricaEurope } from 'react-icons/gi'
import { PiShareFatThin } from 'react-icons/pi'
import { GoComment } from 'react-icons/go'

const Watch = () => {
    const [watchToggle, setWatchToggle] = React.useState("0")
    const [like, setLike] = React.useState(false)

    return (
        <div>
            <div className="watch_page">
                <ul className="watch_page_container">
                    <div className="watch_page_container_text">
                        <p>Friends</p>
                        <div className="friends_page_container_text_svg">
                            <AiTwotoneSetting />
                        </div>
                    </div>
                    <div className="watch_page_container_search">
                        <FiSearch />
                        <input type="text" placeholder='Search videos' autoCorrect='none' />
                    </div>
                    {
                        WATCH_MENU?.map((item) =>
                            <NavLink key={item._id} className="watchpage_container_link"
                                onClick={() => {
                                    setWatchToggle(item._id)
                                }}
                            >
                                <li className='friends_page_container_item'>
                                    <div className={`friends_page_container_text_svg ${watchToggle === item._id ? "watch_page_svg_active" : ""}`}>
                                        <item.icon_name />
                                    </div>
                                    <p>{item.text}</p>
                                </li>
                            </NavLink>
                        )
                    }

                </ul>
                <div className="watch_page_posts">
                    <div className="main_page_posts_container">
                        {
                            POSTS?.map((item) =>
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
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Watch
