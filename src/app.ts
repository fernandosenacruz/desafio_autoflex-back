import express from 'express';
import router from './router';
import cors from 'cors';

class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.express.use(cors());
    this.middlewares();
    this.routes();
  }

  private middlewares(): void {
    this.express.use(express.json());
  }

  private routes() {
    this.express.use(router);
  }
}

export default App;
