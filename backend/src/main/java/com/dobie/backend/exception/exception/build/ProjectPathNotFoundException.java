package com.dobie.backend.exception.exception.build;

import com.dobie.backend.exception.format.response.ErrorCode;
import lombok.Getter;

@Getter
public class ProjectPathNotFoundException extends RuntimeException{
    private final ErrorCode errorCode;

    public ProjectPathNotFoundException(){
        this.errorCode = ErrorCode.PROJECT_PATH_NOT_FOUND;
    }
}
