import mongoose from 'mongoose';

const Connection = async(USERNAME, PASSWORD) => {
    const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-qxfjzry-shard-00-00.s1ivebr.mongodb.net:27017,ac-qxfjzry-shard-00-01.s1ivebr.mongodb.net:27017,ac-qxfjzry-shard-00-02.s1ivebr.mongodb.net:27017/?ssl=true&replicaSet=atlas-phq9qm-shard-0&authSource=admin&retryWrites=true&w=majority`;   
    try {
        await mongoose.connect(URL, {useNewUrlParser: true}); 
        console.log('Database connected Successfully');
    }catch (error) {
        console.log('Error while connecting to the database', error);
    }
}

export default Connection;