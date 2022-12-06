import React from 'react';
import { storiesOf } from "@storybook/react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';


import Pane from "../Pane";
import mockData from "../../mocks/events.json";

import Img from "../../components/Pane/gardener_cover.png";

storiesOf('Exercise/Renders', module)
  .add('default', () => (
    <main>
      { mockData.map((element, index) =>
          index === 0 ?
            <Pane 
              title={element.title} 
              subtitle={<em>{element.address.place}</em>}
              url={element.url}
              date={element.date}
              titleType="bolder_title"
              subtitleType="white"
              cover={element.cover == "gardener_cover.png" && Img}
              mainPane={true}
              button={true}
              buttonContent={ <FontAwesomeIcon icon={faChevronRight} /> }
            />
          :
            <Pane 
              cardIcon={element.icon}
              title={element.title}
              subtitle={element.address.place}
              url={element.url}
              date={element.date}
              titleType="thinner"
            />
        )
      }
    </main>
  ))