package com.cos.jwt.service;


import java.io.File;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.cos.jwt.domain.flog.Flog;
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
	@Transactional(readOnly = true)
	public Member 회원정보(String username){
		return memberRepository.findByUsername(username);
	}
	@Transactional
	public void 회원정보수정(HttpServletRequest request, MultipartFile profile_image, @RequestParam("nickname") String nickname,
			@RequestParam("emotion") String emotion,@RequestParam("home_io") String home_io,@RequestParam("state_message") String state_message,@RequestParam("mno") int mno) {
		try {
			UUID uuid = UUID.randomUUID();
			String profile_imagename = profile_image.getOriginalFilename();
			String uploadFilename = uuid.toString() + "_" + profile_imagename;
			File dest = new File(
					"C:\\Users\\admin\\git\\flog\\src\\main\\wepapp\\blog-app\\public\\images\\profileimages\\"
							+ uploadFilename);
			profile_image.transferTo(dest);
			// TODO
			Member memberEntity = memberRepository.findByMno(mno);
			memberEntity.setNickname(nickname);
			memberEntity.setEmotion(emotion);
			memberEntity.setHome_io(home_io);
			memberEntity.setProfile_image(uploadFilename);
			memberEntity.setState_message(state_message);
		} catch (Exception e) {
			// TODO: handle exception
		}
	
		
	}
}
