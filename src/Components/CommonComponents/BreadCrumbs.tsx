import React from "react";
import "./breadCrumbs.scss";


export default function BreadCrumbs({ path, source }: any) {
    return (
        <div className="breadcrumbs">
            <p className="blog-path">{path}</p>
            <p className="blog-path-source">{source}</p>
        </div>
    )
}