-- SET NAMES utf8mb4 COLLATE utf8mb4_unicode_ci;

set @dateinit AS VARCHAR(100) = 'referencedatesh';
SET @refdate=if(right(@dateinit, 6) = 'datesh', CURDATE(), str_to_date(@dateinit, '%Y-%m-%d'));

SET @refyear=year(@refdate);

set @antennainit = 'antennash';
SET @antenna=if(lower(left(@antennainit, 1)) = 'l', 'Liege', 'Bruxelles');

SET @quarterstartdate= MAKEDATE(YEAR(@refdate), 1)  + INTERVAL QUARTER(@refdate) QUARTER - INTERVAL 1 QUARTER;
SET @quarterenddate= MAKEDATE(YEAR(@refdate), 1) 
	+ INTERVAL QUARTER(@refdate) QUARTER
	- INTERVAL 1 DAY;

SET @startdate=makedate(@refdate, 1);
SET @enddate=LAST_DAY(DATE_ADD(makedate(@refdate, 1), INTERVAL 12-MONTH(makedate(@refdate, 1)) MONTH));

select @refdate;
select @antenna;
select @startdate, @enddate;
select @quarterstartdate, @quarterenddate;


SET @nextyear=@refyear+1;
SET @prevyear=@refyear-1;

SET @refyearwc=concat(left(@refdate,4),"%");
SET @past="1901-01-01" COLLATE utf8mb4_unicode_ci;
SET @nextyear0101= concat(@nextyear,"-01-01");


DROP FUNCTION IF EXISTS refdate;
DROP FUNCTION IF EXISTS antenna;
DROP FUNCTION IF EXISTS refyear; 
DROP FUNCTION IF EXISTS nextyear;
DROP FUNCTION IF EXISTS prevyear;
DROP FUNCTION IF EXISTS refyearwc;

create function refdate() returns VARCHAR(50) DETERMINISTIC NO SQL return @refdate;
create function antenna() returns VARCHAR(50) DETERMINISTIC NO SQL return @antenna;
create function refyear() returns INTEGER DETERMINISTIC NO SQL return @refyear;
create function nextyear() returns INTEGER DETERMINISTIC NO SQL return @nextyear;
create function prevyear() returns INTEGER DETERMINISTIC NO SQL return @prevyear;
create function refyearwc() returns VARCHAR(50) DETERMINISTIC NO SQL return @refyear;


select refyear();
select refdate();
select antenna();

Select 'SETUP build temp tables';

DROP TEMPORARY TABLE IF EXISTS p_summary;
CREATE TEMPORARY TABLE p_summary
-- STATISTIQUES 1
select 
    s_antenna.value as antenna, 
	p.pati_id, 
	p.hash, 
    s_stat.value as statut, 
    COALESCE(g.genre, "--inconnu--") as genre, 
    COALESCE(n.nationalite, "--inconnu--") as nationalite, 
    COALESCE(prog.programme, "--inconnu--") as programme, 
    COALESCE(team.team, "--inconnu--") as team
    
    from patients p 
	left join patients_information pi_stat on pi_stat.pati_id = p.pati_id 
	left join suggestions s_stat on s_stat.sugg_id = pi_stat.sugg_id 
	left join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
	left join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
	left join 
		(
			select 
				s.value as genre,
				pi.pati_id
			from 
				patients_information pi 
				inner join information_template_element pitel on pitel.itel_id = pi.itel_id 
				inner join suggestions stel on stel.sugg_id = pitel.suge_id 
				inner JOIN suggestions s on s.sugg_id = pi.sugg_id 
			where 
				stel.path_string like '/patient/fiche/information-generale/genre%'
				and @refdate between COALESCE(pi.start, @past) and COALESCE (pi.end, @refdate)
				and pi.deleted_at is null
		) g on p.pati_id = g.pati_id 		
		
        left join 
		(
			select 
				s.value as nationalite,
				pi.pati_id
			from 
				patients_information pi 
				inner join information_template_element pitel on pitel.itel_id = pi.itel_id 
				inner join suggestions stel on stel.sugg_id = pitel.suge_id 
				inner JOIN suggestions s on s.sugg_id = pi.sugg_id 
			where 
				stel.path_string like '/patient/fiche/information-generale/nationalite%'
				and @refdate between COALESCE(pi.start, @past) and COALESCE (pi.end, @refdate)
				and pi.deleted_at is null
		) n on p.pati_id = n.pati_id

        left join 
		(
			select 
				s.value as programme,
				pi.pati_id
			from 
				patients_information pi 
				inner join information_template_element pitel on pitel.itel_id = pi.itel_id 
				inner join suggestions stel on stel.sugg_id = pitel.suge_id 
				inner JOIN suggestions s on s.sugg_id = pi.sugg_id 
			where 
				stel.path_string like '/patient/suivi/programme%'
				and @refdate between COALESCE(pi.start, @past) and COALESCE (pi.end, @refdate)
				and pi.deleted_at is null
		) prog on p.pati_id = prog.pati_id

        left join 
		(
			select 
				s.value as team,
				pi.pati_id
			from 
				patients_information pi 
				inner join information_template_element pitel on pitel.itel_id = pi.itel_id 
				inner join suggestions stel on stel.sugg_id = pitel.suge_id 
				inner JOIN suggestions s on s.sugg_id = pi.sugg_id 
			where 
				stel.path_string like '/patient/suivi/equipes%'
				and @refdate between COALESCE(pi.start, @past) and COALESCE (pi.end, @refdate)
				and pi.deleted_at is null
		) team on p.pati_id = team.pati_id

	where 
            p.deleted_at is null

			and s_stat.path_string like "/patient/fiche/statut-du-suivi/%"
			and @refdate between coalesce(pi_stat.start, @past) and coalesce(pi_stat.end, @refdate)
            and pi_stat.deleted_at is null

			and s_antenna.path_string like "/patient/suivi/antenne/%"
			and @refdate between coalesce(pi_antenna.start, @past) and coalesce(pi_antenna.end, @refdate)
            and pi_antenna.deleted_at is null;

-- STATISTIQUES 2
-- Select 'PRE-TESTS 1.a. find wrong status  (diff entre patient info et patient.status) : doit retourner 0 rows';
-- SELECT 
-- 	p.pati_id,
-- 	p.hash
-- FROM 
-- 	patients as p 
-- 	inner join patients_information as pi on p.pati_id = pi.pati_id 
-- 	inner join suggestions as s on s.sugg_id = pi.sugg_id 
-- where 
-- 	pi.end is null 
-- 	and pi.deleted_at is null 
-- 	and s.path_string like "/patient/fiche/statut-du-suivi%" 
-- 	and p.status != s.value;


-- STATISTIQUES 3
Select 'PRE-TESTS 1.b find wrong status  (diff entre patient info et patient.status) : doit retourner 0 rows';
select 	h, 	ln, fn, ch, val from 
	(
		select 
			h, count(h) as ch, val, fn, ln 
		from 
			(
				SELECT 
					s.value as val, 
					p.hash as h, 
					p.firstname as fn, 
					p.lastname as ln 
				FROM 
					patients as p 
					inner join patients_information as pi on p.pati_id = pi.pati_id 
					inner join suggestions as s on s.sugg_id = pi.sugg_id 
				where 
					(
						s.path_string like "/patient/fiche/statut-du-suivi/signalement%" 
						or s.path_string like "/patient/fiche/statut-du-suivi/6" 
						or s.path_string like "/patient/fiche/statut-du-suivi/pre-suivi%" 
						or s.path_string like "/patient/fiche/statut-du-suivi/en-suivi" 
						or s.path_string like "/patient/fiche/statut-du-suivi/post-suivi" 
						or (
							s.path_string like "/patient/fiche/statut-du-suivi/disparu" 
							and year(pi.start) like year(@refdate)
						) 
						or (
							s.path_string like "/patient/fiche/statut-du-suivi/decede" 
							and year(pi.start) like year(@refdate)
						)
					) 
					and pi.end is null 
					and pi.deleted_at is null 
					and p.deleted_at is null 
				order by 
					s.value, 
					p.firstname, 
					p.lastname, 
					pi.start
			) q 
		group by h, val, fn, ln 
	) q 
where 
	ch > 1;

	

select 'PRE-TESTS 2. patients decedes sans date de décès : doit retourner 0 rows';
-- STATISTIQUES 4
-- SELECT
-- 	p.hash, 
-- 	p.firstname, 
-- 	p.lastname, 
-- 	pi.start, 
-- 	pi.end, 
-- 	s.value 
-- FROM 
-- 	patients as p 
-- 	inner join patients_information as pi on p.pati_id = pi.pati_id 
-- 	inner join suggestions as s on s.sugg_id = pi.sugg_id 
-- where 
-- 	s.path_string like "/patient/fiche/statut-du-suivi/decede" 
-- 	and pi.start is null 
-- 	and pi.deleted_at is null;
	
	

select 'PRE-TESTS 3. Lister les patients ayant 2 états simultanés : doit retourner 0 rows (chevauchement de statuts)';

-- Statistiques 5
-- SELECT 
-- 		p.hash, 
-- 		p.firstname, 
-- 		p.lastname, 
-- 		s.value, 
-- 		pi.end, 
-- 		pi2.start, 
-- 		s2.value
-- 	FROM 
-- 		patients as p 
-- 		inner join patients_information as pi on p.pati_id = pi.pati_id 
-- 		inner join suggestions as s on s.sugg_id = pi.sugg_id 
-- 		inner join patients_information as pi2 on p.pati_id = pi2.pati_id 
-- 		inner join suggestions as s2 on s2.sugg_id = pi2.sugg_id 
-- 	where 
-- 		s.path_string like "/patient/fiche/statut-du-suivi/%" 
-- 		and s2.path_string like "/patient/fiche/statut-du-suivi/%" 
-- 		and (pi2.start < pi.end) 
-- 		and (pi.start < pi2.start) 
-- 		and pi.paif_id != pi2.paif_id 
-- 		and pi.deleted_at is null 
-- 		and pi2.deleted_at is null 
-- order by 
-- 	p.firstname, 
-- 	p.lastname, 
-- 	pi.start;
    
-- Ne fonctionne pas, besoin de faire un join pour statistique 6
select antenna, hash, count(statut) as c from p_summary group by antenna, hash having c > 1;


select 'PRE-TESTS 4. count des status en cours à la date pivot';
select antenna, statut, count(pati_id) from p_summary group by antenna, statut;



select 'PRE-TESTS 5. test pour double nationalités'; # ==> à refaire ,pas correct
select antenna, hash, count(nationalite) as c from p_summary group by antenna, hash having c >1; 



-- statistique 7
select 'PRE-TESTS 6. patients without status at reference date'; 

-- SELECT 
-- 	p.hash,
--     statutsuivi.value,
--     statutsuivi.start, 
--     statutsuivi.end,
--     statutsuivi.paif_id
-- FROM 
-- 	patients as p 
-- 	left join
-- 	(
-- 		select 
-- 			pstatus_s.value,
-- 			pstatus.start,
-- 			pstatus.end,
-- 			pstatus.paif_id,
-- 			pstatus.pati_id
			
-- 		from patients_information as pstatus  
-- 		left join suggestions as pstatus_s on pstatus_s.sugg_id = pstatus.sugg_id 
-- 		where 
-- 			pstatus.deleted_at is null
--             and pstatus_s.path_string like "/patient/fiche/statut-du-suivi/%" 
-- 			and @refdate between COALESCE(pstatus.start, @refdate) and COALESCE (pstatus.end, @refdate)
-- 	) statutsuivi
-- 	on statutsuivi.pati_id = p.pati_id

-- 	where paif_id is null and p.deleted_at is null;



select 'PRE-TESTS 7. patients without team at reference date'; 
-- statistique 8
-- SELECT 
-- 	p.hash,
--     team.value,
--     team.start, 
--     team.end,
--     team.paif_id
-- FROM 
-- 	patients as p 
-- 	left join
-- 	(
-- 		select 
-- 			team_s.value,
-- 			team.start,
-- 			team.end,
-- 			team.paif_id,
-- 			team.pati_id
			
-- 		from patients_information as team  
-- 		left join suggestions as team_s on team_s.sugg_id = team.sugg_id 
-- 		where 
-- 			team.deleted_at is null
--             and team_s.path_string like "/patient/suivi/equipe%" 
-- 			and @refdate between COALESCE(team.start, @refdate) and COALESCE (team.end, @refdate)
-- 	) team
-- 	on team.pati_id = p.pati_id

-- 	where paif_id is null and p.deleted_at is null;


select 'PRE-TESTS 8. patients without birthdate'; 
-- statistiques 9
-- SELECT
-- 	s.statut,
--     t.team,
--     p.hash
-- FROM
-- 	patients as p
-- 	left join
--     (
-- 		select
-- 			pati_id,
--             team_s.value as team
-- 		from
-- 			patients_information as team 
-- 			left join suggestions as team_s on team_s.sugg_id = team.sugg_id
-- 		where
-- 			team_s.path_string like "/patient/suivi/equipe%"
-- 			and team.deleted_at is null
-- 			and @refdate between COALESCE(team.start, @refdate) and COALESCE (team.end, @refdate)
--     ) t on t.pati_id = p.pati_id

-- 	left join
--     (
-- 		select
-- 			pati_id,
--             statut_s.value as statut
-- 		from
-- 			patients_information as statut 
-- 			left join suggestions as statut_s on statut_s.sugg_id = statut.sugg_id
-- 		where
-- 			statut_s.path_string like  "/patient/fiche/statut-du-suivi/%"
--             and statut.deleted_at is null
-- 			and @refdate between COALESCE(statut.start, @refdate) and COALESCE (statut.end, @refdate)
-- 	) s on s.pati_id = p.pati_id

--     and p.birthdate is null
    
--     order by statut, team, hash;




select "Tableaux hors protocole ------------------------------";



select "Tableau xx - Nombre de patients suivi par l'équipe rue au cours de la periode de reference, en suivi ou pre-suivi actif, ayant une pathologie physique chronique (inclus assuetude) et pour qui au moins une rencontre a été réalisée dans la période de reference";
-- statistiques 10
-- select 
-- 	problem,
--     count(hash) as nombre

-- from 
-- 	(
-- 	select 
-- -- 		antenna.path_string,
-- -- 		p.hash,
-- -- 		p.firstname,
-- -- 		p.lastname,

-- 		distinct 
-- 		pathologie.problem,
--         p.hash
        
-- -- 		pathologie.start,
-- -- 		pathologie.end,
-- -- 		antenna.start,
-- -- 		antenna.end,
-- -- 		equipe.path_string,
-- -- 		equipe.start,
-- -- 		equipe.end
	  
-- 	from 
-- 		patients p 

-- 		inner join
-- 		( 
-- 			select 
-- 				pi.pati_id,
-- 				s.path_string, 
-- 				pi.start,
-- 				pi.end
-- 			from patients_information pi
-- 				inner join suggestions as s on s.sugg_id = pi.sugg_id 
-- 			where 
-- 				s.path_string like "/patient/suivi/equipes/equipe-rue" 
-- 				and pi.deleted_at is null
-- 				and coalesce(pi.start, @startdate) <= @enddate
-- 				and coalesce(pi.end, @enddate) >= @startdate 
-- 		) as equipe on p.pati_id = equipe.pati_id
		
-- 		inner join
-- 		( 
-- 			select 
-- 				pi.pati_id,
-- 				s.path_string, 
-- 				pi.start,
-- 				pi.end
-- 			from patients_information pi
-- 				inner join suggestions as s on s.sugg_id = pi.sugg_id 
-- 			where 
-- 				s.path_string in ("/patient/fiche/statut-du-suivi/en-suivi", "/patient/fiche/statut-du-suivi/pre-suivi-actif")
-- 				and pi.deleted_at is null
-- 				and coalesce(pi.start, @startdate) <= @enddate
-- 				and coalesce(pi.end, @enddate) >= @startdate 
-- 		) as suivi on p.pati_id = suivi.pati_id
-- 		and COALESCE(suivi.start, @startdate) <= COALESCE(equipe.end, @enddate)
-- 		and COALESCE(suivi.end, @enddate) >= COALESCE(equipe.start, @startdate)
		
-- 		inner join 
-- 		( 
-- 			select 
-- 				pati_id, 
-- 				s.path_string, 
-- 				pi.start,
-- 				pi.end

-- 			from patients_information pi
-- 				inner join suggestions s on s.sugg_id = pi.sugg_id 
-- 			where 
-- 				s.path_string like "/patient/suivi/antenne/%"
-- 				and pi.deleted_at is null
-- 				and s.value like @antenna 
-- 				and coalesce(pi.start, @startdate) <= @enddate
-- 				and coalesce(pi.end, @enddate) >= @startdate
-- 		) as antenna 
-- 		on p.pati_id = antenna.pati_id
-- 		and COALESCE(antenna.start, @startdate) <= COALESCE(equipe.end, @enddate)
-- 		and COALESCE(antenna.end, @enddate) >= COALESCE(equipe.start, @startdate)
-- 		and COALESCE(antenna.start, @startdate) <= COALESCE(suivi.end, @enddate)
-- 		and COALESCE(antenna.end, @enddate) >= COALESCE(suivi.start, @startdate)
		
-- 		inner join
-- 		(
-- 			select 
-- 				pi.pati_id,
-- 				if (s2.path_string  like "%mental%", "pathologie mentale", "pathologie physique chronique ou assuetude") as problem,
-- 				pi.start,
-- 				pi.end
-- 			from patients_information pi
-- 				inner join suggestions as s2 on s2.sugg_id = pi.sugg_id 
-- 				inner join patients_information_template_element pitel on pitel.pite_id = pi.itel_id 
-- 				inner join suggestions stel on stel.sugg_id = pitel.suge_id 
-- 			where 
-- 				(
-- 					stel.path_string like '/patient/fiche/assuetude/declaree%' 
-- 					or s2.path_string like '/patient/medical/patholo%'
-- 				)
-- 				and pi.deleted_at is null
-- 				and coalesce(pi.start, @startdate) <= @enddate
-- 				and coalesce(pi.end, @enddate) >= @startdate
-- 		) pathologie 
-- 		on pathologie.pati_id = p.pati_id
-- 		and COALESCE(pathologie.start, @startdate) <= COALESCE(equipe.end, @enddate)
-- 		and COALESCE(pathologie.end, @enddate) >= COALESCE(equipe.start, @startdate)
-- 		and COALESCE(pathologie.start, @startdate) <= COALESCE(antenna.end, @enddate)
-- 		and COALESCE(pathologie.end, @enddate) >= COALESCE(antenna.start, @startdate)
-- 		and COALESCE(pathologie.start, @startdate) <= COALESCE(suivi.end, @enddate)
-- 		and COALESCE(pathologie.end, @enddate) >= COALESCE(suivi.start, @startdate)

-- 	where 
-- 		p.deleted_at is null
-- 			and p.hash in
-- 			(
-- 				Select
-- 					hash
-- 				from 
-- 				(
-- 					select 
-- 						q.hash,
-- 						rencontres + conseils + transferts + soins + accompagnements as activites,
-- 						appels_sortants + appels_entrants + reunions as demarches
-- 					from
-- 						(
-- 							SELECT
-- 								p.hash,
-- 								s.value as categoriesuivi,
-- 								(
-- 									SUM(
-- 										if (
-- 											followup_reports.activity_type = 1
-- 											and followup_reports.report_type in (1, 2, 3),
-- 											1,
-- 											0
-- 										)
-- 									)
-- 								) as rencontres,
-- 								SUM(
-- 									if (
-- 										followup_reports.activity_type = 1
-- 										and sa.path_string like "%conseil%",
-- 										1,
-- 										0
-- 									)
-- 								) as conseils,
-- 								SUM(
-- 									if (
-- 										followup_reports.activity_type = 1
-- 										and sa.path_string like "%transfert%",
-- 										1,
-- 										0
-- 									)
-- 								) as transferts,
-- 								SUM(
-- 									if (
-- 										followup_reports.activity_type = 1
-- 										and sa.path_string like "%soin%",
-- 										1,
-- 										0
-- 									)
-- 								) as soins,
-- 								SUM(
-- 									if (
-- 										followup_reports.activity_type = 1
-- 										and sa.path_string like "%accomp%",
-- 										1,
-- 										0
-- 									)
-- 								) as accompagnements,
								
-- 								SUM(
-- 									if(
-- 										followup_reports.activity_type = 2,
-- 										1, 0
-- 									)
-- 								) as appels_sortants,
-- 								SUM(
-- 									if(
-- 										followup_reports.activity_type = 3,
-- 										1, 0
-- 									)
-- 								) as reunions,
-- 								SUM(
-- 									if(
-- 										followup_reports.activity_type = 4,
-- 										1, 0
-- 									)
-- 								) as appels_entrants
-- 							FROM
-- 								patients p
-- 								inner join followup_reports on followup_reports.pati_id = p.pati_id
-- 								inner join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 								inner join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 								inner join patients_information as pi on p.pati_id = pi.pati_id 
-- 								inner join suggestions as s on s.sugg_id = pi.sugg_id 
-- 								left JOIN followup_reports_activities on followup_reports_activities.fore_id = followup_reports.fore_id
-- 								left join suggestions as sa on sa.sugg_id = followup_reports_activities.sugg_id
-- 							where
-- 								s.path_string like "/patient/suivi/equipes/equipe-rue%" 
-- 								and followup_reports.report_date between COALESCE(pi.start, @startdate ) and COALESCE (pi.end, @enddate	)
-- 								and pi.deleted_at is null 
-- 								and p.deleted_at is null
-- 								and followup_reports.deleted_at is null
-- 								and followup_reports.report_date between @startdate and @enddate
-- 								and followup_reports.report_date between coalesce(pi_antenna.start, @start_date) and COALESCE (pi_antenna.end, @enddate)
-- 								and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 								and s_antenna.value like @antenna

-- 							group by
-- 								categoriesuivi, p.hash
-- 						) q
-- 					having demarches + activites > 0 
-- 					order by
-- 						categoriesuivi, q.hash
-- 					) r
-- 				)      
-- 	order by 
-- 		antenna.path_string,
-- 		problem,
-- 		p.hash,
-- 		p.firstname,
-- 		p.lastname
-- ) list
-- group by problem;





select "Tableau xx - Nombre de patients suivi par l'équipe rue au cours de la periode de reference, en suivi ou pre-suivi actif, ayant une pathologie physique chronique (inclus assuetude) et pour qui au moins une rencontre a été réalisée dans la période de reference - liste nominative ";
-- statistiques 11

-- select 
-- -- 		antenna.path_string,
-- -- 		p.hash,
-- -- 		p.firstname,
-- -- 		p.lastname,

-- 		distinct 
-- 		pathologie.problem,
--         p.hash
        
-- -- 		pathologie.start,
-- -- 		pathologie.end,
-- -- 		antenna.start,
-- -- 		antenna.end,
-- -- 		equipe.path_string,
-- -- 		equipe.start,
-- -- 		equipe.end
  
-- from 
-- 	patients p 

--     inner join
--     ( 
-- 		select 
-- 			pi.pati_id,
--             s.path_string, 
--             pi.start,
--             pi.end
--         from patients_information pi
-- 			inner join suggestions as s on s.sugg_id = pi.sugg_id 
-- 		where 
-- 			s.path_string like "/patient/suivi/equipes/equipe-rue" 
-- 			and pi.deleted_at is null
-- 			and coalesce(pi.start, @startdate) <= @enddate
-- 			and coalesce(pi.end, @enddate) >= @startdate 
--     ) as equipe on p.pati_id = equipe.pati_id
    
--     inner join
--     ( 
-- 		select 
-- 			pi.pati_id,
--             s.path_string, 
--             pi.start,
--             pi.end
--         from patients_information pi
-- 			inner join suggestions as s on s.sugg_id = pi.sugg_id 
-- 		where 
--             s.path_string in ("/patient/fiche/statut-du-suivi/en-suivi", "/patient/fiche/statut-du-suivi/pre-suivi-actif")
-- 			and pi.deleted_at is null
-- 			and coalesce(pi.start, @startdate) <= @enddate
-- 			and coalesce(pi.end, @enddate) >= @startdate 
--     ) as suivi on p.pati_id = suivi.pati_id
-- 	and COALESCE(suivi.start, @startdate) <= COALESCE(equipe.end, @enddate)
-- 	and COALESCE(suivi.end, @enddate) >= COALESCE(equipe.start, @startdate)
    
--     inner join 
--     ( 
-- 		select 
-- 			pati_id, 
--             s.path_string, 
--             pi.start,
--             pi.end

-- 		from patients_information pi
-- 			inner join suggestions s on s.sugg_id = pi.sugg_id 
-- 		where 
-- 			s.path_string like "/patient/suivi/antenne/%"
-- 			and pi.deleted_at is null
-- 			and s.value like @antenna 
-- 			and coalesce(pi.start, @startdate) <= @enddate
-- 			and coalesce(pi.end, @enddate) >= @startdate
--     ) as antenna 
--     on p.pati_id = antenna.pati_id
-- 	and COALESCE(antenna.start, @startdate) <= COALESCE(equipe.end, @enddate)
-- 	and COALESCE(antenna.end, @enddate) >= COALESCE(equipe.start, @startdate)
-- 	and COALESCE(antenna.start, @startdate) <= COALESCE(suivi.end, @enddate)
-- 	and COALESCE(antenna.end, @enddate) >= COALESCE(suivi.start, @startdate)
    
--     inner join
-- 	(
-- 		select 
-- 			pi.pati_id,
--             if (s2.path_string  like "%mental%", "pathologie mentale", "pathologie physique chronique ou assuetude") as problem,
--             pi.start,
--             pi.end
--  		from patients_information pi
-- 			inner join suggestions as s2 on s2.sugg_id = pi.sugg_id 
-- 			inner join patients_information_template_element pitel on pitel.pite_id = pi.itel_id 
-- 			inner join suggestions stel on stel.sugg_id = pitel.suge_id 
-- 		where 
-- 			(
-- 				stel.path_string like '/patient/fiche/assuetude/declaree%' 
-- 				or s2.path_string like '/patient/medical/patholo%'
-- 			)
-- 			and pi.deleted_at is null
-- 			and coalesce(pi.start, @startdate) <= @enddate
-- 			and coalesce(pi.end, @enddate) >= @startdate
-- 	) pathologie 
-- 	on pathologie.pati_id = p.pati_id
-- 	and COALESCE(pathologie.start, @startdate) <= COALESCE(equipe.end, @enddate)
-- 	and COALESCE(pathologie.end, @enddate) >= COALESCE(equipe.start, @startdate)
-- 	and COALESCE(pathologie.start, @startdate) <= COALESCE(antenna.end, @enddate)
-- 	and COALESCE(pathologie.end, @enddate) >= COALESCE(antenna.start, @startdate)
-- 	and COALESCE(pathologie.start, @startdate) <= COALESCE(suivi.end, @enddate)
-- 	and COALESCE(pathologie.end, @enddate) >= COALESCE(suivi.start, @startdate)

-- where 
-- 	p.deleted_at is null
--         and p.hash in
-- 		(
-- 			Select
-- 				hash
-- 			from 
--             (
-- 				select 
-- 					q.hash,
-- 					rencontres + conseils + transferts + soins + accompagnements as activites,
-- 					appels_sortants + appels_entrants + reunions as demarches
-- 				from
-- 					(
-- 						SELECT
-- 							p.hash,
-- 							s.value as categoriesuivi,
-- 							(
-- 								SUM(
-- 									if (
-- 										followup_reports.activity_type = 1
-- 										and followup_reports.report_type in (1, 2, 3),
-- 										1,
-- 										0
-- 									)
-- 								)
-- 							) as rencontres,
-- 							SUM(
-- 								if (
-- 									followup_reports.activity_type = 1
-- 									and sa.path_string like "%conseil%",
-- 									1,
-- 									0
-- 								)
-- 							) as conseils,
-- 							SUM(
-- 								if (
-- 									followup_reports.activity_type = 1
-- 									and sa.path_string like "%transfert%",
-- 									1,
-- 									0
-- 								)
-- 							) as transferts,
-- 							SUM(
-- 								if (
-- 									followup_reports.activity_type = 1
-- 									and sa.path_string like "%soin%",
-- 									1,
-- 									0
-- 								)
-- 							) as soins,
-- 							SUM(
-- 								if (
-- 									followup_reports.activity_type = 1
-- 									and sa.path_string like "%accomp%",
-- 									1,
-- 									0
-- 								)
-- 							) as accompagnements,
							
-- 							SUM(
-- 								if(
-- 									followup_reports.activity_type = 2,
-- 									1, 0
-- 								)
-- 							) as appels_sortants,
-- 							SUM(
-- 								if(
-- 									followup_reports.activity_type = 3,
-- 									1, 0
-- 								)
-- 							) as reunions,
-- 							SUM(
-- 								if(
-- 									followup_reports.activity_type = 4,
-- 									1, 0
-- 								)
-- 							) as appels_entrants
-- 						FROM
-- 							patients p
-- 							inner join followup_reports on followup_reports.pati_id = p.pati_id
-- 							inner join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 							inner join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 							inner join patients_information as pi on p.pati_id = pi.pati_id 
-- 							inner join suggestions as s on s.sugg_id = pi.sugg_id 
-- 							left JOIN followup_reports_activities on followup_reports_activities.fore_id = followup_reports.fore_id
-- 							left join suggestions as sa on sa.sugg_id = followup_reports_activities.sugg_id
-- 						where
-- 							s.path_string like "/patient/suivi/equipes/equipe-rue%" 
-- 							and followup_reports.report_date between COALESCE(pi.start, @startdate ) and COALESCE (pi.end, @enddate	)
-- 							and pi.deleted_at is null 
-- 							and p.deleted_at is null
-- 							and followup_reports.deleted_at is null
-- 							and followup_reports.report_date between @startdate and @enddate
-- 							and followup_reports.report_date between coalesce(pi_antenna.start, @start_date) and COALESCE (pi_antenna.end, @enddate)
-- 							and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 							and s_antenna.value like @antenna

-- 						group by
-- 							categoriesuivi, p.hash
-- 					) q
-- 				having demarches + activites > 0 
-- 				order by
-- 					categoriesuivi, q.hash
-- 				) r
-- 			)      
-- order by 
-- 	antenna.path_string,
-- 	problem,
-- 	p.hash,
--     p.firstname,
--     p.lastname;






select "Tableau xx - Nombre de patients suivi par l'équipe rue au cours de la periode de reference, en suivi ou pre-suivi actif, ayant une pathologie physique chronique (inclus assuetude) mais une rencontre n'a pas été forcement réalisée dans la période de reference ";
-- statistiques 12
-- select 
-- 	problem,
--     count(hash) as nombre

-- from 
-- 	(
-- 	select 
-- -- 		antenna.path_string,
-- -- 		p.hash,
-- -- 		p.firstname,
-- -- 		p.lastname,

-- 		distinct 
-- 		pathologie.problem,
--         p.hash
        
-- -- 		pathologie.start,
-- -- 		pathologie.end,
-- -- 		antenna.start,
-- -- 		antenna.end,
-- -- 		equipe.path_string,
-- -- 		equipe.start,
-- -- 		equipe.end
	  
-- 	from 
-- 		patients p 

-- 		inner join
-- 		( 
-- 			select 
-- 				pi.pati_id,
-- 				s.path_string, 
-- 				pi.start,
-- 				pi.end
-- 			from patients_information pi
-- 				inner join suggestions as s on s.sugg_id = pi.sugg_id 
-- 			where 
-- 				s.path_string like "/patient/suivi/equipes/equipe-rue" 
-- 				and pi.deleted_at is null
-- 				and coalesce(pi.start, @startdate) <= @enddate
-- 				and coalesce(pi.end, @enddate) >= @startdate 
-- 		) as equipe on p.pati_id = equipe.pati_id
		
-- 		inner join
-- 		( 
-- 			select 
-- 				pi.pati_id,
-- 				s.path_string, 
-- 				pi.start,
-- 				pi.end
-- 			from patients_information pi
-- 				inner join suggestions as s on s.sugg_id = pi.sugg_id 
-- 			where 
-- 				s.path_string in ("/patient/fiche/statut-du-suivi/en-suivi", "/patient/fiche/statut-du-suivi/pre-suivi-actif")
-- 				and pi.deleted_at is null
-- 				and coalesce(pi.start, @startdate) <= @enddate
-- 				and coalesce(pi.end, @enddate) >= @startdate 
-- 		) as suivi on p.pati_id = suivi.pati_id
-- 		and COALESCE(suivi.start, @startdate) <= COALESCE(equipe.end, @enddate)
-- 		and COALESCE(suivi.end, @enddate) >= COALESCE(equipe.start, @startdate)
		
-- 		inner join 
-- 		( 
-- 			select 
-- 				pati_id, 
-- 				s.path_string, 
-- 				pi.start,
-- 				pi.end

-- 			from patients_information pi
-- 				inner join suggestions s on s.sugg_id = pi.sugg_id 
-- 			where 
-- 				s.path_string like "/patient/suivi/antenne/%"
-- 				and pi.deleted_at is null
-- 				and s.value like @antenna 
-- 				and coalesce(pi.start, @startdate) <= @enddate
-- 				and coalesce(pi.end, @enddate) >= @startdate
-- 		) as antenna 
-- 		on p.pati_id = antenna.pati_id
-- 		and COALESCE(antenna.start, @startdate) <= COALESCE(equipe.end, @enddate)
-- 		and COALESCE(antenna.end, @enddate) >= COALESCE(equipe.start, @startdate)
-- 		and COALESCE(antenna.start, @startdate) <= COALESCE(suivi.end, @enddate)
-- 		and COALESCE(antenna.end, @enddate) >= COALESCE(suivi.start, @startdate)
		
-- 		inner join
-- 		(
-- 			select 
-- 				pi.pati_id,
-- 				if (s2.path_string  like "%mental%", "pathologie mentale", "pathologie physique chronique ou assuetude") as problem,
-- 				pi.start,
-- 				pi.end
-- 			from patients_information pi
-- 				inner join suggestions as s2 on s2.sugg_id = pi.sugg_id 
-- 				inner join patients_information_template_element pitel on pitel.pite_id = pi.itel_id 
-- 				inner join suggestions stel on stel.sugg_id = pitel.suge_id 
-- 			where 
-- 				(
-- 					stel.path_string like '/patient/fiche/assuetude/declaree%' 
-- 					or s2.path_string like '/patient/medical/patholo%'
-- 				)
-- 				and pi.deleted_at is null
-- 				and coalesce(pi.start, @startdate) <= @enddate
-- 				and coalesce(pi.end, @enddate) >= @startdate
-- 		) pathologie 
-- 		on pathologie.pati_id = p.pati_id
-- 		and COALESCE(pathologie.start, @startdate) <= COALESCE(equipe.end, @enddate)
-- 		and COALESCE(pathologie.end, @enddate) >= COALESCE(equipe.start, @startdate)
-- 		and COALESCE(pathologie.start, @startdate) <= COALESCE(antenna.end, @enddate)
-- 		and COALESCE(pathologie.end, @enddate) >= COALESCE(antenna.start, @startdate)
-- 		and COALESCE(pathologie.start, @startdate) <= COALESCE(suivi.end, @enddate)
-- 		and COALESCE(pathologie.end, @enddate) >= COALESCE(suivi.start, @startdate)

-- 	where 
-- 		p.deleted_at is null
-- 	order by 
-- 		antenna.path_string,
-- 		problem,
-- 		p.hash,
-- 		p.firstname,
-- 		p.lastname
-- ) list
-- group by problem;





select "Tableau xx - Nombre de patients suivi par l'équipe rue au cours de la periode de reference, en suivi ou pre-suivi actif, ayant une pathologie physique chronique (inclus assuetude) mais une rencontre n'a pas été forcement réalisée dans la période de reference - liste nominative ";

-- statistiques 13
-- select 
-- -- 		antenna.path_string,
-- -- 		p.hash,
-- -- 		p.firstname,
-- -- 		p.lastname,

-- 		distinct 
-- 		pathologie.problem,
--         p.hash
        
-- -- 		pathologie.start,
-- -- 		pathologie.end,
-- -- 		antenna.start,
-- -- 		antenna.end,
-- -- 		equipe.path_string,
-- -- 		equipe.start,
-- -- 		equipe.end
  
-- from 
-- 	patients p 

--     inner join
--     ( 
-- 		select 
-- 			pi.pati_id,
--             s.path_string, 
--             pi.start,
--             pi.end
--         from patients_information pi
-- 			inner join suggestions as s on s.sugg_id = pi.sugg_id 
-- 		where 
-- 			s.path_string like "/patient/suivi/equipes/equipe-rue" 
-- 			and pi.deleted_at is null
-- 			and coalesce(pi.start, @startdate) <= @enddate
-- 			and coalesce(pi.end, @enddate) >= @startdate 
--     ) as equipe on p.pati_id = equipe.pati_id
    
--     inner join
--     ( 
-- 		select 
-- 			pi.pati_id,
--             s.path_string, 
--             pi.start,
--             pi.end
--         from patients_information pi
-- 			inner join suggestions as s on s.sugg_id = pi.sugg_id 
-- 		where 
--             s.path_string in ("/patient/fiche/statut-du-suivi/en-suivi", "/patient/fiche/statut-du-suivi/pre-suivi-actif")
-- 			and pi.deleted_at is null
-- 			and coalesce(pi.start, @startdate) <= @enddate
-- 			and coalesce(pi.end, @enddate) >= @startdate 
--     ) as suivi on p.pati_id = suivi.pati_id
-- 	and COALESCE(suivi.start, @startdate) <= COALESCE(equipe.end, @enddate)
-- 	and COALESCE(suivi.end, @enddate) >= COALESCE(equipe.start, @startdate)
    
--     inner join 
--     ( 
-- 		select 
-- 			pati_id, 
--             s.path_string, 
--             pi.start,
--             pi.end

-- 		from patients_information pi
-- 			inner join suggestions s on s.sugg_id = pi.sugg_id 
-- 		where 
-- 			s.path_string like "/patient/suivi/antenne/%"
-- 			and pi.deleted_at is null
-- 			and s.value like @antenna 
-- 			and coalesce(pi.start, @startdate) <= @enddate
-- 			and coalesce(pi.end, @enddate) >= @startdate
--     ) as antenna 
--     on p.pati_id = antenna.pati_id
-- 	and COALESCE(antenna.start, @startdate) <= COALESCE(equipe.end, @enddate)
-- 	and COALESCE(antenna.end, @enddate) >= COALESCE(equipe.start, @startdate)
-- 	and COALESCE(antenna.start, @startdate) <= COALESCE(suivi.end, @enddate)
-- 	and COALESCE(antenna.end, @enddate) >= COALESCE(suivi.start, @startdate)
    
--     inner join
-- 	(
-- 		select 
-- 			pi.pati_id,
--             if (s2.path_string  like "%mental%", "pathologie mentale", "pathologie physique chronique ou assuetude") as problem,
--             pi.start,
--             pi.end
--  		from patients_information pi
-- 			inner join suggestions as s2 on s2.sugg_id = pi.sugg_id 
-- 			inner join patients_information_template_element pitel on pitel.pite_id = pi.itel_id 
-- 			inner join suggestions stel on stel.sugg_id = pitel.suge_id 
-- 		where 
-- 			(
-- 				stel.path_string like '/patient/fiche/assuetude/declaree%' 
-- 				or s2.path_string like '/patient/medical/patholo%'
-- 			)
-- 			and pi.deleted_at is null
-- 			and coalesce(pi.start, @startdate) <= @enddate
-- 			and coalesce(pi.end, @enddate) >= @startdate
-- 	) pathologie 
-- 	on pathologie.pati_id = p.pati_id
-- 	and COALESCE(pathologie.start, @startdate) <= COALESCE(equipe.end, @enddate)
-- 	and COALESCE(pathologie.end, @enddate) >= COALESCE(equipe.start, @startdate)
-- 	and COALESCE(pathologie.start, @startdate) <= COALESCE(antenna.end, @enddate)
-- 	and COALESCE(pathologie.end, @enddate) >= COALESCE(antenna.start, @startdate)
-- 	and COALESCE(pathologie.start, @startdate) <= COALESCE(suivi.end, @enddate)
-- 	and COALESCE(pathologie.end, @enddate) >= COALESCE(suivi.start, @startdate)

-- where 
-- 	p.deleted_at is null
      
-- order by 
-- 	antenna.path_string,
-- 	problem,
-- 	p.hash,
--     p.firstname,
--     p.lastname;





	
select '--------------------------------------------------------------'; 


select 'TABLEAU 1 : NOMBRE DE PERSONNES AVEC QUI NOUS TRAVAILLONS';
select 'Tableau 1.A. – Nouveaux signalements encodés';
-- Statistiques 14
-- select 
-- 	s_stat.value as statut, count(p.hash) as nombre
	
-- from patients p
-- 	inner join 
-- 	(
-- 		SELECT
-- 					p.pati_id,
-- 					min(pi.start) as minstart
-- 				FROM
-- 					patients as p
-- 					inner join patients_information as pi on p.pati_id = pi.pati_id
-- 					inner join suggestions as s on s.sugg_id = pi.sugg_id
-- 				where
-- 					s.path_string like "/patient/fiche/statut-du-suivi/signalement%"
-- 					and pi.deleted_at is null
-- 					and p.deleted_at is null
-- 				group by
-- 					p.pati_id
-- 	) q on q.pati_id = p.pati_id 
	
--     inner  join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 	inner  join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 	inner  join patients_information pi_stat on pi_stat.pati_id = p.pati_id 
-- 	inner  join suggestions s_stat on s_stat.sugg_id = pi_stat.sugg_id 

-- where 
-- 	q.minstart between COALESCE(pi_antenna.start, @past) and COALESCE (pi_antenna.end, @refdate)
-- 	and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 	and pi_antenna.deleted_at is null
-- 	and s_antenna.value like @antenna 

-- 	and s_stat.path_string like "/patient/fiche/statut-du-suivi/signalement%"
-- 	and q.minstart  = pi_stat.start
-- 	and pi_stat.deleted_at is null
--     and pi_stat.start like @refyearwc
-- group by s_stat.value;


select 'Tableau 1.A. – Nouveaux signalements encodés - Liste nominative';
-- statistiques 15
-- select 
-- 	s_stat.value as statut, p.hash, p.firstname, p.lastname, pi_stat.start as 'date enregistrement', minstart, s_antenna.value as 'antenne'

-- from patients p
-- 	inner join 
-- 	(
-- 		SELECT
-- 					p.pati_id,
-- 					min(pi.start) as minstart
-- 				FROM
-- 					patients as p
-- 					inner join patients_information as pi on p.pati_id = pi.pati_id
-- 					inner join suggestions as s on s.sugg_id = pi.sugg_id
-- 				where
-- 					s.path_string like "/patient/fiche/statut-du-suivi/signalement%"
-- 					and pi.deleted_at is null
-- 					and p.deleted_at is null
-- 				group by
-- 					p.pati_id
-- 	) q on q.pati_id = p.pati_id 
	
--     inner  join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 	inner  join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 	inner  join patients_information pi_stat on pi_stat.pati_id = p.pati_id 
-- 	inner  join suggestions s_stat on s_stat.sugg_id = pi_stat.sugg_id 

-- where 
-- 	q.minstart between COALESCE(pi_antenna.start, @past) and COALESCE (pi_antenna.end, @refdate)
-- 	and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 	and pi_antenna.deleted_at is null
-- 	and s_antenna.value like @antenna 

-- 	and s_stat.path_string like "/patient/fiche/statut-du-suivi/signalement%"
-- 	and q.minstart  = pi_stat.start
-- 	and pi_stat.deleted_at is null
--     and pi_stat.start like @refyearwc
-- order by statut, hash;
			
select 'Tableau 1.B. Nouveaux pré-suivis actifs encodes';
-- statistiques 16
-- select 
-- 	s_stat.value as statut, count(p.hash) as nombre
-- from patients p
-- 	inner join 
-- 	(
-- 		SELECT
-- 			p.pati_id, 
-- 			min(pi.start) as minstart
-- 		FROM
-- 			patients as p
-- 			inner join patients_information as pi on p.pati_id = pi.pati_id
-- 			inner join suggestions as s on s.sugg_id = pi.sugg_id
-- 		where
-- 			s.path_string like "/patient/fiche/statut-du-suivi/pre-suivi-actif%"
-- 			and pi.deleted_at is null
-- 			and p.deleted_at is null
-- 		group by
-- 			p.pati_id
-- 	) q on q.pati_id = p.pati_id 
--     inner  join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 	inner  join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 	inner  join patients_information pi_stat on pi_stat.pati_id = p.pati_id 
-- 	inner  join suggestions s_stat on s_stat.sugg_id = pi_stat.sugg_id 

-- where 
-- 	s_antenna.path_string like "/patient/suivi/antenne/%"
-- 	and pi_antenna.deleted_at is null
-- 	and s_antenna.value like @antenna 
-- 	and minstart between COALESCE(pi_antenna.start, @past) and COALESCE (pi_antenna.end, @refdate)

-- 	and s_stat.path_string like "/patient/fiche/statut-du-suivi/%"
-- 	and minstart = pi_stat.start
-- 	and pi_stat.deleted_at is null
--     and pi_stat.start like @refyearwc
-- group by s_stat.value;


select 'Tableau 1.B. Nouveaux pré-suivis actifs encodes - liste nominative';
-- statistiques 17
-- select 
-- 	s_stat.value as statut, p.hash, p.firstname, p.lastname, pi_stat.start as 'date enregistrement', minstart, s_antenna.value as 'antenne'

-- from patients p
-- 	inner join 
-- 	(
-- 		SELECT
-- 					p.pati_id,
-- 					min(pi.start) as minstart
-- 				FROM
-- 					patients as p
-- 					inner join patients_information as pi on p.pati_id = pi.pati_id
-- 					inner join suggestions as s on s.sugg_id = pi.sugg_id
-- 				where
-- 					s.path_string like "/patient/fiche/statut-du-suivi/pre-suivi-actif%"
-- 					and pi.deleted_at is null
-- 					and p.deleted_at is null
-- 				group by
-- 					p.pati_id
-- 	) q on q.pati_id = p.pati_id 
	
--     inner  join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 	inner  join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 	inner  join patients_information pi_stat on pi_stat.pati_id = p.pati_id 
-- 	inner  join suggestions s_stat on s_stat.sugg_id = pi_stat.sugg_id 

-- where 
-- 	q.minstart between COALESCE(pi_antenna.start, @past) and COALESCE (pi_antenna.end, @refdate)
-- 	and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 	and pi_antenna.deleted_at is null
-- 	and s_antenna.value like @antenna 

-- 	and s_stat.path_string like "/patient/fiche/statut-du-suivi/pre-suivi-actif%"
-- 	and q.minstart  = pi_stat.start
-- 	and pi_stat.deleted_at is null
--     and pi_stat.start like @refyearwc
-- order by statut, hash;




select 'Tableau 1.C. – Nombre de nouveaux suivis au cours de l’année';
-- statistiques 18
-- select 
-- 	s_stat.value as statut, count(p.hash) as nombre
-- from patients p
-- 	inner join 
-- 	(
-- 		SELECT
-- 			p.pati_id, 
-- 			min(pi.start) as minstart
-- 		FROM
-- 			patients as p
-- 			inner join patients_information as pi on p.pati_id = pi.pati_id
-- 			inner join suggestions as s on s.sugg_id = pi.sugg_id
-- 		where
-- 			s.path_string like "/patient/fiche/statut-du-suivi/en-suivi"
-- 			and pi.deleted_at is null
-- 			and p.deleted_at is null
-- 		group by
-- 			p.pati_id
-- 	) q on q.pati_id = p.pati_id 
	
--     inner  join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 	inner  join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 	inner  join patients_information pi_stat on pi_stat.pati_id = p.pati_id 
-- 	inner  join suggestions s_stat on s_stat.sugg_id = pi_stat.sugg_id 

-- where 
-- 	s_antenna.path_string like "/patient/suivi/antenne/%"
-- 	and pi_antenna.deleted_at is null
-- 	and s_antenna.value like @antenna 
-- 	and minstart between COALESCE(pi_antenna.start, @past) and COALESCE (pi_antenna.end, @refdate)

-- 	and s_stat.path_string like "/patient/fiche/statut-du-suivi/en-suivi"
-- 	and minstart = pi_stat.start
-- 	and pi_stat.deleted_at is null
--     and pi_stat.start like @refyearwc
-- group by statut;


select "Tableau 1.C. – Nombre de nouveaux suivis au cours de l’année - liste nominative";
-- select 
-- 	s_stat.value as statut, p.hash, p.firstname, p.lastname, pi_stat.start as 'date enregistrement', s_antenna.value as 'antenne'
-- from patients p
-- 	inner join 
-- 	(
-- 		SELECT
-- 			p.pati_id, 
-- 			min(pi.start) as minstart
-- 		FROM
-- 			patients as p
-- 			inner join patients_information as pi on p.pati_id = pi.pati_id
-- 			inner join suggestions as s on s.sugg_id = pi.sugg_id
-- 		where
-- 			s.path_string like "/patient/fiche/statut-du-suivi/en-suivi"
-- 			and pi.deleted_at is null
-- 			and p.deleted_at is null
-- 		group by
-- 			p.pati_id
-- 	) q on q.pati_id = p.pati_id 
	
--     inner  join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 	inner  join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 	inner  join patients_information pi_stat on pi_stat.pati_id = p.pati_id 
-- 	inner  join suggestions s_stat on s_stat.sugg_id = pi_stat.sugg_id 

-- where 
-- 	s_antenna.path_string like "/patient/suivi/antenne/%"
-- 	and pi_antenna.deleted_at is null
-- 	and s_antenna.value like @antenna 
-- 	and minstart between COALESCE(pi_antenna.start, @past) and COALESCE (pi_antenna.end, @refdate)

-- 	and s_stat.path_string like "/patient/fiche/statut-du-suivi/en-suivi%"
-- 	and minstart = pi_stat.start
-- 	and pi_stat.deleted_at is null
--     and pi_stat.start like @refyearwc
-- order by statut, hash;



select "Tableau 1.D. – Nombre de personnes passées par le suivi en cours d année";

-- select 
-- 	count(pati_id) as 'Nombre de personnes passées par le suivi en cours d année'
-- from 
-- (
-- 		SELECT 
--             p.pati_id
-- 		FROM 
-- 			patients p 
-- 			inner join patients_information pi on p.pati_id = pi.pati_id 
-- 			inner join suggestions s on s.sugg_id = pi.sugg_id
-- 			inner join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 			inner join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
--         where 
-- 			s_antenna.path_string like "/patient/suivi/antenne/%"
-- 			and pi_antenna.deleted_at is null
-- 			and s_antenna.value like @antenna
-- 			and pi.start between COALESCE(pi_antenna.start, @past) and COALESCE (pi_antenna.end, @refdate)
-- 			and p.deleted_at is null
-- 			and s.path_string like "/patient/fiche/statut-du-suivi/en-suivi" 
-- 			and pi.deleted_at is null
-- 			and pi.start < @nextyear0101  
-- 			and coalesce(pi.end, @refdate) >= concat(@refyear, "-01-01")
-- 		group by 
-- 			p.pati_id
-- ) r;


select "Tableau 1.D. – Nombre de personnes passées par le suivi en cours d’année - liste nominative";

-- SELECT 
-- 	p.pati_id,
--     p.hash,
--     p.firstname,
--     p.lastname,
-- 	pi.start,
-- 	pi.end
-- FROM 
-- 	patients p 
-- 	inner join patients_information pi on p.pati_id = pi.pati_id 
-- 	inner join suggestions s on s.sugg_id = pi.sugg_id
-- 	inner join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 	inner join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- where 
-- 	s_antenna.path_string like "/patient/suivi/antenne/%"
-- 	and pi_antenna.deleted_at is null
-- 	and s_antenna.value like @antenna
-- 	and COALESCE(pi.start, makedate(year(@refdate), 1)) < COALESCE (pi_antenna.end, makedate(year(@refdate)+1, 1))
-- 	and COALESCE(pi.end, makedate(year(@refdate)+1, 1)) > COALESCE (pi_antenna.start, makedate(year(@refdate), 1))
-- 	and p.deleted_at is null
-- 	and s.path_string like "/patient/fiche/statut-du-suivi/en-suivi" 
-- 	and pi.deleted_at is null
-- 	and pi.start < makedate(year(@refdate)+1, 1)
-- 	and coalesce(pi.end, @refdate) >= makedate(year(@refdate), 1);


select "Tableau 1.D.2. – Nombre de personnes passées par le post-suivi en cours d’année";
-- Select 
-- 	count(pati_id) as "Nombre de personnes passées par le post-suivi en cours d'année"
-- from 
-- (
-- 		SELECT 
--             p.pati_id
-- 		FROM 
-- 			patients p 
-- 			inner join patients_information pi on p.pati_id = pi.pati_id 
-- 			inner join suggestions s on s.sugg_id = pi.sugg_id
-- 			inner join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 			inner join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
--         where 
-- 			s_antenna.path_string like "/patient/suivi/antenne/%"
-- 			and pi_antenna.deleted_at is null
-- 			and s_antenna.value like @antenna
-- 			and pi.start between COALESCE(pi_antenna.start, @past) and COALESCE (pi_antenna.end, @refdate)
-- 			and p.deleted_at is null
-- 			and s.path_string like "/patient/fiche/statut-du-suivi/post-suivi" 
-- 			and pi.deleted_at is null
-- 			and pi.start < @nextyear0101  
-- 			and coalesce(pi.end, @refdate) >= concat(@refyear, "-01-01")
-- 		group by 
-- 			p.pati_id
-- ) r;

	
select "Tableau 1.D.2. – Nombre de personnes passées par le post-suivi en cours d'année - liste nominative";

-- SELECT 
-- 	p.pati_id,
--     p.hash,
--     p.firstname,
--     p.lastname,
-- 	pi.start,
-- 	pi.end
-- FROM 
-- 	patients p 
-- 	inner join patients_information pi on p.pati_id = pi.pati_id 
-- 	inner join suggestions s on s.sugg_id = pi.sugg_id
-- 	inner join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 	inner join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- where 
-- 	s_antenna.path_string like "/patient/suivi/antenne/%"
-- 	and pi_antenna.deleted_at is null
-- 	and s_antenna.value like @antenna
-- 	and pi.start between COALESCE(pi_antenna.start, @past) and COALESCE (pi_antenna.end, @refdate)
-- 	and p.deleted_at is null
-- 	and s.path_string like "/patient/fiche/statut-du-suivi/post-suivi" 
-- 	and pi.deleted_at is null
-- 	and pi.start < @nextyear0101  
-- 	and coalesce(pi.end, @refdate) >= concat(@refyear, "-01-01")
-- 	and p.pati_id in 
-- 	(
-- 		SELECT 
-- 			p.pati_id
-- 		FROM 
-- 			patients p 
-- 			inner join patients_information pi on p.pati_id = pi.pati_id 
-- 			inner join suggestions s on s.sugg_id = pi.sugg_id
-- 			inner join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 			inner join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 		where 
-- 			s_antenna.path_string like "/patient/suivi/antenne/%"
-- 			and pi_antenna.deleted_at is null
-- 			and s_antenna.value like @antenna
-- 			and pi.start between COALESCE(pi_antenna.start, @past) and COALESCE (pi_antenna.end, @refdate)
-- 			and p.deleted_at is null
-- 			and s.path_string like "/patient/fiche/statut-du-suivi/post-suivi" 
-- 			and pi.deleted_at is null
-- 			and pi.start < @nextyear0101  
-- 			and coalesce(pi.end, @refdate) >= concat(@refyear, "-01-01")
-- 		group by 
-- 			p.pati_id
-- 	);




select 'Tableau 1.E. - Nombre total de personnes signalées, en pré-suivi actif, suivi et post-suivi';
-- select 	
-- 	value, count(hash) as c 
-- from 
-- 	(
-- 		SELECT 
-- 			p.hash, 
-- 			s.value, 
-- 			p.firstname, 
-- 			p.lastname, 
-- 			pi.start, 
-- 			pi.end 
-- 		FROM 
-- 			patients as p 
-- 			inner join patients_information as pi on p.pati_id = pi.pati_id 
-- 			inner join suggestions as s on s.sugg_id = pi.sugg_id 
-- 			inner join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 			inner join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 		where 
-- 			(
-- 				s.path_string like "/patient/fiche/statut-du-suivi/signalement%" 
-- 				or s.path_string like "/patient/fiche/statut-du-suivi/pre-suivi%" 
-- 				or s.path_string like "/patient/fiche/statut-du-suivi/6" 
-- 				or s.path_string like "/patient/fiche/statut-du-suivi/en-suivi" 
-- 				or s.path_string like "/patient/fiche/statut-du-suivi/post-suivi" 
-- 				or (
-- 					s.path_string like "/patient/fiche/statut-du-suivi/disparu" 
-- 					and pi.start like @refyearwc
-- 				) 
-- 				or (
-- 					s.path_string like "/patient/fiche/statut-du-suivi/decede" 
-- 					and pi.start like @refyearwc
-- 				)
-- 			) 
-- 			and (
-- 				@refdate BETWEEN pi.start 
-- 				and COALESCE(
-- 					pi.end, 
-- 					@nextyear0101
-- 				)
-- 			) 
-- 			and pi.deleted_at is null 
-- 			and p.deleted_at is null 
			
-- 			and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 			and pi_antenna.deleted_at is null
-- 			and s_antenna.value like @antenna
-- 			and pi.start <= COALESCE (pi_antenna.end, @refdate)
-- 			and coalesce(pi.end, @refdate) >= coalesce(pi_antenna.start, @past) 

-- 		order by 
-- 			s.value, 
-- 			p.firstname, 
-- 			p.lastname, 
-- 			pi.start
-- 	) q 
-- group by value;


select 'Tableau 1.E. - Nombre total de personnes signalées, en pré-suivi actif, suivi et post-suivi - liste nominative';
-- select 
-- 	value, 
-- 	firstname, 
-- 	lastname, 
-- 	hash, 
-- 	start as debut, 
-- 	COALESCE(end, "en cours") as fin 
-- from 
-- 	(
-- 		SELECT 
-- 			p.hash, 
-- 			s.value, 
-- 			p.firstname, 
-- 			p.lastname, 
-- 			pi.start, 
-- 			pi.end 
-- 		FROM 
-- 			patients as p 
-- 			inner join patients_information as pi on p.pati_id = pi.pati_id 
-- 			inner join suggestions as s on s.sugg_id = pi.sugg_id 
-- 			inner join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 			inner join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 		where 
-- 			(
-- 				s.path_string like "/patient/fiche/statut-du-suivi/signalement%" 
-- 				or s.path_string like "/patient/fiche/statut-du-suivi/pre-suivi%" 
-- 				or s.path_string like "/patient/fiche/statut-du-suivi/6" 
-- 				or s.path_string like "/patient/fiche/statut-du-suivi/en-suivi" 
-- 				or s.path_string like "/patient/fiche/statut-du-suivi/post-suivi" 
-- 				or (
-- 					s.path_string like "/patient/fiche/statut-du-suivi/disparu" 
-- 					and pi.start like @refyearwc
-- 				) 
-- 				or (
-- 					s.path_string like "/patient/fiche/statut-du-suivi/decede" 
-- 					and pi.start like @refyearwc
-- 				)
-- 			) 
-- 			and (
-- 				@refdate BETWEEN pi.start 
-- 				and COALESCE(
-- 					pi.end, 
-- 					@nextyear0101
-- 				)
-- 			) 
-- 			and pi.deleted_at is null 
-- 			and p.deleted_at is null 
			
-- 			and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 			and pi_antenna.deleted_at is null
-- 			and s_antenna.value like @antenna			
-- 			and pi.start <= COALESCE (pi_antenna.end, @refdate)
-- 			and coalesce(pi.end, @refdate) >= coalesce(pi_antenna.start, @past) 

-- 	) q 
-- order by 
-- 	value, 
-- 	firstname, 
-- 	lastname, 
-- 	debut;

					
					
					

select 'Tableau 1.F/G. – Nombre de nouveaux patients Housing First au cours de l’année';
-- select 
-- 	r.programme, count(hash) as nombre
-- from 
-- (
-- 	select  
-- 		s.value as programme,
-- 		p.hash,
-- 		p.firstname,
-- 		p.lastname,
-- 		pi.start
-- 	from 
-- 	(
-- 		select
-- 			p.pati_id,
-- 			min(pi.start) as minstart
-- 		FROM
-- 			patients as p
-- 			inner join patients_information as pi on p.pati_id = pi.pati_id
-- 			inner join suggestions as s on s.sugg_id = pi.sugg_id
-- 			inner  join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 			inner  join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 		where
-- 			s.path_string like "/patient/suivi/programme/housing-%"
-- 			and pi.deleted_at is null
-- 			and p.deleted_at is null
			
-- 			and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 			and pi_antenna.deleted_at is null
-- 			and s_antenna.value like @antenna 
-- 			and pi.start <= COALESCE (pi_antenna.end, @refdate)
-- 			and coalesce(pi.end, @refdate) >= coalesce(pi_antenna.start, @past) 

-- 		group by p.pati_id
-- 	) q 
-- 	inner join patients as p on p.pati_id = q.pati_id
-- 	inner join patients_information as pi on p.pati_id = pi.pati_id and pi.start = q.minstart
-- 	inner join suggestions as s on s.sugg_id = pi.sugg_id

-- 	where 
-- 		s.path_string like "/patient/suivi/programme/housing-%"
-- 		and pi.deleted_at is null
-- 		and left(pi.start,4) = @refyear
-- 	order by s.value, hash
-- ) r 
-- group by programme;




select "Tableau 1.F/G. – Nombre de nouveaux patients Housing First au cours de l’année - liste nominative";



-- select  
-- 	s.value as programme,
-- 	p.hash,
-- 	p.firstname,
-- 	p.lastname,
-- 	pi.start
-- from 
-- (
-- 	select
-- 		p.pati_id,
-- 		min(pi.start) as minstart
-- 	FROM
-- 		patients as p
-- 		inner join patients_information as pi on p.pati_id = pi.pati_id
-- 		inner join suggestions as s on s.sugg_id = pi.sugg_id
-- 		inner  join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 		inner  join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 	where
-- 		s.path_string like "/patient/suivi/programme/housing-%"
-- 		and pi.deleted_at is null
-- 		and p.deleted_at is null
		
-- 		and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 		and pi_antenna.deleted_at is null
-- 		and s_antenna.value like @antenna 
-- 		and pi.start <= COALESCE (pi_antenna.end, @refdate)
-- 		and coalesce(pi.end, @refdate) >= coalesce(pi_antenna.start, @past) 

-- 	group by p.pati_id
-- ) q 
-- inner join patients as p on p.pati_id = q.pati_id
-- inner join patients_information as pi on p.pati_id = pi.pati_id and pi.start = q.minstart
-- inner join suggestions as s on s.sugg_id = pi.sugg_id

-- where 
-- 	s.path_string like "/patient/suivi/programme/housing-%"
-- 	and pi.deleted_at is null
-- 	and left(pi.start,4) = @refyear
-- order by s.value, hash;









select "Tableau 1.H. – Nombre total de patients Housing First et Housing Fast";

-- SELECT
-- 	s.value as programme,
-- 	count(p.hash) as nombre
-- FROM 
-- 	patients as p
-- 	inner join patients_information as pi on p.pati_id = pi.pati_id
-- 	inner join suggestions as s on s.sugg_id = pi.sugg_id
-- 	inner join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id
-- 	inner join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id
-- 	inner join patients_information pi_status on pi_status.pati_id = p.pati_id
-- 	inner join suggestions s_status on s_status.sugg_id = pi_status.sugg_id
-- where
-- 	s.path_string like "/patient/suivi/programme/housing-%"
-- 	and @refdate BETWEEN pi.start and COALESCE(pi.end, @nextyear0101)
-- 	and pi.deleted_at is null
-- 	and p.deleted_at is null
-- 	and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 	and pi_antenna.deleted_at is null
-- 	and s_antenna.value like @antenna
-- 	and pi.start <= COALESCE (pi_antenna.end, @refdate)
-- 	and coalesce(pi.end, @refdate) >= coalesce(pi_antenna.start, @past) 
-- 	and s_status.path_string like "/patient/fiche/statut-du-suivi/%"
-- 	and @refdate BETWEEN pi_status.start and COALESCE(pi_status.end, @nextyear0101)
-- 	and pi_status.deleted_at is null
--     and s_status.path_string not like "/patient/fiche/statut-du-suivi/decede"
--     and s_status.path_string not like "/patient/fiche/statut-du-suivi/disparu"
-- group by 
-- 	s.value;




select "Tableau 1.H. – Nombre total de patients Housing First et Housing Fast - liste nominative";

-- SELECT
-- 	p.hash,
-- 	s.value,
-- 	p.firstname,
-- 	p.lastname,
-- 	pi.start,
-- 	pi.end,
-- 	s_status.value as statut
-- FROM 
-- 	patients as p
-- 	inner join patients_information as pi on p.pati_id = pi.pati_id
-- 	inner join suggestions as s on s.sugg_id = pi.sugg_id
-- 	inner join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id
-- 	inner join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id
-- 	inner join patients_information pi_status on pi_status.pati_id = p.pati_id
-- 	inner join suggestions s_status on s_status.sugg_id = pi_status.sugg_id
-- where
-- 	s.path_string like "/patient/suivi/programme/housing-%"
-- 	and @refdate BETWEEN pi.start and COALESCE(pi.end, @nextyear0101)
-- 	and pi.deleted_at is null
-- 	and p.deleted_at is null
-- 	and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 	and pi_antenna.deleted_at is null
-- 	and s_antenna.value like @antenna
-- 	and pi.start <= COALESCE (pi_antenna.end, @refdate)
-- 	and coalesce(pi.end, @refdate) >= coalesce(pi_antenna.start, @past) 
-- 	and s_status.path_string like "/patient/fiche/statut-du-suivi/%"
-- 	and @refdate BETWEEN pi_status.start and COALESCE(pi_status.end, @nextyear0101)
-- 	and pi_status.deleted_at is null
--     and s_status.path_string not like "/patient/fiche/statut-du-suivi/decede"
--     and s_status.path_string not like "/patient/fiche/statut-du-suivi/disparu"
-- order by 
-- 	s.value, 
-- 	p.firstname, 
-- 	p.lastname, 
-- 	pi.start;




select "Tableau 1.I. – Nombre total de patients selon l’équipe de suivi";
-- select 
-- 	value, 
--     status,
--     count(hash) as nombre
-- from 
-- 	(
-- 		SELECT 
-- 			p.hash, 
-- 			s.value, 
-- 			p.firstname, 
-- 			p.lastname, 
-- 			pi.start, 
-- 			pi.end,
--             s_status.value as status
-- 		FROM 
-- 			patients as p 
-- 			inner join patients_information as pi on p.pati_id = pi.pati_id 
-- 			inner join suggestions as s on s.sugg_id = pi.sugg_id 
-- 			inner join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 			inner join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 			inner join patients_information pi_status on pi_status.pati_id = p.pati_id
-- 			inner join suggestions s_status on s_status.sugg_id = pi_status.sugg_id
-- 		where 
-- 			(
-- 				s.path_string like "/patient/suivi/equipe%" 
-- 			) 
-- 			and (
-- 				@refdate BETWEEN pi.start 
-- 				and COALESCE(
-- 					pi.end, 
-- 					@nextyear0101
-- 				)
-- 			) 
-- 			and pi.deleted_at is null 
-- 			and p.deleted_at is null 
			
-- 			and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 			and pi_antenna.deleted_at is null
-- 			and s_antenna.value like @antenna			
-- 			and pi.start <= COALESCE (pi_antenna.end, @refdate)
-- 			and coalesce(pi.end, @refdate) >= coalesce(pi_antenna.start, @past) 

-- 			and s_status.path_string like "/patient/fiche/statut-du-suivi/%"
-- 			and @refdate BETWEEN pi_status.start and COALESCE(pi_status.end, @nextyear0101)
-- 			and pi_status.deleted_at is null
-- 			and s_status.path_string not like "/patient/fiche/statut-du-suivi/decede"
-- 			and 
--             ( 
-- 				s_status.path_string like "/patient/fiche/statut-du-suivi/pre-suivi%" 
-- 				or s_status.path_string like "/patient/fiche/statut-du-suivi/en-suivi" 
-- 				or s_status.path_string like "/patient/fiche/statut-du-suivi/post-suivi" 
-- 				or (
-- 					s_status.path_string like "/patient/fiche/statut-du-suivi/6" 
-- 					and pi.start like @refyearwc
-- 				) 
-- 				or (
-- 					s_status.path_string like "/patient/fiche/statut-du-suivi/signalement%" 
-- 					and pi.start like @refyearwc
-- 				)			
-- 			)
            
-- 	) q 
-- group by 
-- 	value, 
--     status;


select "Tableau 1.I. – Nombre total de patients selon l’équipe de suivi - liste nominative";

select 
	value, 
	hash, 
	firstname, 
	lastname, 
	start as debut, 
	COALESCE(end, "en cours") as fin ,
    status
from 
	(
		SELECT 
			p.hash, 
			s.value, 
			p.firstname, 
			p.lastname, 
			pi.start, 
			pi.end,
            s_status.value as status
		FROM 
			patients as p 
			inner join patients_information as pi on p.pati_id = pi.pati_id 
			inner join suggestions as s on s.sugg_id = pi.sugg_id 
			inner join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
			inner join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
			inner join patients_information pi_status on pi_status.pati_id = p.pati_id
			inner join suggestions s_status on s_status.sugg_id = pi_status.sugg_id
		where 
			(
				s.path_string like "/patient/suivi/equipe%" 
			) 
			and (
				@refdate BETWEEN pi.start 
				and COALESCE(
					pi.end, 
					@nextyear0101
				)
			) 
			and pi.deleted_at is null 
			and p.deleted_at is null 
			
			and s_antenna.path_string like "/patient/suivi/antenne/%"
			and pi_antenna.deleted_at is null
			and s_antenna.value like @antenna			
			and pi.start <= COALESCE (pi_antenna.end, @refdate)
			and coalesce(pi.end, @refdate) >= coalesce(pi_antenna.start, @past) 

			and s_status.path_string like "/patient/fiche/statut-du-suivi/%"
			and @refdate BETWEEN pi_status.start and COALESCE(pi_status.end, @nextyear0101)
			and pi_status.deleted_at is null
			and s_status.path_string not like "/patient/fiche/statut-du-suivi/decede" 
            and 
            ( 
				s_status.path_string like "/patient/fiche/statut-du-suivi/pre-suivi%" 
				or s_status.path_string like "/patient/fiche/statut-du-suivi/en-suivi" 
				or s_status.path_string like "/patient/fiche/statut-du-suivi/post-suivi" 
				or (
					s_status.path_string like "/patient/fiche/statut-du-suivi/6" 
					and pi.start like @refyearwc
				) 
				or (
					s_status.path_string like "/patient/fiche/statut-du-suivi/signalement%" 
					and pi.start like @refyearwc
				)			
			)
            
	) q 
order by 
	value, 
    hash,
	firstname, 
	lastname, 
	start;




select 'TABLEAU 2A-1 : Nombre de rencontres/appels effectués avec les patients selon leur statut';

/*
 const ACTIVITY_STREET = 1;
    const ACTIVITY_CALL_OUT = 2;
    const ACTIVITY_MEETING = 3;
    const ACTIVITY_CALL_IN = 4;

    const REPORT_TYPE_RENC = 1;
    const REPORT_TYPE_VU = 2;
    const REPORT_TYPE_REPOS = 3;
    const REPORT_TYPE_SEARCH = 4;    
*/


-- Select
--     period as 'année',
-- 	categoriesuivi,
--     rencontres,
--     appels_sortants,
--     appels_entrants,
--     reunions,
--     rencontres+appels_sortants+appels_entrants+reunions as rencontres_reunions_et_appels
-- from
--     (
--         SELECT
--             left(followup_reports.report_date, 4) as period,
-- 			s.value as categoriesuivi,
--             (
--                 SUM(
--                     if (
--                         followup_reports.activity_type = 1
--                         and followup_reports.report_type in (1, 2, 3),
--                         1,
--                         0
--                     )
--                 )
--             ) as rencontres,
--             (
-- 				SUM(
-- 					if(
-- 						followup_reports.activity_type = 2,
-- 						1, 
--                         0
-- 					)
-- 				)
--             ) as appels_sortants,
--             (
-- 				SUM(
-- 					if(
-- 						followup_reports.activity_type = 4,
-- 						1, 
--                         0
-- 					)
-- 				)
--             ) as appels_entrants,
--             (
-- 				SUM(
-- 					if(
-- 						followup_reports.activity_type = 3,
-- 						1, 
--                         0
-- 					)
-- 				)
--             ) as reunions
            
--         FROM
--             patients p
--             inner join followup_reports on followup_reports.pati_id = p.pati_id
-- 			inner join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 			inner join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 			inner join patients_information as pi on p.pati_id = pi.pati_id 
-- 			inner join suggestions as s on s.sugg_id = pi.sugg_id 
--         where
--             (
-- 				s.path_string like "/patient/fiche/statut-du-suivi/signalement%" 
-- 				or s.path_string like "/patient/fiche/statut-du-suivi/pre-suivi%" 
-- 				or s.path_string like "/patient/fiche/statut-du-suivi/6" 
-- 				or s.path_string like "/patient/fiche/statut-du-suivi/en-suivi" 
-- 				or s.path_string like "/patient/fiche/statut-du-suivi/post-suivi" 
-- 				or (
-- 					s.path_string like "/patient/fiche/statut-du-suivi/disparu" 
-- 					and year(pi.start) = year(@refdate)
-- 				) 
-- 				or (
-- 					s.path_string like "/patient/fiche/statut-du-suivi/decede" 
-- 					and year(pi.start) = year(@refdate)
-- 				)
-- 			)

-- 			and followup_reports.report_date between COALESCE(pi.start, followup_reports.report_date) and COALESCE (pi.end, followup_reports.report_date)
-- 			and pi.deleted_at is null 
-- 			and p.deleted_at is null
--             and followup_reports.deleted_at is null
-- 			and year(followup_reports.report_date) in (@refyear, @refyear-1)
-- 			and followup_reports.report_date between coalesce(pi_antenna.start, followup_reports.report_date) and COALESCE (pi_antenna.end, followup_reports.report_date)
-- 			and s_antenna.path_string like "/patient/suivi/antenne/%"
--             and s_antenna.value like @antenna


--         group by
--             period, categoriesuivi
--     ) q
-- order by
--     period DESC,	
-- 	categoriesuivi;


select 'TABLEAU 2A-2 : Nombre d’activités effectuées avec les patients selon leur statut';

/*
 const ACTIVITY_STREET = 1;
    const ACTIVITY_CALL_OUT = 2;
    const ACTIVITY_MEETING = 3;
    const ACTIVITY_CALL_IN = 4;

    const REPORT_TYPE_RENC = 1;
    const REPORT_TYPE_VU = 2;
    const REPORT_TYPE_REPOS = 3;
    const REPORT_TYPE_SEARCH = 4;    
*/


-- Select
--     period as 'année',
-- 	categoriesuivi,
--     accompagnements,
--     conseils+transferts+soins as conseils_transferts_soins,
--     conseils + transferts + soins + accompagnements as total_activites_sauf_rencontres_et_appels
-- from
--     (
--         SELECT
--             left(followup_reports.report_date, 4) as period,
-- 			s.value as categoriesuivi,
--             SUM(
--                 if (
--                     followup_reports.activity_type = 1
--                     and sa.path_string like "%conseil%",
--                     1,
--                     0
--                 )
--             ) as conseils,
--             SUM(
--                 if (
--                     followup_reports.activity_type = 1
--                     and sa.path_string like "%transfert%",
--                     1,
--                     0
--                 )
--             ) as transferts,
--             SUM(
--                 if (
--                     followup_reports.activity_type = 1
--                     and sa.path_string like "%soin%",
--                     1,
--                     0
--                 )
--             ) as soins,
--             SUM(
--                 if (
--                     followup_reports.activity_type = 1
--                     and sa.path_string like "%accomp%",
--                     1,
--                     0
--                 )
--             ) as accompagnements
--         FROM
--             patients p
--             inner join followup_reports on followup_reports.pati_id = p.pati_id
-- 			inner join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 			inner join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 			inner join patients_information as pi on p.pati_id = pi.pati_id 
-- 			inner join suggestions as s on s.sugg_id = pi.sugg_id 
-- 			left JOIN followup_reports_activities on followup_reports_activities.fore_id = followup_reports.fore_id
--             left join suggestions as sa on sa.sugg_id = followup_reports_activities.sugg_id
--         where
--             (
-- 				s.path_string like "/patient/fiche/statut-du-suivi/signalement%" 
-- 				or s.path_string like "/patient/fiche/statut-du-suivi/pre-suivi%" 
-- 				or s.path_string like "/patient/fiche/statut-du-suivi/6" 
-- 				or s.path_string like "/patient/fiche/statut-du-suivi/en-suivi" 
-- 				or s.path_string like "/patient/fiche/statut-du-suivi/post-suivi" 
-- 				or (
-- 					s.path_string like "/patient/fiche/statut-du-suivi/disparu" 
-- 					and pi.start like @refyearwc
-- 				) 
-- 				or (
-- 					s.path_string like "/patient/fiche/statut-du-suivi/decede" 
-- 					and pi.start like @refyearwc
-- 				)
-- 			)
           
-- 			and followup_reports.report_date between COALESCE(pi.start, followup_reports.report_date) and COALESCE (pi.end, followup_reports.report_date)
-- 			and pi.deleted_at is null 
-- 			and p.deleted_at is null
--             and followup_reports.deleted_at is null
-- 			and year(followup_reports.report_date) in (@refyear, @refyear-1)
-- 			and followup_reports.report_date between coalesce(pi_antenna.start, followup_reports.report_date) and COALESCE (pi_antenna.end, followup_reports.report_date)
-- 			and s_antenna.path_string like "/patient/suivi/antenne/%"
--             and s_antenna.value like @antenna
            
--         group by
--             period, categoriesuivi
--     ) q
-- order by
--     period DESC,	
-- 	categoriesuivi;



select 'TABLEAU 2B-1 : Nombre de rencontres/appels effectués avec les patients selon l’équipe de suivi';	

-- Select
--     period as 'année',
-- 	categoriesuivi as equipe,
--     rencontres,
--     appels_sortants,
--     appels_entrants,
--     reunions,
--     rencontres+appels_sortants+appels_entrants+reunions as rencontres_reunions_et_appels

-- from
--     (
--         SELECT
--             left(followup_reports.report_date, 4) as period,
-- 			s.value as categoriesuivi,
--             (
--                 SUM(
--                     if (
--                         followup_reports.activity_type = 1
--                         and followup_reports.report_type in (1, 2, 3),
--                         1,
--                         0
--                     )
--                 )
--             ) as rencontres,
--             (
-- 				SUM(
-- 					if(
-- 						followup_reports.activity_type = 2,
-- 						1, 
--                         0
-- 					)
-- 				)
--             ) as appels_sortants,
--             (
-- 				SUM(
-- 					if(
-- 						followup_reports.activity_type = 4,
-- 						1, 
--                         0
-- 					)
-- 				)
--             ) as appels_entrants,
--             (
-- 				SUM(
-- 					if(
-- 						followup_reports.activity_type = 3,
-- 						1, 
--                         0
-- 					)
-- 				)
--             ) as reunions
--         FROM
--             patients p
--             inner join followup_reports on followup_reports.pati_id = p.pati_id
-- 			inner join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 			inner join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 			inner join patients_information as pi on p.pati_id = pi.pati_id 
-- 			inner join suggestions as s on s.sugg_id = pi.sugg_id 
--         where
-- 			s.path_string like "/patient/suivi/equipe%" 

-- 			and followup_reports.report_date between COALESCE(pi.start, followup_reports.report_date) and COALESCE (pi.end, followup_reports.report_date)
-- 			and pi.deleted_at is null 
-- 			and p.deleted_at is null
--             and followup_reports.deleted_at is null
-- 			and year(followup_reports.report_date) in (@refyear, @refyear-1)
-- 			and followup_reports.report_date between coalesce(pi_antenna.start, followup_reports.report_date) and COALESCE (pi_antenna.end, followup_reports.report_date)
-- 			and s_antenna.path_string like "/patient/suivi/antenne/%"
--             and s_antenna.value like @antenna

--         group by
--             period, categoriesuivi
--     ) q
-- order by
--     period DESC,
-- 	categoriesuivi;	



select 'TABLEAU 2B-2 : Nombre d’activités effectuées avec les patients selon l’équipe de suivi';	

-- Select
--     period as 'année',
-- 	categoriesuivi as equipe,
--     accompagnements,
-- 	conseils,
-- 	transferts,
-- 	soins,
--     conseils+transferts+soins as conseils_transferts_soins,
--     conseils + transferts + soins + accompagnements as activites
-- from
--     (
--         SELECT
--             left(followup_reports.report_date, 4) as period,
-- 			s.value as categoriesuivi,
--             SUM(
--                 if (
--                     followup_reports.activity_type = 1
--                     and sa.path_string like "%conseil%",
--                     1,
--                     0
--                 )
--             ) as conseils,
--             SUM(
--                 if (
--                     followup_reports.activity_type = 1
--                     and sa.path_string like "%transfert%",
--                     1,
--                     0
--                 )
--             ) as transferts,
--             SUM(
--                 if (
--                     followup_reports.activity_type = 1
--                     and sa.path_string like "%soin%",
--                     1,
--                     0
--                 )
--             ) as soins,
--             SUM(
--                 if (
--                     followup_reports.activity_type = 1
--                     and sa.path_string like "%accomp%",
--                     1,
--                     0
--                 )
--             ) as accompagnements
--         FROM
--             patients p
--             inner join followup_reports on followup_reports.pati_id = p.pati_id
-- 			inner join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 			inner join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 			inner join patients_information as pi on p.pati_id = pi.pati_id 
-- 			inner join suggestions as s on s.sugg_id = pi.sugg_id 
-- 			left JOIN followup_reports_activities on followup_reports_activities.fore_id = followup_reports.fore_id
--             left join suggestions as sa on sa.sugg_id = followup_reports_activities.sugg_id
--         where
-- 			s.path_string like "/patient/suivi/equipe%" 
-- 			and followup_reports.report_date between COALESCE(pi.start, followup_reports.report_date) and COALESCE (pi.end, followup_reports.report_date)
-- 			and pi.deleted_at is null 
-- 			and p.deleted_at is null
--             and followup_reports.deleted_at is null
-- 			and year(followup_reports.report_date) in (@refyear, @refyear-1)
-- 			and followup_reports.report_date between coalesce(pi_antenna.start, followup_reports.report_date) and COALESCE (pi_antenna.end, followup_reports.report_date)
-- 			and s_antenna.path_string like "/patient/suivi/antenne/%"
--             and s_antenna.value like @antenna
--         group by
--             period, categoriesuivi
--     ) q
-- order by
--     period DESC,
-- 	categoriesuivi;	
	

select 'TABLEAU 2B-2 : Nombre d’activités effectuées avec les patients selon l’équipe de suivi - liste nominative et activites detaillees';	
-- statistiques 36
        -- SELECT
        --     left(followup_reports.report_date, 4) as period,
		-- 	p.hash,
        --     followup_reports.report_date,
        --     s.value as categoriesuivi,
		-- 	case 
		-- 		when sa.path_string like '%conseil%' then 'conseil'
        --         when sa.path_string like '%transfert%' then 'transfert'
		-- 		when sa.path_string like '%soin%'  then 'soin'
        --         when sa.path_string like '%accomp%' then 'accompagnement'
		-- 	end as activite,
        --     sa.value as activite_detail
        -- FROM
        --     patients p
        --     inner join followup_reports on followup_reports.pati_id = p.pati_id
		-- 	inner join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
		-- 	inner join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
		-- 	inner join patients_information as pi on p.pati_id = pi.pati_id 
		-- 	inner join suggestions as s on s.sugg_id = pi.sugg_id 
		-- 	left JOIN followup_reports_activities on followup_reports_activities.fore_id = followup_reports.fore_id
        --     left join suggestions as sa on sa.sugg_id = followup_reports_activities.sugg_id
        -- where
		-- 	s.path_string like "/patient/suivi/equipe%" 
		-- 	and followup_reports.report_date between COALESCE(pi.start, followup_reports.report_date) and COALESCE (pi.end, followup_reports.report_date)
		-- 	and pi.deleted_at is null 
		-- 	and p.deleted_at is null
        --     and followup_reports.deleted_at is null
		-- 	and year(followup_reports.report_date) in (@refyear, @refyear-1)
        --     and followup_reports.activity_type = 1 -- uniquement les rencontres
		-- 	and followup_reports.report_date between coalesce(pi_antenna.start, followup_reports.report_date) and COALESCE (pi_antenna.end, followup_reports.report_date)
		-- 	and s_antenna.path_string like "/patient/suivi/antenne/%"
        --     and s_antenna.value like @antenna
        --     and sa.value is not null
        -- order by
        --     period, categoriesuivi, hash ;


select 'TABLEAU 2B-3 : nombre de patients pour qui un accompagnement a été effectué selon l’équipe de suivi - accompagnements uniquement';	
-- select
-- 	period,
--     categoriesuivi,
--     count(hash) as "nombre de patients"
-- from
-- (
--         SELECT
--             left(followup_reports.report_date, 4) as period,
--             s.value as categoriesuivi,
-- 			p.hash,
--             count(sa.value) as nombre_accompagnements
--         FROM
--             patients p
--             inner join followup_reports on followup_reports.pati_id = p.pati_id
-- 			inner join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 			inner join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 			inner join patients_information as pi on p.pati_id = pi.pati_id 
-- 			inner join suggestions as s on s.sugg_id = pi.sugg_id 
-- 			left JOIN followup_reports_activities on followup_reports_activities.fore_id = followup_reports.fore_id
--             left join suggestions as sa on sa.sugg_id = followup_reports_activities.sugg_id
--         where
-- 			s.path_string like "/patient/suivi/equipe%" 
-- 			and followup_reports.report_date between COALESCE(pi.start, followup_reports.report_date) and COALESCE (pi.end, followup_reports.report_date)
-- 			and pi.deleted_at is null 
-- 			and p.deleted_at is null
--             and followup_reports.deleted_at is null
-- 			and year(followup_reports.report_date) in (@refyear, @refyear-1)
--             and followup_reports.activity_type = 1 -- uniquement les rencontres
-- 			and followup_reports.report_date between coalesce(pi_antenna.start, followup_reports.report_date) and COALESCE (pi_antenna.end, followup_reports.report_date)
-- 			and s_antenna.path_string like "/patient/suivi/antenne/%"
--             and s_antenna.value like @antenna
--             and sa.path_string like '%accomp%'
--         group by 
-- 			period, categoriesuivi, hash 
--         order by
--             period, categoriesuivi, hash 
-- ) k group by period,
--     categoriesuivi;


select 'TABLEAU 2B-X :liste nominative des patients pour qui un accompagnement a été effectué selon l’équipe de suivi - liste nominative et activites detaillees - accompagnements uniquement';	

        -- SELECT
        --     left(followup_reports.report_date, 4) as period,
        --     s.value as categoriesuivi,
		-- 	p.hash,
        --     count(sa.value) as nombre_accompagnements
        -- FROM
        --     patients p
        --     inner join followup_reports on followup_reports.pati_id = p.pati_id
		-- 	inner join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
		-- 	inner join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
		-- 	inner join patients_information as pi on p.pati_id = pi.pati_id 
		-- 	inner join suggestions as s on s.sugg_id = pi.sugg_id 
		-- 	left JOIN followup_reports_activities on followup_reports_activities.fore_id = followup_reports.fore_id
        --     left join suggestions as sa on sa.sugg_id = followup_reports_activities.sugg_id
        -- where
		-- 	s.path_string like "/patient/suivi/equipe%" 
		-- 	and followup_reports.report_date between COALESCE(pi.start, followup_reports.report_date) and COALESCE (pi.end, followup_reports.report_date)
		-- 	and pi.deleted_at is null 
		-- 	and p.deleted_at is null
        --     and followup_reports.deleted_at is null
		-- 	and year(followup_reports.report_date) in (@refyear, @refyear-1)
        --     and followup_reports.activity_type = 1 -- uniquement les rencontres
		-- 	and followup_reports.report_date between coalesce(pi_antenna.start, followup_reports.report_date) and COALESCE (pi_antenna.end, followup_reports.report_date)
		-- 	and s_antenna.path_string like "/patient/suivi/antenne/%"
        --     and s_antenna.value like @antenna
        --     and sa.path_string like '%accomp%'
        -- group by 
		-- 	period, categoriesuivi, hash 
        -- order by
        --     period, categoriesuivi, hash ;
	




select 'TABLEAU 2C-1 : Nombre de rencontres/appels effectués avec les patients selon l’équipe de suivi';	

-- Select
--     period as 'année',
-- 	categoriesuivi as programme,
--     rencontres,
--     appels_sortants,
--     appels_entrants,
--     reunions,
--     rencontres+appels_sortants+appels_entrants+reunions as rencontres_reunions_et_appels

-- from
--     (
--         SELECT
--             left(followup_reports.report_date, 4) as period,
-- 			s.value as categoriesuivi,
--             (
--                 SUM(
--                     if (
--                         followup_reports.activity_type = 1
--                         and followup_reports.report_type in (1, 2, 3),
--                         1,
--                         0
--                     )
--                 )
--             ) as rencontres,
--             (
-- 				SUM(
-- 					if(
-- 						followup_reports.activity_type = 2,
-- 						1, 
--                         0
-- 					)
-- 				)
--             ) as appels_sortants,
--             (
-- 				SUM(
-- 					if(
-- 						followup_reports.activity_type = 4,
-- 						1, 
--                         0
-- 					)
-- 				)
--             ) as appels_entrants,
--             (
-- 				SUM(
-- 					if(
-- 						followup_reports.activity_type = 3,
-- 						1, 
--                         0
-- 					)
-- 				)
--             ) as reunions
--         FROM
--             patients p
--             inner join followup_reports on followup_reports.pati_id = p.pati_id
-- 			inner join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 			inner join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 			inner join patients_information as pi on p.pati_id = pi.pati_id 
-- 			inner join suggestions as s on s.sugg_id = pi.sugg_id 
--         where
-- 			s.path_string like "/patient/suivi/programme%" 
-- 			and followup_reports.report_date between COALESCE(pi.start, followup_reports.report_date) and COALESCE (pi.end, followup_reports.report_date)
-- 			and pi.deleted_at is null 
-- 			and p.deleted_at is null
--             and followup_reports.deleted_at is null
-- 			and year(followup_reports.report_date) in (@refyear, @refyear-1)
-- 			and followup_reports.report_date between coalesce(pi_antenna.start, followup_reports.report_date) and COALESCE (pi_antenna.end, followup_reports.report_date)
-- 			and s_antenna.path_string like "/patient/suivi/antenne/%"
--             and s_antenna.value like @antenna
--         group by
--             period, categoriesuivi
--     ) q
-- order by
--     period DESC,
-- 	categoriesuivi;	


select 'TABLEAU 2C-2 : Nombre d’activités effectuées avec les patients selon le programme de logement';	

-- Select
--     period as 'année',
-- 	categoriesuivi as programme,
--     accompagnements,
--     conseils+transferts+soins as conseils_transferts_soins,
--     conseils + transferts + soins + accompagnements as total_activites_sauf_rencontres
-- from
--     (
--         SELECT
--             left(followup_reports.report_date, 4) as period,
-- 			s.value as categoriesuivi,
--             SUM(
--                 if (
--                     followup_reports.activity_type = 1
--                     and sa.path_string like "%conseil%",
--                     1,
--                     0
--                 )
--             ) as conseils,
--             SUM(
--                 if (
--                     followup_reports.activity_type = 1
--                     and sa.path_string like "%transfert%",
--                     1,
--                     0
--                 )
--             ) as transferts,
--             SUM(
--                 if (
--                     followup_reports.activity_type = 1
--                     and sa.path_string like "%soin%",
--                     1,
--                     0
--                 )
--             ) as soins,
--             SUM(
--                 if (
--                     followup_reports.activity_type = 1
--                     and sa.path_string like "%accomp%",
--                     1,
--                     0
--                 )
--             ) as accompagnements
 
--         FROM
--             patients p
--             inner join followup_reports on followup_reports.pati_id = p.pati_id
-- 			inner join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 			inner join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 			inner join patients_information as pi on p.pati_id = pi.pati_id 
-- 			inner join suggestions as s on s.sugg_id = pi.sugg_id 
-- 			left JOIN followup_reports_activities on followup_reports_activities.fore_id = followup_reports.fore_id
--             left join suggestions as sa on sa.sugg_id = followup_reports_activities.sugg_id
--         where
-- 			s.path_string like "/patient/suivi/programme%" 
-- 			and followup_reports.report_date between COALESCE(pi.start, followup_reports.report_date) and COALESCE (pi.end, followup_reports.report_date)
-- 			and pi.deleted_at is null 
-- 			and p.deleted_at is null
--             and followup_reports.deleted_at is null
-- 			and year(followup_reports.report_date) in (@refyear, @refyear-1)
-- 			and followup_reports.report_date between coalesce(pi_antenna.start, followup_reports.report_date) and COALESCE (pi_antenna.end, followup_reports.report_date)
-- 			and s_antenna.path_string like "/patient/suivi/antenne/%"
--             and s_antenna.value like @antenna
--         group by
--             period, categoriesuivi
--     ) q
-- order by
--     period DESC,
-- 	categoriesuivi;	





select 'TABLEAU 2D : Durée totale et moyenne des activités effectuées avec les patients selon leur statut';	

-- Select
--     period as 'année',
-- 	categoriesuivi,
--     rencontres_total,
--     rencontres_count,
--     round(rencontres_total/rencontres_count, 2) as duree_rencontre_moyenne_en_heures
-- from
--     (
--         SELECT
--             left(followup_reports.report_date, 4) as period,
-- 			s.value as categoriesuivi,
--             (
--                 round(SUM(
--                     if (
--                         followup_reports.activity_type = 1
--                         and followup_reports.report_type in (1, 2, 3),
--                         TIME_TO_SEC(followup_reports.duration),
--                         0
--                     )
--                 )/3600, 2)
--             ) as rencontres_total,

--             (
--                 SUM(
--                     if (
--                         followup_reports.activity_type = 1
--                         and followup_reports.report_type in (1, 2, 3),
--                         1,
--                         0
--                     )
--                 )
--             ) as rencontres_count

--         FROM
--             patients p
--             inner join followup_reports on followup_reports.pati_id = p.pati_id
-- 			inner join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 			inner join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 			inner join patients_information as pi on p.pati_id = pi.pati_id 
-- 			inner join suggestions as s on s.sugg_id = pi.sugg_id 
--         where
--             (
-- 				s.path_string like "/patient/fiche/statut-du-suivi/signalement%" 
-- 				or s.path_string like "/patient/fiche/statut-du-suivi/pre-suivi%" 
-- 				or s.path_string like "/patient/fiche/statut-du-suivi/6" 
-- 				or s.path_string like "/patient/fiche/statut-du-suivi/en-suivi" 
-- 				or s.path_string like "/patient/fiche/statut-du-suivi/post-suivi" 
-- 				or (
-- 					s.path_string like "/patient/fiche/statut-du-suivi/disparu" 
-- 					and pi.start like @refyearwc
-- 				) 
-- 				or (
-- 					s.path_string like "/patient/fiche/statut-du-suivi/decede" 
-- 					and pi.start like @refyearwc
-- 				)
-- 			)
-- 			and followup_reports.report_date between COALESCE(pi.start, followup_reports.report_date) and COALESCE (pi.end, followup_reports.report_date)
-- 			and pi.deleted_at is null 
-- 			and p.deleted_at is null
--             and followup_reports.deleted_at is null
-- 			and year(followup_reports.report_date) in (@refyear, @refyear-1)
-- 			and followup_reports.report_date between coalesce(pi_antenna.start, followup_reports.report_date) and COALESCE (pi_antenna.end, followup_reports.report_date)
-- 			and s_antenna.path_string like "/patient/suivi/antenne/%"
--             and s_antenna.value like @antenna

--         group by
--             period, categoriesuivi
--     ) q
-- order by
--     period DESC,	
-- 	categoriesuivi;
  

select 'TABLEAU 2E : Durée totale et moyenne des activités effectuées avec les patients selon l’équipe de suivi';	

-- Select
--     period as 'année',
-- 	categoriesuivi as equipe,
--     rencontres_total,
--     rencontres_count,
--     round(rencontres_total/rencontres_count, 2) as duree_rencontre_moyenne_en_heures
-- from
--     (
--         SELECT
--             left(followup_reports.report_date, 4) as period,
-- 			s.value as categoriesuivi,
--             (
--                 round(SUM(
--                     if (
--                         followup_reports.activity_type = 1
--                         and followup_reports.report_type in (1, 2, 3, 4),
--                         TIME_TO_SEC(followup_reports.duration),
--                         0
--                     )
--                 )/3600, 2)
--             ) as rencontres_total,

--             (
--                 SUM(
--                     if (
--                         followup_reports.activity_type = 1
--                         and followup_reports.report_type in (1, 2, 3, 4),
--                         1,
--                         0
--                     )
--                 )
--             ) as rencontres_count


--         FROM
--             patients p
--             inner join followup_reports on followup_reports.pati_id = p.pati_id
-- 			inner join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 			inner join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 			inner join patients_information as pi on p.pati_id = pi.pati_id 
-- 			inner join suggestions as s on s.sugg_id = pi.sugg_id 
--         where
-- 			s.path_string like  "/patient/suivi/equipe%"  
-- 			and followup_reports.report_date between COALESCE(pi.start, followup_reports.report_date) and COALESCE (pi.end, followup_reports.report_date)
-- 			and pi.deleted_at is null 
-- 			and p.deleted_at is null
--             and followup_reports.deleted_at is null
-- 			and year(followup_reports.report_date) in (@refyear, @refyear-1)
-- 			and followup_reports.report_date between coalesce(pi_antenna.start, followup_reports.report_date) and COALESCE (pi_antenna.end, followup_reports.report_date)
-- 			and s_antenna.path_string like "/patient/suivi/antenne/%"
--             and s_antenna.value like @antenna
--         group by
--             period, categoriesuivi
--     ) q
-- order by
--     period DESC,	
-- 	categoriesuivi;
	

select 'TABLEAU 2F : Durée totale et moyenne des activités effectuées avec les patients selon le programme de logement';	

-- Select
--     period as 'année',
-- 	categoriesuivi as programme,
--     rencontres_total,
--     rencontres_count,
--     round(rencontres_total/rencontres_count, 2) as duree_rencontre_moyenne_en_heures
-- from
--     (
--         SELECT
--             left(followup_reports.report_date, 4) as period,
-- 			s.value as categoriesuivi,
--             (
--                 round(SUM(
--                     if (
--                         followup_reports.activity_type = 1
--                         and followup_reports.report_type in (1, 2, 3, 4),
--                         TIME_TO_SEC(followup_reports.duration),
--                         0
--                     )
--                 )/3600, 2)
--             ) as rencontres_total,

--             (
--                 SUM(
--                     if (
--                         followup_reports.activity_type = 1
--                         and followup_reports.report_type in (1, 2, 3, 4),
--                         1,
--                         0
--                     )
--                 )
--             ) as rencontres_count


--         FROM
--             patients p
--             inner join followup_reports on followup_reports.pati_id = p.pati_id
-- 			inner join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 			inner join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 			inner join patients_information as pi on p.pati_id = pi.pati_id 
-- 			inner join suggestions as s on s.sugg_id = pi.sugg_id 
--         where
-- 			s.path_string like  "/patient/suivi/programme%"  
-- 			and followup_reports.report_date between COALESCE(pi.start, followup_reports.report_date) and COALESCE (pi.end, followup_reports.report_date)
-- 			and pi.deleted_at is null 
-- 			and p.deleted_at is null
--             and followup_reports.deleted_at is null
-- 			and year(followup_reports.report_date) in (@refyear, @refyear-1)
-- 			and followup_reports.report_date between coalesce(pi_antenna.start, followup_reports.report_date) and COALESCE (pi_antenna.end, followup_reports.report_date)
-- 			and s_antenna.path_string like "/patient/suivi/antenne/%"
--             and s_antenna.value like @antenna
--         group by
--             period, categoriesuivi
--     ) q
-- order by
--     period DESC,	
-- 	categoriesuivi;


/*  3. demarches */ 

select 'TABLEAU 3A : Nombre de démarches effectuées pour les patients selon leur statut';

/*
 const ACTIVITY_STREET = 1;
    const ACTIVITY_CALL_OUT = 2;
    const ACTIVITY_MEETING = 3;
    const ACTIVITY_CALL_IN = 4;

    const REPORT_TYPE_RENC = 1;
    const REPORT_TYPE_VU = 2;
    const REPORT_TYPE_REPOS = 3;
    const REPORT_TYPE_SEARCH = 4;    
*/

-- Select
--     period as 'année',
-- 	categoriesuivi,
--     appels_sortants,
--     appels_entrants,
--     reunions,
--     appels_sortants + appels_entrants + reunions as demarches
-- from
--     (
--         SELECT
--             left(followup_reports.report_date, 4) as period,
-- 			s.value as categoriesuivi,
--             SUM(
--                 if(
--                     followup_reports.activity_type = 2,
--                     1, 0
--                 )
--             ) as appels_sortants,
--             SUM(
--                 if(
--                     followup_reports.activity_type = 3,
--                     1, 0
--                 )
--             ) as reunions,
--             SUM(
--                 if(
--                     followup_reports.activity_type = 4,
--                     1, 0
--                 )
--             ) as appels_entrants
--         FROM
--             patients p
--             inner join followup_reports on followup_reports.pati_id = p.pati_id
-- 			inner join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 			inner join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 			inner join patients_information as pi on p.pati_id = pi.pati_id 
-- 			inner join suggestions as s on s.sugg_id = pi.sugg_id 
-- 			left JOIN followup_reports_activities on followup_reports_activities.fore_id = followup_reports.fore_id
--             left join suggestions as sa on sa.sugg_id = followup_reports_activities.sugg_id
--         where
--             (
-- 				s.path_string like "/patient/fiche/statut-du-suivi/signalement%" 
-- 				or s.path_string like "/patient/fiche/statut-du-suivi/pre-suivi%" 
-- 				or s.path_string like "/patient/fiche/statut-du-suivi/6" 
-- 				or s.path_string like "/patient/fiche/statut-du-suivi/en-suivi" 
-- 				or s.path_string like "/patient/fiche/statut-du-suivi/post-suivi" 
-- 				or (
-- 					s.path_string like "/patient/fiche/statut-du-suivi/disparu" 
-- 					and pi.start like @refyearwc
-- 				) 
-- 				or (
-- 					s.path_string like "/patient/fiche/statut-du-suivi/decede" 
-- 					and pi.start like @refyearwc
-- 				)
-- 			)
-- 			and followup_reports.report_date between COALESCE(pi.start, @past) and COALESCE (pi.end, @nextyear0101	)
-- 			and pi.deleted_at is null 
-- 			and p.deleted_at is null
--             and followup_reports.deleted_at is null
-- 			and year(followup_reports.report_date) in (@refyear, @refyear-1)
-- 			and followup_reports.report_date between coalesce(pi_antenna.start, @past) and COALESCE (pi_antenna.end, @refdate)
-- 			and s_antenna.path_string like "/patient/suivi/antenne/%"
--             and s_antenna.value like @antenna
--         group by
--             period, categoriesuivi
--     ) q
-- order by
--     period DESC,	
-- 	categoriesuivi;
    


select 'TABLEAU 3B : Nombre de démarches effectuées pour les patients selon l’équipe de suivi';	

-- Select
--     period as 'année',
-- 	categoriesuivi as equipe,
--     appels_sortants,
--     appels_entrants,
--     reunions,
--     appels_sortants + appels_entrants + reunions as demarches
-- from
--     (
--         SELECT
--             left(followup_reports.report_date, 4) as period,
-- 			s.value as categoriesuivi,

--             SUM(
--                 if(
--                     followup_reports.activity_type = 2,
--                     1, 0
--                 )
--             ) as appels_sortants,
--             SUM(
--                 if(
--                     followup_reports.activity_type = 3,
--                     1, 0
--                 )
--             ) as reunions,
--             SUM(
--                 if(
--                     followup_reports.activity_type = 4,
--                     1, 0
--                 )
--             ) as appels_entrants
--         FROM
--             patients p
--             inner join followup_reports on followup_reports.pati_id = p.pati_id
-- 			inner join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 			inner join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 			inner join patients_information as pi on p.pati_id = pi.pati_id 
-- 			inner join suggestions as s on s.sugg_id = pi.sugg_id 
-- 			left JOIN followup_reports_activities on followup_reports_activities.fore_id = followup_reports.fore_id
--             left join suggestions as sa on sa.sugg_id = followup_reports_activities.sugg_id
--         where
-- 			s.path_string like "/patient/suivi/equipe%" 
-- 			and followup_reports.report_date between COALESCE(pi.start, @past) and COALESCE (pi.end, @nextyear0101	)
-- 			and pi.deleted_at is null 
-- 			and p.deleted_at is null
--             and followup_reports.deleted_at is null
-- 			and year(followup_reports.report_date) in (@refyear, @refyear-1)
-- 			and followup_reports.report_date between coalesce(pi_antenna.start, @past) and COALESCE (pi_antenna.end, @refdate)
-- 			and s_antenna.path_string like "/patient/suivi/antenne/%"
--             and s_antenna.value like @antenna
--         group by
--             period, categoriesuivi
--     ) q
-- order by
--     period DESC,
-- 	categoriesuivi;	
    
	

select 'TABLEAU 3C : Nombre de démarches effectuées pour les patients selon le programme de logement';	

-- Select
--     period as 'année',
-- 	categoriesuivi as programme,
--     appels_sortants,
--     appels_entrants,
--     reunions,
--     appels_sortants + appels_entrants + reunions as demarches
-- from
--     (
--         SELECT
--             left(followup_reports.report_date, 4) as period,
-- 			s.value as categoriesuivi,
            
--             SUM(
--                 if(
--                     followup_reports.activity_type = 2,
--                     1, 0
--                 )
--             ) as appels_sortants,
--             SUM(
--                 if(
--                     followup_reports.activity_type = 3,
--                     1, 0
--                 )
--             ) as reunions,
--             SUM(
--                 if(
--                     followup_reports.activity_type = 4,
--                     1, 0
--                 )
--             ) as appels_entrants
--         FROM
--             patients p
--             inner join followup_reports on followup_reports.pati_id = p.pati_id
-- 			inner join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 			inner join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 			inner join patients_information as pi on p.pati_id = pi.pati_id 
-- 			inner join suggestions as s on s.sugg_id = pi.sugg_id 
-- 			left JOIN followup_reports_activities on followup_reports_activities.fore_id = followup_reports.fore_id
--             left join suggestions as sa on sa.sugg_id = followup_reports_activities.sugg_id
--         where
-- 			s.path_string like "/patient/suivi/programme%" 
-- 			and followup_reports.report_date between COALESCE(pi.start, @past) and COALESCE (pi.end, @nextyear0101	)
-- 			and pi.deleted_at is null 
-- 			and p.deleted_at is null
--             and followup_reports.deleted_at is null
-- 			and year(followup_reports.report_date) in (@refyear, @refyear-1)
-- 			and followup_reports.report_date between coalesce(pi_antenna.start, @past) and COALESCE (pi_antenna.end, @refdate)
-- 			and s_antenna.path_string like "/patient/suivi/antenne/%"
--             and s_antenna.value like @antenna
--         group by
--             period, categoriesuivi
--     ) q
-- order by
--     period DESC,
-- 	categoriesuivi;	


select 'TABLEAU 3D : Durée totale et moyenne des démarches effectuées pour les patients selon leur statut';	

-- Select
--     period as 'année',
-- 	categoriesuivi,
	
-- 	appels_entrants,
-- 	appels_sortants_duration,
-- 	round(appels_sortants_duration/appels_entrants,2) as appels_entrants_moyenne,
	
-- 	appels_sortants,
-- 	appels_sortants_duration,
-- 	round(appels_sortants_duration/appels_sortants,2) as appels_sortants_moyenne,
	
-- 	reunions,
-- 	reunions_duration,
-- 	round(reunions_duration/reunions,2) as reunions_moyenne


-- from
--     (
--         SELECT
--             left(followup_reports.report_date, 4) as period,
-- 			s.value as categoriesuivi,

--             SUM(
--                 if(
--                     followup_reports.activity_type = 2,
--                     1, 0
--                 )
--             ) as appels_sortants,
--             SUM(
--                 if(
--                     followup_reports.activity_type = 3,
--                     1, 0
--                 )
--             ) as reunions,
--             SUM(
--                 if(
--                     followup_reports.activity_type = 4,
--                     1, 0
--                 )
--             ) as appels_entrants,


--             SUM(
--                 if(
--                     followup_reports.activity_type = 2,
--                     TIME_TO_SEC(followup_reports.duration), 0
--                 )
--             )/3600 as appels_sortants_duration,
--             SUM(
--                 if(
--                     followup_reports.activity_type = 3,
--                     TIME_TO_SEC(followup_reports.duration), 0
--                 )
--             )/3600 as reunions_duration,
--             SUM(
--                 if(
--                     followup_reports.activity_type = 4,
--                     TIME_TO_SEC(followup_reports.duration), 0
--                 )
--             )/3600 as appels_entrants_duration


--         FROM
--             patients p
--             inner join followup_reports on followup_reports.pati_id = p.pati_id
-- 			inner join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 			inner join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 			inner join patients_information as pi on p.pati_id = pi.pati_id 
-- 			inner join suggestions as s on s.sugg_id = pi.sugg_id 
-- 			left JOIN followup_reports_activities on followup_reports_activities.fore_id = followup_reports.fore_id
--             left join suggestions as sa on sa.sugg_id = followup_reports_activities.sugg_id
--         where
--             (
-- 				s.path_string like "/patient/fiche/statut-du-suivi/signalement%" 
-- 				or s.path_string like "/patient/fiche/statut-du-suivi/pre-suivi%" 
-- 				or s.path_string like "/patient/fiche/statut-du-suivi/6" 
-- 				or s.path_string like "/patient/fiche/statut-du-suivi/en-suivi" 
-- 				or s.path_string like "/patient/fiche/statut-du-suivi/post-suivi" 
-- 				or (
-- 					s.path_string like "/patient/fiche/statut-du-suivi/disparu" 
-- 					and pi.start like @refyearwc
-- 				) 
-- 				or (
-- 					s.path_string like "/patient/fiche/statut-du-suivi/decede" 
-- 					and pi.start like @refyearwc
-- 				)
-- 			)
-- 			and followup_reports.report_date between COALESCE(pi.start, @past) and COALESCE (pi.end, @nextyear0101	)
-- 			and pi.deleted_at is null 
-- 			and p.deleted_at is null
--             and followup_reports.deleted_at is null
-- 			and year(followup_reports.report_date) in (@refyear, @refyear-1)
-- 			and followup_reports.report_date between coalesce(pi_antenna.start, @past) and COALESCE (pi_antenna.end, @refdate)
-- 			and s_antenna.path_string like "/patient/suivi/antenne/%"
--             and s_antenna.value like @antenna
--         group by
--             period, categoriesuivi
--     ) q
-- order by
--     period DESC,	
-- 	categoriesuivi;


select 'TABLEAU 3E : Durée totale et moyenne des démarches effectuées pour les patients selon l’équipe de suivi';	


-- Select
--     period as 'année',
-- 	categoriesuivi,
	
-- 	appels_entrants,
-- 	appels_sortants_duration,
-- 	round(appels_sortants_duration/appels_entrants,2) as appels_entrants_moyenne,
	
-- 	appels_sortants,
-- 	appels_sortants_duration,
-- 	round(appels_sortants_duration/appels_sortants,2) as appels_sortants_moyenne,
	
-- 	reunions,
-- 	reunions_duration,
-- 	round(reunions_duration/reunions,2) as reunions_moyenne


-- from
--     (
--         SELECT
--             left(followup_reports.report_date, 4) as period,
-- 			s.value as categoriesuivi,

--             SUM(
--                 if(
--                     followup_reports.activity_type = 2,
--                     1, 0
--                 )
--             ) as appels_sortants,
--             SUM(
--                 if(
--                     followup_reports.activity_type = 3,
--                     1, 0
--                 )
--             ) as reunions,
--             SUM(
--                 if(
--                     followup_reports.activity_type = 4,
--                     1, 0
--                 )
--             ) as appels_entrants,


--             SUM(
--                 if(
--                     followup_reports.activity_type = 2,
--                     TIME_TO_SEC(followup_reports.duration), 0
--                 )
--             )/3600 as appels_sortants_duration,
--             SUM(
--                 if(
--                     followup_reports.activity_type = 3,
--                     TIME_TO_SEC(followup_reports.duration), 0
--                 )
--             )/3600 as reunions_duration,
--             SUM(
--                 if(
--                     followup_reports.activity_type = 4,
--                     TIME_TO_SEC(followup_reports.duration), 0
--                 )
--             )/3600 as appels_entrants_duration


--         FROM
--             patients p
--             inner join followup_reports on followup_reports.pati_id = p.pati_id
-- 			inner join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 			inner join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 			inner join patients_information as pi on p.pati_id = pi.pati_id 
-- 			inner join suggestions as s on s.sugg_id = pi.sugg_id 
-- 			left JOIN followup_reports_activities on followup_reports_activities.fore_id = followup_reports.fore_id
--             left join suggestions as sa on sa.sugg_id = followup_reports_activities.sugg_id
--         where
-- 			s.path_string like  "/patient/suivi/equipe%"  
-- 			and followup_reports.report_date between COALESCE(pi.start, @past) and COALESCE (pi.end, @nextyear0101	)
-- 			and pi.deleted_at is null 
-- 			and p.deleted_at is null
--             and followup_reports.deleted_at is null
-- 			and year(followup_reports.report_date) in (@refyear, @refyear-1)
-- 			and followup_reports.report_date between coalesce(pi_antenna.start, @past) and COALESCE (pi_antenna.end, @refdate)
-- 			and s_antenna.path_string like "/patient/suivi/antenne/%"
--             and s_antenna.value like @antenna
--         group by
--             period, categoriesuivi
--     ) q
-- order by
--     period DESC,	
-- 	categoriesuivi;

	
select 'TABLEAU 3F : Durée totale et moyenne démarches effectuées pour les patients selon le programme de logement';	

-- Select
--     period as 'année',
-- 	categoriesuivi,
	
-- 	appels_entrants,
-- 	appels_sortants_duration,
-- 	round(appels_sortants_duration/appels_entrants,2) as appels_entrants_moyenne,
	
-- 	appels_sortants,
-- 	appels_sortants_duration,
-- 	round(appels_sortants_duration/appels_sortants,2) as appels_sortants_moyenne,
	
-- 	reunions,
-- 	reunions_duration,
-- 	round(reunions_duration/reunions,2) as reunions_moyenne


-- from
--     (
--         SELECT
--             left(followup_reports.report_date, 4) as period,
-- 			s.value as categoriesuivi,

--             SUM(
--                 if(
--                     followup_reports.activity_type = 2,
--                     1, 0
--                 )
--             ) as appels_sortants,
--             SUM(
--                 if(
--                     followup_reports.activity_type = 3,
--                     1, 0
--                 )
--             ) as reunions,
--             SUM(
--                 if(
--                     followup_reports.activity_type = 4,
--                     1, 0
--                 )
--             ) as appels_entrants,


--             SUM(
--                 if(
--                     followup_reports.activity_type = 2,
--                     TIME_TO_SEC(followup_reports.duration), 0
--                 )
--             )/3600 as appels_sortants_duration,
--             SUM(
--                 if(
--                     followup_reports.activity_type = 3,
--                     TIME_TO_SEC(followup_reports.duration), 0
--                 )
--             )/3600 as reunions_duration,
--             SUM(
--                 if(
--                     followup_reports.activity_type = 4,
--                     TIME_TO_SEC(followup_reports.duration), 0
--                 )
--             )/3600 as appels_entrants_duration


--         FROM
--             patients p
--             inner join followup_reports on followup_reports.pati_id = p.pati_id
-- 			inner join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 			inner join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 			inner join patients_information as pi on p.pati_id = pi.pati_id 
-- 			inner join suggestions as s on s.sugg_id = pi.sugg_id 
-- 			left JOIN followup_reports_activities on followup_reports_activities.fore_id = followup_reports.fore_id
--             left join suggestions as sa on sa.sugg_id = followup_reports_activities.sugg_id
--         where
-- 			s.path_string like  "/patient/suivi/programme%"  
-- 			and followup_reports.report_date between COALESCE(pi.start, @past) and COALESCE (pi.end, @nextyear0101	)
-- 			and pi.deleted_at is null 
-- 			and p.deleted_at is null
--             and followup_reports.deleted_at is null
-- 			and year(followup_reports.report_date) in (@refyear, @refyear-1)
-- 			and followup_reports.report_date between coalesce(pi_antenna.start, @past) and COALESCE (pi_antenna.end, @refdate)
-- 			and s_antenna.path_string like "/patient/suivi/antenne/%"
--             and s_antenna.value like @antenna
--         group by
--             period, categoriesuivi
--     ) q
-- order by
--     period DESC,	
-- 	categoriesuivi;







select 'TABLEAU 4 : LES 20 PATIENTS QUI ONT DEMANDE LE PLUS D’ATTENTION';
-- Select
--     hash,
--     firstname,
--     lastname,
--     rencontres,
--     conseils,
--     transferts,
--     soins,
--     accompagnements,
--     rencontres + conseils + transferts + soins + accompagnements as activites,
--     appels_sortants,
--     appels_entrants,
--     reunions,
--     appels_sortants + appels_entrants + reunions as demarches,
--     rencontres + conseils + transferts + soins + accompagnements + appels_sortants + appels_entrants + reunions as total
-- from
--     (
--         SELECT
--             hash,
--             firstname,
--             lastname,
--             (
--                 SUM(
--                     if (
--                         followup_reports.activity_type = 1
--                         and followup_reports.report_type in (1, 2, 3),
--                         1,
--                         0
--                     )
--                 )
--             ) as rencontres,
--             SUM(
--                 if (
--                     followup_reports.activity_type = 1
--                     and suggestions.path_string like "%conseil%",
--                     1,
--                     0
--                 )
--             ) as conseils,
--             SUM(
--                 if (
--                     followup_reports.activity_type = 1
--                     and suggestions.path_string like "%transfert%",
--                     1,
--                     0
--                 )
--             ) as transferts,
--             SUM(
--                 if (
--                     followup_reports.activity_type = 1
--                     and suggestions.path_string like "%soin%",
--                     1,
--                     0
--                 )
--             ) as soins,
--             SUM(
--                 if (
--                     followup_reports.activity_type = 1
--                     and suggestions.path_string like "%accomp%",
--                     1,
--                     0
--                 )
--             ) as accompagnements,
--             SUM(
--                 if(
--                     followup_reports.activity_type = 2,
--                     1, 0
--                 )
--             ) as appels_sortants,
--             SUM(
--                 if(
--                     followup_reports.activity_type = 3,
--                     1, 0
--                 )
--             ) as reunions,
--             SUM(
--                 if(
--                     followup_reports.activity_type = 4,
--                     1, 0
--                 )
--             ) as appels_entrants
--         FROM
--             patients p
-- 			inner join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 			inner join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
--             inner join followup_reports on followup_reports.pati_id = p.pati_id
--             left JOIN followup_reports_activities on followup_reports_activities.fore_id = followup_reports.fore_id
--             left join suggestions on suggestions.sugg_id = followup_reports_activities.sugg_id
--         where
--             p.deleted_at is null
--             and followup_reports.deleted_at is null
--             and followup_reports.report_date like @refyearwc
-- 			and followup_reports.report_date between coalesce(pi_antenna.start, followup_reports.report_date) and COALESCE (pi_antenna.end, followup_reports.report_date)
-- 			and s_antenna.path_string like "/patient/suivi/antenne/%"
--             and s_antenna.value like @antenna
--         group by
--             hash, firstname, lastname
--     ) q
-- order by
--     total DESC
-- limit
--     20;

	
select 'TABLEAU 4B : ACTIVITES PAR PATIENT';
-- Select
--     hash,
--     firstname,
--     lastname,
-- 	per as periode,
--     rencontres,
--     conseils,
--     transferts,
--     soins,
--     accompagnements,
--     rencontres + conseils + transferts + soins + accompagnements as activites,
--     appels_sortants,
--     appels_entrants,
--     reunions,
--     appels_sortants + appels_entrants + reunions as demarches,
--     rencontres + conseils + transferts + soins + accompagnements + appels_sortants + appels_entrants + reunions as total
-- from
--     (
--         SELECT
--             left(followup_reports.report_date, 7) as per,
--             hash,
--             firstname,
--             lastname,
--             (
--                 SUM(
--                     if (
--                         followup_reports.activity_type = 1
--                         and followup_reports.report_type in (1, 2, 3),
--                         1,
--                         0
--                     )
--                 )
--             ) as rencontres,
--             SUM(
--                 if (
--                     followup_reports.activity_type = 1
--                     and suggestions.path_string like "%conseil%",
--                     1,
--                     0
--                 )
--             ) as conseils,
--             SUM(
--                 if (
--                     followup_reports.activity_type = 1
--                     and suggestions.path_string like "%transfert%",
--                     1,
--                     0
--                 )
--             ) as transferts,
--             SUM(
--                 if (
--                     followup_reports.activity_type = 1
--                     and suggestions.path_string like "%soin%",
--                     1,
--                     0
--                 )
--             ) as soins,
--             SUM(
--                 if (
--                     followup_reports.activity_type = 1
--                     and suggestions.path_string like "%accomp%",
--                     1,
--                     0
--                 )
--             ) as accompagnements,
--             SUM(
--                 if(
--                     followup_reports.activity_type = 2,
--                     1, 0
--                 )
--             ) as appels_sortants,
--             SUM(
--                 if(
--                     followup_reports.activity_type = 3,
--                     1, 0
--                 )
--             ) as reunions,
--             SUM(
--                 if(
--                     followup_reports.activity_type = 4,
--                     1, 0
--                 )
--             ) as appels_entrants
--         FROM
--             patients p
-- 			inner join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 			inner join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
--             inner join followup_reports on followup_reports.pati_id = p.pati_id
--             left JOIN followup_reports_activities on followup_reports_activities.fore_id = followup_reports.fore_id
--             left join suggestions on suggestions.sugg_id = followup_reports_activities.sugg_id
--         where
--             p.deleted_at is null
--             and followup_reports.deleted_at is null
-- 			and followup_reports.report_date between coalesce(pi_antenna.start, followup_reports.report_date) and COALESCE (pi_antenna.end, followup_reports.report_date)
-- 			and s_antenna.path_string like "/patient/suivi/antenne/%"
--             and s_antenna.value like @antenna
--         group by
--             hash, left(followup_reports.report_date, 7), firstname, lastname
--     ) q
-- order by
--     firstname,
--     lastname,
-- 	periode;



select 'Tableau 5 : Répartition des activités et démarches au cours de l’année';
select 'Tableau 5.A-1 – Répartition des activités';
-- Select
--     period as 'mois',
-- 	categoriesuivi,
--     rencontres,
--     appels_sortants,
--     appels_entrants,
--     reunions,
--     rencontres+appels_sortants+appels_entrants+reunions as rencontres_reunions_et_appels
-- from
--     (
--         SELECT
--             left(followup_reports.report_date, 7) as period,
-- 			s.value as categoriesuivi,
--             (
--                 SUM(
--                     if (
--                         followup_reports.activity_type = 1
--                         and followup_reports.report_type in (1, 2, 3),
--                         1,
--                         0
--                     )
--                 )
--             ) as rencontres,
--             (
-- 				SUM(
-- 					if(
-- 						followup_reports.activity_type = 2,
-- 						1, 
--                         0
-- 					)
-- 				)
--             ) as appels_sortants,
--             (
-- 				SUM(
-- 					if(
-- 						followup_reports.activity_type = 4,
-- 						1, 
--                         0
-- 					)
-- 				)
--             ) as appels_entrants,
--             (
-- 				SUM(
-- 					if(
-- 						followup_reports.activity_type = 3,
-- 						1, 
--                         0
-- 					)
-- 				)
--             ) as reunions
            
--         FROM
--             patients p
--             inner join followup_reports on followup_reports.pati_id = p.pati_id
-- 			inner join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 			inner join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 			inner join patients_information as pi on p.pati_id = pi.pati_id 
-- 			inner join suggestions as s on s.sugg_id = pi.sugg_id 
--         where
--             (
-- 				s.path_string like "/patient/fiche/statut-du-suivi/signalement%" 
-- 				or s.path_string like "/patient/fiche/statut-du-suivi/pre-suivi%" 
-- 				or s.path_string like "/patient/fiche/statut-du-suivi/6" 
-- 				or s.path_string like "/patient/fiche/statut-du-suivi/en-suivi" 
-- 				or s.path_string like "/patient/fiche/statut-du-suivi/post-suivi" 
-- 				or (
-- 					s.path_string like "/patient/fiche/statut-du-suivi/disparu" 
-- 					and year(pi.start) = year(@refdate)
-- 				) 
-- 				or (
-- 					s.path_string like "/patient/fiche/statut-du-suivi/decede" 
-- 					and year(pi.start) = year(@refdate)
-- 				)
-- 			)

-- 			and followup_reports.report_date between COALESCE(pi.start, followup_reports.report_date) and COALESCE (pi.end, followup_reports.report_date)
-- 			and pi.deleted_at is null 
-- 			and p.deleted_at is null
--             and followup_reports.deleted_at is null
-- 			and year(followup_reports.report_date) in (@refyear, @refyear-1)
-- 			and followup_reports.report_date between coalesce(pi_antenna.start, followup_reports.report_date) and COALESCE (pi_antenna.end, followup_reports.report_date)
-- 			and s_antenna.path_string like "/patient/suivi/antenne/%"
--             and s_antenna.value like @antenna


--         group by
--             period, categoriesuivi
--     ) q
-- order by
--     period DESC,	
-- 	categoriesuivi;

select 'Tableau 5.A-2 – Répartition des activités';

-- Select
--     period as 'année',
-- 	categoriesuivi,
--     accompagnements,
--     conseils+transferts+soins as conseils_transferts_soins,
--     conseils + transferts + soins + accompagnements as total_activites_sauf_rencontres_et_appels
-- from
--     (
--         SELECT
--             left(followup_reports.report_date, 7) as period,
-- 			s.value as categoriesuivi,
--             SUM(
--                 if (
--                     followup_reports.activity_type = 1
--                     and sa.path_string like "%conseil%",
--                     1,
--                     0
--                 )
--             ) as conseils,
--             SUM(
--                 if (
--                     followup_reports.activity_type = 1
--                     and sa.path_string like "%transfert%",
--                     1,
--                     0
--                 )
--             ) as transferts,
--             SUM(
--                 if (
--                     followup_reports.activity_type = 1
--                     and sa.path_string like "%soin%",
--                     1,
--                     0
--                 )
--             ) as soins,
--             SUM(
--                 if (
--                     followup_reports.activity_type = 1
--                     and sa.path_string like "%accomp%",
--                     1,
--                     0
--                 )
--             ) as accompagnements
--         FROM
--             patients p
--             inner join followup_reports on followup_reports.pati_id = p.pati_id
-- 			inner join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 			inner join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 			inner join patients_information as pi on p.pati_id = pi.pati_id 
-- 			inner join suggestions as s on s.sugg_id = pi.sugg_id 
-- 			left JOIN followup_reports_activities on followup_reports_activities.fore_id = followup_reports.fore_id
--             left join suggestions as sa on sa.sugg_id = followup_reports_activities.sugg_id
--         where
--             (
-- 				s.path_string like "/patient/fiche/statut-du-suivi/signalement%" 
-- 				or s.path_string like "/patient/fiche/statut-du-suivi/pre-suivi%" 
-- 				or s.path_string like "/patient/fiche/statut-du-suivi/6" 
-- 				or s.path_string like "/patient/fiche/statut-du-suivi/en-suivi" 
-- 				or s.path_string like "/patient/fiche/statut-du-suivi/post-suivi" 
-- 				or (
-- 					s.path_string like "/patient/fiche/statut-du-suivi/disparu" 
-- 					and year(pi.start) = year(@refdate)
-- 				) 
-- 				or (
-- 					s.path_string like "/patient/fiche/statut-du-suivi/decede" 
-- 					and year(pi.start) = year(@refdate)
-- 				)
-- 			)
           
-- 			and followup_reports.report_date between COALESCE(pi.start, followup_reports.report_date) and COALESCE (pi.end, followup_reports.report_date)
-- 			and pi.deleted_at is null 
-- 			and p.deleted_at is null
--             and followup_reports.deleted_at is null
-- 			and year(followup_reports.report_date) in (@refyear, @refyear-1)
-- 			and followup_reports.report_date between coalesce(pi_antenna.start, followup_reports.report_date) and COALESCE (pi_antenna.end, followup_reports.report_date)
-- 			and s_antenna.path_string like "/patient/suivi/antenne/%"
--             and s_antenna.value like @antenna
            
--         group by
--             period, categoriesuivi
--     ) q
-- order by
--     period DESC,	
-- 	categoriesuivi;




select 'Tableau 5.B. – Répartition des démarches';
-- select
--     mois,
--     appels_sortants,
--     appels_entrants,
--     reunions,
--     appels_sortants + appels_entrants + reunions as demarches
-- from
--     (
--         SELECT
--             left(followup_reports.report_date,7) as mois,
--             SUM(
--                 if(
--                     followup_reports.activity_type = 2,
--                     1, 0
--                 )
--             ) as appels_sortants,
--             SUM(
--                 if(
--                     followup_reports.activity_type = 3,
--                     1, 0
--                 )
--             ) as reunions,
--             SUM(
--                 if(
--                     followup_reports.activity_type = 4,
--                     1, 0
--                 )
--             ) as appels_entrants
--         FROM
--             patients p
-- 			inner join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 			inner join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
--             inner join followup_reports on followup_reports.pati_id = p.pati_id
--         where
--             p.deleted_at is null
--             and followup_reports.deleted_at is null
-- 			and year(followup_reports.report_date) in (@refyear, @refyear-1)
-- 			and followup_reports.report_date between coalesce(pi_antenna.start, followup_reports.report_date) and COALESCE (pi_antenna.end, followup_reports.report_date)
-- 			and s_antenna.path_string like "/patient/suivi/antenne/%"
--             and s_antenna.value like @antenna
--         group by
--             left(followup_reports.report_date, 7)
--     ) q
-- order by
--     mois DESC;


	
# TABLEAU 6: NOMBRE DE DEMENAGEMENTS 
# TABLEAU 7 : NOMBRE DE PERSONNES en « GUIDANCE INTENSIVE OU GUIDANCE DE SOUTIEN » selon la COCOM
# TABLEAU 8 : PERSONNES PASSEES DE LA RUE EN LOGEMENT


Select 'Tableau 9.A : Personnes totales en logement durable ';

-- select 
-- 	count(r.hash) as 'Personnes ayant retrouvé un logement durable depuis 2006 (sans tenir compte rechutes)',
-- 	sum(if(r.start like @refyearwc, 1, 0)) as 'Personnes ayant retrouvé un logement durable durant l année en cours (sans tenir compte rechutes)'
-- from 
-- (
-- 	select  
-- 		s.value as programme,
-- 		p.hash,
-- 		p.firstname,
-- 		p.lastname,
-- 		pi.start
-- 	from 
-- 	(
-- 		select
-- 			p.pati_id,
-- 			min(pi.start) as minstart
-- 		FROM
-- 			patients as p
-- 			inner join patients_information as pi on p.pati_id = pi.pati_id
-- 			inner join suggestions as s on s.sugg_id = pi.sugg_id
-- 			inner  join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 			inner  join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 		where
-- 			s.path_string like "/patient/suivi/programme/housing-%"
-- 			and pi.deleted_at is null
-- 			and p.deleted_at is null
-- 			and left(pi.start,4) >= "2006"
			
-- 			and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 			and pi_antenna.deleted_at is null
-- 			and s_antenna.value like @antenna 
-- 			and pi.start <= COALESCE (pi_antenna.end, @refdate)
-- 			and coalesce(pi.end, @refdate) >= coalesce(pi_antenna.start, @past) 

-- 		group by p.pati_id
-- 	) q 
-- 	inner join patients as p on p.pati_id = q.pati_id
-- 	inner join patients_information as pi on p.pati_id = pi.pati_id and pi.start = q.minstart
-- 	inner join suggestions as s on s.sugg_id = pi.sugg_id
-- 	where 
-- 		s.path_string like "/patient/suivi/programme/housing-%"
-- 		and pi.deleted_at is null
-- 	order by s.value, start
-- ) r;



Select 'Tableau 9.B : Personnes totales en logement durable 2006 par programme';

-- select 
-- 	programme, 
-- 	count(r.hash) as 'Personnes ayant retrouvé un logement durable depuis 2006 (sans tenir compte rechutes)',
-- 	sum(if(r.start like @refyearwc, 1, 0)) as 'Personnes ayant retrouvé un logement durable durant l année en cours (sans tenir compte rechutes)'
-- from 
-- (
-- 	select  
-- 		s.value as programme,
-- 		p.hash,
-- 		p.firstname,
-- 		p.lastname,
-- 		pi.start
-- 	from 
-- 	(
-- 		select
-- 			p.pati_id,
-- 			min(pi.start) as minstart
-- 		FROM
-- 			patients as p
-- 			inner join patients_information as pi on p.pati_id = pi.pati_id
-- 			inner join suggestions as s on s.sugg_id = pi.sugg_id
-- 			inner  join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 			inner  join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 		where
-- 			s.path_string like "/patient/suivi/programme/housing-%"
-- 			and pi.deleted_at is null
-- 			and p.deleted_at is null
-- 			and left(pi.start,4) >= "2006"
			
-- 			and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 			and pi_antenna.deleted_at is null
-- 			and s_antenna.value like @antenna 
-- 			and pi.start <= COALESCE (pi_antenna.end, @refdate)
-- 			and coalesce(pi.end, @refdate) >= coalesce(pi_antenna.start, @past) 

-- 		group by p.pati_id
-- 	) q 
-- 	inner join patients as p on p.pati_id = q.pati_id
-- 	inner join patients_information as pi on p.pati_id = pi.pati_id and pi.start = q.minstart
-- 	inner join suggestions as s on s.sugg_id = pi.sugg_id
-- 	where 
-- 		s.path_string like "/patient/suivi/programme/housing-%"
-- 		and pi.deleted_at is null
-- 	order by s.value, start
-- ) r
-- group by r.programme;





Select 'Tableau 9.A/B : Personnes totales en logement durable par programme - liste nominative';

-- select  
-- 	s.value as programme,
--     p.hash,
--     p.firstname,
--     p.lastname,
--     pi.start
-- from 
-- (
-- 	select
-- 		p.pati_id,
-- 		min(pi.start) as minstart
-- 	FROM
-- 		patients as p
-- 		inner join patients_information as pi on p.pati_id = pi.pati_id
-- 		inner join suggestions as s on s.sugg_id = pi.sugg_id
-- 		inner  join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 		inner  join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 	where
-- 		s.path_string like "/patient/suivi/programme/housing-%"
-- 		and pi.deleted_at is null
-- 		and p.deleted_at is null
-- 		and left(pi.start,4) >= "2006"
		
-- 		and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 		and pi_antenna.deleted_at is null
-- 		and s_antenna.value like @antenna 
-- 		and pi.start <= COALESCE (pi_antenna.end, @refdate)
-- 		and coalesce(pi.end, @refdate) >= coalesce(pi_antenna.start, @past) 

-- 	group by p.pati_id
-- ) q 
-- inner join patients as p on p.pati_id = q.pati_id
-- inner join patients_information as pi on p.pati_id = pi.pati_id and pi.start = q.minstart
-- inner join suggestions as s on s.sugg_id = pi.sugg_id
-- where 
-- 	s.path_string like "/patient/suivi/programme/housing-%"
--     and pi.deleted_at is null
-- order by s.value, start;





Select 'Tableau 9.B.2 : Personnes totales en logement durable année en cours par programme - liste nominative';
-- SELECT
-- 	p.hash,
-- 	p.firstname,
-- 	p.lastname,
-- 	q.minstart
-- from 
-- (
-- 	select 	
-- 		s.value as programme,
-- 		p.pati_id,
-- 		min(pi.start) as minstart
-- 	FROM
-- 		patients as p
-- 		inner join patients_information as pi on p.pati_id = pi.pati_id
-- 		inner join suggestions as s on s.sugg_id = pi.sugg_id
-- 		inner  join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 		inner  join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 		inner  join patients_information pi_stat on pi_stat.pati_id = p.pati_id 
-- 		inner  join suggestions s_stat on s_stat.sugg_id = pi_stat.sugg_id 
-- 	where
-- 		s.path_string like "/patient/suivi/programme/housing-%"
-- 		and pi.deleted_at is null
-- 		and p.deleted_at is null
		
-- 		and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 		and pi_antenna.deleted_at is null
-- 		and s_antenna.value like @antenna 

-- 		and pi.start <= COALESCE (pi_antenna.end, @refdate)
-- 		and coalesce(pi.end, @refdate) >= coalesce(pi_antenna.start, @past) 

-- 		and s_stat.path_string like "/patient/fiche/statut-du-suivi/%"
-- 		and pi_stat.deleted_at is null
-- 	group by p.pati_id, s.value
-- ) q
-- inner join patients p on p.pati_id = q.pati_id
-- where left(q.minstart,4) like @refyear
-- order by hash;




# TABLEAU 10 : TYPES DE LOGEMENT

-- Select 'TABLEAU 11 : PERSONNES STABILISEES EN LOGEMENT';
-- Select 'Tableau 11.A. – Personnes passées en post-suivi en cours d’année';
-- Select
--     count(p.hash) as 'Personnes passées en post-suivi en cours d’année et toujours en post-suivi au 31/12'
-- FROM
--     patients as p
--     inner join patients_information as pi on p.pati_id = pi.pati_id
--     inner join suggestions as s on s.sugg_id = pi.sugg_id
-- 	inner join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 	inner join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- where
--     s.path_string like "/patient/fiche/statut-du-suivi/post-suivi"
--     and pi.start like @refyearwc
--     and (pi.end is null or pi.end > @refdate)
--     and pi.deleted_at is null
--     and p.deleted_at is null
-- 	and pi.start between coalesce(pi_antenna.start, @past) and COALESCE (pi_antenna.end, @refdate)
-- 	and s_antenna.path_string like "/patient/suivi/antenne/%"
--     and s_antenna.value like @antenna;


Select 'Tableau 11.A. – Personnes passées en post-suivi en cours d’année - liste nominative';
-- Select
--     p.hash,
--     p.firstname,
--     p.lastname,
--     pi.start,
--     pi.end,
--     s.value
-- FROM
--     patients as p
--     inner join patients_information as pi on p.pati_id = pi.pati_id
--     inner join suggestions as s on s.sugg_id = pi.sugg_id
-- 	inner join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 	inner join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- where
--     s.path_string like "/patient/fiche/statut-du-suivi/post-suivi"
--     and pi.start like @refyearwc
--     and (pi.end is null or pi.end > @refdate)
--     and pi.deleted_at is null
--     and p.deleted_at is null
-- 	and pi.start between coalesce(pi_antenna.start, @past) and COALESCE (pi_antenna.end, @refdate)
-- 	and s_antenna.path_string like "/patient/suivi/antenne/%"
--     and s_antenna.value like @antenna;


select 'Tableau 11.B. – Total des personnes dans le post-suivi';
-- SELECT 
-- 	count(p.hash) as 'Personnes en post-suivi'
-- FROM 
-- 	patients as p 
-- 	inner join patients_information as pi on p.pati_id = pi.pati_id 
-- 	inner join suggestions as s on s.sugg_id = pi.sugg_id 
-- 	inner join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 	inner join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- where 
-- 	s.path_string like "/patient/fiche/statut-du-suivi/post-suivi"
-- 	and @refdate between COALESCE(pi.start, @past) and COALESCE (pi.end, @nextyear0101	)								
-- 	and pi.deleted_at is null 
-- 	and p.deleted_at is null
-- 	and pi.start <= COALESCE (pi_antenna.end, @refdate)
-- 	and coalesce(pi.end, @refdate) >= coalesce(pi_antenna.start, @past) 
-- 	and s_antenna.path_string like "/patient/suivi/antenne/%"
--     and s_antenna.value like @antenna;


select 'Tableau 11.B. – Total des personnes dans le post-suivi - liste nominative';
-- SELECT 
-- 	p.hash, 
-- 	p.firstname, 
-- 	p.lastname, 
-- 	pi.start, 
-- 	pi.end, 
-- 	s.value 
-- FROM 
-- 	patients as p 
-- 	inner join patients_information as pi on p.pati_id = pi.pati_id 
-- 	inner join suggestions as s on s.sugg_id = pi.sugg_id 
-- 	inner join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 	inner join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- where 
-- 	s.path_string like "/patient/fiche/statut-du-suivi/post-suivi"
-- 	and @refdate between COALESCE(pi.start, @past) and COALESCE (pi.end, @nextyear0101	)								
-- 	and pi.deleted_at is null
-- 	and p.deleted_at is null
-- 	and pi.start between coalesce(pi_antenna.start, @past) and COALESCE (pi_antenna.end, @refdate)
-- 	and s_antenna.path_string like "/patient/suivi/antenne/%"
--     and s_antenna.value like @antenna
-- order by
-- 	lastname;


# TABLEAU 12 : PERSONNES AYANT BENEFICIE D’UNE REMISE EN ORDRE ADMINISTRATIVE
# Tableau 12.A. – Pourcentage de personnes en ordre administratif par rapport à l’ensemble de nos patients suivis
# 
# Tableau 12.B. – Nombre de personnes ayant bénéficié au cours de l’année d’une remise en ordre administrative
# 
# Tableau 12.C. - Nombre de patients qui ont bénéficié d’un administrateur de biens, d’une prime d’installation et/ou de l’allocation de logement
# 
# TABLEAU 13 : PERSONNES AYANT BENEFICIE D’UN ACCES AUX SOINS DE SANTE
# Tableau 13.A. - Pourcentage de personnes disposant d’un accès aux soins de santé
# 
# Tableau 13.B. - Pourcentage de personnes disposant d’un suivi médical
# 
# Tableau 13.C. - Pourcentage de personnes disposant d’un suivi en santé mentale
# 
# Tableau 13.D - Nombre de personnes ayant bénéficié au cours de l’année d’un accès aux soins de santé alors qu’ils n’en avaient pas auparavant
# 
# Tableau 13.E. - Répartition des personnes ayant un accès aux soins selon que l’accès a été mis en place pas IDR ou par autrui.
# 


select 'TABLEAU 22 : NATIONALITES DE NOS PATIENTS';
select 'Tableau 22.A. - Données chiffrées sur toutes les nationalités';

-- select 
-- 	nationalite, 
-- 	sum(if (path_string like "/patient/fiche/statut-du-suivi/en-suivi" and exstatut is null, 1, 0)) as ensuivi, 
-- 	sum(if (path_string like "/patient/fiche/statut-du-suivi/post-suivi" and exstatut is null, 1, 0)) as postsuivi, 
-- 	sum(if (path_string like "/patient/fiche/statut-du-suivi/post-suivi" or path_string like "/patient/fiche/statut-du-suivi/en-suivi", 1, 0)	) as postsuivietensuivi, 
-- 	sum(if (path_string like "/patient/fiche/statut-du-suivi/decede" , 1, 0)) as decedes, 
-- 	sum(if (path_string like "/patient/fiche/statut-du-suivi/disparu" , 1, 0)	) as disparus 
-- from 
-- (
-- 	select 
-- 		distinct
-- 		hash, 
-- 		firstname, 
-- 		lastname, 
-- 		nationalite,
-- 		s2.value,
--         s2.path_string,
-- 		dd.status as 'exstatut'
-- 	from 
-- 		(

-- 		select 
-- 				distinct
-- 				patients.pati_id, 
-- 				patients.firstname, 
-- 				patients.lastname, 
-- 				patients.hash, 
-- 				max(COALESCE(n.value, "--inconnu--")) as nationalite
-- 			from 
-- 				patients 
-- 				left join (
-- 					select 
-- 						s.sugg_id as si, 
-- 						s.value, 
-- 						pi.pati_id 
-- 					from 
-- 						patients_information pi 
-- 						inner JOIN suggestions s on s.sugg_id = pi.sugg_id 
-- 						inner join patients_information_template_element pitel on pitel.pite_id = pi.itel_id 
-- 						inner join suggestions stel on stel.sugg_id = pitel.suge_id 
-- 					where
-- 						stel.path_string like '/patient/fiche/information-generale/nationalite' 
-- 						and @refdate between COALESCE(pi.start, @refdate) and COALESCE (pi.end, @refdate)
-- 						and pi.deleted_at is null
-- 				) n on patients.pati_id = n.pati_id 
-- 			where patients.deleted_at is null
-- 			group by 
-- 				patients.pati_id, 
-- 				patients.hash,
-- 				patients.firstname, 
-- 				patients.lastname
-- 		) nn 
-- 		left join 
-- 		( /* only deceased and missing coming from suivi and post-suivi*/
-- 			select
-- 				distinct
-- 				p2.pati_id,
-- 				s2.value as status
-- 			from
-- 				(
-- 					SELECT
-- 						p.pati_id,
-- 						pi.start,
-- 						pi.paif_id
-- 					FROM
-- 						patients as p
-- 						inner join patients_information as pi on p.pati_id = pi.pati_id
-- 						inner join suggestions as s on s.sugg_id = pi.sugg_id
-- 						left join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 						left join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 					where
-- 						s.path_string like "/patient/fiche/statut-du-suivi/decede"
-- 						and pi.start is not null
-- 						and year(pi.start) = year(@refdate)
-- 						and pi.end is null
-- 						and pi.deleted_at is null
-- 						and p.deleted_at is null
-- 						and @refdate between coalesce(pi_antenna.start, @refdate) and COALESCE (pi_antenna.end, @refdate)
-- 						and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 						and s_antenna.value like @antenna
-- 				) dcd 
-- 				left join patients as p2 on p2.pati_id = dcd.pati_id
-- 				left join patients_information as pi2 on dcd.pati_id = pi2.pati_id
-- 				left join suggestions as s2 on s2.sugg_id = pi2.sugg_id
-- 			where
-- 				( s2.path_string like "/patient/fiche/statut-du-suivi/en-suivi" or s2.path_string like "/patient/fiche/statut-du-suivi/post-suivi")
-- 				and s2.path_string not like "/patient/fiche/statut-du-suivi/decede" 
-- 				and pi2.start is not null
-- 				and pi2.deleted_at is null
-- 				and p2.deleted_at is null
-- 				and 
-- 				( 
-- 				( to_days(dcd.start) - to_days(pi2.end) < 7 ) 
-- 				or (dcd.paif_id = pi2.paif_id and s2.path_string like "/patient/fiche/statut-du-suivi/decede")
-- 				)
		
-- 		) dd on dd.pati_id = nn.pati_id
-- 		inner join patients_information as pi2 on nn.pati_id = pi2.pati_id 
-- 		inner join suggestions as s2 on s2.sugg_id = pi2.sugg_id 
-- 		left join patients_information pi_antenna on pi_antenna.pati_id = nn.pati_id 
-- 		left join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 

-- 	where 
-- 		(	
-- 			(
-- 				s2.path_string like "/patient/fiche/statut-du-suivi/en-suivi" 
-- 			) 
-- 			or (
-- 				s2.path_string like "/patient/fiche/statut-du-suivi/post-suivi" 
-- 			) 
-- 			or (
-- 				s2.path_string like "/patient/fiche/statut-du-suivi/decede" 
-- 				and year(pi2.start) = year(@refdate)
-- 				and dd.status is not null
-- 			) 
-- 			or (
-- 				s2.path_string like "/patient/fiche/statut-du-suivi/disparu" 
-- 				and year(pi2.start) = year(@refdate)
-- 				and dd.status is not null
-- 			)
-- 		) 
-- 		and @refdate between COALESCE(pi2.start, @refdate) and COALESCE (pi2.end, @refdate)
-- 		and pi2.deleted_at is null 
-- 		and @refdate between coalesce(pi_antenna.start, @refdate) and COALESCE (pi_antenna.end, @refdate)
-- 		and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 		and s_antenna.value like @antenna

-- 	order by nationalite, hash
-- ) f
-- group by 
-- 	nationalite
-- order by 
-- 	postsuivietensuivi desc;


select 'Tableau 22.A. - Données chiffrées sur toutes les nationalités - liste nominative';

	-- select 
	-- 	distinct
	-- 	hash, 
	-- 	firstname, 
	-- 	lastname, 
	-- 	nationalite,
	-- 	s2.value,
	-- 	dd.status as 'exstatut'
	-- from 
	-- 	(

	-- 	select 
	-- 			distinct
	-- 			patients.pati_id, 
	-- 			patients.firstname, 
	-- 			patients.lastname, 
	-- 			patients.hash, 
	-- 			max(COALESCE(n.value, "--inconnu--")) as nationalite
	-- 		from 
	-- 			patients 
	-- 			left join (
	-- 				select 
	-- 					s.sugg_id as si, 
	-- 					s.value, 
	-- 					pi.pati_id 
	-- 				from 
	-- 					patients_information pi 
	-- 					inner JOIN suggestions s on s.sugg_id = pi.sugg_id 
	-- 					inner join patients_information_template_element pitel on pitel.pite_id = pi.itel_id 
	-- 					inner join suggestions stel on stel.sugg_id = pitel.suge_id 
	-- 				where
	-- 					stel.path_string like '/patient/fiche/information-generale/nationalite' 
	-- 					and @refdate between COALESCE(pi.start, @refdate) and COALESCE (pi.end, @refdate)
	-- 					and pi.deleted_at is null
	-- 			) n on patients.pati_id = n.pati_id 
	-- 		where patients.deleted_at is null
	-- 		group by 
	-- 			patients.pati_id, 
	-- 			patients.hash,
	-- 			patients.firstname, 
	-- 			patients.lastname
	-- 	) nn 
	-- 	left join 
	-- 	( /* only deceased and missing coming from suivi and post-suivi*/
	-- 		select
	-- 			distinct
	-- 			p2.pati_id,
	-- 			s2.value as status
	-- 		from
	-- 			(
	-- 				SELECT
	-- 					p.pati_id,
	-- 					pi.start,
	-- 					pi.paif_id
	-- 				FROM
	-- 					patients as p
	-- 					inner join patients_information as pi on p.pati_id = pi.pati_id
	-- 					inner join suggestions as s on s.sugg_id = pi.sugg_id
	-- 					left join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
	-- 					left join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
	-- 				where
	-- 					s.path_string like "/patient/fiche/statut-du-suivi/decede"
	-- 					and pi.start is not null
	-- 					and year(pi.start) = year(@refdate)
	-- 					and pi.end is null
	-- 					and pi.deleted_at is null
	-- 					and p.deleted_at is null
	-- 					and @refdate between coalesce(pi_antenna.start, @refdate) and COALESCE (pi_antenna.end, @refdate)
	-- 					and s_antenna.path_string like "/patient/suivi/antenne/%"
	-- 					and s_antenna.value like @antenna
	-- 			) dcd 
	-- 			left join patients as p2 on p2.pati_id = dcd.pati_id
	-- 			left join patients_information as pi2 on dcd.pati_id = pi2.pati_id
	-- 			left join suggestions as s2 on s2.sugg_id = pi2.sugg_id
	-- 		where
	-- 			( s2.path_string like "/patient/fiche/statut-du-suivi/en-suivi" or s2.path_string like "/patient/fiche/statut-du-suivi/post-suivi")
	-- 			and s2.path_string not like "/patient/fiche/statut-du-suivi/decede" 
	-- 			and pi2.start is not null
	-- 			and pi2.deleted_at is null
	-- 			and p2.deleted_at is null
	-- 			and 
	-- 			( 
	-- 			( to_days(dcd.start) - to_days(pi2.end) < 7 ) 
	-- 			or (dcd.paif_id = pi2.paif_id and s2.path_string like "/patient/fiche/statut-du-suivi/decede")
	-- 			)
		
	-- 	) dd on dd.pati_id = nn.pati_id
	-- 	inner join patients_information as pi2 on nn.pati_id = pi2.pati_id 
	-- 	inner join suggestions as s2 on s2.sugg_id = pi2.sugg_id 
	-- 	left join patients_information pi_antenna on pi_antenna.pati_id = nn.pati_id 
	-- 	left join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 

	-- where 
	-- 	(	
	-- 		(
	-- 			s2.path_string like "/patient/fiche/statut-du-suivi/en-suivi" 
	-- 		) 
	-- 		or (
	-- 			s2.path_string like "/patient/fiche/statut-du-suivi/post-suivi" 
	-- 		) 
	-- 		or (
	-- 			s2.path_string like "/patient/fiche/statut-du-suivi/decede" 
	-- 			and year(pi2.start) = year(@refdate)
	-- 			and dd.status is not null
	-- 		) 
	-- 		or (
	-- 			s2.path_string like "/patient/fiche/statut-du-suivi/disparu" 
	-- 			and year(pi2.start) = year(@refdate)
	-- 			and dd.status is not null
	-- 		)
	-- 	) 
	-- 	and @refdate between COALESCE(pi2.start, @refdate) and COALESCE (pi2.end, @refdate)
	-- 	and pi2.deleted_at is null 
	-- 	and @refdate between coalesce(pi_antenna.start, @refdate) and COALESCE (pi_antenna.end, @refdate)
	-- 	and s_antenna.path_string like "/patient/suivi/antenne/%"
	-- 	and s_antenna.value like @antenna

	-- order by nationalite, hash;



select 'Tableau 22.B. - Pourcentages de nationalités belges et étrangères';

-- select 
-- 	nationalite, 
-- 	sum(if (path_string like "/patient/fiche/statut-du-suivi/en-suivi" and exstatut is null, 1, 0)) as ensuivi, 
-- 	sum(if (path_string like "/patient/fiche/statut-du-suivi/post-suivi" and exstatut is null, 1, 0)) as postsuivi, 
-- 	sum(if (path_string like "/patient/fiche/statut-du-suivi/post-suivi" or path_string like "/patient/fiche/statut-du-suivi/en-suivi", 1, 0)	) as postsuivietensuivi, 
-- 	sum(if (path_string like "/patient/fiche/statut-du-suivi/decede" , 1, 0)) as decedes, 
-- 	sum(if (path_string like "/patient/fiche/statut-du-suivi/disparu" , 1, 0)	) as disparus 
-- from 
-- (
-- 	select 
-- 		distinct
-- 		hash, 
-- 		firstname, 
-- 		lastname, 
-- 		nationalite,
-- 		s2.value,
--         s2.path_string,
-- 		dd.status as 'exstatut'
-- 	from 
-- 		(

-- 		select 
-- 				distinct
-- 				patients.pati_id, 
-- 				patients.firstname, 
-- 				patients.lastname, 
-- 				patients.hash, 
-- 				if (
-- 					n.value != "Belgique" 
-- 					and n.value is not null, 
-- 					"Etranger", 
-- 					COALESCE(n.value, "Inconnu")
-- 				) as nationalite 
-- 			from 
-- 				patients 
-- 				left join (
-- 					select 
-- 						s.sugg_id as si, 
-- 						s.value, 
-- 						pi.pati_id 
-- 					from 
-- 						patients_information pi 
-- 						inner JOIN suggestions s on s.sugg_id = pi.sugg_id 
-- 						inner join patients_information_template_element pitel on pitel.pite_id = pi.itel_id 
-- 						inner join suggestions stel on stel.sugg_id = pitel.suge_id 
-- 					where
-- 						stel.path_string like '/patient/fiche/information-generale/nationalite' 
-- 						and @refdate between COALESCE(pi.start, @refdate) and COALESCE (pi.end, @refdate)
-- 						and pi.deleted_at is null
-- 				) n on patients.pati_id = n.pati_id 
-- 			where patients.deleted_at is null
-- 			group by 
-- 				patients.pati_id, 
-- 				patients.hash,
-- 				patients.firstname, 
-- 				patients.lastname
-- 		) nn 
-- 		left join 
-- 		( /* only deceased and missing coming from suivi and post-suivi*/
-- 			select
-- 				distinct
-- 				p2.pati_id,
-- 				s2.value as status
-- 			from
-- 				(
-- 					SELECT
-- 						p.pati_id,
-- 						pi.start,
-- 						pi.paif_id
-- 					FROM
-- 						patients as p
-- 						inner join patients_information as pi on p.pati_id = pi.pati_id
-- 						inner join suggestions as s on s.sugg_id = pi.sugg_id
-- 						left join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 						left join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 					where
-- 						s.path_string like "/patient/fiche/statut-du-suivi/decede"
-- 						and pi.start is not null
-- 						and year(pi.start) = year(@refdate)
-- 						and pi.end is null
-- 						and pi.deleted_at is null
-- 						and p.deleted_at is null
-- 						and @refdate between coalesce(pi_antenna.start, @refdate) and COALESCE (pi_antenna.end, @refdate)
-- 						and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 						and s_antenna.value like @antenna
-- 				) dcd 
-- 				left join patients as p2 on p2.pati_id = dcd.pati_id
-- 				left join patients_information as pi2 on dcd.pati_id = pi2.pati_id
-- 				left join suggestions as s2 on s2.sugg_id = pi2.sugg_id
-- 			where
-- 				( s2.path_string like "/patient/fiche/statut-du-suivi/en-suivi" or s2.path_string like "/patient/fiche/statut-du-suivi/post-suivi")
-- 				and s2.path_string not like "/patient/fiche/statut-du-suivi/decede" 
-- 				and pi2.start is not null
-- 				and pi2.deleted_at is null
-- 				and p2.deleted_at is null
-- 				and 
-- 				( 
-- 				( to_days(dcd.start) - to_days(pi2.end) < 7 ) 
-- 				or (dcd.paif_id = pi2.paif_id and s2.path_string like "/patient/fiche/statut-du-suivi/decede")
-- 				)
		
-- 		) dd on dd.pati_id = nn.pati_id
-- 		inner join patients_information as pi2 on nn.pati_id = pi2.pati_id 
-- 		inner join suggestions as s2 on s2.sugg_id = pi2.sugg_id 
-- 		left join patients_information pi_antenna on pi_antenna.pati_id = nn.pati_id 
-- 		left join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 

-- 	where 
-- 		(	
-- 			(
-- 				s2.path_string like "/patient/fiche/statut-du-suivi/en-suivi" 
-- 			) 
-- 			or (
-- 				s2.path_string like "/patient/fiche/statut-du-suivi/post-suivi" 
-- 			) 
-- 			or (
-- 				s2.path_string like "/patient/fiche/statut-du-suivi/decede" 
-- 				and year(pi2.start) = year(@refdate)
-- 				and dd.status is not null
-- 			) 
-- 			or (
-- 				s2.path_string like "/patient/fiche/statut-du-suivi/disparu" 
-- 				and year(pi2.start) = year(@refdate)
-- 				and dd.status is not null
-- 			)
-- 		) 
-- 		and @refdate between COALESCE(pi2.start, @refdate) and COALESCE (pi2.end, @refdate)
-- 		and pi2.deleted_at is null 
-- 		and @refdate between coalesce(pi_antenna.start, @refdate) and COALESCE (pi_antenna.end, @refdate)
-- 		and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 		and s_antenna.value like @antenna

-- 	order by nationalite, hash
-- ) f
-- group by 
-- 	nationalite
-- order by 
-- 	postsuivietensuivi desc;





select 'Tableau 22.C. - Données chiffrées sur toutes les nationalités selon le programme de logement des patients';

-- select 
-- 	nationalite, 
-- 	sum(if (programme like "/patient/suivi/programme/housing-fast" and exstatut is null, 1, 0)) as housingfast, 
-- 	sum(if (programme like "/patient/suivi/programme/housing-first" and exstatut is null, 1, 0)) as housingfirst, 
-- 	sum(if (programme like "/patient/suivi/programme/housing-%" and exstatut is null, 1, 0)) as total,
-- 	sum(if (programme like "/patient/suivi/programme/housing-%" and pstatus like "/patient/fiche/statut-du-suivi/decede" and year(pstatus_start) like year(@refdate), 1, 0)) as decedes, 
-- 	sum(if (programme like "/patient/suivi/programme/housing-%" and pstatus like "/patient/fiche/statut-du-suivi/disparu" and year(pstatus_start) like year(@refyear), 1, 0)) as disparus 

-- from 
-- (


-- 	select 
-- 		distinct
-- 		hash,
-- 		firstname,
-- 		lastname,
-- 		nationalite,
-- 		s_stat.value,
--         pi_stat.start as pstatus_start,
-- 		dd.status as 'exstatut',
--         programme_s.path_string as programme,
--         s_stat.path_string as pstatus
-- 	from
-- 	(
-- 		select 
-- 			distinct
-- 			patients.pati_id, 
-- 			patients.firstname, 
-- 			patients.lastname, 
-- 			patients.hash,
-- 			if (
-- 				n.value != "Belgique" 
-- 				and n.value is not null, 
-- 				"Etranger", 
-- 				COALESCE(n.value, "--Inconnu--")
-- 			) as nationalite 
-- 		from 
-- 			patients
-- 			left join (
-- 				select
-- 					s.sugg_id as si,
-- 					s.value,
-- 					pi.pati_id
-- 				from
-- 					patients_information pi
-- 					inner JOIN suggestions s on s.sugg_id = pi.sugg_id
-- 					inner join patients_information_template_element pitel on pitel.pite_id = pi.itel_id
-- 					inner join suggestions stel on stel.sugg_id = pitel.suge_id
-- 				where
-- 					stel.path_string like '/patient/fiche/information-generale/nationalite'
-- 					and @refdate between COALESCE(pi.start, @refdate) and COALESCE (pi.end, @refdate)
-- 					and pi.deleted_at is null
-- 			) n on patients.pati_id = n.pati_id
-- 		where patients.deleted_at is null
-- 		group by
-- 			patients.pati_id,
-- 			patients.hash,
-- 			patients.firstname,
-- 			patients.lastname
-- 	) nn
-- 	left join
-- 	( /* only deceased and missing coming from suivi and post-suivi*/
-- 		select
-- 			distinct
-- 			p2.pati_id,
-- 			s2.value as status
-- 		from
-- 			(
-- 				SELECT
-- 					p.pati_id,
-- 					pi.start,
-- 					pi.paif_id
-- 				FROM
-- 					patients as p
-- 					inner join patients_information as pi on p.pati_id = pi.pati_id
-- 					inner join suggestions as s on s.sugg_id = pi.sugg_id
-- 					left join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id
-- 					left join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id
-- 				where
-- 					s.path_string like "/patient/fiche/statut-du-suivi/decede"
-- 					and pi.start is not null
-- 					and year(pi.start) = year(@refdate)
-- 					and pi.end is null
-- 					and pi.deleted_at is null
-- 					and p.deleted_at is null
-- 					and @refdate between coalesce(pi_antenna.start, @refdate) and COALESCE (pi_antenna.end, @refdate)
-- 					and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 					and s_antenna.value like @antenna
-- 			) dcd
-- 			left join patients as p2 on p2.pati_id = dcd.pati_id
-- 			left join patients_information as pi2 on dcd.pati_id = pi2.pati_id
-- 			left join suggestions as s2 on s2.sugg_id = pi2.sugg_id
-- 		where
-- 			( s2.path_string like "/patient/fiche/statut-du-suivi/en-suivi" or s2.path_string like "/patient/fiche/statut-du-suivi/post-suivi")
-- 			and s2.path_string not like "/patient/fiche/statut-du-suivi/decede"
-- 			and pi2.start is not null
-- 			and pi2.deleted_at is null
-- 			and p2.deleted_at is null
-- 			and
-- 			(
-- 				( to_days(dcd.start) - to_days(pi2.end) < 7 )
-- 				or (dcd.paif_id = pi2.paif_id and s2.path_string like "/patient/fiche/statut-du-suivi/decede")
-- 			)
		
-- 	) dd on dd.pati_id = nn.pati_id
	
--     inner join patients_information as programme on nn.pati_id = programme.pati_id
-- 	inner join suggestions as programme_s on programme_s.sugg_id = programme.sugg_id
	
--     inner join patients_information as pi_stat on nn.pati_id = pi_stat.pati_id
-- 	inner join suggestions as s_stat on s_stat.sugg_id = pi_stat.sugg_id
	
--     left join patients_information pi_antenna on pi_antenna.pati_id = nn.pati_id
-- 	left join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id

-- 	where
-- 		programme_s.path_string like "/patient/suivi/programme/housing-%"
-- 		and @refdate between COALESCE(programme.start, @refdate) and COALESCE (programme.end, @refdate)
-- 		and
-- 		(	
-- 			(
-- 				s_stat.path_string like "/patient/fiche/statut-du-suivi/en-suivi"
-- 				and @refdate between COALESCE(pi_stat.start, @refdate) and COALESCE (pi_stat.end, @refdate)
-- 			)
-- 			or (
-- 				s_stat.path_string like "/patient/fiche/statut-du-suivi/post-suivi"
-- 				and @refdate between COALESCE(pi_stat.start, @refdate) and COALESCE (pi_stat.end, @refdate)
-- 			)
-- 			or (
-- 				s_stat.path_string like "/patient/fiche/statut-du-suivi/decede"
-- 				and year(pi_stat.start) = year(@refdate)
-- 				and dd.status is not null
-- 			)
-- 			or (
-- 				s_stat.path_string like "/patient/fiche/statut-du-suivi/disparu"
-- 				and year(pi_stat.start) = year(@refdate)
-- 				and dd.status is not null
-- 			)
-- 		)
-- 		and programme.deleted_at is null
-- 		and @refdate between coalesce(pi_antenna.start, @refdate) and COALESCE (pi_antenna.end, @refdate)
-- 		and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 		and s_antenna.value like @antenna
--     	and pi_antenna.deleted_at is null
--     	and pi_stat.deleted_at is null

-- 	order by programme, pstatus, nationalite, hash


-- ) f
-- group by 
-- 	nationalite 
-- order by 
-- 	total desc;




	
	
select 'Tableau 22.C. - Données chiffrées sur toutes les nationalités selon le programme de logement des patients - liste nominative';

	-- select 
	-- 	distinct
	-- 	hash,
	-- 	firstname,
	-- 	lastname,
	-- 	nationalite,
	-- 	s_stat.value,
    --     pi_stat.start as pstatus_start,
	-- 	dd.status as 'exstatut',
    --     programme_s.path_string as programme,
    --     s_stat.path_string as pstatus
	-- from
	-- (
	-- 	select 
	-- 		distinct
	-- 		patients.pati_id, 
	-- 		patients.firstname, 
	-- 		patients.lastname, 
	-- 		patients.hash,
	-- 		if (
	-- 			n.value != "Belgique" 
	-- 			and n.value is not null, 
	-- 			"Etranger", 
	-- 			COALESCE(n.value, "Inconnu")
	-- 		) as nationalite 
	-- 	from 
	-- 		patients
	-- 		left join (
	-- 			select
	-- 				s.sugg_id as si,
	-- 				s.value,
	-- 				pi.pati_id
	-- 			from
	-- 				patients_information pi
	-- 				inner JOIN suggestions s on s.sugg_id = pi.sugg_id
	-- 				inner join patients_information_template_element pitel on pitel.pite_id = pi.itel_id
	-- 				inner join suggestions stel on stel.sugg_id = pitel.suge_id
	-- 			where
	-- 				stel.path_string like '/patient/fiche/information-generale/nationalite'
	-- 				and @refdate between COALESCE(pi.start, @refdate) and COALESCE (pi.end, @refdate)
	-- 				and pi.deleted_at is null
	-- 		) n on patients.pati_id = n.pati_id
	-- 	where patients.deleted_at is null
	-- 	group by
	-- 		patients.pati_id,
	-- 		patients.hash,
	-- 		patients.firstname,
	-- 		patients.lastname
	-- ) nn
	-- left join
	-- ( /* only deceased and missing coming from suivi and post-suivi*/
	-- 	select
	-- 		distinct
	-- 		p2.pati_id,
	-- 		s2.value as status
	-- 	from
	-- 		(
	-- 			SELECT
	-- 				p.pati_id,
	-- 				pi.start,
	-- 				pi.paif_id
	-- 			FROM
	-- 				patients as p
	-- 				inner join patients_information as pi on p.pati_id = pi.pati_id
	-- 				inner join suggestions as s on s.sugg_id = pi.sugg_id
	-- 				left join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id
	-- 				left join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id
	-- 			where
	-- 				s.path_string like "/patient/fiche/statut-du-suivi/decede"
	-- 				and pi.start is not null
	-- 				and year(pi.start) = year(@refdate)
	-- 				and pi.end is null
	-- 				and pi.deleted_at is null
	-- 				and p.deleted_at is null
	-- 				and @refdate between coalesce(pi_antenna.start, @refdate) and COALESCE (pi_antenna.end, @refdate)
	-- 				and s_antenna.path_string like "/patient/suivi/antenne/%"
	-- 				and s_antenna.value like @antenna
	-- 		) dcd
	-- 		left join patients as p2 on p2.pati_id = dcd.pati_id
	-- 		left join patients_information as pi2 on dcd.pati_id = pi2.pati_id
	-- 		left join suggestions as s2 on s2.sugg_id = pi2.sugg_id
	-- 	where
	-- 		( s2.path_string like "/patient/fiche/statut-du-suivi/en-suivi" or s2.path_string like "/patient/fiche/statut-du-suivi/post-suivi")
	-- 		and s2.path_string not like "/patient/fiche/statut-du-suivi/decede"
	-- 		and pi2.start is not null
	-- 		and pi2.deleted_at is null
	-- 		and p2.deleted_at is null
	-- 		and
	-- 		(
	-- 			( to_days(dcd.start) - to_days(pi2.end) < 7 )
	-- 			or (dcd.paif_id = pi2.paif_id and s2.path_string like "/patient/fiche/statut-du-suivi/decede")
	-- 		)
		
	-- ) dd on dd.pati_id = nn.pati_id
	
    -- inner join patients_information as programme on nn.pati_id = programme.pati_id
	-- inner join suggestions as programme_s on programme_s.sugg_id = programme.sugg_id
	
    -- inner join patients_information as pi_stat on nn.pati_id = pi_stat.pati_id
	-- inner join suggestions as s_stat on s_stat.sugg_id = pi_stat.sugg_id
	
    -- left join patients_information pi_antenna on pi_antenna.pati_id = nn.pati_id
	-- left join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id

	-- where
	-- 	programme_s.path_string like "/patient/suivi/programme/housing-%"
	-- 	and @refdate between COALESCE(programme.start, @refdate) and COALESCE (programme.end, @refdate)
	-- 	and
	-- 	(	
	-- 		(
	-- 			s_stat.path_string like "/patient/fiche/statut-du-suivi/en-suivi"
	-- 			and @refdate between COALESCE(pi_stat.start, @refdate) and COALESCE (pi_stat.end, @refdate)
	-- 		)
	-- 		or (
	-- 			s_stat.path_string like "/patient/fiche/statut-du-suivi/post-suivi"
	-- 			and @refdate between COALESCE(pi_stat.start, @refdate) and COALESCE (pi_stat.end, @refdate)
	-- 		)
	-- 		or (
	-- 			s_stat.path_string like "/patient/fiche/statut-du-suivi/decede"
	-- 			and year(pi_stat.start) = year(@refdate)
	-- 			and dd.status is not null
	-- 		)
	-- 		or (
	-- 			s_stat.path_string like "/patient/fiche/statut-du-suivi/disparu"
	-- 			and year(pi_stat.start) = year(@refdate)
	-- 			and dd.status is not null
	-- 		)
	-- 	)
	-- 	and programme.deleted_at is null
	-- 	and @refdate between coalesce(pi_antenna.start, @refdate) and COALESCE (pi_antenna.end, @refdate)
	-- 	and s_antenna.path_string like "/patient/suivi/antenne/%"
	-- 	and s_antenna.value like @antenna
    -- 	and pi_antenna.deleted_at is null
    -- 	and pi_stat.deleted_at is null

	-- order by programme, pstatus, nationalite, hash;

	



select 'TABLEAU 23 : SEXE DE NOS PATIENTS';
select 'Tableau 23.A. - Données chiffrées sur le sexe';



-- select 
-- 	genre, 
-- 	sum(if (statut_ps like "/patient/fiche/statut-du-suivi/en-suivi" and exstatut is null, 1, 0)) as ensuivi, 
-- 	sum(if (statut_ps like "/patient/fiche/statut-du-suivi/post-suivi" and exstatut is null, 1, 0)) as postsuivi, 
-- 	sum(if (statut_ps like "/patient/fiche/statut-du-suivi/post-suivi" or statut_ps like "/patient/fiche/statut-du-suivi/en-suivi", 1, 0)	) as postsuivietensuivi, 
-- 	sum(if (statut_ps like "/patient/fiche/statut-du-suivi/decede" , 1, 0)) as decedes, 
-- 	sum(if (statut_ps like "/patient/fiche/statut-du-suivi/disparu" , 1, 0)	) as disparus 
-- from 
-- (
-- 	select 
-- 		distinct
-- 		hash, 
-- 		firstname, 
-- 		lastname, 
-- 		genre,
-- 		s2.value as statut,
--         s2.path_string as statut_ps,
-- 		dd.status as 'exstatut'
-- 	from 
-- 		(

-- 		select 
-- 				distinct
-- 				patients.pati_id, 
-- 				patients.firstname, 
-- 				patients.lastname, 
-- 				patients.hash, 
-- 				max(COALESCE(n.value, "--inconnu--")) as genre
-- 			from 
-- 				patients 
--                 left join (
-- 					select 
-- 						s.sugg_id as si, 
-- 						s.value, 
-- 						pi.pati_id 
-- 					from 
-- 						patients_information pi 
-- 						inner join information_template_element pitel on pitel.itel_id = pi.itel_id 
-- 						inner join suggestions stel on stel.sugg_id = pitel.suge_id 
-- 						inner JOIN suggestions s on s.sugg_id = pi.sugg_id 
-- 					where 
-- 						stel.path_string like '/patient/fiche/information-generale/genre%'
-- 						and @refdate between COALESCE(pi.start, @refdate) and COALESCE (pi.end, @refdate)
-- 						and pi.deleted_at is null
-- 				) n on patients.pati_id = n.pati_id 
-- 			where patients.deleted_at is null
-- 			group by 
-- 				patients.pati_id, 
-- 				patients.hash,
-- 				patients.firstname, 
-- 				patients.lastname
-- 		) nn 
-- 		left join 
-- 		( /* only deceased and missing coming from suivi and post-suivi*/
-- 			select
-- 				distinct
-- 				p2.pati_id,
-- 				s2.value as status
-- 			from
-- 				(
-- 					SELECT
-- 						p.pati_id,
-- 						pi.start,
-- 						pi.paif_id
-- 					FROM
-- 						patients as p
-- 						inner join patients_information as pi on p.pati_id = pi.pati_id
-- 						inner join suggestions as s on s.sugg_id = pi.sugg_id
-- 						left join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 						left join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 					where
-- 						s.path_string like "/patient/fiche/statut-du-suivi/decede"
-- 						and pi.start is not null
-- 						and year(pi.start) = year(@refdate)
-- 						and pi.end is null
-- 						and pi.deleted_at is null
-- 						and p.deleted_at is null
-- 						and @refdate between coalesce(pi_antenna.start, @refdate) and COALESCE (pi_antenna.end, @refdate)
-- 						and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 						and s_antenna.value like @antenna
-- 				) dcd 
-- 				left join patients as p2 on p2.pati_id = dcd.pati_id
-- 				left join patients_information as pi2 on dcd.pati_id = pi2.pati_id
-- 				left join suggestions as s2 on s2.sugg_id = pi2.sugg_id
-- 			where
-- 				( s2.path_string like "/patient/fiche/statut-du-suivi/en-suivi" or s2.path_string like "/patient/fiche/statut-du-suivi/post-suivi")
-- 				and s2.path_string not like "/patient/fiche/statut-du-suivi/decede" 
-- 				and pi2.start is not null
-- 				and pi2.deleted_at is null
-- 				and p2.deleted_at is null
-- 				and 
-- 				( 
-- 				( to_days(dcd.start) - to_days(pi2.end) < 7 ) 
-- 				or (dcd.paif_id = pi2.paif_id and s2.path_string like "/patient/fiche/statut-du-suivi/decede")
-- 				)
		
-- 		) dd on dd.pati_id = nn.pati_id
-- 		inner join patients_information as pi2 on nn.pati_id = pi2.pati_id 
-- 		inner join suggestions as s2 on s2.sugg_id = pi2.sugg_id 
-- 		left join patients_information pi_antenna on pi_antenna.pati_id = nn.pati_id 
-- 		left join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 

-- 	where 
-- 		(	
-- 			(
-- 				s2.path_string like "/patient/fiche/statut-du-suivi/en-suivi" 
-- 			) 
-- 			or (
-- 				s2.path_string like "/patient/fiche/statut-du-suivi/post-suivi" 
-- 			) 
-- 			or (
-- 				s2.path_string like "/patient/fiche/statut-du-suivi/decede" 
-- 				and year(pi2.start) = year(@refdate)
-- 				and dd.status is not null
-- 			) 
-- 			or (
-- 				s2.path_string like "/patient/fiche/statut-du-suivi/disparu" 
-- 				and year(pi2.start) = year(@refdate)
-- 				and dd.status is not null
-- 			)
-- 		) 
-- 		and @refdate between COALESCE(pi2.start, @refdate) and COALESCE (pi2.end, @refdate)
-- 		and pi2.deleted_at is null 
-- 		and @refdate between coalesce(pi_antenna.start, @refdate) and COALESCE (pi_antenna.end, @refdate)
-- 		and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 		and s_antenna.value like @antenna

-- 	order by genre, hash
-- ) f
-- group by 
-- 	genre
-- order by 
-- 	postsuivietensuivi desc;





select 'Tableau 23.A. - Données chiffrées sur le sexe - liste nominative';

	-- select 
	-- 	distinct
	-- 	hash, 
	-- 	firstname, 
	-- 	lastname, 
	-- 	genre,
	-- 	s2.value as statut,
	-- 	dd.status as 'exstatut'
	-- from 
	-- 	(

    --     select
    --         patients.pati_id,
    --         patients.firstname,
    --         patients.lastname,
    --         patients.hash,
    --         COALESCE(n.value, "--inconnu--") as genre
    --     from
    --         patients
    --         left join (
    --             select
    --                 s.sugg_id as si,
    --                 s.value,
    --                 pi.pati_id
    --             from
    --                 patients_information pi
    --                 inner join information_template_element pitel on pitel.itel_id = pi.itel_id
    --                 inner join suggestions stel on stel.sugg_id = pitel.suge_id
    --                 inner JOIN suggestions s on s.sugg_id = pi.sugg_id
    --             where
	-- 				stel.path_string like '/patient/fiche/information-generale/genre%'
	-- 				and @refdate between COALESCE(pi.start, @refdate) and COALESCE (pi.end, @refdate)
	-- 				and pi.deleted_at is null
	-- 			) n on patients.pati_id = n.pati_id 
	-- 		where patients.deleted_at is null
	-- 		group by 
	-- 			patients.pati_id, 
	-- 			patients.hash,
	-- 			patients.firstname, 
	-- 			patients.lastname
	-- 	) nn 
	-- 	left join 
	-- 	( /* only deceased and missing coming from suivi and post-suivi*/
	-- 		select
	-- 			distinct
	-- 			p2.pati_id,
	-- 			s2.value as status
	-- 		from
	-- 			(
	-- 				SELECT
	-- 					p.pati_id,
	-- 					pi.start,
	-- 					pi.paif_id
	-- 				FROM
	-- 					patients as p
	-- 					inner join patients_information as pi on p.pati_id = pi.pati_id
	-- 					inner join suggestions as s on s.sugg_id = pi.sugg_id
	-- 					left join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
	-- 					left join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
	-- 				where
	-- 					s.path_string like "/patient/fiche/statut-du-suivi/decede"
	-- 					and pi.start is not null
	-- 					and year(pi.start) = year(@refdate)
	-- 					and pi.end is null
	-- 					and pi.deleted_at is null
	-- 					and p.deleted_at is null
	-- 					and @refdate between coalesce(pi_antenna.start, @refdate) and COALESCE (pi_antenna.end, @refdate)
	-- 					and s_antenna.path_string like "/patient/suivi/antenne/%"
	-- 					and s_antenna.value like @antenna
	-- 			) dcd 
	-- 			left join patients as p2 on p2.pati_id = dcd.pati_id
	-- 			left join patients_information as pi2 on dcd.pati_id = pi2.pati_id
	-- 			left join suggestions as s2 on s2.sugg_id = pi2.sugg_id
	-- 		where
	-- 			( s2.path_string like "/patient/fiche/statut-du-suivi/en-suivi" or s2.path_string like "/patient/fiche/statut-du-suivi/post-suivi")
	-- 			and s2.path_string not like "/patient/fiche/statut-du-suivi/decede" 
	-- 			and pi2.start is not null
	-- 			and pi2.deleted_at is null
	-- 			and p2.deleted_at is null
	-- 			and 
	-- 			( 
	-- 			( to_days(dcd.start) - to_days(pi2.end) < 7 ) 
	-- 			or (dcd.paif_id = pi2.paif_id and s2.path_string like "/patient/fiche/statut-du-suivi/decede")
	-- 			)
		
	-- 	) dd on dd.pati_id = nn.pati_id
	-- 	inner join patients_information as pi2 on nn.pati_id = pi2.pati_id 
	-- 	inner join suggestions as s2 on s2.sugg_id = pi2.sugg_id 
	-- 	left join patients_information pi_antenna on pi_antenna.pati_id = nn.pati_id 
	-- 	left join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 

	-- where 
	-- 	(	
	-- 		(
	-- 			s2.path_string like "/patient/fiche/statut-du-suivi/en-suivi" 
	-- 		) 
	-- 		or (
	-- 			s2.path_string like "/patient/fiche/statut-du-suivi/post-suivi" 
	-- 		) 
	-- 		or (
	-- 			s2.path_string like "/patient/fiche/statut-du-suivi/decede" 
	-- 			and year(pi2.start) = year(@refdate)
	-- 			and dd.status is not null
	-- 		) 
	-- 		or (
	-- 			s2.path_string like "/patient/fiche/statut-du-suivi/disparu" 
	-- 			and year(pi2.start) = year(@refdate)
	-- 			and dd.status is not null
	-- 		)
	-- 	) 
	-- 	and @refdate between COALESCE(pi2.start, @refdate) and COALESCE (pi2.end, @refdate)
	-- 	and pi2.deleted_at is null 
	-- 	and @refdate between coalesce(pi_antenna.start, @refdate) and COALESCE (pi_antenna.end, @refdate)
	-- 	and s_antenna.path_string like "/patient/suivi/antenne/%"
	-- 	and s_antenna.value like @antenna

	-- order by genre, statut, hash;



select 'Tableau 23.C. - Données chiffrées sur le sexe selon le programme de logement des patients';


-- select 
-- 	genre, 
-- 	sum(if (programme like "/patient/suivi/programme/housing-fast" and exstatut is null, 1, 0)) as housingfast, 
-- 	sum(if (programme like "/patient/suivi/programme/housing-first" and exstatut is null, 1, 0)) as housingfirst, 
-- 	sum(if (programme like "/patient/suivi/programme/housing-%" and exstatut is null, 1, 0)) as total,
-- 	sum(if (programme like "/patient/suivi/programme/housing-%" and pstatus like "/patient/fiche/statut-du-suivi/decede" and year(pstatus_start) like year(@refdate), 1, 0)) as decedes, 
-- 	sum(if (programme like "/patient/suivi/programme/housing-%" and pstatus like "/patient/fiche/statut-du-suivi/disparu" and year(pstatus_start) like year(@refyear), 1, 0)) as disparus 

-- from 
-- (

-- 	select 
-- 		distinct
-- 		hash,
-- 		firstname,
-- 		lastname,
-- 		genre,
-- 		s_stat.value,
--         pi_stat.start as pstatus_start,
-- 		dd.status as 'exstatut',
--         programme_s.path_string as programme,
--         s_stat.path_string as pstatus
-- 	from
-- 	(
-- 		select 
-- 			distinct
-- 			patients.pati_id, 
-- 			patients.firstname, 
-- 			patients.lastname, 
-- 			patients.hash,
-- 			max(COALESCE(n.value, "--inconnu--")) as genre
-- 		from 
-- 			patients 
-- 			left join (
-- 				select 
-- 					s.sugg_id as si, 
-- 					s.value, 
-- 					pi.pati_id 
-- 				from 
-- 					patients_information pi 
-- 					inner join information_template_element pitel on pitel.itel_id = pi.itel_id 
-- 					inner join suggestions stel on stel.sugg_id = pitel.suge_id 
-- 					inner JOIN suggestions s on s.sugg_id = pi.sugg_id 
-- 				where 
-- 					stel.path_string like '/patient/fiche/information-generale/genre%'
-- 					and @refdate between COALESCE(pi.start, @refdate) and COALESCE (pi.end, @refdate)
-- 					and pi.deleted_at is null
-- 			) n on patients.pati_id = n.pati_id 
-- 		where patients.deleted_at is null
-- 		group by
-- 			patients.pati_id,
-- 			patients.hash,
-- 			patients.firstname,
-- 			patients.lastname
-- 	) nn
-- 	left join
-- 	( /* only deceased and missing coming from suivi and post-suivi*/
-- 		select
-- 			distinct
-- 			p2.pati_id,
-- 			s2.value as status
-- 		from
-- 			(
-- 				SELECT
-- 					p.pati_id,
-- 					pi.start,
-- 					pi.paif_id
-- 				FROM
-- 					patients as p
-- 					inner join patients_information as pi on p.pati_id = pi.pati_id
-- 					inner join suggestions as s on s.sugg_id = pi.sugg_id
-- 					left join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id
-- 					left join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id
-- 				where
-- 					s.path_string like "/patient/fiche/statut-du-suivi/decede"
-- 					and pi.start is not null
-- 					and year(pi.start) = year(@refdate)
-- 					and pi.end is null
-- 					and pi.deleted_at is null
-- 					and p.deleted_at is null
-- 					and @refdate between coalesce(pi_antenna.start, @refdate) and COALESCE (pi_antenna.end, @refdate)
-- 					and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 					and s_antenna.value like @antenna
-- 			) dcd
-- 			left join patients as p2 on p2.pati_id = dcd.pati_id
-- 			left join patients_information as pi2 on dcd.pati_id = pi2.pati_id
-- 			left join suggestions as s2 on s2.sugg_id = pi2.sugg_id
-- 		where
-- 			( s2.path_string like "/patient/fiche/statut-du-suivi/en-suivi" or s2.path_string like "/patient/fiche/statut-du-suivi/post-suivi")
-- 			and s2.path_string not like "/patient/fiche/statut-du-suivi/decede"
-- 			and pi2.start is not null
-- 			and pi2.deleted_at is null
-- 			and p2.deleted_at is null
-- 			and
-- 			(
-- 				( to_days(dcd.start) - to_days(pi2.end) < 7 )
-- 				or (dcd.paif_id = pi2.paif_id and s2.path_string like "/patient/fiche/statut-du-suivi/decede")
-- 			)
		
-- 	) dd on dd.pati_id = nn.pati_id
	
--     inner join patients_information as programme on nn.pati_id = programme.pati_id
-- 	inner join suggestions as programme_s on programme_s.sugg_id = programme.sugg_id
	
--     inner join patients_information as pi_stat on nn.pati_id = pi_stat.pati_id
-- 	inner join suggestions as s_stat on s_stat.sugg_id = pi_stat.sugg_id
	
--     left join patients_information pi_antenna on pi_antenna.pati_id = nn.pati_id
-- 	left join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id

-- 	where
-- 		programme_s.path_string like "/patient/suivi/programme/housing-%"
-- 		and @refdate between COALESCE(programme.start, @refdate) and COALESCE (programme.end, @refdate)
-- 		and
-- 		(	
-- 			(
-- 				s_stat.path_string like "/patient/fiche/statut-du-suivi/en-suivi"
-- 				and @refdate between COALESCE(pi_stat.start, @refdate) and COALESCE (pi_stat.end, @refdate)
-- 			)
-- 			or (
-- 				s_stat.path_string like "/patient/fiche/statut-du-suivi/post-suivi"
-- 				and @refdate between COALESCE(pi_stat.start, @refdate) and COALESCE (pi_stat.end, @refdate)
-- 			)
-- 			or (
-- 				s_stat.path_string like "/patient/fiche/statut-du-suivi/decede"
-- 				and year(pi_stat.start) = year(@refdate)
-- 				and dd.status is not null
-- 			)
-- 			or (
-- 				s_stat.path_string like "/patient/fiche/statut-du-suivi/disparu"
-- 				and year(pi_stat.start) = year(@refdate)
-- 				and dd.status is not null
-- 			)
-- 		)
-- 		and programme.deleted_at is null
-- 		and @refdate between coalesce(pi_antenna.start, @refdate) and COALESCE (pi_antenna.end, @refdate)
-- 		and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 		and s_antenna.value like @antenna
--     	and pi_antenna.deleted_at is null
--     	and pi_stat.deleted_at is null

-- 	order by programme, pstatus, genre, hash

-- ) f
-- group by 
-- 	genre 
-- order by 
-- 	total desc;


	
select 'Tableau 23.C. - Données chiffrées sur le sexe selon le programme de logement des patients - liste nominative';

	-- select 
	-- 	distinct
	-- 	hash,
	-- 	firstname,
	-- 	lastname,
	-- 	genre,
	-- 	s_stat.value,
    --     pi_stat.start as pstatus_start,
	-- 	dd.status as 'exstatut',
    --     programme_s.path_string as programme,
    --     s_stat.path_string as pstatus
	-- from
	-- (
	-- 	select 
	-- 		distinct
	-- 		patients.pati_id, 
	-- 		patients.firstname, 
	-- 		patients.lastname, 
	-- 		patients.hash,
	-- 		max(COALESCE(n.value, "--inconnu--")) as genre
	-- 	from 
	-- 		patients 
	-- 		left join (
	-- 			select 
	-- 				s.sugg_id as si, 
	-- 				s.value, 
	-- 				pi.pati_id 
	-- 			from 
	-- 				patients_information pi 
	-- 				inner join information_template_element pitel on pitel.itel_id = pi.itel_id 
	-- 				inner join suggestions stel on stel.sugg_id = pitel.suge_id 
	-- 				inner JOIN suggestions s on s.sugg_id = pi.sugg_id 
	-- 			where 
	-- 				stel.path_string like '/patient/fiche/information-generale/genre%'
	-- 				and @refdate between COALESCE(pi.start, @refdate) and COALESCE (pi.end, @refdate)
	-- 				and pi.deleted_at is null
	-- 		) n on patients.pati_id = n.pati_id 
	-- 	where patients.deleted_at is null
	-- 	group by
	-- 		patients.pati_id,
	-- 		patients.hash,
	-- 		patients.firstname,
	-- 		patients.lastname
	-- ) nn
	-- left join
	-- ( /* only deceased and missing coming from suivi and post-suivi*/
	-- 	select
	-- 		distinct
	-- 		p2.pati_id,
	-- 		s2.value as status
	-- 	from
	-- 		(
	-- 			SELECT
	-- 				p.pati_id,
	-- 				pi.start,
	-- 				pi.paif_id
	-- 			FROM
	-- 				patients as p
	-- 				inner join patients_information as pi on p.pati_id = pi.pati_id
	-- 				inner join suggestions as s on s.sugg_id = pi.sugg_id
	-- 				left join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id
	-- 				left join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id
	-- 			where
	-- 				s.path_string like "/patient/fiche/statut-du-suivi/decede"
	-- 				and pi.start is not null
	-- 				and year(pi.start) = year(@refdate)
	-- 				and pi.end is null
	-- 				and pi.deleted_at is null
	-- 				and p.deleted_at is null
	-- 				and @refdate between coalesce(pi_antenna.start, @refdate) and COALESCE (pi_antenna.end, @refdate)
	-- 				and s_antenna.path_string like "/patient/suivi/antenne/%"
	-- 				and s_antenna.value like @antenna
	-- 		) dcd
	-- 		left join patients as p2 on p2.pati_id = dcd.pati_id
	-- 		left join patients_information as pi2 on dcd.pati_id = pi2.pati_id
	-- 		left join suggestions as s2 on s2.sugg_id = pi2.sugg_id
	-- 	where
	-- 		( s2.path_string like "/patient/fiche/statut-du-suivi/en-suivi" or s2.path_string like "/patient/fiche/statut-du-suivi/post-suivi")
	-- 		and s2.path_string not like "/patient/fiche/statut-du-suivi/decede"
	-- 		and pi2.start is not null
	-- 		and pi2.deleted_at is null
	-- 		and p2.deleted_at is null
	-- 		and
	-- 		(
	-- 			( to_days(dcd.start) - to_days(pi2.end) < 7 )
	-- 			or (dcd.paif_id = pi2.paif_id and s2.path_string like "/patient/fiche/statut-du-suivi/decede")
	-- 		)
		
	-- ) dd on dd.pati_id = nn.pati_id
	
    -- inner join patients_information as programme on nn.pati_id = programme.pati_id
	-- inner join suggestions as programme_s on programme_s.sugg_id = programme.sugg_id
	
    -- inner join patients_information as pi_stat on nn.pati_id = pi_stat.pati_id
	-- inner join suggestions as s_stat on s_stat.sugg_id = pi_stat.sugg_id
	
    -- left join patients_information pi_antenna on pi_antenna.pati_id = nn.pati_id
	-- left join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id

	-- where
	-- 	programme_s.path_string like "/patient/suivi/programme/housing-%"
	-- 	and @refdate between COALESCE(programme.start, @refdate) and COALESCE (programme.end, @refdate)
	-- 	and
	-- 	(	
	-- 		(
	-- 			s_stat.path_string like "/patient/fiche/statut-du-suivi/en-suivi"
	-- 			and @refdate between COALESCE(pi_stat.start, @refdate) and COALESCE (pi_stat.end, @refdate)
	-- 		)
	-- 		or (
	-- 			s_stat.path_string like "/patient/fiche/statut-du-suivi/post-suivi"
	-- 			and @refdate between COALESCE(pi_stat.start, @refdate) and COALESCE (pi_stat.end, @refdate)
	-- 		)
	-- 		or (
	-- 			s_stat.path_string like "/patient/fiche/statut-du-suivi/decede"
	-- 			and year(pi_stat.start) = year(@refdate)
	-- 			and dd.status is not null
	-- 		)
	-- 		or (
	-- 			s_stat.path_string like "/patient/fiche/statut-du-suivi/disparu"
	-- 			and year(pi_stat.start) = year(@refdate)
	-- 			and dd.status is not null
	-- 		)
	-- 	)
	-- 	and programme.deleted_at is null
	-- 	and @refdate between coalesce(pi_antenna.start, @refdate) and COALESCE (pi_antenna.end, @refdate)
	-- 	and s_antenna.path_string like "/patient/suivi/antenne/%"
	-- 	and s_antenna.value like @antenna
    -- 	and pi_antenna.deleted_at is null
    -- 	and pi_stat.deleted_at is null

	-- order by programme, pstatus, genre, hash;


select 'TABLEAU 24 : AGE MOYEN DE NOS PATIENTS';
select 'Tableau 24.A.1 – Age des personnes dans le suivi - Ages moyen, min et max par type de suivi et genre - par genre';

-- SELECT 
-- 	state, 
-- 	s.value as genre, 
-- 	count(s.value) as echantillon, 
-- 	CAST(
-- 		AVG(
-- 			DATE_FORMAT(
-- 				FROM_DAYS(
-- 					DATEDIFF(@refdate, birth)
-- 				), 
-- 				"%Y"
-- 			)+ 0
-- 		) AS SIGNED
-- 	) AS 'Age moyen', 
-- 	CAST(
-- 		max(
-- 			DATE_FORMAT(
-- 				FROM_DAYS(
-- 					DATEDIFF(@refdate, birth)
-- 				), 
-- 				"%Y"
-- 			)+ 0
-- 		) AS SIGNED
-- 	) as 'Age maximum', 
-- 	CAST(
-- 		MIN(
-- 			DATE_FORMAT(
-- 				FROM_DAYS(
-- 					DATEDIFF(@refdate, birth)
-- 				), 
-- 				"%Y"
-- 			)+ 0
-- 		) AS SIGNED
-- 	) as 'Age minimum' 
-- FROM 
-- 	(
-- 		SELECT 
-- 			distinct
-- 			p.pati_id, 
-- 			p.hash, 
-- 			p.firstname, 
-- 			p.lastname, 
-- 			pi.start, 
-- 			pi.end, 
-- 			s.value as state, 
--             s.path_string,
-- 			p.birthdate as birth, 
-- 			p.unknown_year as p_unknown_year 
-- 		FROM 
-- 			patients as p 
-- 			inner join patients_information as pi on p.pati_id = pi.pati_id 
-- 			inner join suggestions as s on s.sugg_id = pi.sugg_id 
-- 			left join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 			left join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 		where 
-- 			(
-- 				(
-- 					s.path_string like "/patient/fiche/statut-du-suivi/en-suivi" 
-- 				) 
-- 				or (
-- 					s.path_string like "/patient/fiche/statut-du-suivi/post-suivi" 
-- 				) 
-- 				or (
-- 					s.path_string like "/patient/fiche/statut-du-suivi/decede" 
-- 					and year(pi.start) like year(@refdate)
-- 				) 
-- 				or (
-- 					s.path_string like "/patient/fiche/statut-du-suivi/disparu" 
-- 					and year(pi.start) like year(@refdate)
-- 				)
-- 			) 
-- 			and @refdate between COALESCE(pi.start, @refdate) and COALESCE (pi.end, @refdate)								
-- 			and pi.deleted_at is null 
-- 			and p.deleted_at is null 
-- 			and @refdate between coalesce(pi_antenna.start, @refdate) and COALESCE (pi_antenna.end, @refdate)
-- 			and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 			and s_antenna.value like @antenna
-- 		order by 
-- 			s.value, 
-- 			p.firstname, 
-- 			p.lastname, 
-- 			pi.start
-- 	) q 
-- 	left join 
-- 	( /* only deceased and missing coming from suivi and post-suivi*/
-- 		select
-- 			p2.pati_id,
-- 			s2.value as status,
--             s2.path_string
-- 		from
-- 			(
-- 				SELECT
-- 					p.pati_id,
-- 					pi.start,
-- 					pi.paif_id
-- 				FROM
-- 					patients as p
-- 					inner join patients_information as pi on p.pati_id = pi.pati_id
-- 					inner join suggestions as s on s.sugg_id = pi.sugg_id
-- 					left join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 					left join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 				where
-- 					s.path_string like "/patient/fiche/statut-du-suivi/decede"
-- 					and pi.start is not null
-- 					and year(pi.start) like year(@refdate)
-- 					and pi.end is null
-- 					and pi.deleted_at is null
-- 					and p.deleted_at is null
-- 					and @refdate between coalesce(pi_antenna.start, @refdate) and COALESCE (pi_antenna.end, @refdate)
-- 					and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 					and s_antenna.value like @antenna
-- 			) dcd 
-- 			left join patients as p2 on p2.pati_id = dcd.pati_id
-- 			left join patients_information as pi2 on dcd.pati_id = pi2.pati_id
-- 			left join suggestions as s2 on s2.sugg_id = pi2.sugg_id
-- 		where
-- 			( s2.path_string like "/patient/fiche/statut-du-suivi/en-suivi" or s2.path_string like "/patient/fiche/statut-du-suivi/post-suivi")
-- 			and s2.path_string not like "/patient/fiche/statut-du-suivi/decede" 
-- 			and pi2.start is not null
-- 			and pi2.deleted_at is null
-- 			and p2.deleted_at is null
-- 			and 
-- 			( 
-- 			( to_days(dcd.start) - to_days(pi2.end) < 7 ) 
-- 			or (dcd.paif_id = pi2.paif_id and s2.path_string like "/patient/fiche/statut-du-suivi/decede")
-- 			)
	
-- 	) dd on dd.pati_id = q.pati_id
-- 	inner join patients_information as pi on q.pati_id = pi.pati_id 
-- 	inner join suggestions as s on s.sugg_id = pi.sugg_id 
-- where 
-- 	s.path_string like '/patient/fiche/information-generale/genre%'
--     and (
-- 		(
-- 			q.path_string like "/patient/fiche/statut-du-suivi/en-suivi" 
--             or q.path_string like "/patient/fiche/statut-du-suivi/post-suivi"
-- 		)
--         or
--         (
-- 			( q.path_string like "/patient/fiche/statut-du-suivi/decede" or 
--             q.path_string like "/patient/fiche/statut-du-suivi/post-suivi"
--             )
--             and dd.status is not null
--         )
--     )
-- 	and birth is NOT null 
-- 	AND (
-- 		p_unknown_year is null 
-- 		OR p_unknown_year = 0
-- 	) 
-- 	and pi.deleted_at is null 
-- group by 
-- 	state, 
-- 	genre 
-- order by 
-- 	state, 
-- 	genre;




select 'Tableau 24.A.1 – Age des personnes dans le suivi - Ages moyen, min et max par type de suivi et genre - par genre - liste nominative';

-- SELECT 
-- 	q.pati_id,
--     state, 
-- 	s.value as genre, 
--     dd.status,
-- 	CAST(
-- 			DATE_FORMAT(
-- 				FROM_DAYS(
-- 					DATEDIFF(@refdate, birth)
-- 				), 
-- 				"%Y"
-- 			)+ 0
-- 		AS SIGNED
-- 	) AS 'Age '
-- FROM 
-- 	(
-- 		SELECT 
-- 			distinct
-- 			p.pati_id, 
-- 			p.hash, 
-- 			p.firstname, 
-- 			p.lastname, 
-- 			pi.start, 
-- 			pi.end, 
-- 			s.value as state, 
--             s.path_string,
-- 			p.birthdate as birth, 
-- 			p.unknown_year as p_unknown_year 
-- 		FROM 
-- 			patients as p 
-- 			inner join patients_information as pi on p.pati_id = pi.pati_id 
-- 			inner join suggestions as s on s.sugg_id = pi.sugg_id 
-- 			left join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 			left join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 		where 
-- 			(
-- 				(
-- 					s.path_string like "/patient/fiche/statut-du-suivi/en-suivi" 
-- 				) 
-- 				or (
-- 					s.path_string like "/patient/fiche/statut-du-suivi/post-suivi" 
-- 				) 
-- 				or (
-- 					s.path_string like "/patient/fiche/statut-du-suivi/decede" 
-- 					and year(pi.start) like year(@refdate)
-- 				) 
-- 				or (
-- 					s.path_string like "/patient/fiche/statut-du-suivi/disparu" 
-- 					and year(pi.start) like year(@refdate)
-- 				)
-- 			) 
-- 			and @refdate between COALESCE(pi.start, @refdate) and COALESCE (pi.end, @refdate)								
-- 			and pi.deleted_at is null 
-- 			and p.deleted_at is null 
-- 			and @refdate between coalesce(pi_antenna.start, @refdate) and COALESCE (pi_antenna.end, @refdate)
-- 			and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 			and s_antenna.value like @antenna
-- 		order by 
-- 			s.value, 
-- 			p.firstname, 
-- 			p.lastname, 
-- 			pi.start
-- 	) q 
-- 	left join 
-- 	( /* only deceased and missing coming from suivi and post-suivi*/
-- 		select
-- 			p2.pati_id,
-- 			s2.value as status,
--             s2.path_string
-- 		from
-- 			(
-- 				SELECT
-- 					p.pati_id,
-- 					pi.start,
-- 					pi.paif_id
-- 				FROM
-- 					patients as p
-- 					inner join patients_information as pi on p.pati_id = pi.pati_id
-- 					inner join suggestions as s on s.sugg_id = pi.sugg_id
-- 					left join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 					left join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 				where
-- 					s.path_string like "/patient/fiche/statut-du-suivi/decede"
-- 					and pi.start is not null
-- 					and year(pi.start) like year(@refdate)
-- 					and pi.end is null
-- 					and pi.deleted_at is null
-- 					and p.deleted_at is null
-- 					and @refdate between coalesce(pi_antenna.start, @refdate) and COALESCE (pi_antenna.end, @refdate)
-- 					and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 					and s_antenna.value like @antenna
-- 			) dcd 
-- 			left join patients as p2 on p2.pati_id = dcd.pati_id
-- 			left join patients_information as pi2 on dcd.pati_id = pi2.pati_id
-- 			left join suggestions as s2 on s2.sugg_id = pi2.sugg_id
-- 		where
-- 			( s2.path_string like "/patient/fiche/statut-du-suivi/en-suivi" or s2.path_string like "/patient/fiche/statut-du-suivi/post-suivi")
-- 			and s2.path_string not like "/patient/fiche/statut-du-suivi/decede" 
-- 			and pi2.start is not null
-- 			and pi2.deleted_at is null
-- 			and p2.deleted_at is null
-- 			and 
-- 			( 
-- 			( to_days(dcd.start) - to_days(pi2.end) < 7 ) 
-- 			or (dcd.paif_id = pi2.paif_id and s2.path_string like "/patient/fiche/statut-du-suivi/decede")
-- 			)
	
-- 	) dd on dd.pati_id = q.pati_id
-- 	inner join patients_information as pi on q.pati_id = pi.pati_id 
-- 	inner join suggestions as s on s.sugg_id = pi.sugg_id 
-- where 
-- 	s.path_string like '/patient/fiche/information-generale/genre%'
--     and (
-- 		(
-- 			q.path_string like "/patient/fiche/statut-du-suivi/en-suivi" 
--             or q.path_string like "/patient/fiche/statut-du-suivi/post-suivi"
-- 		)
--         or
--         (
-- 			( q.path_string like "/patient/fiche/statut-du-suivi/decede" or 
--             q.path_string like "/patient/fiche/statut-du-suivi/post-suivi"
--             )
--             and dd.status is not null
--         )
--     )
-- 	and birth is NOT null 
-- 	AND (
-- 		p_unknown_year is null 
-- 		OR p_unknown_year = 0
-- 	) 
-- 	and pi.deleted_at is null 
-- order by 
-- 	state, 
-- 	genre;


	
select 'Tableau 24.A.1 – Age des personnes dans le suivi/post-suivi - Ages moyen, min et max par type de suivi - global';
	
-- SELECT 
-- 	state, 
-- 	count(s.value) as echantillon, 
-- 	CAST(
-- 		AVG(
-- 			DATE_FORMAT(
-- 				FROM_DAYS(
-- 					DATEDIFF(@refdate, birth)
-- 				), 
-- 				"%Y"
-- 			)+ 0
-- 		) AS SIGNED
-- 	) AS 'Age moyen', 
-- 	CAST(
-- 		max(
-- 			DATE_FORMAT(
-- 				FROM_DAYS(
-- 					DATEDIFF(@refdate, birth)
-- 				), 
-- 				"%Y"
-- 			)+ 0
-- 		) AS SIGNED
-- 	) as 'Age maximum', 
-- 	CAST(
-- 		MIN(
-- 			DATE_FORMAT(
-- 				FROM_DAYS(
-- 					DATEDIFF(@refdate, birth)
-- 				), 
-- 				"%Y"
-- 			)+ 0
-- 		) AS SIGNED
-- 	) as 'Age minimum' 
-- FROM 
-- 	(
-- 		SELECT 
-- 			distinct
-- 			p.pati_id, 
-- 			p.hash, 
-- 			p.firstname, 
-- 			p.lastname, 
-- 			pi.start, 
-- 			pi.end, 
-- 			s.value as state, 
-- 			p.birthdate as birth, 
-- 			p.unknown_year as p_unknown_year 
-- 		FROM 
-- 			patients as p 
-- 			inner join patients_information as pi on p.pati_id = pi.pati_id 
-- 			inner join suggestions as s on s.sugg_id = pi.sugg_id 
-- 			left join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 			left join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 		where 
-- 			(
-- 				(
-- 					s.path_string like "/patient/fiche/statut-du-suivi/en-suivi" 
-- 				) 
-- 				or (
-- 					s.path_string like "/patient/fiche/statut-du-suivi/post-suivi" 
-- 				) 
-- 				or (
-- 					s.path_string like "/patient/fiche/statut-du-suivi/decede" 
-- 					and year(pi.start) like year(@refdate)
-- 				) 
-- 				or (
-- 					s.path_string like "/patient/fiche/statut-du-suivi/disparu" 
-- 					and year(pi.start) like year(@refdate)
-- 				)
-- 			) 
-- 			and @refdate between COALESCE(pi.start, @refdate) and COALESCE (pi.end, @refdate)
-- 			and pi.deleted_at is null 
-- 			and p.deleted_at is null 
-- 			and @refdate between coalesce(pi_antenna.start, @refdate) and COALESCE (pi_antenna.end, @refdate)
-- 			and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 			and s_antenna.value like @antenna
-- 		order by 
-- 			s.value, 
-- 			p.firstname, 
-- 			p.lastname, 
-- 			pi.start
-- 	) q 
-- 	inner join patients_information as pi on q.pati_id = pi.pati_id 
-- 	inner join suggestions as s on s.sugg_id = pi.sugg_id 
-- where 
-- 	s.path_string like '/patient/fiche/information-generale/genre%' 
-- 	and birth is NOT null 
-- 	AND (
-- 		p_unknown_year is null 
-- 		OR p_unknown_year = 0
-- 	) 
-- 	and pi.deleted_at is null 
-- group by 
-- 	state
-- order by 
-- 	state; 



select 'Tableau 24.A.1 – Age des personnes dans le suivi/post-suivi - Ages moyen, min et max par type de suivi et genre - global';


-- SELECT 
-- 	state, 
-- 	s.value as genre,
-- 	count(s.value) as echantillon, 
-- 	CAST(
-- 		AVG(
-- 			DATE_FORMAT(
-- 				FROM_DAYS(
-- 					DATEDIFF(@refdate, birth)
-- 				), 
-- 				"%Y"
-- 			)+ 0
-- 		) AS SIGNED
-- 	) AS 'Age moyen', 
-- 	CAST(
-- 		max(
-- 			DATE_FORMAT(
-- 				FROM_DAYS(
-- 					DATEDIFF(@refdate, birth)
-- 				), 
-- 				"%Y"
-- 			)+ 0
-- 		) AS SIGNED
-- 	) as 'Age maximum', 
-- 	CAST(
-- 		MIN(
-- 			DATE_FORMAT(
-- 				FROM_DAYS(
-- 					DATEDIFF(@refdate, birth)
-- 				), 
-- 				"%Y"
-- 			)+ 0
-- 		) AS SIGNED
-- 	) as 'Age minimum' 
-- FROM 
-- 	(
-- 		SELECT 
-- 			distinct
-- 			p.pati_id, 
-- 			p.hash, 
-- 			p.firstname, 
-- 			p.lastname, 
-- 			pi.start, 
-- 			pi.end, 
-- 			s.value as state, 
-- 			p.birthdate as birth, 
-- 			p.unknown_year as p_unknown_year 
-- 		FROM 
-- 			patients as p 
-- 			inner join patients_information as pi on p.pati_id = pi.pati_id 
-- 			inner join suggestions as s on s.sugg_id = pi.sugg_id 
-- 			left join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 			left join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 		where 
-- 			(
-- 				(
-- 					s.path_string like "/patient/fiche/statut-du-suivi/en-suivi" 
-- 				) 
-- 				or (
-- 					s.path_string like "/patient/fiche/statut-du-suivi/post-suivi" 
-- 				) 
-- 				or (
-- 					s.path_string like "/patient/fiche/statut-du-suivi/decede" 
-- 					and year(pi.start) like year(@refdate)
-- 				) 
-- 				or (
-- 					s.path_string like "/patient/fiche/statut-du-suivi/disparu" 
-- 					and year(pi.start) like year(@refdate)

-- 				)
-- 			) 
-- 			and @refdate between COALESCE(pi.start, @refdate) and COALESCE (pi.end, @refdate)
-- 			and pi.deleted_at is null 
-- 			and p.deleted_at is null 
-- 			and @refdate between coalesce(pi_antenna.start, @past) and COALESCE (pi_antenna.end, @refdate)
-- 			and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 			and s_antenna.value like @antenna
-- 		order by 
-- 			s.value, 
-- 			p.firstname, 
-- 			p.lastname, 
-- 			pi.start
-- 	) q 
-- 	inner join patients_information as pi on q.pati_id = pi.pati_id 
-- 	inner join suggestions as s on s.sugg_id = pi.sugg_id 
-- where 
-- 	s.path_string like '/patient/fiche/information-generale/genre%' 
-- 	and birth is NOT null 
-- 	AND (
-- 		p_unknown_year is null 
-- 		OR p_unknown_year = 0
-- 	) 
-- 	and pi.deleted_at is null 
-- group by 
-- 	state, s.value
-- order by 
-- 	state; 



	
select 'Tableau 24.A. et 24.B. – Age des personnes dans le suivi - Ages moyen, min et max par type de suivi et genre - liste nominative incluant les date de naissance nulles';

-- SELECT 
-- 	hash,
-- 	firstname, 
-- 	lastname, 
-- 	state, 
-- 	s.value as genre, 
-- 	q.start, 
-- 	birth, 
-- 	CAST(
-- 		DATE_FORMAT(
-- 			FROM_DAYS(
-- 				DATEDIFF(@refdate, birth)
-- 			), 
-- 			"%Y"
-- 		) as signed
-- 	) AS age, 
-- 	p_unknown_year 
-- FROM 
-- 	(
-- 		SELECT 
-- 			distinct
-- 			p.pati_id, 
-- 			p.hash, 
-- 			p.firstname, 
-- 			p.lastname, 
-- 			pi.start, 
-- 			pi.end, 
-- 			s.value as state, 
-- 			p.birthdate as birth, 
-- 			p.unknown_year as p_unknown_year 
-- 		FROM 
-- 			patients as p 
-- 			inner join patients_information as pi on p.pati_id = pi.pati_id 
-- 			inner join suggestions as s on s.sugg_id = pi.sugg_id 
-- 			left join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 			left join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 		where 
-- 			(
-- 				(
-- 					s.path_string like "/patient/fiche/statut-du-suivi/en-suivi" 
-- 				) 
-- 				or (
-- 					s.path_string like "/patient/fiche/statut-du-suivi/post-suivi" 
-- 				) 
-- 				or (
-- 					s.path_string like "/patient/fiche/statut-du-suivi/decede" 
-- 					and year(pi.start) like year(@refdate)
-- 				) 
-- 				or (
-- 					s.path_string like "/patient/fiche/statut-du-suivi/disparu" 
-- 					and year(pi.start) like year(@refdate)
-- 				)
-- 			) 
-- 			and @refdate between COALESCE(pi.start, @refdate) and COALESCE (pi.end, @refdate)
-- 			and pi.deleted_at is null 
-- 			and p.deleted_at is null 
-- 			and @refdate between coalesce(pi_antenna.start, @refdate) and COALESCE (pi_antenna.end, @refdate)
-- 			and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 			and s_antenna.value like @antenna
-- 		order by 
-- 			s.value, 
-- 			p.firstname, 
-- 			p.lastname, 
-- 			pi.start
-- 	) q 
-- 	inner join patients_information as pi on q.pati_id = pi.pati_id 
-- 	inner join suggestions as s on s.sugg_id = pi.sugg_id 
-- where 
-- 	s.path_string like '/patient/fiche/information-generale/genre%' 
-- 	and pi.deleted_at is null 
-- order by 
-- 	state, 
-- 	genre,
--     lastname;




select 'Tableau 24.C/D.1 – Age des personnes dans le housing first/ housing first - Ages moyen, min et max par type de suivi et genre - global';


-- SELECT 
-- 	state, 
-- 	s.value as genre,
-- 	count(s.value) as echantillon, 
-- 	CAST(
-- 		AVG(
-- 			DATE_FORMAT(
-- 				FROM_DAYS(
-- 					DATEDIFF(@refdate, birth)
-- 				), 
-- 				"%Y"
-- 			)+ 0
-- 		) AS SIGNED
-- 	) AS 'Age moyen', 
-- 	CAST(
-- 		max(
-- 			DATE_FORMAT(
-- 				FROM_DAYS(
-- 					DATEDIFF(@refdate, birth)
-- 				), 
-- 				"%Y"
-- 			)+ 0
-- 		) AS SIGNED
-- 	) as 'Age maximum', 
-- 	CAST(
-- 		MIN(
-- 			DATE_FORMAT(
-- 				FROM_DAYS(
-- 					DATEDIFF(@refdate, birth)
-- 				), 
-- 				"%Y"
-- 			)+ 0
-- 		) AS SIGNED
-- 	) as 'Age minimum' 
-- FROM 
-- 	(
-- 		SELECT 
-- 			distinct
-- 			p.pati_id, 
-- 			p.hash, 
-- 			p.firstname, 
-- 			p.lastname, 
-- 			pi.start, 
-- 			pi.end, 
-- 			s.value as state, 
-- 			p.birthdate as birth, 
-- 			p.unknown_year as p_unknown_year 
-- 		FROM 
-- 			patients as p 
-- 			inner join patients_information as pi on p.pati_id = pi.pati_id 
-- 			inner join suggestions as s on s.sugg_id = pi.sugg_id 
-- 			left join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 			left join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 		where 
-- 			(
-- 				(
-- 					s.path_string like "/patient/fiche/statut-du-suivi/en-suivi" 
-- 				) 
-- 				or (
-- 					s.path_string like "/patient/fiche/statut-du-suivi/post-suivi" 
-- 				) 
-- 			) 
-- 			and @refdate between COALESCE(pi.start, @refdate) and COALESCE (pi.end, @refdate)
-- 			and pi.deleted_at is null 
-- 			and p.deleted_at is null 
-- 			and @refdate between coalesce(pi_antenna.start, @refdate) and COALESCE (pi_antenna.end, @refdate)
-- 			and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 			and s_antenna.value like @antenna
-- 		order by 
-- 			s.value, 
-- 			p.firstname, 
-- 			p.lastname, 
-- 			pi.start
-- 	) q 
-- 	inner join patients_information as pi on q.pati_id = pi.pati_id 
-- 	inner join suggestions as s on s.sugg_id = pi.sugg_id 
-- where 
-- 	s.path_string like '/patient/suivi/programme/housing-%' 
-- 	and @refdate between COALESCE(pi.start, @refdate) and COALESCE (pi.end, @refdate)
-- 	and birth is NOT null 
-- 	AND (
-- 		p_unknown_year is null 
-- 		OR p_unknown_year = 0
-- 	) 
-- 	and pi.deleted_at is null 
-- group by 
-- 	state, s.value
-- order by 
-- 	state; 


select 'Tableau 24.C/D.1 – Age des personnes dans le housing first/ housing first - Ages moyen, min et max par type de suivi et genre - global - liste nominative';


-- SELECT 
-- 	hash,
-- 	firstname, 
-- 	lastname, 
-- 	state, 
-- 	s.value as programme, 
-- 	q.start, 
-- 	birth, 
-- 	CAST(
-- 		DATE_FORMAT(
-- 			FROM_DAYS(
-- 				DATEDIFF(@refdate, birth)
-- 			), 
-- 			"%Y"
-- 		) as signed
-- 	) AS age, 
-- 	p_unknown_year 
-- FROM 
-- 	(
-- 		SELECT 
-- 			distinct
-- 			p.pati_id, 
-- 			p.hash, 
-- 			p.firstname, 
-- 			p.lastname, 
-- 			pi.start, 
-- 			pi.end, 
-- 			s.value as state, 
-- 			p.birthdate as birth, 
-- 			p.unknown_year as p_unknown_year 
-- 		FROM 
-- 			patients as p 
-- 			inner join patients_information as pi on p.pati_id = pi.pati_id 
-- 			inner join suggestions as s on s.sugg_id = pi.sugg_id 
-- 			left join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 			left join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 		where 
-- 			(
-- 				(
-- 					s.path_string like "/patient/fiche/statut-du-suivi/en-suivi" 
-- 				) 
-- 				or (
-- 					s.path_string like "/patient/fiche/statut-du-suivi/post-suivi" 
-- 				) 
-- 			) 
-- 			and @refdate between COALESCE(pi.start, @refdate) and COALESCE (pi.end, @refdate	)
-- 			and pi.deleted_at is null 
-- 			and p.deleted_at is null 
-- 			and @refdate between coalesce(pi_antenna.start, @refdate) and COALESCE (pi_antenna.end, @refdate)
-- 			and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 			and s_antenna.value like @antenna
-- 		order by 
-- 			s.value, 
-- 			p.firstname, 
-- 			p.lastname, 
-- 			pi.start
-- 	) q 
-- 	inner join patients_information as pi on q.pati_id = pi.pati_id 
-- 	inner join suggestions as s on s.sugg_id = pi.sugg_id 
-- where 
-- 	s.path_string like '/patient/suivi/programme/housing-%' 
-- 	and @refdate between COALESCE(pi.start, @refdate) and COALESCE (pi.end, @refdate)
-- 	and pi.deleted_at is null 
-- order by 
-- 	state, 
-- 	programme,
--     lastname;




select 'Tableau 25.A. – Problèmes de santé et assuétudes des patients en suivi';
-- select 
-- 	physique as '# pathologies physiques', 
-- 	mentale as '# pathologies mentales', 
-- 	assuetude as '# d assuétudes'
-- from 
-- 	(
-- 	select 
-- 		sum(
-- 			if (path.problem like "%physique%", 1, 0)
-- 		) as physique, 
-- 		sum(
-- 			if (path.problem like "%mentale%", 1, 0)
-- 		) as mentale, 
-- 		sum(
-- 			if (path.problem like "%declaree%", 1, 0)
-- 		) as assuetude

-- 	from 
-- 		patients p 
-- 		inner join 
-- 		(	
-- 			select 
-- 				pi_path.pati_id ,
-- 				stel.value as problem
-- 			from patients_information pi_path  
-- 					inner join suggestions as s2 on s2.sugg_id = pi_path.sugg_id 
-- 					inner join patients_information_template_element pitel on pitel.pite_id = pi_path.itel_id 
-- 					inner join suggestions stel on stel.sugg_id = pitel.suge_id 
-- 				where 
-- 					(
-- 						stel.path_string like '/patient/fiche/assuetude/declaree%' 
-- 						or s2.path_string like '/patient/medical/patholo%'
-- 					) 
-- 					and pi_path.deleted_at is null 
-- 					and @refdate BETWEEN coalesce(pi_path.start, @past) and COALESCE(pi_path.end, @refdate)
-- 				group by 
-- 					pi_path.pati_id,
-- 					stel.value
-- 		) path
-- 		on path.pati_id = p.pati_id
-- 		inner join patients_information as pi on p.pati_id = pi.pati_id 
-- 		inner join suggestions as s on s.sugg_id = pi.sugg_id 
-- 		left join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 		left join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 	where 
-- 		s.path_string like "/patient/fiche/statut-du-suivi/en-suivi" 
-- 		and @refdate between COALESCE(pi.start, @refdate) and COALESCE (pi.end, @refdate )
-- 		and pi.deleted_at is null 
-- 		and p.deleted_at is null 
-- 		and @refdate between coalesce(pi_antenna.start, @refdate) and COALESCE (pi_antenna.end, @refdate)
-- 		and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 		and s_antenna.value like @antenna

-- ) s;

          

select 'Tableau 25.A. – Problèmes de santé et assuétudes des patients en suivi - liste nominative';
-- select 
-- 	p.hash,
--     p.firstname,
--     p.lastname,
-- 	sum(
-- 		if (path.problem like "%physique%", 1, 0)
-- 	) as physique, 
-- 	sum(
-- 		if (path.problem like "%mentale%", 1, 0)
-- 	) as mentale, 
-- 	sum(
-- 		if (path.problem like "%declaree%", 1, 0)
-- 	) as assuetude

-- from 
-- 	patients p 
-- 	inner join 
-- 	(	
-- 		select 
-- 			pi_path.pati_id ,
-- 			stel.value as problem
--  		from patients_information pi_path  
-- 				inner join suggestions as s2 on s2.sugg_id = pi_path.sugg_id 
-- 				inner join patients_information_template_element pitel on pitel.pite_id = pi_path.itel_id 
-- 				inner join suggestions stel on stel.sugg_id = pitel.suge_id 
-- 		where 
-- 				(
-- 					stel.path_string like '/patient/fiche/assuetude/declaree%' 
-- 					or s2.path_string like '/patient/medical/patholo%'
-- 				) 
-- 				and pi_path.deleted_at is null 
-- 				and @refdate BETWEEN coalesce(pi_path.start, @past) and COALESCE(pi_path.end, @refdate)
-- 		group by 
-- 				pi_path.pati_id,
-- 				stel.value,
--                 pi_path.paif_id
-- 	) path
-- 	on path.pati_id = p.pati_id
-- 	inner join patients_information as pi on p.pati_id = pi.pati_id 
-- 	inner join suggestions as s on s.sugg_id = pi.sugg_id 
-- 	left join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 	left join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- where 
-- 	s.path_string like "/patient/fiche/statut-du-suivi/en-suivi" 
-- 	and @refdate between COALESCE(pi.start, @past) and COALESCE (pi.end, @refdate )
-- 	and pi.deleted_at is null 
-- 	and p.deleted_at is null 
-- 	and @refdate between coalesce(pi_antenna.start, @past) and COALESCE (pi_antenna.end, @refdate)
-- 	and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 	and s_antenna.value like @antenna
-- group by
-- 	p.hash, p.firstname, p.lastname;


select 'tableau 25.A - nombre de personnes ayant 2 problemes sur 3';
-- select 
--     sum(
-- 		if( (physique + mentale + assuetude) >= 2, 1, 0) 
-- 	) as nbsuivisplusque2problemes 
-- from (
-- select 
-- 	p.hash,
--     p.firstname,
--     p.lastname,
-- 	sum(
-- 		if (path.problem like "%physique%", 1, 0)
-- 	) as physique, 
-- 	sum(
-- 		if (path.problem like "%mentale%", 1, 0)
-- 	) as mentale, 
-- 	sum(
-- 		if (path.problem like "%declaree%", 1, 0)
-- 	) as assuetude

-- from 
-- 	patients p 
-- 	inner join 
-- 	(	
-- 		select 
-- 			pi_path.pati_id ,
-- 			stel.value as problem
--  		from patients_information pi_path  
-- 				inner join suggestions as s2 on s2.sugg_id = pi_path.sugg_id 
-- 				inner join patients_information_template_element pitel on pitel.pite_id = pi_path.itel_id 
-- 				inner join suggestions stel on stel.sugg_id = pitel.suge_id 
-- 		where 
-- 				(
-- 					stel.path_string like '/patient/fiche/assuetude/declaree%' 
-- 					or s2.path_string like '/patient/medical/patholo%'
-- 				) 
-- 				and pi_path.deleted_at is null 
-- 				and @refdate BETWEEN coalesce(pi_path.start, @past) and COALESCE(pi_path.end, @refdate)
-- 		group by 
-- 				pi_path.pati_id,
-- 				stel.value
-- 	) path
-- 	on path.pati_id = p.pati_id
-- 	inner join patients_information as pi on p.pati_id = pi.pati_id 
-- 	inner join suggestions as s on s.sugg_id = pi.sugg_id 
-- 	left join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 	left join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- where 
-- 	s.path_string like "/patient/fiche/statut-du-suivi/en-suivi" 
-- 	and @refdate between COALESCE(pi.start, @past) and COALESCE (pi.end, @refdate )
-- 	and pi.deleted_at is null 
-- 	and p.deleted_at is null 
-- 	and @refdate between coalesce(pi_antenna.start, @past) and COALESCE (pi_antenna.end, @refdate)
-- 	and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 	and s_antenna.value like @antenna
-- group by
-- 	p.hash, p.firstname, p.lastname
-- ) s;







select 'Tableau 25.B. – Problèmes de santé et assuétudes des patients en Housing First';

-- select 
-- 	physique as '# pathologies physiques', 
-- 	mentale as '# pathologies mentales', 
-- 	assuetude as '# d\'assuétudes'
-- from 
-- (
-- 		select 
-- 			sum(
-- 				if (path.problem like "%physique%", 1, 0)
-- 			) as physique, 
-- 			sum(
-- 				if (path.problem like "%mentale%", 1, 0)
-- 			) as mentale, 
-- 			sum(
-- 				if (path.problem like "%declaree%", 1, 0)
-- 			) as assuetude
-- 		from 
-- 			patients p 
-- 			inner join 
-- 			(
-- 				select
-- 					p.pati_id,
-- 					s.value as programme
-- 				FROM
-- 					patients as p
-- 					inner join patients_information as pi on p.pati_id = pi.pati_id
-- 					inner join suggestions as s on s.sugg_id = pi.sugg_id
-- 					inner  join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 					inner  join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 					inner join patients_information as pi_stat on p.pati_id = pi_stat.pati_id 
-- 					inner join suggestions as s_stat on s_stat.sugg_id = pi_stat.sugg_id 
-- 				where
-- 					s.path_string like "/patient/suivi/programme/housing-first"
-- 					and pi.deleted_at is null
-- 					and p.deleted_at is null
-- 					and @refdate BETWEEN coalesce(pi.start, @past) and COALESCE(pi.end, @refdate)
					
-- 					and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 					and pi_antenna.deleted_at is null
-- 					and s_antenna.value like @antenna 
-- 					and pi.start <= COALESCE (pi_antenna.end, @refdate)
-- 					and coalesce(pi.end, @refdate) >= coalesce(pi_antenna.start, @past) 

-- 					and s_stat.path_string like "/patient/fiche/statut-du-suivi/%" 
-- 					and s_stat.path_string not like "/patient/fiche/statut-du-suivi/decede" 
-- 					and @refdate between COALESCE(pi_stat.start, @past) and COALESCE (pi_stat.end, @nextyear0101)
-- 					and pi_stat.deleted_at is null
-- 			) hf on hf.pati_id = p.pati_id	
-- 			left join 
-- 			(	
-- 				select 
-- 					pi_path.pati_id ,
-- 					stel.value as problem
-- 				from patients_information pi_path  
-- 						inner join suggestions as s2 on s2.sugg_id = pi_path.sugg_id 
-- 						inner join patients_information_template_element pitel on pitel.pite_id = pi_path.itel_id 
-- 						inner join suggestions stel on stel.sugg_id = pitel.suge_id 
-- 				where 
-- 						(
-- 							stel.path_string like '/patient/fiche/assuetude/declaree%' 
-- 							or s2.path_string like '/patient/medical/patholo%'
-- 						) 
-- 						and pi_path.deleted_at is null 
-- 						and @refdate BETWEEN coalesce(pi_path.start, @past) and COALESCE(pi_path.end, @refdate)
-- 				group by 
-- 						pi_path.pati_id,
-- 						stel.value
-- 			) path on path.pati_id = p.pati_id
-- 		where programme is not null

-- ) s;

          
select 'tableau 25.B - nombre de personnes ayant 2 problemes sur 3 en housing first';

-- select 
--     sum(
-- 		if( (physique + mentale + assuetude) >= 2, 1, 0) 
-- 	) as 'nombre de personnes ayant 2 problemes sur 3',
--     count(hash) as 'nombre total'
-- from (

-- 	select 
-- 		p.hash,
-- 		p.firstname,
-- 		p.lastname,
-- 		sum(
-- 			if (path.problem like "%physique%", 1, 0)
-- 		) as physique, 
-- 		sum(
-- 			if (path.problem like "%mentale%", 1, 0)
-- 		) as mentale, 
-- 		sum(
-- 			if (path.problem like "%declaree%", 1, 0)
-- 		) as assuetude,
-- 		hf.programme
-- 	from 
-- 		patients p 
-- 		inner join 
-- 		(
-- 			select
-- 				p.pati_id,
-- 				s.value as programme
-- 			FROM
-- 				patients as p
-- 				inner join patients_information as pi on p.pati_id = pi.pati_id
-- 				inner join suggestions as s on s.sugg_id = pi.sugg_id
-- 				inner  join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 				inner  join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 				inner join patients_information as pi_stat on p.pati_id = pi_stat.pati_id 
-- 				inner join suggestions as s_stat on s_stat.sugg_id = pi_stat.sugg_id 
-- 			where
-- 				s.path_string like "/patient/suivi/programme/housing-first"
-- 				and pi.deleted_at is null
-- 				and p.deleted_at is null
-- 				and @refdate BETWEEN coalesce(pi.start, @past) and COALESCE(pi.end, @refdate)
				
-- 				and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 				and pi_antenna.deleted_at is null
-- 				and s_antenna.value like @antenna 
-- 				and pi.start <= COALESCE (pi_antenna.end, @refdate)
-- 				and coalesce(pi.end, @refdate) >= coalesce(pi_antenna.start, @past) 

-- 				and s_stat.path_string like "/patient/fiche/statut-du-suivi/%" 
-- 				and s_stat.path_string not like "/patient/fiche/statut-du-suivi/decede" 
-- 				and @refdate between COALESCE(pi_stat.start, @past) and COALESCE (pi_stat.end, @nextyear0101)
-- 				and pi_stat.deleted_at is null
-- 		) hf on hf.pati_id = p.pati_id	
-- 		left join 
-- 		(	
-- 			select 
-- 				pi_path.pati_id ,
-- 				stel.value as problem
-- 			from patients_information pi_path  
-- 					inner join suggestions as s2 on s2.sugg_id = pi_path.sugg_id 
-- 					inner join patients_information_template_element pitel on pitel.pite_id = pi_path.itel_id 
-- 					inner join suggestions stel on stel.sugg_id = pitel.suge_id 
-- 			where 
-- 					(
-- 						stel.path_string like '/patient/fiche/assuetude/declaree%' 
-- 						or s2.path_string like '/patient/medical/patholo%'
-- 					) 
-- 					and pi_path.deleted_at is null 
-- 					and @refdate BETWEEN coalesce(pi_path.start, @past) and COALESCE(pi_path.end, @refdate)
-- 			group by 
-- 					pi_path.pati_id,
-- 					stel.value
-- 		) path on path.pati_id = p.pati_id
-- 	where programme is not null
-- 	group by
-- 		programme, p.hash, p.firstname, p.lastname 
-- ) s;

select 'Tableau 25.B. – Problèmes de santé et assuétudes des patients en Housing First - liste nominative';

-- select 
-- 	p.hash,
--     p.firstname,
--     p.lastname,
-- 	sum(
-- 		if (path.problem like "%physique%", 1, 0)
-- 	) as physique, 
-- 	sum(
-- 		if (path.problem like "%mentale%", 1, 0)
-- 	) as mentale, 
-- 	sum(
-- 		if (path.problem like "%declaree%", 1, 0)
-- 	) as assuetude,
-- 	hf.programme
-- from 
-- 	patients p 
--     inner join 
--     (
-- 	    select
-- 			p.pati_id,
--             s.value as programme
-- 		FROM
-- 			patients as p
-- 			inner join patients_information as pi on p.pati_id = pi.pati_id
-- 			inner join suggestions as s on s.sugg_id = pi.sugg_id
-- 			inner  join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 			inner  join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 			inner join patients_information as pi_stat on p.pati_id = pi_stat.pati_id 
-- 			inner join suggestions as s_stat on s_stat.sugg_id = pi_stat.sugg_id 
-- 		where
-- 			s.path_string like "/patient/suivi/programme/housing-first"
-- 			and pi.deleted_at is null
-- 			and p.deleted_at is null
-- 			and @refdate BETWEEN coalesce(pi.start, @past) and COALESCE(pi.end, @refdate)
			
-- 			and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 			and pi_antenna.deleted_at is null
-- 			and s_antenna.value like @antenna 
-- 			and pi.start <= COALESCE (pi_antenna.end, @refdate)
-- 			and coalesce(pi.end, @refdate) >= coalesce(pi_antenna.start, @past) 

-- 			and s_stat.path_string like "/patient/fiche/statut-du-suivi/%" 
-- 			and s_stat.path_string not like "/patient/fiche/statut-du-suivi/decede" 
-- 			and @refdate between COALESCE(pi_stat.start, @past) and COALESCE (pi_stat.end, @nextyear0101)
--             and pi_stat.deleted_at is null
--     ) hf on hf.pati_id = p.pati_id	
--     left join 
-- 	(	
-- 		select 
-- 			pi_path.pati_id ,
-- 			stel.value as problem
--  		from patients_information pi_path  
-- 				inner join suggestions as s2 on s2.sugg_id = pi_path.sugg_id 
-- 				inner join patients_information_template_element pitel on pitel.pite_id = pi_path.itel_id 
-- 				inner join suggestions stel on stel.sugg_id = pitel.suge_id 
-- 		where 
-- 				(
-- 					stel.path_string like '/patient/fiche/assuetude/declaree%' 
-- 					or s2.path_string like '/patient/medical/patholo%'
-- 				) 
-- 				and pi_path.deleted_at is null 
-- 				and @refdate BETWEEN coalesce(pi_path.start, @past) and COALESCE(pi_path.end, @refdate)
-- 		group by 
-- 				pi_path.pati_id,
-- 				stel.value
-- 	) path on path.pati_id = p.pati_id
-- where programme is not null
-- group by
-- 	programme, p.hash, p.firstname, p.lastname;





select 'Tableau 25.C. – Problèmes de santé et assuétudes des patients en Housing Fast';

-- select 
-- 	physique as '# pathologies physiques', 
-- 	mentale as '# pathologies mentales', 
-- 	assuetude as '# d\'assuétudes'
-- from 
-- (
-- 		select 
-- 			sum(
-- 				if (path.problem like "%physique%", 1, 0)
-- 			) as physique, 
-- 			sum(
-- 				if (path.problem like "%mentale%", 1, 0)
-- 			) as mentale, 
-- 			sum(
-- 				if (path.problem like "%declaree%", 1, 0)
-- 			) as assuetude
-- 		from 
-- 			patients p 
-- 			inner join 
-- 			(
-- 				select
-- 					p.pati_id,
-- 					s.value as programme
-- 				FROM
-- 					patients as p
-- 					inner join patients_information as pi on p.pati_id = pi.pati_id
-- 					inner join suggestions as s on s.sugg_id = pi.sugg_id
-- 					inner  join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 					inner  join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 					inner join patients_information as pi_stat on p.pati_id = pi_stat.pati_id 
-- 					inner join suggestions as s_stat on s_stat.sugg_id = pi_stat.sugg_id 
-- 				where
-- 					s.path_string like "/patient/suivi/programme/housing-fast"
-- 					and pi.deleted_at is null
-- 					and p.deleted_at is null
-- 					and @refdate BETWEEN coalesce(pi.start, @past) and COALESCE(pi.end, @refdate)
					
-- 					and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 					and pi_antenna.deleted_at is null
-- 					and s_antenna.value like @antenna 
-- 					and pi.start <= COALESCE (pi_antenna.end, @refdate)
-- 					and coalesce(pi.end, @refdate) >= coalesce(pi_antenna.start, @past) 

-- 					and s_stat.path_string like "/patient/fiche/statut-du-suivi/%" 
-- 					and s_stat.path_string not like "/patient/fiche/statut-du-suivi/decede" 
-- 					and s_stat.path_string not like "/patient/fiche/statut-du-suivi/disparu"
-- 					and @refdate between COALESCE(pi_stat.start, @past) and COALESCE (pi_stat.end, @nextyear0101)
-- 					and pi_stat.deleted_at is null
-- 			) hf on hf.pati_id = p.pati_id	
-- 			left join 
-- 			(	
-- 				select 
-- 					pi_path.pati_id ,
-- 					stel.value as problem
-- 				from patients_information pi_path  
-- 						inner join suggestions as s2 on s2.sugg_id = pi_path.sugg_id 
-- 						inner join patients_information_template_element pitel on pitel.pite_id = pi_path.itel_id 
-- 						inner join suggestions stel on stel.sugg_id = pitel.suge_id 
-- 				where 
-- 						(
-- 							stel.path_string like '/patient/fiche/assuetude/declaree%' 
-- 							or s2.path_string like '/patient/medical/patholo%'
-- 						) 
-- 						and pi_path.deleted_at is null 
-- 						and @refdate BETWEEN coalesce(pi_path.start, @past) and COALESCE(pi_path.end, @refdate)
-- 				group by 
-- 						pi_path.pati_id,
-- 						stel.value
-- 			) path on path.pati_id = p.pati_id
-- 		where programme is not null

-- ) s;

          
select 'tableau 25.C - nombre de personnes ayant 2 problemes sur 3 en housing Fast';

-- select 
--     sum(
-- 		if( (physique + mentale + assuetude) >= 2, 1, 0) 
-- 	) as 'nombre de personnes ayant 2 problemes sur 3',
--     count(hash) as 'nombre total'
-- from (

-- 	select 
-- 		p.hash,
-- 		p.firstname,
-- 		p.lastname,
-- 		sum(
-- 			if (path.problem like "%physique%", 1, 0)
-- 		) as physique, 
-- 		sum(
-- 			if (path.problem like "%mentale%", 1, 0)
-- 		) as mentale, 
-- 		sum(
-- 			if (path.problem like "%declaree%", 1, 0)
-- 		) as assuetude,
-- 		hf.programme
-- 	from 
-- 		patients p 
-- 		inner join 
-- 		(
-- 			select
-- 				p.pati_id,
-- 				s.value as programme
-- 			FROM
-- 				patients as p
-- 				inner join patients_information as pi on p.pati_id = pi.pati_id
-- 				inner join suggestions as s on s.sugg_id = pi.sugg_id
-- 				inner  join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 				inner  join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 				inner join patients_information as pi_stat on p.pati_id = pi_stat.pati_id 
-- 				inner join suggestions as s_stat on s_stat.sugg_id = pi_stat.sugg_id 
-- 			where
-- 				s.path_string like "/patient/suivi/programme/housing-fast"
-- 				and pi.deleted_at is null
-- 				and p.deleted_at is null
-- 				and @refdate BETWEEN coalesce(pi.start, @past) and COALESCE(pi.end, @refdate)
				
-- 				and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 				and pi_antenna.deleted_at is null
-- 				and s_antenna.value like @antenna 
-- 				and pi.start <= COALESCE (pi_antenna.end, @refdate)
-- 				and coalesce(pi.end, @refdate) >= coalesce(pi_antenna.start, @past) 

-- 				and s_stat.path_string like "/patient/fiche/statut-du-suivi/%" 
-- 				and s_stat.path_string not like "/patient/fiche/statut-du-suivi/decede" 
-- 				and s_stat.path_string not like "/patient/fiche/statut-du-suivi/disparu"
-- 				and @refdate between COALESCE(pi_stat.start, @past) and COALESCE (pi_stat.end, @nextyear0101)
-- 				and pi_stat.deleted_at is null
-- 		) hf on hf.pati_id = p.pati_id	
-- 		left join 
-- 		(	
-- 			select 
-- 				pi_path.pati_id ,
-- 				stel.value as problem
-- 			from patients_information pi_path  
-- 					inner join suggestions as s2 on s2.sugg_id = pi_path.sugg_id 
-- 					inner join patients_information_template_element pitel on pitel.pite_id = pi_path.itel_id 
-- 					inner join suggestions stel on stel.sugg_id = pitel.suge_id 
-- 			where 
-- 					(
-- 						stel.path_string like '/patient/fiche/assuetude/declaree%' 
-- 						or s2.path_string like '/patient/medical/patholo%'
-- 					) 
-- 					and pi_path.deleted_at is null 
-- 					and @refdate BETWEEN coalesce(pi_path.start, @past) and COALESCE(pi_path.end, @refdate)
-- 			group by 
-- 					pi_path.pati_id,
-- 					stel.value
-- 		) path on path.pati_id = p.pati_id
-- 	where programme is not null
-- 	group by
-- 		programme, p.hash, p.firstname, p.lastname 
-- ) s;

select 'Tableau 25.C. – Problèmes de santé et assuétudes des patients en Housing Fast - liste nominative';

-- select 
-- 	p.hash,
--     p.firstname,
--     p.lastname,
-- 	sum(
-- 		if (path.problem like "%physique%", 1, 0)
-- 	) as physique, 
-- 	sum(
-- 		if (path.problem like "%mentale%", 1, 0)
-- 	) as mentale, 
-- 	sum(
-- 		if (path.problem like "%declaree%", 1, 0)
-- 	) as assuetude,
-- 	hf.programme
-- from 
-- 	patients p 
--     inner join 
--     (
-- 	    select
-- 			p.pati_id,
--             s.value as programme
-- 		FROM
-- 			patients as p
-- 			inner join patients_information as pi on p.pati_id = pi.pati_id
-- 			inner join suggestions as s on s.sugg_id = pi.sugg_id
-- 			inner  join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 			inner  join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 			inner join patients_information as pi_stat on p.pati_id = pi_stat.pati_id 
-- 			inner join suggestions as s_stat on s_stat.sugg_id = pi_stat.sugg_id 
-- 		where
-- 			s.path_string like "/patient/suivi/programme/housing-fast"
-- 			and pi.deleted_at is null
-- 			and p.deleted_at is null
-- 			and @refdate BETWEEN coalesce(pi.start, @past) and COALESCE(pi.end, @refdate)
			
-- 			and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 			and pi_antenna.deleted_at is null
-- 			and s_antenna.value like @antenna 
-- 			and pi.start <= COALESCE (pi_antenna.end, @refdate)
-- 			and coalesce(pi.end, @refdate) >= coalesce(pi_antenna.start, @past) 

-- 			and s_stat.path_string like "/patient/fiche/statut-du-suivi/%" 
-- 			and s_stat.path_string not like "/patient/fiche/statut-du-suivi/decede" 
-- 			and @refdate between COALESCE(pi_stat.start, @past) and COALESCE (pi_stat.end, @nextyear0101)
--             and pi_stat.deleted_at is null
--     ) hf on hf.pati_id = p.pati_id	
--     left join 
-- 	(	
-- 		select 
-- 			pi_path.pati_id ,
-- 			stel.value as problem
--  		from patients_information pi_path  
-- 				inner join suggestions as s2 on s2.sugg_id = pi_path.sugg_id 
-- 				inner join patients_information_template_element pitel on pitel.pite_id = pi_path.itel_id 
-- 				inner join suggestions stel on stel.sugg_id = pitel.suge_id 
-- 		where 
-- 				(
-- 					stel.path_string like '/patient/fiche/assuetude/declaree%' 
-- 					or s2.path_string like '/patient/medical/patholo%'
-- 				) 
-- 				and pi_path.deleted_at is null 
-- 				and @refdate BETWEEN coalesce(pi_path.start, @past) and COALESCE(pi_path.end, @refdate)
-- 		group by 
-- 				pi_path.pati_id,
-- 				stel.value
-- 	) path on path.pati_id = p.pati_id
-- where programme is not null
-- group by
-- 	programme, p.hash, p.firstname, p.lastname;








select 'Tableau 26 : Identification des problèmes de santé physique chronique';

select 'Tableau 26.A. – Absence de problème de santé physique chronique des patients en suivi';
-- select 
-- 	sum(if (physique = 0, 1, 0)) as 'absence de pathologie physique',
-- 	sum(if (physique > 0, 1, 0)) as 'pathologie physique',
-- 	count(physique) as 'nombre de patients dans le suivi' 
-- from 
-- (
--     select 
-- 		p.hash,
-- 		sum(
-- 			if (path.problem like "%physique%", 1, 0)
-- 		) as physique, 
-- 		sum(
-- 			if (path.problem like "%mentale%", 1, 0)
-- 		) as mentale, 
-- 		sum(
-- 			if (path.problem like "%declaree%", 1, 0)
-- 		) as assuetude

-- 	from 
-- 		patients p 
-- 		inner join 
-- 		(	
-- 			select 
-- 				pi_path.pati_id ,
-- 				stel.value as problem
-- 			from patients_information pi_path  
-- 					inner join suggestions as s2 on s2.sugg_id = pi_path.sugg_id 
-- 					inner join patients_information_template_element pitel on pitel.pite_id = pi_path.itel_id 
-- 					inner join suggestions stel on stel.sugg_id = pitel.suge_id 
-- 				where 
-- 					(
-- 						stel.path_string like '/patient/fiche/assuetude/declaree%' 
-- 						or s2.path_string like '/patient/medical/patholo%'
-- 					) 
-- 					and pi_path.deleted_at is null 
-- 					and @refdate BETWEEN coalesce(pi_path.start, @past) and COALESCE(pi_path.end, @refdate)
-- 				group by 
-- 					pi_path.pati_id,
-- 					stel.value
-- 		) path
-- 		on path.pati_id = p.pati_id
-- 		inner join patients_information as pi on p.pati_id = pi.pati_id 
-- 		inner join suggestions as s on s.sugg_id = pi.sugg_id 
-- 		left join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 		left join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 	where 
-- 		s.path_string like "/patient/fiche/statut-du-suivi/en-suivi" 
-- 		and @refdate between COALESCE(pi.start, @past) and COALESCE (pi.end, @refdate )
-- 		and pi.deleted_at is null 
-- 		and p.deleted_at is null 
-- 		and @refdate between coalesce(pi_antenna.start, @past) and COALESCE (pi_antenna.end, @refdate)
-- 		and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 		and s_antenna.value like @antenna
-- 	group by 
-- 		hash
-- ) s;




select 'Tableau 26.A. – Absence de problème de santé physique chronique des patients en suivi - liste nominative';

-- select 
-- 	p.hash,
-- 	p.firstname,
-- 	p.lastname,
-- 	sum(
-- 		if (path.problem like "%physique%", 1, 0)
-- 	) as physique

-- from 
-- 	patients p 
-- 	inner join 
-- 	(	
-- 		select 
-- 			pi_path.pati_id ,
-- 			stel.value as problem
-- 		from patients_information pi_path  
-- 				inner join suggestions as s2 on s2.sugg_id = pi_path.sugg_id 
-- 				inner join patients_information_template_element pitel on pitel.pite_id = pi_path.itel_id 
-- 				inner join suggestions stel on stel.sugg_id = pitel.suge_id 
-- 			where 
-- 				(
-- 					stel.path_string like '/patient/fiche/assuetude/declaree%' 
-- 					or s2.path_string like '/patient/medical/patholo%'
-- 				) 
-- 				and pi_path.deleted_at is null 
-- 				and @refdate BETWEEN coalesce(pi_path.start, @past) and COALESCE(pi_path.end, @refdate)
-- 			group by 
-- 				pi_path.pati_id,
-- 				stel.value
-- 	) path
-- 	on path.pati_id = p.pati_id
-- 	inner join patients_information as pi on p.pati_id = pi.pati_id 
-- 	inner join suggestions as s on s.sugg_id = pi.sugg_id 
-- 	left join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 	left join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- where 
-- 	s.path_string like "/patient/fiche/statut-du-suivi/en-suivi" 
-- 	and @refdate between COALESCE(pi.start, @past) and COALESCE (pi.end, @refdate )
-- 	and pi.deleted_at is null 
-- 	and p.deleted_at is null 
-- 	and @refdate between coalesce(pi_antenna.start, @past) and COALESCE (pi_antenna.end, @refdate)
-- 	and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 	and s_antenna.value like @antenna
-- group by 
-- 	hash,
-- 	p.firstname,
-- 	p.lastname
-- order by hash;


select 'Tableau 26.B. – Identification des problèmes de santé physique chronique des patients en suivi';
-- select 
--     path.category,
-- 	path.problem,
-- 	count(p.hash) as nombre
-- from 
-- 	patients p 
-- 	inner join 
-- 	(	
-- 		select 
-- 			pi_path.pati_id ,
-- 			stel.value as category,
--             s2.value as problem
-- 		from patients_information pi_path  
-- 				inner join suggestions as s2 on s2.sugg_id = pi_path.sugg_id 
-- 				inner join patients_information_template_element pitel on pitel.pite_id = pi_path.itel_id 
-- 				inner join suggestions stel on stel.sugg_id = pitel.suge_id 
-- 			where 
-- 				s2.path_string like '/patient/medical/pathologies/pathologies-physiques%'
-- 				and pi_path.deleted_at is null 
-- 				and @refdate BETWEEN coalesce(pi_path.start, @past) and COALESCE(pi_path.end, @refdate)
-- 			group by 
-- 				pi_path.pati_id,
-- 				stel.value,
--                 s2.value
-- 	) path
-- 	on path.pati_id = p.pati_id
-- 	inner join patients_information as pi on p.pati_id = pi.pati_id 
-- 	inner join suggestions as s on s.sugg_id = pi.sugg_id 
-- 	left join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 	left join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- where 
-- 	s.path_string like "/patient/fiche/statut-du-suivi/en-suivi" 
-- 	and @refdate between COALESCE(pi.start, @past) and COALESCE (pi.end, @refdate )
-- 	and pi.deleted_at is null 
-- 	and p.deleted_at is null 
-- 	and @refdate between coalesce(pi_antenna.start, @past) and COALESCE (pi_antenna.end, @refdate)
-- 	and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 	and s_antenna.value like @antenna
-- group by 
--     path.category,
-- 	path.problem
-- order by 
--     path.category,
-- 	path.problem;



select 'Tableau 26.B. – Identification des problèmes de santé physique chronique des patients en suivi - liste nominative';
-- select 
--     path.category,
-- 	path.problem,
-- 	p.hash
-- from 
-- 	patients p 
-- 	inner join 
-- 	(	
-- 		select 
-- 			pi_path.pati_id ,
-- 			stel.value as category,
--             s2.value as problem
-- 		from patients_information pi_path  
-- 				inner join suggestions as s2 on s2.sugg_id = pi_path.sugg_id 
-- 				inner join patients_information_template_element pitel on pitel.pite_id = pi_path.itel_id 
-- 				inner join suggestions stel on stel.sugg_id = pitel.suge_id 
-- 			where 
-- 				s2.path_string like '/patient/medical/pathologies/pathologies-physiques%'
-- 				and pi_path.deleted_at is null 
-- 				and @refdate BETWEEN coalesce(pi_path.start, @past) and COALESCE(pi_path.end, @refdate)
-- 			group by 
-- 				pi_path.pati_id,
-- 				stel.value,
--                 s2.value
-- 	) path
-- 	on path.pati_id = p.pati_id
-- 	inner join patients_information as pi on p.pati_id = pi.pati_id 
-- 	inner join suggestions as s on s.sugg_id = pi.sugg_id 
-- 	left join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 	left join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- where 
-- 	s.path_string like "/patient/fiche/statut-du-suivi/en-suivi"
-- 	and @refdate between COALESCE(pi.start, @past) and COALESCE (pi.end, @refdate )
-- 	and pi.deleted_at is null 
-- 	and p.deleted_at is null 
-- 	and @refdate between coalesce(pi_antenna.start, @past) and COALESCE (pi_antenna.end, @refdate)
-- 	and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 	and s_antenna.value like @antenna
-- order by 
--     path.category,
-- 	path.problem;



select 'Tableau 26.C. – Absence de problème de santé physique chronique des patients en Housing First';
-- select 
-- 	sum(if (physique = 0, 1, 0)) as 'Nombre de personnes sans problème de santé physique chronique',
-- 	sum(if (physique > 0, 1, 0)) as 'Nombre de personnes avec problème de santé physique chronique',
-- 	count(physique) as 'nombre de patients dans le programme housing first' 
-- from 
-- (
 
--    select 
-- 			p.hash,
-- 			p.firstname,
-- 			p.lastname,
-- 				sum(
-- 				if (path.problem like "%physique%", 1, 0)
-- 			) as physique
-- 		from 
-- 			patients p 
-- 			inner join 
-- 			(
-- 				select
-- 					p.pati_id,
-- 					s.value as programme
-- 				FROM
-- 					patients as p
-- 					inner join patients_information as pi on p.pati_id = pi.pati_id
-- 					inner join suggestions as s on s.sugg_id = pi.sugg_id
-- 					inner  join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 					inner  join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 					inner join patients_information as pi_stat on p.pati_id = pi_stat.pati_id 
-- 					inner join suggestions as s_stat on s_stat.sugg_id = pi_stat.sugg_id 
-- 				where
-- 					s.path_string like "/patient/suivi/programme/housing-first"
-- 					and pi.deleted_at is null
-- 					and p.deleted_at is null
-- 					and @refdate BETWEEN coalesce(pi.start, @past) and COALESCE(pi.end, @refdate)
					
-- 					and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 					and pi_antenna.deleted_at is null
-- 					and s_antenna.value like @antenna 
-- 					and pi.start <= COALESCE (pi_antenna.end, @refdate)
-- 					and coalesce(pi.end, @refdate) >= coalesce(pi_antenna.start, @past) 

-- 					and s_stat.path_string like "/patient/fiche/statut-du-suivi/%" 
-- 					and s_stat.path_string not like "/patient/fiche/statut-du-suivi/decede" 
-- 					and @refdate between COALESCE(pi_stat.start, @past) and COALESCE (pi_stat.end, @nextyear0101)
-- 					and pi_stat.deleted_at is null
-- 			) hf on hf.pati_id = p.pati_id	
-- 			left join 
-- 			(	
-- 				select 
-- 					pi_path.pati_id ,
-- 					stel.value as problem
-- 				from patients_information pi_path  
-- 						inner join suggestions as s2 on s2.sugg_id = pi_path.sugg_id 
-- 						inner join patients_information_template_element pitel on pitel.pite_id = pi_path.itel_id 
-- 						inner join suggestions stel on stel.sugg_id = pitel.suge_id 
-- 				where 
-- 						(
-- 							stel.path_string like '/patient/fiche/assuetude/declaree%' 
-- 							or s2.path_string like '/patient/medical/patholo%'
-- 						) 
-- 						and pi_path.deleted_at is null 
-- 						and @refdate BETWEEN coalesce(pi_path.start, @past) and COALESCE(pi_path.end, @refdate)
-- 				group by 
-- 						pi_path.pati_id,
-- 						stel.value
-- 			) path on path.pati_id = p.pati_id
-- 		where programme is not null
-- 	group by 
-- 		hash, firstname, lastname
-- 	order by hash
-- ) s;



select 'Tableau 26.C. – Absence de problème de santé physique chronique des patients en Housing First - liste nominative';
-- select 
-- 			p.hash,
-- 			p.firstname,
-- 			p.lastname,
-- 				sum(
-- 				if (path.problem like "%physique%", 1, 0)
-- 			) as physique
-- 		from 
-- 			patients p 
-- 			inner join 
-- 			(
-- 				select
-- 					p.pati_id,
-- 					s.value as programme
-- 				FROM
-- 					patients as p
-- 					inner join patients_information as pi on p.pati_id = pi.pati_id
-- 					inner join suggestions as s on s.sugg_id = pi.sugg_id
-- 					inner  join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 					inner  join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 					inner join patients_information as pi_stat on p.pati_id = pi_stat.pati_id 
-- 					inner join suggestions as s_stat on s_stat.sugg_id = pi_stat.sugg_id 
-- 				where
-- 					s.path_string like "/patient/suivi/programme/housing-first"
-- 					and pi.deleted_at is null
-- 					and p.deleted_at is null
-- 					and @refdate BETWEEN coalesce(pi.start, @past) and COALESCE(pi.end, @refdate)
					
-- 					and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 					and pi_antenna.deleted_at is null
-- 					and s_antenna.value like @antenna 
-- 					and pi.start <= COALESCE (pi_antenna.end, @refdate)
-- 					and coalesce(pi.end, @refdate) >= coalesce(pi_antenna.start, @past) 

-- 					and s_stat.path_string like "/patient/fiche/statut-du-suivi/%" 
-- 					and s_stat.path_string not like "/patient/fiche/statut-du-suivi/decede" 
-- 					and @refdate between COALESCE(pi_stat.start, @past) and COALESCE (pi_stat.end, @nextyear0101)
-- 					and pi_stat.deleted_at is null
-- 			) hf on hf.pati_id = p.pati_id	
-- 			left join 
-- 			(	
-- 				select 
-- 					pi_path.pati_id ,
-- 					stel.value as problem
-- 				from patients_information pi_path  
-- 						inner join suggestions as s2 on s2.sugg_id = pi_path.sugg_id 
-- 						inner join patients_information_template_element pitel on pitel.pite_id = pi_path.itel_id 
-- 						inner join suggestions stel on stel.sugg_id = pitel.suge_id 
-- 				where 
-- 						(
-- 							stel.path_string like '/patient/fiche/assuetude/declaree%' 
-- 							or s2.path_string like '/patient/medical/patholo%'
-- 						) 
-- 						and pi_path.deleted_at is null 
-- 						and @refdate BETWEEN coalesce(pi_path.start, @past) and COALESCE(pi_path.end, @refdate)
-- 				group by 
-- 						pi_path.pati_id,
-- 						stel.value
-- 			) path on path.pati_id = p.pati_id
-- 		where programme is not null
-- 	group by 
-- 		hash, firstname, lastname
-- order by hash;



select 'Tableau 26.D. – Identification des problèmes de santé physique chronique des patients Housing First';
-- select 
--     path.category,
-- 	path.problem,
-- 	count(p.hash) as nombre
-- from 
-- 	patients p 
-- 	inner join 
-- 	(
-- 		select
-- 			p.pati_id,
-- 			s.value as programme
-- 		FROM
-- 			patients as p
-- 			inner join patients_information as pi on p.pati_id = pi.pati_id
-- 			inner join suggestions as s on s.sugg_id = pi.sugg_id
-- 			inner  join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 			inner  join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 			inner join patients_information as pi_stat on p.pati_id = pi_stat.pati_id 
-- 			inner join suggestions as s_stat on s_stat.sugg_id = pi_stat.sugg_id 
-- 		where
-- 			s.path_string like "/patient/suivi/programme/housing-first"
-- 			and pi.deleted_at is null
-- 			and p.deleted_at is null
-- 			and @refdate BETWEEN coalesce(pi.start, @past) and COALESCE(pi.end, @refdate)
			
-- 			and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 			and pi_antenna.deleted_at is null
-- 			and s_antenna.value like @antenna 
-- 			and pi.start <= COALESCE (pi_antenna.end, @refdate)
-- 			and coalesce(pi.end, @refdate) >= coalesce(pi_antenna.start, @past) 

-- 			and s_stat.path_string like "/patient/fiche/statut-du-suivi/%" 
-- 			and s_stat.path_string not like "/patient/fiche/statut-du-suivi/decede" 
-- 			and @refdate between COALESCE(pi_stat.start, @past) and COALESCE (pi_stat.end, @nextyear0101)
-- 			and pi_stat.deleted_at is null
-- 	) hf on hf.pati_id = p.pati_id	
-- 	left join 
-- 	(	
-- 		select 
-- 			pi_path.pati_id ,
-- 			stel.value as category,
--             s2.value as problem
-- 		from patients_information pi_path  
-- 				inner join suggestions as s2 on s2.sugg_id = pi_path.sugg_id 
-- 				inner join patients_information_template_element pitel on pitel.pite_id = pi_path.itel_id 
-- 				inner join suggestions stel on stel.sugg_id = pitel.suge_id 
-- 			where 
-- 				s2.path_string like '/patient/medical/pathologies/pathologies-physiques%'
-- 				and pi_path.deleted_at is null 
-- 				and @refdate BETWEEN coalesce(pi_path.start, @past) and COALESCE(pi_path.end, @refdate)
-- 			group by 
-- 				pi_path.pati_id,
-- 				stel.value,
--                 s2.value
-- 	) path
-- 	on path.pati_id = p.pati_id
-- group by 
--     path.category,
-- 	path.problem
-- order by 
--     path.category,
-- 	path.problem;



select 'Tableau 26.D. – Identification des problèmes de santé physique chronique des patients Housing First - liste nominative';

-- select 
-- 	p.hash,
--     coalesce(path.category, "--inconnu--") as category,
-- 	coalesce(path.problem, "--inconnu--") as problem
-- from 
-- 	patients p 
-- 	inner join 
-- 	(
-- 		select
-- 			p.pati_id,
-- 			s.value as programme
-- 		FROM
-- 			patients as p
-- 			inner join patients_information as pi on p.pati_id = pi.pati_id
-- 			inner join suggestions as s on s.sugg_id = pi.sugg_id
-- 			inner  join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 			inner  join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 			inner join patients_information as pi_stat on p.pati_id = pi_stat.pati_id 
-- 			inner join suggestions as s_stat on s_stat.sugg_id = pi_stat.sugg_id 
-- 		where
-- 			s.path_string like "/patient/suivi/programme/housing-first"
-- 			and pi.deleted_at is null
-- 			and p.deleted_at is null
-- 			and @refdate BETWEEN coalesce(pi.start, @past) and COALESCE(pi.end, @refdate)
			
-- 			and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 			and pi_antenna.deleted_at is null
-- 			and s_antenna.value like @antenna 
-- 			and pi.start <= COALESCE (pi_antenna.end, @refdate)
-- 			and coalesce(pi.end, @refdate) >= coalesce(pi_antenna.start, @past) 

-- 			and s_stat.path_string like "/patient/fiche/statut-du-suivi/%" 
-- 			and s_stat.path_string not like "/patient/fiche/statut-du-suivi/decede" 
-- 			and @refdate between COALESCE(pi_stat.start, @past) and COALESCE (pi_stat.end, @nextyear0101)
-- 			and pi_stat.deleted_at is null
-- 	) hf on hf.pati_id = p.pati_id	
-- 	left join 
-- 	(	
-- 		select 
-- 			pi_path.pati_id ,
-- 			stel.value as category,
--             s2.value as problem
-- 		from patients_information pi_path  
-- 				inner join suggestions as s2 on s2.sugg_id = pi_path.sugg_id 
-- 				inner join patients_information_template_element pitel on pitel.pite_id = pi_path.itel_id 
-- 				inner join suggestions stel on stel.sugg_id = pitel.suge_id 
-- 			where 
-- 				s2.path_string like '/patient/medical/pathologies/pathologies-physiques%'
-- 				and pi_path.deleted_at is null 
-- 				and @refdate BETWEEN coalesce(pi_path.start, @past) and COALESCE(pi_path.end, @refdate)
-- 			group by 
-- 				pi_path.pati_id,
-- 				stel.value,
--                 s2.value
-- 	) path
-- 	on path.pati_id = p.pati_id
-- order by 
--     path.category,
-- 	path.problem;


	
select 'Tableau 27 : Identification des problèmes de santé mentale';

select 'Tableau 27.A : Absence de problèmes de santé mentale chez les patients en suivi';
-- select 
-- 	sum(if (mentale = 0, 1, 0)) as 'Nombre de personnes sans problème de santé mentale',
-- 	sum(if (mentale > 0, 1, 0)) as 'Nombre de personnes avec problème de santé mentale',
-- 	count(mentale) as 'nombre de patients dans le suivi' 
-- from 
-- (
--     select 
-- 		p.hash,
-- 		sum(
-- 			if (path.category like "%mentale%", 1, 0)
-- 		) as mentale
-- 	from 
-- 		patients p 
-- 	inner join 
-- 	(
-- 		select
-- 			p.pati_id,
-- 			s.value as programme
-- 		FROM
-- 			patients as p
-- 			inner join patients_information as pi on p.pati_id = pi.pati_id
-- 			inner join suggestions as s on s.sugg_id = pi.sugg_id
-- 			inner  join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 			inner  join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 			inner join patients_information as pi_stat on p.pati_id = pi_stat.pati_id 
-- 			inner join suggestions as s_stat on s_stat.sugg_id = pi_stat.sugg_id 
-- 		where
-- 			s.path_string like "/patient/suivi/programme/housing-first"
-- 			and pi.deleted_at is null
-- 			and p.deleted_at is null
-- 			and @refdate BETWEEN coalesce(pi.start, @past) and COALESCE(pi.end, @refdate)
			
-- 			and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 			and pi_antenna.deleted_at is null
-- 			and s_antenna.value like @antenna 
-- 			and pi.start <= COALESCE (pi_antenna.end, @refdate)
-- 			and coalesce(pi.end, @refdate) >= coalesce(pi_antenna.start, @past) 

-- 			and s_stat.path_string like "/patient/fiche/statut-du-suivi/%" 
-- 			and s_stat.path_string not like "/patient/fiche/statut-du-suivi/decede" 
-- 			and @refdate between COALESCE(pi_stat.start, @past) and COALESCE (pi_stat.end, @nextyear0101)
-- 			and pi_stat.deleted_at is null
-- 	) hf on hf.pati_id = p.pati_id	
-- 	left join 
-- 	(	
-- 		select 
-- 			pi_path.pati_id ,
-- 			stel.value as category,
--             s2.value as problem
-- 		from patients_information pi_path  
-- 				inner join suggestions as s2 on s2.sugg_id = pi_path.sugg_id 
-- 				inner join patients_information_template_element pitel on pitel.pite_id = pi_path.itel_id 
-- 				inner join suggestions stel on stel.sugg_id = pitel.suge_id 
-- 			where 
-- 				s2.path_string like '/patient/medical/pathologies/pathologies-mentale%'
-- 				and pi_path.deleted_at is null 
-- 				and @refdate BETWEEN coalesce(pi_path.start, @past) and COALESCE(pi_path.end, @refdate)
-- 			group by 
-- 				pi_path.pati_id,
-- 				stel.value,
--                 s2.value
-- 	) path
-- 	on path.pati_id = p.pati_id
-- 	group by hash
-- ) s;




select 'Tableau 27.A : Absence de problèmes de santé mentale chez les patients en suivi - liste nominative';

-- select 
-- 	p.hash,
-- 	coalesce(path.problem, '--aucun--') as probleme
-- from 
-- 	patients p 
-- 	inner join 
-- 	(
-- 		select
-- 			p.pati_id,
-- 			s.value as programme
-- 		FROM
-- 			patients as p
-- 			inner join patients_information as pi on p.pati_id = pi.pati_id
-- 			inner join suggestions as s on s.sugg_id = pi.sugg_id
-- 			inner  join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 			inner  join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 			inner join patients_information as pi_stat on p.pati_id = pi_stat.pati_id 
-- 			inner join suggestions as s_stat on s_stat.sugg_id = pi_stat.sugg_id 
-- 		where
-- 			s.path_string like "/patient/suivi/programme/housing-first"
-- 			and pi.deleted_at is null
-- 			and p.deleted_at is null
-- 			and @refdate BETWEEN coalesce(pi.start, @past) and COALESCE(pi.end, @refdate)
			
-- 			and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 			and pi_antenna.deleted_at is null
-- 			and s_antenna.value like @antenna 
-- 			and pi.start <= COALESCE (pi_antenna.end, @refdate)
-- 			and coalesce(pi.end, @refdate) >= coalesce(pi_antenna.start, @past) 

-- 			and s_stat.path_string like "/patient/fiche/statut-du-suivi/%" 
-- 			and s_stat.path_string not like "/patient/fiche/statut-du-suivi/decede" 
-- 			and @refdate between COALESCE(pi_stat.start, @past) and COALESCE (pi_stat.end, @nextyear0101)
-- 			and pi_stat.deleted_at is null
-- 	) hf on hf.pati_id = p.pati_id	
-- 	left join 
-- 	(	
-- 		select 
-- 			pi_path.pati_id ,
-- 			stel.value as category,
-- 			s2.value as problem
-- 		from patients_information pi_path  
-- 				inner join suggestions as s2 on s2.sugg_id = pi_path.sugg_id 
-- 				inner join patients_information_template_element pitel on pitel.pite_id = pi_path.itel_id 
-- 				inner join suggestions stel on stel.sugg_id = pitel.suge_id 
-- 			where 
-- 				s2.path_string like '/patient/medical/pathologies/pathologies-mentale%'
-- 				and pi_path.deleted_at is null 
-- 				and @refdate BETWEEN coalesce(pi_path.start, @past) and COALESCE(pi_path.end, @refdate)
-- 			group by 
-- 				pi_path.pati_id,
-- 				stel.value,
-- 				s2.value
-- 	) path
-- 	on path.pati_id = p.pati_id
-- order by hash;

select 'Tableau 27.B. – Identification des problèmes de santé mentale chez les patients en suivi';

-- select 
-- 	coalesce(path.category, 'Pathologies mentales') as category,
-- 	coalesce(path.problem, 'aucune pathologie mentale') as probleme,
-- 	count(p.hash) as nombre
-- from 
-- 	patients p 
-- 	inner join 
-- 	(
-- 		select
-- 			p.pati_id
-- 		FROM
-- 			patients as p
-- 			inner  join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 			inner  join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 			inner join patients_information as pi_stat on p.pati_id = pi_stat.pati_id 
-- 			inner join suggestions as s_stat on s_stat.sugg_id = pi_stat.sugg_id 
-- 		where
-- 			s_antenna.path_string like "/patient/suivi/antenne/%"
-- 			and pi_antenna.deleted_at is null
-- 			and s_antenna.value like @antenna 
-- 			and pi_stat.start <= COALESCE (pi_antenna.end, @refdate)
-- 			and coalesce(pi_stat.end, @refdate) >= coalesce(pi_antenna.start, @past) 

-- 			and s_stat.path_string like "/patient/fiche/statut-du-suivi/en-suivi" 
-- 			and @refdate between COALESCE(pi_stat.start, @past) and COALESCE (pi_stat.end, @nextyear0101)
-- 			and pi_stat.deleted_at is null
-- 	) suivi on suivi.pati_id = p.pati_id	
-- 	left join 
-- 	(	
-- 		select 
-- 			pi_path.pati_id ,
-- 			stel.value as category,
-- 			s2.value as problem
-- 		from patients_information pi_path  
-- 				inner join suggestions as s2 on s2.sugg_id = pi_path.sugg_id 
-- 				inner join patients_information_template_element pitel on pitel.pite_id = pi_path.itel_id 
-- 				inner join suggestions stel on stel.sugg_id = pitel.suge_id 
-- 			where 
-- 				s2.path_string like '/patient/medical/pathologies/pathologies-mentale%'
-- 				and pi_path.deleted_at is null 
-- 				and @refdate BETWEEN coalesce(pi_path.start, @past) and COALESCE(pi_path.end, @refdate)
-- 			group by 
-- 				pi_path.pati_id,
-- 				stel.value,
-- 				s2.value
-- 	) path
-- 	on path.pati_id = p.pati_id
-- group by 
--     path.category,
-- 	path.problem
-- order by 
--     path.category,
-- 	path.problem;


select 'Tableau 27.B. – Identification des problèmes de santé mentale chez les patients en suivi - liste nominative';

-- select 
-- 	coalesce(path.category, 'Pathologies mentales') as category,
-- 	p.hash,
-- 	coalesce(path.problem, 'aucune pathologie mentale') as probleme
-- from 
-- 	patients p 
-- 	inner join 
-- 	(
-- 		select
-- 			p.pati_id
-- 		FROM
-- 			patients as p
-- 			inner  join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 			inner  join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 			inner join patients_information as pi_stat on p.pati_id = pi_stat.pati_id 
-- 			inner join suggestions as s_stat on s_stat.sugg_id = pi_stat.sugg_id 
-- 		where
-- 			s_antenna.path_string like "/patient/suivi/antenne/%"
-- 			and pi_antenna.deleted_at is null
-- 			and s_antenna.value like @antenna 
-- 			and pi_stat.start <= COALESCE (pi_antenna.end, @refdate)
-- 			and coalesce(pi_stat.end, @refdate) >= coalesce(pi_antenna.start, @past) 

-- 			and s_stat.path_string like "/patient/fiche/statut-du-suivi/en-suivi" 
-- 			and @refdate between COALESCE(pi_stat.start, @past) and COALESCE (pi_stat.end, @nextyear0101)
-- 			and pi_stat.deleted_at is null
-- 	) suivi on suivi.pati_id = p.pati_id	
-- 	left join 
-- 	(	
-- 		select 
-- 			pi_path.pati_id ,
-- 			stel.value as category,
-- 			s2.value as problem
-- 		from patients_information pi_path  
-- 				inner join suggestions as s2 on s2.sugg_id = pi_path.sugg_id 
-- 				inner join patients_information_template_element pitel on pitel.pite_id = pi_path.itel_id 
-- 				inner join suggestions stel on stel.sugg_id = pitel.suge_id 
-- 			where 
-- 				s2.path_string like '/patient/medical/pathologies/pathologies-mentale%'
-- 				and pi_path.deleted_at is null 
-- 				and @refdate BETWEEN coalesce(pi_path.start, @past) and COALESCE(pi_path.end, @refdate)
-- 			group by 
-- 				pi_path.pati_id,
-- 				stel.value,
-- 				s2.value
-- 	) path
-- 	on path.pati_id = p.pati_id
-- order by 
--     path.category,
-- 	p.hash;




select 'Tableau 27.C. : Absence de problèmes de santé mentale chez les patients Housing First';
-- select 
-- 	sum(if (mentale = 0, 1, 0)) as 'absence de pathologie mentale',
-- 	sum(if (mentale > 0, 1, 0)) as 'avec pathologie mentale',
-- 	count(mentale) as 'nombre de patients dans le suivi' 
-- from 
-- (
--    select 
-- 			p.hash,
-- 			p.firstname,
-- 			p.lastname,
-- 				sum(
-- 				if (path.problem like "%mentale%", 1, 0)
-- 			) as mentale
-- 		from 
-- 			patients p 
-- 			inner join 
-- 			(
-- 				select
-- 					p.pati_id,
-- 					s.value as programme
-- 				FROM
-- 					patients as p
-- 					inner join patients_information as pi on p.pati_id = pi.pati_id
-- 					inner join suggestions as s on s.sugg_id = pi.sugg_id
-- 					inner  join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 					inner  join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 					inner join patients_information as pi_stat on p.pati_id = pi_stat.pati_id 
-- 					inner join suggestions as s_stat on s_stat.sugg_id = pi_stat.sugg_id 
-- 				where
-- 					s.path_string like "/patient/suivi/programme/housing-first"
-- 					and pi.deleted_at is null
-- 					and p.deleted_at is null
-- 					and @refdate BETWEEN coalesce(pi.start, @past) and COALESCE(pi.end, @refdate)
					
-- 					and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 					and pi_antenna.deleted_at is null
-- 					and s_antenna.value like @antenna 
-- 					and pi.start <= COALESCE (pi_antenna.end, @refdate)
-- 					and coalesce(pi.end, @refdate) >= coalesce(pi_antenna.start, @past) 

-- 					and s_stat.path_string like "/patient/fiche/statut-du-suivi/%" 
-- 					and s_stat.path_string not like "/patient/fiche/statut-du-suivi/decede" 
-- 					and @refdate between COALESCE(pi_stat.start, @past) and COALESCE (pi_stat.end, @nextyear0101)
-- 					and pi_stat.deleted_at is null
-- 			) hf on hf.pati_id = p.pati_id	
-- 			left join 
-- 			(	
-- 				select 
-- 					pi_path.pati_id ,
-- 					stel.value as problem
-- 				from patients_information pi_path  
-- 						inner join suggestions as s2 on s2.sugg_id = pi_path.sugg_id 
-- 						inner join patients_information_template_element pitel on pitel.pite_id = pi_path.itel_id 
-- 						inner join suggestions stel on stel.sugg_id = pitel.suge_id 
-- 				where 
-- 						(
-- 							stel.path_string like '/patient/fiche/assuetude/declaree%' 
-- 							or s2.path_string like '/patient/medical/patholo%'
-- 						) 
-- 						and pi_path.deleted_at is null 
-- 						and @refdate BETWEEN coalesce(pi_path.start, @past) and COALESCE(pi_path.end, @refdate)
-- 				group by 
-- 						pi_path.pati_id,
-- 						stel.value
-- 			) path on path.pati_id = p.pati_id
-- 		where programme is not null
-- 	group by 
-- 		hash, firstname, lastname
-- 	order by hash
-- ) s;



select 'Tableau 27.C. – Absence de problème de santé mentale des patients en Housing First - liste nominative';
-- select 
-- 			p.hash,
-- 			p.firstname,
-- 			p.lastname,
-- 				sum(
-- 				if (path.problem like "%mentale%", 1, 0)
-- 			) as mentale
-- 		from 
-- 			patients p 
-- 			inner join 
-- 			(
-- 				select
-- 					p.pati_id,
-- 					s.value as programme
-- 				FROM
-- 					patients as p
-- 					inner join patients_information as pi on p.pati_id = pi.pati_id
-- 					inner join suggestions as s on s.sugg_id = pi.sugg_id
-- 					inner  join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 					inner  join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 					inner join patients_information as pi_stat on p.pati_id = pi_stat.pati_id 
-- 					inner join suggestions as s_stat on s_stat.sugg_id = pi_stat.sugg_id 
-- 				where
-- 					s.path_string like "/patient/suivi/programme/housing-first"
-- 					and pi.deleted_at is null
-- 					and p.deleted_at is null
-- 					and @refdate BETWEEN coalesce(pi.start, @past) and COALESCE(pi.end, @refdate)
					
-- 					and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 					and pi_antenna.deleted_at is null
-- 					and s_antenna.value like @antenna 
-- 					and pi.start <= COALESCE (pi_antenna.end, @refdate)
-- 					and coalesce(pi.end, @refdate) >= coalesce(pi_antenna.start, @past) 

-- 					and s_stat.path_string like "/patient/fiche/statut-du-suivi/%" 
-- 					and s_stat.path_string not like "/patient/fiche/statut-du-suivi/decede" 
-- 					and @refdate between COALESCE(pi_stat.start, @past) and COALESCE (pi_stat.end, @nextyear0101)
-- 					and pi_stat.deleted_at is null
-- 			) hf on hf.pati_id = p.pati_id	
-- 			left join 
-- 			(	
-- 				select 
-- 					pi_path.pati_id ,
-- 					stel.value as problem
-- 				from patients_information pi_path  
-- 						inner join suggestions as s2 on s2.sugg_id = pi_path.sugg_id 
-- 						inner join patients_information_template_element pitel on pitel.pite_id = pi_path.itel_id 
-- 						inner join suggestions stel on stel.sugg_id = pitel.suge_id 
-- 				where 
-- 						(
-- 							stel.path_string like '/patient/fiche/assuetude/declaree%' 
-- 							or s2.path_string like '/patient/medical/patholo%'
-- 						) 
-- 						and pi_path.deleted_at is null 
-- 						and @refdate BETWEEN coalesce(pi_path.start, @past) and COALESCE(pi_path.end, @refdate)
-- 				group by 
-- 						pi_path.pati_id,
-- 						stel.value
-- 			) path on path.pati_id = p.pati_id
-- 		where programme is not null
-- 	group by 
-- 		hash, firstname, lastname
-- order by hash;






select 'Tableau 27.D. – Identification des problèmes de santé mentale des patients Housing First';
-- select 
--     path.category,
-- 	path.problem,
-- 	count(p.hash) as nombre
-- from 
-- 	patients p 
-- 	inner join 
-- 	(
-- 		select
-- 			p.pati_id,
-- 			s.value as programme
-- 		FROM
-- 			patients as p
-- 			inner join patients_information as pi on p.pati_id = pi.pati_id
-- 			inner join suggestions as s on s.sugg_id = pi.sugg_id
-- 			inner  join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 			inner  join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 			inner join patients_information as pi_stat on p.pati_id = pi_stat.pati_id 
-- 			inner join suggestions as s_stat on s_stat.sugg_id = pi_stat.sugg_id 
-- 		where
-- 			s.path_string like "/patient/suivi/programme/housing-first"
-- 			and pi.deleted_at is null
-- 			and p.deleted_at is null
-- 			and @refdate BETWEEN coalesce(pi.start, @past) and COALESCE(pi.end, @refdate)
			
-- 			and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 			and pi_antenna.deleted_at is null
-- 			and s_antenna.value like @antenna 
-- 			and pi.start <= COALESCE (pi_antenna.end, @refdate)
-- 			and coalesce(pi.end, @refdate) >= coalesce(pi_antenna.start, @past) 

-- 			and s_stat.path_string like "/patient/fiche/statut-du-suivi/%" 
-- 			and s_stat.path_string not like "/patient/fiche/statut-du-suivi/decede" 
-- 			and @refdate between COALESCE(pi_stat.start, @past) and COALESCE (pi_stat.end, @nextyear0101)
-- 			and pi_stat.deleted_at is null
-- 	) hf on hf.pati_id = p.pati_id	
-- 	left join 
-- 	(	
-- 		select 
-- 			pi_path.pati_id ,
-- 			stel.value as category,
--             s2.value as problem
-- 		from patients_information pi_path  
-- 				inner join suggestions as s2 on s2.sugg_id = pi_path.sugg_id 
-- 				inner join patients_information_template_element pitel on pitel.pite_id = pi_path.itel_id 
-- 				inner join suggestions stel on stel.sugg_id = pitel.suge_id 
-- 			where 
-- 				s2.path_string like '/patient/medical/pathologies/pathologies-mentale%'
-- 				and pi_path.deleted_at is null 
-- 				and @refdate BETWEEN coalesce(pi_path.start, @past) and COALESCE(pi_path.end, @refdate)
-- 			group by 
-- 				pi_path.pati_id,
-- 				stel.value,
--                 s2.value
-- 	) path
-- 	on path.pati_id = p.pati_id
-- group by 
--     path.category,
-- 	path.problem
-- order by 
--     path.category,
-- 	path.problem;



select 'Tableau 27.D. – Identification des problèmes de santé mentale des patients Housing First - liste nominative';

-- select 
--     coalesce(path.category, "--inconnu--") as category,
-- 	coalesce(path.problem, "--inconnu--") as problem,
-- 	p.hash
-- from 
-- 	patients p 
-- 	inner join 
-- 	(
-- 		select
-- 			p.pati_id,
-- 			s.value as programme
-- 		FROM
-- 			patients as p
-- 			inner join patients_information as pi on p.pati_id = pi.pati_id
-- 			inner join suggestions as s on s.sugg_id = pi.sugg_id
-- 			inner  join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 			inner  join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 			inner join patients_information as pi_stat on p.pati_id = pi_stat.pati_id 
-- 			inner join suggestions as s_stat on s_stat.sugg_id = pi_stat.sugg_id 
-- 		where
-- 			s.path_string like "/patient/suivi/programme/housing-first"
-- 			and pi.deleted_at is null
-- 			and p.deleted_at is null
-- 			and @refdate BETWEEN coalesce(pi.start, @past) and COALESCE(pi.end, @refdate)
			
-- 			and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 			and pi_antenna.deleted_at is null
-- 			and s_antenna.value like @antenna 
-- 			and pi.start <= COALESCE (pi_antenna.end, @refdate)
-- 			and coalesce(pi.end, @refdate) >= coalesce(pi_antenna.start, @past) 

-- 			and s_stat.path_string like "/patient/fiche/statut-du-suivi/%" 
-- 			and s_stat.path_string not like "/patient/fiche/statut-du-suivi/decede" 
-- 			and @refdate between COALESCE(pi_stat.start, @past) and COALESCE (pi_stat.end, @nextyear0101)
-- 			and pi_stat.deleted_at is null
-- 	) hf on hf.pati_id = p.pati_id	
-- 	left join 
-- 	(	
-- 		select 
-- 			pi_path.pati_id ,
-- 			stel.value as category,
--             s2.value as problem
-- 		from patients_information pi_path  
-- 				inner join suggestions as s2 on s2.sugg_id = pi_path.sugg_id 
-- 				inner join patients_information_template_element pitel on pitel.pite_id = pi_path.itel_id 
-- 				inner join suggestions stel on stel.sugg_id = pitel.suge_id 
-- 			where 
-- 				s2.path_string like '/patient/medical/pathologies/pathologies-mentale%'
-- 				and pi_path.deleted_at is null 
-- 				and @refdate BETWEEN coalesce(pi_path.start, @past) and COALESCE(pi_path.end, @refdate)
-- 			group by 
-- 				pi_path.pati_id,
-- 				stel.value,
--                 s2.value
-- 	) path
-- 	on path.pati_id = p.pati_id
-- order by 
--     path.category,
-- 	path.problem;



	
select 'Tableau 28 : Identification des assuétudes déclarées';

select 'Tableau 28.A. – Absence d’assuétude déclarée chez les patients en suivi';
-- select 
-- 	sum(if (assuetude = 0, 1, 0)) as 'absence d\'assuetude',
-- 	sum(if (assuetude > 0, 1, 0)) as 'avec assuetude',
-- 	count(assuetude) as 'nombre de patients dans le suivi'
-- from 
-- (
--     select 
-- 		p.hash,
-- 		sum(
-- 			if (path.category like "%mentale%", 1, 0)
-- 		) as assuetude
-- 	from 
-- 		patients p 
-- 	inner join 
-- 	(
-- 		select
-- 			p.pati_id
-- 		FROM
-- 			patients as p
-- 			inner  join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 			inner  join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 			inner join patients_information as pi_stat on p.pati_id = pi_stat.pati_id 
-- 			inner join suggestions as s_stat on s_stat.sugg_id = pi_stat.sugg_id 
-- 		where
-- 			s_antenna.path_string like "/patient/suivi/antenne/%"
-- 			and pi_antenna.deleted_at is null
-- 			and s_antenna.value like @antenna 
-- 			and pi_stat.start <= COALESCE (pi_antenna.end, @refdate)
-- 			and coalesce(pi_stat.end, @refdate) >= coalesce(pi_antenna.start, @past) 

-- 			and s_stat.path_string like "/patient/fiche/statut-du-suivi/en-suivi" 
-- 			and @refdate between COALESCE(pi_stat.start, @past) and COALESCE (pi_stat.end, @nextyear0101)
-- 			and pi_stat.deleted_at is null
-- 	) hf on hf.pati_id = p.pati_id	
-- 	left join 
-- 	(	
-- 		select 
-- 			pi_path.pati_id ,
-- 			stel.value as category,
--             s2.value as problem
-- 		from patients_information pi_path  
-- 				inner join suggestions as s2 on s2.sugg_id = pi_path.sugg_id 
-- 				inner join patients_information_template_element pitel on pitel.pite_id = pi_path.itel_id 
-- 				inner join suggestions stel on stel.sugg_id = pitel.suge_id 
-- 			where 
-- 				s2.path_string like '/patient/medical/pathologies/pathologies-mentale%'
-- 				and pi_path.deleted_at is null 
-- 				and @refdate BETWEEN coalesce(pi_path.start, @past) and COALESCE(pi_path.end, @refdate)
-- 			group by 
-- 				pi_path.pati_id,
-- 				stel.value,
--                 s2.value
-- 	) path
-- 	on path.pati_id = p.pati_id
-- 	group by hash
-- ) s;



select 'Tableau 28.A. – Absence d’assuétude déclarée chez les patients en suivi - liste nominative';

-- select 
-- 	p.hash,
-- 	coalesce(path.problem, '--aucun--') as probleme
-- from 
-- 	patients p 
-- 	inner join 
-- 	(
-- 		select
-- 			p.pati_id
-- 		FROM
-- 			patients as p
-- 			inner  join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 			inner  join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 			inner join patients_information as pi_stat on p.pati_id = pi_stat.pati_id 
-- 			inner join suggestions as s_stat on s_stat.sugg_id = pi_stat.sugg_id 
-- 		where
-- 			s_antenna.path_string like "/patient/suivi/antenne/%"
-- 			and pi_antenna.deleted_at is null
-- 			and s_antenna.value like @antenna 
-- 			and pi_stat.start <= COALESCE (pi_antenna.end, @refdate)
-- 			and coalesce(pi_stat.end, @refdate) >= coalesce(pi_antenna.start, @past) 

-- 			and s_stat.path_string like "/patient/fiche/statut-du-suivi/en-suivi" 
-- 			and @refdate between COALESCE(pi_stat.start, @past) and COALESCE (pi_stat.end, @nextyear0101)
-- 			and pi_stat.deleted_at is null

-- 	) hf on hf.pati_id = p.pati_id	
-- 	left join 
-- 	(	
-- 		select 
-- 			pi_path.pati_id ,
-- 			stel.value as category,
-- 			s2.value as problem
-- 		from patients_information pi_path  
-- 				inner join suggestions as s2 on s2.sugg_id = pi_path.sugg_id 
-- 				inner join patients_information_template_element pitel on pitel.pite_id = pi_path.itel_id 
-- 				inner join suggestions stel on stel.sugg_id = pitel.suge_id 
-- 			where 
-- 				stel.path_string like '/patient/fiche/assuetude/declaree%' 
-- 				and pi_path.deleted_at is null 
-- 				and @refdate BETWEEN coalesce(pi_path.start, @past) and COALESCE(pi_path.end, @refdate)
-- 			group by 
-- 				pi_path.pati_id,
-- 				stel.value,
-- 				s2.value
-- 	) path
-- 	on path.pati_id = p.pati_id
-- order by hash;

select 'Tableau 28.B. – Identification des assuétudes déclarées chez les patients en suivi';

-- select 
-- 	coalesce(path.category, 'Assuétude') as category,
-- 	coalesce(path.problem, 'aucune assuétude') as probleme,
-- 	count(p.hash) as nombre
-- from 
-- 	patients p 
-- 	inner join 
-- 	(
-- 		select
-- 			p.pati_id
-- 		FROM
-- 			patients as p
-- 			inner  join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 			inner  join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 			inner join patients_information as pi_stat on p.pati_id = pi_stat.pati_id 
-- 			inner join suggestions as s_stat on s_stat.sugg_id = pi_stat.sugg_id 
-- 		where
-- 			s_antenna.path_string like "/patient/suivi/antenne/%"
-- 			and pi_antenna.deleted_at is null
-- 			and s_antenna.value like @antenna 
-- 			and pi_stat.start <= COALESCE (pi_antenna.end, @refdate)
-- 			and coalesce(pi_stat.end, @refdate) >= coalesce(pi_antenna.start, @past) 

-- 			and s_stat.path_string like "/patient/fiche/statut-du-suivi/en-suivi" 
-- 			and @refdate between COALESCE(pi_stat.start, @past) and COALESCE (pi_stat.end, @nextyear0101)
-- 			and pi_stat.deleted_at is null
-- 	) suivi on suivi.pati_id = p.pati_id	
-- 	left join 
-- 	(	
-- 		select 
-- 			pi_path.pati_id ,
-- 			stel.value as category,
-- 			s2.value as problem
-- 		from patients_information pi_path  
-- 				inner join suggestions as s2 on s2.sugg_id = pi_path.sugg_id 
-- 				inner join patients_information_template_element pitel on pitel.pite_id = pi_path.itel_id 
-- 				inner join suggestions stel on stel.sugg_id = pitel.suge_id 
-- 			where 
-- 				stel.path_string like '/patient/fiche/assuetude/declaree%' 
-- 				and pi_path.deleted_at is null 
-- 				and @refdate BETWEEN coalesce(pi_path.start, @past) and COALESCE(pi_path.end, @refdate)
-- 			group by 
-- 				pi_path.pati_id,
-- 				stel.value,
-- 				s2.value
-- 	) path
-- 	on path.pati_id = p.pati_id
-- group by 
--     path.category,
-- 	path.problem
-- order by 
--     path.category,
-- 	path.problem;




select 'Tableau 28.B. – Identification des assuétudes déclarées chez les patients en suivi - liste nominative';

-- select 
-- 	coalesce(path.category, 'Assuétude') as category,
-- 	p.hash,
-- 	coalesce(path.problem, 'aucune assuétude') as probleme
-- from 
-- 	patients p 
-- 	inner join 
-- 	(
-- 		select
-- 			p.pati_id
-- 		FROM
-- 			patients as p
-- 			inner  join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 			inner  join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 			inner join patients_information as pi_stat on p.pati_id = pi_stat.pati_id 
-- 			inner join suggestions as s_stat on s_stat.sugg_id = pi_stat.sugg_id 
-- 		where
-- 			s_antenna.path_string like "/patient/suivi/antenne/%"
-- 			and pi_antenna.deleted_at is null
-- 			and s_antenna.value like @antenna 
-- 			and pi_stat.start <= COALESCE (pi_antenna.end, @refdate)
-- 			and coalesce(pi_stat.end, @refdate) >= coalesce(pi_antenna.start, @past) 

-- 			and s_stat.path_string like "/patient/fiche/statut-du-suivi/en-suivi" 
-- 			and @refdate between COALESCE(pi_stat.start, @past) and COALESCE (pi_stat.end, @nextyear0101)
-- 			and pi_stat.deleted_at is null
-- 	) suivi on suivi.pati_id = p.pati_id	
-- 	left join 
-- 	(	
-- 		select 
-- 			pi_path.pati_id ,
-- 			stel.value as category,
-- 			s2.value as problem
-- 		from patients_information pi_path  
-- 				inner join suggestions as s2 on s2.sugg_id = pi_path.sugg_id 
-- 				inner join patients_information_template_element pitel on pitel.pite_id = pi_path.itel_id 
-- 				inner join suggestions stel on stel.sugg_id = pitel.suge_id 
-- 			where 
-- 				stel.path_string like '/patient/fiche/assuetude/declaree%' 
-- 				and pi_path.deleted_at is null 
-- 				and @refdate BETWEEN coalesce(pi_path.start, @past) and COALESCE(pi_path.end, @refdate)
-- 			group by 
-- 				pi_path.pati_id,
-- 				stel.value,
-- 				s2.value
-- 	) path
-- 	on path.pati_id = p.pati_id
-- order by 
--     path.category,
-- 	p.hash;




select 'Tableau 28.C. – Absence d’assuétude déclarée chez les patients Housing First';

-- select 
-- 	sum(if (assuetude = 0, 1, 0)) as 'absence d\'assuetude',
-- 	sum(if (assuetude > 0, 1, 0)) as 'avec assuetude',
-- 	count(assuetude) as 'nombre de patients dans le programme'
-- from 
-- (
--    select 
-- 			p.hash,
-- 			p.firstname,
-- 			p.lastname,
-- 				sum(
-- 				if (path.category like "%déclarée%", 1, 0)
-- 			) as assuetude
-- 		from 
-- 			patients p 
-- 			inner join 
-- 			(
-- 				select
-- 					p.pati_id,
-- 					s.value as programme
-- 				FROM
-- 					patients as p
-- 					inner join patients_information as pi on p.pati_id = pi.pati_id
-- 					inner join suggestions as s on s.sugg_id = pi.sugg_id
-- 					inner  join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 					inner  join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 					inner join patients_information as pi_stat on p.pati_id = pi_stat.pati_id 
-- 					inner join suggestions as s_stat on s_stat.sugg_id = pi_stat.sugg_id 
-- 				where
-- 					s.path_string like "/patient/suivi/programme/housing-first"
-- 					and pi.deleted_at is null
-- 					and p.deleted_at is null
-- 					and @refdate BETWEEN coalesce(pi.start, @past) and COALESCE(pi.end, @refdate)
					
-- 					and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 					and pi_antenna.deleted_at is null
-- 					and s_antenna.value like @antenna 
-- 					and pi.start <= COALESCE (pi_antenna.end, @refdate)
-- 					and coalesce(pi.end, @refdate) >= coalesce(pi_antenna.start, @past) 

-- 					and s_stat.path_string like "/patient/fiche/statut-du-suivi/%" 
-- 					and s_stat.path_string not like "/patient/fiche/statut-du-suivi/decede" 
-- 					and s_stat.path_string not like "/patient/fiche/statut-du-suivi/disparu"
-- 					and @refdate between COALESCE(pi_stat.start, @past) and COALESCE (pi_stat.end, @nextyear0101)
-- 					and pi_stat.deleted_at is null
-- 			) hf on hf.pati_id = p.pati_id	
-- 			left join 
-- 			(	
-- 				select 
-- 					pi_path.pati_id ,
-- 					stel.value as category
-- 				from patients_information pi_path  
-- 						inner join suggestions as s2 on s2.sugg_id = pi_path.sugg_id 
-- 						inner join patients_information_template_element pitel on pitel.pite_id = pi_path.itel_id 
-- 						inner join suggestions stel on stel.sugg_id = pitel.suge_id 
-- 				where 
-- 						(
-- 							stel.path_string like '/patient/fiche/assuetude/declaree%' 
-- 							or s2.path_string like '/patient/medical/patholo%'
-- 						) 
-- 						and pi_path.deleted_at is null 
-- 						and @refdate BETWEEN coalesce(pi_path.start, @past) and COALESCE(pi_path.end, @refdate)
-- 				group by 
-- 						pi_path.pati_id,
-- 						stel.value
-- 			) path on path.pati_id = p.pati_id
-- 		where programme is not null
-- 	group by 
-- 		hash, firstname, lastname
-- 	order by hash
-- ) s;



select 'Tableau 28.C. – Absence d’assuétude déclarée chez les patients Housing First - liste nominative';

-- select 
-- 			p.hash,
-- 			p.firstname,
-- 			p.lastname,
-- 				sum(
-- 				if (path.problem like "%declarée%", 1, 0)
-- 			) as assuetude
-- 		from 
-- 			patients p 
-- 			inner join 
-- 			(
-- 				select
-- 					p.pati_id,
-- 					s.value as programme
-- 				FROM
-- 					patients as p
-- 					inner join patients_information as pi on p.pati_id = pi.pati_id
-- 					inner join suggestions as s on s.sugg_id = pi.sugg_id
-- 					inner  join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 					inner  join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 					inner join patients_information as pi_stat on p.pati_id = pi_stat.pati_id 
-- 					inner join suggestions as s_stat on s_stat.sugg_id = pi_stat.sugg_id 
-- 				where
-- 					s.path_string like "/patient/suivi/programme/housing-first"
-- 					and pi.deleted_at is null
-- 					and p.deleted_at is null
-- 					and @refdate BETWEEN coalesce(pi.start, @past) and COALESCE(pi.end, @refdate)
					
-- 					and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 					and pi_antenna.deleted_at is null
-- 					and s_antenna.value like @antenna 
-- 					and pi.start <= COALESCE (pi_antenna.end, @refdate)
-- 					and coalesce(pi.end, @refdate) >= coalesce(pi_antenna.start, @past) 

-- 					and s_stat.path_string like "/patient/fiche/statut-du-suivi/%" 
-- 					and s_stat.path_string not like "/patient/fiche/statut-du-suivi/decede" 
-- 					and s_stat.path_string not like "/patient/fiche/statut-du-suivi/disparu"
-- 					and @refdate between COALESCE(pi_stat.start, @past) and COALESCE (pi_stat.end, @nextyear0101)
-- 					and pi_stat.deleted_at is null
-- 			) hf on hf.pati_id = p.pati_id	
-- 			left join 
-- 			(	
-- 				select 
-- 					pi_path.pati_id ,
-- 					stel.value as problem
-- 				from patients_information pi_path  
-- 						inner join suggestions as s2 on s2.sugg_id = pi_path.sugg_id 
-- 						inner join patients_information_template_element pitel on pitel.pite_id = pi_path.itel_id 
-- 						inner join suggestions stel on stel.sugg_id = pitel.suge_id 
-- 				where 
-- 						(
-- 							stel.path_string like '/patient/fiche/assuetude/declaree%' 
-- 							or s2.path_string like '/patient/medical/patholo%'
-- 						) 
-- 						and pi_path.deleted_at is null 
-- 						and @refdate BETWEEN coalesce(pi_path.start, @past) and COALESCE(pi_path.end, @refdate)
-- 				group by 
-- 						pi_path.pati_id,
-- 						stel.value
-- 			) path on path.pati_id = p.pati_id
-- 		where programme is not null
-- 	group by 
-- 		hash, firstname, lastname
-- order by hash;







select 'Tableau 28.D. – Identification des assuétudes déclarées chez les patients Housing First';
-- select 
--     path.category,
-- 	path.problem,
-- 	count(p.hash) as nombre
-- from 
-- 	patients p 
-- 	inner join 
-- 	(
-- 		select
-- 			p.pati_id,
-- 			s.value as programme
-- 		FROM
-- 			patients as p
-- 			inner join patients_information as pi on p.pati_id = pi.pati_id
-- 			inner join suggestions as s on s.sugg_id = pi.sugg_id
-- 			inner  join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 			inner  join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 			inner join patients_information as pi_stat on p.pati_id = pi_stat.pati_id 
-- 			inner join suggestions as s_stat on s_stat.sugg_id = pi_stat.sugg_id 
-- 		where
-- 			s.path_string like "/patient/suivi/programme/housing-first"
-- 			and pi.deleted_at is null
-- 			and p.deleted_at is null
-- 			and @refdate BETWEEN coalesce(pi.start, @past) and COALESCE(pi.end, @refdate)
			
-- 			and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 			and pi_antenna.deleted_at is null
-- 			and s_antenna.value like @antenna 
-- 			and pi.start <= COALESCE (pi_antenna.end, @refdate)
-- 			and coalesce(pi.end, @refdate) >= coalesce(pi_antenna.start, @past) 

-- 			and s_stat.path_string like "/patient/fiche/statut-du-suivi/%" 
-- 			and s_stat.path_string not like "/patient/fiche/statut-du-suivi/decede" 
-- 			and @refdate between COALESCE(pi_stat.start, @past) and COALESCE (pi_stat.end, @nextyear0101)
-- 			and pi_stat.deleted_at is null
-- 	) hf on hf.pati_id = p.pati_id	
-- 	left join 
-- 	(	
-- 		select 
-- 			pi_path.pati_id ,
-- 			stel.value as category,
--             s2.value as problem
-- 		from patients_information pi_path  
-- 				inner join suggestions as s2 on s2.sugg_id = pi_path.sugg_id 
-- 				inner join patients_information_template_element pitel on pitel.pite_id = pi_path.itel_id 
-- 				inner join suggestions stel on stel.sugg_id = pitel.suge_id 
-- 			where 
-- 				stel.path_string like '/patient/fiche/assuetude/declaree%' 
-- 				and pi_path.deleted_at is null 
-- 				and @refdate BETWEEN coalesce(pi_path.start, @past) and COALESCE(pi_path.end, @refdate)
-- 			group by 
-- 				pi_path.pati_id,
-- 				stel.value,
--                 s2.value
-- 	) path
-- 	on path.pati_id = p.pati_id
-- group by 
--     path.category,
-- 	path.problem
-- order by 
--     path.category,
-- 	path.problem;



select 'Tableau 28.D. – Identification des assuétudes déclarées chez les patients Housing First - liste nominative';

-- select 
--     coalesce(path.category, "--inconnu--") as category,
-- 	coalesce(path.problem, "--inconnu--") as problem,
-- 	p.hash
-- from 
-- 	patients p 
-- 	inner join 
-- 	(
-- 		select
-- 			p.pati_id,
-- 			s.value as programme
-- 		FROM
-- 			patients as p
-- 			inner join patients_information as pi on p.pati_id = pi.pati_id
-- 			inner join suggestions as s on s.sugg_id = pi.sugg_id
-- 			inner  join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 			inner  join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 			inner join patients_information as pi_stat on p.pati_id = pi_stat.pati_id 
-- 			inner join suggestions as s_stat on s_stat.sugg_id = pi_stat.sugg_id 
-- 		where
-- 			s.path_string like "/patient/suivi/programme/housing-first"
-- 			and pi.deleted_at is null
-- 			and p.deleted_at is null
-- 			and @refdate BETWEEN coalesce(pi.start, @past) and COALESCE(pi.end, @refdate)
			
-- 			and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 			and pi_antenna.deleted_at is null
-- 			and s_antenna.value like @antenna 
-- 			and pi.start <= COALESCE (pi_antenna.end, @refdate)
-- 			and coalesce(pi.end, @refdate) >= coalesce(pi_antenna.start, @past) 

-- 			and s_stat.path_string like "/patient/fiche/statut-du-suivi/%" 
-- 			and s_stat.path_string not like "/patient/fiche/statut-du-suivi/decede" 
-- 			and @refdate between COALESCE(pi_stat.start, @past) and COALESCE (pi_stat.end, @nextyear0101)
-- 			and pi_stat.deleted_at is null
-- 	) hf on hf.pati_id = p.pati_id	
-- 	left join 
-- 	(	
-- 		select 
-- 			pi_path.pati_id ,
-- 			if(stel.value like "%Déclarée%", "Assuétude", stel.value) as category,
--             s2.value as problem
-- 		from patients_information pi_path  
-- 				inner join suggestions as s2 on s2.sugg_id = pi_path.sugg_id 
-- 				inner join patients_information_template_element pitel on pitel.pite_id = pi_path.itel_id 
-- 				inner join suggestions stel on stel.sugg_id = pitel.suge_id 
-- 			where 
-- 				stel.path_string like '/patient/fiche/assuetude/declaree%' 
-- 				and pi_path.deleted_at is null 
-- 				and @refdate BETWEEN coalesce(pi_path.start, @past) and COALESCE(pi_path.end, @refdate)
-- 			group by 
-- 				pi_path.pati_id,
-- 				stel.value,
--                 s2.value
-- 	) path
-- 	on path.pati_id = p.pati_id
-- order by 
--     path.category,
-- 	path.problem;








select 'TABLEAU 29 : PERSONNES DECEDEES';
select 'TABLEAU 29.A : PERSONNES DECEDEES selon le suivi';

-- select
--     coalesce(laststate.value, "--inconnue--") as dernierstatut,
--     count(dcd.pati_id) as nombre
-- from
--     (
--         SELECT
--             p.pati_id,
--             p.hash,
--             p.firstname,
--             p.lastname,
--             pi.start,
--             pi.paif_id
-- 		FROM
--             patients as p
--             inner join patients_information as pi on p.pati_id = pi.pati_id
--             inner join suggestions as s on s.sugg_id = pi.sugg_id
-- 			left join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 			left join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
--         where
--             s.path_string like "/patient/fiche/statut-du-suivi/decede"
--             and pi.start is not null
--             and pi.start like @refyearwc
--             and pi.end is null
--             and pi.deleted_at is null
--             and p.deleted_at is null
-- 			and @refdate between coalesce(pi_antenna.start, @past) and COALESCE (pi_antenna.end, @refdate)
-- 			and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 			and s_antenna.value like @antenna
--     ) dcd
--     left join 
--     (
-- 		select
-- 			p.pati_id, pi_laststate.start, pi_laststate.end, s_laststate.value
--         from 
-- 			patients as p
-- 			left join patients_information as pi_laststate on p.pati_id = pi_laststate.pati_id
-- 			left join suggestions as s_laststate on s_laststate.sugg_id = pi_laststate.sugg_id
-- 		where
-- 			s_laststate.path_string like "/patient/fiche/statut-du-suivi/%" 
--             and s_laststate.path_string not like "/patient/fiche/statut-du-suivi/decede" 
-- 			and pi_laststate.start is not null
-- 			and pi_laststate.deleted_at is null
-- 			and p.deleted_at is null
-- 	) laststate on laststate.pati_id = dcd.pati_id
-- where 
-- 	laststate.value is null or 
--     (to_days(dcd.start) - to_days(coalesce(laststate.end, dcd.start))) < 7
-- group by dernierstatut;




select 'TABLEAU 29.A : PERSONNES DECEDEES selon le suivi - liste nominative avec statut précédent (n\'inclut pas les personnes uniquement encodées comme décédées)';

-- select
--     dcd.pati_id,
--     dcd.hash as h,
-- 	dcd.firstname,
--     dcd.lastname,
--     dcd.start as dcdstart,
--     coalesce(laststate.value, "--inconnue--") as equipe,
--     laststate.start as laststate_start,
--     coalesce(laststate.end, dcd.start) as laststate_end,
--     ( to_days(dcd.start) - to_days(coalesce(laststate.end, dcd.start) ) ) 
-- from
--     (
--         SELECT
--             p.pati_id,
--             p.hash,
--             p.firstname,
--             p.lastname,
--             pi.start,
--             pi.paif_id
-- 		FROM
--             patients as p
--             inner join patients_information as pi on p.pati_id = pi.pati_id
--             inner join suggestions as s on s.sugg_id = pi.sugg_id
-- 			left join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 			left join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
--         where
--             s.path_string like "/patient/fiche/statut-du-suivi/decede"
--             and pi.start is not null
--             and pi.start like @refyearwc
--             and pi.end is null
--             and pi.deleted_at is null
--             and p.deleted_at is null
-- 			and @refdate between coalesce(pi_antenna.start, @past) and COALESCE (pi_antenna.end, @refdate)
-- 			and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 			and s_antenna.value like @antenna
--     ) dcd
--     left join 
--     (
-- 		select
-- 			p.pati_id, pi_laststate.start, pi_laststate.end, s_laststate.value
--         from 
-- 			patients as p
-- 			left join patients_information as pi_laststate on p.pati_id = pi_laststate.pati_id
-- 			left join suggestions as s_laststate on s_laststate.sugg_id = pi_laststate.sugg_id
-- 		where
-- 			s_laststate.path_string like "/patient/fiche/statut-du-suivi/%" 
--             and s_laststate.path_string not like "/patient/fiche/statut-du-suivi/decede" 
-- 			and pi_laststate.start is not null
-- 			and pi_laststate.deleted_at is null
-- 			and p.deleted_at is null
-- 	) laststate on laststate.pati_id = dcd.pati_id
-- where 
-- 	laststate.value is null or 
--     (to_days(dcd.start) - to_days(coalesce(laststate.end, dcd.start))) < 7;


select 'TABLEAU 29.B : PERSONNES DECEDEES selon l\'équipe (inclut les personnes uniquement encodées comme décédées)';


-- select
--     coalesce(team.value, "--inconnue--") as equipe,
--     count(dcd.pati_id) as nombre
-- from
--     (
--         SELECT
--             p.pati_id,
--             p.hash,
--             p.firstname,
--             p.lastname,
--             pi.start,
--             pi.paif_id
-- 		FROM
--             patients as p
--             inner join patients_information as pi on p.pati_id = pi.pati_id
--             inner join suggestions as s on s.sugg_id = pi.sugg_id
-- 			left join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 			left join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
--         where
--             s.path_string like "/patient/fiche/statut-du-suivi/decede"
--             and pi.start is not null
--             and pi.start like @refyearwc
--             and pi.end is null
--             and pi.deleted_at is null
--             and p.deleted_at is null
-- 			and @refdate between coalesce(pi_antenna.start, @past) and COALESCE (pi_antenna.end, @refdate)
-- 			and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 			and s_antenna.value like @antenna
--     ) dcd
--     left join 
--     (
-- 		select
-- 			p.pati_id, pi_team.start, pi_team.end, s_team.value
--         from 
-- 			patients as p
-- 			left join patients_information as pi_team on p.pati_id = pi_team.pati_id
-- 			left join suggestions as s_team on s_team.sugg_id = pi_team.sugg_id
-- 		where
-- 			s_team.path_string like "/patient/suivi/equipe%" 
-- 			and pi_team.start is not null
-- 			and pi_team.deleted_at is null
-- 			and p.deleted_at is null
-- 	) team on team.pati_id = dcd.pati_id
-- where 
-- 	team.value is null or 
--     (to_days(dcd.start) - to_days(coalesce(team.end, dcd.start))) < 7
-- group by equipe;




select 'TABLEAU 29.B : PERSONNES DECEDEES selon l\'equipe - liste nominative avec statut précédent (inclut les personnes uniquement encodées comme décédées, n\'inclut pas les personnes sans equipe)';

-- select
--     dcd.pati_id,
--     dcd.hash as h,
-- 	dcd.firstname,
--     dcd.lastname,
--     dcd.start as dcdstart,
--     coalesce(team.value, "--inconnue--") as equipe,
--     team.start as team_start,
--     coalesce(team.end, dcd.start) as team_end,
--     ( to_days(dcd.start) - to_days(coalesce(team.end, dcd.start) ) ) 
-- from
--     (
--         SELECT
--             p.pati_id,
--             p.hash,
--             p.firstname,
--             p.lastname,
--             pi.start,
--             pi.paif_id
-- 		FROM
--             patients as p
--             inner join patients_information as pi on p.pati_id = pi.pati_id
--             inner join suggestions as s on s.sugg_id = pi.sugg_id
-- 			left join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 			left join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
--         where
--             s.path_string like "/patient/fiche/statut-du-suivi/decede"
--             and pi.start is not null
--             and pi.start like @refyearwc
--             and pi.end is null
--             and pi.deleted_at is null
--             and p.deleted_at is null
-- 			and @refdate between coalesce(pi_antenna.start, @past) and COALESCE (pi_antenna.end, @refdate)
-- 			and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 			and s_antenna.value like @antenna
--     ) dcd
--     left join 
--     (
-- 		select
-- 			p.pati_id, pi_team.start, pi_team.end, s_team.value
--         from 
-- 			patients as p
-- 			left join patients_information as pi_team on p.pati_id = pi_team.pati_id
-- 			left join suggestions as s_team on s_team.sugg_id = pi_team.sugg_id
-- 		where
-- 			s_team.path_string like "/patient/suivi/equipe%" 
-- 			and pi_team.start is not null
-- 			and pi_team.deleted_at is null
-- 			and p.deleted_at is null
-- 	) team on team.pati_id = dcd.pati_id
-- where 
-- 	team.value is null or 
--     (to_days(dcd.start) - to_days(coalesce(team.end, dcd.start))) < 7;




select 'TABLEAU 29.C : PERSONNES DECEDEES selon le programme de logement';




-- select
--     coalesce(programme.value, "--inconnue--") as progr,
--     count(dcd.pati_id) as nombre
-- from
--     (
--         SELECT
--             p.pati_id,
--             p.hash,
--             p.firstname,
--             p.lastname,
--             pi.start,
--             pi.paif_id
-- 		FROM
--             patients as p
--             inner join patients_information as pi on p.pati_id = pi.pati_id
--             inner join suggestions as s on s.sugg_id = pi.sugg_id
-- 			left join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 			left join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
--         where
--             s.path_string like "/patient/fiche/statut-du-suivi/decede"
--             and pi.start is not null
--             and pi.start like @refyearwc
--             and pi.end is null
--             and pi.deleted_at is null
--             and p.deleted_at is null
-- 			and @refdate between coalesce(pi_antenna.start, @past) and COALESCE (pi_antenna.end, @refdate)
-- 			and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 			and s_antenna.value like @antenna
--     ) dcd
--     left join 
--     (
-- 		select
-- 			p.pati_id, pi_programme.start, pi_programme.end, s_programme.value
--         from 
-- 			patients as p
-- 			left join patients_information as pi_programme on p.pati_id = pi_programme.pati_id
-- 			left join suggestions as s_programme on s_programme.sugg_id = pi_programme.sugg_id
-- 		where
-- 			s_programme.path_string like "/patient/suivi/programme%" 
-- 			and pi_programme.start is not null
-- 			and pi_programme.deleted_at is null
-- 			and p.deleted_at is null
-- 	) programme on programme.pati_id = dcd.pati_id
-- where 
-- 	programme.value is null or 
--     (to_days(dcd.start) - to_days(coalesce(programme.end, dcd.start))) < 7
-- group by progr;


select 'TABLEAU 29.C : PERSONNES DECEDEES selon le programme de logement - liste nominative ';

-- select
--     dcd.pati_id,
--     dcd.hash as h,
-- 	dcd.firstname,
--     dcd.lastname,
--     dcd.start as dcdstart,
--     coalesce(programme.value, "--inconnue--") as equipe,
--     programme.start as programme_start,
--     coalesce(programme.end, dcd.start) as programme_end,
--     ( to_days(dcd.start) - to_days(coalesce(programme.end, dcd.start) ) ) 
-- from
--     (
--         SELECT
--             p.pati_id,
--             p.hash,
--             p.firstname,
--             p.lastname,
--             pi.start,
--             pi.paif_id
-- 		FROM
--             patients as p
--             inner join patients_information as pi on p.pati_id = pi.pati_id
--             inner join suggestions as s on s.sugg_id = pi.sugg_id
-- 			left join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 			left join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
--         where
--             s.path_string like "/patient/fiche/statut-du-suivi/decede"
--             and pi.start is not null
--             and pi.start like @refyearwc
--             and pi.end is null
--             and pi.deleted_at is null
--             and p.deleted_at is null
-- 			and @refdate between coalesce(pi_antenna.start, @past) and COALESCE (pi_antenna.end, @refdate)
-- 			and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 			and s_antenna.value like @antenna
--     ) dcd
--     left join 
--     (
-- 		select
-- 			p.pati_id, pi_programme.start, pi_programme.end, s_programme.value
--         from 
-- 			patients as p
-- 			left join patients_information as pi_programme on p.pati_id = pi_programme.pati_id
-- 			left join suggestions as s_programme on s_programme.sugg_id = pi_programme.sugg_id
-- 		where
-- 			s_programme.path_string like "/patient/suivi/programme%" 
-- 			and pi_programme.start is not null
-- 			and pi_programme.deleted_at is null
-- 			and p.deleted_at is null
-- 	) programme on programme.pati_id = dcd.pati_id
-- where 
-- 	programme.value is null or 
--     (to_days(dcd.start) - to_days(coalesce(programme.end, dcd.start))) < 7;




# TABLEAU 30 : NOMBRE D’ANNEES EN RUE AVANT LE LOGEMENT


select 'TABLEAU 31 : COLLABORATION AVEC D’AUTRES ASSOCIATIONS';

-- select
--     travaillepour,
--     sum(agents),
--     sum(appelsentrants_contact) as appelsentrants,
--     sum(appelssortants_contact) as appelssortants,
--     sum(reunions_contact) as reunions,
--     sum(total_activites_contact) as total_activites
-- from
-- (
--     select 
-- 		travaillepour,
--         nom,
--         count(distinct agent_id) as agents,
-- 		sum( appelentrant_contact ) as appelsentrants_contact,
-- 		sum( appelsortant_contact ) as appelssortants_contact,
-- 		sum( reunion_contact ) as reunions_contact,
-- 		count(activity_contact) as total_activites_contact
-- 	from
--     (
--         SELECT
--             if (contacts.orga_id is null,
-- 					concat(
-- 						trim(
-- 							COALESCE(contacts.firstname, "")
-- 						),
-- 						if ( trim(COALESCE(contacts.firstname, "")) = "", "", " "),
-- 						trim(
-- 							COALESCE(contacts.lastname, "")
-- 						)
-- 					),
-- 					concat(
-- 						trim(
-- 							COALESCE(orga.firstname, "")
-- 						),
-- 						if ( trim(COALESCE(orga.firstname, "")) = "", "", " "),
-- 						trim(
-- 							COALESCE(orga.lastname, "")
-- 						)
-- 					)
--             ) as travaillepour,
--             case contacts.type when 1 then 'Personne morale' when 2 then 'Personne physique' end as activite,
--             concat(
--                 trim(
--                     COALESCE(contacts.firstname, "")
--                 ),
--                 if ( trim(COALESCE(contacts.firstname, "")) = "", "", " "),
--                 trim(
--                     COALESCE(contacts.lastname, "")
--                 )
--             ) as nom,
--             contacts.cont_id as agent_id,
-- 			if (
-- 				followup_reports.activity_type = 4,
-- 				1, 0
-- 			) as appelentrant_contact,
-- 			if (
-- 				followup_reports.activity_type = 2,
-- 				1, 0
--             ) as appelsortant_contact,
-- 			if (
-- 				followup_reports.activity_type = 3,
-- 				1, 0
--             ) as reunion_contact,
--             followup_reports.fore_id as activity_contact
--         FROM
--             patients p
--             inner join followup_reports on followup_reports.pati_id = p.pati_id
--             inner join followup_report_contact on followup_reports.fore_id = followup_report_contact.fore_id
--             inner join contacts on followup_report_contact.cont_id = contacts.cont_id
--             left join contacts orga on contacts.orga_id = orga.cont_id
-- 			left join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 			left join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
--         where
--             p.deleted_at is null
--             and followup_reports.deleted_at is null
--             and followup_reports.activity_type in (2, 3, 4)
--             and followup_reports.report_date like @refyearwc
					
-- 			and @refdate between coalesce(pi_antenna.start, @past) and COALESCE (pi_antenna.end, @refdate)
-- 			and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 			and s_antenna.value like @antenna
--     ) r
--     group by travaillepour, nom
-- ) q
-- group by
--     travaillepour
-- order by
--     total_activites desc;


select 'TABLEAU 32 : NOMBRE DE PERSONNES DU POST-SUIVI VERS LE SUIVI';
select 'Tableau 32.A. - Nombre de personnes du post-suivi ayant fait une rechute vers le suivi';


-- select 
-- 	count(distinct q.pati_id) as 'nombre de patient ayant rechuté vers le suivi' 
-- from 
-- 	(
-- 		SELECT 
-- 			p.pati_id, 
-- 			p.firstname, 
-- 			p.lastname, 
-- 			p.hash, 
-- 			pi.start, 
-- 			pi.end, 
--         	pi.paif_id ,
-- 			s.value 
-- 		FROM 
-- 			patients as p 
-- 			inner join patients_information as pi on p.pati_id = pi.pati_id 
-- 			inner join suggestions as s on s.sugg_id = pi.sugg_id 
-- 			left join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 			left join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 		where 
-- 			s.path_string like "/patient/fiche/statut-du-suivi/post-suivi" 
-- 			and pi.start is not null 
-- 			and pi.start < @nextyear0101 
-- 			and coalesce(pi.end, @refdate) >= concat(@refyear, "-01-01") 
-- 			and pi.deleted_at is null 
-- 			and p.deleted_at is null 

-- 			and @refdate between coalesce(pi_antenna.start, @past) and COALESCE (pi_antenna.end, @refdate)
-- 			and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 			and s_antenna.value like @antenna
			
-- 		order by 
-- 			s.value, 
-- 			p.firstname, 
-- 			p.lastname, 
-- 			pi.start
-- 	) q 
-- 	inner join patients as p2 on p2.pati_id = q.pati_id 
-- 	inner join patients_information as pi2 on q.pati_id = pi2.pati_id 
-- 	inner join suggestions as s2 on s2.sugg_id = pi2.sugg_id 
-- where 
-- 	s2.path_string like "/patient/fiche/statut-du-suivi/en-suivi%" 
-- 	and pi2.deleted_at is null 
-- 	and p2.deleted_at is null 
--     and ABS(to_days(pi2.start) - to_days(q.end)) < 2
--     and q.paif_id != pi2.paif_id;


select 'Tableau 32.A. - Nombre de personnes du post-suivi ayant fait une rechute vers le suivi - liste nominative';

-- select 
-- 	q.firstname, 
-- 	q.lastname, 
-- 	q.hash, 
-- 	q.start, 
-- 	q.end,
-- 	s2.value as suivirechute
-- from 
-- 	(
-- 		SELECT 
-- 			p.pati_id, 
-- 			p.firstname, 
-- 			p.lastname, 
-- 			p.hash, 
-- 			pi.start, 
-- 			pi.end, 
--         	pi.paif_id ,
-- 			s.value 
-- 		FROM 
-- 			patients as p 
-- 			inner join patients_information as pi on p.pati_id = pi.pati_id 
-- 			inner join suggestions as s on s.sugg_id = pi.sugg_id 
-- 			left join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 			left join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 		where 
-- 			s.path_string like "/patient/fiche/statut-du-suivi/post-suivi" 
-- 			and pi.start is not null 
-- 			and pi.start < @nextyear0101 
-- 			and coalesce(pi.end, @refdate) >= concat(@refyear, "-01-01") 
-- 			and pi.deleted_at is null 
-- 			and p.deleted_at is null 

-- 			and @refdate between coalesce(pi_antenna.start, @past) and COALESCE (pi_antenna.end, @refdate)
-- 			and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 			and s_antenna.value like @antenna
			
-- 		order by 
-- 			s.value, 
-- 			p.firstname, 
-- 			p.lastname, 
-- 			pi.start
-- 	) q 
-- 	inner join patients as p2 on p2.pati_id = q.pati_id 
-- 	inner join patients_information as pi2 on q.pati_id = pi2.pati_id 
-- 	inner join suggestions as s2 on s2.sugg_id = pi2.sugg_id 
-- where 
-- 	s2.path_string like "/patient/fiche/statut-du-suivi/en-suivi%" 
-- 	and pi2.deleted_at is null 
-- 	and p2.deleted_at is null 
--     and ABS(to_days(pi2.start) - to_days(q.end)) < 2
--     and q.paif_id != pi2.paif_id;



select 'Tableau 32.A. - Nombre de personnes du post-suivi ayant fait une rechute vers un autre statut - liste nominative';

-- select 
-- 	q.firstname, 
-- 	q.lastname, 
-- 	q.hash, 
-- 	q.start, 
-- 	q.end,
-- 	s2.value as suivirechute
-- from 
-- 	(
-- 		SELECT 
-- 			p.pati_id, 
-- 			p.firstname, 
-- 			p.lastname, 
-- 			p.hash, 
-- 			pi.start, 
-- 			pi.end, 
--         	pi.paif_id ,
-- 			s.value 
-- 		FROM 
-- 			patients as p 
-- 			inner join patients_information as pi on p.pati_id = pi.pati_id 
-- 			inner join suggestions as s on s.sugg_id = pi.sugg_id 
-- 			left join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 			left join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 		where 
-- 			s.path_string like "/patient/fiche/statut-du-suivi/post-suivi" 
-- 			and pi.start is not null 
-- 			and pi.start < @nextyear0101 
-- 			and coalesce(pi.end, @refdate) >= concat(@refyear, "-01-01") 
-- 			and pi.deleted_at is null 
-- 			and p.deleted_at is null 

-- 			and @refdate between coalesce(pi_antenna.start, @past) and COALESCE (pi_antenna.end, @refdate)
-- 			and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 			and s_antenna.value like @antenna
			
-- 		order by 
-- 			s.value, 
-- 			p.firstname, 
-- 			p.lastname, 
-- 			pi.start
-- 	) q 
-- 	inner join patients as p2 on p2.pati_id = q.pati_id 
-- 	inner join patients_information as pi2 on q.pati_id = pi2.pati_id 
-- 	inner join suggestions as s2 on s2.sugg_id = pi2.sugg_id 
-- where 
-- 	s2.path_string like "/patient/fiche/statut-du-suivi/%" 
-- 	and pi2.deleted_at is null 
-- 	and p2.deleted_at is null 
--     and ABS(to_days(pi2.start) - to_days(q.end)) < 2
--     and q.paif_id != pi2.paif_id;




select 'Tableau 32.B. - Nombre de patient par nombre de rechutes vers le suivi';
-- select 
-- 	rechutes as 'nombre de rechutes',
--     count(pati_id) as 'nombre de patients'
-- from 
-- (
-- 	select 
-- 		q.pati_id ,
-- 		count(pi2.start) as rechutes
-- 	from 
-- 		(
-- 			SELECT 
-- 				p.pati_id, 
-- 				p.firstname, 
-- 				p.lastname, 
-- 				p.hash, 
-- 				pi.start, 
-- 				pi.end, 
-- 				pi.paif_id ,
-- 				s.value 
-- 			FROM 
-- 				patients as p 
-- 				inner join patients_information as pi on p.pati_id = pi.pati_id 
-- 				inner join suggestions as s on s.sugg_id = pi.sugg_id 
-- 				left join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 				left join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 			where 
-- 				s.path_string like "/patient/fiche/statut-du-suivi/post-suivi" 
-- 				and pi.start is not null 
-- 				and pi.start < @nextyear0101 
-- 				and coalesce(pi.end, @refdate) >= concat(@refyear, "-01-01") 
-- 				and pi.deleted_at is null 
-- 				and p.deleted_at is null 

-- 				and @refdate between coalesce(pi_antenna.start, @past) and COALESCE (pi_antenna.end, @refdate)
-- 				and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 				and s_antenna.value like @antenna
				
-- 			order by 
-- 				s.value, 
-- 				p.firstname, 
-- 				p.lastname, 
-- 				pi.start
-- 		) q 
-- 		inner join patients as p2 on p2.pati_id = q.pati_id 
-- 		inner join patients_information as pi2 on q.pati_id = pi2.pati_id 
-- 		inner join suggestions as s2 on s2.sugg_id = pi2.sugg_id 
-- 	where 
-- 		s2.path_string like "/patient/fiche/statut-du-suivi/en-suivi%" 
-- 		and pi2.deleted_at is null 
-- 		and p2.deleted_at is null 
-- 		and ABS(to_days(pi2.start) - to_days(q.end)) < 2
-- 		and q.paif_id != pi2.paif_id
-- 	group by 
-- 		q.pati_id 
-- ) r
-- group by rechutes;



select 'Tableau 32.C. - Nombre de personnes ayant rechuté en rue';

-- select 
--     count(hash) as 'nombre de rechutes en rue'
-- from 
-- (
-- 	select 
--     q.hash 
-- 	from 
-- 		(
-- 			SELECT 
-- 				p.pati_id, 
-- 				p.firstname, 
-- 				p.lastname, 
-- 				p.hash, 
-- 				pi.start, 
-- 				pi.paif_id ,
--                 pi_team.start as startofteamrue,
-- 				s.value as exstatus
-- 			FROM 
-- 				patients as p 
-- 				inner join patients_information as pi on p.pati_id = pi.pati_id 
-- 				inner join suggestions as s on s.sugg_id = pi.sugg_id 
-- 				inner join patients_information as pi_team on p.pati_id = pi_team.pati_id 
-- 				inner join suggestions as s_team on s_team.sugg_id = pi_team.sugg_id 
-- 				left join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 				left join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 			where
-- 				s_team.path_string like '/patient/suivi/equipes/equipe-rue' 
-- 				and pi_team.deleted_at is null 
-- 				and pi_team.start is not null 
-- 				and pi_team.start like @refyearwc

-- 				and (s.path_string like "/patient/fiche/statut-du-suivi/post-suivi" or s.path_string like "/patient/fiche/statut-du-suivi/en-suivi")
-- 				and pi.start is not null 
-- 				and pi.start < @nextyear0101 
-- 				and coalesce(pi.end, @refdate) >= concat(@refyear, "-01-01") 
-- 				and pi.deleted_at is null 
-- 				and p.deleted_at is null 

-- 				and @refdate between coalesce(pi_antenna.start, @past) and COALESCE (pi_antenna.end, @refdate)
-- 				and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 				and s_antenna.value like @antenna
				
-- 			order by 
-- 				s.value, 
-- 				p.firstname, 
-- 				p.lastname, 
-- 				pi.start
-- 		) q 
-- 		inner join patients as p_teamlog on p_teamlog.pati_id = q.pati_id 
-- 		inner join patients_information as pi_teamlog on q.pati_id = pi_teamlog.pati_id 
-- 		inner join suggestions as s_teamlog on s_teamlog.sugg_id = pi_teamlog.sugg_id 
-- 	where 
-- 		s_teamlog.path_string like "/patient/suivi/equipes/equipe-log%" 
-- 		and pi_teamlog.deleted_at is null 
-- 		and pi_teamlog.deleted_at is null 
-- 		and ABS(to_days(pi_teamlog.end) - to_days(q.startofteamrue)) < 2
-- 		and q.paif_id != pi_teamlog.paif_id

-- 	group by q.hash
-- ) r;



select 'Tableau 32.C. - Nombre de personnes ayant rechuté en rue - liste nominative';


	-- select 
    -- q.hash, 
    -- q.firstname,
    -- q.lastname,
    -- pi_teamlog.end as 'fin suivi/postsuivi par team logement',
    -- startofteamrue as 'debut suivi/postsuivi par team rue',
    -- q.exstatus as 'statut de suivi'
    
	-- from 
	-- 	(
	-- 		SELECT 
	-- 			p.pati_id, 
	-- 			p.firstname, 
	-- 			p.lastname, 
	-- 			p.hash, 
	-- 			pi.start, 
	-- 			pi.paif_id ,
    --             pi_team.start as startofteamrue,
	-- 			s.value as exstatus
	-- 		FROM 
	-- 			patients as p 
	-- 			inner join patients_information as pi on p.pati_id = pi.pati_id 
	-- 			inner join suggestions as s on s.sugg_id = pi.sugg_id 
	-- 			inner join patients_information as pi_team on p.pati_id = pi_team.pati_id 
	-- 			inner join suggestions as s_team on s_team.sugg_id = pi_team.sugg_id 
	-- 			left join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
	-- 			left join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
	-- 		where
	-- 			s_team.path_string like '/patient/suivi/equipes/equipe-rue' 
	-- 			and pi_team.deleted_at is null 
	-- 			and pi_team.start is not null 
	-- 			and pi_team.start like @refyearwc

	-- 			and (s.path_string like "/patient/fiche/statut-du-suivi/post-suivi" or s.path_string like "/patient/fiche/statut-du-suivi/en-suivi")
	-- 			and pi.start is not null 
	-- 			and pi.start < @nextyear0101 
	-- 			and coalesce(pi.end, @refdate) >= concat(@refyear, "-01-01") 
	-- 			and pi.deleted_at is null 
	-- 			and p.deleted_at is null 

	-- 			and @refdate between coalesce(pi_antenna.start, @past) and COALESCE (pi_antenna.end, @refdate)
	-- 			and s_antenna.path_string like "/patient/suivi/antenne/%"
	-- 			and s_antenna.value like @antenna
				
	-- 		order by 
	-- 			s.value, 
	-- 			p.firstname, 
	-- 			p.lastname, 
	-- 			pi.start
	-- 	) q 
	-- 	inner join patients as p_teamlog on p_teamlog.pati_id = q.pati_id 
	-- 	inner join patients_information as pi_teamlog on q.pati_id = pi_teamlog.pati_id 
	-- 	inner join suggestions as s_teamlog on s_teamlog.sugg_id = pi_teamlog.sugg_id 
	-- where 
	-- 	s_teamlog.path_string like "/patient/suivi/equipes/equipe-log%" 
	-- 	and pi_teamlog.deleted_at is null 
	-- 	and pi_teamlog.deleted_at is null 
	-- 	and ABS(to_days(pi_teamlog.end) - to_days(q.startofteamrue)) < 2
	-- 	and q.paif_id != pi_teamlog.paif_id;


select 'TABLEAU 33 : DUREE MOYENNE DU SUIVI';
select 'Tableau 33.A. - Durée moyenne du pré-suivi, du suivi et du post-suivi, pour ceux qui ont quitté ces catégories';

select 'Tableau 33.A.1 - Durée moyenne du post-suivi, pour ceux qui ont quitté ces catégories';

-- select 
--     REPLACE(CAST(format(
--         avg(r.duration),
--         2
--     )  AS CHAR), '.', ',')  as moyenne,
--     REPLACE(CAST(format(
--         STDDEV(r.duration),
--         2
--     ) AS CHAR), '.', ',') as ecart_type,
--     REPLACE(CAST(format(
--         min(r.duration),
--         2
--     ) AS CHAR), '.', ',')  as minimum,
--     REPLACE(CAST(format(
--         max(r.duration),
--         2
--     ) AS CHAR), '.', ',')  as maximum,
--     count(r.duration) as taille_echantillon
-- from 
-- 	(
-- 		select 
-- 			sum(
-- 				to_days(pi2.end) - to_days(pi2.start)
-- 			)/ 365 as duration 
-- 		from 
-- 			(
-- 				SELECT 
-- 					p.firstname, 
-- 					p.lastname, 
-- 					p.pati_id, 
-- 					p.hash, 
-- 					pi.start, 
-- 					pi.end, 
-- 					s.value 
-- 				FROM 
-- 					patients as p 
-- 					inner join patients_information as pi on p.pati_id = pi.pati_id 
-- 					inner join suggestions as s on s.sugg_id = pi.sugg_id 
-- 					left join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 					left join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 				where 
-- 					s.path_string like "/patient/fiche/statut-du-suivi/decede"
-- 					and pi.start is not null 
-- 					and @refdate BETWEEN pi.start 
-- 					and COALESCE(
-- 						pi.end, 
-- 						@nextyear0101
-- 					)
-- 					and pi.deleted_at is null 
-- 					and p.deleted_at is null 

-- 					and @refdate between coalesce(pi_antenna.start, @past) and COALESCE (pi_antenna.end, @refdate)
-- 					and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 					and s_antenna.value like @antenna

-- 				order by 
-- 					s.value, 
-- 					p.firstname, 
-- 					p.lastname, 
-- 					pi.start
-- 			) q 
-- 			inner join patients as p2 on p2.pati_id = q.pati_id 
-- 			inner join patients_information as pi2 on q.pati_id = pi2.pati_id 
-- 			inner join suggestions as s2 on s2.sugg_id = pi2.sugg_id 
-- 		where 
-- 			s2.path_string like "/patient/fiche/statut-du-suivi/post-suivi"
-- 			and pi2.start is not null 
-- 			and pi2.deleted_at is null 
-- 			and p2.deleted_at is null 
-- 			and (
-- 				abs(to_days(q.start) - to_days(pi2.end)) < 7
-- 			) 
-- 		group by 
-- 			q.hash 
-- 		order by 
-- 			duration desc
-- 	) r;



select 'Tableau 33.A.1 - Durée moyenne du post-suivi, pour ceux qui ont quitté ces catégories - liste nominative';
-- select 
-- 	q.hash as h, 
-- 	q.value as qv, 
-- 	q.start as qstart, 
-- 	q.end as qend, 
-- 	q.hash as qh, 
-- 	count(q.hash) as qc, 
-- 	s2.value as s2status, 
-- 	pi2.start as q2start, 
-- 	pi2.end as q2end, 
-- 	sum(
-- 		to_days(pi2.end) - to_days(pi2.start)
-- 	)/ 365 as duration 
-- from 
-- 	(
-- 		SELECT 
-- 			p.firstname, 
-- 			p.lastname, 
-- 			p.pati_id, 
-- 			p.hash, 
-- 			pi.start, 
-- 			pi.end, 
-- 			s.value 
-- 		FROM 
-- 			patients as p 
-- 			inner join patients_information as pi on p.pati_id = pi.pati_id 
-- 			inner join suggestions as s on s.sugg_id = pi.sugg_id 
-- 			left join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 			left join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 		where 
-- 			s.path_string like "/patient/fiche/statut-du-suivi/decede"
-- 			and pi.start is not null 
-- 			and @refdate BETWEEN pi.start 
-- 			and COALESCE(
-- 				pi.end, 
-- 				@nextyear0101
-- 			)
-- 			and pi.deleted_at is null 
-- 			and p.deleted_at is null 

-- 			and @refdate between coalesce(pi_antenna.start, @past) and COALESCE (pi_antenna.end, @refdate)
-- 			and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 			and s_antenna.value like @antenna

-- 		order by 
-- 			s.value, 
-- 			p.firstname, 
-- 			p.lastname, 
-- 			pi.start
-- 	) q 
-- 	inner join patients as p2 on p2.pati_id = q.pati_id 
-- 	inner join patients_information as pi2 on q.pati_id = pi2.pati_id 
-- 	inner join suggestions as s2 on s2.sugg_id = pi2.sugg_id 
-- where 
-- 	s2.path_string like "/patient/fiche/statut-du-suivi/post-suivi"
-- 	and pi2.start is not null 
-- 	and pi2.deleted_at is null 
-- 	and p2.deleted_at is null 
-- 	and (
-- 		abs(to_days(q.start) - to_days(pi2.end)) < 7
-- 	) 
-- group by 
-- 	q.hash, 
-- 	q.value, 
-- 	q.start, 
-- 	q.end, 
-- 	s2.value, 
-- 	pi2.start, 
-- 	pi2.end 
-- order by 
-- 	duration desc;


select 'Tableau 33.A.2 - Durée moyenne du suivi pour ceux qui ont quitté ces catégories';

-- select 
--     REPLACE(CAST(format(
--         avg(r.duration),
--         2
--     )  AS CHAR), '.', ',')  as moyenne,
--     REPLACE(CAST(format(
--         STDDEV(r.duration),
--         2
--     ) AS CHAR), '.', ',') as ecart_type,
--     REPLACE(CAST(format(
--         min(r.duration),
--         2
--     ) AS CHAR), '.', ',')  as minimum,
--     REPLACE(CAST(format(
--         max(r.duration),
--         2
--     ) AS CHAR), '.', ',')  as maximum,
--     count(r.duration) as taille_echantillon
-- from 
-- 	(
-- 		select 
-- 			sum(
-- 				to_days(pi2.end) - to_days(pi2.start)
-- 			)/ 365 as duration 
-- 		from 
-- 			(
-- 				SELECT 
-- 					p.firstname, 
-- 					p.lastname, 
-- 					p.pati_id, 
-- 					p.hash, 
-- 					pi.start, 
-- 					pi.end, 
-- 					s.value 
-- 				FROM 
-- 					patients as p 
-- 					inner join patients_information as pi on p.pati_id = pi.pati_id 
-- 					inner join suggestions as s on s.sugg_id = pi.sugg_id 
-- 					left join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 					left join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 				where 
-- 					s.path_string like "/patient/fiche/statut-du-suivi/post-suivi"
-- 					and pi.start is not null 
-- 					and @refdate BETWEEN pi.start 
-- 					and COALESCE(
-- 						pi.end, 
-- 						@nextyear0101
-- 					)
-- 					and pi.deleted_at is null 
-- 					and p.deleted_at is null 

-- 					and @refdate between coalesce(pi_antenna.start, @past) and COALESCE (pi_antenna.end, @refdate)
-- 					and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 					and s_antenna.value like @antenna

-- 				order by 
-- 					s.value, 
-- 					p.firstname, 
-- 					p.lastname, 
-- 					pi.start
-- 			) q 
-- 			inner join patients as p2 on p2.pati_id = q.pati_id 
-- 			inner join patients_information as pi2 on q.pati_id = pi2.pati_id 
-- 			inner join suggestions as s2 on s2.sugg_id = pi2.sugg_id 
-- 		where 
-- 			s2.path_string like "/patient/fiche/statut-du-suivi/en-suivi"
-- 			and pi2.start is not null 
-- 			and pi2.deleted_at is null 
-- 			and p2.deleted_at is null 
-- 			and (
-- 				abs(to_days(q.start) - to_days(pi2.end)) < 7
-- 			) 
-- 		group by 
-- 			q.hash 
-- 		order by 
-- 			duration desc
-- 	) r;

select 'Tableau 33.A.2 - Durée moyenne du suivi pour ceux qui ont quitté ces catégories - liste nominative';

-- select 
-- 	q.hash as h, 
-- 	q.value as qv, 
-- 	q.start as qstart, 
-- 	q.end as qend, 
-- 	q.hash as qh, 
-- 	count(q.hash) as qc, 
-- 	s2.value as s2status, 
-- 	pi2.start as q2start, 
-- 	pi2.end as q2end, 
-- 	sum(
-- 		to_days(pi2.end) - to_days(pi2.start)
-- 	)/ 365 as duration 
-- from 
-- 	(
-- 		SELECT 
-- 			p.firstname, 
-- 			p.lastname, 
-- 			p.pati_id, 
-- 			p.hash, 
-- 			pi.start, 
-- 			pi.end, 
-- 			s.value 
-- 		FROM 
-- 			patients as p 
-- 			inner join patients_information as pi on p.pati_id = pi.pati_id 
-- 			inner join suggestions as s on s.sugg_id = pi.sugg_id 
-- 			left join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 			left join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 		where 
-- 			s.path_string like "/patient/fiche/statut-du-suivi/post-suivi"
-- 			and pi.start is not null 
-- 			and @refdate BETWEEN pi.start 
-- 			and COALESCE(
-- 				pi.end, 
-- 				@nextyear0101
-- 			)
-- 			and pi.deleted_at is null 
-- 			and p.deleted_at is null 

-- 			and @refdate between coalesce(pi_antenna.start, @past) and COALESCE (pi_antenna.end, @refdate)
-- 			and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 			and s_antenna.value like @antenna

-- 		order by 
-- 			s.value, 
-- 			p.firstname, 
-- 			p.lastname, 
-- 			pi.start
-- 	) q 
-- 	inner join patients as p2 on p2.pati_id = q.pati_id 
-- 	inner join patients_information as pi2 on q.pati_id = pi2.pati_id 
-- 	inner join suggestions as s2 on s2.sugg_id = pi2.sugg_id 
-- where 
-- 	s2.path_string like "/patient/fiche/statut-du-suivi/en-suivi"
-- 	and pi2.start is not null 
-- 	and pi2.deleted_at is null 
-- 	and p2.deleted_at is null 
-- 	and (
-- 		abs(to_days(q.start) - to_days(pi2.end)) < 7
-- 	) 
-- group by 
-- 	q.hash, 
-- 	q.value, 
-- 	q.start, 
-- 	q.end, 
-- 	s2.value, 
-- 	pi2.start, 
-- 	pi2.end 
-- order by 
-- 	duration desc;
	
	
	
select 'Tableau 33.A.3 - Durée moyenne du pré-suivi pour ceux qui ont quitté ces catégories';

-- select 
--     REPLACE(CAST(format(
--         avg(r.duration),
--         2
--     )  AS CHAR), '.', ',')  as moyenne,
--     REPLACE(CAST(format(
--         STDDEV(r.duration),
--         2
--     ) AS CHAR), '.', ',') as ecart_type,
--     REPLACE(CAST(format(
--         min(r.duration),
--         2
--     ) AS CHAR), '.', ',')  as minimum,
--     REPLACE(CAST(format(
--         max(r.duration),
--         2
--     ) AS CHAR), '.', ',')  as maximum,
--     count(r.duration) as taille_echantillon
-- from 
-- 	(
-- 		select 
-- 			sum(
-- 				to_days(pi2.end) - to_days(pi2.start)
-- 			)/ 365 as duration 
-- 		from 
-- 			(
-- 				SELECT 
-- 					p.firstname, 
-- 					p.lastname, 
-- 					p.pati_id, 
-- 					p.hash, 
-- 					pi.start, 
-- 					pi.end, 
-- 					s.value 
-- 				FROM 
-- 					patients as p 
-- 					inner join patients_information as pi on p.pati_id = pi.pati_id 
-- 					inner join suggestions as s on s.sugg_id = pi.sugg_id 
-- 					left join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 					left join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 				where 
-- 					s.path_string like "/patient/fiche/statut-du-suivi/en-suivi"
-- 					and pi.start is not null 
-- 					and @refdate BETWEEN pi.start 
-- 					and COALESCE(
-- 						pi.end, 
-- 						@nextyear0101
-- 					)
-- 					and pi.deleted_at is null 
-- 					and p.deleted_at is null 

-- 					and @refdate between coalesce(pi_antenna.start, @past) and COALESCE (pi_antenna.end, @refdate)
-- 					and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 					and s_antenna.value like @antenna

-- 				order by 
-- 					s.value, 
-- 					p.firstname, 
-- 					p.lastname, 
-- 					pi.start
-- 			) q 
-- 			inner join patients as p2 on p2.pati_id = q.pati_id 
-- 			inner join patients_information as pi2 on q.pati_id = pi2.pati_id 
-- 			inner join suggestions as s2 on s2.sugg_id = pi2.sugg_id 
-- 		where 
-- 			s2.path_string like "/patient/fiche/statut-du-suivi/pre-suivi-actif"
-- 			and pi2.start is not null 
-- 			and pi2.deleted_at is null 
-- 			and p2.deleted_at is null 
-- 			and (
-- 				abs(to_days(q.start) - to_days(pi2.end)) < 7
-- 			) 
-- 		group by 
-- 			q.hash 
-- 		order by 
-- 			duration desc
-- 	) r;


select 'Tableau 33.A.3 - Durée moyenne du pré-suivi pour ceux qui ont quitté ces catégories - liste nominative';

-- select 
-- 	q.hash as h, 
-- 	q.value as qv, 
-- 	q.start as qstart, 
-- 	q.end as qend, 
-- 	q.hash as qh, 
-- 	count(q.hash) as qc, 
-- 	s2.value as s2status, 
-- 	pi2.start as q2start, 
-- 	pi2.end as q2end, 
-- 	sum(
-- 		to_days(pi2.end) - to_days(pi2.start)
-- 	)/ 365 as duration 
-- from 
-- 	(
-- 		SELECT 
-- 			p.firstname, 
-- 			p.lastname, 
-- 			p.pati_id, 
-- 			p.hash, 
-- 			pi.start, 
-- 			pi.end, 
-- 			s.value 
-- 		FROM 
-- 			patients as p 
-- 			inner join patients_information as pi on p.pati_id = pi.pati_id 
-- 			inner join suggestions as s on s.sugg_id = pi.sugg_id 
-- 			left join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 			left join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 		where 
-- 			s.path_string like "/patient/fiche/statut-du-suivi/en-suivi"
-- 			and pi.start is not null 
-- 			and @refdate BETWEEN pi.start 
-- 			and COALESCE(
-- 				pi.end, 
-- 				@nextyear0101
-- 			)
-- 			and pi.deleted_at is null 
-- 			and p.deleted_at is null 

-- 			and @refdate between coalesce(pi_antenna.start, @past) and COALESCE (pi_antenna.end, @refdate)
-- 			and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 			and s_antenna.value like @antenna

-- 		order by 
-- 			s.value, 
-- 			p.firstname, 
-- 			p.lastname, 
-- 			pi.start
-- 	) q 
-- 	inner join patients as p2 on p2.pati_id = q.pati_id 
-- 	inner join patients_information as pi2 on q.pati_id = pi2.pati_id 
-- 	inner join suggestions as s2 on s2.sugg_id = pi2.sugg_id 
-- where 
-- 	s2.path_string like "/patient/fiche/statut-du-suivi/pre-suivi-actif"
-- 	and pi2.start is not null 
-- 	and pi2.deleted_at is null 
-- 	and p2.deleted_at is null 
-- 	and (
-- 		abs(to_days(q.start) - to_days(pi2.end)) < 7
-- 	) 
-- group by 
-- 	q.hash, 
-- 	q.value, 
-- 	q.start, 
-- 	q.end, 
-- 	s2.value, 
-- 	pi2.start, 
-- 	pi2.end 
-- order by 
-- 	duration desc;


select 'Tableau 33.B. - Durée moyenne du pré-suivi pour ceux qui y sont toujours';

-- select
--     durationclass as groupe,
--     REPLACE(CAST(format(
--         avg(r.duration),
--         2
--     )  AS CHAR), '.', ',')  as moyenne,
--     REPLACE(CAST(format(
--         STDDEV(r.duration),
--         2
--     ) AS CHAR), '.', ',') as ecart_type,
--     REPLACE(CAST(format(
--         min(r.duration),
--         2
--     ) AS CHAR), '.', ',')  as minimum,
--     REPLACE(CAST(format(
--         max(r.duration),
--         2
--     ) AS CHAR), '.', ',')  as maximum,
--     count(r.duration) as taille_echantillon
-- from
--     (
--         select
--             q.hash as h,
--             sum(
--                 to_days(piend) - to_days(q.start)
--             )/ 365 as duration,
--             case when sum(
--                 to_days(piend) - to_days(q.start)
--             )/ 365 between 0.0
--             and 0.5 then 'a. 0-6 mois' when sum(
--                 to_days(piend) - to_days(q.start)
--             )/ 365 between 0.5
--             and 1.0 then 'b. 6-12 mois' when sum(
--                 to_days(piend) - to_days(q.start)
--             )/ 365 between 1.0
--             and 1.5 then 'c. 12-18mois' when sum(
--                 to_days(piend) - to_days(q.start)
--             )/ 365 between 1.5
--             and 2.0 then 'd. 18-24 mois' when sum(
--                 to_days(piend) - to_days(q.start)
--             )/ 365 between 2
--             and 3 then 'e. 2-3 ans' else 'f. plus de 3 ans' end as durationclass
--         from
--             (
--                 SELECT
--                     p.firstname,
--                     p.lastname,
--                     p.pati_id,
--                     p.hash,
--                     pi.start,
--                     COALESCE(
--                         pi.end,
--                         @refdate
--                     ) as piend,
--                     s.value
--                 FROM
--                     patients as p
--                     inner join patients_information as pi on p.pati_id = pi.pati_id
--                     inner join suggestions as s on s.sugg_id = pi.sugg_id
-- 					left join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 					left join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
--                 where
-- 					s.path_string like "/patient/fiche/statut-du-suivi/pre-suivi-actif"
--                     and pi.start is not null
-- 					and @refdate BETWEEN pi.start 
-- 					and COALESCE(
-- 						pi.end, 
-- 						@nextyear0101
-- 					)
--                     and pi.deleted_at is null
--                     and p.deleted_at is null

-- 					and @refdate between coalesce(pi_antenna.start, @past) and COALESCE (pi_antenna.end, @refdate)
-- 					and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 					and s_antenna.value like @antenna

--                 order by
--                     s.value,
--                     p.firstname,
--                     p.lastname,
--                     pi.start
--             ) q
--         group by
--             q.hash
--         order by
--             duration desc
--     ) r
-- group by
--     durationclass
-- order by
--     durationclass;


select 'Tableau 33.B. - Durée moyenne du pré-suivi pour ceux qui y sont toujours - liste nominative';

        -- select
        --     q.firstname,
        --     q.lastname,
        --     q.hash as h,
        --     count(q.hash) as qc,
        --     REPLACE(CAST(format(
		-- 		sum(to_days(piend) - to_days(q.start))/ 365,
		-- 		2
		-- 	)  AS CHAR), '.', ',')  as duration,
			
        --     case when sum(
        --         to_days(piend) - to_days(q.start)
        --     )/ 365 between 0.0
        --     and 0.5 then 'a. 0-6 mois' when sum(
        --         to_days(piend) - to_days(q.start)
        --     )/ 365 between 0.5
        --     and 1.0 then 'b. 6-12 mois' when sum(
        --         to_days(piend) - to_days(q.start)
        --     )/ 365 between 1.0
        --     and 1.5 then 'c. 12-18mois' when sum(
        --         to_days(piend) - to_days(q.start)
        --     )/ 365 between 1.5
        --     and 2.0 then 'd. 18-24 mois' when sum(
        --         to_days(piend) - to_days(q.start)
        --     )/ 365 between 2
        --     and 3 then 'e. 2-3 ans' else 'f. plus de 3 ans' end as durationclass
        -- from
        --     (
        --         SELECT
        --             p.firstname,
        --             p.lastname,
        --             p.pati_id,
        --             p.hash,
        --             pi.start,
        --             COALESCE(
        --                 pi.end,
        --                 @refdate
        --             ) as piend,
        --             s.value
        --         FROM
        --             patients as p
        --             inner join patients_information as pi on p.pati_id = pi.pati_id
        --             inner join suggestions as s on s.sugg_id = pi.sugg_id
        --         where
		-- 			s.path_string like "/patient/fiche/statut-du-suivi/pre-suivi-actif"
        --             and pi.start is not null
		-- 			and @refdate BETWEEN pi.start 
		-- 			and COALESCE(
		-- 				pi.end, 
		-- 				@nextyear0101
		-- 			)
        --             and pi.deleted_at is null
        --             and p.deleted_at is null
        --         order by
        --             s.value,
        --             p.firstname,
        --             p.lastname,
        --             pi.start
        --     ) q
        -- group by
        --     q.hash,
        --     q.firstname,
        --     q.lastname
        -- order by
        --     duration desc;




select 'Tableau 33.C. - Durée moyenne du suivi pour ceux qui y sont toujours';

-- select
--     durationclass as groupe,
--     REPLACE(CAST(format(
--         avg(r.duration),
--         2
--     )  AS CHAR), '.', ',')  as moyenne,
--     REPLACE(CAST(format(
--         STDDEV(r.duration),
--         2
--     ) AS CHAR), '.', ',') as ecart_type,
--     REPLACE(CAST(format(
--         min(r.duration),
--         2
--     ) AS CHAR), '.', ',')  as minimum,
--     REPLACE(CAST(format(
--         max(r.duration),
--         2
--     ) AS CHAR), '.', ',')  as maximum,
--     count(r.duration) as taille_echantillon
-- from
--     (
--         select
--             q.hash as h,
--             sum(
--                 to_days(piend) - to_days(q.start)
--             )/ 365 as duration,
--             case when sum(
--                 to_days(piend) - to_days(q.start)
--             )/ 365 between 0.0
--             and 0.5 then 'a. 0-6 mois' when sum(
--                 to_days(piend) - to_days(q.start)
--             )/ 365 between 0.5
--             and 1.0 then 'b. 6-12 mois' when sum(
--                 to_days(piend) - to_days(q.start)
--             )/ 365 between 1.0
--             and 1.5 then 'c. 12-18mois' when sum(
--                 to_days(piend) - to_days(q.start)
--             )/ 365 between 1.5
--             and 2.0 then 'd. 18-24 mois' when sum(
--                 to_days(piend) - to_days(q.start)
--             )/ 365 between 2
--             and 3 then 'e. 2-3 ans' else 'f. plus de 3 ans' end as durationclass
--         from
--             (
--                 SELECT
--                     p.firstname,
--                     p.lastname,
--                     p.pati_id,
--                     p.hash,
--                     pi.start,
--                     COALESCE(
--                         pi.end,
--                         @refdate
--                     ) as piend,
--                     s.value
--                 FROM
--                     patients as p
--                     inner join patients_information as pi on p.pati_id = pi.pati_id
--                     inner join suggestions as s on s.sugg_id = pi.sugg_id
-- 					left join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 					left join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
--                 where
-- 					s.path_string like "/patient/fiche/statut-du-suivi/en-suivi"
--                     and pi.start is not null
-- 					and @refdate BETWEEN pi.start 
-- 					and COALESCE(
-- 						pi.end, 
-- 						@nextyear0101
-- 					)
--                     and pi.deleted_at is null
--                     and p.deleted_at is null

-- 					and @refdate between coalesce(pi_antenna.start, @past) and COALESCE (pi_antenna.end, @refdate)
-- 					and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 					and s_antenna.value like @antenna

--                 order by
--                     s.value,
--                     p.firstname,
--                     p.lastname,
--                     pi.start
--             ) q
--         group by
--             q.hash
--         order by
--             duration desc
--     ) r
-- group by
--     durationclass
-- order by
--     durationclass;


select 'Tableau 33.C. - Durée moyenne du suivi pour ceux qui y sont toujours - liste nominative';
 
    --    select
    --         q.firstname,
    --         q.lastname,
    --         q.hash as h,
    --         q.value as qv,
    --         q.start as qstart,
    --         piend,
    --         q.hash as qh,
    --         count(q.hash) as qc,
    --         q.value as s2status,
    --         q.start as q2start,
    --         REPLACE(CAST(format(
	-- 			sum(to_days(piend) - to_days(q.start))/ 365,
	-- 			2
	-- 		)  AS CHAR), '.', ',')  as duration,
			
    --         case when sum(
    --             to_days(piend) - to_days(q.start)
    --         )/ 365 between 0.0
    --         and 0.5 then 'a. 0-6 mois' when sum(
    --             to_days(piend) - to_days(q.start)
    --         )/ 365 between 0.5
    --         and 1.0 then 'b. 6-12 mois' when sum(
    --             to_days(piend) - to_days(q.start)
    --         )/ 365 between 1.0
    --         and 1.5 then 'c. 12-18mois' when sum(
    --             to_days(piend) - to_days(q.start)
    --         )/ 365 between 1.5
    --         and 2.0 then 'd. 18-24 mois' when sum(
    --             to_days(piend) - to_days(q.start)
    --         )/ 365 between 2
    --         and 3 then 'e. 2-3 ans' else 'f. plus de 3 ans' end as durationclass
    --     from
    --         (
    --             SELECT
    --                 p.firstname,
    --                 p.lastname,
    --                 p.pati_id,
    --                 p.hash,
    --                 pi.start,
    --                 COALESCE(
    --                     pi.end,
    --                     @refdate
    --                 ) as piend,
    --                 s.value
    --             FROM
    --                 patients as p
    --                 inner join patients_information as pi on p.pati_id = pi.pati_id
    --                 inner join suggestions as s on s.sugg_id = pi.sugg_id
	-- 				left join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
	-- 				left join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
                    
                    
    --             where
	-- 				s.path_string like "/patient/fiche/statut-du-suivi/en-suivi"
    --                 and pi.start is not null
	-- 				and @refdate BETWEEN pi.start 
	-- 				and COALESCE(
	-- 					pi.end, 
	-- 					@nextyear0101
	-- 				)
    --                 and pi.deleted_at is null
    --                 and p.deleted_at is null

	-- 				and @refdate between coalesce(pi_antenna.start, @past) and COALESCE (pi_antenna.end, @refdate)
	-- 				and s_antenna.path_string like "/patient/suivi/antenne/%"
	-- 				and s_antenna.value like @antenna

    --             order by
    --                 s.value,
    --                 p.firstname,
    --                 p.lastname,
    --                 pi.start
    --         ) q
    --     group by
    --         q.hash,
    --         q.lastname,
    --         q.firstname,
    --         q.value,
    --         q.start,
    --         piend,
    --         q.hash,
    --         q.value,
    --         q.start
    --     order by
    --         duration desc, q.hash;





select 'Tableau 33.D. – Durée moyenne du suivi rue et du suivi logement';
select 'Suivi : moyenne, ecart type et taille echantillon';
-- select 
-- 	REPLACE(CAST(format(
-- 		avg(r.duration) ,
-- 				2
-- 			)  AS CHAR), '.', ',') as moyenne, 
-- 	REPLACE(CAST(format(
-- 		STDDEV(r.duration) ,
-- 				2
-- 			)  AS CHAR), '.', ',') as ecarttype, 
-- 	REPLACE(CAST(format(
-- 		min(r.duration),
-- 				2
-- 			)  AS CHAR), '.', ',') as minimum, 
-- 	REPLACE(CAST(format(
-- 		max(r.duration),
-- 				2
-- 			)  AS CHAR), '.', ',') as maximum, 
-- 	count(r.duration) as echantillon 
-- from 
-- 	(
-- 		select 
-- 			q.hash, 
-- 			sum(to_days(pi2.end) - to_days(pi2.start))/ 365 as duration
-- 		from 
-- 			(
-- 				SELECT 
-- 					p.firstname, 
-- 					p.lastname, 
-- 					p.pati_id, 
-- 					p.hash, 
-- 					pi.start, 
-- 					pi.end, 
-- 					s.value 
-- 				FROM 
-- 					patients as p 
-- 					inner join patients_information as pi on p.pati_id = pi.pati_id 
-- 					inner join suggestions as s on s.sugg_id = pi.sugg_id 
-- 					left join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 					left join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
-- 				where 
-- 					s.path_string like "/patient/fiche/statut-du-suivi/post-suivi"
-- 					and pi.start is not null 
-- 					and @refdate BETWEEN pi.start 
-- 					and COALESCE(
-- 						pi.end, 
-- 						@nextyear0101
-- 					)
-- 					and pi.deleted_at is null 
-- 					and p.deleted_at is null 

-- 					and @refdate between coalesce(pi_antenna.start, @past) and COALESCE (pi_antenna.end, @refdate)
-- 					and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 					and s_antenna.value like @antenna
-- 				order by 
-- 					s.value, 
-- 					p.firstname, 
-- 					p.lastname, 
-- 					pi.start
-- 			) q 
-- 			inner join patients as p2 on p2.pati_id = q.pati_id 
-- 			inner join patients_information as pi2 on q.pati_id = pi2.pati_id 
-- 			inner join suggestions as s2 on s2.sugg_id = pi2.sugg_id 
-- 		where 
-- 			s2.path_string like "/patient/fiche/statut-du-suivi/en-suivi"
-- 			and pi2.start is not null 
-- 			and pi2.deleted_at is null 
-- 			and p2.deleted_at is null 
-- 			and (
-- 				abs(to_days(q.start) - to_days(pi2.end)) < 7
-- 			) 
-- 		group by 
-- 			q.hash 
-- 		order by 
-- 			duration desc
-- 	) r;


select 'Tableau 33.D. - Durée moyenne du suivi rue et suivi logement - liste nominative';

		-- select 
		-- 	q.hash, 
		-- 	q.firstname,
		-- 	q.lastname,
		-- 	sum(to_days(pi2.end) - to_days(pi2.start))/ 365 as duration
		-- from 
		-- 	(
		-- 		SELECT 
		-- 			p.firstname, 
		-- 			p.lastname, 
		-- 			p.pati_id, 
		-- 			p.hash, 
		-- 			pi.start, 
		-- 			pi.end, 
		-- 			s.value 
		-- 		FROM 
		-- 			patients as p 
		-- 			inner join patients_information as pi on p.pati_id = pi.pati_id 
		-- 			inner join suggestions as s on s.sugg_id = pi.sugg_id 
		-- 			left join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
		-- 			left join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
		-- 		where 
		-- 			s.path_string like "/patient/fiche/statut-du-suivi/post-suivi"
		-- 			and pi.start is not null 
		-- 			and @refdate BETWEEN pi.start 
		-- 			and COALESCE(
		-- 				pi.end, 
		-- 				@nextyear0101
		-- 			)
		-- 			and pi.deleted_at is null 
		-- 			and p.deleted_at is null 

		-- 			and @refdate between coalesce(pi_antenna.start, @past) and COALESCE (pi_antenna.end, @refdate)
		-- 			and s_antenna.path_string like "/patient/suivi/antenne/%"
		-- 			and s_antenna.value like @antenna
		-- 		order by 
		-- 			s.value, 
		-- 			p.firstname, 
		-- 			p.lastname, 
		-- 			pi.start
		-- 	) q 
		-- 	inner join patients as p2 on p2.pati_id = q.pati_id 
		-- 	inner join patients_information as pi2 on q.pati_id = pi2.pati_id 
		-- 	inner join suggestions as s2 on s2.sugg_id = pi2.sugg_id 
		-- where 
		-- 	s2.path_string like "/patient/fiche/statut-du-suivi/en-suivi"
		-- 	and pi2.start is not null 
		-- 	and pi2.deleted_at is null 
		-- 	and p2.deleted_at is null 
		-- 	and (
		-- 		abs(to_days(q.start) - to_days(pi2.end)) < 7
		-- 	) 
		-- group by 
		-- 	q.hash, q.firstname, q.lastname
		-- order by 
		-- 	duration desc;




select 'TABLEAU XX : REPARTITION DES PATIENTS DANS L’EQUIPE RUE ET L’EQUIPE LOGEMENT';

-- SELECT 
-- 	state as 'Statut', 
-- 	s.value as 'Equipe', 
-- 	count(q.pati_id) as '# patients'
-- FROM 
-- 	(
-- 		SELECT 
-- 			p.pati_id, 
-- 			max(pi.start), 
-- 			s.value as state 
-- 		FROM 
-- 			patients as p 
-- 			inner join patients_information as pi on p.pati_id = pi.pati_id 
-- 			inner join suggestions as s on s.sugg_id = pi.sugg_id 
-- 			left join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 			left join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 

-- 		where 
-- 			(
-- 				s.path_string like "/patient/fiche/statut-du-suivi/pre-suivi-actif"
-- 				or s.path_string like "/patient/fiche/statut-du-suivi/en-suivi"
-- 				or s.path_string like "/patient/fiche/statut-du-suivi/post-suivi"
-- 			) 
-- 			and @refdate BETWEEN pi.start 
-- 				and COALESCE(
-- 					pi.end, 
-- 					@nextyear0101
-- 				)
-- 			and pi.deleted_at is null 
-- 			and p.deleted_at is null

-- 			and @refdate between coalesce(pi_antenna.start, @past) and COALESCE (pi_antenna.end, @refdate)
-- 			and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 			and s_antenna.value like @antenna

-- 		group by 
-- 			p.pati_id, s.value
-- 	) q 
-- 	inner join patients_information as pi on q.pati_id = pi.pati_id 
-- 	inner join suggestions as s on s.sugg_id = pi.sugg_id 
-- where 
-- 	s.path_string like '/patient/suivi/equipes/%' 
-- 	and @refdate BETWEEN pi.start and COALESCE(pi.end, @nextyear0101)
-- 	and pi.deleted_at is null 
-- group by 
-- 	state, 
-- 	s.value
-- order by 
-- 	state, 
-- 	s.value;


select 'TABLEAU XX : REPARTITION DES PATIENTS DANS L’EQUIPE RUE ET L’EQUIPE LOGEMENT - liste nominative';

-- SELECT
-- 	state as 'Statut', 
-- 	s.value as 'Equipe', 
-- 	q.hash
-- FROM 
-- 	(
-- 		SELECT 
-- 			p.pati_id, 
--             p.hash,
--             p.lastname,
-- 			max(pi.start), 
-- 			s.value as state 
-- 		FROM 
-- 			patients as p 
-- 			inner join patients_information as pi on p.pati_id = pi.pati_id 
-- 			inner join suggestions as s on s.sugg_id = pi.sugg_id 
-- 			left join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 			left join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 

-- 		where 
-- 			(
-- 				s.path_string like "/patient/fiche/statut-du-suivi/pre-suivi-actif"
-- 				or s.path_string like "/patient/fiche/statut-du-suivi/en-suivi"
-- 				or s.path_string like "/patient/fiche/statut-du-suivi/post-suivi"
-- 			) 
-- 			and @refdate BETWEEN pi.start 
-- 				and COALESCE(
-- 					pi.end, 
-- 					@nextyear0101
-- 				)
-- 			and pi.deleted_at is null 
-- 			and p.deleted_at is null

-- 			and @refdate between coalesce(pi_antenna.start, @past) and COALESCE (pi_antenna.end, @refdate)
-- 			and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 			and s_antenna.value like @antenna

-- 		group by 
-- 			p.pati_id, p.hash, p.lastname, s.value
-- 	) q 
-- 	inner join patients_information as pi on q.pati_id = pi.pati_id 
-- 	inner join suggestions as s on s.sugg_id = pi.sugg_id 
-- where 
-- 	s.path_string like '/patient/suivi/equipes/%' 
-- 	and @refdate BETWEEN pi.start and COALESCE(pi.end, @nextyear0101)
-- 	and pi.deleted_at is null 
-- order by 
-- 	state, 
-- 	s.value;
	
	
	

select 'TABLEAU 34 : PROGRESSION DU CVC - mensuel';


-- SELECT 
-- 	state as 'Statut', 
-- 	m as 'Période', 
-- 	REPLACE(CAST(format(
-- 		AVG(totfrivalue),
-- 		2
-- 	)  AS CHAR), '.', ',')  as 'Moyenne CVC',
-- 	count(totfrivalue) as 'Echantillon' 
-- from 
-- 	(
-- 		select 
-- 			s.value as state, 
-- 			# i.name as indicateur, 
-- 			left(fr.report_date, 7) as m, 
-- 			#fr.report_date as reportdate, 
-- 			#fri.value as frivalue, 
-- 			sum(fri.value) as totfrivalue
-- 			#pi.start as pistart 
-- 		FROM 
-- 			patients as p 
-- 			inner join followup_reports as fr on fr.pati_id = p.pati_id 
-- 			inner JOIN followup_reports_indicators as fri on fri.fore_id = fr.fore_id 
-- 			inner join indicators as i on i.indi_id = fri.indi_id 
-- 			inner join indicators_indicators_groups as iig on iig.indi_id = i.indi_id
-- 			inner join indicators_groups as ig on ig.igrp_id = iig.igrp_id
-- 			inner join patients_information as pi on p.pati_id = pi.pati_id 
-- 			inner join suggestions as s on s.sugg_id = pi.sugg_id 
-- 			left join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
-- 			left join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
            
-- 		where 
-- 			p.deleted_at is null 
-- 			and left(fr.report_date, 4) = @refyear 
-- 			and (
--                 s.path_string like "/patient/fiche/statut-du-suivi/pre-suivi-actif" 
--                 or s.path_string like "/patient/fiche/statut-du-suivi/en-suivi" 
--                 or s.path_string like "/patient/fiche/statut-du-suivi/post-suivi" 
                
-- 			) 
-- 			and pi.deleted_at is null 
-- 			and (
-- 				fr.report_date BETWEEN pi.start 
-- 				and COALESCE(
-- 					pi.end, 
-- 					@refdate
-- 				)
-- 			) 
--             and ig.name = "CVC"


-- 			and @refdate between coalesce(pi_antenna.start, @past) and COALESCE (pi_antenna.end, @refdate)
-- 			and s_antenna.path_string like "/patient/suivi/antenne/%"
-- 			and s_antenna.value like @antenna

-- 		group by 
-- 			fr.fore_id, s.value, m
-- 	) q 
-- group by 
-- 	state, 
-- 	m 
-- order by 
-- 	state, 
-- 	m;
	
	
	
select 'TABLEAU 34 : PROGRESSION DU CVC (Metis mais pas dans le RA 2015) - annuel';	

SELECT 
	state as 'Statut', 
	REPLACE(CAST(format(
		AVG(totfrivalue),
		2
	)  AS CHAR), '.', ',')  as 'Moyenne CVC',
	count(totfrivalue) as 'Echantillon' 
from 
	(
		select 
			s.value as state, 
			# i.name as indicateur, 
			left(fr.report_date, 7) as m, 
			#fr.report_date as reportdate, 
			#fri.value as frivalue, 
			sum(fri.value) as totfrivalue
			#pi.start as pistart 
		FROM 
			patients as p 
			inner join followup_reports as fr on fr.pati_id = p.pati_id 
			inner JOIN followup_reports_indicators as fri on fri.fore_id = fr.fore_id 
			inner join indicators as i on i.indi_id = fri.indi_id 
			inner join indicators_indicators_groups as iig on iig.indi_id = i.indi_id
			inner join indicators_groups as ig on ig.igrp_id = iig.igrp_id
			inner join patients_information as pi on p.pati_id = pi.pati_id 
			inner join suggestions as s on s.sugg_id = pi.sugg_id 
			left join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
			left join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
            
		where 
			p.deleted_at is null 
			and left(fr.report_date, 4) = @refyear 
			and (
                s.path_string like "/patient/fiche/statut-du-suivi/pre-suivi-actif" 
                or s.path_string like "/patient/fiche/statut-du-suivi/en-suivi" 
                or s.path_string like "/patient/fiche/statut-du-suivi/post-suivi" 
                
			) 
			and pi.deleted_at is null 
			and (
				fr.report_date BETWEEN pi.start 
				and COALESCE(
					pi.end, 
					@refdate
				)
			) 
            and ig.name = "CVC"


			and @refdate between coalesce(pi_antenna.start, @past) and COALESCE (pi_antenna.end, @refdate)
			and s_antenna.path_string like "/patient/suivi/antenne/%"
			and s_antenna.value like @antenna

		group by 
			fr.fore_id, s.value, m
	) q 
group by 
	state 
order by 
	state;
	
	

	
	
# divers

select 'Valeurs "autres" pour les pathologies physiques';

-- SELECT
--             s.value,
--             s.path_string,
--             pi.comment,
--             p.pati_id,
--             p.hash,
--             p.firstname,
--             p.lastname
--         FROM
--             patients as p
--             inner join patients_information as pi on p.pati_id = pi.pati_id
--             inner join suggestions as s on s.sugg_id = pi.sugg_id
--         where
--             (s.value like "Autre")
--             and s.path_string like "%pathologies-physiques%"
--             and pi.end is null
--             and pi.deleted_at is null
-- 			and p.deleted_at is null
--         order by
--             s.value,
--             p.firstname,
--             p.lastname,
--             pi.start;


# Jours par patient par étape de suivi
/*
select
    r.hash,
    sum(presuiviactif) as sumpresuiviactif,
    sum(presuiviinactif) as sumpresuiviinactif,
    sum(ensuivi) as sumensuivi,
    sum(postsuivi) as sumpostsuivi,
    sum(signalementtiers) as sumsignalementtiers,
    sum(signalementpartenaire) as sumsignalementpartenaire,
    sum(sixetplus) as sumsixetplus,
    sum(disparu) as sumdisparu,
    sum(Decede) as sumDecede
from
(
select
    q.hash,
    q.firstname,
    q.lastname,
    if (
        status like "Pré-suivi actif",
        to_days(
            COALESCE(
                q.end,
                @refdate
            )
        ) - to_days(q.start),
        0
    ) as presuiviactif,
    if (
        status like "Pré-suivi inactif",
        to_days(
            COALESCE(
                q.end,
                @refdate
            )
        ) - to_days(q.start),
        0
    ) as presuiviinactif,
    if (
        status like "en suivi",
        to_days(
            COALESCE(
                q.end,
                @refdate
            )
        ) - to_days(q.start),
        0
    ) as ensuivi,
    if (
        status like "post-suivi",
        to_days(
            COALESCE(
                q.end,
                @refdate
            )
        ) - to_days(q.start),
        0
    ) as postsuivi,
    if (
        status like "signalement tiers",
        to_days(
            COALESCE(
                q.end,
                @refdate
            )
        ) - to_days(q.start),
        0
    ) as signalementtiers,
    if (
        status like "signalement partenaire",
        to_days(
            COALESCE(
                q.end,
                @refdate
            )
        ) - to_days(q.start),
        0
    ) as signalementpartenaire,
    if (
        status like "6&+",
        to_days(
            COALESCE(
                q.end,
                @refdate
            )
        ) - to_days(q.start),
        0
    ) as sixetplus,
    if (
        status like "disparu",
        to_days(
            COALESCE(
                q.end,
                @refdate
            )
        ) - to_days(q.start),
        0
    ) as disparu,
    if (
        status like "Décédé",
        to_days(
            COALESCE(
                q.end,
                @refdate
            )
        ) - to_days(q.start),
        0
    ) as Decede
from
    (
        SELECT
            p.firstname,
            p.lastname,
            p.hash,
            pi.start,
            pi.end,
            s.value as status
        FROM
            patients as p
            inner join patients_information as pi on p.pati_id = pi.pati_id
            inner join suggestions as s on s.sugg_id = pi.sugg_id
        where
            s.path_string like "/patient/fiche/statut-du-suivi/%"
            and pi.start is not null
            and pi.deleted_at is null
            and p.deleted_at is null
        order by
            p.hash,
            p.firstname,
            p.lastname,
            pi.start
    ) q ) r group by hash;

*/


select 'Divers - % de CVC remplis par période';

select 
	period, 
	totalreports, 
	filledreports, 
	REPLACE(CAST(format(
		100 * filledreports / totalreports,
		2
	)  AS CHAR), '.', ',')  as ratio
from 
	(
		select 
			period, 
			count(cvc) as totalreports, 
			sum(cvc) as filledreports 
		from 
			(
				SELECT 
					left(followup_reports.report_date, 7) as period, 
					followup_reports.fore_id as id, 
					if(
						coalesce(
							sum(
								followup_reports_indicators.value
							), 
							-1
						)< 0, 
						0, 
						1
					) as cvc 
				FROM 
					patients 
					inner join followup_reports on followup_reports.pati_id = patients.pati_id 
					left join followup_reports_indicators on followup_reports.fore_id = followup_reports_indicators.fore_id 
				where 
					patients.deleted_at is null 
					and followup_reports.deleted_at is null 
					and followup_reports.activity_type = 1 
					and followup_reports.report_type in (1, 2, 3) 
				group by 
					followup_reports.fore_id, 
					left(followup_reports.report_date, 7) 
				order by 
					followup_reports.report_date
			) q 
		group by 
			period desc
	) r;
/*
# evolution population des statuts jour par jour

select
    qdate,
    sumpresuiviactif,
    sumpresuiviinactif,
    sumensuivi,
    sumpostsuivi,
    sumsignalementtiers,
    sumsignalementpartenaire,
    sumsixetplus,
    sumdisparu,
    sumDecede,
    (
        sumpresuiviactif + sumpresuiviinactif + sumensuivi + sumpostsuivi + sumsignalementtiers + sumsignalementpartenaire + sumsixetplus + sumdisparu + sumDecede
    ) as total
from
    (
        select
            qdate,
            sum(presuiviactif) as sumpresuiviactif,
            sum(presuiviinactif) as sumpresuiviinactif,
            sum(ensuivi) as sumensuivi,
            sum(postsuivi) as sumpostsuivi,
            sum(signalementtiers) as sumsignalementtiers,
            sum(signalementpartenaire) as sumsignalementpartenaire,
            sum(sixetplus) as sumsixetplus,
            sum(disparu) as sumdisparu,
            sum(Decede) as sumDecede
        from
            (
                select
                    qdate,
                    q.hash,
                    q.firstname,
                    q.lastname,
                    if (
                        status like "Pré-suivi actif", 1,
                        0
                    ) as presuiviactif,
                    if (
                        status like "Pré-suivi inactif",
                        1, 0
                    ) as presuiviinactif,
                    if (status like "en suivi", 1, 0) as ensuivi,
                    if (status like "post-suivi", 1, 0) as postsuivi,
                    if (
                        status like "signalement tiers", 1,
                        0
                    ) as signalementtiers,
                    if (
                        status like "signalement partenaire",
                        1, 0
                    ) as signalementpartenaire,
                    if (status like "6&+", 1, 0) as sixetplus,
                    if (status like "disparu", 1, 0) as disparu,
                    if (status like "Décédé", 1, 0) as Decede,
                    (
                        to_days(
                            COALESCE(
                                q.end,
								@refdate
                            )
                        ) - to_days(q.start)
                    ) as duration
                from
                    (
                        SELECT
                            qd.d as qdate,
                            p.firstname,
                            p.lastname,
                            p.hash,
                            pi.start,
                            pi.end,
                            s.value as status
                        FROM
                            patients as p
                            inner join patients_information as pi on p.pati_id = pi.pati_id
                            inner join suggestions as s on s.sugg_id = pi.sugg_id
                            right join (
                                SELECT
                                    a.Date as d
                                FROM
                                    (
                                        SELECT
                                            curdate() - INTERVAL (
                                                a.a + (10 * b.a) + (100 * c.a)
                                            ) DAY AS Date
                                        FROM
                                            (
                                                SELECT
                                                    0 AS a
                                                UNION ALL
                                                SELECT
                                                    1
                                                UNION ALL
                                                SELECT
                                                    2
                                                UNION ALL
                                                SELECT
                                                    3
                                                UNION ALL
                                                SELECT
                                                    4
                                                UNION ALL
                                                SELECT
                                                    5
                                                UNION ALL
                                                SELECT
                                                    6
                                                UNION ALL
                                                SELECT
                                                    7
                                                UNION ALL
                                                SELECT
                                                    8
                                                UNION ALL
                                                SELECT
                                                    9
                                            ) AS a CROSS
                                            JOIN (
                                                SELECT
                                                    0 AS a
                                                UNION ALL
                                                SELECT
                                                    1
                                                UNION ALL
                                                SELECT
                                                    2
                                                UNION ALL
                                                SELECT
                                                    3
                                                UNION ALL
                                                SELECT
                                                    4
                                                UNION ALL
                                                SELECT
                                                    5
                                                UNION ALL
                                                SELECT
                                                    6
                                                UNION ALL
                                                SELECT
                                                    7
                                                UNION ALL
                                                SELECT
                                                    8
                                                UNION ALL
                                                SELECT
                                                    9
                                            ) AS b CROSS
                                            JOIN (
                                                SELECT
                                                    0 AS a
                                                UNION ALL
                                                SELECT
                                                    1
                                                UNION ALL
                                                SELECT
                                                    2
                                                UNION ALL
                                                SELECT
                                                    3
                                                UNION ALL
                                                SELECT
                                                    4
                                                UNION ALL
                                                SELECT
                                                    5
                                                UNION ALL
                                                SELECT
                                                    6
                                                UNION ALL
                                                SELECT
                                                    7
                                                UNION ALL
                                                SELECT
                                                    8
                                                UNION ALL
                                                SELECT
                                                    9
                                            ) AS c
                                    ) a
                                where
                                    a.date like "2016%"
                            ) qd on qd.d BETWEEN pi.start AND coalesce(pi.end, @refdate)
                        where
                            s.path_string like "/patient/fiche/statut-du-suivi/%"
                            and (pi.deleted_at is null or pi.deleted_at > qd.d) 
                            and (p.deleted_at is null or p.deleted_at > qd.d)
                        order by
                            s.value,
                            p.firstname,
                            p.lastname,
                            pi.start
                    ) q
            ) r
            group by qdate

    ) ss;
*/
