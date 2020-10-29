package com.cos.jwt.web;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cos.jwt.domain.flog.Flog;
import com.cos.jwt.service.FlogService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class FlogController {

	private final FlogService flogService;
	
	@GetMapping({"","/"})
	public String index() {
		return "index";
	}
	
	@GetMapping("flogList") //블로그 목록
	public Page<Flog> flogList(@PageableDefault(size=15,sort = "fno", direction = Direction.DESC) Pageable pageable){
		Page<Flog> flogs = flogService.블로그목록(pageable);
		return flogs;
	}
	
	@PostMapping("create_flog") // 블로그 생성
	public String createFlog(@RequestBody Flog flog) {
		flogService.블로그생성(flog);
		return "ok";
	}
	
	
	@DeleteMapping("/flog/{fno}")
	public String deleteFlog(@PathVariable int fno) {
		flogService.블로그삭제(fno);
		return "ok";
	}
	
	@PutMapping("/flog/{fno}")
	public String updateFlog(@PathVariable int fno, @RequestBody Flog flog) {
		flogService.블로그수정(fno,flog);
		return "ok";
	}
}
