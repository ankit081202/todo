import mongoose from "mongoose";
mongoose.set('strictQuery', false);
export const connectDatabse = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URI);
    console.log(`mongo db connected: ${connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
