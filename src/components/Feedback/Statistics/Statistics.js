import { Box } from 'components/Box';
import PropTypes from 'prop-types';

export const Statistics = ({ total, options, positivePercentage }) => {
  const { good, neutral, bad } = options;
  return (
    <Box p={2}>
      <Box as="h4">Statistics</Box>

      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive Feedback: {positivePercentage}</p>
    </Box>
  );
};

Statistics.propTypes = {
  options: PropTypes.shape({
    bad: PropTypes.number.isRequired,
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
  }),
  positivePercentage: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default Statistics;
