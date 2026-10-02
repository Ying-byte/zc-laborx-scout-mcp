#!/usr/bin/env node
import { createChannelMcp } from './_shared/create-channel-mcp.mjs';

const mcp = createChannelMcp({
  slug: "laborx",
  boardId: "laborx-official",
  domain: "laborx.com",
  npmName: "zc-laborx-scout-mcp",
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
