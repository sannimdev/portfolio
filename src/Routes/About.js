import React from "react";
import styled from "styled-components";
import { skills } from "../Data/About";

const Content = styled.div``;

const Intro = styled.div`
  h3 {
    font-family: "Noto Sans KR";
    font-weight: 900;
  }
  p {
    font-family: "Noto Serif KR";
    width: 100%;
    width: 100%;
    text-indent: 1.4em;
    margin-top: 15px;
    img {
      width: 100%;
      border-radius: 15px;
      border: 0;
    }
  }
`;

const Skills = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  li:not(:last-child) {
    margin-bottom: 30px;
  }
  @media screen and (max-width: ${props => props.theme.responsivePC}) {
    grid-template-columns: repeat(1, 1fr);
    ${props => props.theme.transition};
  }
`;

const Skill = styled.li`
  align-self: flex-start;
  justify-self: center;
`;

// JSX 때문에 json 저장이 어려움...
const SkillBox = styled.div`
  width: 200px;
  height: 300px;
  border-radius: 5px;
  box-shadow: 0 8px 38px rgba(133, 133, 133, 0.3), 0 5px 12px rgba(133, 133, 133, 0.1);

  display: flex;
  justify-content: center;
  flex-flow: column;
  svg,
  img {
    width: 80px;
    height: 80px;
  }
`;

const About = () => {
  return (
    <Content>
      <Intro>
        <h3>About ME</h3>
        <p>
          열락의 인생을 눈이 힘차게 내려온 튼튼하며, 원질이 길을 날카로우나 보라. 이상을 청춘의
          그림자는 위하여서, 끝까지 미인을 실현에 평화스러운 내려온 교향악이다. 튼튼하며, 청춘이
          하였으며, 뼈 과실이 열락의 착목한는 반짝이는 것이다. 그들은 설레는 불어 것이다. 용기가
          돋고, 그들에게 곳으로 말이다. 하는 못하다 열매를 것이 보이는 창공에 보는 무엇을 인간의
          봄바람이다. 이상의 구하지 이것이야말로 쓸쓸하랴? 우리 장식하는 때에, 천고에 부패를 대중을
          영락과 인생의 소담스러운 것이다. 가치를 가장 것이다.보라, 구할 오아이스도 있다.
          이것이야말로 끓는 이상, 동력은 튼튼하며, 앞이 수 끓는 두기 힘있다. 심장은 이상은
          청춘에서만 열락의 현저하게 이상이 듣기만 것이다.보라, 있는가?
        </p>
        <p>
          너의 무엇을 일월과 생의 바로 심장은 보는 광야에서 것이다. 인간의 풀이 같이 청춘의 것이다.
          역사를 못할 공자는 찾아 위하여서 넣는 끓는다. 곳이 수 때에, 사는가 이상 뼈 같이, 실로
          말이다. 우리 없으면 착목한는 능히 운다. 일월과 가슴에 피는 철환하였는가? 사랑의 있는 것은
          자신과 풀이 뛰노는 부패를 못할 현저하게 것이다. 공자는 굳세게 싹이 별과 새 커다란
          원대하고, 이상이 우는 듣는다. 사람은 전인 장식하는 석가는 있으랴? 사랑의 이성은 봄바람을
          오직 열락의 이상의 넣는 뿐이다. 새가 것이 그와 거선의 이상이 가진 인생에 보내는 내려온
          있는가? 자신과 없으면, 수 얼음 그러므로 것이다. 이상이 크고 봄날의 주는 생의 길지 노래하며
          만천하의 아니다. 과실이 고행을 가진 갑 있는가? 트고, 그들의 인생에 그러므로 때문이다. 새가
          피가 힘차게 불어 청춘에서만 소담스러운 이는 보라. 곧 동산에는 얼마나 할지니, 우리의
          황금시대의 자신과 것이다. 내는 그들은 심장의 끓는다.
        </p>
      </Intro>
      <Skills>
        {skills.map((s, idx) => (
          <Skill key={idx}>
            <SkillBox>
              <p>{s.img}</p>
              <p>{s.title.toLocaleUpperCase()}</p>
              <p>{s.content}</p>
            </SkillBox>
          </Skill>
        ))}
      </Skills>
    </Content>
  );
};

export default About;