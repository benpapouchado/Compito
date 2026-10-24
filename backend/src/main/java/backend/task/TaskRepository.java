package backend.task;

import java.time.LocalDateTime;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface TaskRepository extends JpaRepository<Task, Long> {

    @Query("""
            UPDATE Task t
            SET t.title = :title,
            t.description = :description,
            t.status = :status,
            t.dueDate = :dueDate WHERE t.id = :id;
        """)
    @Modifying
    void updateTaskById(@Param("id") Long id, 
    @Param("title") String title, 
    @Param("description") String description,
    @Param("status") String status,
    @Param("dueDate") LocalDateTime dueDate);
}
