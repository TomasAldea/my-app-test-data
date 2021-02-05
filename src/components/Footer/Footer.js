import React from "react";

export function Footer(props) {
  console.log("footer data", props.contact.email);

  return (
    <>
      <h1>Footer empieza aquí</h1>
      <div>
        <p>
          Email: {props.contact.email} Phone: {props.contact.phone}
        </p>
        <div>
          address: {props.contact.address.country}{" "}
          {props.contact.address.street} {props.contact.address.state}
        </div>
        <div>
          links: {props.links[0].to} {props.links[0].label}{" "}
          {props.links[1].label} {props.links[2].label}
        </div>
      </div>
    </>
  );
}
