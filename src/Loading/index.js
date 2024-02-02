
import React from 'react'
import FontAwesomeIcon from "font-awesome-icons"
const Loading = ({ height = "500px" }) => {
  return (
    <div style={{ height, display: "flex", justifyContent: "center", alignItems: "center" }}>  <FontAwesomeIcon icon="fa-duotone fa-arrows-rotate" spin /></div>
  )
}

export default Loading