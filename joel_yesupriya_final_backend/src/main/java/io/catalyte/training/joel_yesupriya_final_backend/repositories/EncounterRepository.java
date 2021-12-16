package io.catalyte.training.joel_yesupriya_final_backend.repositories;

import io.catalyte.training.joel_yesupriya_final_backend.entities.Encounter;
import org.springframework.data.jpa.repository.JpaRepository;

/**Uses JPA repository commands but for use with the specified class entity*/
public interface EncounterRepository extends JpaRepository<Encounter, Long> {
}
