
export const connectMongoDb = async (mongoose: any) => {
  
    let mongodbAddress = process.env.MONGO_URI;
    console.log(process.env);
    if (process.env.NODE_ENV === "LOCAL") {
      console.log("it is local");
    }
    await mongoose.connect(mongodbAddress); 
  }
  