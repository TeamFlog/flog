package com.cos.jwt.domain.flog;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.cos.jwt.domain.flog.Flog.FlogBuilder;


public interface FlogRepository extends JpaRepository<Flog, Long>{

	@Query(value = "SELECT * FROM flog WHERE fno = :fno",nativeQuery = true)
	Flog FindByFno(int fno);
	
	@Modifying
	@Query(value = "DELETE FROM flog WHERE fno =:fno",nativeQuery = true)
	void deleteByFno(int fno);

}
