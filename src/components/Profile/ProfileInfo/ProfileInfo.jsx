import React from 'react';
import "./ProfileInfo.css";
import Panorama from "../../../images/panorama.jpeg";
const ProfileInfo = (props) => {
    return (
        <div className="">
            <img src={Panorama} alt="" className="content-img"/>
            <h1>My profile</h1>
            <div className="description">
                <img src="https://scontent.fiev9-1.fna.fbcdn.net/v/t1.0-1/p320x320/31422831_599988460334603_4390708351066642632_n.jpg?_nc_cat=108&_nc_oc=AQm1s2LtYK2IavKPZzIGEDWExj8qDPq3vNO-U_ZOxdztrfAAnW-X6vqsactHBf2yng4&_nc_ht=scontent.fiev9-1.fna&oh=1c963ee740004ab33da43f7700992a26&oe=5E87D3FC" alt="" className="avatar"/>
                <span className="profile-name">{props.name}</span>
            </div>
        </div>
    );
}
export default ProfileInfo;