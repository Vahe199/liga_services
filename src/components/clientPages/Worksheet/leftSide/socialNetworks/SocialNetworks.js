import React from "react";
import SocialNetworksEdit from "./SocialNetworksEdit";
import SocialNetworksData from "./SocialNetworksData";

const SocialNetworks = ({setEditSocialNetwork, editSocialNetwork}) => {
    return (
        <>
            {editSocialNetwork ? <SocialNetworksEdit setEditSocialNetwork={setEditSocialNetwork}/>
                : <SocialNetworksData setEditSocialNetwork={setEditSocialNetwork}/>}
        </>
    );
};
export default SocialNetworks;
