<?php

namespace App\Controller;

use PDO;
use mysqli;
use GuzzleHttp\Client;
use App\Entity\Patients;
use Doctrine\Persistence\ManagerRegistry;
use PhpParser\Node\Scalar\String_;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class StatistiquesController extends AbstractController
{
    const SERVERNAME = "51.75.124.242:3306";
    const USERNAME = "DoloresHaze";
    const PASSWORD = "Foutaise.1";
    const DBNAME = "metisapp";

    public $quarterstartdate;
    public $initDate;
    public $currentDate;
    public $refDate;
    public $antennainit;
    public $antenna;
    public $current_quarter;
    public $quarterenddate;
    public $query_date;
    public $startDate;
    public $nextyear0101;
    public $refYear;




    public function __construct(
        $quarterstartdate = null,
        $initDate = null,
        $currentDate = null,
        $refDate = null,
        $antennainit = 'Bruxelles',
        $antenna = null,
        $current_quarter = null,
        $quarterenddate = null,
        $query_date = null,
        $startDate = null,
        $nextyear0101 = null,
        $refYear = null
    ) {
        $initDate = 'referencedatesh';
        $currentDate = '2022-11-24';
        $refDate = ($initDate === 'referencedatesh') ? date('Y-m-d') : '2014-01-01';

        $antennainit = 'antennash';
        $antenna = ($antennainit === 'Liege') ? 'Liege' : 'Bruxelles';
        $current_quarter = ceil(date('n') / 3);
        $quarterstartdate = date('Y-m-d', strtotime(date('Y') . '-' . (($current_quarter * 3) - 2) . '-1'));
        $quarterenddate = date('Y-m-t', strtotime(date('Y') . '-' . (($current_quarter * 3)) . '-1'));
        $query_date = '2022-01-01';
        $startDate = date('Y-m-01', strtotime($query_date));
        $a_date = "2022-01-01";
        $endDate = date("Y-m-t", strtotime($a_date));
        $nextYear = date('Y', strtotime('+1 year'));

        $previousYear = date("Y", strtotime("-1 year"));
        $refyearwc = date('Y') . "%";
        $past = "1903-01-01";
        $nextyear0101 = $nextYear . "-01-01";
        $refYear = date('Y');

        // dd($refDate);



        $this->antennainit = $antennainit;
        $this->startDate = $startDate;
        $this->endDate = $endDate;
        $this->antenna = $antenna;
        $this->past = $past;
        $this->refDate = $refDate;
        $this->refyearwc = $refyearwc;
        $this->nextyear0101 = $nextyear0101;
        $this->refYear = $refYear;
    }

    #[Route('/api/statistiques140', name: 'app_statistiques140')]
    public function request140()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "  SELECT
                        s.value,
                        s.path_string,
                        pi.comment,
                        p.id,
                        p.hash,
                        p.firstname,
                        p.lastname
                    FROM
                        patients as p
                        inner join patients_information as pi on p.id = pi.pati_id
                        inner join suggestions as s on s.id = pi.sugg_id
                    where
                        (s.value like 'Autre')
                        and s.path_string like '%pathologies-physiques%'
                        and pi.end is null
                        and pi.deleted_at is null
                        and p.deleted_at is null
                    order by
                        s.value,
                        p.firstname,
                        p.lastname,
                        pi.start";

        $result = $conn->query($sql);




        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }


    // Indicators groups a rajouter many to many
    #[Route('/api/statistiques138', name: 'app_statistiques138')]
    public function request138()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "  SELECT 
                        state as 'Statut', 
                        m as 'Période', 
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
                                inner join followup_reports as fr on fr.pati_id = p.id 
                                inner JOIN followup_reports_indicators as fri on fri.fore_id = fr.fore_id 
                                inner join indicators as i on i.indi_id = fri.indi_id 
                                -- fix many to many for indicators
                                -- inner join indicators_indicators_groups as iig on iig.indi_id = i.indi_id
                                -- inner join indicators_groups as ig on ig.id = iig.id
                                inner join patients_information as pi on p.id = pi.pati_id 
                                inner join suggestions as s on s.id = pi.sugg_id 
                                left join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                                left join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                                
                            where 
                                p.deleted_at is null 
                                and left(fr.report_date, 4) = '" . $this->refYear . "' 
                                and (
                                    s.path_string like '/patient/fiche/statut-du-suivi/pre-suivi-actif'
                                    or s.path_string like '/patient/fiche/statut-du-suivi/en-suivi'
                                    or s.path_string like '/patient/fiche/statut-du-suivi/post-suivi'
                                    
                                ) 
                                and pi.deleted_at is null 
                                and (
                                    fr.report_date BETWEEN pi.start 
                                    and COALESCE(
                                        pi.end, 
                                        '" . $this->refDate . "'
                                    )
                                ) 
                                and ig.name = 'CVC'
                    
                    
                                and '" . $this->refDate . "' between coalesce(pi_antenna.start, '" . $this->past . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                                and s_antenna.path_string like '/patient/suivi/antenne/%'
                                and s_antenna.value like '" . $this->antenna . "'
                    
                            group by 
                                fr.fore_id, s.value, m
                        ) q 
                    group by 
                        state, 
                        m 
                    order by 
                        state, 
                        m";

        $result = $conn->query($sql);




        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques137', name: 'app_statistiques137')]
    public function request137()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "  SELECT
                        state as 'Statut', 
                        s.value as 'Equipe', 
                        q.hash
                    FROM 
                        (
                            SELECT 
                                p.id, 
                                p.hash,
                                p.lastname,
                                max(pi.start), 
                                s.value as state 
                            FROM 
                                patients as p 
                                inner join patients_information as pi on p.id = pi.pati_id 
                                inner join suggestions as s on s.id = pi.sugg_id 
                                left join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                                left join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                    
                            where 
                                (
                                    s.path_string like '/patient/fiche/statut-du-suivi/pre-suivi-actif'
                                    or s.path_string like '/patient/fiche/statut-du-suivi/en-suivi'
                                    or s.path_string like '/patient/fiche/statut-du-suivi/post-suivi'
                                ) 
                                and '" . $this->refDate . "' BETWEEN pi.start 
                                    and COALESCE(
                                        pi.end, 
                                        '" . $this->nextyear0101 . "'
                                    )
                                and pi.deleted_at is null 
                                and p.deleted_at is null
                    
                                and '" . $this->refDate . "' between coalesce(pi_antenna.start, '" . $this->past . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                                and s_antenna.path_string like '/patient/suivi/antenne/%'
                                and s_antenna.value like '" . $this->antenna . "'
                    
                            group by 
                                p.id, p.hash, p.lastname, s.value
                        ) q 
                        inner join patients_information as pi on q.id = pi.pati_id 
                        inner join suggestions as s on s.id = pi.sugg_id 
                    where 
                        s.path_string like '/patient/suivi/equipes/%' 
                        and '" . $this->refDate . "' BETWEEN pi.start and COALESCE(pi.end, '" . $this->nextyear0101 . "')
                        and pi.deleted_at is null 
                    order by 
                        state, 
                        s.value";

        $result = $conn->query($sql);




        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques136', name: 'app_statistiques136')]
    public function request136()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "  SELECT 
                    state as 'Statut', 
                    s.value as 'Equipe', 
                    count(q.id) as '# patients'
                FROM 
                    (
                        SELECT 
                            p.id, 
                            max(pi.start), 
                            s.value as state 
                        FROM 
                            patients as p 
                            inner join patients_information as pi on p.id = pi.pati_id 
                            inner join suggestions as s on s.id = pi.sugg_id 
                            left join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                            left join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                
                        where 
                            (
                                s.path_string like '/patient/fiche/statut-du-suivi/pre-suivi-actif'
                                or s.path_string like '/patient/fiche/statut-du-suivi/en-suivi'
                                or s.path_string like '/patient/fiche/statut-du-suivi/post-suivi'
                            ) 
                            and '" . $this->refDate . "' BETWEEN pi.start 
                                and COALESCE(
                                    pi.end, 
                                    '" . $this->nextyear0101 . "'
                                )
                            and pi.deleted_at is null 
                            and p.deleted_at is null
                
                            and '" . $this->refDate . "' between coalesce(pi_antenna.start, '" . $this->past . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                            and s_antenna.path_string like '/patient/suivi/antenne/%'
                            and s_antenna.value like '" . $this->antenna . "'
                
                        group by 
                            p.id, s.value
                    ) q 
                    inner join patients_information as pi on q.id = pi.pati_id 
                    inner join suggestions as s on s.id = pi.sugg_id 
                where 
                    s.path_string like '/patient/suivi/equipes/%' 
                    and '" . $this->refDate . "' BETWEEN pi.start and COALESCE(pi.end, '" . $this->nextyear0101 . "')
                    and pi.deleted_at is null 
                group by 
                    state, 
                    s.value
                order by 
                    state, 
                    s.value";

        $result = $conn->query($sql);




        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }
    #[Route('/api/statistiques135', name: 'app_statistiques135')]
    public function request135()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "  select 
                    q.hash, 
                    q.firstname,
                    q.lastname,
                    sum(to_days(pi2.end) - to_days(pi2.start))/ 365 as duration
                from 
                    (
                        SELECT 
                            p.firstname, 
                            p.lastname, 
                            p.id, 
                            p.hash, 
                            pi.start, 
                            pi.end, 
                            s.value 
                        FROM 
                            patients as p 
                            inner join patients_information as pi on p.id = pi.pati_id 
                            inner join suggestions as s on s.id = pi.sugg_id 
                            left join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                            left join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                        where 
                            s.path_string like '/patient/fiche/statut-du-suivi/post-suivi'
                            and pi.start is not null 
                            and '" . $this->refDate . "' BETWEEN pi.start 
                            and COALESCE(
                                pi.end, 
                                '" . $this->nextyear0101 . "'
                            )
                            and pi.deleted_at is null 
                            and p.deleted_at is null 

                            and '" . $this->refDate . "' between coalesce(pi_antenna.start, '" . $this->past . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                            and s_antenna.path_string like '/patient/suivi/antenne/%'
                            and s_antenna.value like '" . $this->antenna . "'
                        order by 
                            s.value, 
                            p.firstname, 
                            p.lastname, 
                            pi.start
                    ) q 
                    inner join patients as p2 on p2.id = q.id 
                    inner join patients_information as pi2 on q.id = pi2.pati_id 
                    inner join suggestions as s2 on s2.id = pi2.sugg_id 
                where 
                    s2.path_string like '/patient/fiche/statut-du-suivi/en-suivi'
                    and pi2.start is not null 
                    and pi2.deleted_at is null 
                    and p2.deleted_at is null 
                    and (
                        abs(to_days(q.start) - to_days(pi2.end)) < 7
                    ) 
                group by 
                    q.hash, q.firstname, q.lastname
                order by 
                    duration desc";

        $result = $conn->query($sql);




        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques134', name: 'app_statistiques134')]
    public function request134()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "  select 
                        REPLACE(CAST(format(
                            avg(r.duration) ,
                                    2
                                )  AS CHAR), '.', ',') as moyenne, 
                        REPLACE(CAST(format(
                            STDDEV(r.duration) ,
                                    2
                                )  AS CHAR), '.', ',') as ecarttype, 
                        REPLACE(CAST(format(
                            min(r.duration),
                                    2
                                )  AS CHAR), '.', ',') as minimum, 
                        REPLACE(CAST(format(
                            max(r.duration),
                                    2
                                )  AS CHAR), '.', ',') as maximum, 
                        count(r.duration) as echantillon 
                    from 
                        (
                            select 
                                q.hash, 
                                sum(to_days(pi2.end) - to_days(pi2.start))/ 365 as duration
                            from 
                                (
                                    SELECT 
                                        p.firstname, 
                                        p.lastname, 
                                        p.id, 
                                        p.hash, 
                                        pi.start, 
                                        pi.end, 
                                        s.value 
                                    FROM 
                                        patients as p 
                                        inner join patients_information as pi on p.id = pi.pati_id 
                                        inner join suggestions as s on s.id = pi.sugg_id 
                                        left join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                                        left join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                                    where 
                                        s.path_string like '/patient/fiche/statut-du-suivi/post-suivi'
                                        and pi.start is not null 
                                        and '" . $this->refDate . "' BETWEEN pi.start 
                                        and COALESCE(
                                            pi.end, 
                                            '" . $this->nextyear0101 . "'
                                        )
                                        and pi.deleted_at is null 
                                        and p.deleted_at is null 
                    
                                        and '" . $this->refDate . "' between coalesce(pi_antenna.start, '" . $this->past . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                                        and s_antenna.path_string like '/patient/suivi/antenne/%'
                                        and s_antenna.value like '" . $this->antenna . "'
                                    order by 
                                        s.value, 
                                        p.firstname, 
                                        p.lastname, 
                                        pi.start
                                ) q 
                                inner join patients as p2 on p2.id = q.id 
                                inner join patients_information as pi2 on q.id = pi2.pati_id 
                                inner join suggestions as s2 on s2.id = pi2.sugg_id 
                            where 
                                s2.path_string like '/patient/fiche/statut-du-suivi/en-suivi'
                                and pi2.start is not null 
                                and pi2.deleted_at is null 
                                and p2.deleted_at is null 
                                and (
                                    abs(to_days(q.start) - to_days(pi2.end)) < 7
                                ) 
                            group by 
                                q.hash 
                            order by 
                                duration desc
                        ) r";

        $result = $conn->query($sql);




        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques133', name: 'app_statistiques133')]
    public function request133()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "  select
                    q.firstname,
                    q.lastname,
                    q.hash as h,
                    q.value as qv,
                    q.start as qstart,
                    piend,
                    q.hash as qh,
                    count(q.hash) as qc,
                    q.value as s2status,
                    q.start as q2start,
                    REPLACE(CAST(format(
                        sum(to_days(piend) - to_days(q.start))/ 365,
                        2
                    )  AS CHAR), '.', ',')  as duration,
                    
                    case when sum(
                        to_days(piend) - to_days(q.start)
                    )/ 365 between 0.0
                    and 0.5 then 'a. 0-6 mois' when sum(
                        to_days(piend) - to_days(q.start)
                    )/ 365 between 0.5
                    and 1.0 then 'b. 6-12 mois' when sum(
                        to_days(piend) - to_days(q.start)
                    )/ 365 between 1.0
                    and 1.5 then 'c. 12-18mois' when sum(
                        to_days(piend) - to_days(q.start)
                    )/ 365 between 1.5
                    and 2.0 then 'd. 18-24 mois' when sum(
                        to_days(piend) - to_days(q.start)
                    )/ 365 between 2
                    and 3 then 'e. 2-3 ans' else 'f. plus de 3 ans' end as durationclass
                from
                    (
                        SELECT
                            p.firstname,
                            p.lastname,
                            p.id,
                            p.hash,
                            pi.start,
                            COALESCE(
                                pi.end,
                                '" . $this->refDate . "'
                            ) as piend,
                            s.value
                        FROM
                            patients as p
                            inner join patients_information as pi on p.id = pi.pati_id
                            inner join suggestions as s on s.id = pi.sugg_id
                            left join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                            left join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                            
                            
                        where
                            s.path_string like '/patient/fiche/statut-du-suivi/en-suivi'
                            and pi.start is not null
                            and '" . $this->refDate . "' BETWEEN pi.start 
                            and COALESCE(
                                pi.end, 
                                '" . $this->nextyear0101 . "'
                            )
                            and pi.deleted_at is null
                            and p.deleted_at is null

                            and '" . $this->refDate . "' between coalesce(pi_antenna.start, '" . $this->past . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                            and s_antenna.path_string like '/patient/suivi/antenne/%'
                            and s_antenna.value like '" . $this->antenna . "'

                        order by
                            s.value,
                            p.firstname,
                            p.lastname,
                            pi.start
                    ) q
                group by
                    q.hash,
                    q.lastname,
                    q.firstname,
                    q.value,
                    q.start,
                    piend,
                    q.hash,
                    q.value,
                    q.start
                order by
                    duration desc, q.hash";

        $result = $conn->query($sql);




        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques132', name: 'app_statistiques132')]
    public function request132()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "  select
                        durationclass as groupe,
                        REPLACE(CAST(format(
                            avg(r.duration),
                            2
                        )  AS CHAR), '.', ',')  as moyenne,
                        REPLACE(CAST(format(
                            STDDEV(r.duration),
                            2
                        ) AS CHAR), '.', ',') as ecart_type,
                        REPLACE(CAST(format(
                            min(r.duration),
                            2
                        ) AS CHAR), '.', ',')  as minimum,
                        REPLACE(CAST(format(
                            max(r.duration),
                            2
                        ) AS CHAR), '.', ',')  as maximum,
                        count(r.duration) as taille_echantillon
                    from
                        (
                            select
                                q.hash as h,
                                sum(
                                    to_days(piend) - to_days(q.start)
                                )/ 365 as duration,
                                case when sum(
                                    to_days(piend) - to_days(q.start)
                                )/ 365 between 0.0
                                and 0.5 then 'a. 0-6 mois' when sum(
                                    to_days(piend) - to_days(q.start)
                                )/ 365 between 0.5
                                and 1.0 then 'b. 6-12 mois' when sum(
                                    to_days(piend) - to_days(q.start)
                                )/ 365 between 1.0
                                and 1.5 then 'c. 12-18mois' when sum(
                                    to_days(piend) - to_days(q.start)
                                )/ 365 between 1.5
                                and 2.0 then 'd. 18-24 mois' when sum(
                                    to_days(piend) - to_days(q.start)
                                )/ 365 between 2
                                and 3 then 'e. 2-3 ans' else 'f. plus de 3 ans' end as durationclass
                            from
                                (
                                    SELECT
                                        p.firstname,
                                        p.lastname,
                                        p.id,
                                        p.hash,
                                        pi.start,
                                        COALESCE(
                                            pi.end,
                                            '" . $this->refDate . "'
                                        ) as piend,
                                        s.value
                                    FROM
                                        patients as p
                                        inner join patients_information as pi on p.id = pi.pati_id
                                        inner join suggestions as s on s.id = pi.sugg_id
                                        left join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                                        left join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                                    where
                                        s.path_string like '/patient/fiche/statut-du-suivi/en-suivi'
                                        and pi.start is not null
                                        and '" . $this->refDate . "' BETWEEN pi.start 
                                        and COALESCE(
                                            pi.end, 
                                            '" . $this->nextyear0101 . "'
                                        )
                                        and pi.deleted_at is null
                                        and p.deleted_at is null
                    
                                        and '" . $this->refDate . "' between coalesce(pi_antenna.start, '" . $this->past . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                                        and s_antenna.path_string like '/patient/suivi/antenne/%'
                                        and s_antenna.value like '" . $this->antenna . "'
                    
                                    order by
                                        s.value,
                                        p.firstname,
                                        p.lastname,
                                        pi.start
                                ) q
                            group by
                                q.hash
                            order by
                                duration desc
                        ) r
                    group by
                        durationclass
                    order by
                        durationclass";

        $result = $conn->query($sql);




        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques131', name: 'app_statistiques131')]
    public function request131()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "  select
                    q.firstname,
                    q.lastname,
                    q.hash as h,
                    count(q.hash) as qc,
                    REPLACE(CAST(format(
                        sum(to_days(piend) - to_days(q.start))/ 365,
                        2
                    )  AS CHAR), '.', ',')  as duration,
                    
                    case when sum(
                        to_days(piend) - to_days(q.start)
                    )/ 365 between 0.0
                    and 0.5 then 'a. 0-6 mois' when sum(
                        to_days(piend) - to_days(q.start)
                    )/ 365 between 0.5
                    and 1.0 then 'b. 6-12 mois' when sum(
                        to_days(piend) - to_days(q.start)
                    )/ 365 between 1.0
                    and 1.5 then 'c. 12-18mois' when sum(
                        to_days(piend) - to_days(q.start)
                    )/ 365 between 1.5
                    and 2.0 then 'd. 18-24 mois' when sum(
                        to_days(piend) - to_days(q.start)
                    )/ 365 between 2
                    and 3 then 'e. 2-3 ans' else 'f. plus de 3 ans' end as durationclass
                from
                    (
                        SELECT
                            p.firstname,
                            p.lastname,
                            p.id,
                            p.hash,
                            pi.start,
                            COALESCE(
                                pi.end,
                                '" . $this->refDate . "'
                            ) as piend,
                            s.value
                        FROM
                            patients as p
                            inner join patients_information as pi on p.id = pi.pati_id
                            inner join suggestions as s on s.id = pi.sugg_id
                        where
                            s.path_string like '/patient/fiche/statut-du-suivi/pre-suivi-actif'
                            and pi.start is not null
                            and '" . $this->refDate . "' BETWEEN pi.start 
                            and COALESCE(
                                pi.end, 
                                '" . $this->nextyear0101 . "'
                            )
                            and pi.deleted_at is null
                            and p.deleted_at is null
                        order by
                            s.value,
                            p.firstname,
                            p.lastname,
                            pi.start
                    ) q
                group by
                    q.hash,
                    q.firstname,
                    q.lastname
                order by
                    duration desc";

        $result = $conn->query($sql);




        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }


    #[Route('/api/statistiques130', name: 'app_statistiques130')]
    public function request130()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select
                    durationclass as groupe,
                    REPLACE(CAST(format(
                        avg(r.duration),
                        2
                    )  AS CHAR), '.', ',')  as moyenne,
                    REPLACE(CAST(format(
                        STDDEV(r.duration),
                        2
                    ) AS CHAR), '.', ',') as ecart_type,
                    REPLACE(CAST(format(
                        min(r.duration),
                        2
                    ) AS CHAR), '.', ',')  as minimum,
                    REPLACE(CAST(format(
                        max(r.duration),
                        2
                    ) AS CHAR), '.', ',')  as maximum,
                    count(r.duration) as taille_echantillon
                from
                    (
                        select
                            q.hash as h,
                            sum(
                                to_days(piend) - to_days(q.start)
                            )/ 365 as duration,
                            case when sum(
                                to_days(piend) - to_days(q.start)
                            )/ 365 between 0.0
                            and 0.5 then 'a. 0-6 mois' when sum(
                                to_days(piend) - to_days(q.start)
                            )/ 365 between 0.5
                            and 1.0 then 'b. 6-12 mois' when sum(
                                to_days(piend) - to_days(q.start)
                            )/ 365 between 1.0
                            and 1.5 then 'c. 12-18mois' when sum(
                                to_days(piend) - to_days(q.start)
                            )/ 365 between 1.5
                            and 2.0 then 'd. 18-24 mois' when sum(
                                to_days(piend) - to_days(q.start)
                            )/ 365 between 2
                            and 3 then 'e. 2-3 ans' else 'f. plus de 3 ans' end as durationclass
                        from
                            (
                                SELECT
                                    p.firstname,
                                    p.lastname,
                                    p.id,
                                    p.hash,
                                    pi.start,
                                    COALESCE(
                                        pi.end,
                                        '" . $this->refDate . "'
                                    ) as piend,
                                    s.value
                                FROM
                                    patients as p
                                    inner join patients_information as pi on p.id = pi.pati_id
                                    inner join suggestions as s on s.id = pi.sugg_id
                                    left join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                                    left join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                                where
                                    s.path_string like '/patient/fiche/statut-du-suivi/pre-suivi-actif'
                                    and pi.start is not null
                                    and '" . $this->refDate . "' BETWEEN pi.start 
                                    and COALESCE(
                                        pi.end, 
                                        '" . $this->nextyear0101 . "'
                                    )
                                    and pi.deleted_at is null
                                    and p.deleted_at is null
                
                                    and '" . $this->refDate . "' between coalesce(pi_antenna.start, '" . $this->past . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                                    and s_antenna.path_string like '/patient/suivi/antenne/%'
                                    and s_antenna.value like '" . $this->antenna . "'
                
                                order by
                                    s.value,
                                    p.firstname,
                                    p.lastname,
                                    pi.start
                            ) q
                        group by
                            q.hash
                        order by
                            duration desc
                    ) r
                group by
                    durationclass
                order by
                    durationclass";

        $result = $conn->query($sql);




        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques129', name: 'app_statistiques129')]
    public function request129()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select 
                    q.hash as h, 
                    q.value as qv, 
                    q.start as qstart, 
                    q.end as qend, 
                    q.hash as qh, 
                    count(q.hash) as qc, 
                    s2.value as s2status, 
                    pi2.start as q2start, 
                    pi2.end as q2end, 
                    sum(
                        to_days(pi2.end) - to_days(pi2.start)
                    )/ 365 as duration 
                from 
                    (
                        SELECT 
                            p.firstname, 
                            p.lastname, 
                            p.id, 
                            p.hash, 
                            pi.start, 
                            pi.end, 
                            s.value 
                        FROM 
                            patients as p 
                            inner join patients_information as pi on p.id = pi.pati_id 
                            inner join suggestions as s on s.id = pi.sugg_id 
                            left join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                            left join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                        where 
                            s.path_string like '/patient/fiche/statut-du-suivi/en-suivi'
                            and pi.start is not null 
                            and '" . $this->refDate . "' BETWEEN pi.start 
                            and COALESCE(
                                pi.end, 
                                '" . $this->nextyear0101 . "'
                            )
                            and pi.deleted_at is null 
                            and p.deleted_at is null 
                
                            and '" . $this->refDate . "' between coalesce(pi_antenna.start, '" . $this->past . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                            and s_antenna.path_string like '/patient/suivi/antenne/%'
                            and s_antenna.value like '" . $this->antenna . "'
                
                        order by 
                            s.value, 
                            p.firstname, 
                            p.lastname, 
                            pi.start
                    ) q 
                    inner join patients as p2 on p2.id = q.id 
                    inner join patients_information as pi2 on q.id = pi2.pati_id 
                    inner join suggestions as s2 on s2.id = pi2.sugg_id 
                where 
                    s2.path_string like '/patient/fiche/statut-du-suivi/pre-suivi-actif'
                    and pi2.start is not null 
                    and pi2.deleted_at is null 
                    and p2.deleted_at is null 
                    and (
                        abs(to_days(q.start) - to_days(pi2.end)) < 7
                    ) 
                group by 
                    q.hash, 
                    q.value, 
                    q.start, 
                    q.end, 
                    s2.value, 
                    pi2.start, 
                    pi2.end 
                order by 
                    duration desc";

        $result = $conn->query($sql);




        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques128', name: 'app_statistiques128')]
    public function request128()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select 
                    REPLACE(CAST(format(
                        avg(r.duration),
                        2
                    )  AS CHAR), '.', ',')  as moyenne,
                    REPLACE(CAST(format(
                        STDDEV(r.duration),
                        2
                    ) AS CHAR), '.', ',') as ecart_type,
                    REPLACE(CAST(format(
                        min(r.duration),
                        2
                    ) AS CHAR), '.', ',')  as minimum,
                    REPLACE(CAST(format(
                        max(r.duration),
                        2
                    ) AS CHAR), '.', ',')  as maximum,
                    count(r.duration) as taille_echantillon
                from 
                    (
                        select 
                            sum(
                                to_days(pi2.end) - to_days(pi2.start)
                            )/ 365 as duration 
                        from 
                            (
                                SELECT 
                                    p.firstname, 
                                    p.lastname, 
                                    p.id, 
                                    p.hash, 
                                    pi.start, 
                                    pi.end, 
                                    s.value 
                                FROM 
                                    patients as p 
                                    inner join patients_information as pi on p.id = pi.pati_id 
                                    inner join suggestions as s on s.id = pi.sugg_id 
                                    left join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                                    left join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                                where 
                                    s.path_string like '/patient/fiche/statut-du-suivi/en-suivi'
                                    and pi.start is not null 
                                    and '" . $this->refDate . "' BETWEEN pi.start 
                                    and COALESCE(
                                        pi.end, 
                                        '" . $this->nextyear0101 . "'
                                    )
                                    and pi.deleted_at is null 
                                    and p.deleted_at is null 
                
                                    and '" . $this->refDate . "' between coalesce(pi_antenna.start, '" . $this->past . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                                    and s_antenna.path_string like '/patient/suivi/antenne/%'
                                    and s_antenna.value like '" . $this->antenna . "'
                
                                order by 
                                    s.value, 
                                    p.firstname, 
                                    p.lastname, 
                                    pi.start
                            ) q 
                            inner join patients as p2 on p2.id = q.id 
                            inner join patients_information as pi2 on q.id = pi2.pati_id 
                            inner join suggestions as s2 on s2.id = pi2.sugg_id 
                        where 
                            s2.path_string like '/patient/fiche/statut-du-suivi/pre-suivi-actif'
                            and pi2.start is not null 
                            and pi2.deleted_at is null 
                            and p2.deleted_at is null 
                            and (
                                abs(to_days(q.start) - to_days(pi2.end)) < 7
                            ) 
                        group by 
                            q.hash 
                        order by 
                            duration desc
                    ) r";

        $result = $conn->query($sql);




        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques127', name: 'app_statistiques127')]
    public function request127()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select 
                    REPLACE(CAST(format(
                        avg(r.duration),
                        2
                    )  AS CHAR), '.', ',')  as moyenne,
                    REPLACE(CAST(format(
                        STDDEV(r.duration),
                        2
                    ) AS CHAR), '.', ',') as ecart_type,
                    REPLACE(CAST(format(
                        min(r.duration),
                        2
                    ) AS CHAR), '.', ',')  as minimum,
                    REPLACE(CAST(format(
                        max(r.duration),
                        2
                    ) AS CHAR), '.', ',')  as maximum,
                    count(r.duration) as taille_echantillon
                from 
                    (
                        select 
                            sum(
                                to_days(pi2.end) - to_days(pi2.start)
                            )/ 365 as duration 
                        from 
                            (
                                SELECT 
                                    p.firstname, 
                                    p.lastname, 
                                    p.id, 
                                    p.hash, 
                                    pi.start, 
                                    pi.end, 
                                    s.value 
                                FROM 
                                    patients as p 
                                    inner join patients_information as pi on p.id = pi.pati_id 
                                    inner join suggestions as s on s.id = pi.sugg_id 
                                    left join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                                    left join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                                where 
                                    s.path_string like '/patient/fiche/statut-du-suivi/post-suivi'
                                    and pi.start is not null 
                                    and '" . $this->refDate . "' BETWEEN pi.start 
                                    and COALESCE(
                                        pi.end, 
                                        '" . $this->nextyear0101 . "'
                                    )
                                    and pi.deleted_at is null 
                                    and p.deleted_at is null 
                
                                    and '" . $this->refDate . "' between coalesce(pi_antenna.start, '" . $this->past . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                                    and s_antenna.path_string like '/patient/suivi/antenne/%'
                                    and s_antenna.value like '" . $this->antenna . "'
                
                                order by 
                                    s.value, 
                                    p.firstname, 
                                    p.lastname, 
                                    pi.start
                            ) q 
                            inner join patients as p2 on p2.id = q.id 
                            inner join patients_information as pi2 on q.id = pi2.pati_id 
                            inner join suggestions as s2 on s2.id = pi2.sugg_id 
                        where 
                            s2.path_string like '/patient/fiche/statut-du-suivi/en-suivi'
                            and pi2.start is not null 
                            and pi2.deleted_at is null 
                            and p2.deleted_at is null 
                            and (
                                abs(to_days(q.start) - to_days(pi2.end)) < 7
                            ) 
                        group by 
                            q.hash 
                        order by 
                            duration desc
                    ) r";

        $result = $conn->query($sql);




        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques126', name: 'app_statistiques126')]
    public function request126()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select 
                    REPLACE(CAST(format(
                        avg(r.duration),
                        2
                    )  AS CHAR), '.', ',')  as moyenne,
                    REPLACE(CAST(format(
                        STDDEV(r.duration),
                        2
                    ) AS CHAR), '.', ',') as ecart_type,
                    REPLACE(CAST(format(
                        min(r.duration),
                        2
                    ) AS CHAR), '.', ',')  as minimum,
                    REPLACE(CAST(format(
                        max(r.duration),
                        2
                    ) AS CHAR), '.', ',')  as maximum,
                    count(r.duration) as taille_echantillon
                from 
                    (
                        select 
                            sum(
                                to_days(pi2.end) - to_days(pi2.start)
                            )/ 365 as duration 
                        from 
                            (
                                SELECT 
                                    p.firstname, 
                                    p.lastname, 
                                    p.id, 
                                    p.hash, 
                                    pi.start, 
                                    pi.end, 
                                    s.value 
                                FROM 
                                    patients as p 
                                    inner join patients_information as pi on p.id = pi.pati_id 
                                    inner join suggestions as s on s.id = pi.sugg_id 
                                    left join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                                    left join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                                where 
                                    s.path_string like '/patient/fiche/statut-du-suivi/post-suivi'
                                    and pi.start is not null 
                                    and '" . $this->refDate . "' BETWEEN pi.start 
                                    and COALESCE(
                                        pi.end, 
                                        '" . $this->nextyear0101 . "'
                                    )
                                    and pi.deleted_at is null 
                                    and p.deleted_at is null 
                
                                    and '" . $this->refDate . "' between coalesce(pi_antenna.start, '" . $this->past . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                                    and s_antenna.path_string like '/patient/suivi/antenne/%'
                                    and s_antenna.value like '" . $this->antenna . "'
                
                                order by 
                                    s.value, 
                                    p.firstname, 
                                    p.lastname, 
                                    pi.start
                            ) q 
                            inner join patients as p2 on p2.id = q.id 
                            inner join patients_information as pi2 on q.id = pi2.pati_id 
                            inner join suggestions as s2 on s2.id = pi2.sugg_id 
                        where 
                            s2.path_string like '/patient/fiche/statut-du-suivi/en-suivi'
                            and pi2.start is not null 
                            and pi2.deleted_at is null 
                            and p2.deleted_at is null 
                            and (
                                abs(to_days(q.start) - to_days(pi2.end)) < 7
                            ) 
                        group by 
                            q.hash 
                        order by 
                            duration desc
                    ) r";

        $result = $conn->query($sql);




        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques125', name: 'app_statistiques125')]
    public function request125()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select 
                    q.hash as h, 
                    q.value as qv, 
                    q.start as qstart, 
                    q.end as qend, 
                    q.hash as qh, 
                    count(q.hash) as qc, 
                    s2.value as s2status, 
                    pi2.start as q2start, 
                    pi2.end as q2end, 
                    sum(
                        to_days(pi2.end) - to_days(pi2.start)
                    )/ 365 as duration 
                from 
                    (
                        SELECT 
                            p.firstname, 
                            p.lastname, 
                            p.id, 
                            p.hash, 
                            pi.start, 
                            pi.end, 
                            s.value 
                        FROM 
                            patients as p 
                            inner join patients_information as pi on p.id = pi.pati_id 
                            inner join suggestions as s on s.id = pi.sugg_id 
                            left join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                            left join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                        where 
                            s.path_string like '/patient/fiche/statut-du-suivi/decede'
                            and pi.start is not null 
                            and '" . $this->refDate . "' BETWEEN pi.start 
                            and COALESCE(
                                pi.end, 
                                '" . $this->nextyear0101 . "'
                            )
                            and pi.deleted_at is null 
                            and p.deleted_at is null 
                
                            and '" . $this->refDate . "' between coalesce(pi_antenna.start, '" . $this->past . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                            and s_antenna.path_string like '/patient/suivi/antenne/%'
                            and s_antenna.value like '" . $this->antenna . "'
                
                        order by 
                            s.value, 
                            p.firstname, 
                            p.lastname, 
                            pi.start
                    ) q 
                    inner join patients as p2 on p2.id = q.id 
                    inner join patients_information as pi2 on q.id = pi2.pati_id 
                    inner join suggestions as s2 on s2.id = pi2.sugg_id 
                where 
                    s2.path_string like '/patient/fiche/statut-du-suivi/post-suivi'
                    and pi2.start is not null 
                    and pi2.deleted_at is null 
                    and p2.deleted_at is null 
                    and (
                        abs(to_days(q.start) - to_days(pi2.end)) < 7
                    ) 
                group by 
                    q.hash, 
                    q.value, 
                    q.start, 
                    q.end, 
                    s2.value, 
                    pi2.start, 
                    pi2.end 
                order by 
                    duration desc";

        $result = $conn->query($sql);




        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques124', name: 'app_statistiques124')]
    public function request124()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select 
                    REPLACE(CAST(format(
                        avg(r.duration),
                        2
                    )  AS CHAR), '.', ',')  as moyenne,
                    REPLACE(CAST(format(
                        STDDEV(r.duration),
                        2
                    ) AS CHAR), '.', ',') as ecart_type,
                    REPLACE(CAST(format(
                        min(r.duration),
                        2
                    ) AS CHAR), '.', ',')  as minimum,
                    REPLACE(CAST(format(
                        max(r.duration),
                        2
                    ) AS CHAR), '.', ',')  as maximum,
                    count(r.duration) as taille_echantillon
                from 
                    (
                        select 
                            sum(
                                to_days(pi2.end) - to_days(pi2.start)
                            )/ 365 as duration 
                        from 
                            (
                                SELECT 
                                    p.firstname, 
                                    p.lastname, 
                                    p.id, 
                                    p.hash, 
                                    pi.start, 
                                    pi.end, 
                                    s.value 
                                FROM 
                                    patients as p 
                                    inner join patients_information as pi on p.id = pi.pati_id 
                                    inner join suggestions as s on s.id = pi.sugg_id 
                                    left join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                                    left join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                                where 
                                    s.path_string like '/patient/fiche/statut-du-suivi/decede'
                                    and pi.start is not null 
                                    and '" . $this->refDate . "' BETWEEN pi.start 
                                    and COALESCE(
                                        pi.end, 
                                        '" . $this->nextyear0101 . "'
                                    )
                                    and pi.deleted_at is null 
                                    and p.deleted_at is null 
                
                                    and '" . $this->refDate . "' between coalesce(pi_antenna.start, '" . $this->past . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                                    and s_antenna.path_string like '/patient/suivi/antenne/%'
                                    and s_antenna.value like '" . $this->antenna . "'
                
                                order by 
                                    s.value, 
                                    p.firstname, 
                                    p.lastname, 
                                    pi.start
                            ) q 
                            inner join patients as p2 on p2.id = q.id 
                            inner join patients_information as pi2 on q.id = pi2.pati_id 
                            inner join suggestions as s2 on s2.id = pi2.sugg_id 
                        where 
                            s2.path_string like '/patient/fiche/statut-du-suivi/post-suivi'
                            and pi2.start is not null 
                            and pi2.deleted_at is null 
                            and p2.deleted_at is null 
                            and (
                                abs(to_days(q.start) - to_days(pi2.end)) < 7
                            ) 
                        group by 
                            q.hash 
                        order by 
                            duration desc
                    ) r";

        $result = $conn->query($sql);




        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques123', name: 'app_statistiques123')]
    public function request123()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select 
                    q.hash, 
                    q.firstname,
                    q.lastname,
                    pi_teamlog.end as 'fin suivi/postsuivi par team logement',
                    startofteamrue as 'debut suivi/postsuivi par team rue',
                    q.exstatus as 'statut de suivi'
                    
                from 
                    (
                        SELECT 
                            p.id as 'patientId', 
                            p.firstname, 
                            p.lastname, 
                            p.hash, 
                            pi.start, 
                            pi.id as 'patientInfosId',
                            pi_team.start as startofteamrue,
                            s.value as exstatus
                        FROM 
                            patients as p 
                            inner join patients_information as pi on p.id = pi.pati_id 
                            inner join suggestions as s on s.id = pi.sugg_id 
                            inner join patients_information as pi_team on p.id = pi_team.pati_id 
                            inner join suggestions as s_team on s_team.id = pi_team.sugg_id 
                            left join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                            left join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                        where
                            s_team.path_string like '/patient/suivi/equipes/equipe-rue' 
                            and pi_team.deleted_at is null 
                            and pi_team.start is not null 
                            and pi_team.start like '" . $this->refyearwc . "'
            
                            and (s.path_string like '/patient/fiche/statut-du-suivi/post-suivi' or s.path_string like '/patient/fiche/statut-du-suivi/en-suivi')
                            and pi.start is not null 
                            and pi.start < '" . $this->nextyear0101 . "' 
                            and coalesce(pi.end, '" . $this->refDate . "') >= concat('" . $this->refYear . "', '-01-01') 
                            and pi.deleted_at is null 
                            and p.deleted_at is null 
            
                            and '" . $this->refDate . "' between coalesce(pi_antenna.start, '" . $this->past . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                            and s_antenna.path_string like '/patient/suivi/antenne/%'
                            and s_antenna.value like '" . $this->antenna . "'
                            
                        order by 
                            s.value, 
                            p.firstname, 
                            p.lastname, 
                            pi.start
                    ) q 
                    inner join patients as p_teamlog on p_teamlog.id = q.patientId 
                    inner join patients_information as pi_teamlog on q.patientId = pi_teamlog.pati_id 
                    inner join suggestions as s_teamlog on s_teamlog.id = pi_teamlog.sugg_id 
                where 
                    s_teamlog.path_string like '/patient/suivi/equipes/equipe-log%'
                    and pi_teamlog.deleted_at is null 
                    and pi_teamlog.deleted_at is null 
                    and ABS(to_days(pi_teamlog.end) - to_days(q.startofteamrue)) < 2
                    and q.patientInfosId != pi_teamlog.id";

        $result = $conn->query($sql);




        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques122', name: 'app_statistiques122')]
    public function request122()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select 
                    count(hash) as 'nombre de rechutes en rue'
                from 
                (
                    select 
                    q.hash 
                    from 
                        (
                            SELECT 
                                p.id as 'patientsId', 
                                p.firstname, 
                                p.lastname, 
                                p.hash, 
                                pi.start, 
                                pi.id as 'patientInfosId',
                                pi_team.start as startofteamrue,
                                s.value as exstatus
                            FROM 
                                patients as p 
                                inner join patients_information as pi on p.id = pi.pati_id 
                                inner join suggestions as s on s.id = pi.sugg_id 
                                inner join patients_information as pi_team on p.id = pi_team.pati_id 
                                inner join suggestions as s_team on s_team.id = pi_team.sugg_id 
                                left join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                                left join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                            where
                                s_team.path_string like '/patient/suivi/equipes/equipe-rue' 
                                and pi_team.deleted_at is null 
                                and pi_team.start is not null 
                                and pi_team.start like '" . $this->refyearwc . "'
                
                                and (s.path_string like '/patient/fiche/statut-du-suivi/post-suivi' or s.path_string like '/patient/fiche/statut-du-suivi/en-suivi')
                                and pi.start is not null 
                                and pi.start < '" . $this->nextyear0101 . "' 
                                and coalesce(pi.end, '" . $this->refDate . "') >= concat('" . $this->refYear . "', '-01-01') 
                                and pi.deleted_at is null 
                                and p.deleted_at is null 
                
                                and '" . $this->refDate . "' between coalesce(pi_antenna.start, '" . $this->past . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                                and s_antenna.path_string like '/patient/suivi/antenne/%'
                                and s_antenna.value like '" . $this->antenna . "'
                                
                            order by 
                                s.value, 
                                p.firstname, 
                                p.lastname, 
                                pi.start
                        ) q 
                        inner join patients as p_teamlog on p_teamlog.id = q.patientsId 
                        inner join patients_information as pi_teamlog on q.patientsId = pi_teamlog.pati_id 
                        inner join suggestions as s_teamlog on s_teamlog.id = pi_teamlog.sugg_id 
                    where 
                        s_teamlog.path_string like '/patient/suivi/equipes/equipe-log%'
                        and pi_teamlog.deleted_at is null 
                        and pi_teamlog.deleted_at is null 
                        and ABS(to_days(pi_teamlog.end) - to_days(q.startofteamrue)) < 2
                        and q.patientInfosId != pi_teamlog.id
                
                    group by q.hash
                ) r";

        $result = $conn->query($sql);




        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques121', name: 'app_statistiques121')]
    public function request121()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select 
                    rechutes as 'nombre de rechutes',
                    count(patientsId) as 'nombre de patients'
                from 
                (
                    select 
                        q.patientsId ,
                        count(pi2.start) as rechutes
                    from 
                        (
                            SELECT 
                                p.id as 'patientsId', 
                                p.firstname, 
                                p.lastname, 
                                p.hash, 
                                pi.start, 
                                pi.end, 
                                pi.id as 'patientsInfosId',
                                s.value 
                            FROM 
                                patients as p 
                                inner join patients_information as pi on p.id = pi.pati_id 
                                inner join suggestions as s on s.id = pi.sugg_id 
                                left join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                                left join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                            where 
                                s.path_string like '/patient/fiche/statut-du-suivi/post-suivi' 
                                and pi.start is not null 
                                and pi.start < '" . $this->nextyear0101 . "' 
                                and coalesce(pi.end, '" . $this->refDate . "') >= concat('" . $this->refYear . "', '-01-01') 
                                and pi.deleted_at is null 
                                and p.deleted_at is null 
                
                                and '" . $this->refDate . "' between coalesce(pi_antenna.start, '" . $this->past . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                                and s_antenna.path_string like '/patient/suivi/antenne/%'
                                and s_antenna.value like '" . $this->antenna . "'
                                
                            order by 
                                s.value, 
                                p.firstname, 
                                p.lastname, 
                                pi.start
                        ) q 
                        inner join patients as p2 on p2.id = q.patientsId 
                        inner join patients_information as pi2 on q.patientsId = pi2.pati_id 
                        inner join suggestions as s2 on s2.id = pi2.sugg_id 
                    where 
                        s2.path_string like '/patient/fiche/statut-du-suivi/en-suivi%'
                        and pi2.deleted_at is null 
                        and p2.deleted_at is null 
                        and ABS(to_days(pi2.start) - to_days(q.end)) < 2
                        and q.patientsInfosId != pi2.id
                    group by 
                        q.patientsId 
                ) r
                group by rechutes";

        $result = $conn->query($sql);




        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques120', name: 'app_statistiques120')]
    public function request120()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select 
                    q.firstname, 
                    q.lastname, 
                    q.hash, 
                    q.start, 
                    q.end,
                    s2.value as suivirechute
                from 
                    (
                        SELECT 
                            p.id as 'patientsId', 
                            p.firstname, 
                            p.lastname, 
                            p.hash, 
                            pi.start, 
                            pi.end, 
                            pi.id  as 'patientInfosId',
                            s.value 
                        FROM 
                            patients as p 
                            inner join patients_information as pi on p.id = pi.pati_id 
                            inner join suggestions as s on s.id = pi.sugg_id 
                            left join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                            left join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                        where 
                            s.path_string like '/patient/fiche/statut-du-suivi/post-suivi'
                            and pi.start is not null 
                            and pi.start < '" . $this->nextyear0101 . "' 
                            and coalesce(pi.end, '" . $this->refDate . "') >= concat('" . $this->refYear . "', '-01-01') 
                            and pi.deleted_at is null 
                            and p.deleted_at is null 
                
                            and '" . $this->refDate . "' between coalesce(pi_antenna.start, '" . $this->past . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                            and s_antenna.path_string like '/patient/suivi/antenne/%'
                            and s_antenna.value like '" . $this->antenna . "'
                            
                        order by 
                            s.value, 
                            p.firstname, 
                            p.lastname, 
                            pi.start
                    ) q 
                    inner join patients as p2 on p2.id = q.patientsId 
                    inner join patients_information as pi2 on q.patientsId = pi2.pati_id 
                    inner join suggestions as s2 on s2.id = pi2.sugg_id 
                where 
                    s2.path_string like '/patient/fiche/statut-du-suivi/%'
                    and pi2.deleted_at is null 
                    and p2.deleted_at is null 
                    and ABS(to_days(pi2.start) - to_days(q.end)) < 2
                    and q.patientInfosId != pi2.id";

        $result = $conn->query($sql);




        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques119', name: 'app_statistiques119')]
    public function request119()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select 
                    q.firstname, 
                    q.lastname, 
                    q.hash, 
                    q.start, 
                    q.end,
                    s2.value as suivirechute
                from 
                    (
                        SELECT 
                            p.id as 'patientsId', 
                            p.firstname, 
                            p.lastname, 
                            p.hash, 
                            pi.start, 
                            pi.end, 
                            pi.id as 'patientsInfosId',
                            s.value 
                        FROM 
                            patients as p 
                            inner join patients_information as pi on p.id = pi.pati_id 
                            inner join suggestions as s on s.id = pi.sugg_id 
                            left join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                            left join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                        where 
                            s.path_string like '/patient/fiche/statut-du-suivi/post-suivi' 
                            and pi.start is not null 
                            and pi.start < '" . $this->nextyear0101 . "' 
                            and coalesce(pi.end, '" . $this->refDate . "') >= concat('" . $this->refYear . "', '-01-01') 
                            and pi.deleted_at is null 
                            and p.deleted_at is null 
                
                            and '" . $this->refDate . "' between coalesce(pi_antenna.start, '" . $this->past . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                            and s_antenna.path_string like '/patient/suivi/antenne/%'
                            and s_antenna.value like '" . $this->antenna . "'
                            
                        order by 
                            s.value, 
                            p.firstname, 
                            p.lastname, 
                            pi.start
                    ) q 
                    inner join patients as p2 on p2.id = q.patientsId 
                    inner join patients_information as pi2 on q.patientsId = pi2.pati_id 
                    inner join suggestions as s2 on s2.id = pi2.sugg_id 
                where 
                    s2.path_string like '/patient/fiche/statut-du-suivi/en-suivi%'
                    and pi2.deleted_at is null 
                    and p2.deleted_at is null 
                    and ABS(to_days(pi2.start) - to_days(q.end)) < 2
                    and q.patientsInfosId != pi2.id";

        $result = $conn->query($sql);




        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques118', name: 'app_statistiques118')]
    public function request118()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select 
                    count(distinct q.patientsId) as 'nombre de patient ayant rechuté vers le suivi' 
                from 
                    (
                        SELECT 
                            p.id as 'patientsId', 
                            p.firstname, 
                            p.lastname, 
                            p.hash, 
                            pi.start, 
                            pi.end, 
                            pi.id 'patientsInfosId',
                            s.value 
                        FROM 
                            patients as p 
                            inner join patients_information as pi on p.id = pi.pati_id 
                            inner join suggestions as s on s.id = pi.sugg_id 
                            left join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                            left join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                        where 
                            s.path_string like '/patient/fiche/statut-du-suivi/post-suivi' 
                            and pi.start is not null 
                            and pi.start < '" . $this->nextyear0101 . "' 
                            and coalesce(pi.end, '" . $this->refDate . "') >= concat('" . $this->refYear . "', '-01-01') 
                            and pi.deleted_at is null 
                            and p.deleted_at is null 
                
                            and '" . $this->refDate . "' between coalesce(pi_antenna.start, '" . $this->past . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                            and s_antenna.path_string like '/patient/suivi/antenne/%'
                            and s_antenna.value like '" . $this->antenna . "'
                            
                        order by 
                            s.value, 
                            p.firstname, 
                            p.lastname, 
                            pi.start
                    ) q 
                    inner join patients as p2 on p2.id = q.patientsId 
                    inner join patients_information as pi2 on q.patientsId = pi2.pati_id 
                    inner join suggestions as s2 on s2.id = pi2.sugg_id 
                where 
                    s2.path_string like '/patient/fiche/statut-du-suivi/en-suivi%' 
                    and pi2.deleted_at is null 
                    and p2.deleted_at is null 
                    and ABS(to_days(pi2.start) - to_days(q.end)) < 2
                    and q.patientsInfosId != pi2.id";

        $result = $conn->query($sql);




        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques117', name: 'app_statistiques117')]
    public function request117()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select
                    travaillepour,
                    sum(agents),
                    sum(appelsentrants_contact) as appelsentrants,
                    sum(appelssortants_contact) as appelssortants,
                    sum(reunions_contact) as reunions,
                    sum(total_activites_contact) as total_activites
                from
                (
                    select 
                        travaillepour,
                        nom,
                        count(distinct agent_id) as agents,
                        sum( appelentrant_contact ) as appelsentrants_contact,
                        sum( appelsortant_contact ) as appelssortants_contact,
                        sum( reunion_contact ) as reunions_contact,
                        count(activity_contact) as total_activites_contact
                    from
                    (
                        SELECT
                            if (contacts.orga_id is null,
                                    concat(
                                        trim(
                                            COALESCE(contacts.firstname, '')
                                        ),
                                        if ( trim(COALESCE(contacts.firstname, '')) = '', '', ''),
                                        trim(
                                            COALESCE(contacts.lastname, '')
                                        )
                                    ),
                                    concat(
                                        trim(
                                            COALESCE(orga.firstname, '')
                                        ),
                                        if ( trim(COALESCE(orga.firstname, '')) = '', '', ''),
                                        trim(
                                            COALESCE(orga.lastname, '')
                                        )
                                    )
                            ) as travaillepour,
                            case contacts.type when 1 then 'Personne morale' when 2 then 'Personne physique' end as activite,
                            concat(
                                trim(
                                    COALESCE(contacts.firstname, '')
                                ),
                                if ( trim(COALESCE(contacts.firstname, '')) = '', '', ''),
                                trim(
                                    COALESCE(contacts.lastname, '')
                                )
                            ) as nom,
                            contacts.id as agent_id,
                            if (
                                followup_reports.activity_type = 4,
                                1, 0
                            ) as appelentrant_contact,
                            if (
                                followup_reports.activity_type = 2,
                                1, 0
                            ) as appelsortant_contact,
                            if (
                                followup_reports.activity_type = 3,
                                1, 0
                            ) as reunion_contact,
                            followup_reports.id as activity_contact
                        FROM
                            patients p
                            inner join followup_reports on followup_reports.pati_id = p.id
                            inner join followup_report_contact on followup_reports.id = followup_report_contact.fore_id
                            inner join contacts on followup_report_contact.cont_id = contacts.id
                            left join contacts orga on contacts.orga_id = orga.id
                            left join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                            left join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                        where
                            p.deleted_at is null
                            and followup_reports.deleted_at is null
                            and followup_reports.activity_type in (2, 3, 4)
                            and followup_reports.report_date like '" . $this->refyearwc . "'
                                    
                            and '" . $this->refDate . "' between coalesce(pi_antenna.start, '" . $this->past . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                            and s_antenna.path_string like '/patient/suivi/antenne/%'
                            and s_antenna.value like '" . $this->antenna . "'
                    ) r
                    group by travaillepour, nom
                ) q
                group by
                    travaillepour
                order by
                    total_activites desc";

        $result = $conn->query($sql);




        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques116', name: 'app_statistiques116')]
    public function request116()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select
                    dcd.patientsId,
                    dcd.hash as h,
                    dcd.firstname,
                    dcd.lastname,
                    dcd.start as dcdstart,
                    coalesce(programme.value, '--inconnue--') as equipe,
                    programme.start as programme_start,
                    coalesce(programme.end, dcd.start) as programme_end,
                    ( to_days(dcd.start) - to_days(coalesce(programme.end, dcd.start) ) ) 
                from
                    (
                        SELECT
                            p.id as 'patientsId',
                            p.hash,
                            p.firstname,
                            p.lastname,
                            pi.start,
                            pi.id as 'patientsInfosId'
                        FROM
                            patients as p
                            inner join patients_information as pi on p.id = pi.pati_id
                            inner join suggestions as s on s.id = pi.sugg_id
                            left join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                            left join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                        where
                            s.path_string like '/patient/fiche/statut-du-suivi/decede'
                            and pi.start is not null
                            and pi.start like '" . $this->refyearwc . "'
                            and pi.end is null
                            and pi.deleted_at is null
                            and p.deleted_at is null
                            and '" . $this->refDate . "' between coalesce(pi_antenna.start, '" . $this->past . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                            and s_antenna.path_string like '/patient/suivi/antenne/%'
                            and s_antenna.value like '" . $this->antenna . "'
                    ) dcd
                    left join 
                    (
                        select
                            p.id, pi_programme.start, pi_programme.end, s_programme.value
                        from 
                            patients as p
                            left join patients_information as pi_programme on p.id = pi_programme.id
                            left join suggestions as s_programme on s_programme.id = pi_programme.sugg_id
                        where
                            s_programme.path_string like '/patient/suivi/programme%'
                            and pi_programme.start is not null
                            and pi_programme.deleted_at is null
                            and p.deleted_at is null
                    ) programme on programme.id = dcd.patientsId
                where 
                    programme.value is null or 
                    (to_days(dcd.start) - to_days(coalesce(programme.end, dcd.start))) < 7";

        $result = $conn->query($sql);




        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques115', name: 'app_statistiques115')]
    public function request115()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select
                    dcd.patientsId,
                    dcd.hash as h,
                    dcd.firstname,
                    dcd.lastname,
                    dcd.start as dcdstart,
                    coalesce(team.value, '--inconnue--') as equipe,
                    team.start as team_start,
                    coalesce(team.end, dcd.start) as team_end,
                    ( to_days(dcd.start) - to_days(coalesce(team.end, dcd.start) ) ) 
                from
                    (
                        SELECT
                            p.id as 'patientsId',
                            p.hash,
                            p.firstname,
                            p.lastname,
                            pi.start,
                            pi.id as 'patientsInfosId'
                        FROM
                            patients as p
                            inner join patients_information as pi on p.id = pi.pati_id
                            inner join suggestions as s on s.id = pi.sugg_id
                            left join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                            left join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                        where
                            s.path_string like '/patient/fiche/statut-du-suivi/decede'
                            and pi.start is not null
                            and pi.start like '" . $this->refyearwc . "'
                            and pi.end is null
                            and pi.deleted_at is null
                            and p.deleted_at is null
                            and '" . $this->refDate . "' between coalesce(pi_antenna.start, '" . $this->past . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                            and s_antenna.path_string like '/patient/suivi/antenne/%'
                            and s_antenna.value like '" . $this->antenna . "'
                    ) dcd
                    left join 
                    (
                        select
                            p.id, pi_team.start, pi_team.end, s_team.value
                        from 
                            patients as p
                            left join patients_information as pi_team on p.id = pi_team.id
                            left join suggestions as s_team on s_team.id = pi_team.sugg_id
                        where
                            s_team.path_string like '/patient/suivi/equipe%'
                            and pi_team.start is not null
                            and pi_team.deleted_at is null
                            and p.deleted_at is null
                    ) team on team.id = dcd.patientsId
                where 
                    team.value is null or 
                    (to_days(dcd.start) - to_days(coalesce(team.end, dcd.start))) < 7";

        $result = $conn->query($sql);




        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques114', name: 'app_statistiques114')]
    public function request114()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select
                    dcd.patientsId,
                    dcd.hash as h,
                    dcd.firstname,
                    dcd.lastname,
                    dcd.start as dcdstart,
                    coalesce(team.value, '--inconnue--') as equipe,
                    team.start as team_start,
                    coalesce(team.end, dcd.start) as team_end,
                    ( to_days(dcd.start) - to_days(coalesce(team.end, dcd.start) ) ) 
                from
                    (
                        SELECT
                            p.id as 'patientsId',
                            p.hash,
                            p.firstname,
                            p.lastname,
                            pi.start,
                            pi.id as 'patientsInfosId'
                        FROM
                            patients as p
                            inner join patients_information as pi on p.id = pi.pati_id
                            inner join suggestions as s on s.id = pi.sugg_id
                            left join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                            left join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                        where
                            s.path_string like '/patient/fiche/statut-du-suivi/decede'
                            and pi.start is not null
                            and pi.start like '" . $this->refyearwc . "'
                            and pi.end is null
                            and pi.deleted_at is null
                            and p.deleted_at is null
                            and '" . $this->refDate . "' between coalesce(pi_antenna.start, '" . $this->past . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                            and s_antenna.path_string like '/patient/suivi/antenne/%'
                            and s_antenna.value like '" . $this->antenna . "'
                    ) dcd
                    left join 
                    (
                        select
                            p.id, pi_team.start, pi_team.end, s_team.value
                        from 
                            patients as p
                            left join patients_information as pi_team on p.id = pi_team.id
                            left join suggestions as s_team on s_team.id = pi_team.sugg_id
                        where
                            s_team.path_string like '/patient/suivi/equipe%'
                            and pi_team.start is not null
                            and pi_team.deleted_at is null
                            and p.deleted_at is null
                    ) team on team.id = dcd.patientsId
                where 
                    team.value is null or 
                    (to_days(dcd.start) - to_days(coalesce(team.end, dcd.start))) < 7";

        $result = $conn->query($sql);




        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques113', name: 'app_statistiques113')]
    public function request113()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select
                    coalesce(team.value, '--inconnue--') as equipe,
                    count(dcd.patientId) as nombre
                from
                    (
                        SELECT
                            p.id as 'patientId',
                            p.hash,
                            p.firstname,
                            p.lastname,
                            pi.start,
                            pi.id as 'patientInfoId'
                        FROM
                            patients as p
                            inner join patients_information as pi on p.id = pi.pati_id
                            inner join suggestions as s on s.id = pi.sugg_id
                            left join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                            left join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                        where
                            s.path_string like '/patient/fiche/statut-du-suivi/decede'
                            and pi.start is not null
                            and pi.start like '" . $this->refyearwc . "'
                            and pi.end is null
                            and pi.deleted_at is null
                            and p.deleted_at is null
                            and '" . $this->refDate . "' between coalesce(pi_antenna.start, '" . $this->past . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                            and s_antenna.path_string like '/patient/suivi/antenne/%'
                            and s_antenna.value like '" . $this->antenna . "'
                    ) dcd
                    left join 
                    (
                        select
                            p.id, pi_team.start, pi_team.end, s_team.value
                        from 
                            patients as p
                            left join patients_information as pi_team on p.id = pi_team.id
                            left join suggestions as s_team on s_team.id = pi_team.sugg_id
                        where
                            s_team.path_string like '/patient/suivi/equipe%'
                            and pi_team.start is not null
                            and pi_team.deleted_at is null
                            and p.deleted_at is null
                    ) team on team.id = dcd.patientId
                where 
                    team.value is null or 
                    (to_days(dcd.start) - to_days(coalesce(team.end, dcd.start))) < 7
                group by equipe";

        $result = $conn->query($sql);




        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques112', name: 'app_statistiques112')]
    public function request112()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select
                    dcd.patientsId,
                    dcd.hash as h,
                    dcd.firstname,
                    dcd.lastname,
                    dcd.start as dcdstart,
                    coalesce(laststate.value, '--inconnue--') as equipe,
                    laststate.start as laststate_start,
                    coalesce(laststate.end, dcd.start) as laststate_end,
                    ( to_days(dcd.start) - to_days(coalesce(laststate.end, dcd.start) ) ) 
                from
                    (
                        SELECT
                            p.id as 'patientsId',
                            p.hash,
                            p.firstname,
                            p.lastname,
                            pi.start,
                            pi.id as 'patientsInfosId'
                        FROM
                            patients as p
                            inner join patients_information as pi on p.id = pi.pati_id
                            inner join suggestions as s on s.id = pi.sugg_id
                            left join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                            left join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                        where
                            s.path_string like '/patient/fiche/statut-du-suivi/decede'
                            and pi.start is not null
                            and pi.start like '" . $this->refyearwc . "'
                            and pi.end is null
                            and pi.deleted_at is null
                            and p.deleted_at is null
                            and '" . $this->refDate . "' between coalesce(pi_antenna.start, '" . $this->past . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                            and s_antenna.path_string like '/patient/suivi/antenne/%'
                            and s_antenna.value like '" . $this->antenna . "'
                    ) dcd
                    left join 
                    (
                        select
                            p.id, pi_laststate.start, pi_laststate.end, s_laststate.value
                        from 
                            patients as p
                            left join patients_information as pi_laststate on p.id = pi_laststate.id
                            left join suggestions as s_laststate on s_laststate.id = pi_laststate.sugg_id
                        where
                            s_laststate.path_string like '/patient/fiche/statut-du-suivi/%'
                            and s_laststate.path_string not like '/patient/fiche/statut-du-suivi/decede'
                            and pi_laststate.start is not null
                            and pi_laststate.deleted_at is null
                            and p.deleted_at is null
                    ) laststate on laststate.id = dcd.patientsId
                where 
                    laststate.value is null or 
                    (to_days(dcd.start) - to_days(coalesce(laststate.end, dcd.start))) < 7";

        $result = $conn->query($sql);




        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques111', name: 'app_statistiques111')]
    public function request111()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select
                    coalesce(laststate.value, '--inconnue--') as dernierstatut,
                    count(dcd.patientId) as nombre
                from
                    (
                        SELECT
                            p.id as 'patientId',
                            p.hash,
                            p.firstname,
                            p.lastname,
                            pi.start,
                            pi.id as 'patientInfosId'
                        FROM
                            patients as p
                            inner join patients_information as pi on p.id = pi.pati_id
                            inner join suggestions as s on s.id = pi.sugg_id
                            left join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                            left join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                        where
                            s.path_string like '/patient/fiche/statut-du-suivi/decede'
                            and pi.start is not null
                            and pi.start like '" . $this->refyearwc . "'
                            and pi.end is null
                            and pi.deleted_at is null
                            and p.deleted_at is null
                            and '" . $this->refDate . "' between coalesce(pi_antenna.start, '" . $this->past . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                            and s_antenna.path_string like '/patient/suivi/antenne/%'
                            and s_antenna.value like '" . $this->antenna . "'
                    ) dcd
                    left join 
                    (
                        select
                            p.id, pi_laststate.start, pi_laststate.end, s_laststate.value
                        from 
                            patients as p
                            left join patients_information as pi_laststate on p.id = pi_laststate.id
                            left join suggestions as s_laststate on s_laststate.id = pi_laststate.sugg_id
                        where
                            s_laststate.path_string like '/patient/fiche/statut-du-suivi/%'
                            and s_laststate.path_string not like '/patient/fiche/statut-du-suivi/decede'
                            and pi_laststate.start is not null
                            and pi_laststate.deleted_at is null
                            and p.deleted_at is null
                    ) laststate on laststate.id = dcd.patientId
                where 
                    laststate.value is null or 
                    (to_days(dcd.start) - to_days(coalesce(laststate.end, dcd.start))) < 7
                group by dernierstatut";

        $result = $conn->query($sql);




        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques110', name: 'app_statistiques110')]
    public function request110()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select 
                    coalesce(path.category, '--inconnu--') as category,
                    coalesce(path.problem, '--inconnu--') as problem,
                    p.hash
                from 
                    patients p 
                    inner join 
                    (
                        select
                            p.id,
                            s.value as programme
                        FROM
                            patients as p
                            inner join patients_information as pi on p.id = pi.pati_id
                            inner join suggestions as s on s.id = pi.sugg_id
                            inner  join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                            inner  join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                            inner join patients_information as pi_stat on p.id = pi_stat.pati_id 
                            inner join suggestions as s_stat on s_stat.id = pi_stat.sugg_id 
                        where
                            s.path_string like '/patient/suivi/programme/housing-first'
                            and pi.deleted_at is null
                            and p.deleted_at is null
                            and '" . $this->refDate . "' BETWEEN coalesce(pi.start, '" . $this->past . "') and COALESCE(pi.end, '" . $this->refDate . "')
                            
                            and s_antenna.path_string like '/patient/suivi/antenne/%'
                            and pi_antenna.deleted_at is null
                            and s_antenna.value like '" . $this->antenna . "' 
                            and pi.start <= COALESCE (pi_antenna.end, '" . $this->refDate . "')
                            and coalesce(pi.end, '" . $this->refDate . "') >= coalesce(pi_antenna.start, '" . $this->past . "') 
                
                            and s_stat.path_string like '/patient/fiche/statut-du-suivi/%'
                            and s_stat.path_string not like '/patient/fiche/statut-du-suivi/decede'
                            and '" . $this->refDate . "' between COALESCE(pi_stat.start, '" . $this->past . "') and COALESCE (pi_stat.end, '" . $this->nextyear0101 . "')
                            and pi_stat.deleted_at is null
                    ) hf on hf.id = p.id	
                    left join 
                    (	
                        select 
                            pi_path.pati_id ,
                            if(stel.value like '%Déclarée%', 'Assuétude', stel.value) as category,
                            s2.value as problem
                        from patients_information pi_path  
                                inner join suggestions as s2 on s2.id = pi_path.sugg_id 
                                inner join patients_information_template_element pitel on pitel.id = pi_path.itel_id 
                                inner join suggestions stel on stel.id = pitel.suge_id 
                            where 
                                stel.path_string like '/patient/fiche/assuetude/declaree%' 
                                and pi_path.deleted_at is null 
                                and '" . $this->refDate . "' BETWEEN coalesce(pi_path.start, '" . $this->past . "') and COALESCE(pi_path.end, '" . $this->refDate . "')
                            group by 
                                pi_path.pati_id,
                                stel.value,
                                s2.value
                    ) path
                    on path.pati_id = p.id
                order by 
                    path.category,
                    path.problem";

        $result = $conn->query($sql);




        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }


    #[Route('/api/statistiques109', name: 'app_statistiques109')]
    public function request109()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select 
                    path.category,
                    path.problem,
                    count(p.hash) as nombre
                from 
                    patients p 
                    inner join 
                    (
                        select
                            p.id,
                            s.value as programme
                        FROM
                            patients as p
                            inner join patients_information as pi on p.id = pi.pati_id
                            inner join suggestions as s on s.id = pi.sugg_id
                            inner  join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                            inner  join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                            inner join patients_information as pi_stat on p.id = pi_stat.pati_id 
                            inner join suggestions as s_stat on s_stat.id = pi_stat.sugg_id 
                        where
                            s.path_string like '/patient/suivi/programme/housing-first'
                            and pi.deleted_at is null
                            and p.deleted_at is null
                            and '" . $this->refDate . "' BETWEEN coalesce(pi.start, '" . $this->past . "') and COALESCE(pi.end, '" . $this->refDate . "')
                            
                            and s_antenna.path_string like '/patient/suivi/antenne/%'
                            and pi_antenna.deleted_at is null
                            and s_antenna.value like '" . $this->antenna . "' 
                            and pi.start <= COALESCE (pi_antenna.end, '" . $this->refDate . "')
                            and coalesce(pi.end, '" . $this->refDate . "') >= coalesce(pi_antenna.start, '" . $this->past . "') 
                
                            and s_stat.path_string like '/patient/fiche/statut-du-suivi/%' 
                            and s_stat.path_string not like '/patient/fiche/statut-du-suivi/decede' 
                            and '" . $this->refDate . "' between COALESCE(pi_stat.start, '" . $this->past . "') and COALESCE (pi_stat.end, '" . $this->nextyear0101 . "')
                            and pi_stat.deleted_at is null
                    ) hf on hf.id = p.id	
                    left join 
                    (	
                        select 
                            pi_path.pati_id ,
                            stel.value as category,
                            s2.value as problem
                        from patients_information pi_path  
                                inner join suggestions as s2 on s2.id = pi_path.sugg_id 
                                inner join patients_information_template_element pitel on pitel.id = pi_path.itel_id 
                                inner join suggestions stel on stel.id = pitel.suge_id 
                            where 
                                stel.path_string like '/patient/fiche/assuetude/declaree%' 
                                and pi_path.deleted_at is null 
                                and '" . $this->refDate . "' BETWEEN coalesce(pi_path.start, '" . $this->past . "') and COALESCE(pi_path.end, '" . $this->refDate . "')
                            group by 
                                pi_path.pati_id,
                                stel.value,
                                s2.value
                    ) path
                    on path.pati_id = p.id
                group by 
                    path.category,
                    path.problem
                order by 
                    path.category,
                    path.problem";

        $result = $conn->query($sql);




        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques108', name: 'app_statistiques108')]
    public function request108()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select 
                    p.hash,
                    p.firstname,
                    p.lastname,
                        sum(
                        if (path.problem like '%declarée%', 1, 0)
                    ) as assuetude
                from 
                    patients p 
                    inner join 
                    (
                        select
                            p.id,
                            s.value as programme
                        FROM
                            patients as p
                            inner join patients_information as pi on p.id = pi.pati_id
                            inner join suggestions as s on s.id = pi.sugg_id
                            inner  join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                            inner  join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                            inner join patients_information as pi_stat on p.id = pi_stat.pati_id 
                            inner join suggestions as s_stat on s_stat.id = pi_stat.sugg_id 
                        where
                            s.path_string like '/patient/suivi/programme/housing-first'
                            and pi.deleted_at is null
                            and p.deleted_at is null
                            and '" . $this->refDate . "' BETWEEN coalesce(pi.start, '" . $this->past . "') and COALESCE(pi.end, '" . $this->refDate . "')
                            
                            and s_antenna.path_string like '/patient/suivi/antenne/%'
                            and pi_antenna.deleted_at is null
                            and s_antenna.value like '" . $this->antenna . "' 
                            and pi.start <= COALESCE (pi_antenna.end, '" . $this->refDate . "')
                            and coalesce(pi.end, '" . $this->refDate . "') >= coalesce(pi_antenna.start, '" . $this->past . "') 

                            and s_stat.path_string like '/patient/fiche/statut-du-suivi/%' 
                            and s_stat.path_string not like '/patient/fiche/statut-du-suivi/decede'
                            and s_stat.path_string not like '/patient/fiche/statut-du-suivi/disparu'
                            and '" . $this->refDate . "' between COALESCE(pi_stat.start, '" . $this->past . "') and COALESCE (pi_stat.end, '" . $this->nextyear0101 . "')
                            and pi_stat.deleted_at is null
                    ) hf on hf.id = p.id	
                    left join 
                    (	
                        select 
                            pi_path.pati_id ,
                            stel.value as problem
                        from patients_information pi_path  
                                inner join suggestions as s2 on s2.id = pi_path.sugg_id 
                                inner join patients_information_template_element pitel on pitel.id = pi_path.itel_id 
                                inner join suggestions stel on stel.id = pitel.suge_id 
                        where 
                                (
                                    stel.path_string like '/patient/fiche/assuetude/declaree%' 
                                    or s2.path_string like '/patient/medical/patholo%'
                                ) 
                                and pi_path.deleted_at is null 
                                and '" . $this->refDate . "' BETWEEN coalesce(pi_path.start, '" . $this->past . "') and COALESCE(pi_path.end, '" . $this->refDate . "')
                        group by 
                                pi_path.pati_id,
                                stel.value
                    ) path on path.pati_id = p.id
                where programme is not null
            group by 
                hash, firstname, lastname
            order by hash";

        $result = $conn->query($sql);




        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques107', name: 'app_statistiques107')]
    public function request107()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select 
                    sum(if (assuetude = 0, 1, 0)) as 'absence d\'assuetude',
                    sum(if (assuetude > 0, 1, 0)) as 'avec assuetude',
                    count(assuetude) as 'nombre de patients dans le programme'
                from 
                (
                select 
                            p.hash,
                            p.firstname,
                            p.lastname,
                                sum(
                                if (path.category like '%déclarée%', 1, 0)
                            ) as assuetude
                        from 
                            patients p 
                            inner join 
                            (
                                select
                                    p.id,
                                    s.value as programme
                                FROM
                                    patients as p
                                    inner join patients_information as pi on p.id = pi.pati_id
                                    inner join suggestions as s on s.id = pi.sugg_id
                                    inner  join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                                    inner  join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                                    inner join patients_information as pi_stat on p.id = pi_stat.pati_id 
                                    inner join suggestions as s_stat on s_stat.id = pi_stat.sugg_id 
                                where
                                    s.path_string like '/patient/suivi/programme/housing-first'
                                    and pi.deleted_at is null
                                    and p.deleted_at is null
                                    and '" . $this->refDate . "' BETWEEN coalesce(pi.start, '" . $this->past . "') and COALESCE(pi.end, '" . $this->refDate . "')
                                    
                                    and s_antenna.path_string like '/patient/suivi/antenne/%'
                                    and pi_antenna.deleted_at is null
                                    and s_antenna.value like '" . $this->antenna . "' 
                                    and pi.start <= COALESCE (pi_antenna.end, '" . $this->refDate . "')
                                    and coalesce(pi.end, '" . $this->refDate . "') >= coalesce(pi_antenna.start, '" . $this->past . "') 
                
                                    and s_stat.path_string like '/patient/fiche/statut-du-suivi/%' 
                                    and s_stat.path_string not like '/patient/fiche/statut-du-suivi/decede'
                                    and s_stat.path_string not like '/patient/fiche/statut-du-suivi/disparu'
                                    and '" . $this->refDate . "' between COALESCE(pi_stat.start, '" . $this->past . "') and COALESCE (pi_stat.end, '" . $this->nextyear0101 . "')
                                    and pi_stat.deleted_at is null
                            ) hf on hf.id = p.id	
                            left join 
                            (	
                                select 
                                    pi_path.pati_id ,
                                    stel.value as category
                                from patients_information pi_path  
                                        inner join suggestions as s2 on s2.id = pi_path.sugg_id 
                                        inner join patients_information_template_element pitel on pitel.id = pi_path.itel_id 
                                        inner join suggestions stel on stel.id = pitel.suge_id 
                                where 
                                        (
                                            stel.path_string like '/patient/fiche/assuetude/declaree%' 
                                            or s2.path_string like '/patient/medical/patholo%'
                                        ) 
                                        and pi_path.deleted_at is null 
                                        and '" . $this->refDate . "' BETWEEN coalesce(pi_path.start, '" . $this->past . "') and COALESCE(pi_path.end, '" . $this->refDate . "')
                                group by 
                                        pi_path.pati_id,
                                        stel.value
                            ) path on path.pati_id = p.id
                        where programme is not null
                    group by 
                        hash, firstname, lastname
                    order by hash
                ) s";

        $result = $conn->query($sql);




        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }


    #[Route('/api/statistiques106', name: 'app_statistiques106')]
    public function request106()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select 
                    coalesce(path.category, 'Assuétude') as category,
                    p.hash,
                    coalesce(path.problem, 'aucune assuétude') as probleme
                from 
                    patients p 
                    inner join 
                    (
                        select
                            p.id as 'patientsId'
                        FROM
                            patients as p
                            inner  join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                            inner  join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                            inner join patients_information as pi_stat on p.id = pi_stat.pati_id 
                            inner join suggestions as s_stat on s_stat.id = pi_stat.sugg_id 
                        where
                            s_antenna.path_string like '/patient/suivi/antenne/%'
                            and pi_antenna.deleted_at is null
                            and s_antenna.value like '" . $this->antenna . "' 
                            and pi_stat.start <= COALESCE (pi_antenna.end, '" . $this->refDate . "')
                            and coalesce(pi_stat.end, '" . $this->refDate . "') >= coalesce(pi_antenna.start, '" . $this->past . "') 
                
                            and s_stat.path_string like '/patient/fiche/statut-du-suivi/en-suivi'
                            and '" . $this->refDate . "' between COALESCE(pi_stat.start, '" . $this->past . "') and COALESCE (pi_stat.end, '" . $this->nextyear0101 . "')
                            and pi_stat.deleted_at is null
                    ) suivi on suivi.patientsId = p.id	
                    left join 
                    (	
                        select 
                            pi_path.pati_id ,
                            stel.value as category,
                            s2.value as problem
                        from patients_information pi_path  
                                inner join suggestions as s2 on s2.id = pi_path.sugg_id 
                                inner join patients_information_template_element pitel on pitel.id = pi_path.itel_id 
                                inner join suggestions stel on stel.id = pitel.suge_id 
                            where 
                                stel.path_string like '/patient/fiche/assuetude/declaree%' 
                                and pi_path.deleted_at is null 
                                and '" . $this->refDate . "' BETWEEN coalesce(pi_path.start, '" . $this->past . "') and COALESCE(pi_path.end, '" . $this->refDate . "')
                            group by 
                                pi_path.pati_id,
                                stel.value,
                                s2.value
                    ) path
                    on path.pati_id = p.id
                order by 
                    path.category,
                    p.hash";

        $result = $conn->query($sql);




        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques105', name: 'app_statistiques105')]
    public function request105()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select 
                    coalesce(path.category, 'Assuétude') as category,
                    coalesce(path.problem, 'aucune assuétude') as probleme,
                    count(p.hash) as nombre
                from 
                    patients p 
                    inner join 
                    (
                        select
                            p.id
                        FROM
                            patients as p
                            inner  join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                            inner  join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                            inner join patients_information as pi_stat on p.id = pi_stat.pati_id 
                            inner join suggestions as s_stat on s_stat.id = pi_stat.sugg_id 
                        where
                            s_antenna.path_string like '/patient/suivi/antenne/%'
                            and pi_antenna.deleted_at is null
                            and s_antenna.value like '" . $this->antenna . "' 
                            and pi_stat.start <= COALESCE (pi_antenna.end, '" . $this->refDate . "')
                            and coalesce(pi_stat.end, '" . $this->refDate . "') >= coalesce(pi_antenna.start, '" . $this->past . "') 
                
                            and s_stat.path_string like '/patient/fiche/statut-du-suivi/en-suivi'
                            and '" . $this->refDate . "' between COALESCE(pi_stat.start, '" . $this->past . "') and COALESCE (pi_stat.end, '" . $this->nextyear0101 . "')
                            and pi_stat.deleted_at is null
                    ) suivi on suivi.id = p.id	
                    left join 
                    (	
                        select 
                            pi_path.pati_id ,
                            stel.value as category,
                            s2.value as problem
                        from patients_information pi_path  
                                inner join suggestions as s2 on s2.id = pi_path.sugg_id 
                                inner join patients_information_template_element pitel on pitel.id = pi_path.itel_id 
                                inner join suggestions stel on stel.id = pitel.suge_id 
                            where 
                                stel.path_string like '/patient/fiche/assuetude/declaree%' 
                                and pi_path.deleted_at is null 
                                and '" . $this->refDate . "' BETWEEN coalesce(pi_path.start, '" . $this->past . "') and COALESCE(pi_path.end, '" . $this->refDate . "')
                            group by 
                                pi_path.pati_id,
                                stel.value,
                                s2.value
                    ) path
                    on path.pati_id = p.id
                group by 
                    path.category,
                    path.problem
                order by 
                    path.category,
                    path.problem";

        $result = $conn->query($sql);




        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques104', name: 'app_statistiques104')]
    public function request104()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select 
                    p.hash,
                    coalesce(path.problem, '--aucun--') as probleme
                from 
                    patients p 
                    inner join 
                    (
                        select
                            p.id
                        FROM
                            patients as p
                            inner  join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                            inner  join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                            inner join patients_information as pi_stat on p.id = pi_stat.pati_id 
                            inner join suggestions as s_stat on s_stat.id = pi_stat.sugg_id 
                        where
                            s_antenna.path_string like '/patient/suivi/antenne/%'
                            and pi_antenna.deleted_at is null
                            and s_antenna.value like '" . $this->antenna . "' 
                            and pi_stat.start <= COALESCE (pi_antenna.end, '" . $this->refDate . "')
                            and coalesce(pi_stat.end, '" . $this->refDate . "') >= coalesce(pi_antenna.start, '" . $this->past . "') 
                
                            and s_stat.path_string like '/patient/fiche/statut-du-suivi/en-suivi' 
                            and '" . $this->refDate . "' between COALESCE(pi_stat.start, '" . $this->past . "') and COALESCE (pi_stat.end, '" . $this->nextyear0101 . "')
                            and pi_stat.deleted_at is null
                
                    ) hf on hf.id = p.id	
                    left join 
                    (	
                        select 
                            pi_path.pati_id ,
                            stel.value as category,
                            s2.value as problem
                        from patients_information pi_path  
                                inner join suggestions as s2 on s2.id = pi_path.sugg_id 
                                inner join patients_information_template_element pitel on pitel.id = pi_path.itel_id 
                                inner join suggestions stel on stel.id = pitel.suge_id 
                            where 
                                stel.path_string like '/patient/fiche/assuetude/declaree%' 
                                and pi_path.deleted_at is null 
                                and '" . $this->refDate . "' BETWEEN coalesce(pi_path.start, '" . $this->past . "') and COALESCE(pi_path.end, '" . $this->refDate . "')
                            group by 
                                pi_path.pati_id,
                                stel.value,
                                s2.value
                    ) path
                    on path.pati_id = p.id
                order by hash";

        $result = $conn->query($sql);




        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques103', name: 'app_statistiques103')]
    public function request103()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select 
                    coalesce(path.category, '--inconnu--') as category,
                    coalesce(path.problem, '--inconnu--') as problem,
                    p.hash
                from 
                    patients p 
                    inner join 
                    (
                        select
                            p.id,
                            s.value as programme
                        FROM
                            patients as p
                            inner join patients_information as pi on p.id = pi.pati_id
                            inner join suggestions as s on s.id = pi.sugg_id
                            inner  join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                            inner  join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                            inner join patients_information as pi_stat on p.id = pi_stat.pati_id 
                            inner join suggestions as s_stat on s_stat.id = pi_stat.sugg_id 
                        where
                            s.path_string like '/patient/suivi/programme/housing-first'
                            and pi.deleted_at is null
                            and p.deleted_at is null
                            and '" . $this->refDate . "' BETWEEN coalesce(pi.start, '" . $this->past . "') and COALESCE(pi.end, '" . $this->refDate . "')
                            
                            and s_antenna.path_string like '/patient/suivi/antenne/%'
                            and pi_antenna.deleted_at is null
                            and s_antenna.value like '" . $this->antenna . "' 
                            and pi.start <= COALESCE (pi_antenna.end, '" . $this->refDate . "')
                            and coalesce(pi.end, '" . $this->refDate . "') >= coalesce(pi_antenna.start, '" . $this->past . "') 
                
                            and s_stat.path_string like '/patient/fiche/statut-du-suivi/%'
                            and s_stat.path_string not like '/patient/fiche/statut-du-suivi/decede'
                            and '" . $this->refDate . "' between COALESCE(pi_stat.start, '" . $this->past . "') and COALESCE (pi_stat.end, '" . $this->nextyear0101 . "')
                            and pi_stat.deleted_at is null
                    ) hf on hf.id = p.id	
                    left join 
                    (	
                        select 
                            pi_path.pati_id ,
                            stel.value as category,
                            s2.value as problem
                        from patients_information pi_path  
                                inner join suggestions as s2 on s2.id = pi_path.sugg_id 
                                inner join patients_information_template_element pitel on pitel.id = pi_path.itel_id 
                                inner join suggestions stel on stel.id = pitel.suge_id 
                            where 
                                s2.path_string like '/patient/medical/pathologies/pathologies-mentale%'
                                and pi_path.deleted_at is null 
                                and '" . $this->refDate . "' BETWEEN coalesce(pi_path.start, '" . $this->past . "') and COALESCE(pi_path.end, '" . $this->refDate . "')
                            group by 
                                pi_path.pati_id,
                                stel.value,
                                s2.value
                    ) path
                    on path.pati_id = p.id
                order by 
                    path.category,
                    path.problem";

        $result = $conn->query($sql);




        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }


    #[Route('/api/statistiques102', name: 'app_statistiques102')]
    public function request102()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select 
                    path.category,
                    path.problem,
                    count(p.hash) as nombre
                from 
                    patients p 
                    inner join 
                    (
                        select
                            p.id,
                            s.value as programme
                        FROM
                            patients as p
                            inner join patients_information as pi on p.id = pi.pati_id
                            inner join suggestions as s on s.id = pi.sugg_id
                            inner  join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                            inner  join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                            inner join patients_information as pi_stat on p.id = pi_stat.pati_id 
                            inner join suggestions as s_stat on s_stat.id = pi_stat.sugg_id 
                        where
                            s.path_string like '/patient/suivi/programme/housing-first'
                            and pi.deleted_at is null
                            and p.deleted_at is null
                            and '" . $this->refDate . "' BETWEEN coalesce(pi.start, '" . $this->past . "') and COALESCE(pi.end, '" . $this->refDate . "')
                            
                            and s_antenna.path_string like '/patient/suivi/antenne/%'
                            and pi_antenna.deleted_at is null
                            and s_antenna.value like '" . $this->antenna . "' 
                            and pi.start <= COALESCE (pi_antenna.end, '" . $this->refDate . "')
                            and coalesce(pi.end, '" . $this->refDate . "') >= coalesce(pi_antenna.start, '" . $this->past . "') 
                
                            and s_stat.path_string like '/patient/fiche/statut-du-suivi/%' 
                            and s_stat.path_string not like '/patient/fiche/statut-du-suivi/decede'
                            and '" . $this->refDate . "' between COALESCE(pi_stat.start, '" . $this->past . "') and COALESCE (pi_stat.end, '" . $this->nextyear0101 . "')
                            and pi_stat.deleted_at is null
                    ) hf on hf.id = p.id	
                    left join 
                    (	
                        select 
                            pi_path.pati_id ,
                            stel.value as category,
                            s2.value as problem
                        from patients_information pi_path  
                                inner join suggestions as s2 on s2.id = pi_path.sugg_id 
                                inner join patients_information_template_element pitel on pitel.id = pi_path.itel_id 
                                inner join suggestions stel on stel.id = pitel.suge_id 
                            where 
                                s2.path_string like '/patient/medical/pathologies/pathologies-mentale%'
                                and pi_path.deleted_at is null 
                                and '" . $this->refDate . "' BETWEEN coalesce(pi_path.start, '" . $this->past . "') and COALESCE(pi_path.end, '" . $this->refDate . "')
                            group by 
                                pi_path.pati_id,
                                stel.value,
                                s2.value
                    ) path
                    on path.pati_id = p.id
                group by 
                    path.category,
                    path.problem
                order by 
                    path.category,
                    path.problem";

        $result = $conn->query($sql);




        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques101', name: 'app_statistiques101')]
    public function request101()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select 
                    path.category,
                    path.problem,
                    count(p.hash) as nombre
                from 
                    patients p 
                    inner join 
                    (
                        select
                            p.id,
                            s.value as programme
                        FROM
                            patients as p
                            inner join patients_information as pi on p.id = pi.pati_id
                            inner join suggestions as s on s.id = pi.sugg_id
                            inner  join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                            inner  join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                            inner join patients_information as pi_stat on p.id = pi_stat.pati_id 
                            inner join suggestions as s_stat on s_stat.id = pi_stat.sugg_id 
                        where
                            s.path_string like '/patient/suivi/programme/housing-first'
                            and pi.deleted_at is null
                            and p.deleted_at is null
                            and '" . $this->refDate . "' BETWEEN coalesce(pi.start, '" . $this->past . "') and COALESCE(pi.end, '" . $this->refDate . "')
                            
                            and s_antenna.path_string like '/patient/suivi/antenne/%'
                            and pi_antenna.deleted_at is null
                            and s_antenna.value like '" . $this->antenna . "' 
                            and pi.start <= COALESCE (pi_antenna.end, '" . $this->refDate . "')
                            and coalesce(pi.end, '" . $this->refDate . "') >= coalesce(pi_antenna.start, '" . $this->past . "') 
                
                            and s_stat.path_string like '/patient/fiche/statut-du-suivi/%' 
                            and s_stat.path_string not like '/patient/fiche/statut-du-suivi/decede'
                            and '" . $this->refDate . "' between COALESCE(pi_stat.start, '" . $this->past . "') and COALESCE (pi_stat.end, '" . $this->nextyear0101 . "')
                            and pi_stat.deleted_at is null
                    ) hf on hf.id = p.id	
                    left join 
                    (	
                        select 
                            pi_path.pati_id ,
                            stel.value as category,
                            s2.value as problem
                        from patients_information pi_path  
                                inner join suggestions as s2 on s2.id = pi_path.sugg_id 
                                inner join patients_information_template_element pitel on pitel.id = pi_path.itel_id 
                                inner join suggestions stel on stel.id = pitel.suge_id 
                            where 
                                s2.path_string like '/patient/medical/pathologies/pathologies-mentale%'
                                and pi_path.deleted_at is null 
                                and '" . $this->refDate . "' BETWEEN coalesce(pi_path.start, '" . $this->past . "') and COALESCE(pi_path.end, '" . $this->refDate . "')
                            group by 
                                pi_path.pati_id,
                                stel.value,
                                s2.value
                    ) path
                    on path.pati_id = p.id
                group by 
                    path.category,
                    path.problem
                order by 
                    path.category,
                    path.problem";

        $result = $conn->query($sql);




        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }



    #[Route('/api/statistiques100', name: 'app_statistiques100')]
    public function request100()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select 
                    p.hash,
                    p.firstname,
                    p.lastname,
                        sum(
                        if (path.problem like '%mentale%', 1, 0)
                    ) as mentale
                from 
                    patients p 
                    inner join 
                    (
                        select
                            p.id,
                            s.value as programme
                        FROM
                            patients as p
                            inner join patients_information as pi on p.id = pi.pati_id
                            inner join suggestions as s on s.id = pi.sugg_id
                            inner  join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                            inner  join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                            inner join patients_information as pi_stat on p.id = pi_stat.pati_id 
                            inner join suggestions as s_stat on s_stat.id = pi_stat.sugg_id 
                        where
                            s.path_string like '/patient/suivi/programme/housing-first'
                            and pi.deleted_at is null
                            and p.deleted_at is null
                            and '" . $this->refDate . "' BETWEEN coalesce(pi.start, '" . $this->past . "') and COALESCE(pi.end, '" . $this->refDate . "')
                            
                            and s_antenna.path_string like '/patient/suivi/antenne/%'
                            and pi_antenna.deleted_at is null
                            and s_antenna.value like '" . $this->antenna . "' 
                            and pi.start <= COALESCE (pi_antenna.end, '" . $this->refDate . "')
                            and coalesce(pi.end, '" . $this->refDate . "') >= coalesce(pi_antenna.start, '" . $this->past . "') 

                            and s_stat.path_string like '/patient/fiche/statut-du-suivi/%' 
                            and s_stat.path_string not like '/patient/fiche/statut-du-suivi/decede' 
                            and '" . $this->refDate . "' between COALESCE(pi_stat.start, '" . $this->past . "') and COALESCE (pi_stat.end, '" . $this->nextyear0101 . "')
                            and pi_stat.deleted_at is null
                    ) hf on hf.id = p.id	
                    left join 
                    (	
                        select 
                            pi_path.pati_id ,
                            stel.value as problem
                        from patients_information pi_path  
                                inner join suggestions as s2 on s2.id = pi_path.sugg_id 
                                inner join patients_information_template_element pitel on pitel.id = pi_path.itel_id 
                                inner join suggestions stel on stel.id = pitel.suge_id 
                        where 
                                (
                                    stel.path_string like '/patient/fiche/assuetude/declaree%' 
                                    or s2.path_string like '/patient/medical/patholo%'
                                ) 
                                and pi_path.deleted_at is null 
                                and '" . $this->refDate . "' BETWEEN coalesce(pi_path.start, '" . $this->past . "') and COALESCE(pi_path.end, '" . $this->refDate . "')
                        group by 
                                pi_path.pati_id,
                                stel.value
                    ) path on path.pati_id = p.id
                where programme is not null
            group by 
                hash, firstname, lastname
            order by hash";

        $result = $conn->query($sql);




        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques99', name: 'app_statistiques99')]
    public function request99()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select 
                    sum(if (mentale = 0, 1, 0)) as 'absence de pathologie mentale',
                    sum(if (mentale > 0, 1, 0)) as 'avec pathologie mentale',
                    count(mentale) as 'nombre de patients dans le suivi' 
                from 
                (
                select 
                            p.hash,
                            p.firstname,
                            p.lastname,
                                sum(
                                if (path.problem like '%mentale%', 1, 0)
                            ) as mentale
                        from 
                            patients p 
                            inner join 
                            (
                                select
                                    p.id,
                                    s.value as programme
                                FROM
                                    patients as p
                                    inner join patients_information as pi on p.id = pi.pati_id
                                    inner join suggestions as s on s.id = pi.sugg_id
                                    inner  join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                                    inner  join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                                    inner join patients_information as pi_stat on p.id = pi_stat.pati_id 
                                    inner join suggestions as s_stat on s_stat.id = pi_stat.sugg_id 
                                where
                                    s.path_string like '/patient/suivi/programme/housing-first'
                                    and pi.deleted_at is null
                                    and p.deleted_at is null
                                    and '" . $this->refDate . "' BETWEEN coalesce(pi.start, '" . $this->past . "') and COALESCE(pi.end, '" . $this->refDate . "')
                                    
                                    and s_antenna.path_string like '/patient/suivi/antenne/%'
                                    and pi_antenna.deleted_at is null
                                    and s_antenna.value like '" . $this->antenna . "' 
                                    and pi.start <= COALESCE (pi_antenna.end, '" . $this->refDate . "')
                                    and coalesce(pi.end, '" . $this->refDate . "') >= coalesce(pi_antenna.start, '" . $this->past . "') 
                
                                    and s_stat.path_string like '/patient/fiche/statut-du-suivi/%'
                                    and s_stat.path_string not like '/patient/fiche/statut-du-suivi/decede'
                                    and '" . $this->refDate . "' between COALESCE(pi_stat.start, '" . $this->past . "') and COALESCE (pi_stat.end, '" . $this->nextyear0101 . "')
                                    and pi_stat.deleted_at is null
                            ) hf on hf.id = p.id	
                            left join 
                            (	
                                select 
                                    pi_path.pati_id ,
                                    stel.value as problem
                                from patients_information pi_path  
                                        inner join suggestions as s2 on s2.id = pi_path.sugg_id 
                                        inner join patients_information_template_element pitel on pitel.id = pi_path.itel_id 
                                        inner join suggestions stel on stel.id = pitel.suge_id 
                                where 
                                        (
                                            stel.path_string like '/patient/fiche/assuetude/declaree%' 
                                            or s2.path_string like '/patient/medical/patholo%'
                                        ) 
                                        and pi_path.deleted_at is null 
                                        and '" . $this->refDate . "' BETWEEN coalesce(pi_path.start, '" . $this->past . "') and COALESCE(pi_path.end, '" . $this->refDate . "')
                                group by 
                                        pi_path.pati_id,
                                        stel.value
                            ) path on path.pati_id = p.id
                        where programme is not null
                    group by 
                        hash, firstname, lastname
                    order by hash
                ) s";

        $result = $conn->query($sql);




        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }


    #[Route('/api/statistiques98', name: 'app_statistiques98')]
    public function request98()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select 
                    coalesce(path.category, 'Pathologies mentales') as category,
                    p.hash,
                    coalesce(path.problem, 'aucune pathologie mentale') as probleme
                from 
                    patients p 
                    inner join 
                    (
                        select
                            p.id
                        FROM
                            patients as p
                            inner  join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                            inner  join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                            inner join patients_information as pi_stat on p.id = pi_stat.pati_id 
                            inner join suggestions as s_stat on s_stat.id = pi_stat.sugg_id 
                        where
                            s_antenna.path_string like '/patient/suivi/antenne/%'
                            and pi_antenna.deleted_at is null
                            and s_antenna.value like '" . $this->antenna . "' 
                            and pi_stat.start <= COALESCE (pi_antenna.end, '" . $this->refDate . "')
                            and coalesce(pi_stat.end, '" . $this->refDate . "') >= coalesce(pi_antenna.start, '" . $this->past . "') 
                
                            and s_stat.path_string like '/patient/fiche/statut-du-suivi/en-suivi' 
                            and '" . $this->refDate . "' between COALESCE(pi_stat.start, '" . $this->past . "') and COALESCE (pi_stat.end, '" . $this->nextyear0101 . "')
                            and pi_stat.deleted_at is null
                    ) suivi on suivi.id = p.id	
                    left join 
                    (	
                        select 
                            pi_path.pati_id ,
                            stel.value as category,
                            s2.value as problem
                        from patients_information pi_path  
                                inner join suggestions as s2 on s2.id = pi_path.sugg_id 
                                inner join patients_information_template_element pitel on pitel.id = pi_path.itel_id 
                                inner join suggestions stel on stel.id = pitel.suge_id 
                            where 
                                s2.path_string like '/patient/medical/pathologies/pathologies-mentale%'
                                and pi_path.deleted_at is null 
                                and '" . $this->refDate . "' BETWEEN coalesce(pi_path.start, '" . $this->past . "') and COALESCE(pi_path.end, '" . $this->refDate . "')
                            group by 
                                pi_path.pati_id,
                                stel.value,
                                s2.value
                    ) path
                    on path.pati_id = p.id
                order by 
                    path.category,
                    p.hash";

        $result = $conn->query($sql);




        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques97', name: 'app_statistiques97')]
    public function request97()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select 
                    coalesce(path.category, 'Pathologies mentales') as category,
                    coalesce(path.problem, 'aucune pathologie mentale') as probleme,
                    count(p.hash) as nombre
                from 
                    patients p 
                    inner join 
                    (
                        select
                            p.id
                        FROM
                            patients as p
                            inner  join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                            inner  join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                            inner join patients_information as pi_stat on p.id = pi_stat.pati_id 
                            inner join suggestions as s_stat on s_stat.id = pi_stat.sugg_id 
                        where
                            s_antenna.path_string like '/patient/suivi/antenne/%'
                            and pi_antenna.deleted_at is null
                            and s_antenna.value like '" . $this->antenna . "' 
                            and pi_stat.start <= COALESCE (pi_antenna.end, '" . $this->refDate . "')
                            and coalesce(pi_stat.end, '" . $this->refDate . "') >= coalesce(pi_antenna.start, '" . $this->past . "') 
                
                            and s_stat.path_string like '/patient/fiche/statut-du-suivi/en-suivi'
                            and '" . $this->refDate . "' between COALESCE(pi_stat.start, '" . $this->past . "') and COALESCE (pi_stat.end, '" . $this->nextyear0101 . "')
                            and pi_stat.deleted_at is null
                    ) suivi on suivi.id = p.id	
                    left join 
                    (	
                        select 
                            pi_path.pati_id ,
                            stel.value as category,
                            s2.value as problem
                        from patients_information pi_path  
                                inner join suggestions as s2 on s2.id = pi_path.sugg_id 
                                inner join patients_information_template_element pitel on pitel.id = pi_path.itel_id 
                                inner join suggestions stel on stel.id = pitel.suge_id 
                            where 
                                s2.path_string like '/patient/medical/pathologies/pathologies-mentale%'
                                and pi_path.deleted_at is null 
                                and '" . $this->refDate . "' BETWEEN coalesce(pi_path.start, '" . $this->past . "') and COALESCE(pi_path.end, '" . $this->refDate . "')
                            group by 
                                pi_path.pati_id,
                                stel.value,
                                s2.value
                    ) path
                    on path.pati_id = p.id
                group by 
                    path.category,
                    path.problem
                order by 
                    path.category,
                    path.problem";

        $result = $conn->query($sql);




        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques96', name: 'app_statistiques96')]
    public function request96()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select 
                    p.hash,
                    coalesce(path.problem, '--aucun--') as probleme
                from 
                    patients p 
                    inner join 
                    (
                        select
                            p.id,
                            s.value as programme
                        FROM
                            patients as p
                            inner join patients_information as pi on p.id = pi.pati_id
                            inner join suggestions as s on s.id = pi.sugg_id
                            inner  join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                            inner  join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                            inner join patients_information as pi_stat on p.id = pi_stat.pati_id 
                            inner join suggestions as s_stat on s_stat.id = pi_stat.sugg_id 
                        where
                            s.path_string like '/patient/suivi/programme/housing-first'
                            and pi.deleted_at is null
                            and p.deleted_at is null
                            and '" . $this->refDate . "' BETWEEN coalesce(pi.start, '" . $this->past . "') and COALESCE(pi.end, '" . $this->refDate . "')
                            
                            and s_antenna.path_string like '/patient/suivi/antenne/%'
                            and pi_antenna.deleted_at is null
                            and s_antenna.value like '" . $this->antenna . "' 
                            and pi.start <= COALESCE (pi_antenna.end, '" . $this->refDate . "')
                            and coalesce(pi.end, '" . $this->refDate . "') >= coalesce(pi_antenna.start, '" . $this->past . "') 
                
                            and s_stat.path_string like '/patient/fiche/statut-du-suivi/%'
                            and s_stat.path_string not like '/patient/fiche/statut-du-suivi/decede'
                            and '" . $this->refDate . "' between COALESCE(pi_stat.start, '" . $this->past . "') and COALESCE (pi_stat.end, '" . $this->nextyear0101 . "')
                            and pi_stat.deleted_at is null
                    ) hf on hf.id = p.id	
                    left join 
                    (	
                        select 
                            pi_path.pati_id ,
                            stel.value as category,
                            s2.value as problem
                        from patients_information pi_path  
                                inner join suggestions as s2 on s2.id = pi_path.sugg_id 
                                inner join patients_information_template_element pitel on pitel.id = pi_path.itel_id 
                                inner join suggestions stel on stel.id = pitel.suge_id 
                            where 
                                s2.path_string like '/patient/medical/pathologies/pathologies-mentale%'
                                and pi_path.deleted_at is null 
                                and '" . $this->refDate . "' BETWEEN coalesce(pi_path.start, '" . $this->past . "') and COALESCE(pi_path.end, '" . $this->refDate . "')
                            group by 
                                pi_path.pati_id,
                                stel.value,
                                s2.value
                    ) path
                    on path.pati_id = p.id
                order by hash";

        $result = $conn->query($sql);




        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques95', name: 'app_statistiques95')]
    public function request95()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select 
                    sum(if (mentale = 0, 1, 0)) as 'Nombre de personnes sans problème de santé mentale',
                    sum(if (mentale > 0, 1, 0)) as 'Nombre de personnes avec problème de santé mentale',
                    count(mentale) as 'nombre de patients dans le suivi' 
                from 
                (
                    select 
                        p.hash,
                        sum(
                            if (path.category like '%mentale%', 1, 0)
                        ) as mentale
                    from 
                        patients p 
                    inner join 
                    (
                        select
                            p.id,
                            s.value as programme
                        FROM
                            patients as p
                            inner join patients_information as pi on p.id = pi.pati_id
                            inner join suggestions as s on s.id = pi.sugg_id
                            inner  join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                            inner  join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                            inner join patients_information as pi_stat on p.id = pi_stat.pati_id 
                            inner join suggestions as s_stat on s_stat.id = pi_stat.sugg_id 
                        where
                            s.path_string like '/patient/suivi/programme/housing-first'
                            and pi.deleted_at is null
                            and p.deleted_at is null
                            and '" . $this->refDate . "' BETWEEN coalesce(pi.start, '" . $this->past . "') and COALESCE(pi.end, '" . $this->refDate . "')
                            
                            and s_antenna.path_string like '/patient/suivi/antenne/%'
                            and pi_antenna.deleted_at is null
                            and s_antenna.value like '" . $this->antenna . "' 
                            and pi.start <= COALESCE (pi_antenna.end, '" . $this->refDate . "')
                            and coalesce(pi.end, '" . $this->refDate . "') >= coalesce(pi_antenna.start, '" . $this->past . "') 
                
                            and s_stat.path_string like '/patient/fiche/statut-du-suivi/%'
                            and s_stat.path_string not like '/patient/fiche/statut-du-suivi/decede' 
                            and '" . $this->refDate . "' between COALESCE(pi_stat.start, '" . $this->past . "') and COALESCE (pi_stat.end, '" . $this->nextyear0101 . "')
                            and pi_stat.deleted_at is null
                    ) hf on hf.id = p.id	
                    left join 
                    (	
                        select 
                            pi_path.pati_id ,
                            stel.value as category,
                            s2.value as problem
                        from patients_information pi_path  
                                inner join suggestions as s2 on s2.id = pi_path.sugg_id 
                                inner join patients_information_template_element pitel on pitel.id = pi_path.itel_id 
                                inner join suggestions stel on stel.id = pitel.suge_id 
                            where 
                                s2.path_string like '/patient/medical/pathologies/pathologies-mentale%'
                                and pi_path.deleted_at is null 
                                and '" . $this->refDate . "' BETWEEN coalesce(pi_path.start, '" . $this->past . "') and COALESCE(pi_path.end, '" . $this->refDate . "')
                            group by 
                                pi_path.pati_id,
                                stel.value,
                                s2.value
                    ) path
                    on path.pati_id = p.id
                    group by hash
                ) s";

        $result = $conn->query($sql);




        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }


    #[Route('/api/statistiques94', name: 'app_statistiques94')]
    public function request94()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select 
                    p.hash,
                    coalesce(path.category, '--inconnu--') as category,
                    coalesce(path.problem, '--inconnu--') as problem
                from 
                    patients p 
                    inner join 
                    (
                        select
                            p.id,
                            s.value as programme
                        FROM
                            patients as p
                            inner join patients_information as pi on p.id = pi.pati_id
                            inner join suggestions as s on s.id = pi.sugg_id
                            inner  join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                            inner  join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                            inner join patients_information as pi_stat on p.id = pi_stat.pati_id 
                            inner join suggestions as s_stat on s_stat.id = pi_stat.sugg_id 
                        where
                            s.path_string like '/patient/suivi/programme/housing-first'
                            and pi.deleted_at is null
                            and p.deleted_at is null
                            and '" . $this->refDate . "' BETWEEN coalesce(pi.start, '" . $this->past . "') and COALESCE(pi.end, '" . $this->refDate . "')
                            
                            and s_antenna.path_string like '/patient/suivi/antenne/%'
                            and pi_antenna.deleted_at is null
                            and s_antenna.value like '" . $this->antenna . "' 
                            and pi.start <= COALESCE (pi_antenna.end, '" . $this->refDate . "')
                            and coalesce(pi.end, '" . $this->refDate . "') >= coalesce(pi_antenna.start, '" . $this->past . "') 
                
                            and s_stat.path_string like '/patient/fiche/statut-du-suivi/%'
                            and s_stat.path_string not like '/patient/fiche/statut-du-suivi/decede'
                            and '" . $this->refDate . "' between COALESCE(pi_stat.start, '" . $this->past . "') and COALESCE (pi_stat.end, '" . $this->nextyear0101 . "')
                            and pi_stat.deleted_at is null
                    ) hf on hf.id = p.id	
                    left join 
                    (	
                        select 
                            pi_path.pati_id ,
                            stel.value as category,
                            s2.value as problem
                        from patients_information pi_path  
                                inner join suggestions as s2 on s2.id = pi_path.sugg_id 
                                inner join patients_information_template_element pitel on pitel.id = pi_path.itel_id 
                                inner join suggestions stel on stel.id = pitel.suge_id 
                            where 
                                s2.path_string like '/patient/medical/pathologies/pathologies-physiques%'
                                and pi_path.deleted_at is null 
                                and '" . $this->refDate . "' BETWEEN coalesce(pi_path.start, '" . $this->past . "') and COALESCE(pi_path.end, '" . $this->refDate . "')
                            group by 
                                pi_path.pati_id,
                                stel.value,
                                s2.value
                    ) path
                    on path.pati_id = p.id
                order by 
                    path.category,
                    path.problem";

        $result = $conn->query($sql);




        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques93', name: 'app_statistiques93')]
    public function request93()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select 
                    path.category,
                    path.problem,
                    count(p.hash) as nombre
                from 
                    patients p 
                    inner join 
                    (
                        select
                            p.id,
                            s.value as programme
                        FROM
                            patients as p
                            inner join patients_information as pi on p.id = pi.pati_id
                            inner join suggestions as s on s.id = pi.sugg_id
                            inner  join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                            inner  join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                            inner join patients_information as pi_stat on p.id = pi_stat.pati_id 
                            inner join suggestions as s_stat on s_stat.id = pi_stat.sugg_id 
                        where
                            s.path_string like '/patient/suivi/programme/housing-first'
                            and pi.deleted_at is null
                            and p.deleted_at is null
                            and '" . $this->refDate . "' BETWEEN coalesce(pi.start, '" . $this->past . "') and COALESCE(pi.end, '" . $this->refDate . "')
                            
                            and s_antenna.path_string like '/patient/suivi/antenne/%'
                            and pi_antenna.deleted_at is null
                            and s_antenna.value like '" . $this->antenna . "' 
                            and pi.start <= COALESCE (pi_antenna.end, '" . $this->refDate . "')
                            and coalesce(pi.end, '" . $this->refDate . "') >= coalesce(pi_antenna.start, '" . $this->past . "') 
                
                            and s_stat.path_string like '/patient/fiche/statut-du-suivi/%'
                            and s_stat.path_string not like '/patient/fiche/statut-du-suivi/decede' 
                            and '" . $this->refDate . "' between COALESCE(pi_stat.start, '" . $this->past . "') and COALESCE (pi_stat.end, '" . $this->nextyear0101 . "')
                            and pi_stat.deleted_at is null
                    ) hf on hf.id = p.id	
                    left join 
                    (	
                        select 
                            pi_path.pati_id ,
                            stel.value as category,
                            s2.value as problem
                        from patients_information pi_path  
                                inner join suggestions as s2 on s2.id = pi_path.sugg_id 
                                inner join patients_information_template_element pitel on pitel.id = pi_path.itel_id 
                                inner join suggestions stel on stel.id = pitel.suge_id 
                            where 
                                s2.path_string like '/patient/medical/pathologies/pathologies-physiques%'
                                and pi_path.deleted_at is null 
                                and '" . $this->refDate . "' BETWEEN coalesce(pi_path.start, '" . $this->past . "') and COALESCE(pi_path.end, '" . $this->refDate . "')
                            group by 
                                pi_path.pati_id,
                                stel.value,
                                s2.value
                    ) path
                    on path.pati_id = p.id
                group by 
                    path.category,
                    path.problem
                order by 
                    path.category,
                    path.problem";

        $result = $conn->query($sql);




        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques92', name: 'app_statistiques92')]
    public function request92()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select 
                    p.hash,
                    p.firstname,
                    p.lastname,
                        sum(
                        if (path.problem like '%physique%', 1, 0)
                    ) as physique
                from 
                    patients p 
                    inner join 
                    (
                        select
                            p.id,
                            s.value as programme
                        FROM
                            patients as p
                            inner join patients_information as pi on p.id = pi.pati_id
                            inner join suggestions as s on s.id = pi.sugg_id
                            inner  join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                            inner  join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                            inner join patients_information as pi_stat on p.id = pi_stat.pati_id 
                            inner join suggestions as s_stat on s_stat.id = pi_stat.sugg_id 
                        where
                            s.path_string like '/patient/suivi/programme/housing-first'
                            and pi.deleted_at is null
                            and p.deleted_at is null
                            and '" . $this->refDate . "' BETWEEN coalesce(pi.start, '" . $this->past . "') and COALESCE(pi.end, '" . $this->refDate . "')
                            
                            and s_antenna.path_string like '/patient/suivi/antenne/%'
                            and pi_antenna.deleted_at is null
                            and s_antenna.value like '" . $this->antenna . "' 
                            and pi.start <= COALESCE (pi_antenna.end, '" . $this->refDate . "')
                            and coalesce(pi.end, '" . $this->refDate . "') >= coalesce(pi_antenna.start, '" . $this->past . "') 

                            and s_stat.path_string like '/patient/fiche/statut-du-suivi/%'
                            and s_stat.path_string not like '/patient/fiche/statut-du-suivi/decede'
                            and '" . $this->refDate . "' between COALESCE(pi_stat.start, '" . $this->past . "') and COALESCE (pi_stat.end, '" . $this->nextyear0101 . "')
                            and pi_stat.deleted_at is null
                    ) hf on hf.id = p.id	
                    left join 
                    (	
                        select 
                            pi_path.pati_id ,
                            stel.value as problem
                        from patients_information pi_path  
                                inner join suggestions as s2 on s2.id = pi_path.sugg_id 
                                inner join patients_information_template_element pitel on pitel.id = pi_path.itel_id 
                                inner join suggestions stel on stel.id = pitel.suge_id 
                        where 
                                (
                                    stel.path_string like '/patient/fiche/assuetude/declaree%' 
                                    or s2.path_string like '/patient/medical/patholo%'
                                ) 
                                and pi_path.deleted_at is null 
                                and '" . $this->refDate . "' BETWEEN coalesce(pi_path.start, '" . $this->past . "') and COALESCE(pi_path.end, '" . $this->refDate . "')
                        group by 
                                pi_path.pati_id,
                                stel.value
                    ) path on path.pati_id = p.id
                where programme is not null
            group by 
                hash, firstname, lastname
            order by hash";

        $result = $conn->query($sql);




        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques91', name: 'app_statistiques91')]
    public function request91()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select 
                    sum(if (physique = 0, 1, 0)) as 'Nombre de personnes sans problème de santé physique chronique',
                    sum(if (physique > 0, 1, 0)) as 'Nombre de personnes avec problème de santé physique chronique',
                    count(physique) as 'nombre de patients dans le programme housing first' 
                from 
                (
                
                select 
                            p.hash,
                            p.firstname,
                            p.lastname,
                                sum(
                                if (path.problem like '%physique%', 1, 0)
                            ) as physique
                        from 
                            patients p 
                            inner join 
                            (
                                select
                                    p.id,
                                    s.value as programme
                                FROM
                                    patients as p
                                    inner join patients_information as pi on p.id = pi.pati_id
                                    inner join suggestions as s on s.id = pi.sugg_id
                                    inner  join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                                    inner  join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                                    inner join patients_information as pi_stat on p.id = pi_stat.pati_id 
                                    inner join suggestions as s_stat on s_stat.id = pi_stat.sugg_id 
                                where
                                    s.path_string like '/patient/suivi/programme/housing-first'
                                    and pi.deleted_at is null
                                    and p.deleted_at is null
                                    and '" . $this->refDate . "' BETWEEN coalesce(pi.start, '" . $this->past . "') and COALESCE(pi.end, '" . $this->refDate . "')
                                    
                                    and s_antenna.path_string like '/patient/suivi/antenne/%'
                                    and pi_antenna.deleted_at is null
                                    and s_antenna.value like '" . $this->antenna . "' 
                                    and pi.start <= COALESCE (pi_antenna.end, '" . $this->refDate . "')
                                    and coalesce(pi.end, '" . $this->refDate . "') >= coalesce(pi_antenna.start, '" . $this->past . "') 
                
                                    and s_stat.path_string like '/patient/fiche/statut-du-suivi/%'
                                    and s_stat.path_string not like '/patient/fiche/statut-du-suivi/decede' 
                                    and '" . $this->refDate . "' between COALESCE(pi_stat.start, '" . $this->past . "') and COALESCE (pi_stat.end, '" . $this->nextyear0101 . "')
                                    and pi_stat.deleted_at is null
                            ) hf on hf.id = p.id	
                            left join 
                            (	
                                select 
                                    pi_path.pati_id ,
                                    stel.value as problem
                                from patients_information pi_path  
                                        inner join suggestions as s2 on s2.id = pi_path.sugg_id 
                                        inner join patients_information_template_element pitel on pitel.id = pi_path.itel_id 
                                        inner join suggestions stel on stel.id = pitel.suge_id 
                                where 
                                        (
                                            stel.path_string like '/patient/fiche/assuetude/declaree%' 
                                            or s2.path_string like '/patient/medical/patholo%'
                                        ) 
                                        and pi_path.deleted_at is null 
                                        and '" . $this->refDate . "' BETWEEN coalesce(pi_path.start, '" . $this->past . "') and COALESCE(pi_path.end, '" . $this->refDate . "')
                                group by 
                                        pi_path.pati_id,
                                        stel.value
                            ) path on path.pati_id = p.id
                        where programme is not null
                    group by 
                        hash, firstname, lastname
                    order by hash
                ) s";

        $result = $conn->query($sql);




        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques90', name: 'app_statistiques90')]
    public function request90()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select 
                    path.category,
                    path.problem,
                    p.hash
                from 
                    patients p 
                    inner join 
                    (	
                        select 
                            pi_path.pati_id ,
                            stel.value as category,
                            s2.value as problem
                        from patients_information pi_path  
                                inner join suggestions as s2 on s2.id = pi_path.sugg_id 
                                inner join patients_information_template_element pitel on pitel.id = pi_path.itel_id 
                                inner join suggestions stel on stel.id = pitel.suge_id 
                            where 
                                s2.path_string like '/patient/medical/pathologies/pathologies-physiques%'
                                and pi_path.deleted_at is null 
                                and '" . $this->refDate . "' BETWEEN coalesce(pi_path.start, '" . $this->past . "') and COALESCE(pi_path.end, '" . $this->refDate . "')
                            group by 
                                pi_path.pati_id,
                                stel.value,
                                s2.value
                    ) path
                    on path.pati_id = p.id
                    inner join patients_information as pi on p.id = pi.pati_id 
                    inner join suggestions as s on s.id = pi.sugg_id 
                    left join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                    left join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                where 
                    s.path_string like '/patient/fiche/statut-du-suivi/en-suivi'
                    and '" . $this->refDate . "' between COALESCE(pi.start, '" . $this->past . "') and COALESCE (pi.end, '" . $this->refDate . "' )
                    and pi.deleted_at is null 
                    and p.deleted_at is null 
                    and '" . $this->refDate . "' between coalesce(pi_antenna.start, '" . $this->past . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                    and s_antenna.path_string like '/patient/suivi/antenne/%'
                    and s_antenna.value like '" . $this->antenna . "'
                order by 
                    path.category,
                    path.problem";

        $result = $conn->query($sql);




        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }


    #[Route('/api/statistiques89', name: 'app_statistiques89')]
    public function request89()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select 
                    path.category,
                    path.problem,
                    count(p.hash) as nombre
                from 
                    patients p 
                    inner join 
                    (	
                        select 
                            pi_path.pati_id ,
                            stel.value as category,
                            s2.value as problem
                        from patients_information pi_path  
                                inner join suggestions as s2 on s2.id = pi_path.sugg_id 
                                inner join patients_information_template_element pitel on pitel.id = pi_path.itel_id 
                                inner join suggestions stel on stel.id = pitel.suge_id 
                            where 
                                s2.path_string like '/patient/medical/pathologies/pathologies-physiques%'
                                and pi_path.deleted_at is null 
                                and '" . $this->refDate . "' BETWEEN coalesce(pi_path.start, '" . $this->past . "') and COALESCE(pi_path.end, '" . $this->refDate . "')
                            group by 
                                pi_path.pati_id,
                                stel.value,
                                s2.value
                    ) path
                    on path.pati_id = p.id
                    inner join patients_information as pi on p.id = pi.pati_id 
                    inner join suggestions as s on s.id = pi.sugg_id 
                    left join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                    left join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                where 
                    s.path_string like '/patient/fiche/statut-du-suivi/en-suivi'
                    and '" . $this->refDate . "' between COALESCE(pi.start, '" . $this->past . "') and COALESCE (pi.end, '" . $this->refDate . "' )
                    and pi.deleted_at is null 
                    and p.deleted_at is null 
                    and '" . $this->refDate . "' between coalesce(pi_antenna.start, '" . $this->past . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                    and s_antenna.path_string like '/patient/suivi/antenne/%'
                    and s_antenna.value like '" . $this->antenna . "'
                group by 
                    path.category,
                    path.problem
                order by 
                    path.category,
                    path.problem";

        $result = $conn->query($sql);




        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques88', name: 'app_statistiques88')]
    public function request88()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select 
                    p.hash,
                    p.firstname,
                    p.lastname,
                    sum(
                        if (path.problem like '%physique%', 1, 0)
                    ) as physique
                
                from 
                    patients p 
                    inner join 
                    (	
                        select 
                            pi_path.pati_id ,
                            stel.value as problem
                        from patients_information pi_path  
                                inner join suggestions as s2 on s2.id = pi_path.sugg_id 
                                inner join patients_information_template_element pitel on pitel.id = pi_path.itel_id 
                                inner join suggestions stel on stel.id = pitel.suge_id 
                            where 
                                (
                                    stel.path_string like '/patient/fiche/assuetude/declaree%' 
                                    or s2.path_string like '/patient/medical/patholo%'
                                ) 
                                and pi_path.deleted_at is null 
                                and '" . $this->refDate . "' BETWEEN coalesce(pi_path.start, '" . $this->past . "') and COALESCE(pi_path.end, '" . $this->refDate . "')
                            group by 
                                pi_path.pati_id,
                                stel.value
                    ) path
                    on path.pati_id = p.id
                    inner join patients_information as pi on p.id = pi.pati_id 
                    inner join suggestions as s on s.id = pi.sugg_id 
                    left join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                    left join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                where 
                    s.path_string like '/patient/fiche/statut-du-suivi/en-suivi'
                    and '" . $this->refDate . "' between COALESCE(pi.start, '" . $this->past . "') and COALESCE (pi.end, '" . $this->refDate . "' )
                    and pi.deleted_at is null 
                    and p.deleted_at is null 
                    and '" . $this->refDate . "' between coalesce(pi_antenna.start, '" . $this->past . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                    and s_antenna.path_string like '/patient/suivi/antenne/%'
                    and s_antenna.value like '" . $this->antenna . "'
                group by 
                    hash,
                    p.firstname,
                    p.lastname
                order by hash";

        $result = $conn->query($sql);




        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques87', name: 'app_statistiques87')]
    public function request87()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select 
                    sum(if (physique = 0, 1, 0)) as 'absence de pathologie physique',
                    sum(if (physique > 0, 1, 0)) as 'pathologie physique',
                    count(physique) as 'nombre de patients dans le suivi' 
                from 
                (
                    select 
                        p.hash,
                        sum(
                            if (path.problem like '%physique%', 1, 0)
                        ) as physique, 
                        sum(
                            if (path.problem like '%mentale%', 1, 0)
                        ) as mentale, 
                        sum(
                            if (path.problem like '%declaree%', 1, 0)
                        ) as assuetude
                
                    from 
                        patients p 
                        inner join 
                        (	
                            select 
                                pi_path.pati_id ,
                                stel.value as problem
                            from patients_information pi_path  
                                    inner join suggestions as s2 on s2.id = pi_path.sugg_id 
                                    inner join patients_information_template_element pitel on pitel.id = pi_path.itel_id 
                                    inner join suggestions stel on stel.id = pitel.suge_id 
                                where 
                                    (
                                        stel.path_string like '/patient/fiche/assuetude/declaree%' 
                                        or s2.path_string like '/patient/medical/patholo%'
                                    ) 
                                    and pi_path.deleted_at is null 
                                    and '" . $this->refDate . "' BETWEEN coalesce(pi_path.start, '" . $this->past . "') and COALESCE(pi_path.end, '" . $this->refDate . "')
                                group by 
                                    pi_path.pati_id,
                                    stel.value
                        ) path
                        on path.pati_id = p.id
                        inner join patients_information as pi on p.id = pi.pati_id 
                        inner join suggestions as s on s.id = pi.sugg_id 
                        left join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                        left join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                    where 
                        s.path_string like '/patient/fiche/statut-du-suivi/en-suivi'
                        and '" . $this->refDate . "' between COALESCE(pi.start, '" . $this->past . "') and COALESCE (pi.end, '" . $this->refDate . "' )
                        and pi.deleted_at is null 
                        and p.deleted_at is null 
                        and '" . $this->refDate . "' between coalesce(pi_antenna.start, '" . $this->past . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                        and s_antenna.path_string like '/patient/suivi/antenne/%'
                        and s_antenna.value like '" . $this->antenna . "'
                    group by 
                        hash
                ) s";

        $result = $conn->query($sql);




        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques86', name: 'app_statistiques86')]
    public function request86()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select 
                    p.hash,
                    p.firstname,
                    p.lastname,
                    sum(
                        if (path.problem like '%physique%', 1, 0)
                    ) as physique, 
                    sum(
                        if (path.problem like '%mentale%', 1, 0)
                    ) as mentale, 
                    sum(
                        if (path.problem like '%declaree%', 1, 0)
                    ) as assuetude,
                    hf.programme
                from 
                    patients p 
                    inner join 
                    (
                        select
                            p.id,
                            s.value as programme
                        FROM
                            patients as p
                            inner join patients_information as pi on p.id = pi.pati_id
                            inner join suggestions as s on s.id = pi.sugg_id
                            inner  join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                            inner  join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                            inner join patients_information as pi_stat on p.id = pi_stat.pati_id 
                            inner join suggestions as s_stat on s_stat.id = pi_stat.sugg_id 
                        where
                            s.path_string like '/patient/suivi/programme/housing-fast'
                            and pi.deleted_at is null
                            and p.deleted_at is null
                            and '" . $this->refDate . "' BETWEEN coalesce(pi.start, '" . $this->past . "') and COALESCE(pi.end, '" . $this->refDate . "')
                            
                            and s_antenna.path_string like '/patient/suivi/antenne/%'
                            and pi_antenna.deleted_at is null
                            and s_antenna.value like '" . $this->antenna . "' 
                            and pi.start <= COALESCE (pi_antenna.end, '" . $this->refDate . "')
                            and coalesce(pi.end, '" . $this->refDate . "') >= coalesce(pi_antenna.start, '" . $this->past . "') 
                
                            and s_stat.path_string like '/patient/fiche/statut-du-suivi/%'
                            and s_stat.path_string not like '/patient/fiche/statut-du-suivi/decede'
                            and '" . $this->refDate . "' between COALESCE(pi_stat.start, '" . $this->past . "') and COALESCE (pi_stat.end, '" . $this->nextyear0101 . "')
                            and pi_stat.deleted_at is null
                    ) hf on hf.id = p.id	
                    left join 
                    (	
                        select 
                            pi_path.pati_id ,
                            stel.value as problem
                        from patients_information pi_path  
                                inner join suggestions as s2 on s2.id = pi_path.sugg_id 
                                inner join patients_information_template_element pitel on pitel.id = pi_path.itel_id 
                                inner join suggestions stel on stel.id = pitel.suge_id 
                        where 
                                (
                                    stel.path_string like '/patient/fiche/assuetude/declaree%' 
                                    or s2.path_string like '/patient/medical/patholo%'
                                ) 
                                and pi_path.deleted_at is null 
                                and '" . $this->refDate . "' BETWEEN coalesce(pi_path.start, '" . $this->past . "') and COALESCE(pi_path.end, '" . $this->refDate . "')
                        group by 
                                pi_path.pati_id,
                                stel.value
                    ) path on path.pati_id = p.id
                where programme is not null
                group by
                    programme, p.hash, p.firstname, p.lastname";

        $result = $conn->query($sql);




        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }


    #[Route('/api/statistiques85', name: 'app_statistiques85')]
    public function request85()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "SELECT 
                    sum(
                        if( (physique + mentale + assuetude) >= 2, 1, 0) 
                    ) as 'nombre de personnes ayant 2 problemes sur 3',
                    count(hash) as 'nombre total'
                from (
                
                    select 
                        p.hash,
                        p.firstname,
                        p.lastname,
                        sum(
                            if (path.problem like '%physique%', 1, 0)
                        ) as physique, 
                        sum(
                            if (path.problem like '%mentale%', 1, 0)
                        ) as mentale, 
                        sum(
                            if (path.problem like '%declaree%', 1, 0)
                        ) as assuetude,
                        hf.programme
                    from 
                        patients p 
                        inner join 
                        (
                            select
                                p.id,
                                s.value as programme
                            FROM
                                patients as p
                                inner join patients_information as pi on p.id = pi.pati_id
                                inner join suggestions as s on s.id = pi.sugg_id
                                inner  join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                                inner  join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                                inner join patients_information as pi_stat on p.id = pi_stat.pati_id 
                                inner join suggestions as s_stat on s_stat.id = pi_stat.sugg_id 
                            where
                                s.path_string like '/patient/suivi/programme/housing-fast'
                                and pi.deleted_at is null
                                and p.deleted_at is null
                                and '" . $this->refDate . "' BETWEEN coalesce(pi.start, '" . $this->past . "') and COALESCE(pi.end, '" . $this->refDate . "')
                                
                                and s_antenna.path_string like '/patient/suivi/antenne/%'
                                and pi_antenna.deleted_at is null
                                and s_antenna.value like '" . $this->antenna . "' 
                                and pi.start <= COALESCE (pi_antenna.end, '" . $this->refDate . "')
                                and coalesce(pi.end, '" . $this->refDate . "') >= coalesce(pi_antenna.start, '" . $this->past . "') 
                
                                and s_stat.path_string like '/patient/fiche/statut-du-suivi/%'
                                and s_stat.path_string not like '/patient/fiche/statut-du-suivi/decede'
                                and s_stat.path_string not like '/patient/fiche/statut-du-suivi/disparu'
                                and '" . $this->refDate . "' between COALESCE(pi_stat.start, '" . $this->past . "') and COALESCE (pi_stat.end, '" . $this->nextyear0101 . "')
                                and pi_stat.deleted_at is null
                        ) hf on hf.id = p.id	
                        left join 
                        (	
                            select 
                                pi_path.pati_id ,
                                stel.value as problem
                            from patients_information pi_path  
                                    inner join suggestions as s2 on s2.id = pi_path.sugg_id 
                                    inner join patients_information_template_element pitel on pitel.id = pi_path.itel_id 
                                    inner join suggestions stel on stel.id = pitel.suge_id 
                            where 
                                    (
                                        stel.path_string like '/patient/fiche/assuetude/declaree%' 
                                        or s2.path_string like '/patient/medical/patholo%'
                                    ) 
                                    and pi_path.deleted_at is null 
                                    and '" . $this->refDate . "' BETWEEN coalesce(pi_path.start, '" . $this->past . "') and COALESCE(pi_path.end, '" . $this->refDate . "')
                            group by 
                                    pi_path.pati_id,
                                    stel.value
                        ) path on path.pati_id = p.id
                    where programme is not null
                    group by
                        programme, p.hash, p.firstname, p.lastname 
                ) s";

        $result = $conn->query($sql);




        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques84', name: 'app_statistiques84')]
    public function request84()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select 
                    physique as '# pathologies physiques', 
                    mentale as '# pathologies mentales', 
                    assuetude as '# d\'assuétudes'
                from 
                (
                        select 
                            sum(
                                if (path.problem like '%physique%', 1, 0)
                            ) as physique, 
                            sum(
                                if (path.problem like '%mentale%', 1, 0)
                            ) as mentale, 
                            sum(
                                if (path.problem like '%declaree%', 1, 0)
                            ) as assuetude
                        from 
                            patients p 
                            inner join 
                            (
                                select
                                    p.id,
                                    s.value as programme
                                FROM
                                    patients as p
                                    inner join patients_information as pi on p.id = pi.pati_id
                                    inner join suggestions as s on s.id = pi.sugg_id
                                    inner  join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                                    inner  join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                                    inner join patients_information as pi_stat on p.id = pi_stat.pati_id 
                                    inner join suggestions as s_stat on s_stat.id = pi_stat.sugg_id 
                                where
                                    s.path_string like '/patient/suivi/programme/housing-fast'
                                    and pi.deleted_at is null
                                    and p.deleted_at is null
                                    and '" . $this->refDate . "' BETWEEN coalesce(pi.start, '" . $this->past . "') and COALESCE(pi.end, '" . $this->refDate . "')
                                    
                                    and s_antenna.path_string like '/patient/suivi/antenne/%'
                                    and pi_antenna.deleted_at is null
                                    and s_antenna.value like '" . $this->antenna . "' 
                                    and pi.start <= COALESCE (pi_antenna.end, '" . $this->refDate . "')
                                    and coalesce(pi.end, '" . $this->refDate . "') >= coalesce(pi_antenna.start, '" . $this->past . "') 
                
                                    and s_stat.path_string like '/patient/fiche/statut-du-suivi/%'
                                    and s_stat.path_string not like '/patient/fiche/statut-du-suivi/decede'
                                    and s_stat.path_string not like '/patient/fiche/statut-du-suivi/disparu'
                                    and '" . $this->refDate . "' between COALESCE(pi_stat.start, '" . $this->past . "') and COALESCE (pi_stat.end, '" . $this->nextyear0101 . "')
                                    and pi_stat.deleted_at is null
                            ) hf on hf.id = p.id	
                            left join 
                            (	
                                select 
                                    pi_path.pati_id ,
                                    stel.value as problem
                                from patients_information pi_path  
                                        inner join suggestions as s2 on s2.id = pi_path.sugg_id 
                                        inner join patients_information_template_element pitel on pitel.id = pi_path.itel_id 
                                        inner join suggestions stel on stel.id = pitel.suge_id 
                                where 
                                        (
                                            stel.path_string like '/patient/fiche/assuetude/declaree%' 
                                            or s2.path_string like '/patient/medical/patholo%'
                                        ) 
                                        and pi_path.deleted_at is null 
                                        and '" . $this->refDate . "' BETWEEN coalesce(pi_path.start, '" . $this->past . "') and COALESCE(pi_path.end, '" . $this->refDate . "')
                                group by 
                                        pi_path.pati_id,
                                        stel.value
                            ) path on path.pati_id = p.id
                        where programme is not null
                
                ) s";

        $result = $conn->query($sql);




        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques83', name: 'app_statistiques83')]
    public function request83()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select 
                    p.hash,
                    p.firstname,
                    p.lastname,
                    sum(
                        if (path.problem like '%physique%', 1, 0)
                    ) as physique, 
                    sum(
                        if (path.problem like '%mentale%', 1, 0)
                    ) as mentale, 
                    sum(
                        if (path.problem like '%declaree%', 1, 0)
                    ) as assuetude,
                    hf.programme
                from 
                    patients p 
                    inner join 
                    (
                        select
                            p.id,
                            s.value as programme
                        FROM
                            patients as p
                            inner join patients_information as pi on p.id = pi.pati_id
                            inner join suggestions as s on s.id = pi.sugg_id
                            inner  join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                            inner  join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                            inner join patients_information as pi_stat on p.id = pi_stat.pati_id 
                            inner join suggestions as s_stat on s_stat.id = pi_stat.sugg_id 
                        where
                            s.path_string like '/patient/suivi/programme/housing-first'
                            and pi.deleted_at is null
                            and p.deleted_at is null
                            and '" . $this->refDate . "' BETWEEN coalesce(pi.start, '" . $this->past . "') and COALESCE(pi.end, '" . $this->refDate . "')
                            
                            and s_antenna.path_string like '/patient/suivi/antenne/%'
                            and pi_antenna.deleted_at is null
                            and s_antenna.value like '" . $this->antenna . "' 
                            and pi.start <= COALESCE (pi_antenna.end, '" . $this->refDate . "')
                            and coalesce(pi.end, '" . $this->refDate . "') >= coalesce(pi_antenna.start, '" . $this->past . "') 
                
                            and s_stat.path_string like '/patient/fiche/statut-du-suivi/%' 
                            and s_stat.path_string not like '/patient/fiche/statut-du-suivi/decede'
                            and '" . $this->refDate . "' between COALESCE(pi_stat.start, '" . $this->past . "') and COALESCE (pi_stat.end, '" . $this->nextyear0101 . "')
                            and pi_stat.deleted_at is null
                    ) hf on hf.id = p.id	
                    left join 
                    (	
                        select 
                            pi_path.pati_id ,
                            stel.value as problem
                        from patients_information pi_path  
                                inner join suggestions as s2 on s2.id = pi_path.sugg_id 
                                inner join patients_information_template_element pitel on pitel.id = pi_path.itel_id 
                                inner join suggestions stel on stel.id = pitel.suge_id 
                        where 
                                (
                                    stel.path_string like '/patient/fiche/assuetude/declaree%' 
                                    or s2.path_string like '/patient/medical/patholo%'
                                ) 
                                and pi_path.deleted_at is null 
                                and '" . $this->refDate . "' BETWEEN coalesce(pi_path.start, '" . $this->past . "') and COALESCE(pi_path.end, '" . $this->refDate . "')
                        group by 
                                pi_path.pati_id,
                                stel.value
                    ) path on path.pati_id = p.id
                where programme is not null
                group by
                    programme, p.hash, p.firstname, p.lastname";

        $result = $conn->query($sql);




        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques82', name: 'app_statistiques82')]
    public function request82()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select 
                    sum(
                        if( (physique + mentale + assuetude) >= 2, 1, 0) 
                    ) as 'nombre de personnes ayant 2 problemes sur 3',
                    count(hash) as 'nombre total'
                from (
                
                    select 
                        p.hash,
                        p.firstname,
                        p.lastname,
                        sum(
                            if (path.problem like '%physique%', 1, 0)
                        ) as physique, 
                        sum(
                            if (path.problem like '%mentale%', 1, 0)
                        ) as mentale, 
                        sum(
                            if (path.problem like '%declaree%', 1, 0)
                        ) as assuetude,
                        hf.programme
                    from 
                        patients p 
                        inner join 
                        (
                            select
                                p.id,
                                s.value as programme
                            FROM
                                patients as p
                                inner join patients_information as pi on p.id = pi.pati_id
                                inner join suggestions as s on s.id = pi.sugg_id
                                inner  join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                                inner  join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                                inner join patients_information as pi_stat on p.id = pi_stat.pati_id 
                                inner join suggestions as s_stat on s_stat.id = pi_stat.sugg_id 
                            where
                                s.path_string like '/patient/suivi/programme/housing-first'
                                and pi.deleted_at is null
                                and p.deleted_at is null
                                and '" . $this->refDate . "' BETWEEN coalesce(pi.start, '" . $this->past . "') and COALESCE(pi.end, '" . $this->refDate . "')
                                
                                and s_antenna.path_string like '/patient/suivi/antenne/%'
                                and pi_antenna.deleted_at is null
                                and s_antenna.value like '" . $this->antenna . "' 
                                and pi.start <= COALESCE (pi_antenna.end, '" . $this->refDate . "')
                                and coalesce(pi.end, '" . $this->refDate . "') >= coalesce(pi_antenna.start, '" . $this->past . "') 
                
                                and s_stat.path_string like '/patient/fiche/statut-du-suivi/%'
                                and s_stat.path_string not like '/patient/fiche/statut-du-suivi/decede'
                                and '" . $this->refDate . "' between COALESCE(pi_stat.start, '" . $this->past . "') and COALESCE (pi_stat.end, '" . $this->nextyear0101 . "')
                                and pi_stat.deleted_at is null
                        ) hf on hf.id = p.id	
                        left join 
                        (	
                            select 
                                pi_path.pati_id ,
                                stel.value as problem
                            from patients_information pi_path  
                                    inner join suggestions as s2 on s2.id = pi_path.sugg_id 
                                    inner join patients_information_template_element pitel on pitel.id = pi_path.itel_id 
                                    inner join suggestions stel on stel.id = pitel.suge_id 
                            where 
                                    (
                                        stel.path_string like '/patient/fiche/assuetude/declaree%' 
                                        or s2.path_string like '/patient/medical/patholo%'
                                    ) 
                                    and pi_path.deleted_at is null 
                                    and '" . $this->refDate . "' BETWEEN coalesce(pi_path.start, '" . $this->past . "') and COALESCE(pi_path.end, '" . $this->refDate . "')
                            group by 
                                    pi_path.pati_id,
                                    stel.value
                        ) path on path.pati_id = p.id
                    where programme is not null
                    group by
                        programme, p.hash, p.firstname, p.lastname 
                ) s";

        $result = $conn->query($sql);




        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques81', name: 'app_statistiques81')]
    public function request81()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select 
                    physique as '# pathologies physiques', 
                    mentale as '# pathologies mentales', 
                    assuetude as '# d\'assuétudes'
                from 
                (
                        select 
                            sum(
                                if (path.problem like '%physique%', 1, 0)
                            ) as physique, 
                            sum(
                                if (path.problem like '%mentale%', 1, 0)
                            ) as mentale, 
                            sum(
                                if (path.problem like '%declaree%', 1, 0)
                            ) as assuetude
                        from 
                            patients p 
                            inner join 
                            (
                                select
                                    p.id,
                                    s.value as programme
                                FROM
                                    patients as p
                                    inner join patients_information as pi on p.id = pi.pati_id
                                    inner join suggestions as s on s.id = pi.sugg_id
                                    inner  join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                                    inner  join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                                    inner join patients_information as pi_stat on p.id = pi_stat.pati_id 
                                    inner join suggestions as s_stat on s_stat.id = pi_stat.sugg_id 
                                where
                                    s.path_string like '/patient/suivi/programme/housing-first'
                                    and pi.deleted_at is null
                                    and p.deleted_at is null
                                    and '" . $this->refDate . "' BETWEEN coalesce(pi.start, '" . $this->past . "') and COALESCE(pi.end, '" . $this->refDate . "')
                                    
                                    and s_antenna.path_string like '/patient/suivi/antenne/%'
                                    and pi_antenna.deleted_at is null
                                    and s_antenna.value like '" . $this->antenna . "' 
                                    and pi.start <= COALESCE (pi_antenna.end, '" . $this->refDate . "')
                                    and coalesce(pi.end, '" . $this->refDate . "') >= coalesce(pi_antenna.start, '" . $this->past . "') 
                
                                    and s_stat.path_string like '/patient/fiche/statut-du-suivi/%'
                                    and s_stat.path_string not like '/patient/fiche/statut-du-suivi/decede'
                                    and '" . $this->refDate . "' between COALESCE(pi_stat.start, '" . $this->past . "') and COALESCE (pi_stat.end, '" . $this->nextyear0101 . "')
                                    and pi_stat.deleted_at is null
                            ) hf on hf.id = p.id	
                            left join 
                            (	
                                select 
                                    pi_path.pati_id ,
                                    stel.value as problem
                                from patients_information pi_path  
                                        inner join suggestions as s2 on s2.id = pi_path.sugg_id 
                                        inner join patients_information_template_element pitel on pitel.id = pi_path.itel_id 
                                        inner join suggestions stel on stel.id = pitel.suge_id 
                                where 
                                        (
                                            stel.path_string like '/patient/fiche/assuetude/declaree%' 
                                            or s2.path_string like '/patient/medical/patholo%'
                                        ) 
                                        and pi_path.deleted_at is null 
                                        and '" . $this->refDate . "' BETWEEN coalesce(pi_path.start, '" . $this->past . "') and COALESCE(pi_path.end, '" . $this->refDate . "')
                                group by 
                                        pi_path.pati_id,
                                        stel.value
                            ) path on path.pati_id = p.id
                        where programme is not null
                
                ) s";

        $result = $conn->query($sql);




        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques80', name: 'app_statistiques80')]
    public function request80()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select 
                    sum(
                        if( (physique + mentale + assuetude) >= 2, 1, 0) 
                    ) as nbsuivisplusque2problemes 
                from (
                select 
                    p.hash,
                    p.firstname,
                    p.lastname,
                    sum(
                        if (path.problem like '%physique%', 1, 0)
                    ) as physique, 
                    sum(
                        if (path.problem like '%mentale%', 1, 0)
                    ) as mentale, 
                    sum(
                        if (path.problem like '%declaree%', 1, 0)
                    ) as assuetude
                
                from 
                    patients p 
                    inner join 
                    (	
                        select 
                            pi_path.pati_id ,
                            stel.value as problem
                        from patients_information pi_path  
                                inner join suggestions as s2 on s2.id = pi_path.sugg_id 
                                inner join patients_information_template_element pitel on pitel.id = pi_path.itel_id 
                                inner join suggestions stel on stel.id = pitel.suge_id 
                        where 
                                (
                                    stel.path_string like '/patient/fiche/assuetude/declaree%' 
                                    or s2.path_string like '/patient/medical/patholo%'
                                ) 
                                and pi_path.deleted_at is null 
                                and '" . $this->refDate . "' BETWEEN coalesce(pi_path.start, '" . $this->past . "') and COALESCE(pi_path.end, '" . $this->refDate . "')
                        group by 
                                pi_path.pati_id,
                                stel.value
                    ) path
                    on path.pati_id = p.id
                    inner join patients_information as pi on p.id = pi.pati_id 
                    inner join suggestions as s on s.id = pi.sugg_id 
                    left join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                    left join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                where 
                    s.path_string like '/patient/fiche/statut-du-suivi/en-suivi' 
                    and '" . $this->refDate . "' between COALESCE(pi.start, '" . $this->past . "') and COALESCE (pi.end, '" . $this->refDate . "' )
                    and pi.deleted_at is null 
                    and p.deleted_at is null 
                    and '" . $this->refDate . "' between coalesce(pi_antenna.start, '" . $this->past . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                    and s_antenna.path_string like '/patient/suivi/antenne/%'
                    and s_antenna.value like '" . $this->antenna . "'
                group by
                    p.hash, p.firstname, p.lastname
                ) s";

        $result = $conn->query($sql);




        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques79', name: 'app_statistiques79')]
    public function request79()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select 
                    p.hash,
                    p.firstname,
                    p.lastname,
                    sum(
                        if (path.problem like '%physique%', 1, 0)
                    ) as physique, 
                    sum(
                        if (path.problem like '%mentale%', 1, 0)
                    ) as mentale, 
                    sum(
                        if (path.problem like '%declaree%', 1, 0)
                    ) as assuetude
                
                from 
                    patients p 
                    inner join 
                    (	
                        select 
                            pi_path.pati_id ,
                            stel.value as problem
                        from patients_information pi_path  
                                inner join suggestions as s2 on s2.id = pi_path.sugg_id 
                                inner join patients_information_template_element pitel on pitel.id = pi_path.itel_id 
                                inner join suggestions stel on stel.id = pitel.suge_id 
                        where 
                                (
                                    stel.path_string like '/patient/fiche/assuetude/declaree%' 
                                    or s2.path_string like '/patient/medical/patholo%'
                                ) 
                                and pi_path.deleted_at is null 
                                and '" . $this->refDate . "' BETWEEN coalesce(pi_path.start, '" . $this->past . "') and COALESCE(pi_path.end, '" . $this->refDate . "')
                        group by 
                                pi_path.pati_id,
                                stel.value,
                                pi_path.id
                    ) path
                    on path.pati_id = p.id
                    inner join patients_information as pi on p.id = pi.pati_id 
                    inner join suggestions as s on s.id = pi.sugg_id 
                    left join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                    left join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                where 
                    s.path_string like '/patient/fiche/statut-du-suivi/en-suivi' 
                    and '" . $this->refDate . "' between COALESCE(pi.start, '" . $this->past . "') and COALESCE (pi.end, '" . $this->refDate . "' )
                    and pi.deleted_at is null 
                    and p.deleted_at is null 
                    and '" . $this->refDate . "' between coalesce(pi_antenna.start, '" . $this->past . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                    and s_antenna.path_string like '/patient/suivi/antenne/%'
                    and s_antenna.value like '" . $this->antenna . "'
                group by
                    p.hash, p.firstname, p.lastname";

        $result = $conn->query($sql);




        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }


    #[Route('/api/statistiques78', name: 'app_statistiques78')]
    public function request78()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "SELECT 
                    physique as '# pathologies physiques', 
                    mentale as '# pathologies mentales', 
                    assuetude as '# d assuétudes'
                from 
                    (
                    select 
                        sum(
                            if (path.problem like '%physique%', 1, 0)
                        ) as physique, 
                        sum(
                            if (path.problem like '%mentale%', 1, 0)
                        ) as mentale, 
                        sum(
                            if (path.problem like '%declaree%', 1, 0)
                        ) as assuetude
                
                    from 
                        patients p 
                        inner join 
                        (	
                            select 
                                pi_path.pati_id ,
                                stel.value as problem
                            from patients_information pi_path  
                                    inner join suggestions as s2 on s2.id = pi_path.sugg_id 
                                    inner join patients_information_template_element pitel on pitel.id = pi_path.itel_id 
                                    inner join suggestions stel on stel.id = pitel.suge_id 
                                where 
                                    (
                                        stel.path_string like '/patient/fiche/assuetude/declaree%' 
                                        or s2.path_string like '/patient/medical/patholo%'
                                    ) 
                                    and pi_path.deleted_at is null 
                                    and '" . $this->refDate . "' BETWEEN coalesce(pi_path.start, '" . $this->past . "') and COALESCE(pi_path.end, '" . $this->refDate . "')
                                group by 
                                    pi_path.pati_id,
                                    stel.value
                        ) path
                        on path.pati_id = p.id
                        inner join patients_information as pi on p.id = pi.pati_id 
                        inner join suggestions as s on s.id = pi.sugg_id 
                        left join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                        left join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                    where 
                        s.path_string like '/patient/fiche/statut-du-suivi/en-suivi'
                        and '" . $this->refDate . "' between COALESCE(pi.start, '" . $this->refDate . "') and COALESCE (pi.end, '" . $this->refDate . "' )
                        and pi.deleted_at is null 
                        and p.deleted_at is null 
                        and '" . $this->refDate . "' between coalesce(pi_antenna.start, '" . $this->refDate . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                        and s_antenna.path_string like '/patient/suivi/antenne/%'
                        and s_antenna.value like '" . $this->antenna . "'
                
                ) s";

        $result = $conn->query($sql);




        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques77', name: 'app_statistiques77')]
    public function request77()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "SELECT 
                    hash,
                    firstname, 
                    lastname, 
                    state, 
                    s.value as programme, 
                    q.start, 
                    birth, 
                    CAST(
                        DATE_FORMAT(
                            FROM_DAYS(
                                DATEDIFF('" . $this->refDate . "', birth)
                            ), 
                            '%Y'
                        ) as signed
                    ) AS age, 
                    p_unknown_year 
                FROM 
                    (
                        SELECT 
                            distinct
                            p.id, 
                            p.hash, 
                            p.firstname, 
                            p.lastname, 
                            pi.start, 
                            pi.end, 
                            s.value as state, 
                            p.birthdate as birth, 
                            p.unknown_year as p_unknown_year 
                        FROM 
                            patients as p 
                            inner join patients_information as pi on p.id = pi.pati_id 
                            inner join suggestions as s on s.id = pi.sugg_id 
                            left join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                            left join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                        where 
                            (
                                (
                                    s.path_string like '/patient/fiche/statut-du-suivi/en-suivi' 
                                ) 
                                or (
                                    s.path_string like '/patient/fiche/statut-du-suivi/post-suivi'
                                ) 
                            ) 
                            and '" . $this->refDate . "' between COALESCE(pi.start, '" . $this->refDate . "') and COALESCE (pi.end, '" . $this->refDate . "'	)
                            and pi.deleted_at is null 
                            and p.deleted_at is null 
                            and '" . $this->refDate . "' between coalesce(pi_antenna.start, '" . $this->refDate . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                            and s_antenna.path_string like '/patient/suivi/antenne/%'
                            and s_antenna.value like '" . $this->antenna . "'
                        order by 
                            s.value, 
                            p.firstname, 
                            p.lastname, 
                            pi.start
                    ) q 
                    inner join patients_information as pi on q.id = pi.pati_id 
                    inner join suggestions as s on s.id = pi.sugg_id 
                where 
                    s.path_string like '/patient/suivi/programme/housing-%' 
                    and '" . $this->refDate . "' between COALESCE(pi.start, '" . $this->refDate . "') and COALESCE (pi.end, '" . $this->refDate . "')
                    and pi.deleted_at is null 
                order by 
                    state, 
                    programme,
                    lastname";

        $result = $conn->query($sql);




        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques76', name: 'app_statistiques76')]
    public function request76()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "SELECT 
                    state, 
                    s.value as genre,
                    count(s.value) as echantillon, 
                    CAST(
                        AVG(
                            DATE_FORMAT(
                                FROM_DAYS(
                                    DATEDIFF('" . $this->refDate . "', birth)
                                ), 
                                '%Y'
                            )+ 0
                        ) AS SIGNED
                    ) AS 'Age moyen', 
                    CAST(
                        max(
                            DATE_FORMAT(
                                FROM_DAYS(
                                    DATEDIFF('" . $this->refDate . "', birth)
                                ), 
                                '%Y'
                            )+ 0
                        ) AS SIGNED
                    ) as 'Age maximum', 
                    CAST(
                        MIN(
                            DATE_FORMAT(
                                FROM_DAYS(
                                    DATEDIFF('" . $this->refDate . "', birth)
                                ), 
                                '%Y'
                            )+ 0
                        ) AS SIGNED
                    ) as 'Age minimum' 
                FROM 
                    (
                        SELECT 
                            distinct
                            p.id, 
                            p.hash, 
                            p.firstname, 
                            p.lastname, 
                            pi.start, 
                            pi.end, 
                            s.value as state, 
                            p.birthdate as birth, 
                            p.unknown_year as p_unknown_year 
                        FROM 
                            patients as p 
                            inner join patients_information as pi on p.id = pi.pati_id 
                            inner join suggestions as s on s.id = pi.sugg_id 
                            left join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                            left join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                        where 
                            (
                                (
                                    s.path_string like '/patient/fiche/statut-du-suivi/en-suivi'
                                ) 
                                or (
                                    s.path_string like '/patient/fiche/statut-du-suivi/post-suivi' 
                                ) 
                            ) 
                            and '" . $this->refDate . "' between COALESCE(pi.start, '" . $this->refDate . "') and COALESCE (pi.end, '" . $this->refDate . "')
                            and pi.deleted_at is null 
                            and p.deleted_at is null 
                            and '" . $this->refDate . "' between coalesce(pi_antenna.start, '" . $this->refDate . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                            and s_antenna.path_string like '/patient/suivi/antenne/%'
                            and s_antenna.value like '" . $this->antenna . "'
                        order by 
                            s.value, 
                            p.firstname, 
                            p.lastname, 
                            pi.start
                    ) q 
                    inner join patients_information as pi on q.id = pi.pati_id 
                    inner join suggestions as s on s.id = pi.sugg_id 
                where 
                    s.path_string like '/patient/suivi/programme/housing-%' 
                    and '" . $this->refDate . "' between COALESCE(pi.start, '" . $this->refDate . "') and COALESCE (pi.end, '" . $this->refDate . "')
                    and birth is NOT null 
                    AND (
                        p_unknown_year is null 
                        OR p_unknown_year = 0
                    ) 
                    and pi.deleted_at is null 
                group by 
                    state, s.value
                order by 
                    state";

        $result = $conn->query($sql);




        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques75', name: 'app_statistiques75')]
    public function request75()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "SELECT 
                    hash,
                    firstname, 
                    lastname, 
                    state, 
                    s.value as genre, 
                    q.start, 
                    birth, 
                    CAST(
                        DATE_FORMAT(
                            FROM_DAYS(
                                DATEDIFF('" . $this->refDate . "', birth)
                            ), 
                            '%Y'
                        ) as signed
                    ) AS age, 
                    p_unknown_year 
                FROM 
                    (
                        SELECT 
                            distinct
                            p.id, 
                            p.hash, 
                            p.firstname, 
                            p.lastname, 
                            pi.start, 
                            pi.end, 
                            s.value as state, 
                            p.birthdate as birth, 
                            p.unknown_year as p_unknown_year 
                        FROM 
                            patients as p 
                            inner join patients_information as pi on p.id = pi.pati_id 
                            inner join suggestions as s on s.id = pi.sugg_id 
                            left join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                            left join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                        where 
                            (
                                (
                                    s.path_string like '/patient/fiche/statut-du-suivi/en-suivi'
                                ) 
                                or (
                                    s.path_string like '/patient/fiche/statut-du-suivi/post-suivi'
                                ) 
                                or (
                                    s.path_string like '/patient/fiche/statut-du-suivi/decede'
                                    and year(pi.start) like year('" . $this->refDate . "')
                                ) 
                                or (
                                    s.path_string like '/patient/fiche/statut-du-suivi/disparu' 
                                    and year(pi.start) like year('" . $this->refDate . "')
                                )
                            ) 
                            and '" . $this->refDate . "' between COALESCE(pi.start, '" . $this->refDate . "') and COALESCE (pi.end, '" . $this->refDate . "')
                            and pi.deleted_at is null 
                            and p.deleted_at is null 
                            and '" . $this->refDate . "' between coalesce(pi_antenna.start, '" . $this->refDate . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                            and s_antenna.path_string like '/patient/suivi/antenne/%'
                            and s_antenna.value like '" . $this->antenna . "'
                        order by 
                            s.value, 
                            p.firstname, 
                            p.lastname, 
                            pi.start
                    ) q 
                    inner join patients_information as pi on q.id = pi.pati_id 
                    inner join suggestions as s on s.id = pi.sugg_id 
                where 
                    s.path_string like '/patient/fiche/information-generale/genre%' 
                    and pi.deleted_at is null 
                order by 
                    state, 
                    genre,
                    lastname";

        $result = $conn->query($sql);




        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques74', name: 'app_statistiques74')]
    public function request74()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "SELECT 
                state, 
                count(s.value) as echantillon, 
                CAST(
                    AVG(
                        DATE_FORMAT(
                            FROM_DAYS(
                                DATEDIFF('" . $this->refDate . "', birth)
                            ), 
                            '%Y'
                        )+ 0
                    ) AS SIGNED
                ) AS 'Age moyen', 
                CAST(
                    max(
                        DATE_FORMAT(
                            FROM_DAYS(
                                DATEDIFF('" . $this->refDate . "', birth)
                            ), 
                            '%Y'
                        )+ 0
                    ) AS SIGNED
                ) as 'Age maximum', 
                CAST(
                    MIN(
                        DATE_FORMAT(
                            FROM_DAYS(
                                DATEDIFF('" . $this->refDate . "', birth)
                            ), 
                            '%Y'
                        )+ 0
                    ) AS SIGNED
                ) as 'Age minimum' 
            FROM 
                (
                    SELECT 
                        distinct
                        p.id, 
                        p.hash, 
                        p.firstname, 
                        p.lastname, 
                        pi.start, 
                        pi.end, 
                        s.value as state, 
                        p.birthdate as birth, 
                        p.unknown_year as p_unknown_year 
                    FROM 
                        patients as p 
                        inner join patients_information as pi on p.id = pi.pati_id 
                        inner join suggestions as s on s.id = pi.sugg_id 
                        left join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                        left join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                    where 
                        (
                            (
                                s.path_string like '/patient/fiche/statut-du-suivi/en-suivi'
                            ) 
                            or (
                                s.path_string like '/patient/fiche/statut-du-suivi/post-suivi' 
                            ) 
                            or (
                                s.path_string like '/patient/fiche/statut-du-suivi/decede'
                                and year(pi.start) like year('" . $this->refDate . "')
                            ) 
                            or (
                                s.path_string like '/patient/fiche/statut-du-suivi/disparu'
                                and year(pi.start) like year('" . $this->refDate . "')
                            )
                        ) 
                        and '" . $this->refDate . "' between COALESCE(pi.start, '" . $this->refDate . "') and COALESCE (pi.end, '" . $this->refDate . "')
                        and pi.deleted_at is null 
                        and p.deleted_at is null 
                        and '" . $this->refDate . "' between coalesce(pi_antenna.start, '" . $this->refDate . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                        and s_antenna.path_string like '/patient/suivi/antenne/%'
                        and s_antenna.value like '" . $this->antenna . "'
                    order by 
                        s.value, 
                        p.firstname, 
                        p.lastname, 
                        pi.start
                ) q 
                inner join patients_information as pi on q.id = pi.pati_id 
                inner join suggestions as s on s.id = pi.sugg_id 
            where 
                s.path_string like '/patient/fiche/information-generale/genre%' 
                and birth is NOT null 
                AND (
                    p_unknown_year is null 
                    OR p_unknown_year = 0
                ) 
                and pi.deleted_at is null 
            group by 
                state
            order by 
                state";

        $result = $conn->query($sql);




        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }


    #[Route('/api/statistiques73', name: 'app_statistiques73')]
    public function request73()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "SELECT 
                    q.id,
                    state, 
                    s.value as genre, 
                    dd.status,
                    CAST(
                            DATE_FORMAT(
                                FROM_DAYS(
                                    DATEDIFF('" . $this->refDate . "', birth)
                                ), 
                                '%Y'
                            )+ 0
                        AS SIGNED
                    ) AS 'Age '
                FROM 
                    (
                        SELECT 
                            distinct
                            p.id, 
                            p.hash, 
                            p.firstname, 
                            p.lastname, 
                            pi.start, 
                            pi.end, 
                            s.value as state, 
                            s.path_string,
                            p.birthdate as birth, 
                            p.unknown_year as p_unknown_year 
                        FROM 
                            patients as p 
                            inner join patients_information as pi on p.id = pi.pati_id 
                            inner join suggestions as s on s.id = pi.sugg_id 
                            left join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                            left join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                        where 
                            (
                                (
                                    s.path_string like '/patient/fiche/statut-du-suivi/en-suivi'
                                ) 
                                or (
                                    s.path_string like '/patient/fiche/statut-du-suivi/post-suivi'
                                ) 
                                or (
                                    s.path_string like '/patient/fiche/statut-du-suivi/decede'
                                    and year(pi.start) like year('" . $this->refDate . "')
                                ) 
                                or (
                                    s.path_string like '/patient/fiche/statut-du-suivi/disparu'
                                    and year(pi.start) like year('" . $this->refDate . "')
                                )
                            ) 
                            and '" . $this->refDate . "' between COALESCE(pi.start, '" . $this->refDate . "') and COALESCE (pi.end, '" . $this->refDate . "')								
                            and pi.deleted_at is null 
                            and p.deleted_at is null 
                            and '" . $this->refDate . "' between coalesce(pi_antenna.start, '" . $this->refDate . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                            and s_antenna.path_string like '/patient/suivi/antenne/%'
                            and s_antenna.value like '" . $this->antenna . "'
                        order by 
                            s.value, 
                            p.firstname, 
                            p.lastname, 
                            pi.start
                    ) q 
                    left join 
                    ( /* only deceased and missing coming from suivi and post-suivi*/
                        select
                            p2.id,
                            s2.value as status,
                            s2.path_string
                        from
                            (
                                SELECT
                                    p.id as 'patientId',
                                    pi.start,
                                    pi.id as 'patientInfoId'
                                FROM
                                    patients as p
                                    inner join patients_information as pi on p.id = pi.pati_id
                                    inner join suggestions as s on s.id = pi.sugg_id
                                    left join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                                    left join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                                where
                                    s.path_string like '/patient/fiche/statut-du-suivi/decede'
                                    and pi.start is not null
                                    and year(pi.start) like year('" . $this->refDate . "')
                                    and pi.end is null
                                    and pi.deleted_at is null
                                    and p.deleted_at is null
                                    and '" . $this->refDate . "' between coalesce(pi_antenna.start, '" . $this->refDate . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                                    and s_antenna.path_string like '/patient/suivi/antenne/%'
                                    and s_antenna.value like '" . $this->antenna . "'
                            ) dcd 
                            left join patients as p2 on p2.id = dcd.patientId
                            left join patients_information as pi2 on dcd.patientId = pi2.pati_id
                            left join suggestions as s2 on s2.id = pi2.sugg_id
                        where
                            ( s2.path_string like '/patient/fiche/statut-du-suivi/en-suivi' or s2.path_string like '/patient/fiche/statut-du-suivi/post-suivi')
                            and s2.path_string not like '/patient/fiche/statut-du-suivi/decede'
                            and pi2.start is not null
                            and pi2.deleted_at is null
                            and p2.deleted_at is null
                            and 
                            ( 
                            ( to_days(dcd.start) - to_days(pi2.end) < 7 ) 
                            or (dcd.patientInfoId = pi2.id and s2.path_string like '/patient/fiche/statut-du-suivi/decede')
                            )
                    
                    ) dd on dd.id = q.id
                    inner join patients_information as pi on q.id = pi.pati_id 
                    inner join suggestions as s on s.id = pi.sugg_id 
                where 
                    s.path_string like '/patient/fiche/information-generale/genre%'
                    and (
                        (
                            q.path_string like '/patient/fiche/statut-du-suivi/en-suivi'
                            or q.path_string like '/patient/fiche/statut-du-suivi/post-suivi'
                        )
                        or
                        (
                            ( q.path_string like '/patient/fiche/statut-du-suivi/decede' or 
                            q.path_string like '/patient/fiche/statut-du-suivi/post-suivi'
                            )
                            and dd.status is not null
                        )
                    )
                    and birth is NOT null 
                    AND (
                        p_unknown_year is null 
                        OR p_unknown_year = 0
                    ) 
                    and pi.deleted_at is null 
                order by 
                    state, 
                    genre";

        $result = $conn->query($sql);




        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques72', name: 'app_statistiques72')]
    public function request72()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "SELECT 
                    state, 
                    s.value as genre, 
                    count(s.value) as echantillon, 
                    CAST(
                        AVG(
                            DATE_FORMAT(
                                FROM_DAYS(
                                    DATEDIFF('" . $this->refDate . "', birth)
                                ), 
                                '%Y'
                            )+ 0
                        ) AS SIGNED
                    ) AS 'Age moyen', 
                    CAST(
                        max(
                            DATE_FORMAT(
                                FROM_DAYS(
                                    DATEDIFF('" . $this->refDate . "', birth)
                                ), 
                                '%Y'
                            )+ 0
                        ) AS SIGNED
                    ) as 'Age maximum', 
                    CAST(
                        MIN(
                            DATE_FORMAT(
                                FROM_DAYS(
                                    DATEDIFF('" . $this->refDate . "', birth)
                                ), 
                                '%Y'
                            )+ 0
                        ) AS SIGNED
                    ) as 'Age minimum' 
                FROM 
                    (
                        SELECT 
                            distinct
                            p.id, 
                            p.hash, 
                            p.firstname, 
                            p.lastname, 
                            pi.start, 
                            pi.end, 
                            s.value as state, 
                            s.path_string,
                            p.birthdate as birth, 
                            p.unknown_year as p_unknown_year 
                        FROM 
                            patients as p 
                            inner join patients_information as pi on p.id = pi.pati_id 
                            inner join suggestions as s on s.id = pi.sugg_id 
                            left join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                            left join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                        where 
                            (
                                (
                                    s.path_string like '/patient/fiche/statut-du-suivi/en-suivi' 
                                ) 
                                or (
                                    s.path_string like '/patient/fiche/statut-du-suivi/post-suivi' 
                                ) 
                                or (
                                    s.path_string like '/patient/fiche/statut-du-suivi/decede' 
                                    and year(pi.start) like year('" . $this->refDate . "')
                                ) 
                                or (
                                    s.path_string like '/patient/fiche/statut-du-suivi/disparu' 
                                    and year(pi.start) like year('" . $this->refDate . "')
                                )
                            ) 
                            and '" . $this->refDate . "' between COALESCE(pi.start, '" . $this->refDate . "') and COALESCE (pi.end, '" . $this->refDate . "')								
                            and pi.deleted_at is null 
                            and p.deleted_at is null 
                            and '" . $this->refDate . "' between coalesce(pi_antenna.start, '" . $this->refDate . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                            and s_antenna.path_string like '/patient/suivi/antenne/%'
                            and s_antenna.value like '" . $this->antenna . "'
                        order by 
                            s.value, 
                            p.firstname, 
                            p.lastname, 
                            pi.start
                    ) q 
                    left join 
                    ( /* only deceased and missing coming from suivi and post-suivi*/
                        select
                            p2.id,
                            s2.value as status,
                            s2.path_string
                        from
                            (
                                SELECT
                                    p.id as 'patientsId',
                                    pi.start,
                                    pi.id as 'patientsinfoId'
                                FROM
                                    patients as p
                                    inner join patients_information as pi on p.id = pi.pati_id
                                    inner join suggestions as s on s.id = pi.sugg_id
                                    left join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                                    left join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                                where
                                    s.path_string like '/patient/fiche/statut-du-suivi/decede'
                                    and pi.start is not null
                                    and year(pi.start) like year('" . $this->refDate . "')
                                    and pi.end is null
                                    and pi.deleted_at is null
                                    and p.deleted_at is null
                                    and '" . $this->refDate . "' between coalesce(pi_antenna.start, '" . $this->refDate . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                                    and s_antenna.path_string like '/patient/suivi/antenne/%'
                                    and s_antenna.value like '" . $this->antenna . "'
                            ) dcd 
                            left join patients as p2 on p2.id = dcd.patientsId
                            left join patients_information as pi2 on dcd.patientsId = pi2.pati_id
                            left join suggestions as s2 on s2.id = pi2.sugg_id
                        where
                            ( s2.path_string like '/patient/fiche/statut-du-suivi/en-suivi' or s2.path_string like '/patient/fiche/statut-du-suivi/post-suivi')
                            and s2.path_string not like '/patient/fiche/statut-du-suivi/decede'
                            and pi2.start is not null
                            and pi2.deleted_at is null
                            and p2.deleted_at is null
                            and 
                            ( 
                            ( to_days(dcd.start) - to_days(pi2.end) < 7 ) 
                            or (dcd.patientsinfoId = pi2.id and s2.path_string like '/patient/fiche/statut-du-suivi/decede')
                            )
                    
                    ) dd on dd.id = q.id
                    inner join patients_information as pi on q.id = pi.pati_id 
                    inner join suggestions as s on s.id = pi.sugg_id 
                where 
                    s.path_string like '/patient/fiche/information-generale/genre%'
                    and (
                        (
                            q.path_string like '/patient/fiche/statut-du-suivi/en-suivi'
                            or q.path_string like '/patient/fiche/statut-du-suivi/post-suivi'
                        )
                        or
                        (
                            ( q.path_string like '/patient/fiche/statut-du-suivi/decede' or 
                            q.path_string like '/patient/fiche/statut-du-suivi/post-suivi'
                            )
                            and dd.status is not null
                        )
                    )
                    and birth is NOT null 
                    AND (
                        p_unknown_year is null 
                        OR p_unknown_year = 0
                    ) 
                    and pi.deleted_at is null 
                group by 
                    state, 
                    genre 
                order by 
                    state, 
                    genre";

        $result = $conn->query($sql);




        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques71', name: 'app_statistiques71')]
    public function request71()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select 
                    distinct
                    hash,
                    firstname,
                    lastname,
                    genre,
                    s_stat.value,
                    pi_stat.start as pstatus_start,
                    dd.status as 'exstatut',
                    programme_s.path_string as programme,
                    s_stat.path_string as pstatus
                from
                (
                    select 
                        distinct
                        patients.id, 
                        patients.firstname, 
                        patients.lastname, 
                        patients.hash,
                        max(COALESCE(n.value, '--inconnu--')) as genre
                    from 
                        patients 
                        left join (
                            select 
                                s.id as si, 
                                s.value, 
                                pi.pati_id 
                            from 
                                patients_information pi 
                                inner join information_template_element pitel on pitel.id = pi.itel_id 
                                inner join suggestions stel on stel.id = pitel.suge_id 
                                inner JOIN suggestions s on s.id = pi.sugg_id 
                            where 
                                stel.path_string like '/patient/fiche/information-generale/genre%'
                                and '" . $this->refDate . "' between COALESCE(pi.start, '" . $this->refDate . "') and COALESCE (pi.end, '" . $this->refDate . "')
                                and pi.deleted_at is null
                        ) n on patients.id = n.pati_id 
                    where patients.deleted_at is null
                    group by
                        patients.id,
                        patients.hash,
                        patients.firstname,
                        patients.lastname
                ) nn
                left join
                ( /* only deceased and missing coming from suivi and post-suivi*/
                    select
                        distinct
                        p2.id,
                        s2.value as status
                    from
                        (
                            SELECT
                                p.id as 'patientsId',
                                pi.start,
                                pi.id as 'patientsInformationsId'
                            FROM
                                patients as p
                                inner join patients_information as pi on p.id = pi.pati_id
                                inner join suggestions as s on s.id = pi.sugg_id
                                left join patients_information pi_antenna on pi_antenna.pati_id = p.id
                                left join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id
                            where
                                s.path_string like '/patient/fiche/statut-du-suivi/decede'
                                and pi.start is not null
                                and year(pi.start) = year('" . $this->refDate . "')
                                and pi.end is null
                                and pi.deleted_at is null
                                and p.deleted_at is null
                                and '" . $this->refDate . "' between coalesce(pi_antenna.start, '" . $this->refDate . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                                and s_antenna.path_string like '/patient/suivi/antenne/%'
                                and s_antenna.value like '" . $this->antenna . "'
                        ) dcd
                        left join patients as p2 on p2.id = dcd.patientsId
                        left join patients_information as pi2 on dcd.patientsId = pi2.pati_id
                        left join suggestions as s2 on s2.id = pi2.sugg_id
                    where
                        ( s2.path_string like '/patient/fiche/statut-du-suivi/en-suivi' or s2.path_string like '/patient/fiche/statut-du-suivi/post-suivi')
                        and s2.path_string not like '/patient/fiche/statut-du-suivi/decede'
                        and pi2.start is not null
                        and pi2.deleted_at is null
                        and p2.deleted_at is null
                        and
                        (
                            ( to_days(dcd.start) - to_days(pi2.end) < 7 )
                            or (dcd.patientsInformationsId = pi2.id and s2.path_string like '/patient/fiche/statut-du-suivi/decede')
                        )
                    
                ) dd on dd.id = nn.id
                
                inner join patients_information as programme on nn.id = programme.pati_id
                inner join suggestions as programme_s on programme_s.id = programme.sugg_id
                
                inner join patients_information as pi_stat on nn.id = pi_stat.pati_id
                inner join suggestions as s_stat on s_stat.id = pi_stat.sugg_id
                
                left join patients_information pi_antenna on pi_antenna.pati_id = nn.id
                left join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id

                where
                    programme_s.path_string like '/patient/suivi/programme/housing-%'
                    and '" . $this->refDate . "' between COALESCE(programme.start, '" . $this->refDate . "') and COALESCE (programme.end, '" . $this->refDate . "')
                    and
                    (	
                        (
                            s_stat.path_string like '/patient/fiche/statut-du-suivi/en-suivi'
                            and '" . $this->refDate . "' between COALESCE(pi_stat.start, '" . $this->refDate . "') and COALESCE (pi_stat.end, '" . $this->refDate . "')
                        )
                        or (
                            s_stat.path_string like '/patient/fiche/statut-du-suivi/post-suivi'
                            and '" . $this->refDate . "' between COALESCE(pi_stat.start, '" . $this->refDate . "') and COALESCE (pi_stat.end, '" . $this->refDate . "')
                        )
                        or (
                            s_stat.path_string like '/patient/fiche/statut-du-suivi/decede'
                            and year(pi_stat.start) = year('" . $this->refDate . "')
                            and dd.status is not null
                        )
                        or (
                            s_stat.path_string like '/patient/fiche/statut-du-suivi/disparu'
                            and year(pi_stat.start) = year('" . $this->refDate . "')
                            and dd.status is not null
                        )
                    )
                    and programme.deleted_at is null
                    and '" . $this->refDate . "' between coalesce(pi_antenna.start, '" . $this->refDate . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                    and s_antenna.path_string like '/patient/suivi/antenne/%'
                    and s_antenna.value like '" . $this->antenna . "'
                    and pi_antenna.deleted_at is null
                    and pi_stat.deleted_at is null

                order by programme, pstatus, genre, hash";

        $result = $conn->query($sql);




        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }


    #[Route('/api/statistiques70', name: 'app_statistiques70')]
    public function request70()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select 
                    genre, 
                    sum(if (programme like '/patient/suivi/programme/housing-fast' and exstatut is null, 1, 0)) as housingfast, 
                    sum(if (programme like '/patient/suivi/programme/housing-first' and exstatut is null, 1, 0)) as housingfirst, 
                    sum(if (programme like '/patient/suivi/programme/housing-%' and exstatut is null, 1, 0)) as total,
                    sum(if (programme like '/patient/suivi/programme/housing-%' and pstatus like '/patient/fiche/statut-du-suivi/decede' and year(pstatus_start) like year('" . $this->refDate . "'), 1, 0)) as decedes, 
                    sum(if (programme like '/patient/suivi/programme/housing-%' and pstatus like '/patient/fiche/statut-du-suivi/disparu' and year(pstatus_start) like year('" . $this->refYear . "'), 1, 0)) as disparus 
                
                from 
                (
                
                    select 
                        distinct
                        hash,
                        firstname,
                        lastname,
                        genre,
                        s_stat.value,
                        pi_stat.start as pstatus_start,
                        dd.status as 'exstatut',
                        programme_s.path_string as programme,
                        s_stat.path_string as pstatus
                    from
                    (
                        select 
                            distinct
                            patients.id, 
                            patients.firstname, 
                            patients.lastname, 
                            patients.hash,
                            max(COALESCE(n.value, '--inconnu--')) as genre
                        from 
                            patients 
                            left join (
                                select 
                                    s.id as si, 
                                    s.value, 
                                    pi.pati_id 
                                from 
                                    patients_information pi 
                                    inner join information_template_element pitel on pitel.id = pi.itel_id 
                                    inner join suggestions stel on stel.id = pitel.suge_id 
                                    inner JOIN suggestions s on s.id = pi.sugg_id 
                                where 
                                    stel.path_string like '/patient/fiche/information-generale/genre%'
                                    and '" . $this->refDate . "' between COALESCE(pi.start, '" . $this->refDate . "') and COALESCE (pi.end, '" . $this->refDate . "')
                                    and pi.deleted_at is null
                            ) n on patients.id = n.pati_id 
                        where patients.deleted_at is null
                        group by
                            patients.id,
                            patients.hash,
                            patients.firstname,
                            patients.lastname
                    ) nn
                    left join
                    ( /* only deceased and missing coming from suivi and post-suivi*/
                        select
                            distinct
                            p2.id,
                            s2.value as status
                        from
                            (
                                SELECT
                                    p.id as 'patientsId',
                                    pi.start,
                                    pi.id as 'patientsInfosId'
                                FROM
                                    patients as p
                                    inner join patients_information as pi on p.id = pi.pati_id
                                    inner join suggestions as s on s.id = pi.sugg_id
                                    left join patients_information pi_antenna on pi_antenna.pati_id = p.id
                                    left join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id
                                where
                                    s.path_string like '/patient/fiche/statut-du-suivi/decede'
                                    and pi.start is not null
                                    and year(pi.start) = year('" . $this->refDate . "')
                                    and pi.end is null
                                    and pi.deleted_at is null
                                    and p.deleted_at is null
                                    and '" . $this->refDate . "' between coalesce(pi_antenna.start, '" . $this->refDate . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                                    and s_antenna.path_string like '/patient/suivi/antenne/%'
                                    and s_antenna.value like '" . $this->antenna . "'
                            ) dcd
                            left join patients as p2 on p2.id = dcd.patientsId
                            left join patients_information as pi2 on dcd.patientsId = pi2.pati_id
                            left join suggestions as s2 on s2.id = pi2.sugg_id
                        where
                            ( s2.path_string like '/patient/fiche/statut-du-suivi/en-suivi' or s2.path_string like '/patient/fiche/statut-du-suivi/post-suivi')
                            and s2.path_string not like '/patient/fiche/statut-du-suivi/decede'
                            and pi2.start is not null
                            and pi2.deleted_at is null
                            and p2.deleted_at is null
                            and
                            (
                                ( to_days(dcd.start) - to_days(pi2.end) < 7 )
                                or (dcd.patientsInfosId = pi2.id and s2.path_string like '/patient/fiche/statut-du-suivi/decede')
                            )
                        
                    ) dd on dd.id = nn.id
                    
                    inner join patients_information as programme on nn.id = programme.pati_id
                    inner join suggestions as programme_s on programme_s.id = programme.sugg_id
                    
                    inner join patients_information as pi_stat on nn.id = pi_stat.pati_id
                    inner join suggestions as s_stat on s_stat.id = pi_stat.sugg_id
                    
                    left join patients_information pi_antenna on pi_antenna.pati_id = nn.id
                    left join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id
                
                    where
                        programme_s.path_string like '/patient/suivi/programme/housing-%'
                        and '" . $this->refDate . "' between COALESCE(programme.start, '" . $this->refDate . "') and COALESCE (programme.end, '" . $this->refDate . "')
                        and
                        (	
                            (
                                s_stat.path_string like '/patient/fiche/statut-du-suivi/en-suivi'
                                and '" . $this->refDate . "' between COALESCE(pi_stat.start, '" . $this->refDate . "') and COALESCE (pi_stat.end, '" . $this->refDate . "')
                            )
                            or (
                                s_stat.path_string like '/patient/fiche/statut-du-suivi/post-suivi'
                                and '" . $this->refDate . "' between COALESCE(pi_stat.start, '" . $this->refDate . "') and COALESCE (pi_stat.end, '" . $this->refDate . "')
                            )
                            or (
                                s_stat.path_string like '/patient/fiche/statut-du-suivi/decede'
                                and year(pi_stat.start) = year('" . $this->refDate . "')
                                and dd.status is not null
                            )
                            or (
                                s_stat.path_string like '/patient/fiche/statut-du-suivi/disparu'
                                and year(pi_stat.start) = year('" . $this->refDate . "')
                                and dd.status is not null
                            )
                        )
                        and programme.deleted_at is null
                        and '" . $this->refDate . "' between coalesce(pi_antenna.start, '" . $this->refDate . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                        and s_antenna.path_string like '/patient/suivi/antenne/%'
                        and s_antenna.value like '" . $this->antenna . "'
                        and pi_antenna.deleted_at is null
                        and pi_stat.deleted_at is null
                
                    order by programme, pstatus, genre, hash
                
                ) f
                group by 
                    genre 
                order by 
                    total desc";

        $result = $conn->query($sql);




        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques69', name: 'app_statistiques69')]
    public function request69()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select 
                    distinct
                    hash, 
                    firstname, 
                    lastname, 
                    genre,
                    s2.value as statut,
                    dd.status as 'exstatut'
                from 
                    (

                    select
                        patients.id,
                        patients.firstname,
                        patients.lastname,
                        patients.hash,
                        COALESCE(n.value, '--inconnu--') as genre
                    from
                        patients
                        left join (
                            select
                                s.id as si,
                                s.value,
                                pi.pati_id as 'patientInfosPatiId'
                            from
                                patients_information pi
                                inner join information_template_element pitel on pitel.id = pi.itel_id
                                inner join suggestions stel on stel.id = pitel.suge_id
                                inner JOIN suggestions s on s.id = pi.sugg_id
                            where
                                stel.path_string like '/patient/fiche/information-generale/genre%'
                                and '" . $this->refDate . "' between COALESCE(pi.start, '" . $this->refDate . "') and COALESCE (pi.end, '" . $this->refDate . "')
                                and pi.deleted_at is null
                            ) n on patients.id = n.patientInfosPatiId 
                        where patients.deleted_at is null
                        group by 
                            patients.id, 
                            patients.hash,
                            patients.firstname, 
                            patients.lastname
                    ) nn 
                    left join 
                    ( /* only deceased and missing coming from suivi and post-suivi*/
                        select
                            distinct
                            p2.id,
                            s2.value as status
                        from
                            (
                                SELECT
                                    p.id as 'patientsId',
                                    pi.start,
                                    pi.id as 'patiInfosId'
                                FROM
                                    patients as p
                                    inner join patients_information as pi on p.id = pi.pati_id
                                    inner join suggestions as s on s.id = pi.sugg_id
                                    left join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                                    left join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                                where
                                    s.path_string like '/patient/fiche/statut-du-suivi/decede'
                                    and pi.start is not null
                                    and year(pi.start) = year('" . $this->refDate . "')
                                    and pi.end is null
                                    and pi.deleted_at is null
                                    and p.deleted_at is null
                                    and '" . $this->refDate . "' between coalesce(pi_antenna.start, '" . $this->refDate . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                                    and s_antenna.path_string like '/patient/suivi/antenne/%'
                                    and s_antenna.value like '" . $this->antenna . "'
                            ) dcd 
                            left join patients as p2 on p2.id = dcd.patientsId
                            left join patients_information as pi2 on dcd.patientsId = pi2.pati_id
                            left join suggestions as s2 on s2.id = pi2.sugg_id
                        where
                            ( s2.path_string like '/patient/fiche/statut-du-suivi/en-suivi' or s2.path_string like '/patient/fiche/statut-du-suivi/post-suivi')
                            and s2.path_string not like '/patient/fiche/statut-du-suivi/decede' 
                            and pi2.start is not null
                            and pi2.deleted_at is null
                            and p2.deleted_at is null
                            and 
                            ( 
                            ( to_days(dcd.start) - to_days(pi2.end) < 7 ) 
                            or (dcd.patiInfosId = pi2.id and s2.path_string like '/patient/fiche/statut-du-suivi/decede')
                            )
                    
                    ) dd on dd.id = nn.id
                    inner join patients_information as pi2 on nn.id = pi2.pati_id 
                    inner join suggestions as s2 on s2.id = pi2.sugg_id 
                    left join patients_information pi_antenna on pi_antenna.pati_id = nn.id 
                    left join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 

                where 
                    (	
                        (
                            s2.path_string like '/patient/fiche/statut-du-suivi/en-suivi'
                        ) 
                        or (
                            s2.path_string like '/patient/fiche/statut-du-suivi/post-suivi'
                        ) 
                        or (
                            s2.path_string like '/patient/fiche/statut-du-suivi/decede'
                            and year(pi2.start) = year('" . $this->refDate . "')
                            and dd.status is not null
                        ) 
                        or (
                            s2.path_string like '/patient/fiche/statut-du-suivi/disparu'
                            and year(pi2.start) = year('" . $this->refDate . "')
                            and dd.status is not null
                        )
                    ) 
                    and '" . $this->refDate . "' between COALESCE(pi2.start, '" . $this->refDate . "') and COALESCE (pi2.end, '" . $this->refDate . "')
                    and pi2.deleted_at is null 
                    and '" . $this->refDate . "' between coalesce(pi_antenna.start, '" . $this->refDate . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                    and s_antenna.path_string like '/patient/suivi/antenne/%'
                    and s_antenna.value like '" . $this->antenna . "'

                order by genre, statut, hash";

        $result = $conn->query($sql);




        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques68', name: 'app_statistiques68')]
    public function request68()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select 
                    genre, 
                    sum(if (statut_ps like '/patient/fiche/statut-du-suivi/en-suivi' and exstatut is null, 1, 0)) as ensuivi, 
                    sum(if (statut_ps like '/patient/fiche/statut-du-suivi/post-suivi' and exstatut is null, 1, 0)) as postsuivi, 
                    sum(if (statut_ps like '/patient/fiche/statut-du-suivi/post-suivi' or statut_ps like '/patient/fiche/statut-du-suivi/en-suivi', 1, 0)	) as postsuivietensuivi, 
                    sum(if (statut_ps like '/patient/fiche/statut-du-suivi/decede' , 1, 0)) as decedes, 
                    sum(if (statut_ps like '/patient/fiche/statut-du-suivi/disparu' , 1, 0)	) as disparus 
                from 
                (
                    select 
                        distinct
                        hash, 
                        firstname, 
                        lastname, 
                        genre,
                        s2.value as statut,
                        s2.path_string as statut_ps,
                        dd.status as 'exstatut'
                    from 
                        (
                
                        select 
                                distinct
                                patients.id as 'patientsId', 
                                patients.firstname, 
                                patients.lastname, 
                                patients.hash, 
                                max(COALESCE(n.value, '--inconnu--')) as genre
                            from 
                                patients 
                                left join (
                                    select 
                                        s.id as si, 
                                        s.value, 
                                        pi.pati_id as 'pinfoPatientId'
                                    from 
                                        patients_information pi 
                                        inner join information_template_element pitel on pitel.id = pi.itel_id 
                                        inner join suggestions stel on stel.id = pitel.suge_id 
                                        inner JOIN suggestions s on s.id = pi.sugg_id 
                                    where 
                                        stel.path_string like '/patient/fiche/information-generale/genre%'
                                        and '" . $this->refDate . "' between COALESCE(pi.start, '" . $this->refDate . "') and COALESCE (pi.end, '" . $this->refDate . "')
                                        and pi.deleted_at is null
                                ) n on patients.id = n.pinfoPatientId 
                            where patients.deleted_at is null
                            group by 
                                patients.id, 
                                patients.hash,
                                patients.firstname, 
                                patients.lastname
                        ) nn 
                        left join 
                        ( /* only deceased and missing coming from suivi and post-suivi*/
                            select
                                distinct
                                p2.id,
                                s2.value as status
                            from
                                (
                                    SELECT
                                        p.id as 'patientsId',
                                        pi.start,
                                        pi.id as 'patientsInfosId'
                                    FROM
                                        patients as p
                                        inner join patients_information as pi on p.id = pi.pati_id
                                        inner join suggestions as s on s.id = pi.sugg_id
                                        left join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                                        left join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                                    where
                                        s.path_string like '/patient/fiche/statut-du-suivi/decede'
                                        and pi.start is not null
                                        and year(pi.start) = year('" . $this->refDate . "')
                                        and pi.end is null
                                        and pi.deleted_at is null
                                        and p.deleted_at is null
                                        and '" . $this->refDate . "' between coalesce(pi_antenna.start, '" . $this->refDate . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                                        and s_antenna.path_string like '/patient/suivi/antenne/%'
                                        and s_antenna.value like '" . $this->antenna . "'
                                ) dcd 
                                left join patients as p2 on p2.id = dcd.patientsId
                                left join patients_information as pi2 on dcd.patientsId = pi2.pati_id
                                left join suggestions as s2 on s2.id = pi2.sugg_id
                            where
                                ( s2.path_string like '/patient/fiche/statut-du-suivi/en-suivi' or s2.path_string like '/patient/fiche/statut-du-suivi/post-suivi')
                                and s2.path_string not like '/patient/fiche/statut-du-suivi/decede'
                                and pi2.start is not null
                                and pi2.deleted_at is null
                                and p2.deleted_at is null
                                and 
                                ( 
                                ( to_days(dcd.start) - to_days(pi2.end) < 7 ) 
                                or (dcd.patientsInfosId = pi2.id and s2.path_string like '/patient/fiche/statut-du-suivi/decede')
                                )
                        
                        ) dd on dd.id = nn.patientsId
                        inner join patients_information as pi2 on nn.patientsId = pi2.pati_id 
                        inner join suggestions as s2 on s2.id = pi2.sugg_id 
                        left join patients_information pi_antenna on pi_antenna.pati_id = nn.patientsId 
                        left join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                
                    where 
                        (	
                            (
                                s2.path_string like '/patient/fiche/statut-du-suivi/en-suivi'
                            ) 
                            or (
                                s2.path_string like '/patient/fiche/statut-du-suivi/post-suivi'
                            ) 
                            or (
                                s2.path_string like '/patient/fiche/statut-du-suivi/decede' 
                                and year(pi2.start) = year('" . $this->refDate . "')
                                and dd.status is not null
                            ) 
                            or (
                                s2.path_string like '/patient/fiche/statut-du-suivi/disparu'
                                and year(pi2.start) = year('" . $this->refDate . "')
                                and dd.status is not null
                            )
                        ) 
                        and '" . $this->refDate . "' between COALESCE(pi2.start, '" . $this->refDate . "') and COALESCE (pi2.end, '" . $this->refDate . "')
                        and pi2.deleted_at is null 
                        and '" . $this->refDate . "' between coalesce(pi_antenna.start, '" . $this->refDate . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                        and s_antenna.path_string like '/patient/suivi/antenne/%'
                        and s_antenna.value like '" . $this->antenna . "'
                
                    order by genre, hash
                ) f
                group by 
                    genre
                order by 
                    postsuivietensuivi desc";

        $result = $conn->query($sql);




        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques67', name: 'app_statistiques67')]
    public function request67()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select 
                    distinct
                    hash,
                    firstname,
                    lastname,
                    nationalite,
                    s_stat.value,
                    pi_stat.start as pstatus_start,
                    dd.status as 'exstatut',
                    programme_s.path_string as programme,
                    s_stat.path_string as pstatus
                from
                (
                    select 
                        distinct
                        patients.id, 
                        patients.firstname, 
                        patients.lastname, 
                        patients.hash,
                        if (
                            n.value != 'Belgique' 
                            and n.value is not null, 
                            'Etranger', 
                            COALESCE(n.value, 'Inconnu')
                        ) as nationalite 
                    from 
                        patients
                        left join (
                            select
                                s.id as si,
                                s.value,
                                pi.pati_id
                            from
                                patients_information pi
                                inner JOIN suggestions s on s.id = pi.sugg_id
                                inner join patients_information_template_element pitel on pitel.id = pi.itel_id
                                inner join suggestions stel on stel.id = pitel.suge_id
                            where
                                stel.path_string like '/patient/fiche/information-generale/nationalite'
                                and '" . $this->refDate . "' between COALESCE(pi.start, '" . $this->refDate . "') and COALESCE (pi.end, '" . $this->refDate . "')
                                and pi.deleted_at is null
                        ) n on patients.id = n.pati_id
                    where patients.deleted_at is null
                    group by
                        patients.id,
                        patients.hash,
                        patients.firstname,
                        patients.lastname
                ) nn
                left join
                ( /* only deceased and missing coming from suivi and post-suivi*/
                    select
                        distinct
                        p2.id,
                        s2.value as status
                    from
                        (
                            SELECT
                                p.id as 'patientsId',
                                pi.start,
                                pi.id as 'patientsInfosId'
                            FROM
                                patients as p
                                inner join patients_information as pi on p.id = pi.pati_id
                                inner join suggestions as s on s.id = pi.sugg_id
                                left join patients_information pi_antenna on pi_antenna.pati_id = p.id
                                left join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id
                            where
                                s.path_string like '/patient/fiche/statut-du-suivi/decede'
                                and pi.start is not null
                                and year(pi.start) = year('" . $this->refDate . "')
                                and pi.end is null
                                and pi.deleted_at is null
                                and p.deleted_at is null
                                and '" . $this->refDate . "' between coalesce(pi_antenna.start, '" . $this->refDate . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                                and s_antenna.path_string like '/patient/suivi/antenne/%'
                                and s_antenna.value like '" . $this->antenna . "'
                        ) dcd
                        left join patients as p2 on p2.id = dcd.patientsId
                        left join patients_information as pi2 on dcd.patientsId = pi2.pati_id
                        left join suggestions as s2 on s2.id = pi2.sugg_id
                    where
                        ( s2.path_string like '/patient/fiche/statut-du-suivi/en-suivi' or s2.path_string like '/patient/fiche/statut-du-suivi/post-suivi')
                        and s2.path_string not like '/patient/fiche/statut-du-suivi/decede'
                        and pi2.start is not null
                        and pi2.deleted_at is null
                        and p2.deleted_at is null
                        and
                        (
                            ( to_days(dcd.start) - to_days(pi2.end) < 7 )
                            or (dcd.patientsInfosId = pi2.id and s2.path_string like '/patient/fiche/statut-du-suivi/decede')
                        )
                    
                ) dd on dd.id = nn.id
                
                inner join patients_information as programme on nn.id = programme.pati_id
                inner join suggestions as programme_s on programme_s.id = programme.sugg_id
                
                inner join patients_information as pi_stat on nn.id = pi_stat.pati_id
                inner join suggestions as s_stat on s_stat.id = pi_stat.sugg_id
                
                left join patients_information pi_antenna on pi_antenna.pati_id = nn.id
                left join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id

                where
                    programme_s.path_string like '/patient/suivi/programme/housing-%'
                    and '" . $this->refDate . "' between COALESCE(programme.start, '" . $this->refDate . "') and COALESCE (programme.end, '" . $this->refDate . "')
                    and
                    (	
                        (
                            s_stat.path_string like '/patient/fiche/statut-du-suivi/en-suivi'
                            and '" . $this->refDate . "' between COALESCE(pi_stat.start, '" . $this->refDate . "') and COALESCE (pi_stat.end, '" . $this->refDate . "')
                        )
                        or (
                            s_stat.path_string like '/patient/fiche/statut-du-suivi/post-suivi'
                            and '" . $this->refDate . "' between COALESCE(pi_stat.start, '" . $this->refDate . "') and COALESCE (pi_stat.end, '" . $this->refDate . "')
                        )
                        or (
                            s_stat.path_string like '/patient/fiche/statut-du-suivi/decede'
                            and year(pi_stat.start) = year('" . $this->refDate . "')
                            and dd.status is not null
                        )
                        or (
                            s_stat.path_string like '/patient/fiche/statut-du-suivi/disparu'
                            and year(pi_stat.start) = year('" . $this->refDate . "')
                            and dd.status is not null
                        )
                    )
                    and programme.deleted_at is null
                    and '" . $this->refDate . "' between coalesce(pi_antenna.start, '" . $this->refDate . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                    and s_antenna.path_string like '/patient/suivi/antenne/%'
                    and s_antenna.value like '" . $this->antenna . "'
                    and pi_antenna.deleted_at is null
                    and pi_stat.deleted_at is null

                order by programme, pstatus, nationalite, hash";

        $result = $conn->query($sql);




        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques66', name: 'app_statistiques66')]
    public function request66()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select 
                    nationalite, 
                    sum(if (programme like '/patient/suivi/programme/housing-fast' and exstatut is null, 1, 0)) as housingfast, 
                    sum(if (programme like '/patient/suivi/programme/housing-first' and exstatut is null, 1, 0)) as housingfirst, 
                    sum(if (programme like '/patient/suivi/programme/housing-%' and exstatut is null, 1, 0)) as total,
                    sum(if (programme like '/patient/suivi/programme/housing-%' and pstatus like '/patient/fiche/statut-du-suivi/decede' and year(pstatus_start) like year('" . $this->refDate . "'), 1, 0)) as decedes, 
                    sum(if (programme like '/patient/suivi/programme/housing-%' and pstatus like '/patient/fiche/statut-du-suivi/disparu' and year(pstatus_start) like year('" . $this->refYear . "'), 1, 0)) as disparus 
                
                from 
                (
                
                
                    select 
                        distinct
                        hash,
                        firstname,
                        lastname,
                        nationalite,
                        s_stat.value,
                        pi_stat.start as pstatus_start,
                        dd.status as 'exstatut',
                        programme_s.path_string as programme,
                        s_stat.path_string as pstatus
                    from
                    (
                        select 
                            distinct
                            patients.id, 
                            patients.firstname, 
                            patients.lastname, 
                            patients.hash,
                            if (
                                n.value != 'Belgique' 
                                and n.value is not null, 
                                'Etranger', 
                                COALESCE(n.value, '--Inconnu--')
                            ) as nationalite 
                        from 
                            patients
                            left join (
                                select
                                    s.id as si,
                                    s.value,
                                    pi.pati_id
                                from
                                    patients_information pi
                                    inner JOIN suggestions s on s.id = pi.sugg_id
                                    inner join patients_information_template_element pitel on pitel.id = pi.itel_id
                                    inner join suggestions stel on stel.id = pitel.suge_id
                                where
                                    stel.path_string like '/patient/fiche/information-generale/nationalite'
                                    and '" . $this->refDate . "' between COALESCE(pi.start, '" . $this->refDate . "') and COALESCE (pi.end, '" . $this->refDate . "')
                                    and pi.deleted_at is null
                            ) n on patients.id = n.pati_id
                        where patients.deleted_at is null
                        group by
                            patients.id,
                            patients.hash,
                            patients.firstname,
                            patients.lastname
                    ) nn
                    left join
                    ( /* only deceased and missing coming from suivi and post-suivi*/
                        select
                            distinct
                            p2.id,
                            s2.value as status
                        from
                            (
                                SELECT
                                    p.id as 'patientsId',
                                    pi.start,
                                    pi.id as 'patientsInfosId'
                                FROM
                                    patients as p
                                    inner join patients_information as pi on p.id = pi.pati_id
                                    inner join suggestions as s on s.id = pi.sugg_id
                                    left join patients_information pi_antenna on pi_antenna.pati_id = p.id
                                    left join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id
                                where
                                    s.path_string like '/patient/fiche/statut-du-suivi/decede'
                                    and pi.start is not null
                                    and year(pi.start) = year('" . $this->refDate . "')
                                    and pi.end is null
                                    and pi.deleted_at is null
                                    and p.deleted_at is null
                                    and '" . $this->refDate . "' between coalesce(pi_antenna.start, '" . $this->refDate . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                                    and s_antenna.path_string like '/patient/suivi/antenne/%'
                                    and s_antenna.value like '" . $this->antenna . "'
                            ) dcd
                            left join patients as p2 on p2.id = dcd.patientsId
                            left join patients_information as pi2 on dcd.patientsId = pi2.pati_id
                            left join suggestions as s2 on s2.id = pi2.sugg_id
                        where
                            ( s2.path_string like '/patient/fiche/statut-du-suivi/en-suivi' or s2.path_string like '/patient/fiche/statut-du-suivi/post-suivi')
                            and s2.path_string not like '/patient/fiche/statut-du-suivi/decede'
                            and pi2.start is not null
                            and pi2.deleted_at is null
                            and p2.deleted_at is null
                            and
                            (
                                ( to_days(dcd.start) - to_days(pi2.end) < 7 )
                                or (dcd.patientsInfosId = pi2.id and s2.path_string like '/patient/fiche/statut-du-suivi/decede')
                            )
                        
                    ) dd on dd.id = nn.id
                    
                    inner join patients_information as programme on nn.id = programme.pati_id
                    inner join suggestions as programme_s on programme_s.id = programme.sugg_id
                    
                    inner join patients_information as pi_stat on nn.id = pi_stat.pati_id
                    inner join suggestions as s_stat on s_stat.id = pi_stat.sugg_id
                    
                    left join patients_information pi_antenna on pi_antenna.pati_id = nn.id
                    left join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id
                
                    where
                        programme_s.path_string like '/patient/suivi/programme/housing-%'
                        and '" . $this->refDate . "' between COALESCE(programme.start, '" . $this->refDate . "') and COALESCE (programme.end, '" . $this->refDate . "')
                        and
                        (	
                            (
                                s_stat.path_string like '/patient/fiche/statut-du-suivi/en-suivi'
                                and '" . $this->refDate . "' between COALESCE(pi_stat.start, '" . $this->refDate . "') and COALESCE (pi_stat.end, '" . $this->refDate . "')
                            )
                            or (
                                s_stat.path_string like '/patient/fiche/statut-du-suivi/post-suivi'
                                and '" . $this->refDate . "' between COALESCE(pi_stat.start, '" . $this->refDate . "') and COALESCE (pi_stat.end, '" . $this->refDate . "')
                            )
                            or (
                                s_stat.path_string like '/patient/fiche/statut-du-suivi/decede'
                                and year(pi_stat.start) = year('" . $this->refDate . "')
                                and dd.status is not null
                            )
                            or (
                                s_stat.path_string like '/patient/fiche/statut-du-suivi/disparu'
                                and year(pi_stat.start) = year('" . $this->refDate . "')
                                and dd.status is not null
                            )
                        )
                        and programme.deleted_at is null
                        and '" . $this->refDate . "' between coalesce(pi_antenna.start, '" . $this->refDate . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                        and s_antenna.path_string like '/patient/suivi/antenne/%'
                        and s_antenna.value like '" . $this->antenna . "'
                        and pi_antenna.deleted_at is null
                        and pi_stat.deleted_at is null
                
                    order by programme, pstatus, nationalite, hash
                
                
                ) f
                group by 
                    nationalite 
                order by 
                    total desc";

        $result = $conn->query($sql);




        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques65', name: 'app_statistiques65')]
    public function request65()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select 
                    nationalite, 
                    sum(if (path_string like '/patient/fiche/statut-du-suivi/en-suivi' and exstatut is null, 1, 0)) as ensuivi, 
                    sum(if (path_string like '/patient/fiche/statut-du-suivi/post-suivi' and exstatut is null, 1, 0)) as postsuivi, 
                    sum(if (path_string like '/patient/fiche/statut-du-suivi/post-suivi' or path_string like '/patient/fiche/statut-du-suivi/en-suivi', 1, 0)	) as postsuivietensuivi, 
                    sum(if (path_string like '/patient/fiche/statut-du-suivi/decede' , 1, 0)) as decedes, 
                    sum(if (path_string like '/patient/fiche/statut-du-suivi/disparu' , 1, 0)	) as disparus 
                from 
                (
                    select 
                        distinct
                        hash, 
                        firstname, 
                        lastname, 
                        nationalite,
                        s2.value,
                        s2.path_string,
                        dd.status as 'exstatut'
                    from 
                        (
                
                        select 
                                distinct
                                patients.id as 'patientsid', 
                                patients.firstname, 
                                patients.lastname, 
                                patients.hash, 
                                if (
                                    n.value != 'Belgique'
                                    and n.value is not null, 
                                    'Etranger', 
                                    COALESCE(n.value, 'Inconnu')
                                ) as nationalite 
                            from 
                                patients 
                                left join (
                                    select 
                                        s.id as si, 
                                        s.value, 
                                        pi.pati_id
                                    from 
                                        patients_information pi 
                                        inner JOIN suggestions s on s.id = pi.sugg_id 
                                        inner join patients_information_template_element pitel on pitel.id = pi.itel_id 
                                        inner join suggestions stel on stel.id = pitel.suge_id 
                                    where
                                        stel.path_string like '/patient/fiche/information-generale/nationalite' 
                                        and '" . $this->refDate . "' between COALESCE(pi.start, '" . $this->refDate . "') and COALESCE (pi.end, '" . $this->refDate . "')
                                        and pi.deleted_at is null
                                ) n on patients.id = n.pati_id 
                            where patients.deleted_at is null
                            group by 
                                patients.id, 
                                patients.hash,
                                patients.firstname, 
                                patients.lastname
                        ) nn 
                        left join 
                        ( /* only deceased and missing coming from suivi and post-suivi*/
                            select
                                distinct
                                p2.id,
                                s2.value as status
                            from
                                (
                                    SELECT
                                        p.id as 'patientsid',
                                        pi.start,
                                        pi.id
                                    FROM
                                        patients as p
                                        inner join patients_information as pi on p.id = pi.pati_id
                                        inner join suggestions as s on s.id = pi.sugg_id
                                        left join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                                        left join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                                    where
                                        s.path_string like '/patient/fiche/statut-du-suivi/decede'
                                        and pi.start is not null
                                        and year(pi.start) = year('" . $this->refDate . "')
                                        and pi.end is null
                                        and pi.deleted_at is null
                                        and p.deleted_at is null
                                        and '" . $this->refDate . "' between coalesce(pi_antenna.start, '" . $this->refDate . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                                        and s_antenna.path_string like '/patient/suivi/antenne/%'
                                        and s_antenna.value like '" . $this->antenna . "'
                                ) dcd 
                                left join patients as p2 on p2.id = dcd.patientsId
                                left join patients_information as pi2 on dcd.patientsId = pi2.pati_id
                                left join suggestions as s2 on s2.id = pi2.sugg_id
                            where
                                ( s2.path_string like '/patient/fiche/statut-du-suivi/en-suivi' or s2.path_string like '/patient/fiche/statut-du-suivi/post-suivi')
                                and s2.path_string not like '/patient/fiche/statut-du-suivi/decede' 
                                and pi2.start is not null
                                and pi2.deleted_at is null
                                and p2.deleted_at is null
                                and 
                                ( 
                                ( to_days(dcd.start) - to_days(pi2.end) < 7 ) 
                                or (dcd.patientsId = pi2.id and s2.path_string like '/patient/fiche/statut-du-suivi/decede')
                                )
                        
                        ) dd on dd.id = nn.patientsid
                        inner join patients_information as pi2 on nn.patientsid = pi2.pati_id 
                        inner join suggestions as s2 on s2.id = pi2.sugg_id 
                        left join patients_information pi_antenna on pi_antenna.pati_id = nn.patientsid 
                        left join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                
                    where 
                        (	
                            (
                                s2.path_string like '/patient/fiche/statut-du-suivi/en-suivi'
                            ) 
                            or (
                                s2.path_string like '/patient/fiche/statut-du-suivi/post-suivi'
                            ) 
                            or (
                                s2.path_string like '/patient/fiche/statut-du-suivi/decede'
                                and year(pi2.start) = year('" . $this->refDate . "')
                                and dd.status is not null
                            ) 
                            or (
                                s2.path_string like '/patient/fiche/statut-du-suivi/disparu' 
                                and year(pi2.start) = year('" . $this->refDate . "')
                                and dd.status is not null
                            )
                        ) 
                        and '" . $this->refDate . "' between COALESCE(pi2.start, '" . $this->refDate . "') and COALESCE (pi2.end, '" . $this->refDate . "')
                        and pi2.deleted_at is null 
                        and '" . $this->refDate . "' between coalesce(pi_antenna.start, '" . $this->refDate . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                        and s_antenna.path_string like '/patient/suivi/antenne/%'
                        and s_antenna.value like '" . $this->antenna . "'
                
                    order by nationalite, hash
                ) f
                group by 
                    nationalite
                order by 
                    postsuivietensuivi desc";

        $result = $conn->query($sql);




        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques64', name: 'app_statistiques64')]
    public function request64()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select 
                    distinct
                    hash, 
                    firstname, 
                    lastname, 
                    nationalite,
                    s2.value,
                    dd.status as 'exstatut'
                from 
                    (

                    select 
                            distinct
                            patients.id as 'patientsid', 
                            patients.firstname, 
                            patients.lastname, 
                            patients.hash, 
                            max(COALESCE(n.value, '--inconnu--')) as nationalite
                        from 
                            patients 
                            left join (
                                select 
                                    s.id as si, 
                                    s.value, 
                                    pi.pati_id 
                                from 
                                    patients_information pi 
                                    inner JOIN suggestions s on s.id = pi.sugg_id 
                                    inner join patients_information_template_element pitel on pitel.id = pi.itel_id 
                                    inner join suggestions stel on stel.id = pitel.suge_id 
                                where
                                    stel.path_string like '/patient/fiche/information-generale/nationalite' 
                                    and '" . $this->refDate . "' between COALESCE(pi.start, '" . $this->refDate . "') and COALESCE (pi.end, '" . $this->refDate . "')
                                    and pi.deleted_at is null
                            ) n on patients.id = n.pati_id 
                        where patients.deleted_at is null
                        group by 
                            patients.id, 
                            patients.hash,
                            patients.firstname, 
                            patients.lastname
                    ) nn 
                    left join 
                    ( /* only deceased and missing coming from suivi and post-suivi*/
                        select
                            distinct
                            p2.id as 'patientsid2',
                            s2.value as status
                        from
                            (
                                SELECT
                                    p.id as 'pid',
                                    pi.start,
                                    pi.id as 'pinformationid'
                                FROM
                                    patients as p
                                    inner join patients_information as pi on p.id = pi.pati_id
                                    inner join suggestions as s on s.id = pi.sugg_id
                                    left join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                                    left join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                                where
                                    s.path_string like '/patient/fiche/statut-du-suivi/decede'
                                    and pi.start is not null
                                    and year(pi.start) = year('" . $this->refDate . "')
                                    and pi.end is null
                                    and pi.deleted_at is null
                                    and p.deleted_at is null
                                    and '" . $this->refDate . "' between coalesce(pi_antenna.start, '" . $this->refDate . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                                    and s_antenna.path_string like '/patient/suivi/antenne/%'
                                    and s_antenna.value like '" . $this->antenna . "'
                            ) dcd 
                            left join patients as p2 on p2.id = dcd.pid
                            left join patients_information as pi2 on dcd.pid = pi2.pati_id
                            left join suggestions as s2 on s2.id = pi2.sugg_id
                        where
                            ( s2.path_string like '/patient/fiche/statut-du-suivi/en-suivi' or s2.path_string like '/patient/fiche/statut-du-suivi/post-suivi')
                            and s2.path_string not like '/patient/fiche/statut-du-suivi/decede'
                            and pi2.start is not null
                            and pi2.deleted_at is null
                            and p2.deleted_at is null
                            and 
                            ( 
                            ( to_days(dcd.start) - to_days(pi2.end) < 7 ) 
                            or (dcd.pid = pi2.id and s2.path_string like '/patient/fiche/statut-du-suivi/decede')
                            )
                    
                    ) dd on dd.patientsid2 = nn.patientsid
                    inner join patients_information as pi2 on nn.patientsid = pi2.pati_id 
                    inner join suggestions as s2 on s2.id = pi2.sugg_id 
                    left join patients_information pi_antenna on pi_antenna.pati_id = nn.patientsid 
                    left join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 

                where 
                    (	
                        (
                            s2.path_string like '/patient/fiche/statut-du-suivi/en-suivi'
                        ) 
                        or (
                            s2.path_string like '/patient/fiche/statut-du-suivi/post-suivi'
                        ) 
                        or (
                            s2.path_string like '/patient/fiche/statut-du-suivi/decede'
                            and year(pi2.start) = year('" . $this->refDate . "')
                            and dd.status is not null
                        ) 
                        or (
                            s2.path_string like '/patient/fiche/statut-du-suivi/disparu'
                            and year(pi2.start) = year('" . $this->refDate . "')
                            and dd.status is not null
                        )
                    ) 
                    and '" . $this->refDate . "' between COALESCE(pi2.start, '" . $this->refDate . "') and COALESCE (pi2.end, '" . $this->refDate . "')
                    and pi2.deleted_at is null 
                    and '" . $this->refDate . "' between coalesce(pi_antenna.start, '" . $this->refDate . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                    and s_antenna.path_string like '/patient/suivi/antenne/%'
                    and s_antenna.value like '" . $this->antenna . "'

                order by nationalite, hash";

        $result = $conn->query($sql);


        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques63', name: 'app_statistiques63')]
    public function request63()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select 
                    nationalite, 
                    sum(if (path_string like '/patient/fiche/statut-du-suivi/en-suivi' and exstatut is null, 1, 0)) as ensuivi, 
                    sum(if (path_string like '/patient/fiche/statut-du-suivi/post-suivi' and exstatut is null, 1, 0)) as postsuivi, 
                    sum(if (path_string like '/patient/fiche/statut-du-suivi/post-suivi' or path_string like '/patient/fiche/statut-du-suivi/en-suivi', 1, 0)	) as postsuivietensuivi, 
                    sum(if (path_string like '/patient/fiche/statut-du-suivi/decede' , 1, 0)) as decedes, 
                    sum(if (path_string like '/patient/fiche/statut-du-suivi/disparu' , 1, 0)	) as disparus 
                from 
                (
                    select 
                        distinct
                        hash, 
                        firstname, 
                        lastname, 
                        nationalite,
                        s2.value,
                        s2.path_string,
                        dd.status as 'exstatut'
                    from 
                        (
                
                        select 
                                distinct
                                patients.id, 
                                patients.firstname, 
                                patients.lastname, 
                                patients.hash, 
                                max(COALESCE(n.value, '--inconnu--')) as nationalite
                            from 
                                patients 
                                left join (
                                    select 
                                        s.id as si, 
                                        s.value, 
                                        pi.pati_id 
                                    from 
                                        patients_information pi 
                                        inner JOIN suggestions s on s.id = pi.sugg_id 
                                        inner join patients_information_template_element pitel on pitel.id = pi.itel_id 
                                        inner join suggestions stel on stel.id = pitel.suge_id 
                                    where
                                        stel.path_string like '/patient/fiche/information-generale/nationalite' 
                                        and '" . $this->refDate . "' between COALESCE(pi.start, '" . $this->refDate . "') and COALESCE (pi.end, '" . $this->refDate . "')
                                        and pi.deleted_at is null
                                ) n on patients.id = n.pati_id 
                            where patients.deleted_at is null
                            group by 
                                patients.id, 
                                patients.hash,
                                patients.firstname, 
                                patients.lastname
                        ) nn 
                        left join 
                        ( /* only deceased and missing coming from suivi and post-suivi*/
                            select
                                distinct
                                p2.id,
                                s2.value as status
                            from
                                (
                                    SELECT
                                        p.id,
                                        pi.start
                                    FROM
                                        patients as p
                                        inner join patients_information as pi on p.id = pi.pati_id
                                        inner join suggestions as s on s.id = pi.sugg_id
                                        left join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                                        left join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                                    where
                                        s.path_string like '/patient/fiche/statut-du-suivi/decede'
                                        and pi.start is not null
                                        and year(pi.start) = year('" . $this->refDate . "')
                                        and pi.end is null
                                        and pi.deleted_at is null
                                        and p.deleted_at is null
                                        and '" . $this->refDate . "' between coalesce(pi_antenna.start, '" . $this->refDate . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                                        and s_antenna.path_string like '/patient/suivi/antenne/%'
                                        and s_antenna.value like '" . $this->antenna . "'
                                ) dcd 
                                left join patients as p2 on p2.id = dcd.id
                                left join patients_information as pi2 on dcd.id = pi2.id
                                left join suggestions as s2 on s2.id = pi2.sugg_id
                            where
                                ( s2.path_string like '/patient/fiche/statut-du-suivi/en-suivi' or s2.path_string like '/patient/fiche/statut-du-suivi/post-suivi')
                                and s2.path_string not like '/patient/fiche/statut-du-suivi/decede' 
                                and pi2.start is not null
                                and pi2.deleted_at is null
                                and p2.deleted_at is null
                                and 
                                ( 
                                ( to_days(dcd.start) - to_days(pi2.end) < 7 ) 
                                or (dcd.id = pi2.id and s2.path_string like '/patient/fiche/statut-du-suivi/decede')
                                )
                        
                        ) dd on dd.id = nn.id
                        inner join patients_information as pi2 on nn.id = pi2.id 
                        inner join suggestions as s2 on s2.id = pi2.sugg_id 
                        left join patients_information pi_antenna on pi_antenna.pati_id = nn.id 
                        left join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                
                    where 
                        (	
                            (
                                s2.path_string like '/patient/fiche/statut-du-suivi/en-suivi'
                            ) 
                            or (
                                s2.path_string like '/patient/fiche/statut-du-suivi/post-suivi' 
                            ) 
                            or (
                                s2.path_string like '/patient/fiche/statut-du-suivi/decede' 
                                and year(pi2.start) = year('" . $this->refDate . "')
                                and dd.status is not null
                            ) 
                            or (
                                s2.path_string like '/patient/fiche/statut-du-suivi/disparu' 
                                and year(pi2.start) = year('" . $this->refDate . "')
                                and dd.status is not null
                            )
                        ) 
                        and '" . $this->refDate . "' between COALESCE(pi2.start, '" . $this->refDate . "') and COALESCE (pi2.end, '" . $this->refDate . "')
                        and pi2.deleted_at is null 
                        and '" . $this->refDate . "' between coalesce(pi_antenna.start, '" . $this->refDate . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                        and s_antenna.path_string like '/patient/suivi/antenne/%'
                        and s_antenna.value like '" . $this->antenna . "'
                
                    order by nationalite, hash
                ) f
                group by 
                    nationalite
                order by 
                    postsuivietensuivi desc";



        $result = $conn->query($sql);


        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques62', name: 'app_statistiques62')]
    public function request62()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "SELECT 
                    p.hash, 
                    p.firstname, 
                    p.lastname, 
                    pi.start, 
                    pi.end, 
                    s.value 
                FROM 
                    patients as p 
                    inner join patients_information as pi on p.id = pi.pati_id 
                    inner join suggestions as s on s.id = pi.sugg_id 
                    inner join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                    inner join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                where 
                    s.path_string like '/patient/fiche/statut-du-suivi/post-suivi'
                    and '" . $this->refDate . "' between COALESCE(pi.start, '" . $this->past . "') and COALESCE (pi.end, '" . $this->nextyear0101 . "'	)								
                    and pi.deleted_at is null
                    and p.deleted_at is null
                    and pi.start between coalesce(pi_antenna.start, '" . $this->past . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                    and s_antenna.path_string like '/patient/suivi/antenne/%'
                    and s_antenna.value like '" . $this->antenna . "'
                order by
                    lastname";

        $result = $conn->query($sql);


        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques61', name: 'app_statistiques61')]
    public function request61()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "SELECT 
                    count(p.hash) as 'Personnes en post-suivi'
                FROM 
                    patients as p 
                    inner join patients_information as pi on p.id = pi.pati_id 
                    inner join suggestions as s on s.id = pi.sugg_id 
                    inner join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                    inner join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                where 
                    s.path_string like '/patient/fiche/statut-du-suivi/post-suivi'
                    and '" . $this->refDate . "' between COALESCE(pi.start, '" . $this->past . "') and COALESCE (pi.end, '" . $this->nextyear0101 . "'	)								
                    and pi.deleted_at is null 
                    and p.deleted_at is null
                    and pi.start <= COALESCE (pi_antenna.end, '" . $this->refDate . "')
                    and coalesce(pi.end, '" . $this->refDate . "') >= coalesce(pi_antenna.start, '" . $this->past . "') 
                    and s_antenna.path_string like '/patient/suivi/antenne/%'
                    and s_antenna.value like '" . $this->antenna . "'";

        $result = $conn->query($sql);


        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques60', name: 'app_statistiques60')]
    public function request60()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "SELECT
                    p.hash,
                    p.firstname,
                    p.lastname,
                    pi.start,
                    pi.end,
                    s.value
                FROM
                    patients as p
                    inner join patients_information as pi on p.id = pi.pati_id
                    inner join suggestions as s on s.id = pi.sugg_id
                    inner join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                    inner join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                where
                    s.path_string like '/patient/fiche/statut-du-suivi/post-suivi'
                    and pi.start like '" . $this->refyearwc . "'
                    and (pi.end is null or pi.end > '" . $this->refDate . "')
                    and pi.deleted_at is null
                    and p.deleted_at is null
                    and pi.start between coalesce(pi_antenna.start, '" . $this->past . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                    and s_antenna.path_string like '/patient/suivi/antenne/%'
                    and s_antenna.value like '" . $this->antenna . "'";

        $result = $conn->query($sql);


        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }


    #[Route('/api/statistiques59', name: 'app_statistiques59')]
    public function request59()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "Select
                    count(p.hash) as 'Personnes passées en post-suivi en cours d’année et toujours en post-suivi au 31/12'
                FROM
                    patients as p
                    inner join patients_information as pi on p.id = pi.pati_id
                    inner join suggestions as s on s.id = pi.sugg_id
                    inner join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                    inner join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                where
                    s.path_string like '/patient/fiche/statut-du-suivi/post-suivi'
                    and pi.start like '" . $this->refyearwc . "'
                    and (pi.end is null or pi.end > '" . $this->refDate . "')
                    and pi.deleted_at is null
                    and p.deleted_at is null
                    and pi.start between coalesce(pi_antenna.start, '" . $this->past . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                    and s_antenna.path_string like '/patient/suivi/antenne/%'
                    and s_antenna.value like '" . $this->antenna . "'";

        $result = $conn->query($sql);


        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }


    #[Route('/api/statistiques58', name: 'app_statistiques58')]
    public function request58()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "SELECT
                    p.hash,
                    p.firstname,
                    p.lastname,
                    q.minstart
                from 
                (
                    select 	
                        s.value as programme,
                        p.id,
                        min(pi.start) as minstart
                    FROM
                        patients as p
                        inner join patients_information as pi on p.id = pi.pati_id
                        inner join suggestions as s on s.id = pi.sugg_id
                        inner  join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                        inner  join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                        inner  join patients_information pi_stat on pi_stat.pati_id = p.id 
                        inner  join suggestions s_stat on s_stat.id = pi_stat.sugg_id 
                    where
                        s.path_string like '/patient/suivi/programme/housing-%'
                        and pi.deleted_at is null
                        and p.deleted_at is null
                        
                        and s_antenna.path_string like '/patient/suivi/antenne/%'
                        and pi_antenna.deleted_at is null
                        and s_antenna.value like '" . $this->antenna . "' 
                
                        and pi.start <= COALESCE (pi_antenna.end, '" . $this->refDate . "')
                        and coalesce(pi.end, '" . $this->refDate . "') >= coalesce(pi_antenna.start, '" . $this->past . "') 
                
                        and s_stat.path_string like '/patient/fiche/statut-du-suivi/%'
                        and pi_stat.deleted_at is null
                    group by p.id, s.value
                ) q
                inner join patients p on p.id = q.id
                where left(q.minstart,4) like '" . $this->refYear . "'
                order by hash";

        $result = $conn->query($sql);


        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }


    #[Route('/api/statistiques57', name: 'app_statistiques57')]
    public function request57()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "SELECT  
                    s.value as programme,
                    p.hash,
                    p.firstname,
                    p.lastname,
                    pi.start
                from 
                (
                    select
                        p.id,
                        min(pi.start) as minstart
                    FROM
                        patients as p
                        inner join patients_information as pi on p.id = pi.pati_id
                        inner join suggestions as s on s.id = pi.sugg_id
                        inner  join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                        inner  join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                    where
                        s.path_string like '/patient/suivi/programme/housing-%'
                        and pi.deleted_at is null
                        and p.deleted_at is null
                        and left(pi.start,4) >= '2006'
                        
                        and s_antenna.path_string like '/patient/suivi/antenne/%'
                        and pi_antenna.deleted_at is null
                        and s_antenna.value like '" . $this->antenna . "' 
                        and pi.start <= COALESCE (pi_antenna.end, '" . $this->refDate . "')
                        and coalesce(pi.end, '" . $this->refDate . "') >= coalesce(pi_antenna.start, '" . $this->past . "') 
                
                    group by p.id
                ) q 
                inner join patients as p on p.id = q.id
                inner join patients_information as pi on p.id = pi.pati_id and pi.start = q.minstart
                inner join suggestions as s on s.id = pi.sugg_id
                where 
                    s.path_string like '/patient/suivi/programme/housing-%'
                    and pi.deleted_at is null
                order by s.value, start";

        $result = $conn->query($sql);


        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques56', name: 'app_statistiques56')]
    public function request56()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "SELECT 
                    programme, 
                    count(r.hash) as 'Personnes ayant retrouvé un logement durable depuis 2006 (sans tenir compte rechutes)',
                    sum(if(r.start like '" . $this->refyearwc . "', 1, 0)) as 'Personnes ayant retrouvé un logement durable durant l année en cours (sans tenir compte rechutes)'
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
                            p.id,
                            min(pi.start) as minstart
                        FROM
                            patients as p
                            inner join patients_information as pi on p.id = pi.pati_id
                            inner join suggestions as s on s.id = pi.sugg_id
                            inner  join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                            inner  join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                        where
                            s.path_string like '/patient/suivi/programme/housing-%'
                            and pi.deleted_at is null
                            and p.deleted_at is null
                            and left(pi.start,4) >= '2006'
                            
                            and s_antenna.path_string like '/patient/suivi/antenne/%'
                            and pi_antenna.deleted_at is null
                            and s_antenna.value like '" . $this->antenna . "' 
                            and pi.start <= COALESCE (pi_antenna.end, '" . $this->refDate . "')
                            and coalesce(pi.end, '" . $this->refDate . "') >= coalesce(pi_antenna.start, '" . $this->past . "') 
                
                        group by p.id
                    ) q 
                    inner join patients as p on p.id = q.id
                    inner join patients_information as pi on p.id = pi.pati_id and pi.start = q.minstart
                    inner join suggestions as s on s.id = pi.sugg_id
                    where 
                        s.path_string like '/patient/suivi/programme/housing-%'
                        and pi.deleted_at is null
                    order by s.value, start
                ) r
                group by r.programme";

        $result = $conn->query($sql);


        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques55', name: 'app_statistiques55')]
    public function request55()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = " select 
                    count(r.hash) as 'Personnes ayant retrouvé un logement durable depuis 2006 (sans tenir compte rechutes)',
                    sum(if(r.start like '" . $this->refyearwc . "', 1, 0)) as 'Personnes ayant retrouvé un logement durable durant l année en cours (sans tenir compte rechutes)'
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
                            p.id,
                            min(pi.start) as minstart
                        FROM
                            patients as p
                            inner join patients_information as pi on p.id = pi.pati_id
                            inner join suggestions as s on s.id = pi.sugg_id
                            inner  join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                            inner  join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                        where
                            s.path_string like '/patient/suivi/programme/housing-%'
                            and pi.deleted_at is null
                            and p.deleted_at is null
                            and left(pi.start,4) >= '2006'
                            
                            and s_antenna.path_string like '/patient/suivi/antenne/%'
                            and pi_antenna.deleted_at is null
                            and s_antenna.value like '" . $this->antenna . "' 
                            and pi.start <= COALESCE (pi_antenna.end, '" . $this->refDate . "')
                            and coalesce(pi.end, '" . $this->refDate . "') >= coalesce(pi_antenna.start, '" . $this->past . "') 
                
                        group by p.id
                    ) q 
                    inner join patients as p on p.id = q.id
                    inner join patients_information as pi on p.id = pi.pati_id and pi.start = q.minstart
                    inner join suggestions as s on s.id = pi.sugg_id
                    where 
                        s.path_string like '/patient/suivi/programme/housing-%'
                        and pi.deleted_at is null
                    order by s.value, start
                ) r";

        $result = $conn->query($sql);


        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }


    #[Route('/api/statistiques54', name: 'app_statistiques54')]
    public function request54()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = " SELECT
                    mois,
                    appels_sortants,
                    appels_entrants,
                    reunions,
                    appels_sortants + appels_entrants + reunions as demarches
                from
                    (
                        SELECT
                            left(followup_reports.report_date,7) as mois,
                            SUM(
                                if(
                                    followup_reports.activity_type = 2,
                                    1, 0
                                )
                            ) as appels_sortants,
                            SUM(
                                if(
                                    followup_reports.activity_type = 3,
                                    1, 0
                                )
                            ) as reunions,
                            SUM(
                                if(
                                    followup_reports.activity_type = 4,
                                    1, 0
                                )
                            ) as appels_entrants
                        FROM
                            patients p
                            inner join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                            inner join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                            inner join followup_reports on followup_reports.pati_id = p.id
                        where
                            p.deleted_at is null
                            and followup_reports.deleted_at is null
                            and year(followup_reports.report_date) in ('" . $this->refYear . "', '" . $this->refYear . "'-1)
                            and followup_reports.report_date between coalesce(pi_antenna.start, followup_reports.report_date) and COALESCE (pi_antenna.end, followup_reports.report_date)
                            and s_antenna.path_string like '/patient/suivi/antenne/%'
                            and s_antenna.value like '" . $this->antenna . "'
                        group by
                            left(followup_reports.report_date, 7)
                    ) q
                order by
                    mois DESC";

        $result = $conn->query($sql);


        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }
    #[Route('/api/statistiques53', name: 'app_statistiques53')]
    public function request53()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = " SELECT
                    period as 'année',
                    categoriesuivi,
                    accompagnements,
                    conseils+transferts+soins as conseils_transferts_soins,
                    conseils + transferts + soins + accompagnements as total_activites_sauf_rencontres_et_appels
                from
                    (
                        SELECT
                            left(followup_reports.report_date, 7) as period,
                            s.value as categoriesuivi,
                            SUM(
                                if (
                                    followup_reports.activity_type = 1
                                    and sa.path_string like '%conseil%',
                                    1,
                                    0
                                )
                            ) as conseils,
                            SUM(
                                if (
                                    followup_reports.activity_type = 1
                                    and sa.path_string like '%transfert%',
                                    1,
                                    0
                                )
                            ) as transferts,
                            SUM(
                                if (
                                    followup_reports.activity_type = 1
                                    and sa.path_string like '%soin%',
                                    1,
                                    0
                                )
                            ) as soins,
                            SUM(
                                if (
                                    followup_reports.activity_type = 1
                                    and sa.path_string like '%accomp%',
                                    1,
                                    0
                                )
                            ) as accompagnements
                        FROM
                            patients p
                            inner join followup_reports on followup_reports.pati_id = p.id
                            inner join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                            inner join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                            inner join patients_information as pi on p.id = pi.pati_id 
                            inner join suggestions as s on s.id = pi.sugg_id 
                            left JOIN followup_reports_activities on followup_reports_activities.fore_id = followup_reports.id
                            left join suggestions as sa on sa.id = followup_reports_activities.id
                        where
                            (
                                s.path_string like '/patient/fiche/statut-du-suivi/signalement%'
                                or s.path_string like '/patient/fiche/statut-du-suivi/pre-suivi%'
                                or s.path_string like '/patient/fiche/statut-du-suivi/6' 
                                or s.path_string like '/patient/fiche/statut-du-suivi/en-suivi'
                                or s.path_string like '/patient/fiche/statut-du-suivi/post-suivi'
                                or (
                                    s.path_string like '/patient/fiche/statut-du-suivi/disparu' 
                                    and year(pi.start) = year('" . $this->refDate . "')
                                ) 
                                or (
                                    s.path_string like '/patient/fiche/statut-du-suivi/decede'
                                    and year(pi.start) = year('" . $this->refDate . "')
                                )
                            )
                        
                            and followup_reports.report_date between COALESCE(pi.start, followup_reports.report_date) and COALESCE (pi.end, followup_reports.report_date)
                            and pi.deleted_at is null 
                            and p.deleted_at is null
                            and followup_reports.deleted_at is null
                            and year(followup_reports.report_date) in ('" . $this->refYear . "', '" . $this->refYear . "'-1)
                            and followup_reports.report_date between coalesce(pi_antenna.start, followup_reports.report_date) and COALESCE (pi_antenna.end, followup_reports.report_date)
                            and s_antenna.path_string like '/patient/suivi/antenne/%'
                            and s_antenna.value like '" . $this->antenna . "'
                            
                        group by
                            period, categoriesuivi
                    ) q
                order by
                    period DESC,	
                    categoriesuivi";

        $result = $conn->query($sql);


        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques52', name: 'app_statistiques52')]
    public function request52()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = " SELECT
                    period as 'mois',
                    categoriesuivi,
                    rencontres,
                    appels_sortants,
                    appels_entrants,
                    reunions,
                    rencontres+appels_sortants+appels_entrants+reunions as rencontres_reunions_et_appels
                from
                    (
                        SELECT
                            left(followup_reports.report_date, 7) as period,
                            s.value as categoriesuivi,
                            (
                                SUM(
                                    if (
                                        followup_reports.activity_type = 1
                                        and followup_reports.report_type in (1, 2, 3),
                                        1,
                                        0
                                    )
                                )
                            ) as rencontres,
                            (
                                SUM(
                                    if(
                                        followup_reports.activity_type = 2,
                                        1, 
                                        0
                                    )
                                )
                            ) as appels_sortants,
                            (
                                SUM(
                                    if(
                                        followup_reports.activity_type = 4,
                                        1, 
                                        0
                                    )
                                )
                            ) as appels_entrants,
                            (
                                SUM(
                                    if(
                                        followup_reports.activity_type = 3,
                                        1, 
                                        0
                                    )
                                )
                            ) as reunions
                            
                        FROM
                            patients p
                            inner join followup_reports on followup_reports.pati_id = p.id
                            inner join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                            inner join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                            inner join patients_information as pi on p.id = pi.pati_id 
                            inner join suggestions as s on s.id = pi.sugg_id 
                        where
                            (
                                s.path_string like '/patient/fiche/statut-du-suivi/signalement%'
                                or s.path_string like '/patient/fiche/statut-du-suivi/pre-suivi%'
                                or s.path_string like '/patient/fiche/statut-du-suivi/6'
                                or s.path_string like '/patient/fiche/statut-du-suivi/en-suivi'
                                or s.path_string like '/patient/fiche/statut-du-suivi/post-suivi'
                                or (
                                    s.path_string like '/patient/fiche/statut-du-suivi/disparu' 
                                    and year(pi.start) = year('" . $this->refDate . "')
                                ) 
                                or (
                                    s.path_string like '/patient/fiche/statut-du-suivi/decede' 
                                    and year(pi.start) = year('" . $this->refDate . "')
                                )
                            )
                
                            and followup_reports.report_date between COALESCE(pi.start, followup_reports.report_date) and COALESCE (pi.end, followup_reports.report_date)
                            and pi.deleted_at is null 
                            and p.deleted_at is null
                            and followup_reports.deleted_at is null
                            and year(followup_reports.report_date) in ('" . $this->refYear . "', '" . $this->refYear . "'-1)
                            and followup_reports.report_date between coalesce(pi_antenna.start, followup_reports.report_date) and COALESCE (pi_antenna.end, followup_reports.report_date)
                            and s_antenna.path_string like '/patient/suivi/antenne/%'
                            and s_antenna.value like '" . $this->antenna . "'
                
                
                        group by
                            period, categoriesuivi
                    ) q
                order by
                    period DESC,	
                    categoriesuivi";

        $result = $conn->query($sql);


        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }


    #[Route('/api/statistiques51', name: 'app_statistiques51')]
    public function request51()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = " SELECT
                    hash,
                    firstname,
                    lastname,
                    per as periode,
                    rencontres,
                    conseils,
                    transferts,
                    soins,
                    accompagnements,
                    rencontres + conseils + transferts + soins + accompagnements as activites,
                    appels_sortants,
                    appels_entrants,
                    reunions,
                    appels_sortants + appels_entrants + reunions as demarches,
                    rencontres + conseils + transferts + soins + accompagnements + appels_sortants + appels_entrants + reunions as total
                from
                    (
                        SELECT
                            left(followup_reports.report_date, 7) as per,
                            hash,
                            firstname,
                            lastname,
                            (
                                SUM(
                                    if (
                                        followup_reports.activity_type = 1
                                        and followup_reports.report_type in (1, 2, 3),
                                        1,
                                        0
                                    )
                                )
                            ) as rencontres,
                            SUM(
                                if (
                                    followup_reports.activity_type = 1
                                    and suggestions.path_string like '%conseil%',
                                    1,
                                    0
                                )
                            ) as conseils,
                            SUM(
                                if (
                                    followup_reports.activity_type = 1
                                    and suggestions.path_string like '%transfert%',
                                    1,
                                    0
                                )
                            ) as transferts,
                            SUM(
                                if (
                                    followup_reports.activity_type = 1
                                    and suggestions.path_string like '%soin%',
                                    1,
                                    0
                                )
                            ) as soins,
                            SUM(
                                if (
                                    followup_reports.activity_type = 1
                                    and suggestions.path_string like '%accomp%',
                                    1,
                                    0
                                )
                            ) as accompagnements,
                            SUM(
                                if(
                                    followup_reports.activity_type = 2,
                                    1, 0
                                )
                            ) as appels_sortants,
                            SUM(
                                if(
                                    followup_reports.activity_type = 3,
                                    1, 0
                                )
                            ) as reunions,
                            SUM(
                                if(
                                    followup_reports.activity_type = 4,
                                    1, 0
                                )
                            ) as appels_entrants
                        FROM
                            patients p
                            inner join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                            inner join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                            inner join followup_reports on followup_reports.pati_id = p.id
                            left JOIN followup_reports_activities on followup_reports_activities.fore_id = followup_reports.id
                            left join suggestions on suggestions.id = followup_reports_activities.id
                        where
                            p.deleted_at is null
                            and followup_reports.deleted_at is null
                            and followup_reports.report_date between coalesce(pi_antenna.start, followup_reports.report_date) and COALESCE (pi_antenna.end, followup_reports.report_date)
                            and s_antenna.path_string like '/patient/suivi/antenne/%'
                            and s_antenna.value like '" . $this->antenna . "'
                        group by
                            hash, left(followup_reports.report_date, 7), firstname, lastname
                    ) q
                order by
                    firstname,
                    lastname,
                    periode";

        $result = $conn->query($sql);


        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques50', name: 'app_statistiques50')]
    public function request50()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = " SELECT
                    hash,
                    firstname,
                    lastname,
                    rencontres,
                    conseils,
                    transferts,
                    soins,
                    accompagnements,
                    rencontres + conseils + transferts + soins + accompagnements as activites,
                    appels_sortants,
                    appels_entrants,
                    reunions,
                    appels_sortants + appels_entrants + reunions as demarches,
                    rencontres + conseils + transferts + soins + accompagnements + appels_sortants + appels_entrants + reunions as total
                from
                    (
                        SELECT
                            hash,
                            firstname,
                            lastname,
                            (
                                SUM(
                                    if (
                                        followup_reports.activity_type = 1
                                        and followup_reports.report_type in (1, 2, 3),
                                        1,
                                        0
                                    )
                                )
                            ) as rencontres,
                            SUM(
                                if (
                                    followup_reports.activity_type = 1
                                    and suggestions.path_string like '%conseil%',
                                    1,
                                    0
                                )
                            ) as conseils,
                            SUM(
                                if (
                                    followup_reports.activity_type = 1
                                    and suggestions.path_string like '%transfert%',
                                    1,
                                    0
                                )
                            ) as transferts,
                            SUM(
                                if (
                                    followup_reports.activity_type = 1
                                    and suggestions.path_string like '%soin%',
                                    1,
                                    0
                                )
                            ) as soins,
                            SUM(
                                if (
                                    followup_reports.activity_type = 1
                                    and suggestions.path_string like '%accomp%',
                                    1,
                                    0
                                )
                            ) as accompagnements,
                            SUM(
                                if(
                                    followup_reports.activity_type = 2,
                                    1, 0
                                )
                            ) as appels_sortants,
                            SUM(
                                if(
                                    followup_reports.activity_type = 3,
                                    1, 0
                                )
                            ) as reunions,
                            SUM(
                                if(
                                    followup_reports.activity_type = 4,
                                    1, 0
                                )
                            ) as appels_entrants
                        FROM
                            patients p
                            inner join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                            inner join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                            inner join followup_reports on followup_reports.pati_id = p.id
                            left JOIN followup_reports_activities on followup_reports_activities.fore_id = followup_reports.id
                            left join suggestions on suggestions.id = followup_reports_activities.id
                        where
                            p.deleted_at is null
                            and followup_reports.deleted_at is null
                            and followup_reports.report_date like '" . $this->refyearwc . "'
                            and followup_reports.report_date between coalesce(pi_antenna.start, followup_reports.report_date) and COALESCE (pi_antenna.end, followup_reports.report_date)
                            and s_antenna.path_string like '/patient/suivi/antenne/%'
                            and s_antenna.value like '" . $this->antenna . "'
                        group by
                            hash, firstname, lastname
                    ) q
                order by
                    total DESC
                limit
                    20";

        $result = $conn->query($sql);


        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques49', name: 'app_statistiques49')]
    public function request49()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = " SELECT
                    period as 'année',
                    categoriesuivi,
                    
                    appels_entrants,
                    appels_sortants_duration,
                    round(appels_sortants_duration/appels_entrants,2) as appels_entrants_moyenne,
                    
                    appels_sortants,
                    appels_sortants_duration,
                    round(appels_sortants_duration/appels_sortants,2) as appels_sortants_moyenne,
                    
                    reunions,
                    reunions_duration,
                    round(reunions_duration/reunions,2) as reunions_moyenne
                
                
                from
                    (
                        SELECT
                            left(followup_reports.report_date, 4) as period,
                            s.value as categoriesuivi,
                
                            SUM(
                                if(
                                    followup_reports.activity_type = 2,
                                    1, 0
                                )
                            ) as appels_sortants,
                            SUM(
                                if(
                                    followup_reports.activity_type = 3,
                                    1, 0
                                )
                            ) as reunions,
                            SUM(
                                if(
                                    followup_reports.activity_type = 4,
                                    1, 0
                                )
                            ) as appels_entrants,
                
                
                            SUM(
                                if(
                                    followup_reports.activity_type = 2,
                                    TIME_TO_SEC(followup_reports.duration), 0
                                )
                            )/3600 as appels_sortants_duration,
                            SUM(
                                if(
                                    followup_reports.activity_type = 3,
                                    TIME_TO_SEC(followup_reports.duration), 0
                                )
                            )/3600 as reunions_duration,
                            SUM(
                                if(
                                    followup_reports.activity_type = 4,
                                    TIME_TO_SEC(followup_reports.duration), 0
                                )
                            )/3600 as appels_entrants_duration
                
                
                        FROM
                            patients p
                            inner join followup_reports on followup_reports.pati_id = p.id
                            inner join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                            inner join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                            inner join patients_information as pi on p.id = pi.pati_id 
                            inner join suggestions as s on s.id = pi.sugg_id 
                            left JOIN followup_reports_activities on followup_reports_activities.fore_id = followup_reports.id
                            left join suggestions as sa on sa.id = followup_reports_activities.id
                        where
                            s.path_string like  '/patient/suivi/programme%'  
                            and followup_reports.report_date between COALESCE(pi.start, '" . $this->past . "') and COALESCE (pi.end, '" . $this->nextyear0101 . "'	)
                            and pi.deleted_at is null 
                            and p.deleted_at is null
                            and followup_reports.deleted_at is null
                            and year(followup_reports.report_date) in ('" . $this->refYear . "', '" . $this->refYear . "'-1)
                            and followup_reports.report_date between coalesce(pi_antenna.start, '" . $this->past . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                            and s_antenna.path_string like '/patient/suivi/antenne/%'
                            and s_antenna.value like '" . $this->antenna . "'
                        group by
                            period, categoriesuivi
                    ) q
                order by
                    period DESC,	
                    categoriesuivi";

        $result = $conn->query($sql);


        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques48', name: 'app_statistiques48')]
    public function request48()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = " SELECT
                    period as 'année',
                    categoriesuivi,
                    
                    appels_entrants,
                    appels_sortants_duration,
                    round(appels_sortants_duration/appels_entrants,2) as appels_entrants_moyenne,
                    
                    appels_sortants,
                    appels_sortants_duration,
                    round(appels_sortants_duration/appels_sortants,2) as appels_sortants_moyenne,
                    
                    reunions,
                    reunions_duration,
                    round(reunions_duration/reunions,2) as reunions_moyenne
                
                
                from
                    (
                        SELECT
                            left(followup_reports.report_date, 4) as period,
                            s.value as categoriesuivi,
                
                            SUM(
                                if(
                                    followup_reports.activity_type = 2,
                                    1, 0
                                )
                            ) as appels_sortants,
                            SUM(
                                if(
                                    followup_reports.activity_type = 3,
                                    1, 0
                                )
                            ) as reunions,
                            SUM(
                                if(
                                    followup_reports.activity_type = 4,
                                    1, 0
                                )
                            ) as appels_entrants,
                
                
                            SUM(
                                if(
                                    followup_reports.activity_type = 2,
                                    TIME_TO_SEC(followup_reports.duration), 0
                                )
                            )/3600 as appels_sortants_duration,
                            SUM(
                                if(
                                    followup_reports.activity_type = 3,
                                    TIME_TO_SEC(followup_reports.duration), 0
                                )
                            )/3600 as reunions_duration,
                            SUM(
                                if(
                                    followup_reports.activity_type = 4,
                                    TIME_TO_SEC(followup_reports.duration), 0
                                )
                            )/3600 as appels_entrants_duration
                
                
                        FROM
                            patients p
                            inner join followup_reports on followup_reports.pati_id = p.id
                            inner join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                            inner join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                            inner join patients_information as pi on p.id = pi.pati_id 
                            inner join suggestions as s on s.id = pi.sugg_id 
                            left JOIN followup_reports_activities on followup_reports_activities.fore_id = followup_reports.id
                            left join suggestions as sa on sa.id = followup_reports_activities.id
                        where
                            s.path_string like '/patient/suivi/equipe%'  
                            and followup_reports.report_date between COALESCE(pi.start, '" . $this->past . "') and COALESCE (pi.end, '" . $this->nextyear0101 . "'	)
                            and pi.deleted_at is null 
                            and p.deleted_at is null
                            and followup_reports.deleted_at is null
                            and year(followup_reports.report_date) in ('" . $this->refYear . "', '" . $this->refYear . "'-1)
                            and followup_reports.report_date between coalesce(pi_antenna.start, '" . $this->past . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                            and s_antenna.path_string like '/patient/suivi/antenne/%'
                            and s_antenna.value like '" . $this->antenna . "'
                        group by
                            period, categoriesuivi
                    ) q
                order by
                    period DESC,	
                    categoriesuivi";

        $result = $conn->query($sql);


        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques47', name: 'app_statistiques47')]
    public function request47()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = " SELECT
                    period as 'année',
                    categoriesuivi,
                    
                    appels_entrants,
                    appels_sortants_duration,
                    round(appels_sortants_duration/appels_entrants,2) as appels_entrants_moyenne,
                    
                    appels_sortants,
                    appels_sortants_duration,
                    round(appels_sortants_duration/appels_sortants,2) as appels_sortants_moyenne,
                    
                    reunions,
                    reunions_duration,
                    round(reunions_duration/reunions,2) as reunions_moyenne
                
                
                from
                    (
                        SELECT
                            left(followup_reports.report_date, 4) as period,
                            s.value as categoriesuivi,
                
                            SUM(
                                if(
                                    followup_reports.activity_type = 2,
                                    1, 0
                                )
                            ) as appels_sortants,
                            SUM(
                                if(
                                    followup_reports.activity_type = 3,
                                    1, 0
                                )
                            ) as reunions,
                            SUM(
                                if(
                                    followup_reports.activity_type = 4,
                                    1, 0
                                )
                            ) as appels_entrants,
                
                
                            SUM(
                                if(
                                    followup_reports.activity_type = 2,
                                    TIME_TO_SEC(followup_reports.duration), 0
                                )
                            )/3600 as appels_sortants_duration,
                            SUM(
                                if(
                                    followup_reports.activity_type = 3,
                                    TIME_TO_SEC(followup_reports.duration), 0
                                )
                            )/3600 as reunions_duration,
                            SUM(
                                if(
                                    followup_reports.activity_type = 4,
                                    TIME_TO_SEC(followup_reports.duration), 0
                                )
                            )/3600 as appels_entrants_duration
                
                
                        FROM
                            patients p
                            inner join followup_reports on followup_reports.pati_id = p.id
                            inner join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                            inner join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                            inner join patients_information as pi on p.id = pi.pati_id 
                            inner join suggestions as s on s.id = pi.sugg_id 
                            left JOIN followup_reports_activities on followup_reports_activities.fore_id = followup_reports.id
                            left join suggestions as sa on sa.id = followup_reports_activities.id
                        where
                            (
                                s.path_string like '/patient/fiche/statut-du-suivi/signalement%' 
                                or s.path_string like '/patient/fiche/statut-du-suivi/pre-suivi%' 
                                or s.path_string like '/patient/fiche/statut-du-suivi/6' 
                                or s.path_string like '/patient/fiche/statut-du-suivi/en-suivi' 
                                or s.path_string like '/patient/fiche/statut-du-suivi/post-suivi' 
                                or (
                                    s.path_string like '/patient/fiche/statut-du-suivi/disparu' 
                                    and pi.start like '" . $this->refyearwc . "'
                                ) 
                                or (
                                    s.path_string like '/patient/fiche/statut-du-suivi/decede' 
                                    and pi.start like '" . $this->refyearwc . "'
                                )
                            )
                            and followup_reports.report_date between COALESCE(pi.start, '" . $this->past . "') and COALESCE (pi.end, '" . $this->nextyear0101 . "'	)
                            and pi.deleted_at is null 
                            and p.deleted_at is null
                            and followup_reports.deleted_at is null
                            and year(followup_reports.report_date) in ('" . $this->refYear . "', '" . $this->refYear . "'-1)
                            and followup_reports.report_date between coalesce(pi_antenna.start, '" . $this->past . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                            and s_antenna.path_string like '/patient/suivi/antenne/%'
                            and s_antenna.value like '" . $this->antenna . "'
                        group by
                            period, categoriesuivi
                    ) q
                order by
                    period DESC,	
                    categoriesuivi";

        $result = $conn->query($sql);


        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques46', name: 'app_statistiques46')]
    public function request46()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = " SELECT
                    period as 'année',
                    categoriesuivi as programme,
                    appels_sortants,
                    appels_entrants,
                    reunions,
                    appels_sortants + appels_entrants + reunions as demarches
                from
                    (
                        SELECT
                            left(followup_reports.report_date, 4) as period,
                            s.value as categoriesuivi,
                            
                            SUM(
                                if(
                                    followup_reports.activity_type = 2,
                                    1, 0
                                )
                            ) as appels_sortants,
                            SUM(
                                if(
                                    followup_reports.activity_type = 3,
                                    1, 0
                                )
                            ) as reunions,
                            SUM(
                                if(
                                    followup_reports.activity_type = 4,
                                    1, 0
                                )
                            ) as appels_entrants
                        FROM
                            patients p
                            inner join followup_reports on followup_reports.pati_id = p.id
                            inner join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                            inner join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                            inner join patients_information as pi on p.id = pi.pati_id 
                            inner join suggestions as s on s.id = pi.sugg_id 
                            left JOIN followup_reports_activities on followup_reports_activities.fore_id = followup_reports.id
                            left join suggestions as sa on sa.id = followup_reports_activities.id
                        where
                            s.path_string like '/patient/suivi/programme%'
                            and followup_reports.report_date between COALESCE(pi.start, '" . $this->past . "') and COALESCE (pi.end, '" . $this->nextyear0101 . "'	)
                            and pi.deleted_at is null 
                            and p.deleted_at is null
                            and followup_reports.deleted_at is null
                            and year(followup_reports.report_date) in ('" . $this->refYear . "', '" . $this->refYear . "'-1)
                            and followup_reports.report_date between coalesce(pi_antenna.start, '" . $this->past . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                            and s_antenna.path_string like '/patient/suivi/antenne/%'
                            and s_antenna.value like '" . $this->antenna . "'
                        group by
                            period, categoriesuivi
                    ) q
                order by
                    period DESC,
                    categoriesuivi";

        $result = $conn->query($sql);


        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques45', name: 'app_statistiques45')]
    public function request45()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = " SELECT
                    period as 'année',
                    categoriesuivi as equipe,
                    appels_sortants,
                    appels_entrants,
                    reunions,
                    appels_sortants + appels_entrants + reunions as demarches
                from
                    (
                        SELECT
                            left(followup_reports.report_date, 4) as period,
                            s.value as categoriesuivi,
                
                            SUM(
                                if(
                                    followup_reports.activity_type = 2,
                                    1, 0
                                )
                            ) as appels_sortants,
                            SUM(
                                if(
                                    followup_reports.activity_type = 3,
                                    1, 0
                                )
                            ) as reunions,
                            SUM(
                                if(
                                    followup_reports.activity_type = 4,
                                    1, 0
                                )
                            ) as appels_entrants
                        FROM
                            patients p
                            inner join followup_reports on followup_reports.pati_id = p.id
                            inner join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                            inner join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                            inner join patients_information as pi on p.id = pi.pati_id 
                            inner join suggestions as s on s.id = pi.sugg_id 
                            left JOIN followup_reports_activities on followup_reports_activities.fore_id = followup_reports.id
                            left join suggestions as sa on sa.id = followup_reports_activities.id
                        where
                            s.path_string like '/patient/suivi/equipe%'
                            and followup_reports.report_date between COALESCE(pi.start, '" . $this->past . "') and COALESCE (pi.end, '" . $this->nextyear0101 . "'	)
                            and pi.deleted_at is null 
                            and p.deleted_at is null
                            and followup_reports.deleted_at is null
                            and year(followup_reports.report_date) in ('" . $this->refYear . "', '" . $this->refYear . "'-1)
                            and followup_reports.report_date between coalesce(pi_antenna.start, '" . $this->past . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                            and s_antenna.path_string like '/patient/suivi/antenne/%'
                            and s_antenna.value like '" . $this->antenna . "'
                        group by
                            period, categoriesuivi
                    ) q
                order by
                    period DESC,
                    categoriesuivi";

        $result = $conn->query($sql);


        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }


    #[Route('/api/statistiques44', name: 'app_statistiques44')]
    public function request44()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = " SELECT
                    period as 'année',
                    categoriesuivi,
                    appels_sortants,
                    appels_entrants,
                    reunions,
                    appels_sortants + appels_entrants + reunions as demarches
                from
                    (
                        SELECT
                            left(followup_reports.report_date, 4) as period,
                            s.value as categoriesuivi,
                            SUM(
                                if(
                                    followup_reports.activity_type = 2,
                                    1, 0
                                )
                            ) as appels_sortants,
                            SUM(
                                if(
                                    followup_reports.activity_type = 3,
                                    1, 0
                                )
                            ) as reunions,
                            SUM(
                                if(
                                    followup_reports.activity_type = 4,
                                    1, 0
                                )
                            ) as appels_entrants
                        FROM
                            patients p
                            inner join followup_reports on followup_reports.pati_id = p.id
                            inner join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                            inner join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                            inner join patients_information as pi on p.id = pi.pati_id 
                            inner join suggestions as s on s.id = pi.sugg_id 
                            left JOIN followup_reports_activities on followup_reports_activities.fore_id = followup_reports.id
                            left join suggestions as sa on sa.id = followup_reports_activities.id
                        where
                            (
                                s.path_string like '/patient/fiche/statut-du-suivi/signalement%'
                                or s.path_string like '/patient/fiche/statut-du-suivi/pre-suivi%'
                                or s.path_string like '/patient/fiche/statut-du-suivi/6'
                                or s.path_string like '/patient/fiche/statut-du-suivi/en-suivi'
                                or s.path_string like '/patient/fiche/statut-du-suivi/post-suivi'
                                or (
                                    s.path_string like '/patient/fiche/statut-du-suivi/disparu'
                                    and pi.start like '" . $this->refyearwc . "'
                                ) 
                                or (
                                    s.path_string like '/patient/fiche/statut-du-suivi/decede'
                                    and pi.start like '" . $this->refyearwc . "'
                                )
                            )
                            and followup_reports.report_date between COALESCE(pi.start, '" . $this->past . "') and COALESCE (pi.end, '" . $this->nextyear0101 . "'	)
                            and pi.deleted_at is null 
                            and p.deleted_at is null
                            and followup_reports.deleted_at is null
                            and year(followup_reports.report_date) in ('" . $this->refYear . "', '" . $this->refYear . "'-1)
                            and followup_reports.report_date between coalesce(pi_antenna.start, '" . $this->past . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                            and s_antenna.path_string like '/patient/suivi/antenne/%'
                            and s_antenna.value like '" . $this->antenna . "'
                        group by
                            period, categoriesuivi
                    ) q
                order by
                    period DESC,	
                    categoriesuivi";

        $result = $conn->query($sql);


        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }


    #[Route('/api/statistiques43', name: 'app_statistiques43')]
    public function request43()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = " SELECT
                    period as 'année',
                    categoriesuivi as programme,
                    rencontres_total,
                    rencontres_count,
                    round(rencontres_total/rencontres_count, 2) as duree_rencontre_moyenne_en_heures
                from
                    (
                        SELECT
                            left(followup_reports.report_date, 4) as period,
                            s.value as categoriesuivi,
                            (
                                round(SUM(
                                    if (
                                        followup_reports.activity_type = 1
                                        and followup_reports.report_type in (1, 2, 3, 4),
                                        TIME_TO_SEC(followup_reports.duration),
                                        0
                                    )
                                )/3600, 2)
                            ) as rencontres_total,
                
                            (
                                SUM(
                                    if (
                                        followup_reports.activity_type = 1
                                        and followup_reports.report_type in (1, 2, 3, 4),
                                        1,
                                        0
                                    )
                                )
                            ) as rencontres_count
                
                
                        FROM
                            patients p
                            inner join followup_reports on followup_reports.pati_id = p.id
                            inner join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                            inner join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                            inner join patients_information as pi on p.id = pi.pati_id 
                            inner join suggestions as s on s.id = pi.sugg_id 
                        where
                            s.path_string like  '/patient/suivi/programme%'
                            and followup_reports.report_date between COALESCE(pi.start, followup_reports.report_date) and COALESCE (pi.end, followup_reports.report_date)
                            and pi.deleted_at is null 
                            and p.deleted_at is null
                            and followup_reports.deleted_at is null
                            and year(followup_reports.report_date) in ('" . $this->refYear . "', '" . $this->refYear . "'-1)
                            and followup_reports.report_date between coalesce(pi_antenna.start, followup_reports.report_date) and COALESCE (pi_antenna.end, followup_reports.report_date)
                            and s_antenna.path_string like '/patient/suivi/antenne/%'
                            and s_antenna.value like '" . $this->antenna . "'
                        group by
                            period, categoriesuivi
                    ) q
                order by
                    period DESC,	
                    categoriesuivi";

        $result = $conn->query($sql);


        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques42', name: 'app_statistiques42')]
    public function request42()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = " SELECT
                    period as 'année',
                    categoriesuivi as equipe,
                    rencontres_total,
                    rencontres_count,
                    round(rencontres_total/rencontres_count, 2) as duree_rencontre_moyenne_en_heures
                from
                    (
                        SELECT
                            left(followup_reports.report_date, 4) as period,
                            s.value as categoriesuivi,
                            (
                                round(SUM(
                                    if (
                                        followup_reports.activity_type = 1
                                        and followup_reports.report_type in (1, 2, 3, 4),
                                        TIME_TO_SEC(followup_reports.duration),
                                        0
                                    )
                                )/3600, 2)
                            ) as rencontres_total,
                
                            (
                                SUM(
                                    if (
                                        followup_reports.activity_type = 1
                                        and followup_reports.report_type in (1, 2, 3, 4),
                                        1,
                                        0
                                    )
                                )
                            ) as rencontres_count
                
                
                        FROM
                            patients p
                            inner join followup_reports on followup_reports.pati_id = p.id
                            inner join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                            inner join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                            inner join patients_information as pi on p.id = pi.pati_id 
                            inner join suggestions as s on s.id = pi.sugg_id 
                        where
                            s.path_string like  '/patient/suivi/equipe%'  
                            and followup_reports.report_date between COALESCE(pi.start, followup_reports.report_date) and COALESCE (pi.end, followup_reports.report_date)
                            and pi.deleted_at is null 
                            and p.deleted_at is null
                            and followup_reports.deleted_at is null
                            and year(followup_reports.report_date) in ('" . $this->refYear . "', '" . $this->refYear . "'-1)
                            and followup_reports.report_date between coalesce(pi_antenna.start, followup_reports.report_date) and COALESCE (pi_antenna.end, followup_reports.report_date)
                            and s_antenna.path_string like '/patient/suivi/antenne/%'
                            and s_antenna.value like '" . $this->antenna . "'
                        group by
                            period, categoriesuivi
                    ) q
                order by
                    period DESC,	
                    categoriesuivi";

        $result = $conn->query($sql);


        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques41', name: 'app_statistiques41')]
    public function request41()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = " Select
                    period as 'année',
                    categoriesuivi,
                    rencontres_total,
                    rencontres_count,
                    round(rencontres_total/rencontres_count, 2) as duree_rencontre_moyenne_en_heures
                from
                    (
                        SELECT
                            left(followup_reports.report_date, 4) as period,
                            s.value as categoriesuivi,
                            (
                                round(SUM(
                                    if (
                                        followup_reports.activity_type = 1
                                        and followup_reports.report_type in (1, 2, 3),
                                        TIME_TO_SEC(followup_reports.duration),
                                        0
                                    )
                                )/3600, 2)
                            ) as rencontres_total,
                
                            (
                                SUM(
                                    if (
                                        followup_reports.activity_type = 1
                                        and followup_reports.report_type in (1, 2, 3),
                                        1,
                                        0
                                    )
                                )
                            ) as rencontres_count
                
                        FROM
                            patients p
                            inner join followup_reports on followup_reports.pati_id = p.id
                            inner join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                            inner join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                            inner join patients_information as pi on p.id = pi.pati_id 
                            inner join suggestions as s on s.id = pi.sugg_id 
                        where
                            (
                                s.path_string like '/patient/fiche/statut-du-suivi/signalement%' 
                                or s.path_string like '/patient/fiche/statut-du-suivi/pre-suivi%'
                                or s.path_string like '/patient/fiche/statut-du-suivi/6'
                                or s.path_string like '/patient/fiche/statut-du-suivi/en-suivi'
                                or s.path_string like '/patient/fiche/statut-du-suivi/post-suivi'
                                or (
                                    s.path_string like '/patient/fiche/statut-du-suivi/disparu'
                                    and pi.start like '" . $this->refyearwc . "'
                                ) 
                                or (
                                    s.path_string like '/patient/fiche/statut-du-suivi/decede'
                                    and pi.start like '" . $this->refyearwc . "'
                                )
                            )
                            and followup_reports.report_date between COALESCE(pi.start, followup_reports.report_date) and COALESCE (pi.end, followup_reports.report_date)
                            and pi.deleted_at is null 
                            and p.deleted_at is null
                            and followup_reports.deleted_at is null
                            and year(followup_reports.report_date) in ('" . $this->refYear . "', '" . $this->refYear . "'-1)
                            and followup_reports.report_date between coalesce(pi_antenna.start, followup_reports.report_date) and COALESCE (pi_antenna.end, followup_reports.report_date)
                            and s_antenna.path_string like '/patient/suivi/antenne/%'
                            and s_antenna.value like '" . $this->antenna . "'
                
                        group by
                            period, categoriesuivi
                    ) q
                order by
                    period DESC,	
                    categoriesuivi";

        $result = $conn->query($sql);


        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }


    #[Route('/api/statistiques40', name: 'app_statistiques40')]
    public function request40()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = " SELECT
                    period as 'année',
                    categoriesuivi as programme,
                    rencontres,
                    appels_sortants,
                    appels_entrants,
                    reunions,
                    rencontres+appels_sortants+appels_entrants+reunions as rencontres_reunions_et_appels
                
                from
                    (
                        SELECT
                            left(followup_reports.report_date, 4) as period,
                            s.value as categoriesuivi,
                            (
                                SUM(
                                    if (
                                        followup_reports.activity_type = 1
                                        and followup_reports.report_type in (1, 2, 3),
                                        1,
                                        0
                                    )
                                )
                            ) as rencontres,
                            (
                                SUM(
                                    if(
                                        followup_reports.activity_type = 2,
                                        1, 
                                        0
                                    )
                                )
                            ) as appels_sortants,
                            (
                                SUM(
                                    if(
                                        followup_reports.activity_type = 4,
                                        1, 
                                        0
                                    )
                                )
                            ) as appels_entrants,
                            (
                                SUM(
                                    if(
                                        followup_reports.activity_type = 3,
                                        1, 
                                        0
                                    )
                                )
                            ) as reunions
                        FROM
                            patients p
                            inner join followup_reports on followup_reports.pati_id = p.id
                            inner join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                            inner join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                            inner join patients_information as pi on p.id = pi.pati_id 
                            inner join suggestions as s on s.id = pi.sugg_id 
                        where
                            s.path_string like '/patient/suivi/programme%'
                            and followup_reports.report_date between COALESCE(pi.start, followup_reports.report_date) and COALESCE (pi.end, followup_reports.report_date)
                            and pi.deleted_at is null 
                            and p.deleted_at is null
                            and followup_reports.deleted_at is null
                            and year(followup_reports.report_date) in ('" . $this->refYear . "', '" . $this->refYear . "'-1)
                            and followup_reports.report_date between coalesce(pi_antenna.start, followup_reports.report_date) and COALESCE (pi_antenna.end, followup_reports.report_date)
                            and s_antenna.path_string like '/patient/suivi/antenne/%'
                            and s_antenna.value like '" . $this->antenna . "'
                        group by
                            period, categoriesuivi
                    ) q
                order by
                    period DESC,
                    categoriesuivi";

        $result = $conn->query($sql);


        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }


    #[Route('/api/statistiques39', name: 'app_statistiques39')]
    public function request39()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = " SELECT
                    period as 'année',
                    categoriesuivi as programme,
                    rencontres,
                    appels_sortants,
                    appels_entrants,
                    reunions,
                    rencontres+appels_sortants+appels_entrants+reunions as rencontres_reunions_et_appels
                
                from
                    (
                        SELECT
                            left(followup_reports.report_date, 4) as period,
                            s.value as categoriesuivi,
                            (
                                SUM(
                                    if (
                                        followup_reports.activity_type = 1
                                        and followup_reports.report_type in (1, 2, 3),
                                        1,
                                        0
                                    )
                                )
                            ) as rencontres,
                            (
                                SUM(
                                    if(
                                        followup_reports.activity_type = 2,
                                        1, 
                                        0
                                    )
                                )
                            ) as appels_sortants,
                            (
                                SUM(
                                    if(
                                        followup_reports.activity_type = 4,
                                        1, 
                                        0
                                    )
                                )
                            ) as appels_entrants,
                            (
                                SUM(
                                    if(
                                        followup_reports.activity_type = 3,
                                        1, 
                                        0
                                    )
                                )
                            ) as reunions
                        FROM
                            patients p
                            inner join followup_reports on followup_reports.pati_id = p.id
                            inner join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                            inner join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                            inner join patients_information as pi on p.id = pi.pati_id 
                            inner join suggestions as s on s.id = pi.sugg_id 
                        where
                            s.path_string like '/patient/suivi/programme%'
                            and followup_reports.report_date between COALESCE(pi.start, followup_reports.report_date) and COALESCE (pi.end, followup_reports.report_date)
                            and pi.deleted_at is null 
                            and p.deleted_at is null
                            and followup_reports.deleted_at is null
                            and year(followup_reports.report_date) in ('" . $this->refYear . "', '" . $this->refYear . "'-1)
                            and followup_reports.report_date between coalesce(pi_antenna.start, followup_reports.report_date) and COALESCE (pi_antenna.end, followup_reports.report_date)
                            and s_antenna.path_string like '/patient/suivi/antenne/%'
                            and s_antenna.value like '" . $this->antenna . "'
                        group by
                            period, categoriesuivi
                    ) q
                order by
                    period DESC,
                    categoriesuivi";

        $result = $conn->query($sql);


        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }
    #[Route('/api/statistiques38', name: 'app_statistiques38')]
    public function request38()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = " SELECT
                        left(followup_reports.report_date, 4) as period,
                        s.value as categoriesuivi,
                        p.hash,
                        count(sa.value) as nombre_accompagnements
                    FROM
                        patients p
                        inner join followup_reports on followup_reports.pati_id = p.id
                        inner join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                        inner join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                        inner join patients_information as pi on p.id = pi.pati_id 
                        inner join suggestions as s on s.id = pi.sugg_id 
                        left JOIN followup_reports_activities on followup_reports_activities.fore_id = followup_reports.id
                        left join suggestions as sa on sa.id = followup_reports_activities.sugg_id
                    where
                        s.path_string like '/patient/suivi/equipe%' 
                        and followup_reports.report_date between COALESCE(pi.start, followup_reports.report_date) and COALESCE (pi.end, followup_reports.report_date)
                        and pi.deleted_at is null 
                        and p.deleted_at is null
                        and followup_reports.deleted_at is null
                        and year(followup_reports.report_date) in ('" . $this->refYear . "', '" . $this->refYear . "'-1)
                        and followup_reports.activity_type = 1 -- uniquement les rencontres
                        and followup_reports.report_date between coalesce(pi_antenna.start, followup_reports.report_date) and COALESCE (pi_antenna.end, followup_reports.report_date)
                        and s_antenna.path_string like '/patient/suivi/antenne/%'
                        and s_antenna.value like '" . $this->antenna . "'
                        and sa.path_string like '%accomp%'
                    group by 
                        period, categoriesuivi, hash 
                    order by
                        period, categoriesuivi, hash";

        $result = $conn->query($sql);


        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques37', name: 'app_statistiques37')]
    public function request37()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = " select
                    period,
                    categoriesuivi,
                    count(hash) as 'nombre de patients'
                from
                (
                        SELECT
                            left(followup_reports.report_date, 4) as period,
                            s.value as categoriesuivi,
                            p.hash,
                            count(sa.value) as nombre_accompagnements
                        FROM
                            patients p
                            inner join followup_reports on followup_reports.pati_id = p.id
                            inner join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                            inner join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                            inner join patients_information as pi on p.id = pi.pati_id 
                            inner join suggestions as s on s.id = pi.sugg_id 
                            left JOIN followup_reports_activities on followup_reports_activities.fore_id = followup_reports.id
                            left join suggestions as sa on sa.id = followup_reports_activities.sugg_id
                        where
                            s.path_string like '/patient/suivi/equipe%'
                            and followup_reports.report_date between COALESCE(pi.start, followup_reports.report_date) and COALESCE (pi.end, followup_reports.report_date)
                            and pi.deleted_at is null 
                            and p.deleted_at is null
                            and followup_reports.deleted_at is null
                            and year(followup_reports.report_date) in ('" . $this->refYear . "', '" . $this->refYear . "'-1)
                            and followup_reports.activity_type = 1 -- uniquement les rencontres
                            and followup_reports.report_date between coalesce(pi_antenna.start, followup_reports.report_date) and COALESCE (pi_antenna.end, followup_reports.report_date)
                            and s_antenna.path_string like '/patient/suivi/antenne/%'
                            and s_antenna.value like '" . $this->antenna . "'
                            and sa.path_string like '%accomp%'
                        group by 
                            period, categoriesuivi, hash 
                        order by
                            period, categoriesuivi, hash 
                ) k group by period,
                    categoriesuivi";

        $result = $conn->query($sql);


        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques36', name: 'app_statistiques36')]
    public function request36()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = " SELECT
                    left(followup_reports.report_date, 4) as period,
                    p.hash,
                    followup_reports.report_date,
                    s.value as categoriesuivi,
                    case 
                        when sa.path_string like '%conseil%' then 'conseil'
                        when sa.path_string like '%transfert%' then 'transfert'
                        when sa.path_string like '%soin%'  then 'soin'
                        when sa.path_string like '%accomp%' then 'accompagnement'
                    end as activite,
                    sa.value as activite_detail
                FROM
                    patients p
                    inner join followup_reports on followup_reports.pati_id = p.id
                    inner join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                    inner join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                    inner join patients_information as pi on p.id = pi.pati_id 
                    inner join suggestions as s on s.id = pi.sugg_id 
                    left JOIN followup_reports_activities on followup_reports_activities.fore_id = followup_reports.id
                    left join suggestions as sa on sa.id = followup_reports_activities.id
                where
                    s.path_string like '/patient/suivi/equipe%'
                    and followup_reports.report_date between COALESCE(pi.start, followup_reports.report_date) and COALESCE (pi.end, followup_reports.report_date)
                    and pi.deleted_at is null 
                    and p.deleted_at is null
                    and followup_reports.deleted_at is null
                    and year(followup_reports.report_date) in ('" . $this->refYear . "', '" . $this->refYear . "'-1)
                    and followup_reports.activity_type = 1 -- uniquement les rencontres
                    and followup_reports.report_date between coalesce(pi_antenna.start, followup_reports.report_date) and COALESCE (pi_antenna.end, followup_reports.report_date)
                    and s_antenna.path_string like '/patient/suivi/antenne/%'
                    and s_antenna.value like '" . $this->antenna . "'
                    and sa.value is not null
                order by
                    period, categoriesuivi, hash";

        $result = $conn->query($sql);


        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques35', name: 'app_statistiques35')]
    public function request35()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "Select
                    period as 'année',
                    categoriesuivi as equipe,
                    accompagnements,
                    conseils,
                    transferts,
                    soins,
                    conseils+transferts+soins as conseils_transferts_soins,
                    conseils + transferts + soins + accompagnements as activites
                from
                    (
                        SELECT
                            left(followup_reports.report_date, 4) as period,
                            s.value as categoriesuivi,
                            SUM(
                                if (
                                    followup_reports.activity_type = 1
                                    and sa.path_string like '%conseil%',
                                    1,
                                    0
                                )
                            ) as conseils,
                            SUM(
                                if (
                                    followup_reports.activity_type = 1
                                    and sa.path_string like '%transfert%',
                                    1,
                                    0
                                )
                            ) as transferts,
                            SUM(
                                if (
                                    followup_reports.activity_type = 1
                                    and sa.path_string like '%soin%',
                                    1,
                                    0
                                )
                            ) as soins,
                            SUM(
                                if (
                                    followup_reports.activity_type = 1
                                    and sa.path_string like '%accomp%',
                                    1,
                                    0
                                )
                            ) as accompagnements
                        FROM
                            patients p
                            inner join followup_reports on followup_reports.pati_id = p.id
                            inner join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                            inner join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                            inner join patients_information as pi on p.id = pi.pati_id 
                            inner join suggestions as s on s.id = pi.sugg_id 
                            left JOIN followup_reports_activities on followup_reports_activities.fore_id = followup_reports.id
                            left join suggestions as sa on sa.id = followup_reports_activities.id
                        where
                            s.path_string like '/patient/suivi/equipe%'
                            and followup_reports.report_date between COALESCE(pi.start, followup_reports.report_date) and COALESCE (pi.end, followup_reports.report_date)
                            and pi.deleted_at is null 
                            and p.deleted_at is null
                            and followup_reports.deleted_at is null
                            and year(followup_reports.report_date) in ('" . $this->refYear . "', '" . $this->refYear . "'-1)
                            and followup_reports.report_date between coalesce(pi_antenna.start, followup_reports.report_date) and COALESCE (pi_antenna.end, followup_reports.report_date)
                            and s_antenna.path_string like '/patient/suivi/antenne/%'
                            and s_antenna.value like '" . $this->antenna . "'
                        group by
                            period, categoriesuivi
                    ) q
                order by
                    period DESC,
                    categoriesuivi";

        $result = $conn->query($sql);


        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques34', name: 'app_statistiques34')]
    public function request34()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "SELECT
                    period as 'année',
                    categoriesuivi as equipe,
                    rencontres,
                    appels_sortants,
                    appels_entrants,
                    reunions,
                    rencontres+appels_sortants+appels_entrants+reunions as rencontres_reunions_et_appels
                
                from
                    (
                        SELECT
                            left(followup_reports.report_date, 4) as period,
                            s.value as categoriesuivi,
                            (
                                SUM(
                                    if (
                                        followup_reports.activity_type = 1
                                        and followup_reports.report_type in (1, 2, 3),
                                        1,
                                        0
                                    )
                                )
                            ) as rencontres,
                            (
                                SUM(
                                    if(
                                        followup_reports.activity_type = 2,
                                        1, 
                                        0
                                    )
                                )
                            ) as appels_sortants,
                            (
                                SUM(
                                    if(
                                        followup_reports.activity_type = 4,
                                        1, 
                                        0
                                    )
                                )
                            ) as appels_entrants,
                            (
                                SUM(
                                    if(
                                        followup_reports.activity_type = 3,
                                        1, 
                                        0
                                    )
                                )
                            ) as reunions
                        FROM
                            patients p
                            inner join followup_reports on followup_reports.pati_id = p.id
                            inner join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                            inner join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                            inner join patients_information as pi on p.id = pi.pati_id 
                            inner join suggestions as s on s.id = pi.sugg_id 
                        where
                            s.path_string like '/patient/suivi/equipe%'
                
                            and followup_reports.report_date between COALESCE(pi.start, followup_reports.report_date) and COALESCE (pi.end, followup_reports.report_date)
                            and pi.deleted_at is null 
                            and p.deleted_at is null
                            and followup_reports.deleted_at is null
                            and year(followup_reports.report_date) in ('" . $this->refYear . "', '" . $this->refYear . "'-1)
                            and followup_reports.report_date between coalesce(pi_antenna.start, followup_reports.report_date) and COALESCE (pi_antenna.end, followup_reports.report_date)
                            and s_antenna.path_string like '/patient/suivi/antenne/%'
                            and s_antenna.value like '" . $this->antenna . "'
                
                        group by
                            period, categoriesuivi
                    ) q
                order by
                    period DESC,
                    categoriesuivi";

        $result = $conn->query($sql);


        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }
    #[Route('/api/statistiques33', name: 'app_statistiques33')]
    public function request33()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "SELECT
                    period as 'année',
                    categoriesuivi,
                    accompagnements,
                    conseils+transferts+soins as conseils_transferts_soins,
                    conseils + transferts + soins + accompagnements as total_activites_sauf_rencontres_et_appels
                from
                    (
                        SELECT
                            left(followup_reports.report_date, 4) as period,
                            s.value as categoriesuivi,
                            SUM(
                                if (
                                    followup_reports.activity_type = 1
                                    and sa.path_string like '%conseil%',
                                    1,
                                    0
                                )
                            ) as conseils,
                            SUM(
                                if (
                                    followup_reports.activity_type = 1
                                    and sa.path_string like '%transfert%',
                                    1,
                                    0
                                )
                            ) as transferts,
                            SUM(
                                if (
                                    followup_reports.activity_type = 1
                                    and sa.path_string like '%soin%',
                                    1,
                                    0
                                )
                            ) as soins,
                            SUM(
                                if (
                                    followup_reports.activity_type = 1
                                    and sa.path_string like '%accomp%',
                                    1,
                                    0
                                )
                            ) as accompagnements
                        FROM
                            patients p
                            inner join followup_reports on followup_reports.pati_id = p.id
                            inner join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                            inner join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                            inner join patients_information as pi on p.id = pi.pati_id 
                            inner join suggestions as s on s.id = pi.sugg_id 
                            left JOIN followup_reports_activities on followup_reports_activities.fore_id = followup_reports.id
                            left join suggestions as sa on sa.id = followup_reports_activities.id
                        where
                            (
                                s.path_string like '/patient/fiche/statut-du-suivi/signalement%'
                                or s.path_string like '/patient/fiche/statut-du-suivi/pre-suivi%' 
                                or s.path_string like '/patient/fiche/statut-du-suivi/6' 
                                or s.path_string like '/patient/fiche/statut-du-suivi/en-suivi'
                                or s.path_string like '/patient/fiche/statut-du-suivi/post-suivi'
                                or (
                                    s.path_string like '/patient/fiche/statut-du-suivi/disparu'
                                    and year(pi.start) = year('" . $this->refDate . "')
                                ) 
                                or (
                                    s.path_string like '/patient/fiche/statut-du-suivi/decede'
                                    and year(pi.start) = year('" . $this->refDate . "')
                                )
                            )
                
                            and followup_reports.report_date between COALESCE(pi.start, followup_reports.report_date) and COALESCE (pi.end, followup_reports.report_date)
                            and pi.deleted_at is null 
                            and p.deleted_at is null
                            and followup_reports.deleted_at is null
                            and year(followup_reports.report_date) in ('" . $this->refYear . "', '" . $this->refYear . "'-1)
                            and followup_reports.report_date between coalesce(pi_antenna.start, followup_reports.report_date) and COALESCE (pi_antenna.end, followup_reports.report_date)
                            and s_antenna.path_string like '/patient/suivi/antenne/%'
                            and s_antenna.value like '" . $this->antenna . "'
                            
                        group by
                            period, categoriesuivi
                    ) q
                order by
                    period DESC,	
                    categoriesuivi";

        $result = $conn->query($sql);


        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques32', name: 'app_statistiques32')]
    public function request32()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "SELECT
                    period as 'année',
                    categoriesuivi,
                    rencontres,
                    appels_sortants,
                    appels_entrants,
                    reunions,
                    rencontres+appels_sortants+appels_entrants+reunions as rencontres_reunions_et_appels
                from
                    (
                        SELECT
                            left(followup_reports.report_date, 4) as period,
                            s.value as categoriesuivi,
                            (
                                SUM(
                                    if (
                                        followup_reports.activity_type = 1
                                        and followup_reports.report_type in (1, 2, 3),
                                        1,
                                        0
                                    )
                                )
                            ) as rencontres,
                            (
                                SUM(
                                    if(
                                        followup_reports.activity_type = 2,
                                        1, 
                                        0
                                    )
                                )
                            ) as appels_sortants,
                            (
                                SUM(
                                    if(
                                        followup_reports.activity_type = 4,
                                        1, 
                                        0
                                    )
                                )
                            ) as appels_entrants,
                            (
                                SUM(
                                    if(
                                        followup_reports.activity_type = 3,
                                        1, 
                                        0
                                    )
                                )
                            ) as reunions
                            
                        FROM
                            patients p
                            inner join followup_reports on followup_reports.pati_id = p.id
                            inner join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                            inner join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                            inner join patients_information as pi on p.id = pi.pati_id 
                            inner join suggestions as s on s.id = pi.sugg_id 
                        where
                            (
                                s.path_string like '/patient/suivi/equipes/equipe-rue'
                                or s.path_string like '/patient/fiche/statut-du-suivi/pre-suivi%' 
                                or s.path_string like '/patient/fiche/statut-du-suivi/6' 
                                or s.path_string like '/patient/fiche/statut-du-suivi/en-suivi'
                                or s.path_string like '/patient/fiche/statut-du-suivi/post-suivi'
                                or (
                                    s.path_string like '/patient/fiche/statut-du-suivi/disparu'
                                    and year(pi.start) = year('" . $this->refDate . "')
                                ) 
                                or (
                                    s.path_string like '/patient/fiche/statut-du-suivi/decede'
                                    and year(pi.start) = year('" . $this->refDate . "')
                                )
                            )
                
                            and followup_reports.report_date between COALESCE(pi.start, followup_reports.report_date) and COALESCE (pi.end, followup_reports.report_date)
                            and pi.deleted_at is null 
                            and p.deleted_at is null
                            and followup_reports.deleted_at is null
                            and year(followup_reports.report_date) in ('" . $this->refYear . "', '" . $this->refYear . "'-1, '" . $this->refYear . "'-2)
                            and followup_reports.report_date between coalesce(pi_antenna.start, followup_reports.report_date) and COALESCE (pi_antenna.end, followup_reports.report_date)
                            and s_antenna.path_string like '/patient/suivi/antenne/%'
                            and s_antenna.value like '" . $this->antenna . "'
                
                
                        group by
                            period, categoriesuivi
                    ) q
                order by
                    period DESC,	
                    categoriesuivi;
                ";

        $result = $conn->query($sql);


        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }


    #[Route('/api/statistiques31', name: 'app_statistiques31')]
    public function request31()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select 
                    value, 
                    hash, 
                    firstname, 
                    lastname, 
                    start as debut, 
                    COALESCE(end, 'en cours') as fin ,
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
                            inner join patients_information as pi on p.id = pi.pati_id 
                            inner join suggestions as s on s.id = pi.sugg_id 
                            inner join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                            inner join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                            inner join patients_information pi_status on pi_status.pati_id = p.id
                            inner join suggestions s_status on s_status.id = pi_status.sugg_id
                        where 
                            (
                                s.path_string like '/patient/suivi/equipe%'
                            ) 
                            and (
                                '" . $this->refDate . "' BETWEEN pi.start 
                                and COALESCE(
                                    pi.end, 
                                    '" . $this->nextyear0101 . "'
                                )
                            ) 
                            and pi.deleted_at is null 
                            and p.deleted_at is null 
                            
                            and s_antenna.path_string like '/patient/suivi/antenne/%'
                            and pi_antenna.deleted_at is null
                            and s_antenna.value like '" . $this->antenna . "'			
                            and pi.start <= COALESCE (pi_antenna.end, '" . $this->refDate . "')
                            and coalesce(pi.end, '" . $this->refDate . "') >= coalesce(pi_antenna.start, '" . $this->past . "') 
                
                            and s_status.path_string like '/patient/fiche/statut-du-suivi/%'
                            and '" . $this->refDate . "' BETWEEN pi_status.start and COALESCE(pi_status.end, '" . $this->nextyear0101 . "')
                            and pi_status.deleted_at is null
                            and s_status.path_string not like '/patient/fiche/statut-du-suivi/decede' 
                            and 
                            ( 
                                s_status.path_string like '/patient/fiche/statut-du-suivi/pre-suivi%' 
                                or s_status.path_string like '/patient/fiche/statut-du-suivi/en-suivi'
                                or s_status.path_string like '/patient/fiche/statut-du-suivi/post-suivi'
                                or (
                                    s_status.path_string like '/patient/fiche/statut-du-suivi/6'
                                    and pi.start like '" . $this->refyearwc . "'
                                ) 
                                or (
                                    s_status.path_string like '/patient/fiche/statut-du-suivi/signalement%'
                                    and pi.start like '" . $this->refyearwc . "'
                                )			
                            )
                            
                    ) q 
                order by 
                    value, 
                    hash,
                    firstname, 
                    lastname, 
                    start";

        $result = $conn->query($sql);


        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques30', name: 'app_statistiques30')]
    public function request30()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "SELECT 
                    value, 
                    status,
                    count(hash) as nombre
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
                            inner join patients_information as pi on p.id = pi.pati_id 
                            inner join suggestions as s on s.id = pi.sugg_id 
                            inner join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                            inner join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                            inner join patients_information pi_status on pi_status.pati_id = p.id
                            inner join suggestions s_status on s_status.id = pi_status.sugg_id
                        where 
                            (
                                s.path_string like '/patient/suivi/equipe%'
                            ) 
                            and (
                                '" . $this->refDate . "' BETWEEN pi.start 
                                and COALESCE(
                                    pi.end, 
                                    '" . $this->nextyear0101 . "'
                                )
                            ) 
                            and pi.deleted_at is null 
                            and p.deleted_at is null 
                            
                            and s_antenna.path_string like '/patient/suivi/antenne/%'
                            and pi_antenna.deleted_at is null
                            and s_antenna.value like '" . $this->antenna . "'			
                            and pi.start <= COALESCE (pi_antenna.end, '" . $this->refDate . "')
                            and coalesce(pi.end, '" . $this->refDate . "') >= coalesce(pi_antenna.start, '" . $this->past . "') 
                
                            and s_status.path_string like '/patient/fiche/statut-du-suivi/%'
                            and '" . $this->refDate . "' BETWEEN pi_status.start and COALESCE(pi_status.end, '" . $this->nextyear0101 . "')
                            and pi_status.deleted_at is null
                            and s_status.path_string not like '/patient/fiche/statut-du-suivi/decede'
                            and 
                            ( 
                                s_status.path_string like '/patient/fiche/statut-du-suivi/pre-suivi%'
                                or s_status.path_string like '/patient/fiche/statut-du-suivi/en-suivi'
                                or s_status.path_string like '/patient/fiche/statut-du-suivi/post-suivi' 
                                or (
                                    s_status.path_string like '/patient/fiche/statut-du-suivi/6' 
                                    and pi.start like '" . $this->refyearwc . "'
                                ) 
                                or (
                                    s_status.path_string like '/patient/fiche/statut-du-suivi/signalement%' 
                                    and pi.start like '" . $this->refyearwc . "'
                                )			
                            )
                            
                    ) q 
                group by 
                    value, 
                    status";

        $result = $conn->query($sql);


        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques29', name: 'app_statistiques29')]
    public function request29()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "SELECT
                    p.hash,
                    s.value,
                    p.firstname,
                    p.lastname,
                    pi.start,
                    pi.end,
                    s_status.value as statut
                FROM 
                    patients as p
                    inner join patients_information as pi on p.id = pi.pati_id
                    inner join suggestions as s on s.id = pi.sugg_id
                    inner join patients_information pi_antenna on pi_antenna.pati_id = p.id
                    inner join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id
                    inner join patients_information pi_status on pi_status.pati_id = p.id
                    inner join suggestions s_status on s_status.id = pi_status.sugg_id
                where
                    s.path_string like '/patient/suivi/programme/housing-%'
                    and '" . $this->refDate . "' BETWEEN pi.start and COALESCE(pi.end, '" . $this->nextyear0101 . "')
                    and pi.deleted_at is null
                    and p.deleted_at is null
                    and s_antenna.path_string like '/patient/suivi/antenne/%'
                    and pi_antenna.deleted_at is null
                    and s_antenna.value like '" . $this->antenna . "'
                    and pi.start <= COALESCE (pi_antenna.end, '" . $this->refDate . "')
                    and coalesce(pi.end, '" . $this->refDate . "') >= coalesce(pi_antenna.start, '" . $this->past . "') 
                    and s_status.path_string like '/patient/fiche/statut-du-suivi/%'
                    and '" . $this->refDate . "' BETWEEN pi_status.start and COALESCE(pi_status.end, '" . $this->nextyear0101 . "')
                    and pi_status.deleted_at is null
                    and s_status.path_string not like '/patient/fiche/statut-du-suivi/decede'
                    and s_status.path_string not like '/patient/fiche/statut-du-suivi/disparu'
                order by 
                    s.value, 
                    p.firstname, 
                    p.lastname, 
                    pi.start";

        $result = $conn->query($sql);


        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques28', name: 'app_statistiques28')]
    public function request28()
    {
        //    ne fonctionne pas, ou rentre pas dans la case ?

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        // dd($this->refDate);
        $sql = "SELECT
                    s.value as programme,
                    count(p.hash) as nombre
                FROM 
                    patients as p
                    inner join patients_information as pi on p.id = pi.pati_id
                    inner join suggestions as s on s.id = pi.sugg_id
                    inner join patients_information pi_antenna on pi_antenna.pati_id = p.id
                    inner join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id
                    inner join patients_information pi_status on pi_status.pati_id = p.id
                    inner join suggestions s_status on s_status.id = pi_status.sugg_id
                where
                    s.path_string like '/patient/suivi/programme/housing-%'
                    and '" . $this->refDate . "' BETWEEN pi.start and COALESCE(pi.end, '" . $this->refDate . "')
                    and pi.deleted_at is null
                    and p.deleted_at is null
                    and s_antenna.path_string like '/patient/suivi/antenne/%'
                    and pi_antenna.deleted_at is null
                    and s_antenna.value like '" . $this->antenna . "'
                    and pi.start <= COALESCE (pi_antenna.end, '" . $this->refDate . "')
                    and coalesce(pi.end, '" . $this->refDate . "') >= coalesce(pi_antenna.start, '" . $this->past . "') 
                    and s_status.path_string like '/patient/fiche/statut-du-suivi/%'
                    and '" . $this->refDate . "' BETWEEN pi_status.start and COALESCE(pi_status.end, '" . $this->refDate . "')
                    and pi_status.deleted_at is null
                    and s_status.path_string not like '/patient/fiche/statut-du-suivi/decede'
                    and s_status.path_string not like '/patient/fiche/statut-du-suivi/disparu'
                group by 
                    s.value";

        $result = $conn->query($sql);


        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques27', name: 'app_statistiques27')]
    public function request27()
    {

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select  
                    s.value as programme,
                    p.hash,
                    p.firstname,
                    p.lastname,
                    pi.start
                from 
                (
                    select
                        p.id,
                        min(pi.start) as minstart
                    FROM
                        patients as p
                        inner join patients_information as pi on p.id = pi.pati_id
                        inner join suggestions as s on s.id = pi.sugg_id
                        inner  join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                        inner  join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                    where
                        s.path_string like '/patient/suivi/programme/housing-%'
                        and pi.deleted_at is null
                        and p.deleted_at is null
                        
                        and s_antenna.path_string like '/patient/suivi/antenne/%'
                        and pi_antenna.deleted_at is null
                        and s_antenna.value like '" . $this->antenna . "' 
                        and pi.start <= COALESCE (pi_antenna.end, '" . $this->refDate . "')
                        and coalesce(pi.end, '" . $this->refDate . "') >= coalesce(pi_antenna.start, '" . $this->past . "') 
                
                    group by p.id
                ) q 
                inner join patients as p on p.id = q.id
                inner join patients_information as pi on p.id = pi.pati_id and pi.start = q.minstart
                inner join suggestions as s on s.id = pi.sugg_id
                
                where 
                    s.path_string like '/patient/suivi/programme/housing-%'
                    and pi.deleted_at is null
                    and left(pi.start,4) = '" . $this->refYear . "'
                order by s.value, hash";

        $result = $conn->query($sql);


        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }


    #[Route('/api/statistiques26', name: 'app_statistiques26')]
    public function request26()
    {

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select 
                    r.programme, count(id) as nombre
                from 
                (
                    select  
                        s.value as programme,
                        p.id,
                        p.firstname,
                        p.lastname,
                        pi.start
                    from 
                    (
                        select
                            p.id,
                            min(pi.start) as minstart
                        FROM
                            patients as p
                            inner join patients_information as pi on p.id = pi.pati_id
                            inner join suggestions as s on s.id = pi.sugg_id
                            inner join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                            inner join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                        where
                            s.path_string like '/patient/suivi/programme/housing-%'
                            and pi.deleted_at is null
                            and p.deleted_at is null
                            
                            and s_antenna.path_string like '/patient/suivi/antenne/%'
                            and pi_antenna.deleted_at is null
                            and s_antenna.value like '" . $this->antenna . "' 
                            and pi.start <= COALESCE (pi_antenna.end, '" . $this->refDate . "')
                            and coalesce(pi.end, '" . $this->refDate . "') >= coalesce(pi_antenna.start, '" . $this->past . "') 
                
                        group by p.id
                    ) q 
                    inner join patients as p on p.id = q.id
                    inner join patients_information as pi on p.id = pi.pati_id and pi.start = q.minstart
                    inner join suggestions as s on s.id = pi.sugg_id
                
                    where 
                        s.path_string like '/patient/suivi/programme/housing-%'
                        and pi.deleted_at is null
                        and left(pi.start,4) = '" . $this->refYear . "'
                    order by s.value, id
                ) r 
                group by programme;
                ";

        $result = $conn->query($sql);


        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }


    #[Route('/api/statistiques25', name: 'app_statistiques25')]
    public function request25()
    {

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select 
                    value, 
                    firstname, 
                    lastname, 
                    hash, 
                    start as debut, 
                    COALESCE(end, 'en cours') as fin 
                from 
                    (
                        SELECT 
                            p.hash, 
                            s.value, 
                            p.firstname, 
                            p.lastname, 
                            pi.start, 
                            pi.end 
                        FROM 
                            patients as p 
                            inner join patients_information as pi on p.id = pi.pati_id 
                            inner join suggestions as s on s.id = pi.sugg_id 
                            inner join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                            inner join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                        where 
                            (
                                s.path_string like '/patient/fiche/statut-du-suivi/signalement%'
                                or s.path_string like '/patient/fiche/statut-du-suivi/pre-suivi%'
                                or s.path_string like '/patient/fiche/statut-du-suivi/6'
                                or s.path_string like '/patient/fiche/statut-du-suivi/en-suivi'
                                or s.path_string like '/patient/fiche/statut-du-suivi/post-suivi'
                                or (
                                    s.path_string like '/patient/fiche/statut-du-suivi/disparu'
                                    and pi.start like '" . $this->refyearwc . "'
                                ) 
                                or (
                                    s.path_string like '/patient/fiche/statut-du-suivi/decede' 
                                    and pi.start like '" . $this->refyearwc . "'
                                )
                            ) 
                            and (
                                '" . $this->refDate . "' BETWEEN pi.start 
                                and COALESCE(
                                    pi.end, 
                                    '" . $this->nextyear0101 . "'
                                )
                            ) 
                            and pi.deleted_at is null 
                            and p.deleted_at is null 
                            
                            and s_antenna.path_string like '/patient/suivi/antenne/%'
                            and pi_antenna.deleted_at is null
                            and s_antenna.value like '" . $this->antenna . "'			
                            and pi.start <= COALESCE (pi_antenna.end, '" . $this->refDate . "')
                            and coalesce(pi.end, '" . $this->refDate . "') >= coalesce(pi_antenna.start, '" . $this->past . "') 
                
                    ) q 
                order by 
                    value, 
                    firstname, 
                    lastname, 
                    debut";

        $result = $conn->query($sql);


        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }


    #[Route('/api/statistiques24', name: 'app_statistiques24')]
    public function request24()
    {

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select 	
                    value, count(hash) as c 
                from 
                    (
                        SELECT 
                            p.hash, 
                            s.value, 
                            p.firstname, 
                            p.lastname, 
                            pi.start, 
                            pi.end 
                        FROM 
                            patients as p 
                            inner join patients_information as pi on p.id = pi.pati_id 
                            inner join suggestions as s on s.id = pi.sugg_id 
                            inner join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                            inner join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                        where 
                            (
                                s.path_string like '/patient/fiche/statut-du-suivi/signalement%'
                                or s.path_string like '/patient/fiche/statut-du-suivi/pre-suivi%'
                                or s.path_string like '/patient/fiche/statut-du-suivi/6' 
                                or s.path_string like '/patient/fiche/statut-du-suivi/en-suivi' 
                                or s.path_string like '/patient/fiche/statut-du-suivi/post-suivi' 
                                or (
                                    s.path_string like '/patient/fiche/statut-du-suivi/disparu' 
                                    and pi.start like '" . $this->refyearwc . "'
                                ) 
                                or (
                                    s.path_string like '/patient/fiche/statut-du-suivi/decede'
                                    and pi.start like '" . $this->refyearwc . "'
                                )
                            ) 
                            and (
                                '" . $this->refDate . "' BETWEEN pi.start 
                                and COALESCE(
                                    pi.end, 
                                    '" . $this->nextyear0101 . "'
                                )
                            ) 
                            and pi.deleted_at is null 
                            and p.deleted_at is null 
                            
                            and s_antenna.path_string like '/patient/suivi/antenne/%'
                            and pi_antenna.deleted_at is null
                            and s_antenna.value like '" . $this->antenna . "'
                            and pi.start <= COALESCE (pi_antenna.end, '" . $this->refDate . "')
                            and coalesce(pi.end, '" . $this->refDate . "') >= coalesce(pi_antenna.start, '" . $this->past . "') 
                
                        order by 
                            s.value, 
                            p.firstname, 
                            p.lastname, 
                            pi.start
                    ) q 
                group by value";

        $result = $conn->query($sql);


        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques23', name: 'app_statistiques23')]
    public function request23()
    {

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "SELECT 
                    p.id,
                    p.hash,
                    p.firstname,
                    p.lastname,
                    pi.start,
                    pi.end
                FROM 
                    patients p 
                    inner join patients_information pi on p.id = pi.pati_id 
                    inner join suggestions s on s.id = pi.sugg_id
                    inner join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                    inner join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                where 
                    s_antenna.path_string like '/patient/suivi/antenne/%'
                    and pi_antenna.deleted_at is null
                    and s_antenna.value like '" . $this->antenna . "'
                    and pi.start between COALESCE(pi_antenna.start, '" . $this->past . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                    and p.deleted_at is null
                    and s.path_string like '/patient/fiche/statut-du-suivi/post-suivi'
                    and pi.deleted_at is null
                    and pi.start < '" . $this->nextyear0101 . "'  
                    and coalesce(pi.end, '" . $this->refDate . "') >= concat('" . $this->refYear . "', '-01-01')
                    and p.id in 
                    (
                        SELECT 
                            p.id
                        FROM 
                            patients p 
                            inner join patients_information pi on p.id = pi.pati_id 
                            inner join suggestions s on s.id = pi.sugg_id
                            inner join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                            inner join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                        where 
                            s_antenna.path_string like '/patient/suivi/antenne/%'
                            and pi_antenna.deleted_at is null
                            and s_antenna.value like '" . $this->antenna . "'
                            and pi.start between COALESCE(pi_antenna.start, '" . $this->past . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                            and p.deleted_at is null
                            and s.path_string like '/patient/fiche/statut-du-suivi/post-suivi'
                            and pi.deleted_at is null
                            and pi.start < '" . $this->nextyear0101 . "'  
                            and coalesce(pi.end, '" . $this->refDate . "') >= concat('" . $this->refYear . "', '-01-01')
                        group by 
                            p.id
                    )";

        $result = $conn->query($sql);


        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }


    #[Route('/api/statistiques22', name: 'app_statistiques22')]
    public function request22()
    {

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "SELECT 
                    count(id) as 'Nombre de personnes passées par le post-suivi en cours d annee'
                from 
                (
                        SELECT 
                            p.id
                        FROM 
                            patients p 
                            inner join patients_information pi on p.id = pi.pati_id 
                            inner join suggestions s on s.id = pi.sugg_id
                            inner join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                            inner join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                        where 
                            s_antenna.path_string like '/patient/suivi/antenne/%'
                            and pi_antenna.deleted_at is null
                            and s_antenna.value like '" . $this->antenna . "'
                            and pi.start between COALESCE(pi_antenna.start, '" . $this->past . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                            and p.deleted_at is null
                            and s.path_string like '/patient/fiche/statut-du-suivi/post-suivi'
                            and pi.deleted_at is null
                            and pi.start < '" . $this->nextyear0101 . "'  
                            and coalesce(pi.end, '" . $this->refDate . "') >= concat('" . $this->refYear . "', '-01-01')
                        group by 
                            p.id
                ) r;";

        $result = $conn->query($sql);


        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques21', name: 'app_statistiques21')]
    public function request21()
    {

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "SELECT 
                    p.id,
                    p.hash,
                    p.firstname,
                    p.lastname,
                    pi.start,
                    pi.end
                FROM 
                    patients p 
                    inner join patients_information pi on p.id = pi.pati_id 
                    inner join suggestions s on s.id = pi.sugg_id
                    inner join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                    inner join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                where 
                    s_antenna.path_string like '/patient/suivi/antenne/%'
                    and pi_antenna.deleted_at is null
                    and s_antenna.value like '" . $this->antenna . "'
                    and COALESCE(pi.start, makedate(year('" . $this->refDate . "'), 1)) < COALESCE (pi_antenna.end, makedate(year('" . $this->refDate . "')+1, 1))
                    and COALESCE(pi.end, makedate(year('" . $this->refDate . "')+1, 1)) > COALESCE (pi_antenna.start, makedate(year('" . $this->refDate . "'), 1))
                    and p.deleted_at is null
                    and s.path_string like '/patient/fiche/statut-du-suivi/en-suivi'
                    and pi.deleted_at is null
                    and pi.start < makedate(year('" . $this->refDate . "')+1, 1)
                    and coalesce(pi.end, '" . $this->refDate . "') >= makedate(year('" . $this->refDate . "'), 1)";

        $result = $conn->query($sql);


        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques20', name: 'app_statistiques20')]
    public function request20()
    {

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this->refYear);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select 
                    count(id) as 'Nombre de personnes passées par le suivi en cours d annee'
                from 
                (
                        SELECT 
                            p.id
                        FROM 
                            patients p 
                            inner join patients_information pi on p.id = pi.pati_id 
                            inner join suggestions s on s.id = pi.sugg_id
                            inner join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                            inner join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                        where 
                            s_antenna.path_string like '/patient/suivi/antenne/%'
                            and pi_antenna.deleted_at is null
                            and s_antenna.value like '" . $this->antenna . "'
                            and pi.start between COALESCE(pi_antenna.start, '" . $this->past . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                            and p.deleted_at is null
                            and s.path_string like '/patient/fiche/statut-du-suivi/en-suivi' 
                            and pi.deleted_at is null
                            and pi.start < '" . $this->nextyear0101 . "'  
                            and coalesce(pi.end, '" . $this->refDate . "') >= concat('" . $this->refYear . "', '-01-01')
                        group by 
                            p.id
                ) r";

        $result = $conn->query($sql);


        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques19', name: 'app_statistiques19')]
    public function request19()
    {

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select 
                    s_stat.value as statut, p.hash, p.firstname, p.lastname, pi_stat.start as 'date enregistrement', s_antenna.value as 'antenne'
                from patients p
                    inner join 
                    (
                        SELECT
                            p.id, 
                            min(pi.start) as minstart
                        FROM
                            patients as p
                            inner join patients_information as pi on p.id = pi.pati_id
                            inner join suggestions as s on s.id = pi.sugg_id
                        where
                            s.path_string like '/patient/fiche/statut-du-suivi/en-suivi'
                            and pi.deleted_at is null
                            and p.deleted_at is null
                        group by
                            p.id
                    ) q on q.id = p.id 
                    
                    inner  join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                    inner  join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                    inner  join patients_information pi_stat on pi_stat.pati_id = p.id 
                    inner  join suggestions s_stat on s_stat.id = pi_stat.sugg_id 
                
                where 
                    s_antenna.path_string like '/patient/suivi/antenne/%'
                    and pi_antenna.deleted_at is null
                    and s_antenna.value like '" . $this->antenna . "' 
                    and minstart between COALESCE(pi_antenna.start, '" . $this->past . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                
                    and s_stat.path_string like '/patient/fiche/statut-du-suivi/en-suivi%'
                    and minstart = pi_stat.start
                    and pi_stat.deleted_at is null
                    and pi_stat.start like '" . $this->refyearwc . "'
                order by statut, hash";

        $result = $conn->query($sql);


        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques18', name: 'app_statistiques18')]
    public function request18()
    {

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select 
                    s_stat.value as statut, count(p.hash) as nombre
                from patients p
                    inner join 
                    (
                        SELECT
                            p.id, 
                            min(pi.start) as minstart
                        FROM
                            patients as p
                            inner join patients_information as pi on p.id = pi.pati_id
                            inner join suggestions as s on s.id = pi.sugg_id
                        where
                            s.path_string like '/patient/fiche/statut-du-suivi/en-suivi'
                            and pi.deleted_at is null
                            and p.deleted_at is null
                        group by
                            p.id
                    ) q on q.id = p.id 
                    
                    inner  join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                    inner  join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                    inner  join patients_information pi_stat on pi_stat.pati_id = p.id 
                    inner  join suggestions s_stat on s_stat.id = pi_stat.sugg_id 
                
                where 
                    s_antenna.path_string like '/patient/suivi/antenne/%'
                    and pi_antenna.deleted_at is null
                    and s_antenna.value like '" . $this->antenna . "'  
                    and minstart between COALESCE(pi_antenna.start, '" . $this->past . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                
                    and s_stat.path_string like '/patient/fiche/statut-du-suivi/en-suivi'
                    and minstart = pi_stat.start
                    and pi_stat.deleted_at is null
                    and pi_stat.start like '" . $this->refyearwc . "'
                group by statut";

        $result = $conn->query($sql);


        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }


    #[Route('/api/statistiques17', name: 'app_statistiques17')]
    public function request17()
    {

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select 
                    s_stat.value as statut, p.hash, p.firstname, p.lastname, pi_stat.start as 'date enregistrement', minstart, s_antenna.value as 'antenne'
                
                from patients p
                    inner join 
                    (
                        SELECT
                                    p.id,
                                    min(pi.start) as minstart
                                FROM
                                    patients as p
                                    inner join patients_information as pi on p.id = pi.pati_id
                                    inner join suggestions as s on s.id = pi.sugg_id
                                where
                                    s.path_string like '/patient/fiche/statut-du-suivi/pre-suivi-actif%'
                                    and pi.deleted_at is null
                                    and p.deleted_at is null
                                group by
                                    p.id
                    ) q on q.id = p.id 
                    
                    inner  join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                    inner  join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                    inner  join patients_information pi_stat on pi_stat.pati_id = p.id 
                    inner  join suggestions s_stat on s_stat.id = pi_stat.sugg_id 
                
                where 
                    q.minstart between COALESCE(pi_antenna.start, '" . $this->past . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                    and s_antenna.path_string like '/patient/suivi/antenne/%'
                    and pi_antenna.deleted_at is null
                    and s_antenna.value like '" . $this->antenna . "' 
                
                    and s_stat.path_string like '/patient/fiche/statut-du-suivi/pre-suivi-actif%'
                    and q.minstart  = pi_stat.start
                    and pi_stat.deleted_at is null
                    and pi_stat.start like '" . $this->refyearwc . "'
                order by statut, hash";

        $result = $conn->query($sql);


        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }


    #[Route('/api/statistiques16', name: 'app_statistiques16')]
    public function request16()
    {

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select 
                    s_stat.value as statut, count(p.hash) as nombre
                from patients p
                    inner join 
                    (
                        SELECT
                            p.id, 
                            min(pi.start) as minstart
                        FROM
                            patients as p
                            inner join patients_information as pi on p.id = pi.pati_id
                            inner join suggestions as s on s.id = pi.sugg_id
                        where
                            s.path_string like '/patient/fiche/statut-du-suivi/pre-suivi-actif%'
                            and pi.deleted_at is null
                            and p.deleted_at is null
                        group by
                            p.id
                    ) q on q.id = p.id 
                    inner  join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                    inner  join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                    inner  join patients_information pi_stat on pi_stat.pati_id = p.id 
                    inner  join suggestions s_stat on s_stat.id = pi_stat.sugg_id 
                
                where 
                    s_antenna.path_string like '/patient/suivi/antenne/%'
                    and pi_antenna.deleted_at is null
                    and s_antenna.value like '" . $this->antenna . "' 
                    and minstart between COALESCE(pi_antenna.start, '" . $this->past . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                
                    and s_stat.path_string like '/patient/fiche/statut-du-suivi/%'
                    and minstart = pi_stat.start
                    and pi_stat.deleted_at is null
                    and pi_stat.start like '" . $this->refyearwc . "'
                group by s_stat.value";

        $result = $conn->query($sql);


        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques15', name: 'app_statistiques15')]
    public function request15()
    {

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select 
                s_stat.value as statut, p.hash, p.firstname, p.lastname, pi_stat.start as 'date enregistrement', minstart, s_antenna.value as 'antenne'
            
                    from patients p
                        inner join 
                        (
                            SELECT
                                        p.id,
                                        min(pi.start) as minstart
                                    FROM
                                        patients as p
                                        inner join patients_information as pi on p.id = pi.pati_id
                                        inner join suggestions as s on s.id = pi.sugg_id
                                    where
                                        s.path_string like '/patient/fiche/statut-du-suivi/signalement%'
                                        and pi.deleted_at is null
                                        and p.deleted_at is null
                                    group by
                                        p.id
                        ) q on q.id = p.id 
                        
                        inner  join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                        inner  join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                        inner  join patients_information pi_stat on pi_stat.pati_id = p.id 
                        inner  join suggestions s_stat on s_stat.id = pi_stat.sugg_id 
                    
                    where 
                        q.minstart between COALESCE(pi_antenna.start, '" . $this->past . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                        and s_antenna.path_string like '/patient/suivi/antenne/%'
                        and pi_antenna.deleted_at is null
                        and s_antenna.value like '" . $this->antenna . "' 
                    
                        and s_stat.path_string like '/patient/fiche/statut-du-suivi/signalement%'
                        and q.minstart  = pi_stat.start
                        and pi_stat.deleted_at is null
                        and pi_stat.start like '" . $this->refyearwc . "'
                    order by statut, hash";

        $result = $conn->query($sql);


        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }


    #[Route('/api/statistiques14', name: 'app_statistiques14')]
    public function request14()
    {

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select 
                    s_stat.value as statut, count(p.id) as nombre
                    
                    from patients p
                        inner join 
                        (
                            SELECT
                                        p.id,
                                        min(pi.start) as minstart
                                    FROM
                                        patients as p
                                        inner join patients_information as pi on p.id = pi.pati_id
                                        inner join suggestions as s on s.id = pi.sugg_id
                                    where
                                        s.path_string like '/patient/fiche/statut-du-suivi/signalement%'
                                        and pi.deleted_at is null
                                        and p.deleted_at is null
                                    group by
                                        p.id
                        ) q on q.id = p.id 
                        
                        inner  join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                        inner  join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                        inner  join patients_information pi_stat on pi_stat.pati_id = p.id 
                        inner  join suggestions s_stat on s_stat.id = pi_stat.sugg_id 
                    
                    where 
                        q.minstart between COALESCE(pi_antenna.start, '" . $this->past . "') and COALESCE (pi_antenna.end, '" . $this->refDate . "')
                        and s_antenna.path_string like '/patient/suivi/antenne/%'
                        and pi_antenna.deleted_at is null
                        and s_antenna.value like '" . $this->antenna . "' 
                    
                        and s_stat.path_string like '/patient/fiche/statut-du-suivi/signalement%'
                        and q.minstart  = pi_stat.start
                        and pi_stat.deleted_at is null
                        and pi_stat.start like '" . $this->refyearwc . "'
                    group by s_stat.value";

        $result = $conn->query($sql);


        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques13', name: 'app_statistiques13')]
    public function request13()
    {

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select 
        -- 		antenna.path_string,
        -- 		p.id,
        -- 		p.firstname,
        -- 		p.lastname,
        
                distinct 
                pathologie.problem,
                p.id
                
        -- 		pathologie.start,
        -- 		pathologie.end,
        -- 		antenna.start,
        -- 		antenna.end,
        -- 		equipe.path_string,
        -- 		equipe.start,
        -- 		equipe.end
          
        from 
            patients p 
        
            inner join
            ( 
                select 
                    pi.pati_id,
                    s.path_string, 
                    pi.start,
                    pi.end
                from patients_information pi
                    inner join suggestions as s on s.id = pi.sugg_id 
                where 
                    s.path_string like '/patient/suivi/equipes/equipe-rue' 
                    and pi.deleted_at is null
                    and coalesce(pi.start, '" . $this->startDate . "') <= '" . $this->endDate . "'
                    and coalesce(pi.end, '" . $this->endDate . "') >= '" . $this->startDate . "' 
            ) as equipe on p.id = equipe.pati_id
            
            inner join
            ( 
                select 
                    pi.pati_id,
                    s.path_string, 
                    pi.start,
                    pi.end
                from patients_information pi
                    inner join suggestions as s on s.id = pi.sugg_id 
                where 
                    s.path_string in ('/patient/fiche/statut-du-suivi/en-suivi', '/patient/fiche/statut-du-suivi/pre-suivi-actif')
                    and pi.deleted_at is null
                    and coalesce(pi.start, '" . $this->startDate . "') <= '" . $this->endDate . "'
                    and coalesce(pi.end, '" . $this->endDate . "') >= '" . $this->startDate . "' 
            ) as suivi on p.id = suivi.pati_id
            and COALESCE(suivi.start, '" . $this->startDate . "') <= COALESCE(equipe.end, '" . $this->endDate . "')
            and COALESCE(suivi.end, '" . $this->endDate . "') >= COALESCE(equipe.start, '" . $this->startDate . "')
            
            inner join 
            ( 
                select 
                    pati_id, 
                    s.path_string, 
                    pi.start,
                    pi.end
        
                from patients_information pi
                    inner join suggestions s on s.id = pi.sugg_id 
                where 
                    s.path_string like '/patient/suivi/antenne/%'
                    and pi.deleted_at is null
                    and s.value like '" . $this->antenna . "' 
                    and coalesce(pi.start, '" . $this->startDate . "') <= '" . $this->endDate . "'
                    and coalesce(pi.end, '" . $this->endDate . "') >= '" . $this->startDate . "'
            ) as antenna 
            on p.id = antenna.pati_id
            and COALESCE(antenna.start, '" . $this->startDate . "') <= COALESCE(equipe.end, '" . $this->endDate . "')
            and COALESCE(antenna.end, '" . $this->endDate . "') >= COALESCE(equipe.start, '" . $this->startDate . "')
            and COALESCE(antenna.start, '" . $this->startDate . "') <= COALESCE(suivi.end, '" . $this->endDate . "')
            and COALESCE(antenna.end, '" . $this->endDate . "') >= COALESCE(suivi.start, '" . $this->startDate . "')
            
            inner join
            (
                select 
                    pi.pati_id,
                    if (s2.path_string  like '%mental%', 'pathologie mentale', 'pathologie physique chronique ou assuetude') as problem,
                    pi.start,
                    pi.end
                 from patients_information pi
                    inner join suggestions as s2 on s2.id = pi.sugg_id 
                    inner join patients_information_template_element pitel on pitel.id = pi.itel_id 
                    inner join suggestions stel on stel.id = pitel.suge_id 
                where 
                    (
                        stel.path_string like '/patient/fiche/assuetude/declaree%' 
                        or s2.path_string like '/patient/medical/patholo%'
                    )
                    and pi.deleted_at is null
                    and coalesce(pi.start, '" . $this->startDate . "') <= '" . $this->endDate . "'
                    and coalesce(pi.end, '" . $this->endDate . "') >= '" . $this->startDate . "'
            ) pathologie 
            on pathologie.pati_id = p.id
            and COALESCE(pathologie.start, '" . $this->startDate . "') <= COALESCE(equipe.end, '" . $this->endDate . "')
            and COALESCE(pathologie.end, '" . $this->endDate . "') >= COALESCE(equipe.start, '" . $this->startDate . "')
            and COALESCE(pathologie.start, '" . $this->startDate . "') <= COALESCE(antenna.end, '" . $this->endDate . "')
            and COALESCE(pathologie.end, '" . $this->endDate . "') >= COALESCE(antenna.start, '" . $this->startDate . "')
            and COALESCE(pathologie.start, '" . $this->startDate . "') <= COALESCE(suivi.end, '" . $this->endDate . "')
            and COALESCE(pathologie.end, '" . $this->endDate . "') >= COALESCE(suivi.start, '" . $this->startDate . "')
        
        where 
            p.deleted_at is null
              
        order by 
            antenna.path_string,
            problem,
            p.id,
            p.firstname,
            p.lastname";

        $result = $conn->query($sql);


        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }
    #[Route('/api/statistiques12', name: 'app_statistiques12')]
    public function request12()
    {

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select 
        problem,
        count(id) as nombre
    
    from 
        (
        select 
    -- 		antenna.path_string,
    -- 		p.id,
    -- 		p.firstname,
    -- 		p.lastname,
    
            distinct 
            pathologie.problem,
            p.id
            
    -- 		pathologie.start,
    -- 		pathologie.end,
    -- 		antenna.start,
    -- 		antenna.end,
    -- 		equipe.path_string,
    -- 		equipe.start,
    -- 		equipe.end
          
        from 
            patients p 
    
            inner join
            ( 
                select 
                    pi.pati_id,
                    s.path_string, 
                    pi.start,
                    pi.end
                from patients_information pi
                    inner join suggestions as s on s.id = pi.sugg_id 
                where 
                    s.path_string like '/patient/suivi/equipes/equipe-rue' 
                    and pi.deleted_at is null
                    and coalesce(pi.start, '" . $this->startDate . "') <= '" . $this->endDate . "'
                    and coalesce(pi.end, '" . $this->endDate . "') >= '" . $this->startDate . "' 
            ) as equipe on p.id = equipe.pati_id
            
            inner join
            ( 
                select 
                    pi.pati_id,
                    s.path_string, 
                    pi.start,
                    pi.end
                from patients_information pi
                    inner join suggestions as s on s.id = pi.sugg_id 
                where 
                    s.path_string in ('/patient/fiche/statut-du-suivi/en-suivi', '/patient/fiche/statut-du-suivi/pre-suivi-actif')
                    and pi.deleted_at is null
                    and coalesce(pi.start, '" . $this->startDate . "') <= '" . $this->endDate . "'
                    and coalesce(pi.end, '" . $this->endDate . "') >= '" . $this->startDate . "' 
            ) as suivi on p.id = suivi.pati_id
            and COALESCE(suivi.start, '" . $this->startDate . "') <= COALESCE(equipe.end, '" . $this->endDate . "')
            and COALESCE(suivi.end, '" . $this->endDate . "') >= COALESCE(equipe.start, '" . $this->startDate . "')
            
            inner join 
            ( 
                select 
                    pati_id, 
                    s.path_string, 
                    pi.start,
                    pi.end
    
                from patients_information pi
                    inner join suggestions s on s.id = pi.sugg_id 
                where 
                    s.path_string like '/patient/suivi/antenne/%'
                    and pi.deleted_at is null
                    and s.value like '" . $this->antenna . "' 
                    and coalesce(pi.start, '" . $this->startDate . "') <= '" . $this->endDate . "'
                    and coalesce(pi.end, '" . $this->endDate . "') >= '" . $this->startDate . "'
            ) as antenna 
            on p.id = antenna.pati_id
            and COALESCE(antenna.start, '" . $this->startDate . "') <= COALESCE(equipe.end, '" . $this->endDate . "')
            and COALESCE(antenna.end, '" . $this->endDate . "') >= COALESCE(equipe.start, '" . $this->startDate . "')
            and COALESCE(antenna.start, '" . $this->startDate . "') <= COALESCE(suivi.end, '" . $this->endDate . "')
            and COALESCE(antenna.end, '" . $this->endDate . "') >= COALESCE(suivi.start, '" . $this->startDate . "')
            
            inner join
            (
                select 
                    pi.pati_id,
                    if (s2.path_string  like '%mental%', 'pathologie mentale', 'pathologie physique chronique ou assuetude') as problem,
                    pi.start,
                    pi.end
                from patients_information pi
                    inner join suggestions as s2 on s2.id = pi.sugg_id 
                    inner join patients_information_template_element pitel on pitel.id = pi.itel_id 
                    inner join suggestions stel on stel.id = pitel.suge_id 
                where 
                    (
                        stel.path_string like '/patient/fiche/assuetude/declaree%' 
                        or s2.path_string like '/patient/medical/patholo%'
                    )
                    and pi.deleted_at is null
                    and coalesce(pi.start, '" . $this->startDate . "') <= '" . $this->endDate . "'
                    and coalesce(pi.end, '" . $this->endDate . "') >= '" . $this->startDate . "'
            ) pathologie 
            on pathologie.pati_id = p.id
            and COALESCE(pathologie.start, '" . $this->startDate . "') <= COALESCE(equipe.end, '" . $this->endDate . "')
            and COALESCE(pathologie.end, '" . $this->endDate . "') >= COALESCE(equipe.start, '" . $this->startDate . "')
            and COALESCE(pathologie.start, '" . $this->startDate . "') <= COALESCE(antenna.end, '" . $this->endDate . "')
            and COALESCE(pathologie.end, '" . $this->endDate . "') >= COALESCE(antenna.start, '" . $this->startDate . "')
            and COALESCE(pathologie.start, '" . $this->startDate . "') <= COALESCE(suivi.end, '" . $this->endDate . "')
            and COALESCE(pathologie.end, '" . $this->endDate . "') >= COALESCE(suivi.start, '" . $this->startDate . "')
    
        where 
            p.deleted_at is null
        order by 
            antenna.path_string,
            problem,
            p.id,
            p.firstname,
            p.lastname
    ) list
    group by problem";

        $result = $conn->query($sql);


        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }

    #[Route('/api/statistiques11', name: 'app_statistiques11')]
    public function request11()
    {

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select 
        -- 		antenna.path_string,
        -- 		p.id,
        -- 		p.firstname,
        -- 		p.lastname,
        
                distinct 
                pathologie.problem,
                p.id
                
        -- 		pathologie.start,
        -- 		pathologie.end,
        -- 		antenna.start,
        -- 		antenna.end,
        -- 		equipe.path_string,
        -- 		equipe.start,
        -- 		equipe.end
          
        from 
            patients p 
        
            inner join
            ( 
                select 
                    pi.pati_id,
                    s.path_string, 
                    pi.start,
                    pi.end
                from patients_information pi
                    inner join suggestions as s on s.id = pi.sugg_id 
                where 
                    s.path_string like '/patient/suivi/equipes/equipe-rue' 
                    and pi.deleted_at is null
                    and coalesce(pi.start, '" . $this->startDate . "') <= '" . $this->endDate . "'
                    and coalesce(pi.end, '" . $this->endDate . "') >= '" . $this->startDate . "' 
            ) as equipe on p.id = equipe.pati_id
            
            inner join
            ( 
                select 
                    pi.pati_id,
                    s.path_string, 
                    pi.start,
                    pi.end
                from patients_information pi
                    inner join suggestions as s on s.id = pi.sugg_id 
                where 
                    s.path_string in ('/patient/fiche/statut-du-suivi/en-suivi', '/patient/fiche/statut-du-suivi/pre-suivi-actif')
                    and pi.deleted_at is null
                    and coalesce(pi.start, '" . $this->startDate . "') <= '" . $this->endDate . "'
                    and coalesce(pi.end, '" . $this->endDate . "') >= '" . $this->startDate . "' 
            ) as suivi on p.id = suivi.pati_id
            and COALESCE(suivi.start, '" . $this->startDate . "') <= COALESCE(equipe.end, '" . $this->endDate . "')
            and COALESCE(suivi.end, '" . $this->endDate . "') >= COALESCE(equipe.start, '" . $this->startDate . "')
            
            inner join 
            ( 
                select 
                    pati_id, 
                    s.path_string, 
                    pi.start,
                    pi.end
        
                from patients_information pi
                    inner join suggestions s on s.id = pi.sugg_id 
                where 
                    s.path_string like '/patient/suivi/antenne/%'
                    and pi.deleted_at is null
                    and s.value like '" . $this->antenna . "'
                    and coalesce(pi.start, '" . $this->startDate . "') <= '" . $this->endDate . "'
                    and coalesce(pi.end, '" . $this->endDate . "') >= '" . $this->startDate . "'
            ) as antenna 
            on p.id = antenna.pati_id
            and COALESCE(antenna.start, '" . $this->startDate . "') <= COALESCE(equipe.end, '" . $this->endDate . "')
            and COALESCE(antenna.end, '" . $this->endDate . "') >= COALESCE(equipe.start, '" . $this->startDate . "')
            and COALESCE(antenna.start, '" . $this->startDate . "') <= COALESCE(suivi.end, '" . $this->endDate . "')
            and COALESCE(antenna.end, '" . $this->endDate . "') >= COALESCE(suivi.start, '" . $this->startDate . "')
            
            inner join
            (
                select 
                    pi.pati_id,
                    if (s2.path_string  like '%mental%', 'pathologie mentale', 'pathologie physique chronique ou assuetude') as problem,
                    pi.start,
                    pi.end
                 from patients_information pi
                    inner join suggestions as s2 on s2.id = pi.sugg_id 
                    inner join patients_information_template_element pitel on pitel.id = pi.itel_id 
                    inner join suggestions stel on stel.id = pitel.suge_id 
                where 
                    (
                        stel.path_string like '/patient/fiche/assuetude/declaree%' 
                        or s2.path_string like '/patient/medical/patholo%'
                    )
                    and pi.deleted_at is null
                    and coalesce(pi.start, '" . $this->startDate . "') <= '" . $this->endDate . "'
                    and coalesce(pi.end, '" . $this->endDate . "') >= '" . $this->startDate . "'
            ) pathologie 
            on pathologie.pati_id = p.id
            and COALESCE(pathologie.start, '" . $this->startDate . "') <= COALESCE(equipe.end, '" . $this->endDate . "')
            and COALESCE(pathologie.end, '" . $this->endDate . "') >= COALESCE(equipe.start, '" . $this->startDate . "')
            and COALESCE(pathologie.start, '" . $this->startDate . "') <= COALESCE(antenna.end, '" . $this->endDate . "')
            and COALESCE(pathologie.end, '" . $this->endDate . "') >= COALESCE(antenna.start, '" . $this->startDate . "')
            and COALESCE(pathologie.start, '" . $this->startDate . "') <= COALESCE(suivi.end, '" . $this->endDate . "')
            and COALESCE(pathologie.end, '" . $this->endDate . "') >= COALESCE(suivi.start, '" . $this->startDate . "')
        
        where 
            p.deleted_at is null
                and p.id in
                (
                    Select
                        id
                    from 
                    (
                        select 
                            q.id,
                            rencontres + conseils + transferts + soins + accompagnements as activites,
                            appels_sortants + appels_entrants + reunions as demarches
                        from
                            (
                                SELECT
                                    p.id,
                                    s.value as categoriesuivi,
                                    (
                                        SUM(
                                            if (
                                                followup_reports.activity_type = 1
                                                and followup_reports.report_type in (1, 2, 3),
                                                1,
                                                0
                                            )
                                        )
                                    ) as rencontres,
                                    SUM(
                                        if (
                                            followup_reports.activity_type = 1
                                            and sa.path_string like '%conseil%',
                                            1,
                                            0
                                        )
                                    ) as conseils,
                                    SUM(
                                        if (
                                            followup_reports.activity_type = 1
                                            and sa.path_string like '%transfert%',
                                            1,
                                            0
                                        )
                                    ) as transferts,
                                    SUM(
                                        if (
                                            followup_reports.activity_type = 1
                                            and sa.path_string like '%soin%',
                                            1,
                                            0
                                        )
                                    ) as soins,
                                    SUM(
                                        if (
                                            followup_reports.activity_type = 1
                                            and sa.path_string like '%accomp%',
                                            1,
                                            0
                                        )
                                    ) as accompagnements,
                                    
                                    SUM(
                                        if(
                                            followup_reports.activity_type = 2,
                                            1, 0
                                        )
                                    ) as appels_sortants,
                                    SUM(
                                        if(
                                            followup_reports.activity_type = 3,
                                            1, 0
                                        )
                                    ) as reunions,
                                    SUM(
                                        if(
                                            followup_reports.activity_type = 4,
                                            1, 0
                                        )
                                    ) as appels_entrants
                                FROM
                                    patients p
                                    inner join followup_reports on followup_reports.pati_id = p.id
                                    inner join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                                    inner join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                                    inner join patients_information as pi on p.id = pi.pati_id 
                                    inner join suggestions as s on s.id = pi.sugg_id 
                                    left JOIN followup_reports_activities on followup_reports_activities.fore_id = followup_reports.id
                                    left join suggestions as sa on sa.id = followup_reports_activities.id
                                where
                                    s.path_string like '/patient/suivi/equipes/equipe-rue%' 
                                    and followup_reports.report_date between COALESCE(pi.start, '" . $this->startDate . "' ) and COALESCE (pi.end, '" . $this->endDate . "'	)
                                    and pi.deleted_at is null 
                                    and p.deleted_at is null
                                    and followup_reports.deleted_at is null
                                    and followup_reports.report_date between '" . $this->startDate . "' and '" . $this->endDate . "'
                                    and followup_reports.report_date between coalesce(pi_antenna.start, '" . $this->startDate . "') and COALESCE (pi_antenna.end, '" . $this->endDate . "')
                                    and s_antenna.path_string like '/patient/suivi/antenne/%'
                                    and s_antenna.value like '" . $this->antenna . "'
        
                                group by
                                    categoriesuivi, p.id
                            ) q
                        having demarches + activites > 0 
                        order by
                            categoriesuivi, q.id
                        ) r
                    )      
        order by 
            antenna.path_string,
            problem,
            p.id,
            p.firstname,
            p.lastname;";

        $result = $conn->query($sql);


        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }
    #[Route('/api/statistiques10', name: 'app_statistiques10')]
    public function request10()
    {

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }


        // dd($this);

        // $sql = "SELECT * FROM patients WHERE antenna = '" . $this->antennainit . "'";
        $sql = "select 
                    problem,
                    count(id) as nombre
                
                from 
                    (
                    select 
                -- 		antenna.path_string,
                -- 		p.id,
                -- 		p.firstname,
                -- 		p.lastname,
                
                        distinct 
                        pathologie.problem,
                        p.id
                        
                -- 		pathologie.start,
                -- 		pathologie.end,
                -- 		antenna.start,
                -- 		antenna.end,
                -- 		equipe.path_string,
                -- 		equipe.start,
                -- 		equipe.end
                    
                    from 
                        patients p 
                
                        inner join
                        ( 
                            select 
                                pi.pati_id,
                                s.path_string, 
                                pi.start,
                                pi.end
                            from patients_information pi
                                inner join suggestions as s on s.id = pi.sugg_id 
                            where 
                                s.path_string like '/patient/suivi/equipes/equipe-rue' 
                                and pi.deleted_at is null
                                and coalesce(pi.start, '" . $this->startDate . "') <= '" . $this->endDate . "'
                                and coalesce(pi.end, '" . $this->endDate . "') >= '" . $this->startDate . "' 
                        ) as equipe on p.id = equipe.pati_id
                        
                        inner join
                        ( 
                            select 
                                pi.pati_id,
                                s.path_string, 
                                pi.start,
                                pi.end
                            from patients_information pi
                                inner join suggestions as s on s.id = pi.sugg_id 
                            where 
                                s.path_string in ('/patient/fiche/statut-du-suivi/en-suivi', '/patient/fiche/statut-du-suivi/pre-suivi-actif')
                                and pi.deleted_at is null
                                and coalesce(pi.start, '" . $this->startDate . "') <= '" . $this->endDate . "'
                                and coalesce(pi.end, '" . $this->endDate . "') >= '" . $this->startDate . "' 
                        ) as suivi on p.id = suivi.pati_id
                        and COALESCE(suivi.start, '" . $this->startDate . "') <= COALESCE(equipe.end, '" . $this->endDate . "')
                        and COALESCE(suivi.end, '" . $this->endDate . "') >= COALESCE(equipe.start, '" . $this->startDate . "')
                        
                        inner join 
                        ( 
                            select 
                                pati_id, 
                                s.path_string, 
                                pi.start,
                                pi.end
                
                            from patients_information pi
                                inner join suggestions s on s.id = pi.sugg_id 
                            where 
                                s.path_string like '/patient/suivi/antenne/%'
                                and pi.deleted_at is null
                                and s.value like '" . $this->antenna . "' 
                                and coalesce(pi.start, '" . $this->startDate . "') <= '" . $this->endDate . "'
                                and coalesce(pi.end, '" . $this->endDate . "') >= '" . $this->startDate . "'
                        ) as antenna 
                        on p.id = antenna.pati_id
                        and COALESCE(antenna.start, '" . $this->startDate . "') <= COALESCE(equipe.end, '" . $this->endDate . "')
                        and COALESCE(antenna.end, '" . $this->endDate . "') >= COALESCE(equipe.start, '" . $this->startDate . "')
                        and COALESCE(antenna.start, '" . $this->startDate . "') <= COALESCE(suivi.end, '" . $this->endDate . "')
                        and COALESCE(antenna.end, '" . $this->endDate . "') >= COALESCE(suivi.start, '" . $this->startDate . "')
                        
                        inner join
                        (
                            select 
                                pi.pati_id,
                                if (s2.path_string  like '%mental%', 'pathologie mentale', 'pathologie physique chronique ou assuetude') as problem,
                                pi.start,
                                pi.end
                            from patients_information pi
                                inner join suggestions as s2 on s2.id = pi.sugg_id 
                                inner join patients_information_template_element pitel on pitel.id = pi.itel_id 
                                inner join suggestions stel on stel.id = pitel.suge_id 
                            where 
                                (
                                    stel.path_string like '/patient/fiche/assuetude/declaree%' 
                                    or s2.path_string like '/patient/medical/patholo%'
                                )
                                and pi.deleted_at is null
                                and coalesce(pi.start, '" . $this->startDate . "') <= '" . $this->endDate . "'
                                and coalesce(pi.end, '" . $this->endDate . "') >= '" . $this->startDate . "'
                        ) pathologie 
                        on pathologie.pati_id = p.id
                        and COALESCE(pathologie.start, '" . $this->startDate . "') <= COALESCE(equipe.end, '" . $this->endDate . "')
                        and COALESCE(pathologie.end, '" . $this->endDate . "') >= COALESCE(equipe.start, '" . $this->startDate . "')
                        and COALESCE(pathologie.start, '" . $this->startDate . "') <= COALESCE(antenna.end, '" . $this->endDate . "')
                        and COALESCE(pathologie.end, '" . $this->endDate . "') >= COALESCE(antenna.start, '" . $this->startDate . "')
                        and COALESCE(pathologie.start, '" . $this->startDate . "') <= COALESCE(suivi.end, '" . $this->endDate . "')
                        and COALESCE(pathologie.end, '" . $this->endDate . "') >= COALESCE(suivi.start, '" . $this->startDate . "')
                
                    where 
                        p.deleted_at is null
                            and p.id in
                            (
                                Select
                                    id
                                from 
                                (
                                    select 
                                        q.id,
                                        rencontres + conseils + transferts + soins + accompagnements as activites,
                                        appels_sortants + appels_entrants + reunions as demarches
                                    from
                                        (
                                            SELECT
                                                p.id,
                                                s.value as categoriesuivi,
                                                (
                                                    SUM(
                                                        if (
                                                            followup_reports.activity_type = 1
                                                            and followup_reports.report_type in (1, 2, 3),
                                                            1,
                                                            0
                                                        )
                                                    )
                                                ) as rencontres,
                                                SUM(
                                                    if (
                                                        followup_reports.activity_type = 1
                                                        and sa.path_string like '%conseil%',
                                                        1,
                                                        0
                                                    )
                                                ) as conseils,
                                                SUM(
                                                    if (
                                                        followup_reports.activity_type = 1
                                                        and sa.path_string like '%transfert%',
                                                        1,
                                                        0
                                                    )
                                                ) as transferts,
                                                SUM(
                                                    if (
                                                        followup_reports.activity_type = 1
                                                        and sa.path_string like '%soin%',
                                                        1,
                                                        0
                                                    )
                                                ) as soins,
                                                SUM(
                                                    if (
                                                        followup_reports.activity_type = 1
                                                        and sa.path_string like '%accomp%',
                                                        1,
                                                        0
                                                    )
                                                ) as accompagnements,
                                                
                                                SUM(
                                                    if(
                                                        followup_reports.activity_type = 2,
                                                        1, 0
                                                    )
                                                ) as appels_sortants,
                                                SUM(
                                                    if(
                                                        followup_reports.activity_type = 3,
                                                        1, 0
                                                    )
                                                ) as reunions,
                                                SUM(
                                                    if(
                                                        followup_reports.activity_type = 4,
                                                        1, 0
                                                    )
                                                ) as appels_entrants
                                            FROM
                                                patients p
                                                inner join followup_reports on followup_reports.pati_id = p.id
                                                inner join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                                                inner join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                                                inner join patients_information as pi on p.id = pi.pati_id 
                                                inner join suggestions as s on s.id = pi.sugg_id 
                                                left JOIN followup_reports_activities on followup_reports_activities.fore_id = followup_reports.id
                                                left join suggestions as sa on sa.id = followup_reports_activities.id
                                            where
                                                s.path_string like '/patient/suivi/equipes/equipe-rue%' 
                                                and followup_reports.report_date between COALESCE(pi.start, '" . $this->startDate . "' ) and COALESCE (pi.end, '" . $this->endDate . "'	)
                                                and pi.deleted_at is null 
                                                and p.deleted_at is null
                                                and followup_reports.deleted_at is null
                                                and followup_reports.report_date between '" . $this->startDate . "' and '" . $this->endDate . "'
                                                and followup_reports.report_date between coalesce(pi_antenna.start, '" . $this->startDate . "') and COALESCE (pi_antenna.end, '" . $this->endDate . "')
                                                and s_antenna.path_string like '/patient/suivi/antenne/%'
                                                and s_antenna.value like '" . $this->antenna . "'
                
                                            group by
                                                categoriesuivi, p.id
                                        ) q
                                    having demarches + activites > 0 
                                    order by
                                        categoriesuivi, q.id
                                    ) r
                                )      
                    order by 
                        antenna.path_string,
                        problem,
                        p.id,
                        p.firstname,
                        p.lastname
                ) list
                group by problem";

        $result = $conn->query($sql);


        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }
    #[Route('/api/statistiques9', name: 'app_statistiques9')]
    public function request9()
    {

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        $sql = 'SELECT
                    s.statut,
                    t.team,
                    p.id,
                    p.lastname
                FROM
                    patients as p
                    left join
                    (
                        select
                            pati_id,
                            team_s.value as team
                        from
                            patients_information as team 
                            left join suggestions as team_s on team_s.id = team.sugg_id
                        where
                            team_s.path_string like "/patient/suivi/equipe%"
                            and team.deleted_at is null
                            and if(right("2022-12-31", 6) = "datesh", CURDATE(), str_to_date("2022-12-31", "%Y-%m-%d")) between COALESCE(team.start, if(right("2022-12-31", 6) = "datesh", CURDATE(), str_to_date("2022-12-31", "%Y-%m-%d"))) and COALESCE (team.end, if(right("2022-12-31", 6) = "datesh", CURDATE(), str_to_date("2022-12-31", "%Y-%m-%d")))
                    ) t on t.pati_id = p.id
                
                    left join
                    (
                        select
                            pati_id,
                            statut_s.value as statut
                        from
                            patients_information as statut 
                            left join suggestions as statut_s on statut_s.id = statut.sugg_id
                        where
                            statut_s.path_string like  "/patient/fiche/statut-du-suivi/%"
                            and statut.deleted_at is null
                            and if(right("2022-12-31", 6) = "datesh", CURDATE(), str_to_date("2022-12-31", "%Y-%m-%d")) between COALESCE(statut.start, if(right("2022-12-31", 6) = "datesh", CURDATE(), str_to_date("2022-12-31", "%Y-%m-%d"))) and COALESCE (statut.end, if(right("2022-12-31", 6) = "datesh", CURDATE(), str_to_date("2022-12-31", "%Y-%m-%d")))
                    ) s on s.pati_id = p.id
                
                    and p.birthdate is null
                    
                    order by statut, team, id';

        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }
    #[Route('/api/statistiques8', name: 'app_statistiques8')]
    public function request8()
    {

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        $sql = 'SELECT 
                    p.id,
                    p.lastname,
                    team.value,
                    team.start, 
                    team.end,
                    team.id
                FROM 
                    patients as p 
                    left join
                    (
                        select 
                            team_s.value,
                            team.start,
                            team.end,
                            team.id
                            
                        from patients_information as team  
                        left join suggestions as team_s on team_s.id = team.sugg_id 
                        where 
                            team.deleted_at is null
                            and team_s.path_string like "/patient/suivi/equipe%" 
                            and if(right("2022-12-31", 6) = "datesh", CURDATE(), str_to_date("2022-12-31", "%Y-%m-%d")) between COALESCE(team.start, if(right("2022-12-31", 6) = "datesh", CURDATE(), str_to_date("2022-12-31", "%Y-%m-%d"))) and COALESCE (team.end, if(right("2022-12-31", 6) = "datesh", CURDATE(), str_to_date("2022-12-31", "%Y-%m-%d")))
                    ) team
                    on team.id = p.id
                
                    where team.id is null and p.deleted_at is null';

        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }
    #[Route('/api/statistiques7', name: 'app_statistiques7')]
    public function request7()
    {

        // modifiée
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        $sql = 'SELECT 
        p.id,
        p.lastname,
        statutsuivi.value,
        statutsuivi.start, 
        statutsuivi.end,
        statutsuivi.id
        FROM 
            patients as p 
            left join
            (
                select 
                    pstatus_s.value,
                    pstatus.start,
                    pstatus.end,
                    pstatus.id,
                    pstatus.pati_id
                    
                from patients_information as pstatus  
                left join suggestions as pstatus_s on pstatus_s.id = pstatus.id 
                where 
                    pstatus.deleted_at is null
                    and pstatus_s.path_string like "/patient/fiche/statut-du-suivi/%" 
                    and if(right("2022-12-31", 6) = "datesh", CURDATE(), str_to_date("2022-12-31", "%Y-%m-%d")) between COALESCE(pstatus.start, if(right("2022-12-31", 6) = "datesh", CURDATE(), str_to_date("2022-12-31", "%Y-%m-%d"))) and COALESCE (pstatus.end, if(right("2022-12-31", 6) = "datesh", CURDATE(), str_to_date("2022-12-31", "%Y-%m-%d")))
            ) statutsuivi
            on statutsuivi.id = p.id
        
            where statutsuivi.id is null and p.deleted_at is null';

        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }



    #[Route('/api/statistiques6', name: 'app_statistiques6')]
    public function request6()
    {

        // Ne fonctionne pas
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        $sql = 'SELECT antenna, id, count(status) as numberEtats from patients group by antenna, id having numberEtats > 0';

        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }


    #[Route('/api/statistiques5', name: 'app_statistiques5')]
    public function request5()
    {
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        $sql = 'SELECT 
                    p.hash, 
                    p.firstname, 
                    p.lastname, 
                    s.value, 
                    pi.end, 
                    pi2.start, 
                    s2.value
                FROM 
                    patients as p 
                    inner join patients_information as pi on p.id = pi.pati_id 
                    inner join suggestions as s on s.id = pi.sugg_id 
                    inner join patients_information as pi2 on p.id = pi2.pati_id 
                    inner join suggestions as s2 on s2.id = pi2.sugg_id 
                where 
                    s.path_string like "/patient/fiche/statut-du-suivi/%" 
                    and s2.path_string like "/patient/fiche/statut-du-suivi/%" 
                    and (pi2.start < pi.end) 
                    and (pi.start < pi2.start) 
                    and pi.id != pi2.id 
                    and pi.deleted_at is null 
                    and pi2.deleted_at is null 
            order by 
                p.firstname, 
                p.lastname, 
                pi.start';

        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }



    #[Route('/api/statistiques4', name: 'app_statistiques4')]
    public function request4()
    {
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        $sql = 'SELECT
                p.id, 
                p.firstname, 
                p.lastname, 
                pi.start, 
                pi.end, 
                s.value 
            FROM 
                patients as p 
                inner join patients_information as pi on p.id = pi.pati_id 
                inner join suggestions as s on s.id = pi.sugg_id 
            where 
                s.path_string like "/patient/fiche/statut-du-suivi/decede" 
                and pi.start is null 
                and pi.deleted_at is null
            ';
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            return $this->json($resultJson);
        } else {
            echo "0 results";
        }
        $conn->close();
    }


    #[Route('/api/statistiques3', name: 'app_statistiques3')]
    public function request3()
    {
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        $sql = "select 	h, 	ln, fn, ch, val from 
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
                                inner join patients_information as pi on p.id = pi.pati_id 
                                inner join suggestions as s on s.id = pi.sugg_id 
                            where 
                                (
                                    s.path_string like '/patient/fiche/statut-du-suivi/signalement%' 
                                    or s.path_string like '/patient/fiche/statut-du-suivi/6' 
                                    or s.path_string like '/patient/fiche/statut-du-suivi/pre-suivi%'
                                    or s.path_string like '/patient/fiche/statut-du-suivi/en-suivi' 
                                    or s.path_string like '/patient/fiche/statut-du-suivi/post-suivi' 
                                    or (
                                        s.path_string like '/patient/fiche/statut-du-suivi/disparu' 
                                        and year(pi.start) like year('" . $this->refDate . "')
                                    ) 
                                    or (
                                        s.path_string like '/patient/fiche/statut-du-suivi/decede' 
                                        and year(pi.start) like year('" . $this->refDate . "')
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
                ch > 1";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            return $this->json($resultJson);
        } else {
            echo "0 results";
        }
        $conn->close();
    }


    #[Route('/api/statistiques2', name: 'app_statistiques2')]
    public function request2()
    {
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        $sql = "SELECT 
        p.id,
        p.id
    FROM 
        patients as p 
        inner join patients_information as pi on p.id = pi.pati_id 
        inner join suggestions as s on s.id = pi.sugg_id 
    where 
        pi.end is null 
        and pi.deleted_at is null 
        and s.path_string like '/patient/fiche/statut-du-suivi%'
        and p.status != s.value;
    ";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            return $this->json($resultJson);
        } else {
            echo "0 results";
        }
        $conn->close();
    }

    #[Route('/api/statistiques1', name: 'app_statistiques')]
    public function request()
    {
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        $sql = "select 
                    s_antenna.value as antenna, 
                    p.id, 
                    p.hash, 
                    s_stat.value as statut, 
                    COALESCE(g.genre, '--inconnu--') as genre, 
                    COALESCE(n.nationalite, '--inconnu--') as nationalite, 
                    COALESCE(prog.programme, '--inconnu--') as programme, 
                    COALESCE(team.team, '--inconnu--') as team
                    
                    from patients p 
                    left join patients_information pi_stat on pi_stat.pati_id = p.id 
                    left join suggestions s_stat on s_stat.id = pi_stat.sugg_id 
                    left join patients_information pi_antenna on pi_antenna.pati_id = p.id 
                    left join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id 
                    left join 
                        (
                            select 
                                s.value as genre,
                                pi.pati_id
                            from 
                                patients_information pi 
                                inner join information_template_element pitel on pitel.id = pi.itel_id 
                                inner join suggestions stel on stel.id = pitel.suge_id 
                                inner JOIN suggestions s on s.id = pi.sugg_id 
                            where 
                                stel.path_string like '/patient/fiche/information-generale/genre%'
                                and '" . $this->refDate . "' between COALESCE(pi.start, '" . $this->past . "') and COALESCE (pi.end, '" . $this->refDate . "')
                                and pi.deleted_at is null
                        ) g on p.id = g.pati_id 		
                        
                        left join 
                        (
                            select 
                                s.value as nationalite,
                                pi.pati_id
                            from 
                                patients_information pi 
                                inner join information_template_element pitel on pitel.id = pi.itel_id 
                                inner join suggestions stel on stel.id = pitel.suge_id 
                                inner JOIN suggestions s on s.id = pi.sugg_id 
                            where 
                                stel.path_string like '/patient/fiche/information-generale/nationalite%'
                                and '" . $this->refDate . "' between COALESCE(pi.start, '" . $this->past . "') and COALESCE (pi.end, '" . $this->refDate . "')
                                and pi.deleted_at is null
                        ) n on p.id = n.pati_id
                
                        left join 
                        (
                            select 
                                s.value as programme,
                                pi.pati_id
                            from 
                                patients_information pi 
                                inner join information_template_element pitel on pitel.id = pi.itel_id 
                                inner join suggestions stel on stel.id = pitel.suge_id 
                                inner JOIN suggestions s on s.id = pi.sugg_id 
                            where 
                                stel.path_string like '/patient/suivi/programme%'
                                and '" . $this->refDate . "' between COALESCE(pi.start, '" . $this->past . "') and COALESCE (pi.end, '" . $this->refDate . "')
                                and pi.deleted_at is null
                        ) prog on p.id = prog.pati_id
                
                        left join 
                        (
                            select 
                                s.value as team,
                                pi.pati_id
                            from 
                                patients_information pi 
                                inner join information_template_element pitel on pitel.id = pi.itel_id 
                                inner join suggestions stel on stel.id = pitel.suge_id 
                                inner JOIN suggestions s on s.id = pi.sugg_id 
                            where 
                                stel.path_string like '/patient/suivi/equipes%'
                                and '" . $this->refDate . "' between COALESCE(pi.start, '" . $this->past . "') and COALESCE (pi.end, '" . $this->refDate . "')
                                and pi.deleted_at is null
                        ) team on p.id = team.pati_id
                
                    where 
                            p.deleted_at is null
                
                            and s_stat.path_string like '/patient/fiche/statut-du-suivi/%'
                            and '" . $this->refDate . "' between coalesce(pi_stat.start, '" . $this->past . "') and coalesce(pi_stat.end, '" . $this->refDate . "')
                            and pi_stat.deleted_at is null
                
                            and s_antenna.path_string like '/patient/suivi/antenne/%'
                            and '" . $this->refDate . "' between coalesce(pi_antenna.start, '" . $this->past . "') and coalesce(pi_antenna.end, '" . $this->refDate . "')
                            and pi_antenna.deleted_at is null;
                ";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header("Content-type: application/json; charset=utf-8");
                array_push($resultJson, $row);
            }
            return $this->json($resultJson);
        } else {
            echo "0 results";
        }
        $conn->close();
    }
}
