SET NAMES utf8mb4 COLLATE utf8mb4_unicode_ci;
-- set @dateinit = '2020-12-31';
-- set @antennainit = 'Bruxelles';
-- set @reportperiodinit = "year"; -- "year" or "quarter"

select antenna(), refdate(), startdate(), enddate();


-- Chapitre 1 : Données qui demontrent nos activités
-- =================================================

-- Tableau 1: Nombre de personnes avec qui nous travaillons

# check status
select * from patients_summary_on_refdate where hash in (select hash from (select hash, count(hash) as c from patients_summary_on_refdate group by hash having c > 1) hc);


-- Tableau 1.A. – Nouveaux signalements encodés caro: ok
select * from metisapp.patients where status like "Signalement%";
select status, count(hash) as nombre from metisapp.patients where status like "Signalement%"  and first_contact_date like '%2022%' group by status;

-- Tableau 1.B. – Nouveaux pré-suivis actifs encodés caro:ok	
select * from metisapp.patients where status like "Pre-suivi%";
select status, count(hash) as nombre from metisapp.patients where status like "Pre-suivi%"  and first_contact_date like '%2022%' group by status;

-- Tableau 1.C. – Nombre de nouveaux suivis au cours de l’année Caro: Ok
select * from metisapp.patients where status like "En suivi";
select status, count(hash) as nombre from metisapp.patients where status like "En suivi%" and first_contact_date like '%2022%' group by status;

-- Tableau 1.D. – Nombre de personnes passées par le suivi en cours d’année Caro: Ok
select * from patients where status like "En suivi" and first_contact_date like '%2022%';
select status, count(hash) as nombre from patients where statut like "En suivi" group by status;

-- select * from patients_status_through_year_ln where statut like "Post-suivi";
-- select statut, count(hash) as nombre from patients_status_through_year_ln where statut like "Post-suivi" group by statut;


-- Tableau 1.E. – Nombre total de personnes par statut CARO: ok
select status, count(hash) from metisapp.patients group by status; 
-- select * from patients_summary_on_refdate;

-- Tableau 1.F. – Nombre de nouveaux patients Housing First au cours de l’année
select programme, count(hash) from patients_new_programme_ln where programme like "%first%";
select * from patients_new_programme_ln where programme like "%first%";
 
-- Tableau 1.G. – Nombre de nouveaux patients Housing Fast au cours de l’année
select programme, count(hash) from patients_new_programme_ln where programme like "%fast%";
select * from patients_new_programme_ln where programme like "%fast%";

-- Tableau 1.H. – Nombre total de patients Housing First et Housing Fast
select programme, count(hash) from patients_summary_on_refdate where programme != '--inconnu--' and avantdernierstatut is null group by programme;
select * from patients_summary_on_refdate where programme != '--inconnu--' and avantdernierstatut is null;

-- Tableau 1.I. – Nombre total de patients selon l’équipe de suivi
select equipe, count(hash) from patients_summary_on_refdate where equipe != '--inconnu--' and avantdernierstatut is null group by equipe;
select equipe, statut, count(hash) from patients_summary_on_refdate where equipe like "%rue" and avantdernierstatut is null group by equipe, statut;
select * from patients_summary_on_refdate where equipe != '--inconnu--' and avantdernierstatut is null;


-- Tableau 2 : Nombre et durée des activités effectuées avec les patients

-- hors tableau – Nombre total d’activités et durée totale
select count(fore_id) as nombre, round(SUM(TIME_TO_SEC(duration))/3600, 2) as duree_en_heures from activities_calls_meetings where activitytype = "Activite-rue" ;
select count(fore_id) as nombre, round(SUM(TIME_TO_SEC(duration))/3600, 2) as duree_en_heures from activities_calls_meetings where activitytype != "Activite-rue" ;

-- hors tableau – activité sans report_type
select fore_id, user_id, activity_type, report_date, is_highlight, plac_id, last_update, deleted_at, pati_id, duration, creation_date, report_type from followup_reports where report_type is null and year(report_date) = 2020 and activity_type = 1 and deleted_at is null;

