import { Box } from "native-base"
import React from "react"
import { FormattedMessage } from "react-intl"

interface Props {}

export const Venue: React.FC<Props> = ({}) => {

  return (
    <Box>
      <FormattedMessage id={'app.hello-world'}/>
    </Box>
  )
}