package com.cos.jwt.web;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cos.jwt.domain.person.Member;
import com.cos.jwt.domain.person.MemberRepository;
import com.cos.jwt.domain.post.Board;
import com.cos.jwt.domain.post.BoardRepository;
import com.cos.jwt.domain.reply.Reply;
import com.cos.jwt.domain.reply.ReplyRepository;
import com.cos.jwt.service.FlogService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class ReplyController {
	
	private final ReplyRepository replyRepository;
	private final MemberRepository memberRepository;
	private final BoardRepository BoardRepository;
	
	
	@PostMapping("/board/{bno}/reply")
	public String 댓글쓰기(@RequestBody Reply reply, @PathVariable int bno) {
		Member memberEntity = memberRepository.findById(1).get();
		Board boardEntity = BoardRepository.findById(bno).get();
		
		reply.setMember(memberEntity);
		reply.setBoard(boardEntity);
		replyRepository.save(reply);
		return "ok";
	}
	
	@DeleteMapping("/reply/{rno}")
	public String 댓글삭제(@PathVariable int rno, Reply reply) {
		replyRepository.DeleteByRno(rno);
		return "ok";
	}
	
}
