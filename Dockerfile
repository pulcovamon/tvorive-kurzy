# Use an official Node runtime as a parent image
FROM node:alpine as build

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the Vite app
RUN npm run build

# Use an official Nginx runtime as a parent image
FROM nginx:alpine

# Copy the Nginx configuration to the container
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Copy the Vite app build files to the container (output from `npm run build`)
COPY --from=build /app/dist /usr/share/nginx/html

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
