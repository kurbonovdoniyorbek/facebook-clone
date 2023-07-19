import { PiGameControllerFill } from 'react-icons/pi'
import { FaGun } from 'react-icons/fa6'
import { BsFillMapFill } from 'react-icons/bs'
import { SiApplearcade } from 'react-icons/si'
import { GiBattleGear } from 'react-icons/gi'
import { FaChessPawn } from 'react-icons/fa'
import { BiSolidCastle } from 'react-icons/bi'
import { GiCardQueenSpades } from 'react-icons/gi'
import { MdCasino } from 'react-icons/md'

const GAME_CATEGORIES = [
    {
        _id: 1,
        head_text: "Categories",
        data: [
            {
                _id: 1,
                text: "All Games",
                pathname: "/",
                icon_name: PiGameControllerFill
            },
            {
                _id: 2,
                text: "Action",
                pathname: "/",
                icon_name: FaGun
            },
            {
                _id: 3,
                text: "Adventure",
                pathname: "/",
                icon_name: BsFillMapFill
            },
            {
                _id: 4,
                text: "Arcade",
                pathname: "/",
                icon_name: SiApplearcade
            },
            {
                _id: 5,
                text: "Battle",
                pathname: "/",
                icon_name: GiBattleGear
            },
            {
                _id: 6,
                text: "Board",
                pathname: "/",
                icon_name: FaChessPawn
            },
            {
                _id: 7,
                text: "Builder",
                pathname: "/",
                icon_name: BiSolidCastle
            },
            {
                _id: 8,
                text: "Card",
                pathname: "/",
                icon_name: GiCardQueenSpades
            }, {
                _id: 9,
                text: "Casino",
                pathname: "/",
                icon_name: MdCasino
            },
        ]
    }
]

export default GAME_CATEGORIES