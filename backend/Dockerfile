# Use Node LTS
FROM node:20-alpine

# Working Directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the code 
COPY . .

# Expose port
EXPOSE 4000

# start command
CMD ["npm", "start"]