-- Tableau 2.A. – Nombre d’activités effectuées avec les patients selon leur statut 
select antenne, categoriesuivi, activitytype as statistic_class, count(fore_id) as nombre from activities_calls_meetings where reporttype not like 'recherche' and activitytype = "Activite-rue" group by antenne, categoriesuivi 
union 
select antenne, categoriesuivi, statistic_class, count(fora_id) as nombre from activities_calls_meetings fa inner join all_sub_activities asa on asa.fore_id = fa.fore_id where reporttype not like 'recherche' and activitytype = "Activite-rue" group by antenne, statut, statistic_class
order by antenne, categoriesuivi, statistic_class;

-- Tableau 2.B. – Nombre d’activités effectuées avec les patients selon l’équipe de suivi
select antenne, equipe, activitytype as statistic_class, count(fore_id) as nombre from activities_calls_meetings where reporttype not like 'recherche' and activitytype = "Activite-rue" group by antenne, equipe
union 
select antenne, equipe, statistic_class, count(fora_id) as nombre from activities_calls_meetings fa inner join all_sub_activities asa on asa.fore_id = fa.fore_id where reporttype not like 'recherche' and activitytype = "Activite-rue" group by antenne, equipe, statistic_class
order by antenne, equipe, statistic_class;

-- Tableau 2.C. – Nombre d’activités effectuées avec les patients selon le programme de logement
select antenne, programme, activitytype as statistic_class, count(fore_id) as nombre from activities_calls_meetings where reporttype not like 'recherche' and activitytype = "Activite-rue" group by antenne, programme
union 
select antenne, programme, statistic_class, count(fora_id) as nombre from activities_calls_meetings fa inner join all_sub_activities asa on asa.fore_id = fa.fore_id where reporttype not like 'recherche' and activitytype = "Activite-rue" group by antenne, programme, statistic_class
order by antenne, programme, statistic_class;

-- Tableau 2.D. – Durée totale et moyenne des activités effectuées avec les patients selon leur statut
select antenne, categoriesuivi, statistic_class, nombre, duree_en_heures, duree_en_heures/nombre as duree_moyenne
from ( 	select antenne, categoriesuivi, 'rencontre_vu_repos' as statistic_class, count(fore_id) as nombre, round(SUM(TIME_TO_SEC(duration))/3600, 2) as duree_en_heures from activities_calls_meetings where activitytype = "Activite-rue" group by antenne, categoriesuivi )q
order by antenne, categoriesuivi, statistic_class;

-- Tableau 2.E. – Durée totale et moyenne des activités effectuées avec les patients selon l’équipe de suivi
select antenne, equipe, statistic_class, nombre, duree_en_heures, duree_en_heures/nombre as duree_moyenne
from ( 	select antenne, equipe, 'rencontre_vu_repos' as statistic_class, count(fore_id) as nombre, round(SUM(TIME_TO_SEC(duration))/3600, 2) as duree_en_heures from activities_calls_meetings where activitytype = "Activite-rue" group by antenne, equipe )q
order by antenne, equipe, statistic_class;

-- Tableau 2.F. – Durée totale et moyenne des activités effectuées avec les patients selon le programme de logement
select antenne, programme, statistic_class, nombre, duree_en_heures, duree_en_heures/nombre as duree_moyenne
from ( 	select antenne, programme, 'rencontre_vu_repos' as statistic_class, count(fore_id) as nombre, round(SUM(TIME_TO_SEC(duration))/3600, 2) as duree_en_heures from activities_calls_meetings where activitytype = "Activite-rue" group by antenne, programme )q
order by antenne, programme, statistic_class;


-- Tableau 3 : Nombre et durée des démarches effectuées pour les patients

-- Tableau 3.A. – Nombre de démarches effectuées pour les patients selon leur statut
select antenne, categoriesuivi, activitytype as statistic_class, count(fore_id) as nombre, round(SUM(TIME_TO_SEC(duration))/3600, 2) as duree_en_heures from activities_calls_meetings where activitytype in ( "Appel-sortant", "Reunion", "Appel-entrant") group by antenne, categoriesuivi, activitytype;

-- Tableau 3.B. – Nombre de démarches effectuées pour les patients selon l’équipe de suivi
select antenne, equipe, activitytype as statistic_class, count(fore_id) as nombre, round(SUM(TIME_TO_SEC(duration))/3600, 2) as duree_en_heures from activities_calls_meetings where activitytype in ( "Appel-sortant", "Reunion", "Appel-entrant") group by antenne, equipe, activitytype;

