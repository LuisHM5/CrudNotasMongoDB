import { connect } from "mongoose";

const { MONGODB_DB, MONGODB_HOST, MONGODB_USER, MONGODB_PASS } = process.env;

const MONGODB_URI = `mongodb://${MONGODB_USER}:${MONGODB_PASS}@${MONGODB_HOST}/${MONGODB_DB}?authSource=admin`;

export async function connectToDB() {
  try {
    await connect(MONGODB_URI);

    console.log("Database connected successfully");
  } catch (error) {
    console.log(error);
  }
}
