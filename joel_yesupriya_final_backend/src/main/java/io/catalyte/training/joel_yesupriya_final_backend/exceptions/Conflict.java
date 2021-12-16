package io.catalyte.training.joel_yesupriya_final_backend.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.CONFLICT, reason = "a conflict occurred due to an attempt to create/update an entry with a SSN already in use on POST or PUT")
public class Conflict extends RuntimeException {
}