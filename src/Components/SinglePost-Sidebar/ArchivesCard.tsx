import React from "react";
import "../../styles.scss";

export default function ArchivesCard({ obj }: any) {
    return (
        <div className="archives-card">
            <p className="archive-month">{obj.month}</p>
            <p className="archive-count">{obj.archiveCount}</p>
        </div>
    )
}