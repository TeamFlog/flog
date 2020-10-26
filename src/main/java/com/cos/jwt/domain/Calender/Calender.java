package com.cos.jwt.domain.Calender;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import com.cos.jwt.domain.flog.Flog;
import com.cos.jwt.domain.person.Member;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Calender {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int cno;
	private String s_name;
	private Date s_date;
}
