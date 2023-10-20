import React from "react";
import { Link } from "react-router-dom";
import "./menuLinks.scss";

const menuData = [
    { menuTitle: "HOME", path: "/" },
    { menuTitle: "MENU", path: "/menu" },
    {
        menuTitle: "Blogs",
        children: [
            { menuTitle: "1Column", path: "/blog_one_column" },
            { menuTitle: "2Columns", path: "/blog_two_columns" },
            { menuTitle: "sidebar post", path: "/single_post_with_sidebar" },
        ],
    },
    { menuTitle: "ABOUT", path: "/about" },
    { menuTitle: "CONTACT", path: "/contact" },
];

export default function MenuLinks() {
    return (
        <ul>
            {menuData.map((item, index) => {
                if (item.children) {
                    const subMenuLinks = item.children.map((childItem, childIndex) => (
                        <li key={childIndex}>
                            <Link to={childItem.path}>
                                {childItem.menuTitle}
                            </Link>
                        </li>
                    ));

                    return (
                        <li style={{ color: "#9CAA00" }} key={index}>
                            {item.menuTitle}
                            <ul>{subMenuLinks}</ul>
                        </li>
                    );
                } else {
                    return (
                        <li key={index}>
                            <Link to={item.path}>
                                {item.menuTitle}
                            </Link>
                        </li>
                    );
                }
            })}
        </ul>
    );
}
