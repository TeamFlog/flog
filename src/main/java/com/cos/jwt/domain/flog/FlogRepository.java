  
package com.cos.jwt.domain.flog;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.cos.jwt.domain.flog.Flog.FlogBuilder;
import com.cos.jwt.domain.post.Board;

	//이 쿼리를 이용하여 수정
public interface FlogRepository extends JpaRepository<Flog, Integer>{
	
	@Query(value = "SELECT * FROM flog WHERE fno = :fno",nativeQuery = true)
	Flog FindByFno(Integer fno);
	
	
	@Modifying //사용하지않을 것 같음 -제준서-
	@Query(value = "DELETE FROM flog WHERE fno =:fno",nativeQuery = true)
	void deleteByFno(int fno);
    
	@Query(value = "SELECT * FROM flog WHERE fno = :fno",nativeQuery = true)
	List<Flog> FindAllbyFno(int fno);
	
	//Page<Flog> findAll(Pageable pageable);
	/*
	@Query(value= "SELECT f FROM Flog f WHERE f.flog_name LIKE %:flog_name%", nativeQuery = true)
	List<Flog> findByFlog_Name(String flog_name);
    Page<Flog> findByFlog_NameContaining(String flog_name, Pageable pageable);
	
	/*
	@Query(value= "SELECT f FROM Flog f WHERE f.flog_name LIKE %:flog_name%",
			countQuery = "SELECT COUNT(f.fno) FROM Flog f WHERE f.flog_name LIKE %:flog_name%",
			nativeQuery = true)
	
	Page<Flog> findSearch(String flog_name,Pageable pageRequest);
	*/
	
}