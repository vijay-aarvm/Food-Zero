import React from "react";
import "../../styles.scss";
import SinglePostSidebarCard from "./SinglePostSidebarCard";
import Layout from "../LayoutComponent/Layout";
import { useSelector } from "react-redux";
import { Postinfo } from "../../Store/blogContent";


export default function SidebarPost() {

    const blogContentList = useSelector((state: any) => state.blogContent);

    return (
        <Layout>
            <div className="singlepostwithsidebar">
                {blogContentList.map((blog: Postinfo) => (
                    <SinglePostSidebarCard obj={blog} />
                ))}
            </div>
        </Layout>
    )
}