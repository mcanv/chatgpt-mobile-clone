import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath, Rect, SvgProps } from 'react-native-svg';

const GoogleIconSVG = (props: SvgProps) => (
  <Svg
    width={props.width || 17}
    height={props.height || 16}
    viewBox="0 0 17 16"
    fill="none"
    className={props.className}
    {...props}>
    <G clipPath="url(#clip0_1_174)">
      <Path
        d="M16.3093 8.14968C16.3093 7.49417 16.2561 7.01582 16.141 6.51976H8.6557V9.47842H13.0494C12.9609 10.2137 12.4825 11.321 11.4195 12.065L11.4046 12.1641L13.7713 13.9976L13.9353 14.0139C15.4412 12.6231 16.3093 10.5769 16.3093 8.14968Z"
        fill="#4285F4"
      />
      <Path
        d="M8.65571 15.945C10.8083 15.945 12.6153 15.2363 13.9353 14.0139L11.4195 12.065C10.7463 12.5345 9.8427 12.8623 8.65571 12.8623C6.54743 12.8623 4.75806 11.4716 4.1202 9.54932L4.0267 9.55726L1.56575 11.4618L1.53357 11.5513C2.84459 14.1556 5.53754 15.945 8.65571 15.945Z"
        fill="#34A853"
      />
      <Path
        d="M4.12023 9.54932C3.95193 9.05326 3.85453 8.52171 3.85453 7.97252C3.85453 7.42327 3.95193 6.89179 4.11138 6.39573L4.10692 6.29008L1.61514 4.35493L1.53361 4.39371C0.993273 5.47445 0.683228 6.68806 0.683228 7.97252C0.683228 9.25698 0.993273 10.4705 1.53361 11.5513L4.12023 9.54932Z"
        fill="#FBBC05"
      />
      <Path
        d="M8.65571 3.08269C10.1527 3.08269 11.1626 3.72934 11.7384 4.26974L13.9884 2.07285C12.6065 0.788397 10.8083 0 8.65571 0C5.53754 0 2.84459 1.78937 1.53357 4.39371L4.11134 6.39572C4.75806 4.47347 6.54743 3.08269 8.65571 3.08269Z"
        fill="#EB4335"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_1_174">
        <Rect width={16} height={16} fill="white" transform="translate(0.5)" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default React.memo(GoogleIconSVG);
