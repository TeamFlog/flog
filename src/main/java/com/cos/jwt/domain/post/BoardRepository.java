package com.cos.jwt.domain.post;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

public interface BoardRepository extends JpaRepository<Board,Integer>{

	@Query(value = "SELECT * FROM board WHERE bno = :bno",nativeQuery = true)
	Board FindByBno(int bno);
	
	
	@Modifying
	@Query(value = "DELETE FROM board WHERE bno =:bno",nativeQuery = true)
	int DeleteByBno(int bno);
	
	
}
