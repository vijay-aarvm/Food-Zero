import julie from "../assests/images/julie-christie.png";
import cookGoatMeat from "../assests/images/cook-goat-meat.png";
import image1 from "../assests/images/image1.png";
import image2 from "../assests/images/image2.png";

export type Postinfo = {
    blogHeaderBg: string,
    blogTitle: string,
    authorProfile: string,
    authorName: string,
    postedDate: string,
    postedTime: string,
    noOfComments: string,
    blogIntro: string,
    blogImage1: string,
    blogImage2: string,
    blogRecipe: string,
    blogConclusion: string,
    aboutAuthor: string
}

export const blogContentList: Postinfo[] = [
    {
        "blogHeaderBg": cookGoatMeat,
        "blogTitle": "Three Ideas for Cooking Goat Meat at Home",
        "authorProfile": julie,
        "authorName": "Julie Christie",
        "postedDate": "October 17,2021",
        "postedTime": "3:33 pm",
        "noOfComments": "2 comments",
        "blogIntro": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed in pellentesque ornare nunc nisl. Augue habitant accumsan, ut parturient orci ac etiam congue mi. Elementum pellentesque non hendrerit et pharetra tellus leo tempus tellus.",
        "blogImage1": image1,
        "blogImage2": image2,
        "blogRecipe": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed in pellentesque ornare nunc nisl. Augue habitant accumsan, ut parturient orci ac etiam congue mi. Elementum pellentesque non hendrerit et pharetra tellus leo tempus tellus. Consectetur scelerisque facilisis nunc nunc. Sapien morbi dignissim id tortor vel volutpat facilisi. Cras lectus faucibus sed donec. Est pulvinar adipiscing eget at nunc amet bibendum enim vulputate. Eu orci nec consequat amet. Id cursus purus et fringilla molestie a nulla turpis. Lobortis dui rutrum sed sit. Mattis quis scelerisque consectetur orci dui est sem nulla.Tortor ullamcorper neque, habitant vulputate at in. Vel nulla in ornare amet id praesent. Malesuada eu sed volutpat, tristique sed laoreet. Ultrices purus ac urna diam tincidunt interdum faucibus mauris est. Nec, lacinia eleifend amet, quis turpis et massa duis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed in pellentesque ornare nunc nisl. Augue habitant accumsan, ut parturient orci ac etiam congue mi.",
        "blogConclusion": "Elementum pellentesque non hendrerit et pharetra tellus leo tempus tellus. Consectetur scelerisque facilisis nunc nunc. Sapien morbi dignissim id tortor vel volutpat facilisi. Cras lectus faucibus sed donec. Est pulvinar adipiscing eget at nunc amet bibendum enim vulputate. Eu orci nec consequat amet. Id cursus purus et fringilla molestie a nulla turpis. Lobortis dui rutrum sed sit. Mattis quis scelerisque consectetur orci dui est sem nulla.Tortor ullamcorper neque, habitant vulputate at in. Vel nulla in ornare amet id praesent. Malesuada eu sed volutpat, tristique sed laoreet. Ultrices purus ac urna diam tincidunt interdum faucibus mauris est. Nec, lacinia eleifend amet, quis turpis et massa duis.",
        "aboutAuthor": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet."
    }
]