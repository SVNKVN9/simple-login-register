import mongoose from "mongoose";

const connectDB = async () => {
    await mongoose.connect("mongodb://localhost:27017/test_1")

    console.log("Connected to MongoDB")
}

export default connectDB