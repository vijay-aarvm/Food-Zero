import React from "react";
import "./typeAndCount.scss";

export default function TypeAndCount({ obj, type }: any) {

    let name, count;

    if (type === "category") {
        name = obj.name;
        count = obj.count;
    } else if (type === "archive") {
        name = obj.month;
        count = obj.archiveCount;
    }
    return (
        <div className="type-and-count">
            <p className="type">{name}</p>
            <p className="count">{count}</p>
        </div>
    )
}