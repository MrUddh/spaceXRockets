import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsFavorite, toggleFavorite } from './rocketsSlice';
import {
  TextDrawer,
  Image,
  RocketCardWrapper,
  Text,
  Title,
  Subtitle,
  Hearth,
} from './styles';

const RocketCard = ({ rocket }) => {
  const {
    name,
    description,
    flickr_images,
    active,
    cost_per_launch,
    id,
  } = rocket;
  const dispatch = useDispatch();
  const isFavorite = useSelector((state) => selectIsFavorite(state, id));

  const trimmedCostPerLaunch = cost_per_launch
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, '$&,');

  const favoriteRocketToggle = () => {
    dispatch(toggleFavorite(id));
  };

  return (
    <>
      <RocketCardWrapper>
        <Title>{name}</Title>
        <Image src={flickr_images} alt="" />
        <TextDrawer>
          <Subtitle>More Information</Subtitle>
          <Hearth isFavorite={isFavorite} onClick={favoriteRocketToggle}>
            {'♥'}
          </Hearth>
          <Text>{description}</Text>
          <Text>{`Cost per launch: ${trimmedCostPerLaunch}`}</Text>
          <Text>
            {active
              ? 'This rocket is active today'
              : 'This rocket is not in service'}
          </Text>
        </TextDrawer>
      </RocketCardWrapper>
    </>
  );
};

export default RocketCard;
