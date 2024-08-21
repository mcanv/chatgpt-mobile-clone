import { ImageBackgroundProps, ImageProps } from 'expo-image';
import { cssInterop } from 'nativewind';
import type { ComponentClass, ForwardRefExoticComponent, FunctionComponent } from 'react';
import React from 'react';
import {
  PressableProps,
  ImageBackgroundProps as RNImageBackgroundProps,
  ImageProps as RNImageProps,
  ScrollViewProps,
  TextProps,
  ViewProps,
} from 'react-native';
import { SvgProps } from 'react-native-svg';

export type ReactComponent<P = any> =
  | ComponentClass<P>
  | FunctionComponent<P>
  | ForwardRefExoticComponent<P>;

export const useStyledComponent = (
  component: ReactComponent
): React.ComponentType<
  | ViewProps
  | ImageBackgroundProps
  | TextProps
  | SvgProps
  | RNImageBackgroundProps
  | RNImageProps
  | ImageProps
  | ScrollViewProps
  | PressableProps
> => {
  return cssInterop(component, {
    className: {
      target: 'style',
      nativeStyleToProp: {
        height: true,
        width: true,
      },
    },
  });
};

type StyledComponentProps = {
  component: React.ComponentType<any>;
} & (
  | ViewProps
  | ImageBackgroundProps
  | TextProps
  | SvgProps
  | RNImageBackgroundProps
  | RNImageProps
  | ImageProps
  | ScrollViewProps
  | PressableProps
);

export const StyledComponent: React.FC<StyledComponentProps> = ({
  component: Component,
  ...props
}) => {
  const StyledComp = useStyledComponent(Component);
  return <StyledComp {...props} />;
};
