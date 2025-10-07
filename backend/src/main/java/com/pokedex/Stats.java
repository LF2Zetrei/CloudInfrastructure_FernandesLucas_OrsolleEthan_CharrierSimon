package com.pokedex;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Stats {
    @JsonProperty("HP")
    private int HP;
    private int attack;
    private int defense;

    public int getDefense() {
        return defense;
    }

    public void setDefense(int defence) {
        this.defense = defence;
    }

    public int getAttack() {
        return attack;
    }

    public void setAttack(int attack) {
        this.attack = attack;
    }

    public int getHp() {
        return HP;
    }

    public void setHp(int hp) {
        this.HP = hp;
    }

}
