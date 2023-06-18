import React from "react";
import Footer from "../CommonComponents/Footer";


export default function Layout({ children }: any) {
    return (
        <div>
            {children}
            <Footer />
        </div>
    )
}