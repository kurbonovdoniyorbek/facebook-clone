import React from 'react'
import MARKET_MENU from '../../static/MarketPlaceMenu'
import PRODUCTS from '../../static/Product'
import './MarketPlace.css'
import { NavLink } from 'react-router-dom'
import { AiTwotoneSetting } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'
import { BiSolidBellRing, BiSolidShoppingBags } from 'react-icons/bi'
import { BsShop, BsFillInboxFill } from 'react-icons/bs'
import { MdOutlineSell } from 'react-icons/md'
import { IoLocationSharp } from 'react-icons/io5'



const MarketPlace = () => {
    const [marketToggle, setMarketToggle] = React.useState("")
    const [headMarketmMenu, setHeadMarketMenu] = React.useState("0")

    return (
        <div>
            <div className="market_place">
                <ul className="market_menu_containter">
                    <div className="market_menu_navbar">
                        <div className="market_menu_navbar_texts">
                            <p>MarketPlace</p>
                            <div className="market_menu_scroll_container_svg">
                                <AiTwotoneSetting />
                            </div>
                        </div>
                        <div className="market_menu_search">
                            <FiSearch />
                            <input type="text" placeholder='Search MarketPlace' />
                        </div>
                    </div>
                    <div className="market_menu_scroll_container">
                        <NavLink className="market_menu_scroll_container_link"
                            onClick={() => {
                                setHeadMarketMenu("0")
                            }}
                        >
                            <li className='market_menu_scroll_container_item'>
                                <div className={`market_menu_scroll_container_svg ${headMarketmMenu === "0" ? "market_menu_scroll_container_svg_active" : ""}`}>
                                    <BsShop />
                                </div>
                                <p>Browse All</p>
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
                        <NavLink className="market_menu_scroll_container_link"
                            onClick={() => {
                                setHeadMarketMenu("2")
                            }}>
                            <li className='market_menu_scroll_container_item'>
                                <div className={`market_menu_scroll_container_svg ${headMarketmMenu === "2" ? "market_menu_scroll_container_svg_active" : ""}`}>
                                    <BsFillInboxFill />
                                </div>
                                <p>InBox</p>
                            </li>
                        </NavLink>
                        <NavLink className="market_menu_scroll_container_link"
                            onClick={() => {
                                setHeadMarketMenu("3")
                            }}>
                            <li className='market_menu_scroll_container_item'>
                                <div className={`market_menu_scroll_container_svg ${headMarketmMenu === "3" ? "market_menu_scroll_container_svg_active" : ""}`}>
                                    <BiSolidShoppingBags />
                                </div>
                                <p>Buying</p>
                            </li>
                        </NavLink>
                        <NavLink className="market_menu_scroll_container_link"
                            onClick={() => {
                                setHeadMarketMenu("4")
                            }}>
                            <li className='market_menu_scroll_container_item'>
                                <div className={`market_menu_scroll_container_svg ${headMarketmMenu === "4" ? "market_menu_scroll_container_svg_active" : ""}`}>
                                    <MdOutlineSell />
                                </div>
                                <p>Selling</p>
                            </li>
                        </NavLink>
                        <div className="market_menu_scroll_container_line">
                        </div>
                        <div className="market_menu_scroll_container_filter">
                            <h4>Filters</h4>
                            <NavLink>
                                Andijan · Within 60 kilometres
                            </NavLink>
                        </div>
                        <div className="market_menu_scroll_container_line">
                        </div>
                        {
                            MARKET_MENU?.map((data) =>
                                <div className='market_menu_scroll_categories_container' key={data._id}>
                                    <p>{data.head_text}</p>
                                    {
                                        data?.data.map(item =>
                                            <NavLink key={item._id} className="market_menu_scroll_container_link"
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


                </ul>
                <div className="market_place_items_container">
                    <div className="markey_place_items_container_text">
                        <h5>Today's picks</h5>
                        <NavLink>
                            <IoLocationSharp /> Andijon  · 65 km
                        </NavLink>
                    </div>
                    <ul className="market_place_products_container">
                        {
                            PRODUCTS?.map((item) =>
                                <li className='market_place_products_items' key={item._id}>
                                    <div className="market_place_products_pics">
                                        <img src={item.url} alt="" />
                                    </div>
                                    <div className="market_place_products_texts">
                                        <h4>{item.price} so'm</h4>
                                        <h6>{item.desc}</h6>
                                        <p>{item.location}</p>
                                    </div>
                                </li>
                            )
                        }

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MarketPlace
