package com.whalelan.sapphire.commen.wedget.hibernate;

import java.util.Date;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.cfg.Configuration;
import org.hibernate.service.ServiceRegistry;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;


public class StudentTest {

	private SessionFactory sessionFactory;
	private Session session;
	private Transaction transaction;

	@Before
	public void init() {
		
		Configuration config = new Configuration().configure();
		
		ServiceRegistry serviceRegistry = new StandardServiceRegistryBuilder().applySettings(config.getProperties())
				.getBootstrapServiceRegistry();
		
		sessionFactory = config.buildSessionFactory(serviceRegistry);
		
		session = sessionFactory.openSession();
		
		transaction = session.beginTransaction();
		
		
		
	}

	@Test
	public void testSaveStudent() {
//		Student student_1 = new Student(1, "������", "��", new Date(), "�䵱ɽ");
//		Student student_2 = new Student(2, "����", "��", new Date(), "�һ���");
//		session.save(student_1);
//		session.save(student_2);
		
		for(int i=0; i<10; i++)
		{
			Student s = new Student();
			s.setName("乔峰");
			s.setGender("男");
			s.setBirthday(new Date());
			s.setAddress("丐帮");
			session.save(s);
		}
		
	}

	@After
	public void destory() {

		transaction.commit();
		
		session.close();
		
		sessionFactory.close();
		
	}

}
