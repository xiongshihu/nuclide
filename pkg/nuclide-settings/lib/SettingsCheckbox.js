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

import type {SettingsPropsDefault} from './types';

import {normalizeIdentifier} from './settings-utils';
import * as React from 'react';

type Props = SettingsPropsDefault & {
  value: boolean,
};

export default class SettingsCheckbox extends React.Component<Props> {
  _handleChange = (event: SyntheticEvent<>) => {
    const isChecked = ((event.target: any): HTMLInputElement).checked;
    this.props.onChange(isChecked);
  };

  render(): React.Node {
    const keyPath = this.props.keyPath;
    const id = normalizeIdentifier(keyPath);
    const title = this.props.title;
    const description = this.props.description;
    const value = this.props.value;

    return (
      <div className="checkbox">
        <label htmlFor={id}>
          <input
            checked={value}
            id={id}
            onChange={this._handleChange}
            type="checkbox"
          />
          <div className="setting-title">{title}</div>
        </label>
        <div className="setting-description">{description}</div>
      </div>
    );
  }
}
