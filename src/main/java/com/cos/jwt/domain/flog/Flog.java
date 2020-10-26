package com.cos.jwt.domain.flog;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

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
public class Flog {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int fno;
	private String flog_name;
	private String flog_motto;
}
