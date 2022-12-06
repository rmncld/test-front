import React from 'react';
import { storiesOf } from "@storybook/react";

import Date from ".";

storiesOf('Exercise/Components/Calendar', module)
  .add('default', () => (
    <Date date="23/03/2021"/>
  ))