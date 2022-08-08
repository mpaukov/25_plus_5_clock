import { useState, useEffect, createRef } from "react";
import styled from "styled-components";
import { Break } from "./components/Break/Break";
import { Session } from "./components/Session/Session";
import { Timer } from "./components/Timer/Timer";
import { converter } from "./utils/converter";

const Wrapper = styled.div`
  margin: 40px auto;
  width: 640px;
  color: #ffffff;

  p {
    margin: 0;
    font-size: 36px;
    text-align: center;
  }
`;

const Thumb = styled.div`
  margin: 30px auto;
  display: flex;
`;

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timeLeft, setTimeLeft] = useState(1500);
  const [timerOn, setTimerOn] = useState(false);
  const [sessionOn, setSessionOn] = useState(true);

  const timeIdx = createRef();

  const reset = () => {
    document.getElementById("beep").pause();
    document.getElementById("beep").currentTime = 0;
    clearTimeout(timeIdx.current);
    setBreakLength(5);
    setSessionLength(25);
    setTimerOn(false);
    setSessionOn(true);
    setTimeLeft(1500);
  };

  useEffect(() => {
    if (sessionOn) {
      setTimeLeft(sessionLength * 60);
    } else {
      setTimeLeft(breakLength * 60);
    }
  }, [breakLength, sessionLength, sessionOn]);

  useEffect(() => {
    if (timerOn) {
      timeIdx.current = setTimeout(() => {
        setTimeLeft((state) => {
          return state - 1;
        });
      }, 1000);
    }
    return () => {
      clearTimeout(timeIdx.current);
    };
  }, [timeIdx, timerOn]);

  useEffect(() => {
    if (timeLeft <= 0) {
      document
        .getElementById("beep")
        .play()
        .catch((error) => {});
      clearTimeout(timeIdx.current);
    }
  }, [timeIdx, timeLeft]);

  useEffect(() => {
    if (timeLeft <= 0) {
      setSessionOn((state) => !state);
    }
  }, [timeLeft]);

  const start_stop = () => {
    clearTimeout(timeIdx.current);
    setTimerOn((state) => !state);
  };

  const breakChange = (e) => {
    setBreakLength((value) => {
      if (value > 1 && value < 60) {
        return value + e;
      }
      if (value === 1 && e > 0) {
        return value + e;
      }
      if (value === 60 && e < 0) {
        return value + e;
      }
      return value;
    });
  };
  const sessionChange = (e) => {
    setSessionLength((value) => {
      if (value > 1 && value < 60) {
        return value + e;
      }
      if (value === 1 && e > 0) {
        return value + e;
      }
      if (value === 60 && e < 0) {
        return value + e;
      }
      return value;
    });
  };

  const time = converter(timeLeft);
  const timerText = `${String(time.minutes).padStart(2, "0")}:${String(
    time.seconds
  ).padStart(2, "0")}`;

  return (
    <Wrapper>
      <p>25 + 5 Clock</p>
      <Thumb>
        <Break length={breakLength} onChange={breakChange} timerOn={timerOn} />
        <Session
          length={sessionLength}
          onChange={sessionChange}
          timerOn={timerOn}
        />
      </Thumb>
      <Timer timer={timerText} onChange={{ reset, start_stop, sessionOn }} />
      <audio
        id="beep"
        src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
      />
    </Wrapper>
  );
}

export default App;
