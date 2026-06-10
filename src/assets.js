const axios = require('axios');

async function getGameFiNFTTrends() {
  try {
    const res = await axios.get(
      'https://api.reservoir.tools/collections/v7?chain=base&sortBy=1DayVolume&limit=5',
      { headers: { 'x-api-key': 'demo' } }
    );
    const collections = res.data.collections || [];
    if (collections.length === 0) return '> No NFT data available today.';
    return collections.map(function(c) {
      const vol = c.volume && c.volume['1day'];
      const floor = c.floorAsk && c.floorAsk.price && c.floorAsk.price.amount && c.floorAsk.price.amount.native;
      return '- **' + c.name + '** | Floor: ' + (floor ? floor.toFixed(4) + ' ETH' : 'N/A') + ' | 24h Vol: ' + (vol ? vol.toFixed(2) + ' ETH' : 'N/A');
    }).join('\n');
  } catch(e) {
    return '> NFT data unavailable: ' + e.message;
  }
}

async function getWeeklyDigest(analysis) {
  const day = new Date().getDay();
  if (day !== 0) return '';
  return '## Weekly GameFi Digest\n\n' + analysis;
}

module.exports = { getGameFiNFTTrends, getWeeklyDigest };
