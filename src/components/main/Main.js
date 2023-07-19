import React from 'react'
import { NavLink } from 'react-router-dom'
import MENU_DATA from '../../static/MenuData'
import POSTS from '../../static/UsersPost'
import { BiChevronDown, BiChevronUp, BiSolidVideoPlus, BiSolidUserPlus } from 'react-icons/bi'
import { BsThreeDots } from 'react-icons/bs'
import { FiSearch } from 'react-icons/fi'
import { AiOutlinePlus, AiFillLike, AiOutlineLike } from 'react-icons/ai'
import { RxCross2 } from 'react-icons/rx'
import { GiEarthAfricaEurope } from 'react-icons/gi'
import { PiShareFatThin } from 'react-icons/pi'
import { GoComment } from 'react-icons/go'
import live_video from '../../assets/main/live_video.png'
import photo_video from '../../assets/main/photo_video.png'
import feeling from '../../assets/main/feeling.png'
import deafult_pfp from '../../assets/main/default_profile_pfp.png'
import "./Main.css"

const Main = () => {
    const [countingData, setCountingData] = React.useState(2)
    const [like, setLike] = React.useState(false)

    return (
        <div className='main'>
            <div className="main_page_menu">
                <ul className='main_page_menu_container'>
                    <li className='main_page_menu_item'
                    >
                        <div className="main_page_menu_item_svg">
                            <img src="https://scontent.ftas2-2.fna.fbcdn.net/v/t39.30808-1/297874771_191457966651292_2308375852179335600_n.jpg?stp=cp0_dst-jpg_p80x80&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=EP8KQUEjxOkAX8zMqJ6&_nc_ht=scontent.ftas2-2.fna&oh=00_AfBcFAZM7iVhJ4zV3BzLgMRp4QYEsgFcmrrCCmx5jG6mKw&oe=64B29D58" alt="" />
                        </div>
                        <p> Doniyorbek Kurbonov</p>
                    </li>
                    {MENU_DATA?.slice(0, countingData).map(((item, inx) =>
                        <React.Fragment key={inx}>
                            {
                                item.data.map((i) =>
                                    <NavLink key={i._id}>
                                        <li className='main_page_menu_item'>
                                            <div className="main_page_menu_item_pic">
                                                <img src={require(`../../assets/menu_icons/${i?.url_text}.png`)} alt={`${i.url_text}`} />
                                            </div>
                                            <p>{i?.text}</p>
                                        </li>
                                    </NavLink>
                                )
                            }
                        </React.Fragment>
                    ))}
                    <li className='main_page_menu_item'
                        onClick={() => {
                            setCountingData(p => p === 4 ? p - 2 : p + 2)
                        }}
                    >
                        <div className="main_page_menu_item_svg">
                            {
                                countingData === 2 ? <BiChevronDown /> : <BiChevronUp />
                            }
                        </div>
                        <p>{countingData === 2 ? "See More" : "See Less"}</p>
                    </li>
                </ul>
                <p className='main_page_menu_ads_text'>
                    <span><a href="/">Privacy</a></span>  ·   <span><a href="/">Terms</a></span>  ·   <span><a href="/">Advertising</a></span>  ·   <span><a href="/">Ad Choices</a></span>
                    <br />
                    ·   <span><a href="/">Cookies</a></span>  ·  More · Meta © 2023
                </p>
            </div>
            <div className="main_page_posts">
                <div className="main_page_posts_details">
                    <div className="main_page_posts_create_story">
                        <div className="creat_page_post_hover">
                            <div className="main_page_post_create_story_svg">
                                <AiOutlinePlus />
                            </div>
                            <div className="main_page_post_create_story_text">
                                <h6>Create Story</h6>
                                <p>Share a photo or write something.</p>
                            </div>
                        </div>
                    </div>
                    <div className="main_page_posts_upload">
                        <div className="main_page_posts_upload_up_part">
                            <div className="main_page_posts_upload_up_part_pfp">
                                <img src="https://scontent.ftas2-2.fna.fbcdn.net/v/t39.30808-1/297874771_191457966651292_2308375852179335600_n.jpg?stp=cp0_dst-jpg_p80x80&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=EP8KQUEjxOkAX8zMqJ6&_nc_ht=scontent.ftas2-2.fna&oh=00_AfBcFAZM7iVhJ4zV3BzLgMRp4QYEsgFcmrrCCmx5jG6mKw&oe=64B29D58" alt="" />
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
                    <div className="main_page_posts_create_room">
                        <div className="main_page_posts_create_room_btn">
                            < BiSolidVideoPlus />
                            <p>Create Room</p>
                        </div>
                    </div>
                    <div className="main_page_posts_friends">
                        <div className='main_page_posts_friends_text'>
                            <p>People you may know</p>
                            <div className="main_page_posts_friends_text_svg">
                                <BsThreeDots />
                            </div>
                        </div>
                        <ul className="main_page_posts_friends_container">
                            <li className="main_page_posts_frineds_box">
                                <div className="main_page_posts_friends_pfp">
                                    <img src={deafult_pfp} alt="" />
                                    <div className="main_page_posts_friends_delete_svg">
                                        <RxCross2 />
                                    </div>
                                </div>
                                <h4>Doniyorbek Kurbonov</h4>
                                <button>
                                    <BiSolidUserPlus />
                                    Add Friends
                                </button>
                            </li>
                            <li className="main_page_posts_frineds_box">
                                <div className="main_page_posts_friends_pfp">
                                    <img src={deafult_pfp} alt="" />
                                    <div className="main_page_posts_friends_delete_svg">
                                        <RxCross2 />
                                    </div>
                                </div>
                                <h4>Doniyorbek Kurbonov</h4>
                                <button>
                                    <BiSolidUserPlus />
                                    Add Friends
                                </button>
                            </li>
                            <li className="main_page_posts_frineds_box">
                                <div className="main_page_posts_friends_pfp">
                                    <img src={deafult_pfp} alt="" />
                                    <div className="main_page_posts_friends_delete_svg">
                                        <RxCross2 />
                                    </div>
                                </div>
                                <h4>Doniyorbek Kurbonov</h4>
                                <button>
                                    <BiSolidUserPlus />
                                    Add Friends
                                </button>
                            </li>
                            <li className="main_page_posts_frineds_box">
                                <div className="main_page_posts_friends_pfp">
                                    <img src={deafult_pfp} alt="" />
                                    <div className="main_page_posts_friends_delete_svg">
                                        <RxCross2 />
                                    </div>
                                </div>
                                <h4>Doniyorbek Kurbonov</h4>
                                <button>
                                    <BiSolidUserPlus />
                                    Add Friends
                                </button>
                            </li>
                            <li className="main_page_posts_frineds_box">
                                <div className="main_page_posts_friends_pfp">
                                    <img src={deafult_pfp} alt="" />
                                    <div className="main_page_posts_friends_delete_svg">
                                        <RxCross2 />
                                    </div>
                                </div>
                                <h4>Doniyorbek Kurbonov</h4>
                                <button>
                                    <BiSolidUserPlus />
                                    Add Friends
                                </button>
                            </li>
                            <li className="main_page_posts_frineds_box">
                                <div className="main_page_posts_friends_pfp">
                                    <img src={deafult_pfp} alt="" />
                                    <div className="main_page_posts_friends_delete_svg">
                                        <RxCross2 />
                                    </div>
                                </div>
                                <h4>Doniyorbek Kurbonov</h4>
                                <button>
                                    <BiSolidUserPlus />
                                    Add Friends
                                </button>
                            </li>
                            <li className="main_page_posts_frineds_box">
                                <div className="main_page_posts_friends_pfp">
                                    <img src={deafult_pfp} alt="" />
                                    <div className="main_page_posts_friends_delete_svg">
                                        <RxCross2 />
                                    </div>
                                </div>
                                <h4>Doniyorbek Kurbonov</h4>
                                <button>
                                    <BiSolidUserPlus />
                                    Add Friends
                                </button>
                            </li>
                            <li className="main_page_posts_frineds_box">
                                <div className="main_page_posts_friends_pfp">
                                    <img src={deafult_pfp} alt="" />
                                    <div className="main_page_posts_friends_delete_svg">
                                        <RxCross2 />
                                    </div>
                                </div>
                                <h4>Doniyorbek Kurbonov</h4>
                                <button>
                                    <BiSolidUserPlus />
                                    Add Friends
                                </button>
                            </li>
                            <li className="main_page_posts_frineds_box">
                                <div className="main_page_posts_friends_pfp">
                                    <img src={deafult_pfp} alt="" />
                                    <div className="main_page_posts_friends_delete_svg">
                                        <RxCross2 />
                                    </div>
                                </div>
                                <h4>Doniyorbek Kurbonov</h4>
                                <button>
                                    <BiSolidUserPlus />
                                    Add Friends
                                </button>
                            </li>
                        </ul>
                        <button className='main_page_posts_frineds_see_all_btn'>
                            See all
                        </button>
                    </div>
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
            <div className="main_page_ads">
                <p className='main_page_ads_header_text'>Sponsored</p>
                <div className="main_page_ads_sponsored">
                    <ul className='main_page_ads_container'>
                        <li
                            className='main_page_ads_item'>
                            <div className="main_page_ads_item_pic">
                                <img src="https://scontent.ftas2-2.fna.fbcdn.net/v/t45.1600-4/352748024_6380263746528_5897927005808594338_n.png?_nc_cat=1&ccb=1-7&_nc_sid=2aac32&_nc_ohc=tUvqd3Ql7xYAX_Tfjsp&_nc_ht=scontent.ftas2-2.fna&oh=00_AfAeeoSaP-sa1w5WCPdeUPeoSUIB6Jk1I67C8bviAgQJAA&oe=64B1AE80" alt="" />
                            </div>
                            <div className="main_page_ads_item_text">
                                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, necessitatibus!</h6>
                                <p>Lorem, ipsum dolor.</p>
                            </div>
                        </li>
                        <li
                            className='main_page_ads_item'>
                            <div className="main_page_ads_item_pic">
                                <img src="https://scontent.ftas2-2.fna.fbcdn.net/v/t45.1600-4/352748024_6380263746528_5897927005808594338_n.png?_nc_cat=1&ccb=1-7&_nc_sid=2aac32&_nc_ohc=tUvqd3Ql7xYAX_Tfjsp&_nc_ht=scontent.ftas2-2.fna&oh=00_AfAeeoSaP-sa1w5WCPdeUPeoSUIB6Jk1I67C8bviAgQJAA&oe=64B1AE80" alt="" />
                            </div>
                            <div className="main_page_ads_item_text">
                                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, necessitatibus!</h6>
                                <p>Lorem, ipsum dolor.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='main_page_ads_contacts_collection'>
                    <p className='main_page_ads_header_text'>Contacts</p>
                    <ul className="main_page_ads_contacts_svg">
                        <li>
                            <BiSolidVideoPlus />
                        </li>
                        <li>
                            <FiSearch />
                        </li>
                        <li>
                            <BsThreeDots />
                        </li>
                    </ul>
                </div>
                <div className="main_page_ads_contacts">
                    <ul className='main_page_ads_contacts_container'>
                        <li className='main_page_ads_sponsored_item'>
                            <div className="main_page_ads_contacts_pfp">
                                <img src={deafult_pfp} alt="" />
                            </div>
                            <p>Your Friend</p>
                        </li>
                        <li className='main_page_ads_sponsored_item'>
                            <div className="main_page_ads_contacts_pfp">
                                <img src={deafult_pfp} alt="" />
                            </div>
                            <p>Your Friend</p>
                        </li>
                    </ul>
                </div>
                <p className='main_page_ads_header_text'>Group converstations</p>
                <div className="main_page_ads_group_converstaions">
                    <ul className='main_page_ads_contacts_container'>
                        <li className='main_page_ads_sponsored_item'>
                            <div className="main_page_ads_contacts_pfp">
                                <AiOutlinePlus />
                            </div>
                            <p>Create New Group</p>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Main
