import React, { Component } from 'react';

import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleLeaveFeedback = feedbackType => {
    this.setState(prevState => ({
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;
    return good + bad + neutral;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    return (this.state.good / total) * 100;
  };

  render() {

    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <Section title="Please level feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleLeaveFeedback}
          />
        </Section>

        <Section title="Statictics">
          <Statistics
            good={this.state.good}
            bad={this.state.bad}
            neutral={this.state.neutral}
            total={total}
            percentage={percentage}
          />
        </Section>
      </div>
    );
  }
}
