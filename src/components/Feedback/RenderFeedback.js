import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { Statistics } from 'components/Feedback/Statistics/Statistics';
import { FeedbackOptions } from 'components/Feedback/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Feedback/Section/Section';
import { Notification } from 'components/Feedback/Notification/Notification';
import {Marketing} from 'components/Feedback/Marketing/Marketing';

class RenderFeedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  
  buttonEvent = evt => {    
    const bE = evt.target.id;
    this.setState(prevState => {
      return {[bE]: prevState[bE] + 1};
    });  
  };
 

  countTotalFeedback = () => {
    const totalF = this.state.good + this.state.neutral + this.state.bad;
    return totalF;
  };

  countPositiveFeedbackPercentage = () => {
    return (
      Math.round((this.state.good / this.countTotalFeedback()) * 100) + '%'      
    );
  };

  render() {
    return (
      <Box p={4} m={ 3 } border="1px solid" width="320px">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.buttonEvent}
          />
          {this.countTotalFeedback() ? (
            <>
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
              <Marketing state={this.state} />
            </>
          ) : (
            <Notification
              message="There is no feedback"
              text={'No feedback given'}
            />
          )}
        </Section>
      </Box>
    );

    
  }
}



export default RenderFeedback;

RenderFeedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};

