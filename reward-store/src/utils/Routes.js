import Home from '../pages/Home';
import Profile from '../pages/Profile';
import home from '../assets/images/home.svg';
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
]