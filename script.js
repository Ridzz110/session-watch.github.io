class Mainapp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionLength: 25,
      breakLength: 5,
      session: 5,
      displayTitle: "session",
      break: 300,
      play: false };

    this.sessionIncrement = this.sessionIncrement.bind(this);
    this.sessionDecrement = this.sessionDecrement.bind(this);
    this.breakIncrement = this.breakIncrement.bind(this);
    this.breakDecrement = this.breakDecrement.bind(this);
    this.sessionPlay = this.sessionPlay.bind(this);
    this.play = this.play.bind(this);
    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);
  }
  componentDidMount() {
    document.addEventListener("onClick", this.play());
    document.addEventListener("onClick", this.stop());
    document.addEventListener("onClick", this.reset());
    document.addEventListener("onClick", this.sessionPlay);
    this.intervalID = setInterval(() => this.sessionPlay(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  reset() {
    this.setState({
      sessionLength: 25,
      breakLength: 5,
      session: 1800,
      break: 300,
      play: false });

  }
  sessionIncrement() {
    if (this.state.sessionLength < 60) {
      this.setState(prev => ({
        sessionLength: prev.sessionLength + 1,
        session: prev.session + 60 }));

    }
  }
  sessionDecrement() {
    if (this.state.sessionLength > 1)
    {
      this.setState(prev => ({
        sessionLength: prev.sessionLength - 1,
        session: prev.session - 60 }));

    }
  }
  breakIncrement() {
    if (this.state.breakLength < 60) {
      this.setState(prev => ({
        breakLength: prev.breakLength + 1,
        break: prev.break + 60 }));

    }
  }
  breakDecrement() {
    if (this.state.breakLength > 1) {
      this.setState(prev => ({
        breakLength: prev.breakLength - 1,
        break: prev.break - 60 }));

    }
  }
  play() {
    this.setState({
      play: true });

  }
  sessionPlay() {
    if (this.state.play) {
      this.setState(prev => ({
        session: prev.session - 1 }));

    }
    if (this.state.session == -1) {
      this.setstate(prev => ({
        display: this.state.break,
        displayTitle: "break",
        break: prev.break - 1 }));

    }
  }
  stop() {
    this.setState(prev => ({
      play: !prev.play }));

  }
  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/
    React.createElement("div", { class: "mainbody" }, /*#__PURE__*/
    React.createElement("h1", null, "SESSION WATCH"), /*#__PURE__*/
    React.createElement("div", { class: "whole-box" }, /*#__PURE__*/
    React.createElement("div", { class: "length-box" }, /*#__PURE__*/
    React.createElement("h3", { id: "session-label" }, "SESSION LENGTH"), /*#__PURE__*/
    React.createElement("div", { class: "counter-box" }, /*#__PURE__*/
    React.createElement("button", { onClick: this.sessionIncrement, id: "session-increment" }, /*#__PURE__*/React.createElement("svg", { fill: "white", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, /*#__PURE__*/React.createElement("path", { d: "M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zm11.3-395.3l112 112c4.6 4.6 5.9 11.5 3.5 17.4s-8.3 9.9-14.8 9.9H304v96c0 17.7-14.3 32-32 32H240c-17.7 0-32-14.3-32-32V256H144c-6.5 0-12.3-3.9-14.8-9.9s-1.1-12.9 3.5-17.4l112-112c6.2-6.2 16.4-6.2 22.6 0z" }))), /*#__PURE__*/
    React.createElement("p", { class: "pp", id: "session-length" }, this.state.sessionLength), /*#__PURE__*/
    React.createElement("button", { onClick: this.sessionDecrement, id: "session-decrement" }, /*#__PURE__*/React.createElement("svg", { fill: "white", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, /*#__PURE__*/React.createElement("path", { d: "M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512s256-114.6 256-256S397.4 0 256 0zM244.7 395.3l-112-112c-4.6-4.6-5.9-11.5-3.5-17.4s8.3-9.9 14.8-9.9l64 0 0-96c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 96 64 0c6.5 0 12.3 3.9 14.8 9.9s1.1 12.9-3.5 17.4l-112 112c-6.2 6.2-16.4 6.2-22.6 0z" })), /*#__PURE__*/
    React.createElement("i", { class: "fa-solid fa-circle-caret-up" })))), /*#__PURE__*/



    React.createElement("div", { class: "length-box" }, /*#__PURE__*/
    React.createElement("h3", { id: "break-label" }, "BREAK LENGTH"), /*#__PURE__*/
    React.createElement("div", { class: "counter-box" }, /*#__PURE__*/
    React.createElement("button", { onClick: this.breakIncrement, id: "break-increment" }, /*#__PURE__*/React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, /*#__PURE__*/React.createElement("path", { d: "M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zm11.3-395.3l112 112c4.6 4.6 5.9 11.5 3.5 17.4s-8.3 9.9-14.8 9.9H304v96c0 17.7-14.3 32-32 32H240c-17.7 0-32-14.3-32-32V256H144c-6.5 0-12.3-3.9-14.8-9.9s-1.1-12.9 3.5-17.4l112-112c6.2-6.2 16.4-6.2 22.6 0z", fill: "white" }))), /*#__PURE__*/

    React.createElement("p", { class: "pp", id: "break-length" }, this.state.breakLength), /*#__PURE__*/
    React.createElement("button", { onClick: this.breakDecrement, id: "break-decrement" }, /*#__PURE__*/React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, /*#__PURE__*/React.createElement("path", { d: "M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512s256-114.6 256-256S397.4 0 256 0zM244.7 395.3l-112-112c-4.6-4.6-5.9-11.5-3.5-17.4s8.3-9.9 14.8-9.9l64 0 0-96c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 96 64 0c6.5 0 12.3 3.9 14.8 9.9s1.1 12.9-3.5 17.4l-112 112c-6.2 6.2-16.4 6.2-22.6 0z", fill: "white" })), /*#__PURE__*/
    React.createElement("i", { class: "fa-solid fa-circle-caret-up" }))))), /*#__PURE__*/




    React.createElement("div", { class: "watch" }, /*#__PURE__*/
    React.createElement("p", { class: "text", id: "timer-label" }, this.state.displayTitle), /*#__PURE__*/
    React.createElement("p", { class: "text", id: "time-left" }, this.state.session)), /*#__PURE__*/
    React.createElement("div", { class: "controlers" }, /*#__PURE__*/
    React.createElement("button", { onClick: () => {this.play();this.sessionPlay();} }, " ", /*#__PURE__*/React.createElement("svg", { class: "newsvg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512" }, /*#__PURE__*/React.createElement("path", { d: "M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z", fill: "white" }))), /*#__PURE__*/

    React.createElement("button", { onClick: this.stop, id: "start_stop" }, /*#__PURE__*/
    React.createElement("svg", { class: "newsvg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 320 512" }, /*#__PURE__*/React.createElement("path", { d: "M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z", fill: "white" }))), /*#__PURE__*/

    React.createElement("button", { onClick: this.reset, id: "reset" }, /*#__PURE__*/
    React.createElement("svg", { class: "newsvg", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512" }, /*#__PURE__*/React.createElement("path", { d: "M0 224c0 17.7 14.3 32 32 32s32-14.3 32-32c0-53 43-96 96-96H320v32c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l64-64c12.5-12.5 12.5-32.8 0-45.3l-64-64c-9.2-9.2-22.9-11.9-34.9-6.9S320 19.1 320 32V64H160C71.6 64 0 135.6 0 224zm512 64c0-17.7-14.3-32-32-32s-32 14.3-32 32c0 53-43 96-96 96H192V352c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9l-64 64c-12.5 12.5-12.5 32.8 0 45.3l64 64c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V448H352c88.4 0 160-71.6 160-160z", fill: "white" }))))));




  }}

var component = document.getElementById("App");
ReactDOM.render( /*#__PURE__*/React.createElement(Mainapp, null), component);