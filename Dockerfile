FROM php:8.2-apache

# Enable Apache modules (if needed)
RUN a2enmod rewrite

# Copy your PHP source code into the container
COPY . /var/www/html/

# Set working directory
WORKDIR /var/www/html

# Optional: install additional PHP extensions if your project needs (e.g. mysqli, pdo, gd)
# RUN docker-php-ext-install mysqli pdo pdo_mysql gd

# Set permissions (optional, adjust if you need specific permissions)
RUN chown -R www-data:www-data /var/www/html

# Expose port 80
EXPOSE 80
