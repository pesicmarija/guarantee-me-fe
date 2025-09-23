import MUICircularProgress from '@mui/material/CircularProgress';
import styled, { css } from 'styled-components';
import { switchProp, prop } from 'styled-tools';

import { Box } from './Box';

const Container = styled.div`
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${switchProp(prop('size'), {
  s: css`
      display: inline-flex;
      flex-direction: row;
      align-content: center;
    `,
}, css`
    display: inline-flex;
  `)};
`;

const Label = styled(Box)`
  ${switchProp(prop('size'), {
  s: css`
      margin: 0 0 0 10px;
    `,
}, css`
    margin: 10px 0 0 0;
  `)};
`;

const LoadersWrap = styled.div`
  position: relative;
  display: flex;
`;

const InnerCircle = styled(MUICircularProgress).attrs(({ size, thickness }) => ({
  variant: 'determinate',
  value: 100,
  size,
  thickness,
}))`
  color: gray;
`;

const ProgressCircle = styled(MUICircularProgress)`
  color: darkblue;
  position: absolute;
  left: 0;
`;

const sizeMap = {
  s: 15,
  m: 30,
  l: 50,
};

const thicknessMap = {
  s: 5,
  m: 4,
  l: 3,
};

const Loader = ({ size, text }) => {
  const sizeInt = sizeMap[size];
  return (
    <Container size={size}>
      <LoadersWrap>
        <InnerCircle size={sizeInt} thickness={thicknessMap[size]} />
        <ProgressCircle variant="indeterminate" size={sizeInt} thickness={thicknessMap[size]} />
      </LoadersWrap>
      {Boolean(text) && <Label component="p" size={size}>{text}</Label>}
    </Container>
  );
};

export { Loader };
