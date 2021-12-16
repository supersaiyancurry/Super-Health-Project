package io.catalyte.training.joel_yesupriya_final_backend.repositories;

import io.catalyte.training.joel_yesupriya_final_backend.entities.Patient;
import org.springframework.data.jpa.repository.JpaRepository;

/**Uses JPA repository commands but for use with the specified class entity*/
public interface PatientRepository extends JpaRepository<Patient, Long>  {

}
