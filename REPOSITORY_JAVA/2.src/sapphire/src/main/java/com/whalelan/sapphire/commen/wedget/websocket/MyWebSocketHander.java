package com.whalelan.sapphire.commen.wedget.websocket;

import java.io.IOException;
import java.util.ArrayList;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.WebSocketMessage;
import org.springframework.web.socket.WebSocketSession;

public class MyWebSocketHander implements WebSocketHandler
{

	private static final ArrayList<WebSocketSession> users = new ArrayList<WebSocketSession>();

	@Override
	public void afterConnectionEstablished(WebSocketSession session) throws Exception
	{
		System.out.println("链接成功......");
		users.add(session);
		String userName = (String) session.getAttributes().get("WEBSOCKET_USERNAME");
		if (userName != null)
		{
			// 查询未读消息
			int count = 5;
			session.sendMessage(new TextMessage(count + ""));
			session.sendMessage(new TextMessage("connect"));
			session.sendMessage(new TextMessage("new_msg"));
		}
	}

	@Override
	public void handleMessage(WebSocketSession session, WebSocketMessage<?> message) throws Exception
	{
		sendMessageToUsers(new TextMessage("这是一条广播消息！"));
		// sendMessageToUsers(new TextMessage(message.getPayload() + ""));
	}

	@Override
	public void handleTransportError(WebSocketSession session, Throwable exception) throws Exception
	{
		if (session.isOpen())
		{
			session.close();
		}
		System.out.println("链接出错，关闭链接......");
		users.remove(session);
	}

	@Override
	public void afterConnectionClosed(WebSocketSession session, CloseStatus closeStatus) throws Exception
	{
		System.out.println("链接关闭......" + closeStatus.toString());
		users.remove(session);
	}

	@Override
	public boolean supportsPartialMessages()
	{
		return false;
	}

	public void sendMessageToUsers(TextMessage message)
	{
		for (WebSocketSession user : users)
		{
			try
			{
				if (user.isOpen())
				{
					user.sendMessage(message);
				}
			} catch (IOException e)
			{
				e.printStackTrace();
			}
		}
	}
	
    public void sendMessageToUser(String userName, TextMessage message) {
        for (WebSocketSession user : users) {
            if (user.getAttributes().get("WEBSOCKET_USERNAME").equals(userName)) {
                try {
                    if (user.isOpen()) {
                        user.sendMessage(message);
                    }
                } catch (IOException e) {
                    e.printStackTrace();
                }
                break;
            }
        }
    }

}
