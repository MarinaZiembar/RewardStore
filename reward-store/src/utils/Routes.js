import Home from '../pages/Home';
import Profile from '../pages/Profile';




export const routes = [
    {
        page_id:1,
        path: '/',
        component: Home,
        label:"Home",
    },
    {
        page_id:2,
        path: '/profile',
        component: Profile,
        label:"My Profile",
    }
]