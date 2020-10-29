package com.cos.jwt.domain.flog;

import java.time.LocalDateTime;

import lombok.Data;

@Data
public class FlogDto {
	
	private Long id;
	private String title;
	private String createdBy;
	private LocalDateTime createdTime;
	
	public FlogDto(Long id, String title, String createdBy, LocalDateTime createdTime) {
		this.id=id;
		this.title=title;
		this.createdBy = createdBy;
		this.createdTime = createdTime;
	}

}
