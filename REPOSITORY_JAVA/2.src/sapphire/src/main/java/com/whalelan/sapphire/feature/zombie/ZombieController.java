package com.whalelan.sapphire.feature.zombie;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.whalelan.sapphire.commen.vo.ReqVo;
import com.whalelan.sapphire.commen.vo.RespVo;

@Controller
@RequestMapping(value = "/zombie")
public class ZombieController
{
	/**
	 * MVC-1<br>
	 * 返回一个jsp页面<br>
	 */
	@RequestMapping(value = "/startZombie", method = RequestMethod.GET)
	public String starZombie()
	{
		System.out.println("starZombie");
		return "success";
	}
	
	/**
	 * MVC-2<br>
	 * POST,req为json,resp也为json<br>
	 */
	@RequestMapping(value = "/zombieing", method = RequestMethod.POST)
	public @ResponseBody RespVo zombieing(@RequestBody ReqVo reqVo, HttpServletRequest request, HttpServletResponse response)
	{
		System.out.println("zombieing");
		RespVo oRespVo = new RespVo();
		oRespVo.setSuccess(true);
		oRespVo.setResult("suceess");
		return oRespVo;
	}
}
