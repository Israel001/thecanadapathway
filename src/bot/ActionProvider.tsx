import React from "react";
import { QA } from "./qa";

const ActionProvider = ({
  createChatBotMessage,
  setState,
  children,
}: {
  createChatBotMessage: any;
  setState: any;
  children: any;
}) => {
  const handleQuestion = (message: string, fromBot = false) => {
    const msgIdx = QA.findIndex(
      (qa) => qa.key.toLowerCase() === message.toLowerCase()
    );
    if (msgIdx === -1) {
      const newMessage = createChatBotMessage(
        "Could not find any answer for your question. Here are some related questions:",
        { widget: "suggestions" }
      );
      setState((prevState: any) => {
        localStorage.setItem(
          "messages",
          JSON.stringify([...prevState.messages, newMessage])
        );
        return { messages: [...prevState.messages, newMessage] };
      });
    } else {
      const newMessage = createChatBotMessage(
        "Here is the answer to your question:",
        { widget: "answer" }
      );
      setState((prevState: any) => {
        let compiledMessages = [...prevState.messages, newMessage];
        if (fromBot)
          compiledMessages.splice(compiledMessages.length - 1, 0, {
            message: message,
          });
        localStorage.setItem("messages", JSON.stringify(compiledMessages));
        return { messages: compiledMessages };
      });
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleQuestion,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
