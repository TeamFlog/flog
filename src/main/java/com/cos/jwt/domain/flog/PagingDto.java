package com.cos.jwt.domain.flog;

import lombok.Data;
import net.bytebuddy.asm.Advice.This;

@Data
public class PagingDto {
	private int fno;
	private String flog_name;
	private String flog_motto;
	private String flog_img;
	
	public PagingDto(int fno, String flog_name, String flog_motto, String flog_img) {
		this.fno = fno;
		this.flog_name = flog_name;
		this.flog_motto = flog_motto;
		this.flog_img = flog_img;
	}
}
