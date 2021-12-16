package io.catalyte.training.joel_yesupriya_final_backend.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.FORBIDDEN, reason = "you are not allowed to access")
public class Forbidden extends RuntimeException {
}
