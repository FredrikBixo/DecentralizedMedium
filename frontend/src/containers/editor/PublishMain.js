import React, { useRef } from "react";
import { Typography, Container, Box, Grid } from "@material-ui/core";
import Button from "react-bootstrap/Button";
import Editor from "./Editor";
import useIpfsFactory from '../../hooks/useIpfsFactory.js'

export default function PublishMain() {
  const ejInstance = useRef();
  const { ipfs, ipfsInitError } = useIpfsFactory({ commands: ['id'] })
  console.log(ipfs, '*** ipfs stuff');

  const onSaveHandler = async () => {
    const content = await ejInstance.current?.saver?.save();
    if (content.blocks.length < 1) return;
    delete content.time;
    const stringifiedContent = JSON.stringify(content);
    // IPFS has not initialised yet
    if (!ipfs && ipfsInitError) return;
    const ipfsData = await ipfs.add(stringifiedContent);
    alert(ipfsData.path);
  };

  return (
    <React.Fragment>
      <Container
        style={{ backgroundColor: "#ffffff", minHeight: "100vh" }}
        maxWidth="xl"
      >
        <Box p={5}>
          <Box>
            <Grid container spacing={3}>
              <Grid item xs={9}>
                <Typography variant="h3" component="span">
                  The Reader - Editor
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Button onClick={onSaveHandler} variant="secondary">Save!</Button>
              </Grid>
            </Grid>
          </Box>
          <Box
            mt={2}
            style={{
              backgroundColor: "#ffffff",
            }}
          >
            <Editor ejInstance={ejInstance} />
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}
