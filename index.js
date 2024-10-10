import Image from "next/image";
import localFont from "next/font/local";
import styled from "styled-components";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// 전체 레이아웃 스타일 정의
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-color: #f0f0f0;
`;

// 헤더 스타일 정의
const Header = styled.div`
  width: 100%;
  background-color: #1a1a1a;
  color: white;
  padding: 20px;
  text-align: center;
`;

// 카드뉴스 제목 스타일 정의
const Title = styled.h1`
  font-size: 2.5rem;
  margin: 20px 0;
  color: #333;
`;

// 카드 레이아웃 스타일 정의
const CardNewsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
`;

// 카드 스타일 정의
const Card = styled.div`
  background: white;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 10px;
  width: calc(33% - 20px); /* 3개의 카드가 한 줄에 배치되도록 설정 */
  transition: transform 0.2s;g

  &:hover {
    transform: scale(1.05);
  }
`;

// 카드 제목 스타일 정의
const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin: 10px;
`;

// 카드 내용 스타일 정의
const CardContent = styled.p`
  margin: 10px;
`;

// 카드 날짜 스타일 정의
const CardDate = styled.p`
  font-size: 0.9rem;
  color: #888;
  margin: 10px;
`;

// 사이드바 스타일 정의
const Sidebar = styled.div`
  background-color: #1a1a1a;
  color: white;
  padding: 20px;
  width: 300px;
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
`;

export default function Home() {
  return (
    <Container>
      <Header>
        <h1>Cutting-Edge Solutions for Modern Enterprises</h1>
      </Header>
      <Title>Latest News!!!</Title>
      <CardNewsContainer>
        <Card>
          <CardDate>25.01.24</CardDate>
          <CardTitle>전문가의 가이드@@@@@</CardTitle>
          <CardContent>hihihi비즈니스 요구에 맞춘 맞춤형 솔루션을 제공합니다.</CardContent>
        </Card>
        <Card>
          <CardDate>25.01.24</CardDate>
          <CardTitle>수익 보호 전략</CardTitle>
          <CardContent>수익을 보호하기 위한 전략을 소개합니다.</CardContent>
        </Card>
        <Card>
          <CardDate>25.01.24</CardDate>
          <CardTitle>유연성과 비용 효율성</CardTitle>
          <CardContent>비용 효율성을 높이는 방법을 제안합니다.</CardContent>
        </Card>
      </CardNewsContainer>
      <Sidebar>
        <h2>Voices of Our Satisfied Clients</h2>
        <p>Zeal Consulting transformed our approach to market strategy...</p>
      </Sidebar>
    </Container>
  );
}
