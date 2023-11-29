import { YStack } from 'tamagui';
import { Container, Main, Title, Subtitle, Button, ButtonText } from '../tamagui.config';

import { Link } from 'expo-router';

export default function NutritionAnalysis() {
  return (
    <Container>
      <Main>
        <YStack style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
          <Title>Nutrition Analysis</Title>
          <Subtitle>This is the first page of your app.</Subtitle>
        </YStack>
        <Link href="/home" asChild>
          <Button>
            <ButtonText>Get Started</ButtonText>
          </Button>
        </Link>
      </Main>
    </Container>
  );
}
