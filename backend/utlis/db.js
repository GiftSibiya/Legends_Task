import mongoose from "mongoose";

const dbCon = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://sibiyabobo:b0b0@cluster0.xe42gpm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("Mongodb is conntected");
  } catch (error) {
    console.log(error);
  }
};

export default dbCon;
