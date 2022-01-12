import React from "react";
import DistrictsAndAddressesEdit from "./DistrictsAndAddressesEdit";
import DistrictsAndAddressesData from "./DistrictsAndAddressesData";

const DistrictsAndAddresses = ({editAddress, setEditAddress}) => {
    return (
        <>
        {editAddress ? <DistrictsAndAddressesEdit setEditAddress={setEditAddress}/>
                :<DistrictsAndAddressesData setEditAddress={setEditAddress}/>}
        </>
    );
};

export default DistrictsAndAddresses;
