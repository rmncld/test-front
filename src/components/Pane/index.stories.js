import React from 'react';
import { storiesOf } from "@storybook/react";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import Pane from "./";
import Data from "../../mocks/events.json";

import Img from "./gardener_cover.png";

storiesOf('Exercise/Components/View', module)
  .add('default', () => (
    <main>
      { Data.map((element, index) =>
          index === 0 ?
            <Pane 
              title={element.title} 
              titleType="bolder_title"
              subtitle={<em>{element.address.place}</em>}
              subtitleType="white"
              url={element.url}
              date={element.date}
              cover={element.cover == "gardener_cover.png" && Img}
              mainPane={true}
              button={true}
              buttonContent={ <FontAwesomeIcon icon={faChevronRight} /> }
            />
          :
            <Pane 
            title={element.title}
              cardIcon={element.icon}
              titleType="thinner"
              subtitle={element.address.place}
              url={element.url}
              date={element.date}
            />
        )
      }
    </main>
  ))