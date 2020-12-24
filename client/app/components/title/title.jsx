import React from 'react';
import styles from './title.scss';
import Text from '../text';

const Title = () => (
  <div className={styles.title}>
    <Text
        size="large"
        theme="dark-grey"
        weight="bold"
        transform="capitalize"
      >
        frequently asked questions
      </Text>
  </div>

);

export default Title;
