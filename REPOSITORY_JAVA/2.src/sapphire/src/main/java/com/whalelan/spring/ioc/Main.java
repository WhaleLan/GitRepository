package com.whalelan.spring.ioc;

import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.context.support.FileSystemXmlApplicationContext;

public class Main
{
	public static void main(String[] args) 
	{
		// ClassPathXmlApplicationContext
		// ClassPathXmlApplicationContext ctx = new ClassPathXmlApplicationContext("beans_1.xml");
		
		// FileSystemXmlApplicationContext
		FileSystemXmlApplicationContext ctx = new FileSystemXmlApplicationContext("D:\\Git_Repository\\REPOSITORY_JAVA\\2.src\\sapphire\\src\\main\\resources\\beans\\beans_2.xml");
		Person person = (Person)ctx.getBean("person_2");
		System.out.println(person);
	}
}
