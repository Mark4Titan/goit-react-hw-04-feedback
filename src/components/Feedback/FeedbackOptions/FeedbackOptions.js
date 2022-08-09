import { Box } from 'components/Box';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  
  return (
    <Box p={1} display="flex" gridGap={3}>
      {options.map((option, index) => (
        <Box as="p" p={2} display="flex" gridGap={3}>
          <Box
            as="button"
            p="inherit"
            key={index}
            id={option}
            type="button"
            onClick={onLeaveFeedback}
          >
            {option.toUpperCase()}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};

