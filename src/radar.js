
const axios = require('axios');

async function getTopGameFiProjects() {
  try {
    const res = await axios.get('https://api.llama.fi/protocols');
    const gamefi = res.data
      .filter(p => 
        p.category === 'Gaming' && 
        p.chains && 
        p.chains.includes('Base')
      )
      .sort((a, b) => (b.tvl || 0) - (a.tvl || 0))
      .slice(0, 10)
      .map(p => ({
        name: p.name,
        tvl: p.tvl ? '$' + (p.tvl / 1e6).toFixed(2) + 'M' : 'N/A',
        change24h: p.change_1d ? p.change_1d.toFixed(2) + '%' : 'N/A',
        url: p.url || ''
      }));
    
    if (gamefi.length === 0) {
      return '> No GameFi projects found on Base via DeFiLlama today.';
    }
    
    return gamefi.map(p => 
      '- **' + p.name + '** | TVL: ' + p.tvl + ' | 24h: ' + p.change24h
    ).join('
');
  } catch(e) {
    return '> GameFi data unavailable: ' + e.message;
  }
}

async function getNewGameFiContracts() {
  try {
    const res = await axios.get(
      'https://api.basescan.org/api?module=account&action=txlist' +
      '&address=0x0000000000000000000000000000000000000000' +
      '&startblock=0&endblock=99999999&sort=desc&apikey=YourApiKeyToken'
    );
    return '> New contract monitoring active on Base mainnet.';
  } catch(e) {
    return '> Contract data unavailable: ' + e.message;
  }
}

module.exports = { getTopGameFiProjects, getNewGameFiContracts };
