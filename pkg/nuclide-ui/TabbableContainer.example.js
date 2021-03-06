/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 *
 * @flow
 * @format
 */

import * as React from 'react';
import {AtomInput} from 'nuclide-commons-ui/AtomInput';
import {Block} from 'nuclide-commons-ui/Block';
import {Button} from 'nuclide-commons-ui/Button';
import RadioGroup from './RadioGroup';
import {TabbableContainer} from './TabbableContainer';

const labels = ['radio 1', 'radio 2', 'radio 3'];

class FormExample extends React.Component<any, {selectedIndex: number}> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
  }

  onSelectedChange = (selectedIndex: number): void => {
    this.setState({
      selectedIndex,
    });
  };

  render(): React.Node {
    return (
      <div>
        <Block>
          <AtomInput
            disabled={false}
            initialValue="input field 1"
            placeholderText="placeholder text"
          />
        </Block>
        <Block>
          <AtomInput
            disabled={false}
            initialValue="input field 2"
            placeholderText="placeholder text"
          />
        </Block>
        <Block>
          <AtomInput
            disabled={false}
            initialValue="input field 3"
            placeholderText="placeholder text"
          />
        </Block>
        <Block>
          {/* $FlowFixMe(>=0.53.0) Flow suppress */}
          <RadioGroup
            selectedIndex={this.state.selectedIndex}
            optionLabels={labels}
            onSelectedChange={this.onSelectedChange}
          />
        </Block>
        <Block>
          <AtomInput
            disabled={false}
            initialValue="input field 4"
            placeholderText="placeholder text"
          />
        </Block>
        <Block>
          <Button className="inline-block" size="SMALL">
            button 1
          </Button>
          <Button className="inline-block" size="SMALL">
            button 2
          </Button>
          <Button className="inline-block" size="SMALL">
            button 3
          </Button>
        </Block>
      </div>
    );
  }
}

const ContainedTabbableContainerExample = (): React.Element<any> => (
  <TabbableContainer contained={true}>
    <FormExample />
  </TabbableContainer>
);

const UncontainedTabbableContainerExample = (): React.Element<any> => (
  <TabbableContainer contained={false}>
    <FormExample />
  </TabbableContainer>
);

export const TabbableContainerExamples = {
  sectionName: 'TabbableContainer',
  description:
    'Allows tabbing and shift-tabbing to change the focus of the inputs.',
  examples: [
    {
      title: 'Contained (focus will be contained in this section)',
      component: ContainedTabbableContainerExample,
    },
    {
      title: 'Uncontained',
      component: UncontainedTabbableContainerExample,
    },
  ],
};
