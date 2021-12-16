package io.catalyte.training.joel_yesupriya_final_backend.services;

import io.catalyte.training.joel_yesupriya_final_backend.controllers.PatientController;
import io.catalyte.training.joel_yesupriya_final_backend.entities.Address;
import io.catalyte.training.joel_yesupriya_final_backend.entities.Patient;
import io.catalyte.training.joel_yesupriya_final_backend.exceptions.NoContent;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static junit.framework.TestCase.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.when;
import static org.mockito.MockitoAnnotations.initMocks;

/**
 * PatientController Tester.
 *
 * @author <James Jowers>
 * @version 1.0
 * @since <pre>May 10, 2019</pre>
 */
public class PatientControllerTest {

    @InjectMocks
    PatientController classUnderTest;

    @Mock
    PatientService mockPatientService;

    private List<Patient> testList = new ArrayList<>();
    private Patient testPatient;


    @Before
    public void before() {
        initMocks(this);
        Address testAddress = new Address("street", "city", "MD", "55555");
        testPatient = new Patient("Joel", "Yesupriya", "983-85-8274", testAddress, 24, 72, 190, "AETNA", "male");
        testList.add(testPatient);
    }

    /**
     * Method: getPatients()
     */
    @Test
    public void testGetPatientsSuccess() {
        ResponseEntity<List<Patient>> expectedResponse = new ResponseEntity<>(testList, HttpStatus.OK);
        when(mockPatientService.findAll(null)).thenReturn(testList);
        ResponseEntity<List<Patient>> result = classUnderTest.findAll(null);
        assertEquals(expectedResponse, result);
    }

    /**
     * Method: getPatient(@PathVariable Long id)
     */
//    @Test
//    public void testGetPatientSuccess() {
//        Optional<Patient> expectedResponse = new ResponseEntity<Optional>(testPatient, HttpStatus.OK);
//        when(mockPatientService.findById(anyLong())).thenReturn(java.util.Optional.ofNullable(testPatient));
//        ResponseEntity<Patient> result = classUnderTest.findById(0L);
//        assertEquals(expectedResponse, result);
//    }

    /**
     * Method: getPatient(@PathVariable Long id)
     */
    @Test(expected = ResponseStatusException.class)
    public void testGetPatientReturnsNull() {
        ResponseEntity<Patient> expectedResponse = new ResponseEntity<>(HttpStatus.NO_CONTENT);
        when(mockPatientService.findById(anyLong())).thenReturn(null);
        classUnderTest.findById(1L);
    }

    /**
     * Method: addPatient(@Valid @RequestBody Patient customer)
     */
    @Test
    public void testAddPatientSuccess() {
        ResponseEntity<Patient> expectedResponse = new ResponseEntity<>(testPatient, HttpStatus.CREATED);
        when(mockPatientService.postPatient(any(Patient.class))).thenReturn(testPatient);
        ResponseEntity<Patient> result = classUnderTest.post(testPatient);
        assertEquals(expectedResponse, result);
    }

    /**
     * Method: updatePatient(@PathVariable Long id, @Valid @RequestBody Patient customer)
     */
    @Test
    public void testUpdatePatientSuccess() {
        ResponseEntity<Patient> expectedResponse = new ResponseEntity<>(testPatient, HttpStatus.OK);
        when(mockPatientService.updatePatient(any(Patient.class))).thenReturn(testPatient);
        ResponseEntity<Patient> result = classUnderTest.put(String.valueOf(1L), testPatient);
        assertEquals(expectedResponse, result);
    }

    /**
     * Method: updatePatient(@PathVariable Long id, @Valid @RequestBody Patient customer)
     */
    @Test(expected = ResponseStatusException.class)
    public void testUpdatePatientReturnsNull() {
        when(mockPatientService.updatePatient(testPatient)).thenReturn(null);
        classUnderTest.put(Long.toString(1L), testPatient);
    }

    /**
     * Method: deleteReview(@PathVariable Long id)
     */
    @Test
    public void testDeleteReviewSuccess() throws NoContent {

        classUnderTest.delete(1L);
    }
} 
