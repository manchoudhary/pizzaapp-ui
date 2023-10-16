import React from 'react';
import {Circle, G, Path, Rect} from 'react-native-svg';

export default {
  LocationPinIcon: {
    svg: (
      <G clip-path="url(#clip0_436_27)">
        <Path
          d="M10.0716 -0.00683594C5.97187 -0.00683594 2.5 3.48473 2.5 7.62098C2.5 11.9522 6.52406 16.3816 9.23094 19.4947C9.24125 19.5072 9.67877 19.9932 10.2178 19.9932H10.2656C10.8047 19.9932 11.2391 19.5072 11.25 19.4947C13.7903 16.5744 17.5 11.7594 17.5 7.62098C17.5 3.48473 14.7919 -0.00683594 10.0716 -0.00683594ZM10.3222 18.6563C10.3003 18.6782 10.2684 18.7026 10.2403 18.7229C10.2115 18.7032 10.1803 18.6782 10.1572 18.6563L9.83029 18.2804C7.26406 15.3363 3.75 11.3047 3.75 7.62098C3.75 4.16379 6.645 1.24285 10.0716 1.24285C14.3397 1.24285 16.25 4.44598 16.25 7.62098C16.25 10.4175 14.2553 14.1307 10.3222 18.6563ZM10.0219 3.77785C7.95092 3.77785 6.27186 5.45691 6.27186 7.52785C6.27186 9.59879 7.95092 11.2779 10.0219 11.2779C12.0928 11.2779 13.7719 9.59879 13.7719 7.52785C13.7719 5.45691 12.0928 3.77785 10.0219 3.77785ZM10.0219 10.0279C8.64342 10.0279 7.49309 8.8791 7.49309 7.50035C7.49309 6.12191 8.61465 5.00035 9.99309 5.00035C11.3725 5.00035 12.4931 6.12191 12.4931 7.50035C12.4937 8.8791 11.4012 10.0279 10.0219 10.0279Z"
          fill="#1E5E77"
        />
      </G>
    ),
    viewBox: '0 0 20 20',
  },
  DownSelectorIcon: {
    svg: (
      <G fill="none">
        <Path
          d="M5.83337 8.33301L10 12.4997L14.1667 8.33301"
          stroke={'black'}
          strokeWidth={1.5}
          strokeLinecap={'round'}
          strokeLinejoin={'round'}
        />
      </G>
    ),
    viewBox: '0 0 20 20',
  },
  SearchIcon: {
    svg: (
      <G fill="none">
        <Path
          d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
          strokeWidth={'2'}
          strokeLinecap={'round'}
          strokeLinejoin={'round'}
        />
        <Path
          d="M18.9999 19.0004L14.6499 14.6504"
          strokeWidth={'2'}
          strokeLinecap={'round'}
          strokeLinejoin={'round'}
        />
      </G>
    ),
    viewBox: '0 0 20 20',
  },
  UserIcon: {
    svg: (
      <G fill="none">
        <Circle cx="12" cy="12" r="11.1" stroke="#1E5E77" strokeWidth="1.8" />
        <Path
          d="M17.3333 18V16.6667C17.3333 15.9594 17.0523 15.2811 16.5522 14.781C16.0521 14.281 15.3739 14 14.6666 14H9.33329C8.62605 14 7.94777 14.281 7.44767 14.781C6.94758 15.2811 6.66663 15.9594 6.66663 16.6667V18"
          stroke={'#1E5E77'}
          strokeWidth={'1.8'}
          strokeLinecap={'round'}
          strokeLinejoin={'round'}
        />
        <Path
          d="M12 11.3333C13.4728 11.3333 14.6667 10.1394 14.6667 8.66667C14.6667 7.19391 13.4728 6 12 6C10.5273 6 9.33337 7.19391 9.33337 8.66667C9.33337 10.1394 10.5273 11.3333 12 11.3333Z"
          stroke={'#1E5E77'}
          strokeWidth={'1.8'}
          strokeLinecap={'round'}
          strokeLinejoin={'round'}
        />
      </G>
    ),
    viewBox: '0 0 24 24',
  },
  NonVegIcon: {
    svg: (
      <G fill="none">
        <Rect width="14" height="14" fill="white" />
        <Path d="M12.6 1.4V12.6H1.4V1.4H12.6ZM14 0H0V14H14V0Z" fill="#FF0000" />
        <Path d="M7 3L11.3301 10.5H2.66987L7 3Z" fill="#FF0000" />
      </G>
    ),
    viewBox: '0 0 14 14',
  },
  VegIcon: {
    svg: (
      <G fill="none">
        <Rect width="14" height="14" fill="white" />
        <Path
          d="M12.6 1.4V12.6H1.4V1.4H12.6ZM14 0H0V14H14V0ZM7 2.8C4.683 2.8 2.8 4.683 2.8 7C2.8 9.317 4.683 11.2 7 11.2C9.317 11.2 11.2 9.317 11.2 7C11.2 4.683 9.317 2.8 7 2.8Z"
          fill="#04CD00"
        />
      </G>
    ),
    viewBox: '0 0 14 14',
  },
  RupeeIcon: {
    svg: (
      <G fill="none">
        <Path
          d="M10.4286 1H1H3.57143C4.48074 1 5.35281 1.36122 5.99579 2.00421C6.63878 2.64719 7 3.51926 7 4.42857C7 5.33789 6.63878 6.20996 5.99579 6.85294C5.35281 7.49592 4.48074 7.85714 3.57143 7.85714H1L6.14286 13M1 4.42857H10.4286"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    ),
    viewBox: '0 0 12 14',
  },
  BackIcon: {
    svg: (
      <G fill="#000000">
        <Path d="M222.927 580.115l301.354 328.512c24.354 28.708 20.825 71.724-7.883 96.078s-71.724 20.825-96.078-7.883L19.576 559.963a67.846 67.846 0 01-13.784-20.022 68.03 68.03 0 01-5.977-29.488l.001-.063a68.343 68.343 0 017.265-29.134 68.28 68.28 0 011.384-2.6 67.59 67.59 0 0110.102-13.687L429.966 21.113c25.592-27.611 68.721-29.247 96.331-3.656s29.247 68.721 3.656 96.331L224.088 443.784h730.46c37.647 0 68.166 30.519 68.166 68.166s-30.519 68.166-68.166 68.166H222.927z"></Path>
      </G>
    ),
    viewBox: '0 0 1024 1024',
  },
  CloseCircle: {
    svg: (
      <G>
        <Path
          d="M16.0013 23.4087C21.9844 23.4087 26.8346 18.645 26.8346 12.7688C26.8346 6.89254 21.9844 2.12891 16.0013 2.12891C10.0182 2.12891 5.16797 6.89254 5.16797 12.7688C5.16797 18.645 10.0182 23.4087 16.0013 23.4087Z"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M19.25 9.57422L12.75 15.9581"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M12.75 9.57422L19.25 15.9581"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    ),
    viewBox: '0 0 32 33',
  },
  UserIconCircle: {
    svg: (
      <G>
        <Circle
          cx="22.5"
          cy="22.5"
          r="21.75"
          fill="#DDEDF3"
          stroke="#3E3E3E"
          stroke-width="1.5"
        />
        <Path
          d="M30.25 31.5V29.5C30.25 28.4391 29.8286 27.4217 29.0784 26.6716C28.3283 25.9214 27.3109 25.5 26.25 25.5H18.25C17.1891 25.5 16.1717 25.9214 15.4216 26.6716C14.6714 27.4217 14.25 28.4391 14.25 29.5V31.5"
          stroke="#3E3E3E"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M22.25 21.5C24.4591 21.5 26.25 19.7091 26.25 17.5C26.25 15.2909 24.4591 13.5 22.25 13.5C20.0409 13.5 18.25 15.2909 18.25 17.5C18.25 19.7091 20.0409 21.5 22.25 21.5Z"
          stroke="#3E3E3E"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    ),
    viewBox: '0 0 45 45',
  },
  TickIcon: {
    svg: (
      <G>
        <Path
          d="M4.89163 13.2687L9.16582 17.5427L18.7085 8"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    ),
    viewBox: '0 0 24 24',
  },
  MinusIcon: {
    svg: (
      <G>
        <Path
          d="M15.1429 1.71429H4.85714C4.62981 1.71429 4.4118 1.62398 4.25105 1.46323C4.09031 1.30249 4 1.08447 4 0.857143C4 0.629814 4.09031 0.411797 4.25105 0.251051C4.4118 0.090306 4.62981 0 4.85714 0H15.1429C15.3702 0 15.5882 0.090306 15.7489 0.251051C15.9097 0.411797 16 0.629814 16 0.857143C16 1.08447 15.9097 1.30249 15.7489 1.46323C15.5882 1.62398 15.3702 1.71429 15.1429 1.71429Z"
          fill="black"
        />
        <Path
          d="M15.1429 1.21429H4.85714C4.76242 1.21429 4.67158 1.17666 4.6046 1.10968C4.53763 1.0427 4.5 0.951863 4.5 0.857143C4.5 0.762423 4.53763 0.671582 4.6046 0.604605C4.67158 0.537627 4.76242 0.5 4.85714 0.5H15.1429C15.2376 0.5 15.3284 0.537628 15.3954 0.604605C15.4624 0.671582 15.5 0.762422 15.5 0.857143C15.5 0.951864 15.4624 1.0427 15.3954 1.10968C15.3284 1.17666 15.2376 1.21429 15.1429 1.21429Z"
          stroke="black"
        />
      </G>
    ),
    viewBox: '0 0 20 10',
  },
  PlusIcon: {
    svg: (
      <G>
        <Path d="M11.1429 6.85714H6.85714V11.1429C6.85714 11.6143 6.47143 12 6 12C5.52857 12 5.14286 11.6143 5.14286 11.1429V6.85714H0.857143C0.385714 6.85714 0 6.47143 0 6C0 5.52857 0.385714 5.14286 0.857143 5.14286H5.14286V0.857143C5.14286 0.385714 5.52857 0 6 0C6.47143 0 6.85714 0.385714 6.85714 0.857143V5.14286H11.1429C11.6143 5.14286 12 5.52857 12 6C12 6.47143 11.6143 6.85714 11.1429 6.85714Z" />
      </G>
    ),
    viewBox: '0 0 12 12',
  },
  HomeIcon: {
    svg: (
      <G>
        <Path
          d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M9 22V12H15V22"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    ),
    viewBox: '0 0 24 24',
  },
  MenuIcon: {
    svg: (
      <G>
        <Path
          d="M17 10H3"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M21 6H3"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M21 14H3"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M17 18H3"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    ),
    viewBox: '0 0 24 24',
  },
  CartIcon: {
    svg: (
      <G>
        <Path
          d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    ),
    viewBox: '0 0 24 24',
  },
  OrderHistoryIcon: {
    svg: (
      <G>
        <Circle cx="16" cy="16" r="15.25" stroke="#3E3E3E" stroke-width="1.5" />
        <Path
          d="M16 8L8 12L16 16L24 12L16 8Z"
          stroke="#3E3E3E"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M8 20L16 24L24 20"
          stroke="#3E3E3E"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M8 16L16 20L24 16"
          stroke="#3E3E3E"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    ),
    viewBox: '0 0 32 32',
  },
  TrackOrderIcon: {
    svg: (
      <G>
        <Circle cx="16" cy="16" r="15.25" stroke="#3E3E3E" stroke-width="1.5" />
        <Path
          d="M8.80005 15.2L24 8L16.8 23.2L15.2 16.8L8.80005 15.2Z"
          stroke="#3E3E3E"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    ),
    viewBox: '0 0 32 32',
  },
  FaqIcon: {
    svg: (
      <G>
        <Circle cx="16" cy="16" r="15.25" stroke="#3E3E3E" stroke-width="1.5" />
        <Path
          d="M16 24C20.4183 24 24 20.4183 24 16C24 11.5817 20.4183 8 16 8C11.5817 8 8 11.5817 8 16C8 20.4183 11.5817 24 16 24Z"
          stroke="#3E3E3E"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M16 19.2V16"
          stroke="#3E3E3E"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M16 12.8H16.008"
          stroke="#3E3E3E"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    ),
    viewBox: '0 0 32 32',
  },
  TermsAndConditionsIcon: {
    svg: (
      <G>
        <Circle cx="16" cy="16" r="15.25" stroke="#3E3E3E" stroke-width="1.5" />
        <Path
          d="M17.6 8H11.2C10.7756 8 10.3687 8.16857 10.0686 8.46863C9.76855 8.76869 9.59998 9.17565 9.59998 9.6V22.4C9.59998 22.8243 9.76855 23.2313 10.0686 23.5314C10.3687 23.8314 10.7756 24 11.2 24H20.8C21.2243 24 21.6313 23.8314 21.9313 23.5314C22.2314 23.2313 22.4 22.8243 22.4 22.4V12.8L17.6 8Z"
          stroke="#3E3E3E"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M17.6 8V12.8H22.4"
          stroke="#3E3E3E"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M19.2 16.8H12.8"
          stroke="#3E3E3E"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M19.2 20H12.8"
          stroke="#3E3E3E"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M14.4 13.6001H13.6H12.8"
          stroke="#3E3E3E"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    ),
    viewBox: '0 0 32 32',
  },
  LogoutIcon: {
    svg: (
      <G>
        <Circle cx="16" cy="16" r="15.25" stroke="#3E3E3E" stroke-width="1.5" />
        <Path
          d="M21.0881 11.7119C22.0948 12.7189 22.7803 14.0019 23.058 15.3985C23.3356 16.7951 23.1929 18.2426 22.6479 19.5581C22.1028 20.8736 21.18 21.998 19.996 22.789C18.812 23.58 17.4201 24.0023 15.9961 24.0023C14.5722 24.0023 13.1803 23.58 11.9963 22.789C10.8123 21.998 9.88946 20.8736 9.34444 19.5581C8.79942 18.2426 8.6567 16.7951 8.93432 15.3985C9.21194 14.0019 9.89744 12.7189 10.9041 11.7119"
          stroke="#3E3E3E"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M16 8V16"
          stroke="#3E3E3E"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </G>
    ),
    viewBox: '0 0 32 32',
  },
};
