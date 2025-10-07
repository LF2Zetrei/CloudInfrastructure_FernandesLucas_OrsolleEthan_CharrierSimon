package com.pokedex;

import jakarta.persistence.criteria.CriteriaBuilder;

import java.util.List;
import java.util.Map;

public class PokemonResponse {
    private int count;
    private String next;
    private String previous;
    private List<PokemonResult> results;

    public List<PokemonResult> getResults() {
        return results;
    }

    public static class PokemonResult {
        private int id;
        private String name;
        private String imageUrl;
        private List<Map<String, Integer>> stats;
        private List<Map<String, String>> types;

        public int getId() {
            return id;
        }

        public void setId(int id) {
            this.id = id;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public String getImageUrl() {
            return imageUrl;
        }

        public void setImageUrl(String imageUrl) {
            this.imageUrl = imageUrl;
        }

        public List<Map<String, Integer>> getStats() {
            return stats;
        }

        public void setStats(List<Map<String, Integer>> stats) {
            this.stats = stats;
        }

        public List<Map<String, String>> getTypes() {
            return types;
        }

        public void setTypes(List<Map<String, String>> types) {
            this.types = types;
        }
    }
}
