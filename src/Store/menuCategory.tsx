import starters from "../assests/images/starters.png";
import mains from "../assests/images/mains.png";
import soups from "../assests/images/soups.png";

export type Menu = {
    menuCover: string,
    categoryName: string
}

export const menuCategory: Menu[] = [
    {
        "menuCover": starters,
        "categoryName": "Starters",
    },
    {
        "menuCover": mains,
        "categoryName": "Mains",
    },
    {
        "menuCover": soups,
        "categoryName": "Soups",
    }
]