-- Tableau 3.C. – Nombre de démarches effectuées pour les patients selon le programme de logement
select antenne, programme, activitytype as statistic_class, count(fore_id) as nombre, round(SUM(TIME_TO_SEC(duration))/3600, 2) as duree_en_heures from activities_calls_meetings where activitytype in ( "Appel-sortant", "Reunion", "Appel-entrant") group by antenne, programme, activitytype;

-- Tableau 3.D. – Durée totale et moyenne des démarches effectuées pour les patients selon leur statut
select antenne, categoriesuivi, statistic_class, nombre, duree_en_heures, duree_en_heures/nombre as duree_moyenne
from ( 	select antenne, categoriesuivi, activitytype as statistic_class, count(fore_id) as nombre, round(SUM(TIME_TO_SEC(duration))/3600, 2) as duree_en_heures from activities_calls_meetings where activitytype in ( "Appel-sortant", "Reunion", "Appel-entrant") 
	group by antenne, categoriesuivi, activitytype 
)q
order by antenne, categoriesuivi, statistic_class;

-- Tableau 3.E. – Durée totale et moyenne des démarches effectuées pour les patients selon l’équipe de suivi
select antenne, equipe, statistic_class, nombre, duree_en_heures, duree_en_heures/nombre as duree_moyenne
from ( 	select antenne, equipe, activitytype as statistic_class, count(fore_id) as nombre, round(SUM(TIME_TO_SEC(duration))/3600, 2) as duree_en_heures from activities_calls_meetings where activitytype in ( "Appel-sortant", "Reunion", "Appel-entrant") group by antenne, equipe, activitytype )q
order by antenne, equipe, statistic_class;

-- Tableau 3.F. – Durée totale et moyenne démarches effectuées pour les patients selon le programme de logement
select antenne, programme, statistic_class, nombre, duree_en_heures, duree_en_heures/nombre as duree_moyenne
from ( 	select antenne, programme, activitytype as statistic_class, count(fore_id) as nombre, round(SUM(TIME_TO_SEC(duration))/3600, 2) as duree_en_heures from activities_calls_meetings where activitytype in ( "Appel-sortant", "Reunion", "Appel-entrant") group by antenne, programme, activitytype )q
order by antenne, programme, statistic_class;


-- Tableau 4 : Les 20 patients qui ont demandé le plus d’attention
select antenne, hash, sum(if(classe = 'activites', nombre, 0)) as nombre_activites, sum(if(classe = 'demarches', nombre, 0)) as nombre_demarche, sum(nombre) as total from
(
	select antenne, 'activites' as classe, hash, activitytype as statistic_class, count(fore_id) as nombre from activities_calls_meetings where reporttype not like 'recherche' and activitytype = "Activite-rue" group by antenne, hash
	union 
	select antenne, 'activites' as classe, hash, statistic_class, count(fora_id) as nombre from activities_calls_meetings fa inner join all_sub_activities asa on asa.fore_id = fa.fore_id where reporttype not like 'recherche' and activitytype = "Activite-rue" group by antenne, hash, statistic_class
	union 
	select antenne, 'demarches' as classe, hash, activitytype as statistic_class, count(fore_id) as nombre from activities_calls_meetings where activitytype in ( "Appel-sortant", "Reunion", "Appel-entrant") group by antenne, hash, activitytype
) q group by antenne, hash
order by total desc limit 20;

-- Tableau 5 : Répartition des activités et démarches au cours de l’année

-- Tableau 5.A. – Répartition des activités
select 'activites', mois, antenne, sum(nombre) as activites from
(
	select left(report_date, 7) as mois, antenne, count(fore_id) as nombre from activities_calls_meetings where reporttype not like 'recherche' and activitytype = "Activite-rue" group by antenne, left(report_date, 7)
	union 
	select left(report_date, 7), antenne, count(fora_id) as nombre from activities_calls_meetings fa inner join all_sub_activities asa on asa.fore_id = fa.fore_id where reporttype not like 'recherche' and activitytype = "Activite-rue" group by antenne, left(report_date, 7)
)q
group by antenne, mois
order by antenne, mois;

-- Tableau 5.B. – Répartition des démarches
select 'demarches', mois, antenne, sum(nombre) as demarches from
(
select left(report_date, 7) as mois, antenne, count(fore_id) as nombre from activities_calls_meetings where activitytype in ( "Appel-sortant", "Reunion", "Appel-entrant") group by antenne, left(report_date, 7)
)q
group by antenne, mois
order by antenne, mois;


-- Tableau 6 : Nombre de déménagements
-- out of scope metis


