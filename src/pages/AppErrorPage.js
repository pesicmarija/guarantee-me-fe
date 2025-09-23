import styled from 'styled-components';
import { palette } from 'styled-tools';

import { Box } from '../components/Box';
// import Icon from '@jaggaer-one-platform/icons';

const Title = styled.h2`
  display: block;
  font-size: 3rem;
  margin: 40px;
  text-align: center;
`;

const ErrorPageWrapper = styled(Box)`
  min-height: 100%;
  height: 100%;
  text-align: center;
  width: 540px;
  margin: ${({ title }) => title ? '30px auto' : '135px auto'};

  > span {
    font-size: 1rem;
    display: block;
    opacity: 0.6;
  }
  > button {
    margin: 20px 5px;
  }
  > svg {
    margin: 20px 0;
  }
`;

const Description = styled.p`
  margin-top: 10px;
  color: ${palette('gray20')};
`;

function AppErrorPage({
                        title,
                        // message,
                        // version = 'error',
                        // icon = 'locked',
                        descriptionTitle = '',
                        description = '',
                      }) {
  return (
    <>
      {title && <Title>{title}</Title>}
      <ErrorPageWrapper title={title}>
        {/*<Icon id={icon} type="illustration" size={260} />*/}
        {descriptionTitle && <h2>{descriptionTitle}</h2>}
        {description && <Description>{description}</Description>}
      </ErrorPageWrapper>
    </>
  );
}

export { AppErrorPage };
