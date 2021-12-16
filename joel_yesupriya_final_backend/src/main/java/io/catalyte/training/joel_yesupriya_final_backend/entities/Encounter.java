package io.catalyte.training.joel_yesupriya_final_backend.entities;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import java.util.Date;

/**Makes the following an Entity.*/
@Entity
/**This line is required to stop naming conflict bug*/
@Table(name = "\"encounter\"")
public class Encounter {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String notes;
    /**Can't be null, otherwise an error will occur.*/
    @NotNull
    /**Can't be a blank string, otherwise an error will occur.*/
    @NotBlank
    @Pattern(regexp = "^[a-zA-Z][0-9][a-zA-Z] [0-9][a-zA-Z][0-9]$", message = "Invalid visit code. Must meet this format: letter, number, letter, space, number, letter, number")
    private String visitCode;
    @NotNull
    @NotBlank
    private String provider;
    @NotNull
    @NotBlank
    @Pattern(regexp = "^\\d{3}.\\d{3}.\\d{3}-\\d{2}$", message = "Invalid billing code. Must meet this (numeric) format: 123.456.789-12")
    private String billingCode;
    @NotNull
    @NotBlank
    @Pattern(regexp = "^[a-zA-Z][0-9][0-9]$", message = "Invalid ICD10. Must be 1 letter followed by 2 numbers: A10")
    private String icd10;
    @NotNull
    private Float totalCost;
    @NotNull
    private Float copay;
    @NotNull
    @NotBlank
    private String chiefComplaint;
    private Integer pulse;
    private Integer systolic;
    private Integer diastolic;
    @NotNull
    private String date;

    /**Linking encounter to patient*/
    @NotNull
    @ManyToOne
    @JoinColumn
    private Patient patient;

    public Encounter() {
    }

    public Encounter(String notes, String visitCode, String provider, String billingCode, String icd10, Float totalCost, Float copay, String chiefComplaint, Integer pulse, Integer systolic, Integer diastolic, String date, Patient patient) {
        this.notes = notes;
        this.visitCode = visitCode;
        this.provider = provider;
        this.billingCode = billingCode;
        this.icd10 = icd10;
        this.totalCost = totalCost;
        this.copay = copay;
        this.chiefComplaint = chiefComplaint;
        this.pulse = pulse;
        this.systolic = systolic;
        this.diastolic = diastolic;
        this.date = date;
        this.patient = patient;
    }
/**Gets the id of the encounter*/
    public Long getId() {
        return id;
    }
    /**Sets the id of the encounter*/
    public void setId(Long id) {
        this.id = id;
    }
    /**Gets the notes of the encounter*/
    public String getNotes() {
        return notes;
    }
    /**Sets the notes of the encounter*/
    public void setNotes(String notes) {
        this.notes = notes;
    }
    /**Gets the visit code of the encounter*/
    public String getVisitCode() {
        return visitCode;
    }
    /**Sets the visit code of the encounter*/
    public void setVisitCode(String visitCode) {
        this.visitCode = visitCode;
    }
    /**Gets the provider of the encounter*/
    public String getProvider() {
        return provider;
    }
    /**Sets the provider of the encounter*/
    public void setProvider(String provider) {
        this.provider = provider;
    }
    /**Gets the billing code of the encounter*/
    public String getBillingCode() {
        return billingCode;
    }
    /**Sets the billing code of the encounter*/
    public void setBillingCode(String billingCode) {
        this.billingCode = billingCode;
    }
    /**Gets the ICD10 of the encounter*/
    public String getIcd10() {
        return icd10;
    }

    public void setIcd10(String icd10) {
        this.icd10 = icd10;
    }

    public Float getTotalCost() {
        return totalCost;
    }

    public void setTotalCost(Float totalCost) {
        this.totalCost = totalCost;
    }

    public Float getCopay() {
        return copay;
    }

    public void setCopay(Float copay) {
        this.copay = copay;
    }

    public String getChiefComplaint() {
        return chiefComplaint;
    }

    public void setChiefComplaint(String chiefComplaint) {
        this.chiefComplaint = chiefComplaint;
    }

    public Integer getPulse() {
        return pulse;
    }

    public void setPulse(Integer pulse) {
        this.pulse = pulse;
    }

    public Integer getSystolic() {
        return systolic;
    }

    public void setSystolic(Integer systolic) {
        this.systolic = systolic;
    }

    public Integer getDiastolic() {
        return diastolic;
    }

    public void setDiastolic(Integer diastolic) {
        this.diastolic = diastolic;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public Patient getPatient() {
        return patient;
    }

    public void setPatient(Patient patient) {
        this.patient = patient;
    }

    @Override
    public String toString() {
        return "Encounter{" +
                "id=" + id +
                ", notes='" + notes + '\'' +
                ", visitCode='" + visitCode + '\'' +
                ", provider='" + provider + '\'' +
                ", billingCode='" + billingCode + '\'' +
                ", icd10='" + icd10 + '\'' +
                ", totalCost=" + totalCost +
                ", copay=" + copay +
                ", chiefComplaint='" + chiefComplaint + '\'' +
                ", pulse=" + pulse +
                ", systolic=" + systolic +
                ", diastolic=" + diastolic +
                ", date=" + date +
                ", patient=" + patient +
                '}';
    }
}
