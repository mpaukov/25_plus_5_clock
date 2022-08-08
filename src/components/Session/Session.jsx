import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
`;

const Thumb = styled.div`
  margin: 15px auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  margin: 0 15px;
  display: flex;
  justify-content: center;
  align-items: stretch;
  padding: 5px;
  cursor: pointer;
  width: 40px;
  height: 40px;
  font-size: 24px;
  color: inherit;
  background-color: inherit;
  border: 1px solid #000000;
  border-radius: 50%;
`;

const Label = styled.p``;
const SessionLength = styled.p``;

export const Session = ({ length, onChange, timerOn }) => {
  return (
    <Wrapper>
      <Label id="session-label">Session Length</Label>
      <Thumb>
        <Button
          type="button"
          id="session-decrement"
          disabled={timerOn}
          onClick={() => {
            onChange(-1);
          }}
        >
          -
        </Button>
        <SessionLength id="session-length">{length}</SessionLength>
        <Button
          type="button"
          id="session-increment"
          disabled={timerOn}
          onClick={() => {
            onChange(1);
          }}
        >
          +
        </Button>
      </Thumb>
    </Wrapper>
  );
};
