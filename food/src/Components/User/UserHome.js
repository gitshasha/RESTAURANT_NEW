import { useContext, useState } from "react";
import { RestdetContext } from "../../Context/RestdetContext";
import Vendorbox from "../Vendors/Vendorbox";
function UserHome() {
  return (
    <div>
      {/* {" "}
      {showvendor &&
        showvendor.map((user, index) => (
          <div key={user._id}>
            <Vendorbox img={user.profileImg} />
          </div>
        ))} */}
    </div>
  );
}

export default UserHome;
