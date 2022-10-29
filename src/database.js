import { connect } from "mongoose";

const { MONGODB_DB, MONGODB_HOST, MONGODB_USER, MONGODB_PASS } = process.env;

const MONGODB_URI = `mongodb://${MONGODB_USER}:${MONGODB_PASS}@${MONGODB_HOST}/${MONGODB_DB}`;

export async function connectToDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("Database connected successfully");
  } catch (error) {
    console.log(error);
  }
}
