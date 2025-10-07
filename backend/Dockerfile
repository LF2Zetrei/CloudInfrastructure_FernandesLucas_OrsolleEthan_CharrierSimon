# On va proceder en multi-stage build.
# Cela permettra à l'image finale de ne contenir aucune trace
# des compilateurs et outils de dev, la rendant plus légère.

# Etape 1 : le build
# On part de l'image officielle de gradle
FROM gradle:7.6-jdk17-alpine AS builder

# On se place dans le répertoire de travail
WORKDIR /app

# On copie notre backend dans le conteneur
COPY . .

# On rend le script de compilation executable
RUN chmod +x gradlew

# On compile l'applis
RUN ./gradlew clean build --no-daemon

RUN ls -R /app/build

# On passe à une nouvelle image, celle qui recevra notre bdd
FROM eclipse-temurin:17-jre-alpine

WORKDIR /app

# On expose son port
EXPOSE 8080

# On récupère le jar compilé
COPY --from=builder /app/build/*.jar app.jar

# On démarre ensuite l'application
CMD ["java", "-jar", "app.jar"]