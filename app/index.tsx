import { YStack } from 'tamagui';
import { Container, Main, Title, Subtitle, Button, ButtonText } from '../tamagui.config';

import { Link } from 'expo-router';

export default function Index() {
  return (
    <Container marginVertical="$5">
      <Main>
        <Main style={{ justifyContent: 'center' }}>
          <YStack>
            <Title>Healthy Eats</Title>
            <Subtitle>Best app for healthy meals.</Subtitle>
          </YStack>
        </Main>
        <Link href="/home" asChild>
          <Button>
            <ButtonText>Get Started</ButtonText>
          </Button>
        </Link>
      </Main>
    </Container>
  );
}
