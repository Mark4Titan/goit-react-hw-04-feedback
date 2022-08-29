import React, { useState  } from 'react';
import { Box } from 'components/Box';
import { Statistics } from 'components/Feedback/Statistics/Statistics';
import { FeedbackOptions } from 'components/Feedback/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Feedback/Section/Section';
import { Notification } from 'components/Feedback/Notification/Notification';
import {Marketing} from 'components/Feedback/Marketing/Marketing';

const RenderFeedback = () => {

  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  
  const buttonEvent = type => {
    setFeedback(state => ({
      ...state,
      [type]: state[type] + 1,
    }));
  };
 

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((feedback.good / countTotalFeedback()) * 100) + '%';
  };

  
    return (
      <Box p={4} m={3} border="1px solid" width="320px">
        <Section title="Please leave feedback">
          <FeedbackOptions
            but={Object.keys(feedback)}
            buttonEvent={buttonEvent}
          />
          {countTotalFeedback() ? (
            <>
              <Statistics
                options={feedback}
                total={countTotalFeedback()}
                positivePercentage={countPositiveFeedbackPercentage()}
              />

              <Marketing state={feedback} />
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



export default RenderFeedback;



