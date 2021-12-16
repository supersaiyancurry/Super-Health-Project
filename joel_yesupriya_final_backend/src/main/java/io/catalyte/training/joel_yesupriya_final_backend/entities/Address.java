package io.catalyte.training.joel_yesupriya_final_backend.entities;

import javax.persistence.*;
import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import java.util.Set;

/**Embeddable makes Address be considered part of Patient*/
@Embeddable
public class Address {
    /**
     * Can't be null, otherwise an error will occur.
     */
    @NotNull
    /**Can't be a blank string, otherwise an error will occur.*/
    @NotBlank
    private String street;
    @NotNull
    @NotBlank
    private String city;
    /**
     * Using RegEx to make sure the State provided is a valid US state (initials only).
     */
    @Pattern(regexp = "^(([Aa][EeLlKkSsZzRr])|([Cc][AaOoTt])|([Dd][EeCc])|([Ff][MmLl])|([Gg][AaUu])|([Hh][Ii])|([Ii][DdLlNnAa])|([Kk][SsYy])|([Ll][Aa])|([Mm][EeHhDdAaIiNnSsOoTt])|([Nn][EeVvHhJjMmYyCcDd])|([Mm][Pp])|([Oo][HhKkRr])|([Pp][WwAaRr])|([Rr][Ii])|([Ss][CcDd])|([Tt][NnXx])|([Uu][Tt])|([Vv][TtIiAa])|([Ww][AaVvIiYy]))$", message = "Invalid state. Use state initials.")
    private String state;
    /**
     * Using RegEx to make sure the Zip Code is a valid Zip Code (5 digits or 9 digits with hyphen only).
     */
    @Pattern(regexp = "^\\d{5}(-\\d{4})?$", message = "Invalid postal code. Must follow one of these 2 formats: 20906 or 32940-3452")

    private String postal;

    public Address() {}

    public Address(String street, String city, String state, String postal) {
        this.street = street;
        this.city = city;
        this.state = state;
        this.postal = postal;
    }

    /**
     * Gets the street of the address.
     */
    public String getStreet() {
        return street;
    }

    /**
     * Sets the street of the address
     */
    public void setStreet(String street) {
        this.street = street;
    }

    /**
     * gets the city of the address
     */
    public String getCity() {
        return city;
    }

    /**
     * sets the city of the address
     */
    public void setCity(String city) {
        this.city = city;
    }

    /**
     * gets the state of the address
     */
    public String getState() {
        return state;
    }

    /**
     * sets the state of the address
     */
    public void setState(String state) {
        this.state = state;
    }

    /**
     * gets the zip code of the address
     */
    public String getPostal() {
        return postal;
    }

    /**
     * sets the zip code of the address
     */
    public void setPostal(String postal) {
        this.postal = postal;
    }
}