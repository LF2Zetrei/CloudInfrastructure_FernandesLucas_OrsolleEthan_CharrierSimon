package com.pokedex;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@RestController
@RequestMapping("/api/pokemons")
@CrossOrigin(origins = "https://frontend-506788352665.europe-west1.run.app/")
public class PokemonController {
    @Autowired
    private PokemonRepository pokemonRepository;

    @GetMapping
    public List<Pokemon> getAllPokemons() {
        return pokemonRepository.findAll();
    }

    @GetMapping("/{name}")
    public Pokemon getPokemon(@PathVariable String name) {
        return pokemonRepository.findByName(name).orElse(null);
    }
}
