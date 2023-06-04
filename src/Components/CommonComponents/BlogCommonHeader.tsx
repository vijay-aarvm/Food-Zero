import React from "react";
import "../../styles.scss";
import NavigationBar from "./NavigationBar";

export default function BlogCommonHeader() {
    return (
        <div className="blog-common-header">
            <div className="flower-bg"></div>
            <NavigationBar />
        </div>
    )
}