import pkg from 'pg';
const { Pool } = pkg;

const connectDb = new Pool({
    user: 'postgres',     
    host: 'localhost',
    database: 'schooldb',
    password: 'user', 
    port: 5432,
  });

  export default connectDb;

