import React from 'react';
import styled from 'styled-components';
import { useWeb3React } from '@web3-react/core';
import Text from '../../components/Text';
import Images from '../../components/Images';
import { useImages } from '../../hooks/useImages';
import { colors } from '../../theme';

import FileUploadModal from '../../components/FileUploadModal';

export const Container = styled.div`
  display: flex;
  max-width: 100%;
  height: 100%;
  flex-wrap: wrap;
`;

const StyledDiv = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 48px;
`;

const Home = () => {
  const { active } = useWeb3React();
  const { imagesAddress } = useImages();

  const NotActive = () => {
    return (
      <StyledDiv>
        Connect{' '}
        {
          <Text>
            <a style={{ color: colors.green }} href="https://faucet.ropsten.be/" target="blank">
              Ropsten
            </a>
          </Text>
        }{' '}
        wallet to continue.
      </StyledDiv>
    );
  };

  return (
    <Container>
      {!active && <NotActive />}
      {imagesAddress && <FileUploadModal imagesAddress={imagesAddress} />}
      {imagesAddress && <Images imagesAddress={'0xa2a16Ce5B6bddA0F1867a0d5783D47FdD75A37ed'} />}
    </Container>
  );
};

export default Home;
