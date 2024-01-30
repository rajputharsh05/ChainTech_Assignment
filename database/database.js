import mongoose from "mongoose"

const ConnectToDataBase = async () => {
    try {

        const URL = `${process.env.DATABASE_URL}/${process.env.DATABASE_NAME}`;

        const DataBaseInstance = await mongoose.connect(URL);

        console.log("DataBase Connected !!");

    } catch ( error ) {

        console.log("Can't Connect to database" , error);

        process.exit(1);

    }
}




export default ConnectToDataBase;