FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm ci --prefer-offline --only=production --silent
RUN npm run build
ENV NODE_ENV production
EXPOSE 3000
CMD [ "npm", "run", "start" ]
