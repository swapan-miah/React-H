import React from "react";
import Props from "./Props";

function User() {
  const user = {
    firstName: "Harper",
    lastName: "Perez",
  };

  function formatName(user) {
    return user.firstName + " " + user.lastName;
  }

  return (
    <div>
      <h1>// Hello, {formatName(user)}! // </h1>
      {/* <Props /> */}
    </div>
  );
}

export default User;

// function formatName(user) {
//     return user.firstName + ' ' + user.lastName;
//   }

//   const user = {
//     firstName: 'Harper',
//     lastName: 'Perez'
//   };

//   const element = (
//
//   );
