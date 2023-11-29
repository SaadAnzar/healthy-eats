import { Input, XStack, YStack, Button, ButtonText, H2, Checkbox, Label } from 'tamagui';
import { Container, Main } from '../tamagui.config';

import { Link } from 'expo-router';
import { Feather } from '@expo/vector-icons';

export default function RecipeSearch() {
  return (
    <Container>
      <Main>
        <YStack space="$2">
          <XStack alignItems="center" space="$2">
            <Input flex={1} size="$4" placeholder={`Add ingredients...`} />
            <Button padding="$2.5" size="$4" icon={<Feather name="plus" size={20} />}></Button>
          </XStack>
          <XStack alignItems="center" space="$2">
            <Input flex={1} size="$4" placeholder={`Add ingredients...`} />
            <Button padding="$2.5" size="$4" icon={<Feather name="minus" size={20} />}></Button>
          </XStack>
          <YStack>
            <H2>Dish Type</H2>
            <XStack alignItems="center" space="$2">
              <Checkbox id={'hello'}>
                <Checkbox.Indicator>
                  <Feather name="check" size={20} />
                </Checkbox.Indicator>
              </Checkbox>
              <Label size="$6" htmlFor={'hello'}>
                Hello
              </Label>
            </XStack>
          </YStack>
          <YStack>
            <H2>Diet Label</H2>
            <XStack alignItems="center" space="$2">
              <Checkbox id={'hello'}>
                <Checkbox.Indicator>
                  <Feather name="check" size={20} />
                </Checkbox.Indicator>
              </Checkbox>
              <Label size="$6" htmlFor={'hello'}>
                Hello
              </Label>
            </XStack>
          </YStack>
          <YStack>
            <H2>Allergy / Restrictions</H2>
            <XStack alignItems="center" space="$2">
              <Checkbox id={'hello'}>
                <Checkbox.Indicator>
                  <Feather name="check" size={20} />
                </Checkbox.Indicator>
              </Checkbox>
              <Label size="$6" htmlFor={'hello'}>
                Hello
              </Label>
            </XStack>
          </YStack>
          <YStack>
            <H2>Cuisine</H2>
            <XStack alignItems="center" space="$2">
              <Checkbox id={'hello'}>
                <Checkbox.Indicator>
                  <Feather name="check" size={20} />
                </Checkbox.Indicator>
              </Checkbox>
              <Label size="$6" htmlFor={'hello'}>
                Hello
              </Label>
            </XStack>
          </YStack>
        </YStack>
        <Link href="/home" asChild>
          <Button>Home</Button>
        </Link>
      </Main>
    </Container>
  );
}
