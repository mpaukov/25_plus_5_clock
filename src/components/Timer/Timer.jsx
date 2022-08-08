import styled from "styled-components";

const Label = styled.p``;
const Length = styled.p``;

const Button = styled.button`
  display: block;
  margin: 0 15px;
  display: flex;
  justify-content: center;
  align-items: stretch;
  padding: 5px;
  cursor: pointer;

  height: 40px;
  font-size: 24px;
  color: inherit;
  background-color: inherit;
  border: 1px solid #000000;
  border-radius: 5px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`;

export const Timer = ({ timer, onChange }) => {
  return (
    <>
      <Label id="timer-label">{onChange.sessionOn ? "Session" : "Break"}</Label>
      <Length id="time-left">{timer}</Length>
      <Wrapper>
        <Button type="button" id="start_stop" onClick={onChange.start_stop}>
          Start/Stop
        </Button>
        <Button type="button" id="reset" onClick={onChange.reset}>
          Reset
        </Button>
      </Wrapper>
    </>
  );
};
