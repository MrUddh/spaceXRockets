import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadingOrErrorStatus } from '../../utils';
import { IDLE } from './constants';
import RocketCard from './RocketCard';
import { getRockets, selectRockets, selectStatus } from './rocketsSlice';
import { BackgroundSparkles, FlyingTesla } from './styles';

const Rockets = () => {
  const dispatch = useDispatch();

  const status = useSelector(selectStatus);
  const rockets = useSelector(selectRockets);

  useEffect(() => {
    dispatch(getRockets());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {status !== IDLE ? (
        loadingOrErrorStatus(status)
      ) : (
        <BackgroundSparkles>
          <FlyingTesla>
            <img
              src="https://cdn.motor1.com/images/mgl/48vxY/s1/tesla-roadster-in-space.webp"
              width="200px"
              alt=""
            />
          </FlyingTesla>
          {rockets?.map((rocket) => (
            <RocketCard key={rocket.id} rocket={rocket} />
          ))}
        </BackgroundSparkles>
      )}
    </>
  );
};

export default memo(Rockets);
