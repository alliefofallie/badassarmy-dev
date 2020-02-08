import React from 'react'
import PropTypes from 'prop-types'
import { GetHelpTemplate } from '../../templates/gethelp'

const GetHelpPreview = ({ entry, widgetFor }) => (
  <GetHelpTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

GetHelpPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default GetHelpPreview
