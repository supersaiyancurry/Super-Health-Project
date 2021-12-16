package io.catalyte.training.joel_yesupriya_final_backend.exceptions;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.BAD_REQUEST, reason = "Bad request from malformed data supplied in POST or PUT")
public class BadRequest extends RuntimeException {
}