import { Link } from 'expo-router';
import {
  Button,
  Card,
  CardHeader,
  CardFooter,
  CardBackground,
  H2,
  Image,
  Paragraph,
  XStack,
  ButtonText,
} from 'tamagui';

type CardComponentProps = {
  title: string;
  subtitle: string;
  linkTo: any;
  buttonText: string;
};
export default function CardComponent({ title, subtitle, linkTo, buttonText }: CardComponentProps) {
  return (
    <Card
      elevate
      size="$4"
      bordered
      animation="bouncy"
      height="$12"
      scale={0.9}
      hoverStyle={{ scale: 0.925 }}
      pressStyle={{ scale: 0.875 }}>
      <CardHeader padded>
        <H2>{title}</H2>
        <Paragraph theme="alt1">{subtitle}</Paragraph>
      </CardHeader>
      <CardFooter padded>
        <XStack flex={1} />
        <Link href={linkTo} asChild>
          <Button borderRadius="$10" theme="alt2">
            <ButtonText color="$green12Light">{buttonText}</ButtonText>
          </Button>
        </Link>
      </CardFooter>
      <CardBackground>
        <Image
          resizeMode="contain"
          alignSelf="center"
          source={{
            width: 350,
            height: 300,
            uri: require('../assets/adaptive-icon.png'),
          }}
        />
      </CardBackground>
    </Card>
  );
}
