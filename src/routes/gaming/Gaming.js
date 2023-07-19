import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import './Gaming.css'
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import GAME_CATEGORIES from '../../static/GameCategories'
import profile_pic from '../../assets/gaming_pfp.png'

import { AiTwotoneSetting } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'
import { BiSolidBellRing } from 'react-icons/bi'
import { BsTag } from 'react-icons/bs'
import { CgGames } from 'react-icons/cg'
import { FaGamepad } from 'react-icons/fa'


const GAMES = [
    {
        _id: 1,
        game_name: "The Puzzle",
        image: {
            game_banner: "https://scontent.ftas2-2.fna.fbcdn.net/m1/v/t6/An_IGEBS3iqFVdIQfFiotp9unfectCeO8WMeMxtwNHTU-epD1GWOzCbiBLr1uVTQkqCZ7_EKb-v0Jr61m5pPfHvIYNBqSYs933tOMl1Ciwskfy3GTxMvfzBuJQhSyskzL7Fs?ccb=10-5&oh=00_AfCflHK4awXJ87NcT2cTRURMTIfPg2cLGw8JrfhmE0uENw&oe=64DB870B&_nc_sid=73a32d",
            game_icon: "https://scontent.ftas2-2.fna.fbcdn.net/v/t39.2081-6/341075998_1021651982794197_3315508111546781127_n.jpg?stp=c0.0.193.193a_dst-jpg_p192x192&_nc_cat=1&ccb=1-7&_nc_sid=b29aad&_nc_ohc=8B0YyNNkgMMAX-y1-24&_nc_ht=scontent.ftas2-2.fna&oh=00_AfC_NTZkoKpPqacSpPWA_Y3Rmdiddd7pl9BebPnHJ6-Hrw&oe=64B9883C"
        },
        date_text: "Ends in 15 Days",
        text: "Who is the King of the Puzzles ?",
        desc: "Hurry! There can only be one winner!"
    },
    {
        _id: 2,
        game_name: "The Puzzle",
        image: {
            game_banner: "https://scontent.ftas2-2.fna.fbcdn.net/m1/v/t6/An_IGEBS3iqFVdIQfFiotp9unfectCeO8WMeMxtwNHTU-epD1GWOzCbiBLr1uVTQkqCZ7_EKb-v0Jr61m5pPfHvIYNBqSYs933tOMl1Ciwskfy3GTxMvfzBuJQhSyskzL7Fs?ccb=10-5&oh=00_AfCflHK4awXJ87NcT2cTRURMTIfPg2cLGw8JrfhmE0uENw&oe=64DB870B&_nc_sid=73a32d",
            game_icon: "https://scontent.ftas2-2.fna.fbcdn.net/v/t39.2081-6/341075998_1021651982794197_3315508111546781127_n.jpg?stp=c0.0.193.193a_dst-jpg_p192x192&_nc_cat=1&ccb=1-7&_nc_sid=b29aad&_nc_ohc=8B0YyNNkgMMAX-y1-24&_nc_ht=scontent.ftas2-2.fna&oh=00_AfC_NTZkoKpPqacSpPWA_Y3Rmdiddd7pl9BebPnHJ6-Hrw&oe=64B9883C"
        },
        date_text: "Ends in 15 Days",
        text: "Who is the King of the Puzzles ?",
        desc: "Hurry! There can only be one winner!"
    },
    {
        _id: 3,
        game_name: "The Puzzle",
        image: {
            game_banner: "https://scontent.ftas2-2.fna.fbcdn.net/m1/v/t6/An_IGEBS3iqFVdIQfFiotp9unfectCeO8WMeMxtwNHTU-epD1GWOzCbiBLr1uVTQkqCZ7_EKb-v0Jr61m5pPfHvIYNBqSYs933tOMl1Ciwskfy3GTxMvfzBuJQhSyskzL7Fs?ccb=10-5&oh=00_AfCflHK4awXJ87NcT2cTRURMTIfPg2cLGw8JrfhmE0uENw&oe=64DB870B&_nc_sid=73a32d",
            game_icon: "https://scontent.ftas2-2.fna.fbcdn.net/v/t39.2081-6/341075998_1021651982794197_3315508111546781127_n.jpg?stp=c0.0.193.193a_dst-jpg_p192x192&_nc_cat=1&ccb=1-7&_nc_sid=b29aad&_nc_ohc=8B0YyNNkgMMAX-y1-24&_nc_ht=scontent.ftas2-2.fna&oh=00_AfC_NTZkoKpPqacSpPWA_Y3Rmdiddd7pl9BebPnHJ6-Hrw&oe=64B9883C"
        },
        date_text: "Ends in 15 Days",
        text: "Who is the King of the Puzzles ?",
        desc: "Hurry! There can only be one winner!"
    },
    {
        _id: 4,
        game_name: "The Puzzle",
        image: {
            game_banner: "https://scontent.ftas2-2.fna.fbcdn.net/m1/v/t6/An_IGEBS3iqFVdIQfFiotp9unfectCeO8WMeMxtwNHTU-epD1GWOzCbiBLr1uVTQkqCZ7_EKb-v0Jr61m5pPfHvIYNBqSYs933tOMl1Ciwskfy3GTxMvfzBuJQhSyskzL7Fs?ccb=10-5&oh=00_AfCflHK4awXJ87NcT2cTRURMTIfPg2cLGw8JrfhmE0uENw&oe=64DB870B&_nc_sid=73a32d",
            game_icon: "https://scontent.ftas2-2.fna.fbcdn.net/v/t39.2081-6/341075998_1021651982794197_3315508111546781127_n.jpg?stp=c0.0.193.193a_dst-jpg_p192x192&_nc_cat=1&ccb=1-7&_nc_sid=b29aad&_nc_ohc=8B0YyNNkgMMAX-y1-24&_nc_ht=scontent.ftas2-2.fna&oh=00_AfC_NTZkoKpPqacSpPWA_Y3Rmdiddd7pl9BebPnHJ6-Hrw&oe=64B9883C"
        },
        date_text: "Ends in 15 Days",
        text: "Who is the King of the Puzzles ?",
        desc: "Hurry! There can only be one winner!"
    }
    , {
        _id: 5,
        game_name: "The Puzzle",
        image: {
            game_banner: "https://scontent.ftas2-2.fna.fbcdn.net/m1/v/t6/An_IGEBS3iqFVdIQfFiotp9unfectCeO8WMeMxtwNHTU-epD1GWOzCbiBLr1uVTQkqCZ7_EKb-v0Jr61m5pPfHvIYNBqSYs933tOMl1Ciwskfy3GTxMvfzBuJQhSyskzL7Fs?ccb=10-5&oh=00_AfCflHK4awXJ87NcT2cTRURMTIfPg2cLGw8JrfhmE0uENw&oe=64DB870B&_nc_sid=73a32d",
            game_icon: "https://scontent.ftas2-2.fna.fbcdn.net/v/t39.2081-6/341075998_1021651982794197_3315508111546781127_n.jpg?stp=c0.0.193.193a_dst-jpg_p192x192&_nc_cat=1&ccb=1-7&_nc_sid=b29aad&_nc_ohc=8B0YyNNkgMMAX-y1-24&_nc_ht=scontent.ftas2-2.fna&oh=00_AfC_NTZkoKpPqacSpPWA_Y3Rmdiddd7pl9BebPnHJ6-Hrw&oe=64B9883C"
        },
        date_text: "Ends in 15 Days",
        text: "Who is the King of the Puzzles ?",
        desc: "Hurry! There can only be one winner!"
    }, {
        _id: 6,
        game_name: "The Puzzle",
        image: {
            game_banner: "https://scontent.ftas2-2.fna.fbcdn.net/m1/v/t6/An_IGEBS3iqFVdIQfFiotp9unfectCeO8WMeMxtwNHTU-epD1GWOzCbiBLr1uVTQkqCZ7_EKb-v0Jr61m5pPfHvIYNBqSYs933tOMl1Ciwskfy3GTxMvfzBuJQhSyskzL7Fs?ccb=10-5&oh=00_AfCflHK4awXJ87NcT2cTRURMTIfPg2cLGw8JrfhmE0uENw&oe=64DB870B&_nc_sid=73a32d",
            game_icon: "https://scontent.ftas2-2.fna.fbcdn.net/v/t39.2081-6/341075998_1021651982794197_3315508111546781127_n.jpg?stp=c0.0.193.193a_dst-jpg_p192x192&_nc_cat=1&ccb=1-7&_nc_sid=b29aad&_nc_ohc=8B0YyNNkgMMAX-y1-24&_nc_ht=scontent.ftas2-2.fna&oh=00_AfC_NTZkoKpPqacSpPWA_Y3Rmdiddd7pl9BebPnHJ6-Hrw&oe=64B9883C"
        },
        date_text: "Ends in 15 Days",
        text: "Who is the King of the Puzzles ?",
        desc: "Hurry! There can only be one winner!"
    }
    , {
        _id: 7,
        game_name: "The Puzzle",
        image: {
            game_banner: "https://scontent.ftas2-2.fna.fbcdn.net/m1/v/t6/An_IGEBS3iqFVdIQfFiotp9unfectCeO8WMeMxtwNHTU-epD1GWOzCbiBLr1uVTQkqCZ7_EKb-v0Jr61m5pPfHvIYNBqSYs933tOMl1Ciwskfy3GTxMvfzBuJQhSyskzL7Fs?ccb=10-5&oh=00_AfCflHK4awXJ87NcT2cTRURMTIfPg2cLGw8JrfhmE0uENw&oe=64DB870B&_nc_sid=73a32d",
            game_icon: "https://scontent.ftas2-2.fna.fbcdn.net/v/t39.2081-6/341075998_1021651982794197_3315508111546781127_n.jpg?stp=c0.0.193.193a_dst-jpg_p192x192&_nc_cat=1&ccb=1-7&_nc_sid=b29aad&_nc_ohc=8B0YyNNkgMMAX-y1-24&_nc_ht=scontent.ftas2-2.fna&oh=00_AfC_NTZkoKpPqacSpPWA_Y3Rmdiddd7pl9BebPnHJ6-Hrw&oe=64B9883C"
        },
        date_text: "Ends in 15 Days",
        text: "Who is the King of the Puzzles ?",
        desc: "Hurry! There can only be one winner!"
    }
]

