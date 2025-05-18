# Step 1: Build the React app
FROM node:16 AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

# Step 2: Serve the app using a simple server (like serve)
FROM node:16

WORKDIR /app

RUN npm install -g serve

COPY --from=build /app/build ./build

CMD ["serve", "-s", "build"]

EXPOSE 3000
