import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, subject, message } = req.body as ContactFormData;
      
      // Validate the form data
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ message: 'All fields are required' });
      }
      
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ message: 'Invalid email format' });
      }
      
      // In a real application, you would:
      // 1. Send the email using a service like EmailJS, Nodemailer, SendGrid, etc.
      // 2. Store the contact submission in a database
      
      console.log('Contact form submission:', { name, email, subject, message });
      
      // Return success response
      return res.status(200).json({ 
        message: 'Your message has been sent successfully. I will get back to you soon!'
      });
    } catch (error) {
      console.error('Error processing contact form:', error);
      return res.status(500).json({ message: 'Failed to send message. Please try again later.' });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
