package com.cos.jwt.web;

import javax.servlet.http.HttpSession;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cos.jwt.domain.person.Member;
import com.cos.jwt.service.MemberService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
public class MemberController {

	private final MemberService memberService;
	private final HttpSession session;
	
	// 회원가입
	@PostMapping("/join")
	public ResponseEntity<?> save(@RequestBody Member member) {
		memberService.회원가입(member);
		return new ResponseEntity<String>("ok", HttpStatus.CREATED);
	}
	/*
	// 로그아웃
	@GetMapping("/logout")
	public ResponseEntity<?> logout() {
		session.invalidate();
		return new ResponseEntity<String>("ok", HttpStatus.OK);
	}
	*/
}
