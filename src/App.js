import React, { Component } from "react";
import PropTypes from "prop-types";
import SpeechRecognition from "react-speech-recognition";
import recognition from "react-speech-recognition";

const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.transcript
    };

    recognition.lang = "id-ID";
  }
  render() {
    const {
      transcript,
      resetTranscript,
      browserSupportsSpeechRecognition
    } = this.props;

    if (!browserSupportsSpeechRecognition) {
      return null;
    }

    return (
      <div className="App">
        <button onClick={resetTranscript}>Reset</button>
        <span>{transcript}</span>
        {console.log(this.state.data)}
        {/* {console.log(transcript)}  */}
      </div>
    );
  }
}

App.propTypes = propTypes;

export default SpeechRecognition(App);
