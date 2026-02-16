import mongoose from 'mongoose';
import 'dotenv/config';

async function connectToDb() {
    await mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log("Database Connection was successful.");
        })
        .catch(e => {
            console.log("Database connection was unsuccesful", e);
        })
}

export {connectToDb};