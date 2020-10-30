package com.cos.jwt.service;



import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
	
	@Transactional(readOnly = true)
	public Page<Board> 글목록2(Pageable pageable){
		Page<Board> boards = boardRepository.findAll(pageable);
		String content;
		for(Board board: boards) {
			content = board.getContent();
			if(content != null)
				content.replaceAll("<(/)?([a-zA-Z]*)(\\s[a-zA-Z]*=[^>]*)?(\\s)*(/)?>", "");
			board.setContent(content);
		}
		return boards;
	}
	
	@Transactional(readOnly = true)
	public ArrayList<String> 글내용바꾸기() {
		
		ArrayList<String> contents = new ArrayList<>();
			
		String content;
		List<Board> boards = boardRepository.findAll();
		for(Board board : boards) {
			
			content = board.getContent();
			if(content != null)
			content.replaceAll("<(/)?([a-zA-Z]*)(\\s[a-zA-Z]*=[^>]*)?(\\s)*(/)?>", "");
			contents.add(content);
		}
		
		 return contents;
	}
	
	@Transactional(readOnly = true)
	public Board 글상세보기(Pageable pageable,int bno){
		return boardRepository.findById(bno).get();
	}
	
//	@Transactional
//	public Board 글상세보기2(Pageable pageable,int bno){  //replaceAll이 작동하지 않음.
//		Board board = boardRepository.findById(bno).get();
//		String content = board.getContent();
//		if(content != null)
//			content.replaceAll("<(/)?([a-zA-Z]*)(\\s[a-zA-Z]*=[^>]*)?(\\s)*(/)?>", "");
//		String test = "<p>실험!</p>";
//		test.replaceAll("<(/)?([a-zA-Z]*)(\\s[a-zA-Z]*=[^>]*)?(\\s)*(/)?>", "");
//		test.replaceAll("!", "");
//		System.out.println("testContent:"+test);
//	
//		board.setContent(content);
//		return board;
//	}
	
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
