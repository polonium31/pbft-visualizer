// Sample data for a left-to-right tree
const treeData = {
  nodes: [
    { path: "user", module: "user", size: 20, level: 0 },
    { path: "user/main-server", module: "main-server", size: 20, level: 1 },
    {
      path: "user/main-server/sub-server-1",
      module: "sub-server-1",
      size: 20,
      level: 2,
    },
    {
      path: "user/main-server/sub-server-2",
      module: "sub-server-2",
      size: 20,
      level: 2,
    },
    {
      path: "user/main-server/sub-server-3",
      module: "sub-server-3",
      size: 20,
      level: 2,
    },
    {
      path: "user/main-server/sub-server-4",
      module: "sub-server-4",
      size: 20,
      level: 2,
    },
    {
      path: "user/main-server/sub-server-1/proxy-server-1",
      module: "proxy-server-1",
      size: 20,
      level: 3,
    },

    {
      path: "user/main-server/sub-server-2/proxy-server-2",
      module: "proxy-server-2",
      size: 20,
      level: 3,
    },
    {
      path: "user/main-server/sub-server-3/proxy-server-3",
      module: "proxy-server-3",
      size: 20,
      level: 3,
    },
    {
      path: "user/main-server/sub-server-4/proxy-server-4",
      module: "proxy-server-4",
      size: 20,
      level: 3,
    },
    {
      path: "user/main-server/sub-server-1/proxy-server-1/commit-1",
      module: "commit-1",
      size: 20,
      level: 4,
    },
    {
      path: "user/main-server/sub-server-2/proxy-server-2/commit-2",
      module: "commit-2",
      size: 20,
      level: 4,
    },
    {
      path: "user/main-server/sub-server-3/proxy-server-3/commit-3",
      module: "commit-3",
      size: 20,
      level: 4,
    },
    {
      path: "user/main-server/sub-server-4/proxy-server-4/commit-4",
      module: "commit-4",
      size: 20,
      level: 4,
    },
    {
      path: "user/main-server/sub-server-1/proxy-server-1/commit-1/reply",
      module: "reply",
      size: 20,
      level: 5,
    },
  ],
  links: [
    { source: "user", target: "user/main-server" },
    { source: "user/main-server", target: "user/main-server/sub-server-1" },
    { source: "user/main-server", target: "user/main-server/sub-server-2" },
    { source: "user/main-server", target: "user/main-server/sub-server-3" },
    { source: "user/main-server", target: "user/main-server/sub-server-4" },
    // proxy-server-1 to all node
    {
      source: "user/main-server/sub-server-2",
      target: "user/main-server/sub-server-1/proxy-server-1",
    },
    {
      source: "user/main-server/sub-server-3",
      target: "user/main-server/sub-server-1/proxy-server-1",
    },
    {
      source: "user/main-server/sub-server-4",
      target: "user/main-server/sub-server-1/proxy-server-1",
    },
    // proxy-server-2 to all node
    {
      source: "user/main-server/sub-server-1",
      target: "user/main-server/sub-server-2/proxy-server-2",
    },

    {
      source: "user/main-server/sub-server-3",
      target: "user/main-server/sub-server-2/proxy-server-2",
    },
    {
      source: "user/main-server/sub-server-4",
      target: "user/main-server/sub-server-2/proxy-server-2",
    },
    // proxy-server-3 to all node
    {
      source: "user/main-server/sub-server-1",
      target: "user/main-server/sub-server-3/proxy-server-3",
    },
    {
      source: "user/main-server/sub-server-2",
      target: "user/main-server/sub-server-3/proxy-server-3",
    },

    {
      source: "user/main-server/sub-server-4",
      target: "user/main-server/sub-server-3/proxy-server-3",
    },
    // proxy-server-4 to all node
    {
      source: "user/main-server/sub-server-1",
      target: "user/main-server/sub-server-4/proxy-server-4",
    },
    {
      source: "user/main-server/sub-server-2",
      target: "user/main-server/sub-server-4/proxy-server-4",
    },
    {
      source: "user/main-server/sub-server-3",
      target: "user/main-server/sub-server-4/proxy-server-4",
    },
    // commit-1 to all node
    {
      source: "user/main-server/sub-server-1/proxy-server-1",
      target: "user/main-server/sub-server-1/proxy-server-1/commit-1",
    },
    {
      source: "user/main-server/sub-server-2/proxy-server-2",
      target: "user/main-server/sub-server-1/proxy-server-1/commit-1",
    },
    {
      source: "user/main-server/sub-server-3/proxy-server-3",
      target: "user/main-server/sub-server-1/proxy-server-1/commit-1",
    },
    {
      source: "user/main-server/sub-server-4/proxy-server-4",
      target: "user/main-server/sub-server-1/proxy-server-1/commit-1",
    },
    // commit-2 to all node
    {
      source: "user/main-server/sub-server-1/proxy-server-1",
      target: "user/main-server/sub-server-2/proxy-server-2/commit-2",
    },
    {
      source: "user/main-server/sub-server-2/proxy-server-2",
      target: "user/main-server/sub-server-2/proxy-server-2/commit-2",
    },
    {
      source: "user/main-server/sub-server-3/proxy-server-3",
      target: "user/main-server/sub-server-2/proxy-server-2/commit-2",
    },
    {
      source: "user/main-server/sub-server-4/proxy-server-4",
      target: "user/main-server/sub-server-2/proxy-server-2/commit-2",
    },
    // commit-3 to all node
    {
      source: "user/main-server/sub-server-1/proxy-server-1",
      target: "user/main-server/sub-server-3/proxy-server-3/commit-3",
    },
    {
      source: "user/main-server/sub-server-2/proxy-server-2",
      target: "user/main-server/sub-server-3/proxy-server-3/commit-3",
    },
    {
      source: "user/main-server/sub-server-3/proxy-server-3",
      target: "user/main-server/sub-server-3/proxy-server-3/commit-3",
    },
    {
      source: "user/main-server/sub-server-4/proxy-server-4",
      target: "user/main-server/sub-server-3/proxy-server-3/commit-3",
    },
    // commit-4 to all node
    {
      source: "user/main-server/sub-server-1/proxy-server-1",
      target: "user/main-server/sub-server-4/proxy-server-4/commit-4",
    },
    {
      source: "user/main-server/sub-server-2/proxy-server-2",
      target: "user/main-server/sub-server-4/proxy-server-4/commit-4",
    },
    {
      source: "user/main-server/sub-server-3/proxy-server-3",
      target: "user/main-server/sub-server-4/proxy-server-4/commit-4",
    },
    {
      source: "user/main-server/sub-server-4/proxy-server-4",
      target: "user/main-server/sub-server-4/proxy-server-4/commit-4",
    },
    // reply to all node
    {
      source: "user/main-server/sub-server-1/proxy-server-1/commit-1",
      target: "user/main-server/sub-server-1/proxy-server-1/commit-1/reply",
    },
    {
      source: "user/main-server/sub-server-2/proxy-server-2/commit-2",
      target: "user/main-server/sub-server-1/proxy-server-1/commit-1/reply",
    },
    {
      source: "user/main-server/sub-server-3/proxy-server-3/commit-3",
      target: "user/main-server/sub-server-1/proxy-server-1/commit-1/reply",
    },
    {
      source: "user/main-server/sub-server-4/proxy-server-4/commit-4",
      target: "user/main-server/sub-server-1/proxy-server-1/commit-1/reply",
    },
  ],
};
export default treeData;
