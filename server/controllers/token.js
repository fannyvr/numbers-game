// 'use strict'

// const axios = require('axios');

// module.exports.token = function*(next) {
//   let queryString = '?description=' +this.params.keywords
//   if (this.params.city){
//     queryString+='&location=' + this.params.city
//   }
//   console.log('queryString', queryString);
//   const jobs = yield axios.get('https://jobs.github.com/positions.json'+queryString);
//   this.body = jobs;
//   this.status = 200;
// };
