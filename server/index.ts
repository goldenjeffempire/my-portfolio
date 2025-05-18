import express, { type Express } from "express";
import { createServer, type Server } from "http";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
// Import your Vite setup if you have it
// import { setupVite } from "./vite";  // uncomment if you have vite setup

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Register your API routes here
export async function registerRoutes(app: Express): Promise<Server> {
  app.use(express.json()); // <-- VERY IMPORTANT to parse JSON body

  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, message } = req.body as ContactFormData;

      if (!name || !email || !subject || !message) {
        return res.status(400).json({ message: "All fields are required" });
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Invalid email format" });
      }

      console.log("Contact form submission:", { name, email, subject, message });

      return res.status(200).json({
        message: "Your message has been sent successfully. I will get back to you soon!",
      });
    } catch (error) {
      console.error("Error processing contact form:", error);
      return res.status(500).json({ message: "Failed to send message. Please try again later." });
    }
  });

  // Create HTTP server from Express app
  const httpServer = createServer(app);

  console.log("Express routes registered successfully");
  return httpServer;
}

// ESM hack to simulate require.main === module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

if (__filename === process.argv[1]) {
  (async () => {
    const app = express();

    // Register API routes and get server
    const server = await registerRoutes(app);

    // Optional: Setup Vite middleware if in dev mode
    if (process.env.NODE_ENV === "development") {
      // await setupVite(app, server);  // uncomment if you have vite setup
    }

    const PORT = Number(process.env.PORT) || 3000;
    server.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT} [${process.env.NODE_ENV ?? "production"}]`);
    });
  })().catch((err) => {
    console.error("Failed to start server:", err);
    process.exit(1);
  });
}
