package io.catalyte.training.joel_yesupriya_final_backend.controllers;

import io.catalyte.training.joel_yesupriya_final_backend.entities.Patient;
import io.catalyte.training.joel_yesupriya_final_backend.exceptions.*;
import io.catalyte.training.joel_yesupriya_final_backend.services.PatientService;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.TransactionSystemException;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.CrossOrigin;

import javax.validation.Valid;
import java.util.Optional;



/**Prevents CORS issue*/
@CrossOrigin(origins = "*")
/**Programs this class to be a REST controller.*/
@RestController
/**URL required to access this controller.*/
@RequestMapping("/patient")
public class PatientController {

    @Autowired
    private PatientService patientService;

    /**Method for checking all patients in Postman. FindAll combined with the parameter of "patient" allows for the you to get by specific parameters of the object in the URL as well.*/
    @GetMapping(value = "/")
    /**API Operation and API Response tags are used to send information to Swagger*/
    @ApiOperation("Gets all patients in the system.")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK", responseContainer = "List", response = Patient.class)
    })
    public ResponseEntity findAll(Patient patient) {
        return new ResponseEntity(patientService.findAll(patient), HttpStatus.OK);
    }

    /**Method for getting objects with specific IDs in Postman. Uses findById to find the patient at the given ID.*/
    @GetMapping(value = "/{id}")
    @ApiOperation("Get a patient in the system by ID.")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK", response = Patient.class),
            @ApiResponse(code = 404, message = "Patient with that ID is not in the system."),
    })
    public ResponseEntity findById(@PathVariable Long id) throws NotFound {
        /**We want a specific error code if a patient at the given Id doesn't exist. So, we will make an Optional Patient clone (tempPatient) to check whether or not there is a Patient at that Id. If there isn't, we will throw my custom error NotFound.*/
        /**Otherwise, display the patient at that id*/
        Optional<Patient> tempPatient = patientService.findById(Long.parseLong(String.valueOf(id)));
        if (tempPatient.isPresent()) {
            return new ResponseEntity(patientService.findById(id), HttpStatus.OK);
        }
        else {
            throw new NotFound();
        }
    }

    /**Method for creating in Postman. Made a ResponseEntity so that the created Patient is returned AND it is also sending a successful HTTP code. Needs a Patient object provided in the body section.*/
    @PostMapping(value = "/")
    @ApiOperation("Get a patient in the system by ID.")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "OK", response = Patient.class),
            @ApiResponse(code = 400, message = "Bad information in your post."),
            @ApiResponse(code = 409, message = "Email or SKU is already in the database. Cannot be re-used.")
    })
    public ResponseEntity<Patient> post(@Valid @RequestBody Patient patient) throws Conflict {
        /**Try to create a new patient using postPatient. If successful, will return a successful HTTP code, too.*/
        try {
            return new ResponseEntity<Patient>(patientService.postPatient(patient), HttpStatus.CREATED);
        }
        /**DataIntegrityViolation means that the person tried to add another instance of an existing SSN to the database, which is not allowed. If this is the case, throw my custom error Conflict.*/
        catch (DataIntegrityViolationException e) {
            throw new Conflict();
        }
    }

    /**Method for deleting in Postman. Uses deleteById to delete the patient at the given ID. Throw my custom error SuccessfulDelete.*/
    @DeleteMapping(value = "/{id}")
    @ApiOperation("Delete a patient in the system by ID.")
    @ApiResponses(value = {
            @ApiResponse(code = 204, message = "Successful delete."),
            @ApiResponse(code = 404, message = "Patient with that ID is not in the system.")
    })
    public void delete(@PathVariable Long id) throws NoContent, NotFound {
        /**We want "put" to only be possible when it is replacing an existing ID. To do this, we will create an Optional tempPatient that is a clone of whatever Patient exists at the given ID.*/
        Optional<Patient> tempPatient = patientService.findById(id);
        /**Since tempPatient is Optional, it is possible for it to not exist- meaning there was no existing Patient with the given ID in the database. If this is is the case, then throw the InvalidIdGetOrPut error (the else statement).*/
        if (tempPatient.isPresent()) {
            /**Otherwise, delete the Patient at that ID.*/
            patientService.deleteById(id);
            throw new NoContent();
        }
        else {
            throw new NotFound();
        }
    }

    @PutMapping(value = "/{id}")
    @ApiOperation("Update a patient in the system by ID.")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Successful update."),
            @ApiResponse(code = 404, message = "Patient with that ID is not in the system."),
            @ApiResponse(code = 409, message = "Email or SKU is already in the database. Cannot be re-used.")

    })
    /**Method for updating in Postman. Made a ResponseEntity so that an updated Patient returned AND it is also sending a successful HTTP code. Needs an ID provided in the URL and a Patient object provided in the body section.*/
    public ResponseEntity<Patient> put(@Valid @PathVariable String id, @RequestBody Patient patient) throws NotFound, Conflict, BadRequest {
        /**We want "put" to only be possible when it is replacing an existing ID. To do this, we will create an Optional tempPatient that is a clone of whatever Patient exists at the given ID.*/
        Optional<Patient> tempPatient = patientService.findById(Long.parseLong(id));
        /**Since tempPatient is Optional, it is possible for it to not exist- meaning there was no existing Patient with the given ID in the database. If this is is the case, then throw the InvalidIdGetOrPut error (the else statement) because we don't want a new patient to be created with the put method- only with post.*/
        if (tempPatient.isPresent()) {
            /**Make the new patient's ID equal to the old patient's ID to replace the old one.*/
            patient.setId(Long.parseLong(id));
            try {
                /**Try to replace the old patient with the new patient using updatePatient. If successful, will return a successful HTTP code, too.*/
                return new ResponseEntity<Patient>(patientService.updatePatient(patient), HttpStatus.OK);
            }
            catch (DataIntegrityViolationException e) {
                /**DataIntegrityViolation means that the person tried to add another instance of an existing SSN to the database, which is not allowed. If this is the case, throw my custom error Conflict.*/
                throw new Conflict();
            }
            catch (TransactionSystemException e) {
                /**TransactionSystemViolation means that the person tried to input and invalid Zip Code or state. If this is the case, throw my custom error BadRequest.*/
                throw new BadRequest();
            }
        }
        else {
            throw new NotFound();
        }
    }
}