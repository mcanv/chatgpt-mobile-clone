import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef, useState } from 'react';
import { Text, View } from 'react-native';

import { LoginButton } from '~/components';
import { AppleIcon, EmailIcon, GoogleIcon } from '~/icons';
import { cn } from '~/utils/classnames';
import { StyledComponent } from '~/utils/helpers';

export const onboardingData = [
  {
    message: 'ChatGPT Clone with Gemini AI',
    backgroundClassName: 'bg-login-green',
    textClassName: 'text-login-text-yellow',
    dotClassName: 'bg-login-text-yellow',
  },
  {
    message: "Let's code together",
    backgroundClassName: 'bg-login-yellow',
    textClassName: 'text-login-blue',
    dotClassName: 'bg-login-blue',
  },
  {
    message: "Let's do something creative",
    backgroundClassName: 'bg-login-pink',
    textClassName: 'text-black',
    dotClassName: 'bg-black',
  },
  {
    message: "Let's brainstorm",
    backgroundClassName: 'bg-login-blue',
    textClassName: 'text-white',
    dotClassName: 'bg-white',
  },
  {
    message: "Let's explore",
    backgroundClassName: 'bg-login-purple',
    textClassName: 'text-login-light-green',
    dotClassName: 'bg-login-light-green',
  },
  {
    message: "Let's get started",
    backgroundClassName: 'bg-login-dark-blue',
    textClassName: 'text-login-light-yellow',
    dotClassName: 'bg-login-light-yellow',
  },
];

export default function OnboardingScreen() {
  const [message, setMessage] = useState('');
  const [backgroundClassName, setBackgroundClassName] = useState('');
  const [textClassName, setTextClassName] = useState('');
  const [dotClassName, setDotClassName] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const isDeleting = useRef(false);
  const timeoutId = useRef<NodeJS.Timeout | null>(null);

  const updateMessageAndColors = (index: number) => {
    const { backgroundClassName, textClassName, dotClassName } = onboardingData[index];
    setMessage('');
    setBackgroundClassName(backgroundClassName);
    setTextClassName(textClassName);
    setDotClassName(dotClassName);
  };

  const animateText = () => {
    const fullMessage = onboardingData[currentIndex].message;

    if (!isDeleting.current && message.length < fullMessage.length) {
      setMessage(fullMessage.slice(0, message.length + 1));
    } else if (isDeleting.current && message.length > 0) {
      setMessage(message.slice(0, -1));
    } else if (message.length === fullMessage.length && !isDeleting.current) {
      timeoutId.current = setTimeout(() => {
        isDeleting.current = true;
      }, 1000);
    } else if (message.length === 0 && isDeleting.current) {
      let nextIndex;
      do {
        nextIndex = Math.floor(Math.random() * onboardingData.length);
      } while (nextIndex === currentIndex);

      setCurrentIndex(nextIndex);
      updateMessageAndColors(nextIndex);
      isDeleting.current = false;
    }
  };

  useEffect(() => {
    const intervalId = setInterval(animateText, 40);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId.current!);
    };
  }, [message]);

  useEffect(() => {
    updateMessageAndColors(currentIndex);
  }, []);

  return (
    <>
      <StatusBar style="auto" translucent animated />
      <View className={cn('flex-1 items-center justify-center duration-150', backgroundClassName)}>
        <View className="mb-80 flex-1 flex-row items-center justify-center px-10">
          <Text className={cn('text-center text-4xl font-bold duration-150', textClassName)}>
            {message}{' '}
            <View
              className={cn('h-8 w-8 rounded-full transition-colors duration-150', dotClassName)}
            />
          </Text>
        </View>
        <View className="absolute bottom-0 h-80 w-full gap-3 rounded-t-[38px] bg-black px-6 py-6 pb-10">
          <LoginButton
            variant="white"
            text="Continue with Apple"
            icon={<StyledComponent component={AppleIcon} className="h-5 w-5 text-black" />}
          />
          <LoginButton
            variant="primary"
            text="Continue with Google"
            icon={<StyledComponent component={GoogleIcon} className="h-5 w-5" />}
          />
          <LoginButton
            variant="primary"
            text="Sign up with email"
            icon={<StyledComponent component={EmailIcon} className="h-5 w-5" />}
          />
          <LoginButton variant="secondary" text="Log in" />
        </View>
      </View>
    </>
  );
}
