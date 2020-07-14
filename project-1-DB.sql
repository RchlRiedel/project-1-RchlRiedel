set schema 'project_1';

truncate roles cascade;
truncate users cascade;

insert into roles ("role")
	values 	('Admin'),
			('Fellowship Member'),
			('Deceased');
		
insert into users ("username", "password", "first_name", "last_name", "email", "role")
	values 	('Mithrandir', 'YouShallNotPass', 'Gandalf', 'the Grey', 'shadofaxTheFast@email.com', 1),
			('RingBearer', 'MyPrecious', 'Frodo', 'Baggins', 'frodoUnderhill@email.com', 3),
			('SamIAm', 'password', 'Samwise', 'Gamgee', 'potatoes4life@email.com', 3),
		 	('MerryMerry', 'BrandybuckBoi', 'Meriadoc', 'Brandybuck', 'tallerThanPippin@email.com', 3),
		 	('FoolOfATook', '00psMyBad', 'Peregrin', 'Took', 'tallerThanMerry@email.com', 3),
		 	('Strider', 'Actually87', 'Aragron II', 'Elessar Telcontar', 'Heir2Isildur@email.com', 3),
		 	('LorealLegolas', 'BecauseYouAreWorthIt', 'Legolas', 'Greenleaf', 'EndlessQuiver@email.com', 3),
		 	('GoldenGimli', 'ThatStillOnlyCountsAs1', 'Gimli', 'Son of Gloin', 'lockbearer@email.com', 3),
		 	('CaptainoftheWhiteTower', 'NearamirFaramir', 'Boromir', 'Son of Denethor', 'sterwardPrince@email.com', 3);
--we'll want to get rid of some of this data so that I can demo adding a user

		 
--select * from roles;
--select * from users;

