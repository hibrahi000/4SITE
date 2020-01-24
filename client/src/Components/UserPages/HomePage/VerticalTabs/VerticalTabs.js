import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VerticalTab from './VerticalTab';

class VerticalTabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label
    };
  }

  onClickTabItem = tab => {
    this.setState({ activeTab: tab });
  };

  render() {
    const {
      onClickTabItem,
      props: { children },
      state: { activeTab }
    } = this;

    return (
      <div className="tabs2">
        <ol className="tab-list2">
          {children.map(child => {
            const { label } = child.props;

            return (
              <VerticalTab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
              />
            );
          })}
        </ol>
        <div className="tab-content2">
          {children.map(child => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </div>
    );
  }
}

export default VerticalTabs;
