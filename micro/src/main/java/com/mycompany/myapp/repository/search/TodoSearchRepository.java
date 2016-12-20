package com.mycompany.myapp.repository.search;

import com.mycompany.myapp.domain.Todo;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data ElasticSearch repository for the Todo entity.
 */
public interface TodoSearchRepository extends ElasticsearchRepository<Todo, Long> {
}
