package com.temelt.issuemanagement.service;

import com.temelt.issuemanagement.dto.IssueHistoryDto;
import com.temelt.issuemanagement.util.TPage;
import org.springframework.data.domain.Pageable;

/**
 * Created by temelt on 4.02.2019.
 */
public interface IssueHistoryService {

    IssueHistoryDto save(IssueHistoryDto issueHistory);

    IssueHistoryDto getById(Long id);

    TPage<IssueHistoryDto> getAllPageable(Pageable pageable);

    Boolean delete(IssueHistoryDto issueHistory);

}
