import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3, thumbnailphone1,thumbnailphone3, thumbnailphone4, iPhone1, iPhone3, iPhone4, macbook, ipad, watch, airpods, imac, macpro, ipad2, iPhone10, iPhone11, macbookpro, studiodisplay, customer3 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const phones = [
    {
        thumbnail: thumbnailphone1,
        iPhone: iPhone1,
    },
    {
        thumbnail: thumbnailphone3,
        iPhone: iPhone3,
    },
    {
        thumbnail: thumbnailphone4,
        iPhone: iPhone4,
    },
];

export const statistics = [
    { value: '1k+', label: 'Service' },
    { value: '4k+', label: 'Sellers' },
    { value: '500k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: macbook,
        name: "MacBook Air",
        price: "₹1,69,900",
    },
    {
        imgURL: ipad,
        name: "iPad Pro",
        price: "₹1,12,900",
    },
    {
        imgURL: imac,
        name: "iMac",
        price: "₹1,34,900",
    },
    {
        imgURL: airpods,
        name: "Airpods Max",
        price: "₹89,900",
    },
];

export const offers = [
    {
        imgURL: iPhone10,
        name: "iPhone 14 Plus",
        price: "₹69,900",
        discountedprice: "₹54,900",
    },
    {
        imgURL: ipad2,
        name: "iPad Pro",
        price: "₹81,900",
        discountedprice: "₹71,900",
    },
    {
        imgURL: studiodisplay,
        name: "Studio Display",
        price: "₹72,900",
        discountedprice: "₹62,900",
    },
    {
        imgURL: macbookpro,
        name: "Macbook Pro",
        price: "₹1,09,900",
        discountedprice: "₹99,900",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];



export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    },
    {
        imgURL: customer3,
        customerName: 'David Bechkam',
        rating: 4.5,
        feedback: "The product is just amazing. Love everything you buy and returns for free"
    },
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "iPhone 15 Pro Max", link: "/" },
            { name: "iPhone 15 Pro", link: "/" },
            { name: "iPhone 14 Pro Max", link: "/" },
            { name: "iPhone 14 Pro", link: "/" },
            { name: "MacBook Pro", link: "/" },
            { name: "Studio Display", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@apple.in", link: "mailto:customer@apple.in" },
            { name: "+91-1234567890", link: "tel:+91-1234567890" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];