# Étape 1 : Build du JAR avec Gradle
FROM gradle:7.6-jdk17-alpine AS builder
WORKDIR /app

# Copier uniquement les fichiers de configuration pour bénéficier du cache Docker
COPY build.gradle settings.gradle gradlew ./
COPY gradle ./gradle

# Télécharger les dépendances (meilleur cache)
RUN ./gradlew dependencies --no-daemon || true

# Copier le reste du code source
COPY . .

# Compiler sans les tests
RUN ./gradlew clean bootJar -x test --no-daemon

# Étape 2 : Image d'exécution
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app

# Exposer le port que Spring Boot utilise par défaut
EXPOSE 8080

# Copier le jar compilé depuis l'étape précédente
COPY --from=builder /app/build/libs/*.jar app.jar

# Commande de démarrage
ENTRYPOINT ["java", "-jar", "/app/app.jar"]
