package com.cos.jwt.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.cos.jwt.domain.post.Board;
import com.cos.jwt.service.BoardService;

import lombok.RequiredArgsConstructor;



@RestController
@RequiredArgsConstructor
public class BoardController {

	
	private final BoardService boardService;
	
	@GetMapping("/writeForm")
	public String writeForm() {
		return "writeForm";
	}
	
	@PostMapping("write") //글쓰기
	public String writeBoard(@RequestBody Board board) {
		boardService.글쓰기(board);
		return "ok";
	}
	
	@GetMapping("/boardList") //글목록
	public Page<Board> boardList(@PageableDefault(size = 5, sort = "bno", direction = Direction.DESC) Pageable pageable){
		Page<Board> boards = boardService.글목록(pageable);
		return boards;
		
	}
	
	@DeleteMapping("/board/{bno}")
	public String deleteBoard(@PathVariable int bno) {
		boardService.글삭제하기(bno);
		return "ok";
	}
	
	@PutMapping("/board/{bno}")
	public String updateBoard(@PathVariable int bno, @RequestBody Board board) {
		boardService.글수정하기(bno, board);
		return "ok";
	}
	
	
	
	
	
}
