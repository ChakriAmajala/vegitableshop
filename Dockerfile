FROM nginx:alpine

# Remove default nginx html
RUN rm -rf /usr/share/nginx/html/*

# Copy files from freshveg folder into nginx html
COPY freshveg/ /usr/share/nginx/html/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