const RECOMMENDATION = [
    {
        _id: 1,
        name: "Idle Zoo: Safari Rescue",
        category: "Builder",
        url: "https://scontent.ftas2-2.fna.fbcdn.net/v/t39.2081-6/193763751_1303679250029321_9021379878087503737_n.jpg?stp=dst-jpg_p600x313&_nc_cat=105&ccb=1-7&_nc_sid=e26652&_nc_ohc=tZ3v38r0yP8AX9_m8zp&_nc_ht=scontent.ftas2-2.fna&oh=00_AfDs1cGiR10W-MNNNArOp0oi_AC5oa0jgdpushDigHBHTA&oe=64B8397A",
        isNew: true
    },
    {
        _id: 2,
        name: "Idle Zoo: Safari Rescue",
        category: "Builder",
        url: "https://scontent.ftas2-2.fna.fbcdn.net/v/t39.2081-6/193763751_1303679250029321_9021379878087503737_n.jpg?stp=dst-jpg_p600x313&_nc_cat=105&ccb=1-7&_nc_sid=e26652&_nc_ohc=tZ3v38r0yP8AX9_m8zp&_nc_ht=scontent.ftas2-2.fna&oh=00_AfDs1cGiR10W-MNNNArOp0oi_AC5oa0jgdpushDigHBHTA&oe=64B8397A",
        isNew: true
    },
    {
        _id: 3,
        name: "Idle Zoo: Safari Rescue",
        category: "Builder",
        url: "https://scontent.ftas2-2.fna.fbcdn.net/v/t39.2081-6/193763751_1303679250029321_9021379878087503737_n.jpg?stp=dst-jpg_p600x313&_nc_cat=105&ccb=1-7&_nc_sid=e26652&_nc_ohc=tZ3v38r0yP8AX9_m8zp&_nc_ht=scontent.ftas2-2.fna&oh=00_AfDs1cGiR10W-MNNNArOp0oi_AC5oa0jgdpushDigHBHTA&oe=64B8397A",
        isNew: true
    },
    {
        _id: 4,
        name: "Idle Zoo: Safari Rescue",
        category: "Builder",
        url: "https://scontent.ftas2-2.fna.fbcdn.net/v/t39.2081-6/193763751_1303679250029321_9021379878087503737_n.jpg?stp=dst-jpg_p600x313&_nc_cat=105&ccb=1-7&_nc_sid=e26652&_nc_ohc=tZ3v38r0yP8AX9_m8zp&_nc_ht=scontent.ftas2-2.fna&oh=00_AfDs1cGiR10W-MNNNArOp0oi_AC5oa0jgdpushDigHBHTA&oe=64B8397A",
        isNew: true
    },
    {
        _id: 5,
        name: "Idle Zoo: Safari Rescue",
        category: "Builder",
        url: "https://scontent.ftas2-2.fna.fbcdn.net/v/t39.2081-6/193763751_1303679250029321_9021379878087503737_n.jpg?stp=dst-jpg_p600x313&_nc_cat=105&ccb=1-7&_nc_sid=e26652&_nc_ohc=tZ3v38r0yP8AX9_m8zp&_nc_ht=scontent.ftas2-2.fna&oh=00_AfDs1cGiR10W-MNNNArOp0oi_AC5oa0jgdpushDigHBHTA&oe=64B8397A",
        isNew: true
    },
    {
        _id: 6,
        name: "Idle Zoo: Safari Rescue",
        category: "Builder",
        url: "https://scontent.ftas2-2.fna.fbcdn.net/v/t39.2081-6/193763751_1303679250029321_9021379878087503737_n.jpg?stp=dst-jpg_p600x313&_nc_cat=105&ccb=1-7&_nc_sid=e26652&_nc_ohc=tZ3v38r0yP8AX9_m8zp&_nc_ht=scontent.ftas2-2.fna&oh=00_AfDs1cGiR10W-MNNNArOp0oi_AC5oa0jgdpushDigHBHTA&oe=64B8397A",
        isNew: true
    },
    {
        _id: 7,
        name: "Idle Zoo: Safari Rescue",
        category: "Builder",
        url: "https://scontent.ftas2-2.fna.fbcdn.net/v/t39.2081-6/193763751_1303679250029321_9021379878087503737_n.jpg?stp=dst-jpg_p600x313&_nc_cat=105&ccb=1-7&_nc_sid=e26652&_nc_ohc=tZ3v38r0yP8AX9_m8zp&_nc_ht=scontent.ftas2-2.fna&oh=00_AfDs1cGiR10W-MNNNArOp0oi_AC5oa0jgdpushDigHBHTA&oe=64B8397A",
        isNew: true
    },
    {
        _id: 8,
        name: "Idle Zoo: Safari Rescue",
        category: "Builder",
        url: "https://scontent.ftas2-2.fna.fbcdn.net/v/t39.2081-6/193763751_1303679250029321_9021379878087503737_n.jpg?stp=dst-jpg_p600x313&_nc_cat=105&ccb=1-7&_nc_sid=e26652&_nc_ohc=tZ3v38r0yP8AX9_m8zp&_nc_ht=scontent.ftas2-2.fna&oh=00_AfDs1cGiR10W-MNNNArOp0oi_AC5oa0jgdpushDigHBHTA&oe=64B8397A",
        isNew: true
    }
]

