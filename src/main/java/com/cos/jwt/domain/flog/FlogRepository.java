package com.cos.jwt.domain.flog;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

public interface FlogRepository extends JpaRepository<Flog, Integer>{
	
	Flog findByFno(int fno);
	
	@Modifying
	@Query(value = "DELETE FROM flog WHERE fno =:fno",nativeQuery = true)
	void deleteByFno(int fno);
}
