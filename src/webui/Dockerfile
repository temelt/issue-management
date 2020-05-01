# BUILD STAGE
FROM node as node

WORKDIR /issuemanagement

COPY . .

RUN npm install
RUN npm install -s node-sass
RUN npm run build


# DEPLOYMENT STAGE
FROM nginx
COPY --from=node /issuemanagement/dist /usr/share/nginx/html
