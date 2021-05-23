import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Wishlist from '../pages/Wishlist';
import home from '../assets/images/home.svg';
import heart from '../assets/images/heart.svg';
import user from '../assets/images/user.svg';


export const routes = [
    {
        page_id:1,
        path: '/',
        component: Home,
        label:home,
    },
    {
        page_id:2,
        path: '/profile',
        component: Profile,
        label:user,
    },
    {
        page_id:3,
        path: '/wishlist',
        component: Wishlist,
        label:heart,
    }
]