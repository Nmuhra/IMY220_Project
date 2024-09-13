# Step 1: Use an official Node.js image as the base image
FROM node:18-alpine

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the project files into the container
COPY . .

# Step 6: Build the React app for production
RUN npm run build

# Step 7: Use a lightweight web server to serve the React app
# In this case, we are using `nginx` to serve the static files
FROM nginx:alpine

# Step 8: Copy the build folder to the nginx html directory
COPY --from=0 /app/build /usr/share/nginx/html

# Step 9: Expose the port the app will run on
EXPOSE 80

# Step 10: Start nginx server
CMD ["nginx", "-g", "daemon off;"]
