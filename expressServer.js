const http = require('http');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');

class ExpressServer {
    constructor(port) {
      this.port = port;
      this.app = express();
      this.setupMiddleware();
    }
  
    setupMiddleware() {
      this.app.use(cors());
      this.app.use(bodyParser.json({ limit: '14MB' }));
      this.app.use(express.json());
      this.app.use(express.urlencoded({ extended: false }));
      this.app.use(cookieParser());
      this.app.use(express.static(__dirname));
      this.app.get('/', (req, res) => res.sendFile(path.join(__dirname,'html','HostParty.html')));
			this.app.get('/HostParty', (req, res) => res.sendFile(path.join(__dirname,'html','HostParty.html')));
			this.app.get('/HostParty/:id', (req, res) => res.sendFile(path.join(__dirname,'html','HostParty.html')));
			this.app.get('/Home3', (req, res) => res.sendFile(path.join(__dirname,'html','Home3.html')));
			this.app.get('/Home3/:id', (req, res) => res.sendFile(path.join(__dirname,'html','Home3.html')));
			this.app.get('/IntroPage', (req, res) => res.sendFile(path.join(__dirname,'html','IntroPage.html')));
			this.app.get('/IntroPage/:id', (req, res) => res.sendFile(path.join(__dirname,'html','IntroPage.html')));
			this.app.get('/Admin', (req, res) => res.sendFile(path.join(__dirname,'html','Admin.html')));
			this.app.get('/Admin/:id', (req, res) => res.sendFile(path.join(__dirname,'html','Admin.html')));
			this.app.get('/PartyPage', (req, res) => res.sendFile(path.join(__dirname,'html','PartyPage.html')));
			this.app.get('/PartyPage/:id', (req, res) => res.sendFile(path.join(__dirname,'html','PartyPage.html')));
			this.app.get('/ManageParty', (req, res) => res.sendFile(path.join(__dirname,'html','ManageParty.html')));
			this.app.get('/ManageParty/:id', (req, res) => res.sendFile(path.join(__dirname,'html','ManageParty.html')));
			
    }
  
    launch() {
          http.createServer(this.app).listen(this.port);
          console.log(`Listening on port ${this.port}`);
    }
  
  
    async close() {
      if (this.server !== undefined) {
        await this.server.close();
        console.log(`Server on port ${this.port} shut down`);
      }
    }
  }
  
  module.exports = ExpressServer;