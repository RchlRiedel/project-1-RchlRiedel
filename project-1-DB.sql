set schema 'project_1';

truncate users cascade;

insert into users ("username", "password", "first_name", "last_name", "email", "role")
	values 	('Mithrandir', 'YouShallNotPass', 'Gandalf', 'the Grey', 'shadofaxTheFast@email.com', 'Admin'),
			('RingBearer', 'MyPrecious', 'Frodo', 'Baggins', 'frodoUnderhill@email.com', 'User'),
			('SamIAm', 'password', 'Samwise', 'Gamgee', 'potatoes4life@email.com', 'User'),
		 	('MerryMerry', 'BrandybuckBoi', 'Meriadoc', 'Brandybuck', 'tallerThanPippin@email.com', 'User'),
		 	('FoolOfATook', '00psMyBad', 'Peregrin', 'Took', 'tallerThanMerry@email.com', 'User'),
		 	('Strider', 'Actually87', 'Aragron II', 'Elessar Telcontar', 'Heir2Isildur@email.com', 'User'),
		 	('LorealLegolas', 'BecauseYouAreWorthIt', 'Legolas', 'Greenleaf', 'EndlessQuiver@email.com', 'User'),
		 	('GoldenGimli', 'ThatStillOnlyCountsAs1', 'Gimli', 'Son of Gloin', 'lockbearer@email.com', 'User'),
		 	('CaptainoftheWhiteTower', 'NearamirFaramir', 'Boromir', 'Son of Denethor', 'sterwardPrince@email.com', 'User');
--we'll want to get rid of some of this data so that I can demo adding a user

		 
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

delete from users where user_id=12;

