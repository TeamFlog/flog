package com.cos.jwt.web;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.web.PageableDefault;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.cos.jwt.domain.flog.Flog;
import com.cos.jwt.domain.flog.FlogDto;
import com.cos.jwt.domain.flog.FlogRepository;
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
	public String createFlog(HttpServletRequest request, MultipartFile  flog_img,@RequestParam("flog_name")String flog_name,
			@RequestParam("flog_motto")String flog_motto) {
		System.out.println(flog_img.getOriginalFilename());
		if("".equals(flog_motto)==true||"".equals(flog_name)==true||"".equals(flog_img.getOriginalFilename())==true) {
			System.out.println("빈 값이 확인되었습니다.");
			return "false";
		}else {				
		flogService.블로그생성(request, flog_img, flog_name, flog_motto);
		}
		return "ok";
	}
	
	
	@DeleteMapping("/flog/{fno}")
	public String deleteFlog(@PathVariable int fno) {
		flogService.블로그삭제(fno);
		return "ok";
	}
	
	@PutMapping("/flog/{fno}")
	public String 
	updateFlog(@PathVariable int fno, @RequestBody Flog flog) {
		flogService.블로그수정(fno,flog);
		return "ok";
	}
	/*
	@GetMapping("/flogList/search")
	public String search(@RequestParam(value="keyword") String keyword, Model model) {
	    List<FlogDto> flogDtoList = flogService.searchFlog(keyword);
	    model.addAttribute("flogList", flogDtoList);
	    
	    return "ok";
	}
	*/
}
