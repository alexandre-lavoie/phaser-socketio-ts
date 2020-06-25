# Build
FROM node:14 as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY . /app
RUN npm ci --silent
RUN npm run build

# Production
FROM node:14
WORKDIR /app
COPY --from=build /app/build /app
COPY --from=build /app/node_modules /app/node_modules
EXPOSE 80
CMD ["node", "/app/server/index.js"]