import React from 'react';
import { storiesOf } from "@storybook/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faMapMarker } from '@fortawesome/free-solid-svg-icons'

import Button from "./";

storiesOf('Exercise/Components/Button', module)
  .add('with text', () => (
    <Button>My button</Button>
  )).add('with some emoji', () => (
    <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  )).add("with font-awesome", () => (
    <Button>
      <FontAwesomeIcon icon={faMapMarker} />
    </Button>
  )).add('with type', () => (
    <Button type="dark">My button</Button>
  )).add('with size', () => (
    <Button size="sm">My button</Button>
  )).add('with faChevronright', () => (
    <Button>
      <FontAwesomeIcon icon={faChevronRight} />
    </Button>
  ))