-- Tableau 7 : Nombre de personnes en « guidance intensive » ou « guidance de soutien » selon la COCOM
-- out of scope metis


-- Chapitre 2 : Données qui démontrent nos résultats en termes de logement
-- =======================================================================


-- Tableau 8 : Personnes passées de la rue en logement
-- out of scope metis


-- Tableau 9.A : Personnes totales en logement durable
-- TODO

select 
	count(r.hash) as 'Personnes ayant retrouvé un logement durable depuis 2006 (sans tenir compte rechutes)',
	sum(if(r.start like @refyearwc, 1, 0)) as 'Personnes ayant retrouvé un logement durable durant l\'année en cours (sans tenir compte rechutes)'
from 
(
	select  
		s.value as programme,
		p.hash,
		p.firstname,
		p.lastname,
		pi.start
	from 
	(
		select
			p.pati_id,
			min(pi.start) as minstart
		FROM
			patients as p
			inner join patients_information as pi on p.pati_id = pi.pati_id
			inner join suggestions as s on s.sugg_id = pi.sugg_id
			inner  join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
			inner  join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
		where
			s.path_string like "/patient/suivi/programme/housing-%"
			and pi.deleted_at is null
			and p.deleted_at is null
			and left(pi.start,4) >= "2006"
			
			and s_antenna.path_string like "/patient/suivi/antenne/%"
			and pi_antenna.deleted_at is null
			and s_antenna.value like @antenna 
			and pi.start <= COALESCE (pi_antenna.end, @refdate)
			and coalesce(pi.end, @refdate) >= coalesce(pi_antenna.start, @past) 

		group by p.pati_id
	) q 
	inner join patients as p on p.pati_id = q.pati_id
	inner join patients_information as pi on p.pati_id = pi.pati_id and pi.start = q.minstart
	inner join suggestions as s on s.sugg_id = pi.sugg_id
	where 
		s.path_string like "/patient/suivi/programme/housing-%"
		and pi.deleted_at is null
	order by s.value, start
) r;

-- Tableau 9.B : Personnes totales relogées

select 
	programme, 
	count(r.hash) as 'Personnes ayant retrouvé un logement durable depuis 2006 (sans tenir compte rechutes)',
	sum(if(r.start like @refyearwc, 1, 0)) as 'Personnes ayant retrouvé un logement durable durant l\'année en cours (sans tenir compte rechutes)'
from 
(
	select  
		s.value as programme,
		p.hash,
		p.firstname,
		p.lastname,
		pi.start
	from 
	(
		select
			p.pati_id,
			min(pi.start) as minstart
		FROM
			patients as p
			inner join patients_information as pi on p.pati_id = pi.pati_id
			inner join suggestions as s on s.sugg_id = pi.sugg_id
			inner  join patients_information pi_antenna on pi_antenna.pati_id = p.pati_id 
			inner  join suggestions s_antenna on s_antenna.sugg_id = pi_antenna.sugg_id 
		where
			s.path_string like "/patient/suivi/programme/housing-%"
			and pi.deleted_at is null
			and p.deleted_at is null
			and left(pi.start,4) >= "2006"
			
			and s_antenna.path_string like "/patient/suivi/antenne/%"
			and pi_antenna.deleted_at is null
			and s_antenna.value like @antenna 
			and pi.start <= COALESCE (pi_antenna.end, refdate())
			and coalesce(pi.end, refdate()) >= coalesce(pi_antenna.start, refdate()) 

		group by p.pati_id
	) q 
	inner join patients as p on p.pati_id = q.pati_id
	inner join patients_information as pi on p.pati_id = pi.pati_id and pi.start = q.minstart
	inner join suggestions as s on s.sugg_id = pi.sugg_id
	where
		s.path_string like "/patient/suivi/programme/housing-%"
		and pi.deleted_at is null
	order by s.value, start
) r
group by r.programme;


-- Tableau 10 : Types de logement
-- out of scope metis


-- Tableau 11 : Personnes stabilisées en logement

-- Tableau 11. A. Personnes passées en post-suivi en cours d’année
select count(*) as 'nombre' from patients_summary_on_refdate where statut = 'post-suivi' and year(statut_start) = year(refdate());
select * from patients_summary_on_refdate where statut = 'post-suivi' and year(statut_start) = year(refdate());

-- Tableau 11. B. – Total des personnes dans le post-suivi
select * from patients_summary_on_refdate where statut = 'post-suivi';


