import PropTypes from 'prop-types';
import { Box } from 'components/Box';

export const Notification = ({ text }) => {
    return <Box as="h4">{text}</Box>;
}

export default Notification;

Notification.prototype = {
  text: PropTypes.string.isRequired,
};
