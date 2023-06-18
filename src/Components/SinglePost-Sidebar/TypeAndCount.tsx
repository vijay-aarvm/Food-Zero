import React from "react";
import "./typeAndCount.scss";

export default function TypeAndCount({ title, obj }: any) {

    return (
        <div className="type-and-count-card">
            <p className="title">{title}</p>
            <div className="dotted-line"></div>
            {obj.map((data: any) => (
                <div className="type-and-count" key={data.name || data.month}>
                    <p className="type">{data.name || data.month}</p>
                    <p className="count">{data.count || data.archiveCount}</p>
                </div>
            ))}
        </div>
    );
};
