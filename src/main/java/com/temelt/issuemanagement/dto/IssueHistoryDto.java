package com.temelt.issuemanagement.dto;

import com.temelt.issuemanagement.entity.IssueStatus;
import lombok.Data;

import java.util.Date;

/**
 * Created by temelt on 4.02.2019.
 */
@Data
public class IssueHistoryDto {
    private Long id;
    private IssueDto issue;
    private String description;
    private Date date;
    private IssueStatus issueStatus;
    private String details;
    private UserDto assignee;
}
