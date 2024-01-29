import styled from 'styled-components';
import { StyledContainer } from './HomeSty'
import Card from '../Cards/Card';
import PlayList from '../Playlist/PlayList';
import CardData from '../Cards/CardJson'

const Container1 = styled.div`
  flex: 3;
  background-color: #b9e8f2;
  padding: 1rem;
  margin: 5px;
  height: 600px;
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
`;

const Container2 = styled.div`
  flex: 1;
  background-color: #b9e8f2;
  padding: 1rem;
  margin: 5px;
  height: 600px;
  border-radius: 5px;
`;

function Home() {
  const {song} = CardData
  return (
    <StyledContainer>
      <Container1>
        <Card song={song}/>
      </Container1>
      <Container2>
        <PlayList song={song}/>
      </Container2>
    </StyledContainer>
  )
}

export default Home