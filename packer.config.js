// Override default packer settings and config using this file
module.exports = {
  // Add a reload delay before refreshing browser in ms, Shopify may need several seconds
  'network.reload': 2000,
  // Add additional entrypoint
  'entrypoints': {},
}
