import mongoose from 'mongoose'

export const InitDatabase = (uri: string | any) => {
    mongoose.connect(uri , {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    ).then(() => console.warn("Database connection sucessfull"))
      .catch((err) => console.error(`Database connection error: ${err}`));
}