FROM node:18-alpine@sha256:c0ec76209d4ac70d67aa611a85196999a8d71e01945c8657f48142369bb27e96 
WORKDIR /app
COPY . .
RUN npm ci 
RUN npm run build
ENV NODE_ENV production
EXPOSE 3000
CMD [ "npm", "run", "start" ]