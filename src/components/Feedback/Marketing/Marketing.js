import { Box } from 'components/Box';
import PropTypes from 'prop-types';



export const Marketing = ({ state }) => {
  const { good, neutral, bad } = state;

  // маркетенгова формула)))))))) додає 1/3 до позитивних відгуків від нейтральних.
    const mTotal = Math.round((good + (neutral / 3)) / (good + neutral + bad) * 100) +
    '%';

  return (
    <Box p={2} border="1px solid" width="300px">
      <Box as="h4">Marketing</Box>
      <p>PositiFFF Feedback: {mTotal}</p>
    </Box>
  );
};

export default Marketing;

Marketing.propTypes = {
    state: PropTypes.object,
};


