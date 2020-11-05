package com.cos.jwt.service;

import java.io.File;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;

import com.cos.jwt.domain.access.Access;
import com.cos.jwt.domain.access.AccessDto;
import com.cos.jwt.domain.access.AccessRepository;
import com.cos.jwt.domain.flog.Flog;
import com.cos.jwt.domain.flog.FlogRepository;

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
					"C:\\Users\\admin\\git\\flog\\src\\main\\wepapp\\blog-app\\public\\images\\flogimages\\"
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

	@Transactional
	public void 블로그수정(int fno, Flog flog) {
		Flog flogEntity = flogRepository.FindByFno(fno);
		flogEntity.setFlog_name(flog.getFlog_name());
		flogEntity.setFlog_motto(flog.getFlog_motto());
		flogEntity.setFlog_img(flog.getFlog_img());
	}

	@Transactional
	public void 블로그삭제(int fno) {
		flogRepository.deleteByFno(fno);
	}

	// 블로그 신청

	@Transactional
	public void 블로그신청(AccessDto access) {
		accessRepository.saveAccess(access.getFno(), access.getMno());
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
