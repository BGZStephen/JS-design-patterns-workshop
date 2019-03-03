import * as React from 'react';

interface Props {
  content?: string | JSX.Element;
}

export class PanelBody extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    const { content } = this.props;

    return (
      <div className="panel-body">
        {content ? content : this.props.children}
      </div>
    );
  }
}