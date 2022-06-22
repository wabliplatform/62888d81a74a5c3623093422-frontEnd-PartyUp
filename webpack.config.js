const path = require('path');

module.exports = {
  entry: {
	'HostParty' : './javascript/HostParty.js',
	'Home3' : './javascript/Home3.js',
	'IntroPage' : './javascript/IntroPage.js',
	'Admin' : './javascript/Admin.js',
	'PartyPage' : './javascript/PartyPage.js',
	'ManageParty' : './javascript/ManageParty.js',
},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    
  },
};