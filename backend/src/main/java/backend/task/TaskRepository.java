package backend.task;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

public interface TaskRepository extends JpaRepository<Task, Long> {

    @Query("""
            UPDATE Task t
            SET t.status = :status
            WHERE t.id = :id
        """)
    @Modifying
    @Transactional
    void updateTaskById(@Param("id") Long id, 
    @Param("status") String status);
}