const Gaming = () => {
    const [headMarketmMenu, setHeadMarketMenu] = React.useState("0")
    const [marketToggle, setMarketToggle] = React.useState("")

    return (
        <div>
            <div className="gaming_page">
                <div className="gaming_menu_container">
                    <div className="market_menu_navbar">
                        <div className="market_menu_navbar_texts">
                            <p>Navbar</p>
                            <div className="market_menu_scroll_container_svg">
                                <AiTwotoneSetting />
                            </div>
                        </div>
                        <div className="market_menu_search">
                            <FiSearch />
                            <input type="text" placeholder='Search Gaming' />
                        </div>
                    </div>
                    <div className="market_menu_scroll_container">
                        <NavLink className="market_menu_scroll_container_link"
                            onClick={() => {
                                setHeadMarketMenu("99")
                            }}
                        >
                            <li className='market_menu_scroll_container_item'>
                                <div className={`market_menu_scroll_container_svg ${headMarketmMenu === "99" ? "market_menu_scroll_container_svg_active" : ""}`}>
                                    <img src={profile_pic} alt="" />
                                </div>
                                <div className="market_menu_scroll_container_item_text">
                                    <p>Gaming activity</p>
                                    <h3>Doniyorbek</h3>
                                </div>
                            </li>
                        </NavLink>
                        <div className="market_menu_scroll_container_line">
                        </div>
                        <NavLink className="market_menu_scroll_container_link"
                            onClick={() => {
                                setHeadMarketMenu("0")
                            }}
                        >
                            <li className='market_menu_scroll_container_item'>
                                <div className={`market_menu_scroll_container_svg ${headMarketmMenu === "0" ? "market_menu_scroll_container_svg_active" : ""}`}>
                                    <CgGames />
                                </div>
                                <p>Play Games</p>
                            </li>
                        </NavLink>
                        <NavLink className="market_menu_scroll_container_link"
                            onClick={() => {
                                setHeadMarketMenu("1")
                            }}
                        >
                            <li className='market_menu_scroll_container_item'>
                                <div className={`market_menu_scroll_container_svg ${headMarketmMenu === "1" ? "market_menu_scroll_container_svg_active" : ""}`}>
                                    <BiSolidBellRing />
                                </div>
                                <p>Notification</p>
                            </li>
                        </NavLink>
                        <div className="market_menu_scroll_container_line">
                        </div>
                        <div className="gaming_menu_scroll_container_text">
                            <div className="gaming_menu_scroll_container_head_text">
                                <p>Your Games</p>
                                <NavLink>
                                    See All
                                </NavLink>
                            </div>
                            <p>
                                Save a game to Your games to create a shortcut for it here.
                            </p>
                        </div>
                        <NavLink className="market_menu_scroll_container_link"
                            onClick={() => {
                                setHeadMarketMenu("2")
                            }}
                        >
                            <li className='market_menu_scroll_container_item'>
                                <div className={`market_menu_scroll_container_svg ${headMarketmMenu === "2" ? "market_menu_scroll_container_svg_active" : ""}`}>
                                    <BsTag />
                                </div>
                                <p>Saved Games</p>
                            </li>
                        </NavLink>
                        <div className="market_menu_scroll_container_line">
                        </div>
                        {
                            GAME_CATEGORIES?.map((data, inx) =>
                                <div className='market_menu_scroll_categories_container' key={inx}>
                                    <p>{data.head_text}</p>
                                    {
                                        data?.data.map((item, index) =>
                                            <NavLink key={index} className="market_menu_scroll_container_link"
                                                onClick={() => {
                                                    setMarketToggle(item._id)
                                                }}
                                            >
                                                <li className='market_menu_scroll_container_item'>
                                                    <div className={`market_menu_scroll_container_svg ${marketToggle === item._id ? "market_menu_scroll_container_svg_active" : ""}`}>
                                                        <item.icon_name />
                                                    </div>
                                                    <p>{item.text}</p>
                                                </li>
                                            </NavLink>
                                        )
                                    }
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className="gaming_items_container">
                    <div className="gaming_items_container_text">
                        <h5>Happening now</h5>
                    </div>
                    <div className="gaming_container_items_swiper">
                        <Swiper slidesPerView={5}
                            spaceBetween={10}
                            className="mySwiper"
                            breakpoints={{
                                0: {
                                    width: 350,
                                    slidesPerView: 1,
                                },
                                600: {
                                    width: 600,
                                    slidesPerView: 2,
                                },
                                850: {
                                    widht: 850,
                                    slidesPerView: 3,
                                },
                                1100: {
                                    widht: 1100,
                                    slidesPerView: 4,
                                },
                                1400: {
                                    width: 1400,
                                    slidesPerView: 5
                                },
                                1500: {
                                    width: 1500,
                                    slidesPerView: 5
                                },
                                1700: {
                                    width: 1700,
                                    slidesPerView: 6
                                }
                            }}
                        >
                            {
                                GAMES?.map((item, inx) =>
                                    <SwiperSlide key={inx}> <div className="gaming_container_items_box" >
                                        <div className="gaming_container_items_box_head_text">
                                            <div className="gaming_container_items_box_head_txt_img">
                                                <img src={item.image.game_icon} alt="" />
                                            </div>
                                            {item.game_name}
                                        </div>
                                        <div className="gaming_container_items_box_main_img">
                                            <img src={item.image.game_banner} alt="" />
                                        </div>
                                        <div className="gaming_container_item_box_bottom_texts">
                                            <h5>{item.date_text}</h5>
                                            <h2>{item.text}</h2>
                                            <p>{item.desc}</p>
                                        </div>
                                        <button><FaGamepad /> Play</button>
                                    </div></SwiperSlide>
                                )
                            }
                        </Swiper>
                    </div>
                    <div className="gaming_items_container_text">
                        <h5>Top picks for you</h5>
                    </div>
                    <div className="gaming_container_items_swiper">
                        <Swiper slidesPerView={6}
                            spaceBetween={5}
                            className="mySwiper"
                            breakpoints={{
                                0: {
                                    width: 350,
                                    slidesPerView: 1,
                                },
                                600: {
                                    width: 600,
                                    slidesPerView: 2,
                                },
                                850: {
                                    widht: 850,
                                    slidesPerView: 3,
                                },
                                1100: {
                                    widht: 1100,
                                    slidesPerView: 4,
                                },
                                1400: {
                                    width: 1400,
                                    slidesPerView: 5
                                },
                                1500: {
                                    width: 1500,
                                    slidesPerView: 5
                                },
                                1700: {
                                    width: 1700,
                                    slidesPerView: 6
                                }
                            }}
                        >
                            {
                                RECOMMENDATION?.map((item, inx) =>
                                    <SwiperSlide key={inx}>
                                        <div className="gaming_container_rec_item_box" >
                                            <img src={item.url} alt="" />
                                            <div className="gaming_container_rec_item_box_txt"
                                            >
                                                <h3>{item.name}</h3>
                                                <div className="rec_item_box_btns">
                                                    {item.isNew && <button className='rec_item_box_new'>
                                                        New
                                                    </button>}
                                                    <button>{item.category}</button>
                                                </div>
                                                <div className="gaming_containner_rec_item_bg_pic">
                                                    <img src={item.url} alt="" />
                                                </div>

                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            }
                        </Swiper>
                    </div>
                    <div className="gaming_container_video_banner">
                        <img src="https://cdn.myportfolio.com/0785202b6c24e160474e0f012553047a/6a6a5544-de7a-45b1-8e5c-5baf198debf4_rw_1200.gif?h=5d700bd8faa782468788a6f7dd44a0a3" alt="" />
                        <div className="gaming_container_video_banner_container">
                            <div className="gaming_container_video_banner_txt">
                                <img src="https://scontent.ftas2-2.fna.fbcdn.net/v/t39.2081-6/277001624_503651411421729_8954590042226593511_n.jpg?stp=c0.0.193.193a_dst-jpg_p192x192&_nc_cat=1&ccb=1-7&_nc_sid=b29aad&_nc_ohc=VG2SlE2Sh2kAX-2vYeR&_nc_ht=scontent.ftas2-2.fna&oh=00_AfCxJe0lhpcM-LA9KOgLjz95asEZlVEd62n4AEhF_KOaKQ&oe=64B8A3D2" alt="" />
                                <p>
                                    CLASH OF KINGS
                                    <br />
                                    <span>PLAY the SUPER FAN BATTLE!</span>
                                </p>
                            </div>
                            <button>
                                <FaGamepad />  Play
                            </button>
                        </div>
                    </div>
                    <div className="gaming_items_container_text">
                        <h5>Top picks for you</h5>
                    </div>
                    <div className="gaming_container_items_swiper">
                        <Swiper slidesPerView={6}
                            spaceBetween={5}
                            className="mySwiper"
                            breakpoints={{
                                0: {
                                    width: 350,
                                    slidesPerView: 1,
                                },
                                600: {
                                    width: 600,
                                    slidesPerView: 2,
                                },
                                850: {
                                    widht: 850,
                                    slidesPerView: 3,
                                },
                                1100: {
                                    widht: 1100,
                                    slidesPerView: 4,
                                },
                                1400: {
                                    width: 1400,
                                    slidesPerView: 5
                                },
                                1500: {
                                    width: 1500,
                                    slidesPerView: 5
                                },
                                1700: {
                                    width: 1700,
                                    slidesPerView: 6
                                }
                            }}
                        >
                            {
                                RECOMMENDATION?.map((item, inx) =>
                                    <SwiperSlide key={inx}>
                                        <div className="gaming_container_rec_item_box">
                                            <img src={item.url} alt="" />
                                            <div className="gaming_container_rec_item_box_txt"
                                            >
                                                <h3>{item.name}</h3>
                                                <div className="rec_item_box_btns">
                                                    {item.isNew && <button className='rec_item_box_new'>
                                                        New
                                                    </button>}
                                                    <button>{item.category}</button>
                                                </div>
                                                <div className="gaming_containner_rec_item_bg_pic">
                                                    <img src={item.url} alt="" />
                                                </div>

                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gaming
