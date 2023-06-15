import starters from "../assests/images/starters.png";
import mains from "../assests/images/mains.png";
import soups from "../assests/images/soups.png";

type menu = {
    menuCover: File,
    categoryName: string
}

export const menuCategory: menu[] = [
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