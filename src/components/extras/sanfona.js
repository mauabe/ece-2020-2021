import React, {Component} from 'react'

import { Accordion, AccordionItem } from 'react-sanfona';

export default class Sanfona extends Component {




  render() {
    return (
      <Accordion>
        {[1, 2, 3, 4, 5].map(item => {
          return (
            <AccordionItem title={`Item ${item}`} expanded={item === 1}>
              <div>
                {`Item ${item} content`}
              </div>
            </AccordionItem>
          );
        })}
      </Accordion>
    );
  }
}
