# Build stage
FROM node:18-alpine as build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Ensure the images directory exists
RUN mkdir -p frontend/src/assets/images

# Build the app
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy built files from build stage - updated to match your webpack output path
COPY --from=build /app/frontend/public/bundle.js /usr/share/nginx/html/

# Copy your index.html if it exists in frontend/public
COPY --from=build /app/frontend/public/index.html /usr/share/nginx/html/

# Copy static assets
COPY --from=build /app/frontend/src/assets/images /usr/share/nginx/html/assets/images

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]