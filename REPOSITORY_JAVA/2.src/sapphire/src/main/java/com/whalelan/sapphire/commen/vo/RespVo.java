package com.whalelan.sapphire.commen.vo;

public class RespVo
{
	private boolean isSuccess;
	
	private Object result;

	public boolean isSuccess()
	{
		return isSuccess;
	}

	public void setSuccess(boolean isSuccess)
	{
		this.isSuccess = isSuccess;
	}

	public Object getResult()
	{
		return result;
	}

	public void setResult(Object result)
	{
		this.result = result;
	}
}
