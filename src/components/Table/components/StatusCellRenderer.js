import styled from 'styled-components';

const StatusBadge = styled.span`
  border-radius: 30px;
  padding: ${({ $compact }) => `${$compact ? '0' : '3px'} 10px`};
  line-height: 20px;
  font-weight: 400;
  font-size: 13px;
  color: ${({ $color }) => palette(`${$color}05`)};
  border: 1px solid ${({ $color }) => palette(`${$color}05`)};
  background: ${({ $color }) => palette(`${$color}50`)};
  text-transform: capitalize;
`;

function StatusCellRenderer({ value, color }) {
  return (
    <>
      {value && <StatusBadge color={color}> {value} </StatusBadge>}
    </>
  );
}

export { StatusCellRenderer };