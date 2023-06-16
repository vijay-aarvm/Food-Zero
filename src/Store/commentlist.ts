import julieChristie from "../assests/images/julie-christie.png";
import dianne from "../assests/images/dianne.png";
import jenifer from "../assests/images/jenifer.png";
import theresa from "../assests/images/theresa.png";

export type commentinfo = {
    userProfile: string,
    uName: string,
    postedTime: string,
    comment: string
}


export const comments: commentinfo[] = [
    {
        "userProfile": julieChristie,
        "uName": "Julie Christie",
        "postedTime": "March 12,2020,7:08 pm",
        "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet."
    },
    {
        "userProfile": dianne,
        "uName": "Dianne",
        "postedTime": "March 12,2020,7:08 pm",
        "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet."
    },
    {
        "userProfile": jenifer,
        "uName": "Jenifer Lopez",
        "postedTime": "March 12,2020,7:08 pm",
        "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet."
    },
    {
        "userProfile": theresa,
        "uName": "Theresa Wilson",
        "postedTime": "March 12,2020,7:08 pm",
        "comment": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet."
    }
]