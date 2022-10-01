import React from "react";

const HospitalService = () => {
    return (
        <>
            <div className="menuBar">
                <ul>
                    <li><a href="/hospital/addChild">Enroll New Child</a></li>
                    <li><a href="/logout">LogOut</a></li>
                </ul>
            </div>
        </>
    )
}
export default HospitalService;