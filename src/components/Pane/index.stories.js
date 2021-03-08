import React from 'react';
import { storiesOf } from "@storybook/react";

import Pane from "./";
import Img from "./example.png";

storiesOf('Exercise/Components/Pane', module)
  .add('default', () => (
    <Pane />
  )).add('with cover', () => (
    <Pane cover={Img} title="Le printemps des jardiniers" />
  ));
