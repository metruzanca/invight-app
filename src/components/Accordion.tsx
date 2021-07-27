import React, { FC, useState } from "react"
import { Box, SectionList } from "native-base"

type Section = {
  title: string;
  data: any[]
}

interface Props {
  sections: Section[]
  renderSectionHeader: FC<{section: Section, onclick: (active: boolean) => void}>
  renderItem: FC<{item: any}>
}

export const Accordion: FC<Props> = ({
  sections,
  renderSectionHeader,
  renderItem,
}) => {
  const [activeSections, setActiveSections] = useState([])


  return (
    <SectionList
      sections={sections}
      renderSectionHeader={({section}) => {
        console.log(section);
        return renderSectionHeader({
          section, onclick: () => {}
        })
      }}
      renderItem={renderItem}
    />
  )
}