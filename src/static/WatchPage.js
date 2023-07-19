import { LuAirplay, LuClapperboard } from 'react-icons/lu'
import { BiSolidMoviePlay, BiRocket } from 'react-icons/bi'
import { FaTag } from 'react-icons/fa'
import { PiVideoBold } from 'react-icons/pi'

const WATCH_MENU = [
    {
        _id: 0,
        text: "Home",
        pathname: "/",
        icon_name: LuAirplay
    }, {
        _id: 1,
        text: "Live",
        pathname: "/",
        icon_name: PiVideoBold
    }, {
        _id: 2,
        text: "Reels",
        pathname: "/",
        icon_name: BiSolidMoviePlay
    }, {
        _id: 3,
        text: "Shows",
        pathname: "/",
        icon_name: LuClapperboard
    }, {
        _id: 4,
        text: "Explore",
        pathname: "/",
        icon_name: BiRocket
    }, {
        _id: 5,
        text: "Explore",
        pathname: "/",
        icon_name: FaTag
    }
]

export default WATCH_MENU