package com.temelt.issuemanagement.dto;

import lombok.Data;

/**
 * Created by temelt on 15.02.2019.
 */
@Data
public class LoginRequest {
    private String username;
    private String password;
}
