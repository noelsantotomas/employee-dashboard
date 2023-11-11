import { HighlightLabel, HighlightStat, StyledHighlightCard } from "./styles";

export default function HighlightCard({ info, label }) {
  return (
    <>
      <StyledHighlightCard>
        <HighlightStat>{info.total}</HighlightStat>
        <HighlightLabel>{label}</HighlightLabel>
      </StyledHighlightCard>
    </>
  );
}
