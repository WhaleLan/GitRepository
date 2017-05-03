package com.whalelan.sapphire.feature.zombie;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
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
	// service
	@Autowired
	ZombieService zombieService;

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
	 * MVC-1.1<br>
	 * 返回一个jsp页面<br>
	 * 
	 * @throws IOException
	 * @throws ServletException
	 */
	@RequestMapping(value = "/startZombie_1", method = RequestMethod.GET)
	public void starZombie(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException
	{
		request.setAttribute("msg", "帐号不能为空");
		request.getRequestDispatcher("/WEB-INF/view/login.jsp").forward(request, response);
		return;
		// System.out.println("starZombie");
		// return "success";
	}

	/**
	 * MVC-2<br>
	 * post请求，传入json,返回json<br>
	 */
	@RequestMapping(value = "/zombieing", method = RequestMethod.POST)
	public @ResponseBody RespVo zombieing(@RequestBody ReqVo reqVo, HttpServletRequest request,
			HttpServletResponse response)
	{
		System.out.println("zombieing");
		zombieService.sayHello();
		RespVo oRespVo = new RespVo();
		oRespVo.setSuccess(true);
		oRespVo.setResult("suceess");
		return oRespVo;
	}
}
