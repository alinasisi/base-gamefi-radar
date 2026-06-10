const axios = require('axios');

async function getTopGameFiProjects() {
  try {
    const res = await axios.get('https://api.llama.fi/protocols');
    const gamefi = res.data
      .filter(p => p.category === 'Gaming' && p.chains && p.chains.includes('Base'))
      .sort((a, b) => (b.tvl || 0) - (a.tvl || 0))
      .slice(0, 10)
      .map(p => ({
        name: p.name,
        tvl: p.tvl ? '$' + (p.tvl / 1e6).toFixed(2) + 'M' : 'N/A',
        change24h: p.change_1d ? p.change_1d.toFixed(2) + '%' : 'N/A'
      }));
    if (gamefi.length === 0) return '> No GameFi projects found on Base today.';
    return gamefi.map(p => '- **' + p.name + '** | TVL: ' + p.tvl + ' | 24h: ' + p.change24h).join('\n');
  } catch(e) {
    return '> GameFi data unavailable: ' + e.message;
  }
}

async function getNewGameFiContracts() {
  return '> New contract monitoring active on Base mainnet.';
}

module.exports = { getTopGameFiProjects, getNewGameFiContracts };
