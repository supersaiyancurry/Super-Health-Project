package io.catalyte.training.joel_yesupriya_final_backend.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;


@ResponseStatus(value = HttpStatus.INTERNAL_SERVER_ERROR, reason = "An unexpected server error occurred")
public class InternalServerError extends RuntimeException {
}