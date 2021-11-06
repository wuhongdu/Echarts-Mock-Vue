const fs = require('fs');

module.exports = [
  {
    url: '/api/province/list',
    type: 'get',
    response: config => {
      let name = config.query.name;
      let data = fs.readFileSync(`src/maps/${name}.json`);
      if (data[0] === 0xEF && data[1] === 0xBB && data[2] === 0xBF) {
        data = data.slice(3);
    }
      return {
        code: 20000,
        data: data.toString('utf-8')
      }
    }
  }
]