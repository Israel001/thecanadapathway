/* eslint-disable react/display-name */
import { QA } from "../bot/qa";
import React from "react";

const Msg = React.memo(
  (props: any) => {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: `${
            QA.find(
              (qa) =>
                qa.key.toLowerCase() ===
                props.state.messages[
                  props.state.messages.length - 2
                ].message.toLowerCase()
            )?.value
          }`,
        }}
      ></div>
    );
  },
  () => {
    return true;
  }
);

export default Msg;
