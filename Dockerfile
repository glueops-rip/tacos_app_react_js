FROM ghcr.io/antoniostaqueria/frontend:8dac501cbb8bdd6fcf213303bd663e7e4d660ade
WORKDIR /app
COPY . .
RUN npm ci --prefer-offline --only=production --silent
RUN npm run build
ENV NODE_ENV production
EXPOSE 3000
CMD [ "npm", "run", "start" ]
