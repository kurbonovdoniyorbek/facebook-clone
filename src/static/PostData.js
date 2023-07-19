import { BiSolidEdit, BiVideoPlus } from 'react-icons/bi'
import { BsFillPlayBtnFill, BsFillCalendar2PlusFill } from 'react-icons/bs'
import { AiFillSound } from 'react-icons/ai'
import { MdGroups } from 'react-icons/md'
import { FaFlag } from 'react-icons/fa'
import { FaShoppingBag } from 'react-icons/fa'
import { BsBookFill } from 'react-icons/bs'

const POST_DATA = [
    {
        id: 10,
        data: [
            {
                _id: 1,
                header_text: "Post",
                desc: "Share a post on News Feed.",
                icon_name: BiSolidEdit,
            }, {
                _id: 2,
                header_text: "Story",
                desc: "Share a post or write something.",
                icon_name: BsBookFill,
            }
            , {
                _id: 3,
                header_text: "Reel",
                desc: "Share a reel",
                icon_name: BsFillPlayBtnFill,
            }, {
                _id: 4,
                header_text: "Room",
                desc: "Video chat with anyone,on or off Facebook,without time limits.",
                icon_name: BiVideoPlus,
            }
        ]
    },
    {
        id: 11,
        data: [
            {
                _id: 5,
                header_text: "Page",
                desc: "Connect and share with customers or fans.",
                icon_name: FaFlag,
            }, {
                _id: 6,
                header_text: "Ad",
                desc: "Advertise your business,brand or organization",
                icon_name: AiFillSound,
            }
            , {
                _id: 7,
                header_text: "Group",
                desc: "Connect with people who share your interest.",
                icon_name: MdGroups,
            }, {
                _id: 8,
                header_text: "Event",
                desc: "Bring people together with a public or private event.",
                icon_name: BsFillCalendar2PlusFill,
            }
            , {
                _id: 9,
                header_text: "MarketPlace listing",
                desc: "Sell items to people in your community",
                icon_name: FaShoppingBag,
            }
        ]
    }
]

export default POST_DATA