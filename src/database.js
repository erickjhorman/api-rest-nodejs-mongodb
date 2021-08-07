import mongoose from "mongoose";

(async () => {
    const db = await mongoose.connect('mongodb://localhost/taskapi')
    console.log(db.connection.name);
})();