package io.catalyte.training.joel_yesupriya_final_backend.services;

import io.catalyte.training.joel_yesupriya_final_backend.entities.Patient;
import io.catalyte.training.joel_yesupriya_final_backend.exceptions.NotFound;
import io.catalyte.training.joel_yesupriya_final_backend.exceptions.InternalServerError;

import java.util.List;
import java.util.Optional;

/** Creating methods for accomplishing CRUD */
public interface PatientService {
    Patient updatePatient(Patient patient);
    Optional<Patient> findById(Long id);
    void deleteById(Long id);
    Patient postPatient(Patient patient);
    List<Patient> findAll(Patient patient) throws NotFound, InternalServerError;
}
