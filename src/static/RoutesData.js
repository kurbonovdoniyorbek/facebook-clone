import Home from '../routes/home/Home';
import Gaming from '../routes/gaming/Gaming';
import MarketPlace from '../routes/marketplace/MarketPlace';
import Watch from '../routes/watch/Watch';
import Friends from '../routes/friends/Friends';
import Account from "../routes/account/Account";

const RoutesData = [
    {
        _id: 1,
        path: "/",
        element: Home
    },
    {
        _id: 2,
        path: "/games",
        element: Gaming
    },
    {
        _id: 3,
        path: "/market",
        element: MarketPlace
    },
    {
        _id: 4,
        path: "/watch",
        element: Watch
    },
    {
        _id: 5,
        path: "/friends",
        element: Friends
    },
    {
        _id: 6,
        path: "/profile",
        element: Account
    }
]

export default RoutesData