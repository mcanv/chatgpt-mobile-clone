import { Pressable, Text } from 'react-native';

import { ILoginButton } from './LoginButton.types';

import { cn } from '~/utils/classnames';

export default function loginButton({
  text,
  variant,
  buttonClassName,
  icon,
  onPress,
  textClassName,
}: ILoginButton) {
  return (
    <Pressable
      onPress={(event) => {
        if (typeof onPress === 'function') {
          onPress(event);
        }
      }}
      className={cn(
        'h-[3.2rem] w-full flex-row items-center justify-center gap-1.5 rounded-2xl transition-colors',
        {
          'bg-white active:bg-white/80': variant === 'white',
          'bg-login-button-bg active:bg-login-button-bg-hover': variant === 'primary',
          'border-login-button-border border bg-black': variant === 'secondary',
        },
        buttonClassName
      )}>
      {icon !== undefined ? icon : null}
      <Text
        className={cn(
          'text-xl font-medium',
          {
            'text-black': variant === 'white',
            'text-white': variant !== 'white',
          },
          textClassName
        )}>
        {text}
      </Text>
    </Pressable>
  );
}
