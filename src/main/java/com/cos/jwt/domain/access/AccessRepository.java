package com.cos.jwt.domain.access;

import org.springframework.data.jpa.repository.JpaRepository;


public interface AccessRepository extends JpaRepository<Access, Integer> {
	

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

public interface AccessRepository extends JpaRepository<Access, Integer> {
	@Modifying
	@Query(value = "INSERT INTO ACCESS(FNO,MNO) VALUES(:fno,:mno)",nativeQuery = true)
	void saveAccess(int fno,int mno);

}
