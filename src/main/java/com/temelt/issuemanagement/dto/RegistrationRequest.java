package com.temelt.issuemanagement.dto;

import lombok.Data;

/**
 * Created by temelt on 15.02.2019.
 */
@Data
public class RegistrationRequest {
    private String nameSurname;
    private String username;
    private String password;
    private String email;
}
