import { GestureResponderEvent } from 'react-native';

export interface ILoginButton {
  variant: 'white' | 'primary' | 'secondary';
  icon?: React.ReactNode;
  text: string;
  onPress?: null | ((event: GestureResponderEvent) => void) | undefined;
  buttonClassName?: string;
  textClassName?: string;
}
