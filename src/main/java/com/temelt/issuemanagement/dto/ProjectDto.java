package com.temelt.issuemanagement.dto;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;

/**
 * Created by temelt on 4.02.2019.
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@ApiModel(value = "Project Data Transfer Object")
public class ProjectDto {
    @ApiModelProperty(value = "Project ID")
    private Long id;
    @NotNull
    @ApiModelProperty(required = true,value = "Name Of Project")
    private String projectName;
    @NotNull
    @ApiModelProperty(required = true,value = "Code Of Project")
    private String projectCode;

    @NotNull
    @ApiModelProperty(required = true,value = "Project Manager ID")
    private Long managerId;

    @ApiModelProperty(required = true,value = "Project Manager Name")
    private UserDto manager;
}
