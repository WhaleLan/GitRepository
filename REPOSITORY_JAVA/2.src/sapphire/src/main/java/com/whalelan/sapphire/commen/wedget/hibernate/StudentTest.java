package com.whalelan.sapphire.commen.wedget.hibernate;

import java.util.Date;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.AnnotationConfiguration;
import org.hibernate.cfg.Configuration;
import org.hibernate.service.ServiceRegistry;
import org.hibernate.service.ServiceRegistryBuilder;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

public class StudentTest
{

	private SessionFactory sessionFactory;
	private Session session;
	private Transaction transaction;

	@Before
	public void init()
	{

		// Configuration config = new
		// Configuration().configure("com/whalelan/sapphire/commen/wedget/hibernate/hibernate.cfg.xml");
		@SuppressWarnings("deprecation")
		Configuration config = new AnnotationConfiguration()
				.configure("com/whalelan/sapphire/commen/wedget/hibernate/hibernate.cfg.xml");
		
		ServiceRegistry serviceRegistry = new ServiceRegistryBuilder().applySettings(config.getProperties())
				.buildServiceRegistry();

		sessionFactory = config.buildSessionFactory(serviceRegistry);

		session = sessionFactory.openSession();

		transaction = session.beginTransaction();

	}

	@Test
	public void testSaveStudent()
	{
		Student s = new Student();
		s.setName("兰京");
		s.setGender("男");
		s.setBirthday(new Date());
		s.setAddress("武汉");
		session.save(s);
	}

	@After
	public void destory()
	{

		transaction.commit();

		session.close();

		sessionFactory.close();

	}

}
