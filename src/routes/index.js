import { HeaderFooterLayout } from '../components/Layout'

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
    },
    {
        path: '/detail',
        component: ProDetail,
        layout: HeaderFooterLayout,
    },
    {
        path: '/cart',
        component: Cart,
        layout: HeaderFooterLayout,
    },
    {
        path: '/checkout',
        component: Checkout,
        layout: HeaderFooterLayout,
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
