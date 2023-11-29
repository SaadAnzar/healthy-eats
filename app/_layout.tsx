import { useFonts } from 'expo-font';
import { SplashScreen, Stack, useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { TamaguiProvider, Theme } from 'tamagui';

import config from '../tamagui.config';

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const router = useRouter();

  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  return (
    <TamaguiProvider config={config}>
      <Theme name="light">
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="home" options={{ headerShown: false }} />
          <Stack.Screen name="label-scan" options={{ title: 'Label Scan' }} />
          <Stack.Screen name="recipe-search" options={{ title: 'Recipe Search' }} />
          <Stack.Screen name="nutrition-analysis" options={{ title: 'Nutrition Analysis' }} />
        </Stack>
      </Theme>
    </TamaguiProvider>
  );
}
