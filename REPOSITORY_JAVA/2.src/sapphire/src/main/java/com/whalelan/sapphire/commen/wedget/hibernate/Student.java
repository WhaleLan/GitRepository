package com.whalelan.sapphire.commen.wedget.hibernate;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "student")
public class Student
{
	@Id // 用来注册主属性，@GeneratedValue用来注册主属性的生成策略，@Column用来注册属性，@Version用来注册乐观锁
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "SID", nullable = false, unique = true)
	private int sid;
	
	@Column(name="NAME") 
	private String name;
	
	@Column(name="GENDER") 
	private String gender;
	
	@Column(name="BIRTHDAY") 
	private Date birthday;
	
	@Column(name="ADDRESS") 
	private String address;

	public Student()
	{

	}

	public Student(int sid, String name, String gender, Date birthday, String address)
	{
		// super();
		this.sid = sid;
		this.name = name;
		this.gender = gender;
		this.birthday = birthday;
		this.address = address;
	}

	public int getSid()
	{
		return sid;
	}

	public void setSid(int sid)
	{
		this.sid = sid;
	}

	public String getName()
	{
		return name;
	}

	public void setName(String name)
	{
		this.name = name;
	}

	public String getGender()
	{
		return gender;
	}

	public void setGender(String gender)
	{
		this.gender = gender;
	}

	public Date getBirthday()
	{
		return birthday;
	}

	public void setBirthday(Date birthday)
	{
		this.birthday = birthday;
	}

	public String getAddress()
	{
		return address;
	}

	public void setAddress(String address)
	{
		this.address = address;
	}

	@Override
	public String toString()
	{
		return "Student [sid=" + sid + ", name=" + name + ", gender=" + gender + ", birthday=" + birthday + ", address="
				+ address + "]";
	}

}
