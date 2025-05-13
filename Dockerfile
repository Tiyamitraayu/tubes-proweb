FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Build for production
RUN npm run build

# Use Vite's preview server to serve the built app
EXPOSE 4173
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0"] 