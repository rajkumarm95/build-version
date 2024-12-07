# Base image
FROM node:20-alpine as builder

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project
COPY . .

# Build the application
RUN npm run build

# Expose application port
EXPOSE 3000

# Environment variables (optional)
ENV NODE_ENV=production
ENV PORT=3000

# Command to run the application
CMD ["node", "dist/main"]
