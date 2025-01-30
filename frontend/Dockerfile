# Étape 1 : construire l'application
FROM node:18-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Étape 2 : servir l'application avec Nginx
FROM nginx:alpine

# Supprimer la config par défaut si besoin
#RUN rm /etc/nginx/conf.d/default.conf

# Copier ta config Nginx personnalisée (optionnel)
# COPY nginx.conf /etc/nginx/conf.d

# Copier les fichiers buildés dans /usr/share/nginx/html
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
