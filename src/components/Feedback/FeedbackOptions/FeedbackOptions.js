import { Box } from 'components/Box';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ but, buttonEvent }) => {
  return (
    <Box p={1} display="flex" gridGap={3}>
      {but.map(opt => (
        <Box as="p" p={2} display="flex" gridGap={3}>
          <Box
            as="button"
            p="inherit"
            key={opt}
            type="button"
            onClick={() => buttonEvent(opt)}>
            {opt.toUpperCase()}
          </Box>
        </Box>
      ))}      
    </Box>
  );
};

FeedbackOptions.propTypes = {
  but: PropTypes.shape({
    map: PropTypes.func
  }),
  buttonEvent: PropTypes.func
}

export default FeedbackOptions;


