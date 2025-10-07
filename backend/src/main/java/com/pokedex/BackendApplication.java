package com.pokedex;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

    // 🧠 Ce bean s’exécutera automatiquement au démarrage
    @Bean
    public CommandLineRunner initDatabase(PokemonRepository repository, PokemonAPIService apiService) {
        return args -> {
            long count = repository.count();

            if (count == 0) {
                System.out.println("➡ Base vide, initialisation des données depuis l'API...");
                apiService.fetchAndSavePokemons();
            } else {
                System.out.println("✅ Base déjà remplie (" + count + " pokémons détectés).");
            }
        };
    }
}