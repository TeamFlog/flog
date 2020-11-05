package com.cos.jwt.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cos.jwt.domain.flog.Flog;
import com.cos.jwt.domain.flog.FlogRepository;

import lombok.RequiredArgsConstructor;

//Flog 가족 블로그 관련된 기능
@RequiredArgsConstructor
@Service
public class FlogService {

	@Autowired
	private FlogRepository flogRepository;
	
	@Transactional
	public void 블로그생성(Flog flog) {
		flogRepository.save(flog);
	}
	
	@Transactional(readOnly = true)
	public Page<Flog> 블로그목록(Pageable pageable){
		return flogRepository.findAll(pageable);
	}
	
	@Transactional
	public void 블로그수정(int fno,Flog flog) {
		Flog flogEntity = flogRepository.FindByFno(fno);
		flogEntity.setFlog_name(flog.getFlog_name());
		flogEntity.setFlog_motto(flog.getFlog_motto());
	}
	
	@Transactional
	public void 블로그삭제(int fno) {
		flogRepository.deleteByFno(fno);
	}

	
/*
	@Transactional
	public List<FlogDto> searchFlog(String keyword) {
		List<Flog> flogs = flogRepository.findByTitleContaining(keyword);
		List<FlogDto> flogDtoList = new ArrayList<>();
		
		if(flogs.isEmpty()) return flogDtoList;
		
		for(Flog flog : flogs) {
			flogDtoList.add(this.convertEntityToDto(flog));
		}
		
		return flogDtoList;
	}

	@Transactional
	private FlogDto convertEntityToDto(Flog flog) {
		// TODO Auto-generated method stub
		return FlogDto.builder()
				.fno(flog.getFno())
				.flog_name(flog.getFlog_name())
				.flog_motto(flog.getFlog_motto())
				.flog_img(flog.getFlog_img())
				.build();
		}
*/
}

