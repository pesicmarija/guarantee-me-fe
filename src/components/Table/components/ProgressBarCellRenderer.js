import styled from 'styled-components';

const ProgressWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const ProgressBar = styled.div`
  width: 120px;
  height: 3px;
  border-radius: 6px;
  background-color: ${p => p.$danger ? '#ffe1e1' : '#e6e6e6'};
`;

const ProgressIndicator = styled.div`
 background-color: ${p => p.$danger ? '#d32f2f' : p.$warn ? '#ed6c02' : '#3769db'};
  height: 3px;
  width: ${p => p.$percent}%;
`;

const PercentageSpan = styled.span`
  text-align: right;
  margin-left: 10px;
  min-width: 56px;
  font-variant-numeric: tabular-nums;
  color: ${p => (p.$danger ? '#d32f2f' : 'inherit')};
`;

function ProgressBarCellRenderer({ value }) {
  const pct = typeof value === 'number' ? value : value?.pct ?? 0;
  const days = typeof value === 'object' ? value?.days : undefined;

  const displayValue = Math.min(100, Math.max(0, pct));

  const danger  = (days != null ? days <= 0 : displayValue === 0);
  const warn    = !danger && displayValue <= 25;
  const visualWidth =  Math.max(displayValue, 2);

  return (
    <ProgressWrapper title={days != null ? `${days} days left` : undefined}>
      <ProgressBar $danger={danger}>
        <ProgressIndicator $percent={visualWidth} $warn={warn} $danger={danger} />
      </ProgressBar>
      <PercentageSpan  $danger={danger}>
        {danger ? 'Expired' : `${displayValue}%`}
      </PercentageSpan>
    </ProgressWrapper>
  );
}

export { ProgressBarCellRenderer };