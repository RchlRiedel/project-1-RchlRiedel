set schema 'project_1';

truncate users cascade;

insert into users ("username", "password", "first_name", "last_name", "email", "role", "image")
	values 	('Mithrandir', 'YouShallNotPass', 'Gandalf', 'the Grey', 'shadofaxTheFast@email.com', 'Admin', 'https://storage.googleapis.com/project-1-rchlriedel-bucket/LOTR_Profiles/Mithrandir.jpeg'),
			('RingBearer', 'MyPrecious', 'Frodo', 'Baggins', 'frodoUnderhill@email.com', 'Member', null),
			('SamIAm', 'password', 'Samwise', 'Gamgee', 'potatoes4life@email.com', 'Member', 'https://storage.googleapis.com/project-1-rchlriedel-bucket/LOTR_Profiles/SamIAm.jpeg'),
		 	('MerryMerry', 'BrandybuckBoi', 'Meriadoc', 'Brandybuck', 'tallerThanPippin@email.com', 'Member', 'https://storage.googleapis.com/project-1-rchlriedel-bucket/LOTR_Profiles/MerryMerry.jpeg'),
		 	('FoolOfATook', '00psMyBad', 'Peregrin', 'Took', 'tallerThanMerry@email.com', 'Member', 'https://storage.googleapis.com/project-1-rchlriedel-bucket/LOTR_Profiles/FoolOfATook.jpeg'),
		 	('Strider', 'Actually87', 'Aragron II', 'Elessar Telcontar', 'Heir2Isildur@email.com', 'Member', 'https://storage.googleapis.com/project-1-rchlriedel-bucket/LOTR_Profiles/Strider.jpeg');
		 
		 
--		 	('LorealLegolas', 'BecauseYouAreWorthIt', 'Legolas', 'Greenleaf', 'EndlessQuiver@email.com', 'Member'),
--		 	('GoldenGimli', 'ThatStillOnlyCountsAs1', 'Gimli', 'Son of Gloin', 'lockbearer@email.com', 'Member'),
--		 	('CaptainoftheWhiteTower', 'NearamirFaramir', 'Boromir', 'Son of Denethor', 'sterwardPrince@email.com', 'Member');
--data to use in demos

		 
--Testing queries used in backend:

--new user (not all fields)
--insert into users ("username", "password", "email", "role", "image")
	--values ('ElendVenture','idk','wrongUniverse@email.com','Member','dlsajgjslkjsd') returning user_id; 

--Jsut using select ALL by username/password and by ID since only one table now
--select * from project_1.users u 
--where u.username = 'SamIAm' and u.password = 'password';

--select * from project_1.users u 
--where u.user_id = 11;
	
		 
select * from users;

select image from users;


--delete from users where user_id=10;

