package com.pokedex;

import com.pokedex.PokemonRepository;
import com.pokedex.PokemonAPIService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseInitializer implements CommandLineRunner {

    private final PokemonRepository repository;
    private final PokemonAPIService apiService;

    public DatabaseInitializer(PokemonRepository repository, PokemonAPIService apiService) {
        this.repository = repository;
        this.apiService = apiService;
    }

    @Override
    public void run(String... args) {
        long count = repository.count();
        if (count == 0) {
            System.out.println("➡ Base vide, initialisation via API...");
            apiService.fetchAndSavePokemons();
        } else {
            System.out.println("✅ Base déjà initialisée (" + count + " pokémons présents).");
        }
    }
}
