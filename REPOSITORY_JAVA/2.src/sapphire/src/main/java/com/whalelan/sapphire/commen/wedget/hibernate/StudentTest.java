package com.whalelan.sapphire.commen.wedget.hibernate;

public class StudentTest
{

//	private SessionFactory sessionFactory;
//	private Session session;
//	private Transaction transaction;
//
//	@Before
//	public void init()
//	{
//
//		// Configuration config = new
//		// Configuration().configure("com/whalelan/sapphire/commen/wedget/hibernate/hibernate.cfg.xml");
//		@SuppressWarnings("deprecation")
//		Configuration config = new AnnotationConfiguration()
//				.configure("com/whalelan/sapphire/commen/wedget/hibernate/hibernate.cfg.xml");
//		
//		ServiceRegistry serviceRegistry = new ServiceRegistryBuilder().applySettings(config.getProperties())
//				.buildServiceRegistry();
//
//		sessionFactory = config.buildSessionFactory(serviceRegistry);
//
//		session = sessionFactory.openSession();
//
//		transaction = session.beginTransaction();
//
//	}
//
//	@Test
//	public void testSaveStudent()
//	{
//		Student s = new Student();
//		s.setName("兰京");
//		s.setGender("男");
//		s.setBirthday(new Date());
//		s.setAddress("武汉");
//		session.save(s);
//	}
//
//	@After
//	public void destory()
//	{
//
//		transaction.commit();
//
//		session.close();
//
//		sessionFactory.close();
//
//	}

}
