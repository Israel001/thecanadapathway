import Msg from "../components/Msg";
import Suggestions from "../components/Suggestions";

const config = {
  initialMessages: [],
  customStyles: {
    // botMessageBox: {
    //   backgroundColor: "#376B7E",
    // },
    // chatButton: {
    //   backgroundColor: "#5ccc9d",
    // },
  },
  widgets: [
    {
      widgetName: "answer",
      widgetFunc: (props) => <Msg {...props} />,
      props: {},
      mapStateToProps: [],
    },
    {
      widgetName: "suggestions",
      widgetFunc: (props) => <Suggestions {...props} />,
      props: {},
      mapStateToProps: [],
    },
  ],
};

export default config;