-- STATISTIQUES SOCIALES 

-- Chapitre 4 : Données qui démontrent nos résultats en termes de remise en ordre administrative

-- Tableau 12 : Personnes bénéficiant d’une adresse de référence ou d’un domicile légal
-- Tableau 12.A. Nombre de personnes bénéficiant d’une adresse de référence ou d’un domicile légal


-- Tableau 12.B. Nombre de personnes ayant bénéficié d’un accès à une adresse de référence ou à une domiciliation en cours de l’année de référence
-- Tableau 12.C. Nombre de démarches pour l’établissement d’une adresse de référence ou d’un domicile légal en cours de l’année de référence

-- Tableau 13 : Personnes bénéficiant d’une adresse de référence ou d’un domicile légal
-- Tableau 12.A. Nombre de personnes bénéficiant d’une adresse de référence ou d’un domicile légal
-- Tableau 12.B. Nombre de personnes ayant bénéficié d’un accès à une adresse de référence ou à une domiciliation en cours de l’année de référence
-- Tableau 12.C. Nombre de démarches pour l’établissement d’une adresse de référence ou d’un domicile légal en cours de l’année de référence

-- Tableau 14 : Personnes disposant d’une carte d’identité
-- Tableau 14.A. Nombre de personnes disposant d’une carte d’identité
-- Tableau 14.B. Nombre de personnes ayant bénéficié d’une carte d’identité en cours de l’année de référence
-- Tableau 14.C. Nombre de démarches pour l’émission d’une carte d’identité en cours de l’année de référence
-- Tableau 14.D. Nombre de déclarations de pertes de carte d’identité

-- Tableau 15 : Personnes disposant d’un titre de séjour
-- Tableau 15.A. Nombre de personnes disposant d’un titre de séjour
-- Tableau 15.B. Nombre de personnes ayant bénéficié d’un titre de séjour en cours de l’année de référence
-- Tableau 15.C. Nombre de démarches pour l’émission d’une carte de séjour en cours de l’année de référence
-- Tableau 15.D. Nombre de démarches de régularisation en cours de l’année de référence

-- Tableau 16 : Personnes bénéficiant d’un administrateur de biens
-- Tableau 16.A. Nombre de personnes bénéficiant d’un administrateur de biens
-- Tableau 16.B. Nombre de personnes ayant bénéficié d’un administrateur de biens en cours de l’année de référence
-- Tableau 16.C. Nombre de démarches pour la mise en place d’un administrateur de biens en cours de l’année de référence

-- Tableau 17 : Personnes ayant recours à une gestion de dettes
-- Tableau 17.A. Nombre de personnes bénéficiant d’une médiation de dettes et/ou d’un règlement collectif de dettes
-- Tableau 17.B. Nombre de personnes ayant eu une médiation de dettes et/ou à un règlement collectif de dettes en cours de l’année de référence
-- Tableau 17.C. Nombre de démarches pour la mise en place d’une médiation de dettes et/ou d’un règlement collectif de dettes en cours de l’année de référence

-- Tableau 18 : Personnes bénéficiant d’un accès à un revenu
-- Tableau 18.A. Nombre de personnes ayant bénéficié d’une allocation de relogement et/ou d’une prime d’installation en cours de l’année de référence
-- Tableau 18.A. Nombre de personnes bénéficiant d’un accès à un revenu
-- Tableau 18.A. Nombre de personnes ayant acquis un revenu en cours de l’année de référence
-- Tableau 18.B. Nombre de démarches pour l’établissement d’un type de revenu au cours de l’année de référence

-- Tableau 19 : Personnes bénéficiant d’une aide médicale du CPAS
-- Tableau 19.A. Nombre de personnes disposant d’une AMU ou d’une carte de santé
-- Tableau 19.B. Nombre de personnes ayant bénéficié d’une AMU ou d’une carte de santé en cours de l’année de référence
-- Tableau 19.C. Nombre de démarches pour la mise en place d’une AMU ou d’une Carte de santé en cours de l’année de référence

-- Tableau 20 : Personnes bénéficiant d’une mutuelle
-- Tableau 20.A. Nombre de personnes disposant d’une mutuelle
-- Tableau 20.B. Nombre de personnes ayant acquis une mutuelle en cours de l’année de référence
-- Tableau 20.C. Nombre de démarches pour la mise en place d’une mutuelle en cours de l’année de référence

