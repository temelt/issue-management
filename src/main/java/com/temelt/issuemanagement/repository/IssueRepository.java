package com.temelt.issuemanagement.repository;

import com.temelt.issuemanagement.entity.Issue;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by temelt on 3.02.2019.
 */
public interface IssueRepository extends JpaRepository<Issue, Long> {

}
