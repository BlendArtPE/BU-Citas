import mongoose from 'mongoose'

const URI = 'mongodb://127.0.0.1:27017'
const db = '/citasMedicas'

mongoose.connect(URI + db)

export default mongoose