-- Tableau 21 : Personnes bénéficiant d’un suivi médical
-- Tableau 21.A. Nombre de personnes ayant un médecin traitant ou un psychiatre
-- Tableau 21.B. Nombre de personnes ayant bénéficié d’un suivi médical par un médecin traitant ou un psychiatre au cours de l’année de référence


-- chapitre 5 : Données qui permettent de réaliser des études

-- Tableau 22 : Nationalités de nos patients
-- Tableau 22.A. - Données chiffrées sur toutes les nationalités selon le statut des patients

select statut, nationalite, count(hash) as nombre from patients_summary_on_refdate group by nationalite, statut;
select statut, nationalite, hash from patients_summary_on_refdate order by statut, nationalite;

-- Tableau 22.B. - Pourcentages de nationalités belges et étrangères
select statut, nationalite, count(hash) from
(
	select statut, if(nationalite = 'Belgique', 'Belgique', 'autre nationalité') as nationalite, hash from patients_summary_on_refdate
)q
group by statut, nationalite;

select statut, nationalite, hash from patients_summary_on_refdate order by statut, nationalite;


-- Tableau 22.C. - Données chiffrées sur toutes les nationalités selon le programme de logement des patients
-- TODO --

-- Tableau 23 : Sexe de nos patients
-- Tableau 23.A. - Données chiffrées sur le sexe selon le statut des patients
select statut, genre, count(hash) as nombre from patients_summary_on_refdate group by genre, statut;
select statut, genre, hash from patients_summary_on_refdate order by statut, genre;


-- Tableau 23.B. - Pourcentage sur le sexe
-- Tableau 23.C. - Données chiffrées sur le sexe selon le programme de logement des patients
-- TODO --


-- Tableau 24 : Age moyen de nos patients
-- Tableau 24.A. – Age des personnes dans le suivi
select 
	statut, 
	genre, 
	count(hash) as echantillon, 
	round(avg(age),1) AS 'Age moyen', 
	max(age) as 'Age maximum', 
	min(age) as 'Age minimum'
from patients_summary_on_refdate 
where 
	birthdate is NOT null
    and statut = 'En suivi'
group by statut, genre 
order by statut, genre;

-- Tableau 24.B. – Age des personnes du post-suivi
select 
	statut, 
	genre, 
	count(hash) as echantillon, 
	round(avg(age),1) AS 'Age moyen', 
	max(age) as 'Age maximum', 
	min(age) as 'Age minimum'
from patients_summary_on_refdate 
where 
	birthdate is NOT null
    and statut = 'Post-suivi'
group by statut, genre 
order by statut, genre;


-- Tableau 24.C. – Age des personnes en Housing First
select 
	programme,
    statut, 
	genre, 
	count(hash) as echantillon, 
	round(avg(age),1) AS 'Age moyen', 
	max(age) as 'Age maximum', 
	min(age) as 'Age minimum'
from patients_summary_on_refdate 
where 
	birthdate is NOT null
    and programme = 'Housing first'
group by statut, genre 
order by statut, genre;


-- Tableau 24.D. – Age des personnes en Housing Fast
select 
	programme,
    statut, 
	genre, 
	count(hash) as echantillon, 
	round(avg(age),1) AS 'Age moyen', 
	max(age) as 'Age maximum', 
	min(age) as 'Age minimum'
from patients_summary_on_refdate 
where 
	birthdate is NOT null
    and programme = 'Housing fast'
group by statut, genre 
order by statut, genre;

select 
	programme,
    statut, 
	genre, 
	if (statut = 'décédé', statut_start, null) as date_deces,
    birthdate,
    age
from patients_summary_on_refdate 
where 
	birthdate is NOT null
    and programme = 'Housing fast'
order by statut, genre;


-- Tableau 25 : Problèmes de santé et assuétudes
-- Tableau 25.A. – Problèmes de santé et assuétudes des patients en suivi
select 
	sum(a_min_1_pathologie_physique) as '# patient ayant au moins une pathologie physique', 
    sum(a_min_1_pathologie_mentale) as '# patient ayant au moins une pathologie mentale', 
	sum(a_min_1_assuetude_declaree) as '# patient ayant au moins une assuetude declaree' 
from pathologies_assuetudes_grouped_by_patient where statut = 'en suivi';

select * from pathologies_assuetudes_grouped_by_patient;

