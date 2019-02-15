package com.temelt.issuemanagement.service;

import com.temelt.issuemanagement.dto.IssueHistoryDto;
import com.temelt.issuemanagement.entity.Issue;
import com.temelt.issuemanagement.util.TPage;
import org.springframework.data.domain.Pageable;

import java.util.List;

/**
 * Created by temelt on 4.02.2019.
 */
public interface IssueHistoryService {

    IssueHistoryDto save(IssueHistoryDto issueHistory);

    IssueHistoryDto getById(Long id);

    List<IssueHistoryDto> getByIssueId(Long id);

    TPage<IssueHistoryDto> getAllPageable(Pageable pageable);

    Boolean delete(IssueHistoryDto issueHistory);

    void addHistory(Long id, Issue issue);
}
