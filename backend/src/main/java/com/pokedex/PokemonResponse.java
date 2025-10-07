package com.pokedex;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class PokemonResponse {

    private String name;
    private String image;
    private List<Type> apiTypes;
    private Stats stats;
    private List<Evolution> apiEvolutions;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public List<Type> getApiTypes() {
        return apiTypes;
    }

    public void setApiTypes(List<Type> apiTypes) {
        this.apiTypes = apiTypes;
    }

    public Stats getStats() {
        return stats;
    }

    public void setStats(Stats apiStats) {
        this.stats = apiStats;
    }

    public List<Evolution> getApiEvolutions() {
        return apiEvolutions;
    }

    public void setApiEvolutions(List<Evolution> apiEvolutions) {
        this.apiEvolutions = apiEvolutions;
    }
}
