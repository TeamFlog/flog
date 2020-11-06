package com.cos.jwt.domain.person;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;


public interface MemberRepository extends JpaRepository<Member, Integer>{
	
	Member findByUsernameAndPassword(String username, String password);
	
	
	@Query(value = "SELECT * FROM member WHERE username = :username",nativeQuery = true)
	Member findByUsername(String username);
	@Modifying
	@Query(value = "SELECT * FROM member WHERE mno = :mno",nativeQuery = true)
	Member findByMno(int mno);
}
