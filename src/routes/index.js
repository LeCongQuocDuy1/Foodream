import { SidebarLayout } from '../components/Layout'

import Home from '../pages/Home';
import Category from '../pages/Category';
import ProDetail from '../pages/ProDetail';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import Error from '../pages/Error';

// Route cong khai, khong can dang nhap van vao dc
const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/category',
        component: Category,
        layout: SidebarLayout,
    },
    {
        path: '/detail',
        component: ProDetail,
    },
    {
        path: '/cart',
        component: Cart,
    },
    {
        path: '/checkout',
        component: Checkout,
    },
    {
        path: '/error',
        component: Error,
        layout: null,
    },
];

// Route rieng tu, phai dang nhap van vao dc
const privateRoutes = [];

export { publicRoutes, privateRoutes };
