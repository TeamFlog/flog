package com.cos.jwt.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cos.jwt.domain.person.Member;
import com.cos.jwt.domain.person.MemberRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class MemberService {
	
	private final MemberRepository memberRepository;
	
	@Transactional
	public void 회원가입(Member member) {
		memberRepository.save(member);
	}

	
}
