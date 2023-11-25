/* eslint-disable react/display-name */
import { QA } from "../bot/qa";
import React from "react";
import "./Suggestions.css";

const Suggestions = React.memo(
  (props: any) => {
    let qas = QA.filter((qa) =>
      qa.key
        .toLowerCase()
        .includes(props.state.messages[props.state.messages.length - 2])
    );
    if (!qas.length) qas = QA.slice(0, 5);

    const linkMarkup = qas.map((qa, idx) => (
      <li
        key={idx}
        className="link-list-item"
        onClick={() => {
          props.actions.handleQuestion(qa.key, true);
        }}
      >
        <a rel="noopener noreferrer" className="link-list-item-url">
          {qa.key}
        </a>
      </li>
    ));

    return <ul className="link-list">{linkMarkup}</ul>;
  },
  () => {
    return true;
  }
);

export default Suggestions;
