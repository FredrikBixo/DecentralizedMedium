import React from "react";
import { Typography, Container, Box } from '@material-ui/core';
import Editor from './Editor';


export default function PublishMain() {
  return (
    <React.Fragment>
      <Container
        style={{ backgroundColor: '#ffffff', minHeight: "100vh" }}
        maxWidth="xl">
        <Box p={5}>
          <Box>
            <Typography variant="h3" component="span">
              The Reader - Editor
        </Typography>
          </Box>
          <Box
            mt={2}
            style={{
              backgroundColor: '#ffffff',
            }}>
            <Editor />
          </Box>
          <button id="btnSaves">Save</button>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default PublishMain;