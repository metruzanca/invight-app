import React from 'react';
import { Accordion, Box, ScrollView, SectionList, Text } from 'native-base';
import { useConstructor } from '@hooks/useConstructor';
import { useSelector, useDispatch } from '@store/index';

export const Menu: React.FC = () => {
  const dispatch = useDispatch()
  const menu = useSelector(state => state.menu)
  
  useConstructor(() => {
    dispatch.menu.loadQR({ id: 'someId'})
  })  

  return (
    <Box
      alignItems="center"
    >
      <ScrollView>
        <Accordion
          // duration={100}
        >
          {menu.categories.map((section, i) => (
            <Accordion.Item key={i}>
              <Accordion.Summary>
                <Text fontSize="2xl">
                  {section.title}
                </Text>
              </Accordion.Summary>
              {section.data.map((item, ii) => (
                <Accordion.Details key={ii}>
                  <Text
                    fontSize="lg"
                  >
                    {item.name}
                  </Text>
                </Accordion.Details>
              ))}
            </Accordion.Item>
          ))}
        </Accordion>
      </ScrollView>
    </Box>
  );
}