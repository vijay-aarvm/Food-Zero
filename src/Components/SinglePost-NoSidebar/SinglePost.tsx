import React from "react";
// import "../../styles.scss";
import SinglePostCard from "../CommonComponents/SinglePostCard";
import RelatedPosts from "./RelatedPosts";
import Layout from "../LayoutComponent/Layout";
import { useSelector } from "react-redux";
import { Postinfo } from "../../Store/blogContent";



export default function SinglePost() {

    const blogContentList = useSelector((state: any) => state.blogContent)

    return (
        <Layout>
            <div>
                {blogContentList.map((blog: Postinfo, index: number) => (
                    <SinglePostCard obj={blog} key={index} />
                ))}
                <RelatedPosts />
            </div>
        </Layout>
    )
}