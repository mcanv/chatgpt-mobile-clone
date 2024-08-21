import '../global.css';

import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [loaded, error] = useFonts({
    'SFProRounded-Black': require('../assets/fonts/SFProRounded/SF-Pro-Rounded-Black.otf'),
    'SFProRounded-Bold': require('../assets/fonts/SFProRounded/SF-Pro-Rounded-Bold.otf'),
    'SFProRounded-Heavy': require('../assets/fonts/SFProRounded/SF-Pro-Rounded-Heavy.otf'),
    'SFProRounded-Light': require('../assets/fonts/SFProRounded/SF-Pro-Rounded-Light.otf'),
    'SFProRounded-Medium': require('../assets/fonts/SFProRounded/SF-Pro-Rounded-Medium.otf'),
    'SFProRounded-Regular': require('../assets/fonts/SFProRounded/SF-Pro-Rounded-Regular.otf'),
    'SFProRounded-Semibold': require('../assets/fonts/SFProRounded/SF-Pro-Rounded-Semibold.otf'),
    'SFProRounded-Thin': require('../assets/fonts/SFProRounded/SF-Pro-Rounded-Thin.otf'),
    'SFProRounded-Ultralight': require('../assets/fonts/SFProRounded/SF-Pro-Rounded-Ultralight.otf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}
