package com.pokedex;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Type {
    private String name;
    private String image;

    public String getName() {
        return name;
    }

    public void setName(String nomType) {
        this.name = nomType;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    @Override
    public String toString() {
        return name;
    }
}
