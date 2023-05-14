FROM node:18-alpine

# Set the working directory for your application within the container
WORKDIR /app

COPY package*.json ./

RUN npm install

# Copy the rest of your application code to the container.
COPY . .

EXPOSE 3111

CMD ["npm", "start"]

