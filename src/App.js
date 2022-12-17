import { useState } from "react";
import styled from "styled-components";
function App() {
  const men = [
    { name: "준호" },
    { name: "재영" },
    { name: "우주" },
    { name: "서현" },
    { name: "은지" },
    { name: "일교" },
    { name: "가온" },
    { name: "지흠" },
    { name: "태화" },
    { name: "승렬" },
    { name: "길학" },
    { name: "유동" },
  ];
  const [personWork, setPersonWork] = useState([]);
  const [realMen, setRealMen] = useState([]);
  console.log("realMen", realMen);
  return (
    <Container>
      <PersonWorkList>
        {men.map((i) => {
          return (
            <Item>
              <input
                type="checkbox"
                onChange={(e) => {
                  if (e.currentTarget.checked) {
                    setPersonWork((personWork) => [...personWork, i.name]);
                  }
                  if (e.currentTarget.checked === false) {
                    setPersonWork(personWork.filter((v) => v !== i.name));
                  }
                }}
              />
              <ListItem>{i.name}님</ListItem>
            </Item>
          );
        })}
      </PersonWorkList>
      <PersonWorkListItem>
        {personWork.map((i) => {
          return <PersonWorkItem>{i}님</PersonWorkItem>;
        })}
      </PersonWorkListItem>
      <Btn
        onClick={() => {
          let one = Math.floor(Math.random() * personWork.length);
          let two = Math.floor(Math.random() * personWork.length);
          if (one === two) {
            alert("혼자하기 당첨");

            return setRealMen([personWork[one]]);
          }

          setRealMen([personWork[one], personWork[two]]);
        }}
      >
        주번 고르기!~
      </Btn>
      <div>
        {realMen.map((i) => (
          <Result>{i}님</Result>
        ))}
      </div>
    </Container>
  );
}
const Result = styled.div`
  font-size: 100px;
`;
const PersonWorkListItem = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 14px;
`;
const PersonWorkItem = styled.div`
  color: green;
  font-size: large;
`;
const Item = styled.label`
  display: flex;
  gap: 5px;
`;
const PersonWorkList = styled.div`
  box-sizing: border-box;
  padding: 40px;
  display: flex;
  gap: 15px;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(99, 99, 99, 0.25);
  border-radius: 10px;
  margin-bottom: 15px;
`;
const Btn = styled.button`
  width: 100px;
  color: blue;
  margin-bottom: 14px;
  background: #ffffff;
  border: 1px solid #4176ff;
  border-radius: 70px;
  :hover {
    cursor: pointer;
  }
`;
const ListItem = styled.div`
  font-family: ‘Pretendard Variable’;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 15px;
  color: #222222;
`;
const Container = styled.div`
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
  background-color: #f2f2f2;
`;
export default App;
