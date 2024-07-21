#===========================
#Delta Console Docker Image Config
#===========================
FROM nginx:latest
LABEL   authors="SkyeRangerDelta" \
        version="1.0.0" \
        description="Delta Console Dashboard" \
        vendor="Planetary Dynamics" \
        org.opencontainers.image.source="https://github.com/SkyeRangerDelta/Delta-Console" \
        org.opencontainers.image.description="The Delta Console Dashboard"

#===========================
#Setup environment
#===========================
WORKDIR /Delta-Console

# Copy static web data from dist into nginx
COPY ./dist/delta-console/browser /usr/share/nginx/html
