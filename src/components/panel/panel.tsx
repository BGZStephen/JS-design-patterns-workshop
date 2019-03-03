import * as React from 'react';
import { PanelHeader } from './panel-header';
import { PanelFooter } from './panel-footer';
import { PanelBody } from './panel-body';

import './panel.scss';

interface Props {
  type?: string;
  header?: string | JSX.Element | null;
  body?: string | JSX.Element | null;
  footer?: string | JSX.Element | null;
}

export class Panel extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    const { type, header, body, footer } = this.props;

    return (
      <div className={`panel ${type ? 'panel-' + type : 'panel-default'}`}>
        {header ? <PanelHeader>{header}</PanelHeader> : this.transcludeType(PanelHeader)}
        {body ? <PanelBody>{body}</PanelBody> : this.transcludeType(PanelBody)}
        {footer ? <PanelFooter>{footer}</PanelFooter> : this.transcludeType(PanelFooter)}
      </div>
    );
  }

  transcludeType(type: any): React.ReactElement<any> | null {
    const children = this.props.children;

    let el: any;

    React.Children.map(children, (child) => {
      if (typeof child !== 'string' && typeof child !== 'number' && typeof child === type) {
        el = child;
      }
    })

    return el;
  }
}