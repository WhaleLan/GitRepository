package com.whalelan.sapphire.commen.vo;
/**
 * 作为VO的类不能要构造函数<br>
 * @author Administrator
 *
 */
public class ReqVo
{
	private String clientId;

	private String clientName;

	public String getClientId()
	{
		return clientId;
	}

	public void setClientId(String clientId)
	{
		this.clientId = clientId;
	}

	public String getClientName()
	{
		return clientName;
	}

	public void setClientName(String clientName)
	{
		this.clientName = clientName;
	}

	@Override
	public String toString()
	{
		return "ReqVo [clientId=" + clientId + ", clientName=" + clientName + "]";
	}
}
