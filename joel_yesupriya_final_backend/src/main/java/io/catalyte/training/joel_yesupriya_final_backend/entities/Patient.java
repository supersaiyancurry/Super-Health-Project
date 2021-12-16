package io.catalyte.training.joel_yesupriya_final_backend.entities;

import javax.persistence.*;
import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import java.util.Set;

/**Makes the following an Entity.*/
@Entity
public class Patient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    /**
     * Can't be null, otherwise an error will occur.
     */
    @NotNull
    /**Can't be a blank string, otherwise an error will occur.*/
    @NotBlank
    @Pattern(regexp = "^[a-zA-Z](?:[ '.\\-a-zA-Z]*[a-zA-Z])?$", message = "Names must be alphabetic- hyphens and apostrophes are allowed")
    private String firstName;
    @NotBlank
    @NotNull
    @Pattern(regexp = "^[a-zA-Z](?:[ '.\\-a-zA-Z]*[a-zA-Z])?$", message = "Names must be alphabetic- hyphens and apostrophes are allowed")
    private String lastName;
    /**
     * SSNs can't be repeated in the database
     */
    @Column(unique = true)
    @NotNull
    @NotBlank
    @Pattern(regexp = "^\\d{3}-\\d{2}-\\d{4}$", message = "SSN must meet this format: 123-45-6789")
    private String ssn;
    /**
     * The address must be valid and not null, otherwise an error will occur
     */
    @Valid
    @NotNull
    private Address address;

    @NotNull
    private Integer age;

    @NotNull
    private Integer height;

    @NotNull
    private Integer weight;

    @NotNull
    private String insurance;

    @NotNull
    @Pattern(regexp = "^(male|female|other|Male|Female|Other|MALE|FEMALE|OTHER)$", message = "Gender must be either 'male', 'female', or 'other'.")
    private String gender;


    /**
     * Links patient to encounter
     */

    @OneToMany(mappedBy = "patient", cascade = CascadeType.ALL)
    private Set<Encounter> encounters;

    public Patient() {
    }

    public Patient(String firstName, String lastName, String ssn, Address address, Integer age, Integer height, Integer weight, String insurance, String gender) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.ssn = ssn;
        this.address = address;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.insurance = insurance;
        this.gender = gender;
    }

    /*finished constructor???*/

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getSsn() {
        return ssn;
    }

    public void setSsn(String ssn) {
        this.ssn = ssn;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public Integer getHeight() {
        return height;
    }

    public void setHeight(Integer height) {
        this.height = height;
    }

    public Integer getWeight() {
        return weight;
    }

    public void setWeight(Integer weight) {
        this.weight = weight;
    }

    public String getInsurance() {
        return insurance;
    }

    public void setInsurance(String insurance) {
        this.insurance = insurance;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    @Override
    public String toString() {
        return "Patient{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", ssn='" + ssn + '\'' +
                ", address=" + address +
                ", age=" + age +
                ", height=" + height +
                ", weight=" + weight +
                ", insurance='" + insurance + '\'' +
                ", gender='" + gender + '\'' +
                ", encounters=" + encounters +
                '}';
    }
}