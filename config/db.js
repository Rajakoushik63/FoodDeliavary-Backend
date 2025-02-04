import mogoose from "mongoose";

export const connectDB = async () => {
  await mogoose
    .connect(
      "mongodb+srv://rajakoushik8008:ogg4SW66r4JzeJei@cluster0.zmmk3.mongodb.net/foodDelivary-Backend"
    )
    .then(() => console.log("DB Connected"));
};
