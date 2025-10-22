# Étape 1 : Build de l'application React
FROM node:22-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Étape 2 : Image de production avec Nginx
FROM nginx:alpine

# Supprime la config Nginx par défaut
RUN rm /etc/nginx/conf.d/default.conf

# Copier ta config personnalisée
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copier le build React
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
