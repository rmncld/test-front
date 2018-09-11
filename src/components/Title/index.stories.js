import React from 'react';
import { storiesOf } from "@storybook/react";

import Title from "./";

storiesOf('Title', module)
  .add('default', () => (
    <Title>My title</Title>
  ))
