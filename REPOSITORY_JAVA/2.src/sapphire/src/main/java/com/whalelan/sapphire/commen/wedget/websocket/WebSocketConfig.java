package com.whalelan.sapphire.commen.wedget.websocket;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;

@Configuration
@EnableWebSocket
public class WebSocketConfig implements WebSocketConfigurer
{

	@Override
	public void registerWebSocketHandlers(WebSocketHandlerRegistry registry)
	{
		registry.addHandler(new MyWebSocketHander(),"/echo").addInterceptors(new MyHandshakeInterceptor()); //支持websocket 的访问链接
        registry.addHandler(new MyWebSocketHander(),"/sockjs/echo").addInterceptors(new MyHandshakeInterceptor()).setAllowedOrigins("*").withSockJS(); //不支持websocket的访问链接
	}

}