select * from (select * from patients_summary_on_refdate where statut = 'en suivi') p inner join pathologies_assuetudes pa on pa.pati_id = p.pati_id;


-- Tableau 25.B. – Problèmes de santé et assuétudes des patients en Housing First
select 
	sum(a_min_1_pathologie_physique) as '# patient ayant au moins une pathologie physique', 
    sum(a_min_1_pathologie_mentale) as '# patient ayant au moins une pathologie mentale', 
	sum(a_min_1_assuetude_declaree) as '# patient ayant au moins une assuetude declaree'
from pathologies_assuetudes_grouped_by_patient where programme = 'Housing First';

select * from pathologies_assuetudes_grouped_by_patient where programme = 'Housing First';

select * from (select * from patients_summary_on_refdate where programme = 'Housing First') p inner join pathologies_assuetudes pa on pa.pati_id = p.pati_id;


-- Tableau 25.C. – Problèmes de santé et assuétudes des patients en Housing Fast
select 
	sum(a_min_1_pathologie_physique) as '# patient ayant au moins une pathologie physique', 
    sum(a_min_1_pathologie_mentale) as '# patient ayant au moins une pathologie mentale', 
	sum(a_min_1_assuetude_declaree) as '# patient ayant au moins une assuetude declaree'
from pathologies_assuetudes_grouped_by_patient where programme = 'Housing Fast';

select * from pathologies_assuetudes_grouped_by_patient where programme = 'Housing Fast';

select * from (select * from patients_summary_on_refdate where programme = 'Housing Fast') p inner join pathologies_assuetudes pa on pa.pati_id = p.pati_id;


-- Tableau 26 : Identification des problèmes de santé physique chronique
-- Tableau 26.A. – Absence de problème de santé physique chronique des patients en suivi
select statut, 'Absence de problème de santé physique chronique' , count(hash) as nombre from (select * from patients_summary_on_refdate where statut = 'en suivi') p left join (select pati_id from pathologies_assuetudes where pathologies_physiques > 0 group by pati_id) pa on pa.pati_id = p.pati_id where pa.pati_id is null group by statut;
select statut, 'Absence de problème de santé physique chronique' , hash as nombre from (select * from patients_summary_on_refdate where statut = 'en suivi') p left join (select pati_id from pathologies_assuetudes where pathologies_physiques > 0 group by pati_id) pa on pa.pati_id = p.pati_id where pa.pati_id is null;

-- Tableau 26.B. – Identification des problèmes de santé physique chronique des patients en suivi
select statut, classe_probleme, probleme, count(paif_id) as nombre from (select * from patients_summary_on_refdate where statut = 'en suivi') p inner join pathologies_assuetudes pa on pa.pati_id = p.pati_id where classe_probleme = 'pathologies-physiques-chroniques' group by statut, classe_probleme, probleme;
select * from (select * from patients_summary_on_refdate where statut = 'en suivi') p inner join pathologies_assuetudes pa on pa.pati_id = p.pati_id where classe_probleme = 'pathologies-physiques-chroniques';

-- Tableau 26.C. – Absence de problème de santé physique chronique des patients en Housing First
select programme, 'Absence de problème de santé physique chronique' , count(hash) as nombre from (select * from patients_summary_on_refdate where programme = 'Housing First') p left join (select pati_id from pathologies_assuetudes where pathologies_physiques > 0 group by pati_id) pa on pa.pati_id = p.pati_id where pa.pati_id is null group by programme;
select programme, 'Absence de problème de santé physique chronique' , hash as nombre from (select * from patients_summary_on_refdate where programme = 'Housing First') p left join (select pati_id from pathologies_assuetudes where pathologies_physiques > 0 group by pati_id) pa on pa.pati_id = p.pati_id where pa.pati_id is null;

-- Tableau 26.D. – Identification des problèmes de santé physique chronique des patients Housing First
select statut, classe_probleme, probleme, count(paif_id) as nombre from (select * from patients_summary_on_refdate where programme = 'Housing First') p inner join pathologies_assuetudes pa on pa.pati_id = p.pati_id where classe_probleme = 'pathologies-physiques-chroniques' group by programme, classe_probleme, probleme;
select * from (select * from patients_summary_on_refdate where programme = 'Housing First') p inner join pathologies_assuetudes pa on pa.pati_id = p.pati_id where classe_probleme = 'pathologies-physiques-chroniques';

