package com.cos.jwt.service;

import java.io.File;
import java.util.List;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestParam;

import com.cos.jwt.domain.access.Access;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;

import com.cos.jwt.domain.access.Access;
import com.cos.jwt.domain.access.AccessDto;

import com.cos.jwt.domain.access.AccessRepository;
import com.cos.jwt.domain.flog.Flog;
import com.cos.jwt.domain.flog.FlogRepository;

import com.cos.jwt.domain.flog.PagingDto;
import com.cos.jwt.domain.person.Member;

//Flog 가족 블로그 관련된 기능
@Service
public class FlogService {

	@Autowired
	private FlogRepository flogRepository;
	@Autowired
	private AccessRepository accessRepository;
	

	@Transactional
	public void 블로그생성(HttpServletRequest request, MultipartFile flog_img, @RequestParam("flog_name") String flog_name,
			@RequestParam("flog_motto") String flog_motto) {
		try {
			UUID uuid = UUID.randomUUID();
			String flog_imgname = flog_img.getOriginalFilename();
			String uploadFilename = uuid.toString() + "_" + flog_imgname;
			File dest = new File(
					"C:\\Users\\82102\\git\\flog\\src\\main\\wepapp\\blog-app\\public\\images\\flogimages\\"
							+ uploadFilename);
			flog_img.transferTo(dest);
			// TODO
			Flog flog = Flog.builder().flog_name(flog_name).flog_motto(flog_motto).flog_img(uploadFilename).build();
			flogRepository.save(flog);
		} catch (Exception e) {
			// TODO: handle exception
		}
	}
	
	@Transactional(readOnly = true)
	public Page<Flog> 블로그목록(Pageable pageable) {
		return flogRepository.findAll(pageable);
	}


	@Transactional(readOnly = true)
	public Flog 블로그정보(int fno){
		return flogRepository.FindByFno(fno);
	}
	

	
	/*
	@Transactional(readOnly = true)
	public Page<Flog> 페이징(Model model, @PageableDefault(size = 5,sort="fno") Pageable pageable, @RequestParam String flog_name) {
		Page<Flog> flogs = flogRepository.findByFlog_NameContaining(flog_name, pageable);
		int startPage = Math.max(1, flogs.getPageable().getPageNumber() - 4);
        int endPage = Math.min(flogs.getTotalPages(), flogs.getPageable().getPageNumber() + 4);
        model.addAttribute("startPage", startPage);
        model.addAttribute("endPage", endPage);
        model.addAttribute("flogs", flogs);
		return flogRepository.findAll(pageable);
	}
/*
	
	@Transactional(readOnly = true)
	public Page<Flog> 블로그목록(Model model, @PageableDefault(size = 5,sort="fno") Pageable pageable,
            @RequestParam(required = false, defaultValue = "") String searchFlog) {
		Page<Flog> flogs = flogRepository.findByFlog_NameContaining(searchFlog, pageable);
		
        int startPage = Math.max(1, flogs.getPageable().getPageNumber() - 4);
        int endPage = Math.min(flogs.getTotalPages(), flogs.getPageable().getPageNumber() + 4);
        model.addAttribute("startPage", startPage);
        model.addAttribute("endPage", endPage);
        model.addAttribute("flogs", flogs);
		return flogRepository.findAll(pageable);
	}
*/

	@Transactional
	public void 블로그수정(HttpServletRequest request, MultipartFile flog_img, @RequestParam("flog_name") String flog_name,
			@RequestParam("flog_motto") String flog_motto,@RequestParam("fno") Integer fno) {
		try {
			UUID uuid = UUID.randomUUID();
			String flog_imgname = flog_img.getOriginalFilename();
			String uploadFilename = uuid.toString() + "_" + flog_imgname;
			File dest = new File(
					"C:\\Users\\82102\\git\\flog\\src\\main\\wepapp\\blog-app\\public\\images\\flogimages\\"
							+ uploadFilename);
			flog_img.transferTo(dest);
			Flog flogEntity = flogRepository.FindByFno(fno);
			
			flogEntity.setFlog_name(flog_name);
			flogEntity.setFlog_motto(flog_motto);
			if("".equals(flog_imgname)==true) {
				System.out.println("이미지가 들어오지 않았습니다.");
			}else {
				flogEntity.setFlog_img(uploadFilename);				
			}
		} catch (Exception e) {
			// TODO: handle exception
		}
		
		
	}

	/*

	@Transactional
	public Page<PagingDto> paging(@PageableDefault(size=15,sort="fno") Pageable pageRequest) {
		Page<Flog> flogList = flogRepository.findAll(pageRequest); 		
		Page<PagingDto> pagingList = flogList.map(
				flog -> new PagingDto(
						flog.getFno(), flog.getFlog_name(),
						flog.getFlog_motto(), flog.getFlog_img()
		));
		return pagingList;
	}
	
	
	@Transactional
	public Page<PagingDto> searchPaging(
		@RequestParam String flog_name,
		@PageableDefault(size=15,sort="fno") Pageable pageRequest) {
		
		Page<Flog> flogList = flogRepository.findSearch(flog_name, pageRequest);
		
		Page<PagingDto> pagingList = flogList.map(
				flog -> new PagingDto(
						flog.getFno(), flog.getFlog_name(),
						flog.getFlog_motto(), flog.getFlog_img()
			));
		return pagingList;
	}

*/
	@Transactional(readOnly = true)
	public Flog 블로그상세보기(Pageable pageable,int fno){
		return flogRepository.findById(fno).get();
	}

	
	// 블로그 신청
	@Transactional
	public void 블로그신청(AccessDto access) {
		accessRepository.saveAccess(access.getFno(), access.getMno());
	}

	@Transactional
	public void 블로그삭제(int fno) {
		flogRepository.deleteByFno(fno);
	}
}

/*
 * @Transactional public List<FlogDto> searchFlog(String keyword) { List<Flog>
 * flogs = flogRepository.findByTitleContaining(keyword); List<FlogDto>
 * flogDtoList = new ArrayList<>();
 * 
 * if(flogs.isEmpty()) return flogDtoList;
 * 
 * for(Flog flog : flogs) { flogDtoList.add(this.convertEntityToDto(flog)); }
 * 
 * return flogDtoList; }
 */