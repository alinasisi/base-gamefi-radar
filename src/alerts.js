
const axios = require('axios');

async function getHackathonAlerts() {
  try {
    const res = await axios.get('https://ethglobal.com/events.json');
    const upcoming = res.data
      .filter(e => new Date(e.startDate) > new Date())
      .slice(0, 3)
      .map(e => '- 🏆 **' + e.name + '** | ' + e.startDate + ' | ' + (e.url || ''));
    return upcoming.length > 0 ? upcoming.join('
') : '> No upcoming hackathons found.';
  } catch(e) {
    return '> Hackathon data unavailable: ' + e.message;
  }
}

async function getGrantAlerts() {
  return `- 🎯 **Base Ecosystem Fund** | Open | [base.org/grants](https://base.org/grants)
- 🎯 **ETHGlobal Prizes** | Per hackathon | [ethglobal.com](https://ethglobal.com)
- 🎯 **Talent Protocol Rewards** | Monthly | [talent.app](https://talent.app)`;
}

module.exports = { getHackathonAlerts, getGrantAlerts };
