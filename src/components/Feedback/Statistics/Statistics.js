import { Box } from 'components/Box';
import PropTypes from 'prop-types';


export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <Box p={2} >
      <Box as="h4">Statistics</Box>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive Feedback: {positivePercentage}</p>
    </Box>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.string,
};
