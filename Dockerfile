FROM node:20-alpine@sha256:ebdb58b0d966033381e8eda11dad66a70dc22df2e1e36b5050fbd547299addae 
WORKDIR /app
COPY . .
RUN npm ci 
RUN npm run build
ENV NODE_ENV production
EXPOSE 3000
CMD [ "npm", "run", "start" ]