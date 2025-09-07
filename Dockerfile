# Use Nginx image
FROM nginx:alpine

# Copy your static site files (HTML, CSS, JS, images) to nginx folder
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
