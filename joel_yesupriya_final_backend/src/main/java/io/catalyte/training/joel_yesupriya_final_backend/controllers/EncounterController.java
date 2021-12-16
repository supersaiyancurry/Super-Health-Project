package io.catalyte.training.joel_yesupriya_final_backend.controllers;

import io.catalyte.training.joel_yesupriya_final_backend.entities.Encounter;
import io.catalyte.training.joel_yesupriya_final_backend.exceptions.*;
import io.catalyte.training.joel_yesupriya_final_backend.services.EncounterService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.TransactionSystemException;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Optional;

/**Prevents CORS issue*/
@CrossOrigin(origins = "*")
/**Programs this class to be a REST controller.*/
@RestController
/**URL required to access this controller.*/
@RequestMapping("/encounter")
public class EncounterController {

    @Autowired
    private EncounterService encounterService;

    /**Method for checking all encounters in Postman. FindAll combined with the parameter of "encounter" allows for the you to get by specific parameters of the object in the URL as well.*/
    @GetMapping(value = "/")
    /**API Operation and API Response tags are used to send information to Swagger*/
    @ApiOperation("Gets all encounters in the system.")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK", responseContainer = "List", response = Encounter.class)
    })
    public ResponseEntity findAll(Encounter encounter) throws NotFound, InternalServerError {
        return new ResponseEntity(encounterService.findAll(encounter), HttpStatus.OK);
    }

    /**Method for getting objects with specific IDs in Postman. Uses findById to find the encounter at the given ID.*/
    @GetMapping(value = "/{id}")
    @ApiOperation("Get a encounter in the system by ID.")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK", response = Encounter.class),
            @ApiResponse(code = 404, message = "Encounter with that ID is not in the system."),
    })
    public ResponseEntity findById(@PathVariable Long id) throws NotFound {
        /**We want a specific error code if an encounter at the given Id doesn't exist. So, we will make an Optional Encounter clone (tempEncounter) to check whether or not there is a Encounter at that Id. If there isn't, we will throw my custom error NotFound.*/
        Optional<Encounter> tempEncounter = encounterService.findById(Long.parseLong(String.valueOf(id)));
        if (tempEncounter.isPresent()) {
            return new ResponseEntity(encounterService.findById(id), HttpStatus.OK);
        }
        else {
            throw new NotFound();
        }
    }

    /**Method for creating in Postman. Made a ResponseEntity so that the created Encounter is returned AND it is also sending a successful (200) HTTP code. Needs an Encounter object provided in the body section.*/
    @PostMapping(value = "/")
    @ApiOperation("Get a encounter in the system by ID.")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK", response = Encounter.class),
            @ApiResponse(code = 400, message = "Bad information in your post."),
            @ApiResponse(code = 409, message = "Email or SKU is already in the database. Cannot be re-used.")
    })
    public ResponseEntity<Encounter> post(@Valid @RequestBody Encounter encounter) throws Conflict, NotFound {
        /**Try to create a new encounter using postEncounter. If successful, will return a successful HTTP code, too.*/
        try {
            return new ResponseEntity<Encounter>(encounterService.postEncounter(encounter), HttpStatus.CREATED);
        }
        /**DataIntegrityViolation means that an invalid ID was called for the patient ID. If this is the case, throw my custom error NotFound.*/
        catch (DataIntegrityViolationException e) {
            throw new NotFound();
        }
    }

    /**Method for deleting in Postman. Uses deleteById to delete the encounter at the given ID. Throw my custom error NoContent for the appropriate HTTP code return.*/
    @DeleteMapping(value = "/{id}")
    @ApiOperation("Delete a encounter in the system by ID.")
    @ApiResponses(value = {
            @ApiResponse(code = 204, message = "Successful delete."),
            @ApiResponse(code = 404, message = "Encounter with that ID is not in the system.")
    })
    public void delete(@PathVariable Long id) throws NoContent, NotFound {
        /**We want "put" to only be possible when it is replacing an existing ID. To do this, we will create an Optional tempEncounter that is a clone of whatever Encounter exists at the given ID.*/
        Optional<Encounter> tempEncounter = encounterService.findById(id);
        /**Since tempEncounter is Optional, it is possible for it to not exist- meaning there was no existing Encounter with the given ID in the database. If this is is the case, then throw the NotFound error (the else statement).*/
        if (tempEncounter.isPresent()) {
            /**Otherwise, delete the encounter at that ID.*/
            encounterService.deleteById(id);
            throw new NoContent();
        }
        else {
            throw new NotFound();
        }
    }

    @PutMapping(value = "/{id}")
    @ApiOperation("Delete a encounter in the system by ID.")
    @ApiResponses(value = {
            @ApiResponse(code = 204, message = "Successful delete."),
            @ApiResponse(code = 404, message = "Encounter with that ID is not in the system."),
    })
    /**Method for updating in Postman. Made a ResponseEntity so that an updated Encounter is returned AND it is also sending a successful HTTP code. Needs an ID provided in the URL and an Encounter object provided in the body section.*/
    public ResponseEntity<Encounter> put(@Valid @PathVariable String id, @RequestBody Encounter encounter) throws NotFound, Conflict, BadRequest {
        /**We want "put" to only be possible when it is replacing an existing ID. To do this, we will create an Optional tempEncounter that is a clone of whatever Encounter exists at the given ID.*/
        Optional<Encounter> tempEncounter = encounterService.findById(Long.parseLong(id));
        /**Since tempEncounter is Optional, it is possible for it to not exist- meaning there was no existing Encounter with the given ID in the database. If this is is the case, then throw the custom NotFound error (the else statement) because we don't want a new encounter to be created with the put method- only with post.*/
        if (tempEncounter.isPresent()) {
            /**Make the new encounter's ID equal to the old encounter's ID to replace the old one.*/
            encounter.setId(Long.parseLong(id));
            try {
                /**Try to replace the old encounter with the new encounter using updateEncounter. If successful, will return a successful HTTP code, too.*/
                return new ResponseEntity<Encounter>(encounterService.updateEncounter(encounter), HttpStatus.OK);
            }
            catch (DataIntegrityViolationException e) {
                /**DataIntegrityViolation means that the person tried to add another instance of an existing, non-repeatable, value to the database, which is not allowed. If this is the case, throw my custom error Conflict.*/
                throw new Conflict();
            }
            catch (TransactionSystemException e) {
                /**TransactionSystemViolation means that the person tried to input an invalid visit code, billing code, or ICD10. If this is the case, throw my custom error BadRequest.*/
                throw new BadRequest();
            }
        }
        else {
            throw new NotFound();
        }
    }
}
