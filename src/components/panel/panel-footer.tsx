import * as React from 'react';

interface Props {
  content?: string | JSX.Element;
}

export class PanelFooter extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    const { content } = this.props;

    return (
      <div className="panel-footer">
        {content ? content : this.props.children}
      </div>
    );
  }
}
