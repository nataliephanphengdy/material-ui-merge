import React from "react";
import PropTypes from "prop-types";
import CardMedia from "@material-ui/core/CardMedia";

function CardMediaM(props) {
  return <CardMedia {...props} />;
}

CardMediaM.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  component: PropTypes.string,
  /**
   * Image to be displayed as a background image.
   * Either `image` or `src` prop must be specified.
   * Note that caller must specify height otherwise the image will not be visible.
   */
  image: PropTypes.string,
  /**
   * An alias for `image` property.
   * Available only with media components.
   * Media components: `video`, `audio`, `picture`, `iframe`, `img`.
   */
  src: PropTypes.string,
  style: PropTypes.object
};

export { CardMediaM as default };
