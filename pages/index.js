import Head from "next/head";
import TodoList from "components/TodoList";
import styled from "styled-components";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>React Recoil Eg - Todo list</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Banner>
          <Image
            src="https://res.cloudinary.com/dem2xvk2e/image/upload/v1646121325/upwork/jswkbs56nij31_w7yoqu.jpg"
            alt="banner"
            layout="fill"
            objectFit="cover"
          />
        </Banner>
        <Container>
          <TodoList />
        </Container>
      </Main>
    </div>
  );
}

const Main = styled.main``;

const Banner = styled.section`
  position: relative;
  height: 280px;
`;
const Container = styled.section`
  width: 400px;
  max-width: 90%;
  margin: auto;
  background-color: #fff;
  padding: 1.2em;
  box-shadow: 0 0 6px #00000040;
  transform: translateY(-70px);
  border-radius: 8px;
`;
