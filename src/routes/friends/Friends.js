import React from 'react'
import { AiTwotoneSetting } from 'react-icons/ai'
import { FaUserFriends, FaUserPlus, FaUserCog, FaGift, FaUsers } from 'react-icons/fa'
import default_picture from '../../assets/main/default_profile_pfp.png'
import './Friends.css'

const Friends = () => {
    return (
        <div>
            <div className="friends_page">
                <ul className="friends_page_container">
                    <div className='friends_page_container_text'>
                        <p>Friends</p>
                        <div className="friends_page_container_text_svg">
                            <AiTwotoneSetting />
                        </div>
                    </div>
                    <li className='friends_page_container_item'>
                        <div className="friends_page_container_text_svg">
                            <FaUserFriends />
                        </div>
                        <p> Friends</p>
                    </li>
                    <li className='friends_page_container_item'>
                        <div className="friends_page_container_text_svg">
                            <FaUserCog />
                        </div>
                        <p>Friend Request</p>
                    </li>
                    <li className='friends_page_container_item'>
                        <div className="friends_page_container_text_svg">
                            <FaUserPlus />
                        </div>
                        <p>Suggestion</p>
                    </li>
                    <li className='friends_page_container_item'>
                        <div className="friends_page_container_text_svg">
                            <FaUsers />
                        </div>
                        <p> All friend</p>
                    </li>
                    <li className='friends_page_container_item'>
                        <div className="friends_page_container_text_svg">
                            <FaGift />
                        </div>
                        <p>Birthday</p>
                    </li>
                    <li className='friends_page_container_item'>
                        <div className="friends_page_container_text_svg">
                            <FaUsers />
                        </div>
                        <p>Custom list</p>
                    </li>
                </ul>
                <div className="friends_page_recomendation">
                    <div className="friends_page_rec_text">
                        <h5>People you may know</h5>
                        <p>See all</p>
                    </div>
                    <ul className="friends_page_rec_container">
                        <li className='friends_page_rec_container_item'>
                            <div className="friends_page_rec_container_img">
                                <img src={default_picture} alt="" />
                            </div>
                            <div className="friends_page_rec_container_item_name">
                                Doniyorbek Kurbonov
                            </div>
                            <div className="friends_page_rec_container_item_btn">
                                <button>Add friend</button>
                                <button>Remove</button>
                            </div>
                        </li>
                        <li className='friends_page_rec_container_item'>
                            <div className="friends_page_rec_container_img">
                                <img src={default_picture} alt="" />
                            </div>
                            <div className="friends_page_rec_container_item_name">
                                Doniyorbek Kurbonov
                            </div>
                            <div className="friends_page_rec_container_item_btn">
                                <button>Add friend</button>
                                <button>Remove</button>
                            </div>
                        </li>
                        <li className='friends_page_rec_container_item'>
                            <div className="friends_page_rec_container_img">
                                <img src={default_picture} alt="" />
                            </div>
                            <div className="friends_page_rec_container_item_name">
                                Doniyorbek Kurbonov
                            </div>
                            <div className="friends_page_rec_container_item_btn">
                                <button>Add friend</button>
                                <button>Remove</button>
                            </div>
                        </li>
                        <li className='friends_page_rec_container_item'>
                            <div className="friends_page_rec_container_img">
                                <img src={default_picture} alt="" />
                            </div>
                            <div className="friends_page_rec_container_item_name">
                                Doniyorbek Kurbonov
                            </div>
                            <div className="friends_page_rec_container_item_btn">
                                <button>Add friend</button>
                                <button>Remove</button>
                            </div>
                        </li>
                        <li className='friends_page_rec_container_item'>
                            <div className="friends_page_rec_container_img">
                                <img src={default_picture} alt="" />
                            </div>
                            <div className="friends_page_rec_container_item_name">
                                Doniyorbek Kurbonov
                            </div>
                            <div className="friends_page_rec_container_item_btn">
                                <button>Add friend</button>
                                <button>Remove</button>
                            </div>
                        </li>
                        <li className='friends_page_rec_container_item'>
                            <div className="friends_page_rec_container_img">
                                <img src={default_picture} alt="" />
                            </div>
                            <div className="friends_page_rec_container_item_name">
                                Doniyorbek Kurbonov
                            </div>
                            <div className="friends_page_rec_container_item_btn">
                                <button>Add friend</button>
                                <button>Remove</button>
                            </div>
                        </li>
                        <li className='friends_page_rec_container_item'>
                            <div className="friends_page_rec_container_img">
                                <img src={default_picture} alt="" />
                            </div>
                            <div className="friends_page_rec_container_item_name">
                                Doniyorbek Kurbonov
                            </div>
                            <div className="friends_page_rec_container_item_btn">
                                <button>Add friend</button>
                                <button>Remove</button>
                            </div>
                        </li>
                        <li className='friends_page_rec_container_item'>
                            <div className="friends_page_rec_container_img">
                                <img src={default_picture} alt="" />
                            </div>
                            <div className="friends_page_rec_container_item_name">
                                Doniyorbek Kurbonov
                            </div>
                            <div className="friends_page_rec_container_item_btn">
                                <button>Add friend</button>
                                <button>Remove</button>
                            </div>
                        </li>
                        <li className='friends_page_rec_container_item'>
                            <div className="friends_page_rec_container_img">
                                <img src={default_picture} alt="" />
                            </div>
                            <div className="friends_page_rec_container_item_name">
                                Doniyorbek Kurbonov
                            </div>
                            <div className="friends_page_rec_container_item_btn">
                                <button>Add friend</button>
                                <button>Remove</button>
                            </div>
                        </li><li className='friends_page_rec_container_item'>
                            <div className="friends_page_rec_container_img">
                                <img src={default_picture} alt="" />
                            </div>
                            <div className="friends_page_rec_container_item_name">
                                Doniyorbek Kurbonov
                            </div>
                            <div className="friends_page_rec_container_item_btn">
                                <button>Add friend</button>
                                <button>Remove</button>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Friends
