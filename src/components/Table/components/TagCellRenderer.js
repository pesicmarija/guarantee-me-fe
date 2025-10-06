import { Chip } from '@mui/material';
import styled from 'styled-components';

const TagWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  flex-wrap: wrap;
  overflow-x: auto;
  margin-top: 10px;

  .MuiChip-root {
    margin: 0;
  }
`;

function TagCellRenderer({ value = [] }) {
  const tags = Array.isArray(value) ? value : (value ? [value] : []);

  return (
    <TagWrapper>
      {tags?.map((label) => (
        <Chip key={label} label={label} size="small" color="primary" />
      ))}
    </TagWrapper>
  );
}

export { TagCellRenderer };
