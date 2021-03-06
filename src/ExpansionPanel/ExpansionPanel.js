import React from "react";
import PropTypes from "prop-types";
import ExpansionPanel from "@material-ui/core/es/ExpansionPanel";

function ExpansionPanelM(props) {
  return <ExpansionPanel {...props}>{props.children}</ExpansionPanel>;
}

ExpansionPanelM.propTypes = {
  /**
   * The content of the expansion panel.
   */
  children: PropTypes.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: PropTypes.object,

  /**
   * @ignore
   */
  className: PropTypes.string,

  /**
   * Properties applied to the [`Collapse`](/api/collapse/) element.
   */
  CollapseProps: PropTypes.object,

  /**
   * If `true`, expands the panel by default.
   */
  defaultExpanded: PropTypes.bool,

  /**
   * If `true`, the panel will be displayed in a disabled state.
   */
  disabled: PropTypes.bool,

  /**
   * If `true`, expands the panel, otherwise collapse it.
   * Setting this prop enables control over the panel.
   */
  expanded: PropTypes.bool,

  /**
   * Callback fired when the expand/collapse state is changed.
   *
   * @param {object} event The event source of the callback
   * @param {boolean} expanded The `expanded` state of the panel
   */
  onChange: PropTypes.func
};

export { ExpansionPanelM as default };
