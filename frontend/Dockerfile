# Use the latest version of Node.js
FROM node:22-alpine 

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json 
COPY package*.json ./

# Install dependencies
RUN npm install 

# Copy the rest of the app
COPY . .

# Expose on the port 3000
EXPOSE 3000

# Define the commande to run the app
CMD ["npm", "start"]