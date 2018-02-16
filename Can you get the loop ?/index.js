const loop_size = node => {
  const nodes = [];

  while (node && !nodes.includes(node)) {
    nodes.push(node);
    node = node.next;
  }
  return nodes.slice(nodes.indexOf(node)).length;
};