-- Tableau 27 : Identification des problèmes de santé mentale
-- Tableau 27.A : Absence de problèmes de santé mentale chez les patients en suivi
select statut, 'Absence de problème de santé mentale' , count(hash) as nombre from (select * from patients_summary_on_refdate where statut = 'en suivi') p left join (select pati_id from pathologies_assuetudes where pathologies_mentales > 0 group by pati_id) pa on pa.pati_id = p.pati_id where pa.pati_id is null group by statut;
select statut, 'Absence de problème de santé mentale' , hash as nombre from (select * from patients_summary_on_refdate where statut = 'en suivi') p left join (select pati_id from pathologies_assuetudes where pathologies_mentales > 0 group by pati_id) pa on pa.pati_id = p.pati_id where pa.pati_id is null;

-- Tableau 27.B. – Identification des problèmes de santé mentale chez les patients en suivi
select statut, classe_probleme, probleme, count(paif_id) as nombre from (select * from patients_summary_on_refdate where statut = 'en suivi') p inner join pathologies_assuetudes pa on pa.pati_id = p.pati_id where classe_probleme = 'pathologies-mentales' group by statut, classe_probleme, probleme;
select * from (select * from patients_summary_on_refdate where statut = 'en suivi') p inner join pathologies_assuetudes pa on pa.pati_id = p.pati_id where classe_probleme = 'pathologies-mentales';

-- Tableau 27.C. : Absence de problèmes de santé mentale chez les patients Housing First
select programme, 'Absence de problème de santé mentale' , count(hash) as nombre from (select * from patients_summary_on_refdate where programme = 'Housing First') p left join (select pati_id from pathologies_assuetudes where pathologies_mentales > 0 group by pati_id) pa on pa.pati_id = p.pati_id where pa.pati_id is null group by programme;
select programme, 'Absence de problème de santé mentale' , hash as nombre from (select * from patients_summary_on_refdate where programme = 'Housing First') p left join (select pati_id from pathologies_assuetudes where pathologies_mentales > 0 group by pati_id) pa on pa.pati_id = p.pati_id where pa.pati_id is null;

-- Tableau 27.D. – Identification des problèmes de santé mentale chez les patients Housing First
select programme, classe_probleme, probleme, count(paif_id) as nombre from (select * from patients_summary_on_refdate where programme = 'Housing First') p inner join pathologies_assuetudes pa on pa.pati_id = p.pati_id where classe_probleme = 'pathologies-mentales' group by programme, classe_probleme, probleme;
select * from (select * from patients_summary_on_refdate where programme = 'Housing First') p inner join pathologies_assuetudes pa on pa.pati_id = p.pati_id where classe_probleme = 'pathologies-mentales';

-- Tableau 28 : Identification des assuétudes déclarées
-- Tableau 28.A. – Absence d’assuétude déclarée chez les patients en suivi
-- 'assuetudes-declarees'

-- Tableau 28.B. – Identification des assuétudes déclarées chez les patients en suivi

-- Tableau 28.C. – Absence d’assuétude déclarée chez les patients Housing First

-- Tableau 28.D. – Identification des assuétudes déclarées chez les patients Housing First

-- Tableau 29 : Personnes décédées
-- Tableau 29.A. – Personnes décédées selon le statut

-- Tableau 29.B. – Personnes décédées selon l’équipe d’accompagnement

-- Tableau 29.C. – Personnes décédées selon le programme de logement

-- Tableau 30 : Nombre d’années en rue avant le logement

-- Tableau 31 : Collaboration avec d’autres associations

-- Tableau 32 : Nombre de personnes du post-suivi vers le suivi
-- Tableau 32.A – Nombre de personnes faisant au moins une rechute et pourcentage en comparant plusieurs années

-- Tableau 32.B. – Nombre de rechutes par patient sur une année

-- Tableau 32.C. – Nombre de personnes ayant rechuté en rue

-- Tableau 33 : Durée moyenne du suivi
-- Tableau 33.A. - Durée moyenne du pré-suivi, du suivi et du post-suivi, pour ceux qui ont quitté ces catégories

-- Tableau 33.B. - Durée moyenne du pré-suivi pour ceux qui y sont toujours

-- Tableau 33.C. - Durée moyenne du suivi pour ceux qui y sont toujours

-- Tableau 33.D. - Durée moyenne du suivi rue et suivi logement

-- Tableau 34 : Progression du CVC


