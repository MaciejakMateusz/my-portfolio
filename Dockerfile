FROM node:18-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

ARG VITE_PORTFOLIO_REST
ARG VITE_OPEN_AQ_KEY
ARG VITE_OPEN_AQ_URL

ENV VITE_PORTFOLIO_REST=${VITE_PORTFOLIO_REST}
ENV VITE_OPEN_AQ_KEY=${VITE_OPEN_AQ_KEY}
ENV VITE_OPEN_AQ_URL=${VITE_OPEN_AQ_URL}

RUN npm run build

FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]