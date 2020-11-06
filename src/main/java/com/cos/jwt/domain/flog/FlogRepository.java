package com.cos.jwt.domain.flog;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.cos.jwt.domain.flog.Flog.FlogBuilder;


public interface FlogRepository extends JpaRepository<Flog, Integer>{

	@Query(value = "SELECT * FROM flog WHERE fno = :fno",nativeQuery = true)
	Flog FindByFno(int fno);
	
	@Modifying
	@Query(value = "DELETE FROM flog WHERE fno =:fno",nativeQuery = true)
	void deleteByFno(int fno);
	
/*
	// 페이징, 검색기능 추가
	Page<Flog> findAll(Pageable pageable);
	
	@Query(
			value="SELECT f FROM Flog f WHERE f.flog_name LIKE %:flog_name%",
			countQuery = "SELECT COUNT(f.fno) FROM Flog f f.flog_name LIKE %:flog_name%"
	)
	
	Page<Flog> findAllSearch(String flog_name, Pageable pageRequest);
*/

	
	
	@Query(value= "SELECT f FROM Flog f WHERE f.flog_name LIKE %:flog_name%",
			countQuery = "SELECT COUNT(f.fno) FROM Flog f WHERE f.flog_name LIKE %:flog_name%",
			nativeQuery = true
			)
	Page<Flog> findSearch(String flog_name,Pageable pageRequest);
		 

}
