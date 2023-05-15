"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 867:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(844);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: external "@heroicons/react/outline"
const outline_namespaceObject = require("@heroicons/react/outline");
;// CONCATENATED MODULE: ./src/components/Header.js




function Header() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("header", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex items-center bg-black p-1 flex-grow py-2",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "mt-2 flex items-center flex-grow sm:flex-grow-0"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "hidden sm:flex items-center h-10 w-10 rounded-md flex-grow cursor-pointer bg-pink-400 hover:bg-green-500",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("input", {
                                className: "p- h-full width-2  flex-shrink rounded-l-md focus:outline-none px-2 ",
                                type: "text"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx(outline_namespaceObject.SearchIcon, {
                                className: "h-12 p-4"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "link",
                                children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                                    className: "bg-blue-500 h-10 w-20 text-white py-2 rounded-lg font-medium transition-colors duration-300 hover:bg-blue-600",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        className: "font-extrabold md:text-sm",
                                        children: "Sign Up"
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "relative link flex items-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        className: "fixed top-0 right-10 md:right-7 h-4 w-4 bg-yellow-100 text-center rounded-full text-black font-bold",
                                        children: "0"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx(outline_namespaceObject.ShoppingCartIcon, {
                                        className: "h-7"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                        className: "hidden md:inline  md:text-sm mt-2",
                                        children: "Cart"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex items-center space-x-3 p-2 pl-6 bg-black text-white text-sm",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                            className: "link",
                            children: "Business"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                            className: "link hidden lg:inline-flex",
                            children: "Electronics"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                            className: "link hidden lg:inline-flex",
                            children: "Food & Grocery"
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const components_Header = (Header);

;// CONCATENATED MODULE: external "react-responsive-carousel"
const external_react_responsive_carousel_namespaceObject = require("react-responsive-carousel");
// EXTERNAL MODULE: ./node_modules/react-responsive-carousel/lib/styles/carousel.min.css
var carousel_min = __webpack_require__(559);
;// CONCATENATED MODULE: ./src/components/Banner.js




function Banner() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "absolute w-full h-8 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)(external_react_responsive_carousel_namespaceObject.Carousel, {
                autoPlay: true,
                infiniteLoop: true,
                showStatus: false,
                showIndicators: false,
                showThumbs: false,
                interval: 4000,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                            loading: "lazy",
                            href: "/banner.png",
                            alt: "",
                            width: 50,
                            height: 50
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                            loading: "lazy",
                            src: "/banner.png",
                            alt: "",
                            width: 50,
                            height: 50
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                            loading: "lazy",
                            src: "/banner.png",
                            alt: "",
                            width: 50,
                            height: 50
                        })
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const components_Banner = (Banner);

;// CONCATENATED MODULE: external "@heroicons/react/solid"
const solid_namespaceObject = require("@heroicons/react/solid");
;// CONCATENATED MODULE: external "react-currency-formatter"
const external_react_currency_formatter_namespaceObject = require("react-currency-formatter");
var external_react_currency_formatter_default = /*#__PURE__*/__webpack_require__.n(external_react_currency_formatter_namespaceObject);
;// CONCATENATED MODULE: ./src/components/Product.js






const MAX_RATING = 5;
const MIN_RATING = 1;
function Product({ id , title , price , description , category , image  }) {
    const [rating] = (0,external_react_.useState)(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING);
    const [hasPrime] = (0,external_react_.useState)(Math.random() < 0.5);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "flex flex-col w-80 mx-auto bg-white rounded-lg shadow-lg overflow-hidden",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "relative pb-3/4",
                children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                    src: image,
                    layout: "fill",
                    objectFit: "cover"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "p-4 flex flex-col flex-grow",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        className: "text-gray-500 uppercase text-xs mb-1",
                        children: category
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                        className: "text-lg font-medium mb-1",
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "flex items-center mb-1",
                        children: Array(rating).fill().map((_, i)=>/*#__PURE__*/ jsx_runtime.jsx(solid_namespaceObject.StarIcon, {
                                className: "h-5 w-5 text-yellow-1  00"
                            }, i))
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        className: "text-gray-500 text-sm mb-2 line-clamp-3",
                        children: description
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "flex items-center mb-2",
                        children: /*#__PURE__*/ jsx_runtime.jsx((external_react_currency_formatter_default()), {
                            quantity: price + 800,
                            currency: "INR"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("button", {
                        className: "bg-blue-500 text-white py-2 rounded-lg font-medium transition-colors duration-300 hover:bg-blue-600",
                        children: "Add to Cart"
                    })
                ]
            })
        ]
    });
}
/* harmony default export */ const components_Product = (Product);

;// CONCATENATED MODULE: ./src/components/ProductFeed.js




function ProductFeed({ products  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto",
        children: [
            products.slice(0, 4).map(({ id , title , price , description , category , image  })=>/*#__PURE__*/ jsx_runtime.jsx(components_Product, {
                    id: id,
                    title: title,
                    price: price,
                    description: description,
                    category: category,
                    image: image
                }, id)),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "md:col-span-2",
                children: products.slice(4, 5).map(({ id , title , price , description , category , image  })=>/*#__PURE__*/ jsx_runtime.jsx(components_Product, {
                        id: id,
                        title: title,
                        price: price,
                        description: description,
                        category: category,
                        image: image
                    }, id))
            }),
            products.slice(5, products.length).map(({ id , title , price , description , category , image  })=>/*#__PURE__*/ jsx_runtime.jsx(components_Product, {
                    id: id,
                    title: title,
                    price: price,
                    description: description,
                    category: category,
                    image: image
                }, id))
        ]
    });
}
/* harmony default export */ const components_ProductFeed = (ProductFeed);

;// CONCATENATED MODULE: ./src/pages/index.js





function Home({ products  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "bg-gray-100",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime.jsx("title", {
                    children: "Bugg Off"
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx(components_Header, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("main", {
                className: "max-w-screen-2xl mx-auto",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(components_Banner, {}),
                    /*#__PURE__*/ jsx_runtime.jsx(components_ProductFeed, {
                        products: products
                    })
                ]
            })
        ]
    });
}
async function getServerSideProps(context) {
    const products = await fetch("https://fakestoreapi.com/products").then((res)=>res.json());
    return {
        props: {
            products
        }
    };
}


/***/ }),

/***/ 38:
/***/ ((module) => {

module.exports = require("next/dist/compiled/react");

/***/ }),

/***/ 918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [965,844,80], () => (__webpack_exec__(867)));
module.exports = __webpack_exports__;

})();