import React from 'react';
import { Card, Image, Text,  Button, Group } from '@mantine/core';

function Showcard(props) {
    return (
        <Card
          shadow="sm"
          p="sm"
          component="a"
          href={props.thumbnail}
          target="_blank"
        >
          <Card.Section>
            <Image
              src={props.thumbnail}
              width={160}
              height={160}
              alt="No way!"
            />
          </Card.Section>
    
          <Text weight={500} size="lg" mt="sm">
            {props.title}
          </Text>
    
          <Text mt="xs" color="dimmed" size="sm">
           {props.description}
          </Text>
        </Card>
  );
}

export default Showcard;