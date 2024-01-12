import { connect } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const url = process.env.MONGO_URI

const connection = () => {
    return connect(url)
}

export default connection;
 