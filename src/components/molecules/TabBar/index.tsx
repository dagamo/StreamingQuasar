import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import styled from 'styled-components/native';
import {Image} from 'react-native';
import HomeIcon from '@/assets/icons/home.png';
import SearchIcon from '@/assets/icons/search.png';
import TVIcon from '@/assets/icons/tv.png';
import NotificationsIcon from '@/assets/icons/notifications.png';
import ProfileIcon from '@/assets/icons/profile.png';

const Container = styled.View`
  height: 80px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 10px;
  background-color: #000;
  border-top-width: 1px;
  border-top-color: #1e293b;
`;

const ButtonContainer = styled.TouchableOpacity`
  align-items: center;
  border-radius: 50%;
  background-color: ${({isFocused}: {isFocused: boolean}) =>
    isFocused ? '#1e293b' : 'transparent'};
  padding: 10px;
`;

const icons: {[key: string]: any} = {
  Home: HomeIcon,
  Search: SearchIcon,
  TV: TVIcon,
  Notifications: NotificationsIcon,
  Profile: ProfileIcon,
};

const CustomTabBar = ({state, navigation}: BottomTabBarProps) => {
  return (
    <Container>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const icon = icons[route.name] || HomeIcon;
        return (
          <ButtonContainer
            isFocused={isFocused}
            key={route.key}
            onPress={() => navigation.navigate(route.name)}>
            <Image source={icon} />
          </ButtonContainer>
        );
      })}
    </Container>
  );
};
export default CustomTabBar;
