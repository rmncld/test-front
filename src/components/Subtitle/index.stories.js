import React from 'react';
import { storiesOf } from "@storybook/react";

import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import Subtitle from ".";

storiesOf('Exercise/Components/Subtitle', module)
  .add('default', () => (
    <Subtitle>My subtitle</Subtitle>
  )).add('italic', () => (
    <Subtitle><em>My subtitle</em></Subtitle>
  )).add('secondary', () => (
    <Subtitle type="secondary">My subtitle</Subtitle>
  )).add('white', () => (
    <Subtitle type="white">My subtitle</Subtitle>
  )).add('with fa secondary', () => (
    <Subtitle type="secondary" icon={faMapMarkerAlt}>My subtitle</Subtitle>
  )).add('white fa italic', () => (
    <Subtitle type="white" icon={faMapMarkerAlt}><em>My subtitle</em></Subtitle>
  ));