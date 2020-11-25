import React from "react";
import { Link, navigate } from "gatsby";
import styled from "styled-components";

const Anchor = styled.a` 
 color: white;`

 const Linkanchor = styled.a` 
 color: white;`

 


const doNavigate = target => {
  if (!target || !target.length) {
    return;
  }
  const internal = /^\/(?!\/)/.test(target);
  if (internal) {
    navigate(target);
  } else {
    window.location = target;
  }
};

const CTALink = props => {
  let link = props.route || props.link || "#";
  if (
    props.landingPageRoute &&
    props.landingPageRoute.slug &&
    props.landingPageRoute.slug.current
  ) {
    link = props.landingPageRoute.slug.current;
  }

  if (props.kind === "button") {
    return (
      <button
        id="navAction"
        onClick={() => doNavigate(link)}
        className={props.buttonActionClass || ""}
      >
        {props.title}
      </button>
    );
  }

  // External
  if (props.link) {
    return (
      <Anchor href={props.link} target="_blank" rel="noopener noreferrer">
        {props.title}
      </Anchor>
    );
  }

  return (
    <Anchor className="mr-3" to={link}>
      {props.title}
    </Anchor>
  );
};

export default CTALink;
