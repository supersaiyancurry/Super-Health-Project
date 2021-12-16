package io.catalyte.training.joel_yesupriya_final_backend.services;

import io.catalyte.training.joel_yesupriya_final_backend.entities.Encounter;
import io.catalyte.training.joel_yesupriya_final_backend.exceptions.NotFound;
import io.catalyte.training.joel_yesupriya_final_backend.exceptions.InternalServerError;

import java.util.List;
import java.util.Optional;

/** Creating methods for accomplishing CRUD */
public interface EncounterService {
    Encounter updateEncounter(Encounter encounter);
    Optional<Encounter> findById(Long id);
    void deleteById(Long id);
    Encounter postEncounter(Encounter encounter);
    List<Encounter> findAll(Encounter encounter) throws NotFound, InternalServerError;
}
