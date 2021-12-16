package io.catalyte.training.joel_yesupriya_final_backend.services;

import io.catalyte.training.joel_yesupriya_final_backend.entities.Encounter;
import io.catalyte.training.joel_yesupriya_final_backend.exceptions.*;

import io.catalyte.training.joel_yesupriya_final_backend.repositories.PatientRepository;
import io.catalyte.training.joel_yesupriya_final_backend.repositories.EncounterRepository;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;
import org.springframework.transaction.CannotCreateTransactionException;


import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
/** Implementing the methods defined in the service interface using the respective repositories */
public class EncounterServiceImpl implements EncounterService{

    /**Wires PatientServiceImpl to PatientRepository so that JpaRepository commands can be utilized.*/
    @Autowired
    private PatientRepository patientRepository;

    @Autowired
    private EncounterRepository encounterRepository;

    public EncounterServiceImpl(EncounterRepository mockProductRepo) {
    }

    /**Uses the repository to find all objects of that type in the database. ExampleOf allows for specific pieces of data to be searched for as well.*/
    public List<Encounter> findAll(Encounter encounter) {
        return encounterRepository.findAll(Example.of(encounter));
    }

    /**Uses the repository to find all objects of that type and with the specified ID in the database. */
    public Optional<Encounter> findById(Long id) {
        return encounterRepository.findById(id);
    }

    /**Uses the repository to save information of a encounter.*/
    public Encounter postEncounter(Encounter encounter) { return encounterRepository.save(encounter); }

    /**Uses the repository to save information of a encounter.*/
    public Encounter updateEncounter(Encounter encounter) {
        return encounterRepository.save(encounter);
    }

    /**Uses the repository to delete information of a encounter. */
    public void deleteById(Long Id) {
        encounterRepository.deleteById(Id);
    }

}
