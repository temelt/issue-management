package com.temelt.issuemanagement.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Created by temelt on 15.02.2019.
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class TokenResponse {
    private String username;
    private String token;
}
