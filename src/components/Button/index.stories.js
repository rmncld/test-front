import React from 'react';
import { storiesOf } from "@storybook/react";

import Button from "./";

storiesOf('Button', module)
  .add('with text', () => (
    <Button>My button</Button>
  )).add('with some emoji', () => (
    <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  )).add('with font-awesome', () => (
    <Button><i className="fas fa-map-marker"></i></Button>
  )).add('with type', () => (
    <Button type="dark">My button</Button>
  )).add('with size', () => (
    <Button size="sm">My button</Button>
  ));
