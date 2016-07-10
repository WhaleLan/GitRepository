package com.whalelan.spring.ioc;

public class Person
{
	private String name;
	
	private String home;
	
	private int age;

	public String getName()
	{
		return name;
	}

	public Person(String name, String home, int age)
	{
		super();
		this.name = name;
		this.home = home;
		this.age = age;
	}

	public Person()
	{
		super();
	}

	public void setName(String name)
	{
		this.name = name;
	}

	public String getHome()
	{
		return home;
	}

	public void setHome(String home)
	{
		this.home = home;
	}

	public int getAge()
	{
		return age;
	}

	public void setAge(int age)
	{
		this.age = age;
	}

	@Override
	public String toString()
	{
		return "Person [name=" + name + ", home=" + home + ", age=" + age + "]";
	}
}
