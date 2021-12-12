import React from "react";

const RoleBasedComponent = ({ children, supportedRoles, role }) => {
  return (
    <div>
      {supportedRoles.indexOf(role) > -1 ? children : ""}
    </div>
  );
};

export default RoleBasedComponent;
