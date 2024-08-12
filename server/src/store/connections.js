import { MongoClient } from "mongodb";

class MongoConnect {
  constructor(mongostring) {
    this.uri = mongostring;
    this.client = new MongoClient(this.uri, {
      maxPoolSize: 6,
      maxIdleTimeMS: 10000,
    });
  }
  async connect() {
    return await this.client.connect();
  }
  async close() {
    return await this.client.close();
  }
  dataset(collection) {
    return this.client.db(process.env.DB).collection(collection);
  }

  static dbConnect(uri) {
    if (!MongoConnect.instance) {
      MongoConnect.instance = new MongoConnect(uri);
    }
    return MongoConnect.instance;
  }
}

export const dbConnect = (uri) => MongoConnect.dbConnect(uri);
