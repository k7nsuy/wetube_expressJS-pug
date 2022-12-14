import "dotenv/config"
import "./db" // import mongodb
import "./models/video" // import video models
import "./models/user"
import app from "./server"

const port = 3001

const handleListening = () => console.log(`✅ Server listening on port ${port} 🚀`);
app.listen(port, handleListening) // handleListening => callback function