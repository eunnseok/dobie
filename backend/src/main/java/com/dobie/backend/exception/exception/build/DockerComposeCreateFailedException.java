package com.dobie.backend.exception.exception.build;

import com.dobie.backend.exception.format.response.ErrorCode;
import lombok.Getter;

@Getter
public class DockerComposeCreateFailedException extends RuntimeException{
    private final ErrorCode errorCode;
    private final String errorMessage;

    public DockerComposeCreateFailedException(String errorMessage){
        this.errorCode = ErrorCode.DOCKER_COMPOSE_CREATE_FAILED;
        this.errorMessage = errorMessage;
    }
}
