import { YStack } from 'tamagui';
import { Container, Main } from '../tamagui.config';

import CardComponent from '../components/CardComponent';

export default function Home() {
  return (
    <Container>
      <Main>
        <YStack space style={{ flex: 1, alignContent: 'center', justifyContent: 'center' }}>
          <CardComponent
            title="Label Scan"
            subtitle="Label the scan and get info!"
            linkTo="/label-scan"
            buttonText="Let's scan"
          />
          <CardComponent
            title="Recipe Search"
            subtitle="Search the recipe and get info!"
            linkTo="/recipe-search"
            buttonText="Let's scan"
          />
          <CardComponent
            title="Nutrition Analysis"
            subtitle="Analyze the nutrition and get info!"
            linkTo="/nutrition-analysis"
            buttonText="Let's scan"
          />
        </YStack>
      </Main>
    </Container>
  );
}
