const axios = require('axios');

async function getHackathonAlerts() {
  try {
    const res = await axios.get('https://ethglobal.com/events.json');
    const upcoming = res.data
      .filter(function(e) { return new Date(e.startDate) > new Date(); })
      .slice(0, 3)
      .map(function(e) { return '- **' + e.name + '** | ' + e.startDate; });
    return upcoming.length > 0 ? upcoming.join('\n') : '> No upcoming hackathons found.';
  } catch(e) {
    return '> Hackathon data unavailable: ' + e.message;
  }
}

async function getGrantAlerts() {
  return '- **Base Ecosystem Fund** | Open | base.org/grants\n- **ETHGlobal Prizes** | Per hackathon | ethglobal.com\n- **Talent Protocol Rewards** | Monthly | talent.app';
}

module.exports = { getHackathonAlerts, getGrantAlerts };
