package com.dobie.backend.domain.project.entity;

import com.dobie.backend.domain.project.dto.FrontendRequestDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Frontend {
    private String serviceId;
    private String serviceName;

    private String language;
    private String version;
    private String framework;

    private String path;
    private String branch;

    private String location;

    private int externalPort;
    private int internalPort;

    private boolean usingNginx;

    public Frontend(String serviceId, FrontendRequestDto dto){
        this.serviceId = serviceId;
        this.serviceName = dto.getServiceName();
        this.language = dto.getLanguage();
        this.version = dto.getVersion();
        this.framework = dto.getFramework();
        this.path = dto.getPath();
        this.branch = dto.getBranch();
        this.location = dto.getLocation();
        this.externalPort = dto.getExternalPort();
        this.internalPort = dto.getInternalPort();
        this.usingNginx = dto.isUsingNginx();
    }

    public Frontend(FrontendRequestDto dto){
        this.serviceId = dto.getServiceId();
        this.serviceName = dto.getServiceName();
        this.language = dto.getLanguage();
        this.version = dto.getVersion();
        this.framework = dto.getFramework();
        this.path = dto.getPath();
        this.branch = dto.getBranch();
        this.location = dto.getLocation();
        this.externalPort = dto.getExternalPort();
        this.internalPort = dto.getInternalPort();
        this.usingNginx = dto.isUsingNginx();
    }
}
