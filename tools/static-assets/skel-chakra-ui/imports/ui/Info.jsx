import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { LinksCollection } from '../api/links';
import {Box, Heading, Link, ListItem, UnorderedList} from "@chakra-ui/react";
import {ExternalLinkIcon} from "@chakra-ui/icons";

export const Info = () => {
  const links = useTracker(() => {
    return LinksCollection.find().fetch();
  });

  return (
    <Box>
      <Heading as='h2' size='3xl'>Learn Meteor!</Heading>
      <UnorderedList>{links.map(
        link => <ListItem key={link._id}>
          <Link isExternal href={link.url} target="_blank">{link.title} <ExternalLinkIcon mx='2px' /></Link>
        </ListItem>
      )}</UnorderedList>
    </Box>
  );
};
