import React from 'react';

import {MyButton} from './MyButton';

export default {
  title: 'components/MyButton',
  component: MyButton,
};

export const Basic = args => <MyButton {...args} />;

Basic.args = {
  text: 'Hello World',
  color: 'purple',
};
