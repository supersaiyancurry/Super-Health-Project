package io.catalyte.training.joel_yesupriya_final_backend.services;

import io.catalyte.training.joel_yesupriya_final_backend.entities.Patient;
import io.catalyte.training.joel_yesupriya_final_backend.repositories.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
/** Implementing the methods defined in the service interface using the respective repositories */
public class PatientServiceImpl implements PatientService {
    /**Wires PatientServiceImpl to PatientRepository so that JpaRepository commands can be utilized.*/
    @Autowired
    private PatientRepository patientRepository;

    public PatientServiceImpl(PatientRepository mockProductRepo) { }

    /**Uses the repository to find all objects of that type in the database. ExampleOf allows for specific pieces of data to be searched for as well.*/
    public List<Patient> findAll(Patient patient) {
        return patientRepository.findAll(Example.of(patient));
    }
    /**Uses the repository to find all objects of that type and with the specified ID in the database. */
    public Optional<Patient> findById(Long id) {
        return patientRepository.findById(id);
    }

    /**Uses the repository to save information of a patient.*/
    public Patient postPatient(Patient patient) {
        return patientRepository.save(patient);
    }

    /**Uses the repository to save information of a patient.*/
    public Patient updatePatient(Patient patient) {
        return patientRepository.save(patient);
    }

    /**Uses the repository to delete information of a patient. */
    public void deleteById(Long Id) {
        patientRepository.deleteById(Id);
    }
}
