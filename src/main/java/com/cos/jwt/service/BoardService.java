package com.cos.jwt.service;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cos.jwt.domain.person.Member;
import com.cos.jwt.domain.post.Board;
import com.cos.jwt.domain.post.BoardRepository;

import lombok.RequiredArgsConstructor;

//게시판 기능
@RequiredArgsConstructor
@Service
public class BoardService {

	@Autowired
	private BoardRepository boardRepository;
	
	@Transactional
	public void 글쓰기(Board board) {
		boardRepository.save(board);
	}
	
	@Transactional(readOnly = true)
	public Page<Board> 글목록(Pageable pageable){
		return boardRepository.findAll(pageable);
	}
	
	@Transactional
	public void 글수정하기(int bno, Board board) {
		Board boardEntity = boardRepository.FindByBno(bno);
		boardEntity.setTitle(board.getTitle());
		boardEntity.setContent(board.getContent());		
	}
	
	@Transactional
	public void 글삭제하기(int bno) {
		boardRepository.DeleteByBno(bno);
		
	}
}
