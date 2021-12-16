package io.catalyte.training.joel_yesupriya_final_backend.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;


@ResponseStatus(value = HttpStatus.NOT_FOUND, reason = "The requested data was not found with the specified ID on GET, PUT, or DELETE")
public class NotFound extends RuntimeException {
}