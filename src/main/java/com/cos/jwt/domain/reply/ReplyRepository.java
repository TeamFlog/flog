package com.cos.jwt.domain.reply;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

public interface ReplyRepository extends JpaRepository<Reply, Integer>{

	@Modifying
	@Query(value = "DELETE FROM board WHERE rno =:rno",nativeQuery = true)
	int DeleteByRno(int rno);
}
