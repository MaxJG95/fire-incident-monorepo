# Use Node LTS
FROM node:20-alpine

# Working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy rest of the code 
COPY . .

# Expose Vite port
EXPOSE 5173

# run dev command
CMD ["npm", "run", "dev", "--", "--host"]
