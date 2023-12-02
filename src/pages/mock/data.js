import CartPage from "../CartPage";
import MainPage from "../MainPage";

const headphones = [
    {
        img: require("../assets/img/Image1.png"),
        title: "Apple BYZ S852I",
        price: 2927,
        rate: 4.7,
        id: 0,
    },
    {
        img: require("../assets/img/Image2.png"),
        title: "Apple EarPods",
        price: 2327,
        rate: 4.5,
        id: 1,
    },
    {
        img: require("../assets/img/Image3.png"),
        title: "Apple EarPods",
        price: 2327,
        rate: 4.5,
        id: 2,
    },
    {
        img: require("../assets/img/Image1.png"),
        title: "Apple BYZ S852I",
        price: 2927,
        rate: 4.7,
        id: 3,
    },
    {
        img: require("../assets/img/Image2.png"),
        title: "Apple EarPods",
        price: 2327,
        rate: 4.5,
        id: 4,
    },
    {
        img: require("../assets/img/Image3.png"),
        title: "Apple EarPods",
        price: 2327,
        rate: 4.5,
        id: 5,
    }
]

const wirelessHeadphones = [
    {
        img: require("../assets/img/Image_1.png"),
        title: "Apple AirPods",
        price: 9527,
        rate: 4.7,
        id: 0,
    },
    {
        img: require("../assets/img/Image_2.png"),
        title: "GERLAX GH-04",
        price: 6527,
        rate: 4.7,
        id: 1,
    },
    {
        img: require("../assets/img/Image_3.png"),
        title: "BOROFONE BO4",
        price: 7527,
        rate: 4.7,
        id: 2,
    }
]

const NavRoutes = [
    {
        id: 0,
        title: 'Main Page',
        path: '/',
        component: <MainPage />,
    },
    {
        id: 1,
        title: 'Cart Page',
        path: '/cart',
        component: <CartPage />,
    }
]

export { headphones, wirelessHeadphones, NavRoutes };