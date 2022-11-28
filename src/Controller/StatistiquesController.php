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
    const SERVERNAME = "127.0.0.1:3306";
    const USERNAME = "root";
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
        $refDate = ($initDate !== 'referencedatesh') ? date('Y-m-d') : '2022-01-01';

        $antennainit = 'Bruxelles';
        $antenna = ($initDate === 'Liège') ? 'Liège' : 'Bruxelles';
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
        $past = "1901-01-01";
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
                                left join patients as p2 on p2.id = dcd.id
                                left join patients_information as pi2 on dcd.id = pi2.pati_id
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
                            inner join suggestions s_status on s_status.id = pi_status.id
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
                    count(id) as nombre
                FROM 
                    (
                        SELECT 
                            p.id, 
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
                            inner join suggestions s_status on s_status.id = pi_status.id
                        WHERE 
                            (
                                s.path_string like '/patient/suivi/equipe%' 
                            ) 
                            AND (
                                '" . $this->refDate . "' BETWEEN pi.start 
                                AND COALESCE(
                                    pi.end, 
                                    '" . $this->nextyear0101 . "'
                                )
                            ) 
                            AND pi.deleted_at is null 
                            AND p.deleted_at is null 
                            
                            AND s_antenna.path_string like '/patient/suivi/antenne/%'
                            AND pi_antenna.deleted_at is null
                            AND s_antenna.value like '" . $this->antenna . "'			
                            AND pi.start <= COALESCE (pi_antenna.end, '" . $this->refDate . "')
                            AND coalesce(pi.end, '" . $this->refDate . "') >= coalesce(pi_antenna.start, '" . $this->past . "') 
                
                            AND s_status.path_string like '/patient/fiche/statut-du-suivi/%'
                            AND '" . $this->refDate . "' BETWEEN pi_status.start and COALESCE(pi_status.end, '" . $this->nextyear0101 . "')
                            AND pi_status.deleted_at is null
                            AND s_status.path_string not like '/patient/fiche/statut-du-suivi/decede'
                            AND 
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
                    inner join suggestions s_status on s_status.id = pi_status.id
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
                    pi.start;
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
        $sql = "SELECT
                    s.value as programme,
                    count(p.id) as nombre
                FROM 
                    patients as p
                    inner join patients_information as pi on p.id = pi.pati_id
                    inner join suggestions as s on s.id = pi.sugg_id
                    inner join patients_information pi_antenna on pi_antenna.pati_id = p.id
                    inner join suggestions s_antenna on s_antenna.id = pi_antenna.sugg_id
                    inner join patients_information pi_status on pi_status.pati_id = p.id
                    inner join suggestions s_status on s_status.id = pi_status.id
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
                group by 
                    s.value;
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
                            team.id,
                            team.pati_id
                            
                        from patients_information as team  
                        left join suggestions as team_s on team_s.id = team.sugg_id 
                        where 
                            team.deleted_at is null
                            and team_s.path_string like "/patient/suivi/equipe%" 
                            and if(right("2022-12-31", 6) = "datesh", CURDATE(), str_to_date("2022-12-31", "%Y-%m-%d")) between COALESCE(team.start, if(right("2022-12-31", 6) = "datesh", CURDATE(), str_to_date("2022-12-31", "%Y-%m-%d"))) and COALESCE (team.end, if(right("2022-12-31", 6) = "datesh", CURDATE(), str_to_date("2022-12-31", "%Y-%m-%d")))
                    ) team
                    on team.pati_id = p.id
                
                    where team.pati_id is null and p.deleted_at is null';

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
            on statutsuivi.pati_id = p.id
        
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

        $sql = 'SELECT antenna, id, count(status) as c from patients group by antenna, id having c > 1';

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
                    p.id, 
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

        $sql = 'select 	h, 	ln, fn, ch, val from 
        (
            select 
                h, count(h) as ch, val, fn, ln 
            from 
                (
                    SELECT 
                        s.value as val, 
                        p.id as h, 
                        p.firstname as fn, 
                        p.lastname as ln 
                    FROM 
                        patients as p 
                        inner join patients_information as pi on p.id = pi.pati_id 
                        inner join suggestions as s on s.id = pi.sugg_id 
                    where 
                        (
                            s.path_string like "/patient/fiche/statut-du-suivi/signalement%" 
                            or s.path_string like "/patient/fiche/statut-du-suivi/6" 
                            or s.path_string like "/patient/fiche/statut-du-suivi/pre-suivi%" 
                            or s.path_string like "/patient/fiche/statut-du-suivi/en-suivi" 
                            or s.path_string like "/patient/fiche/statut-du-suivi/post-suivi" 
                            or (
                                s.path_string like "/patient/fiche/statut-du-suivi/disparu" 
                                and year(pi.start) like year(if(right("2022-12-31", 6) = "datesh", CURDATE(), str_to_date("2022-12-31", "%Y-%m-%d")))
                            ) 
                            or (
                                s.path_string like "/patient/fiche/statut-du-suivi/decede" 
                                and year(pi.start) like year(if(right("2022-12-31", 6) = "datesh", CURDATE(), str_to_date("2022-12-31", "%Y-%m-%d")))
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
    ';
        $result = $conn->query($sql);
        dd($result);
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

        $sql = "SELECT s_antenna.value AS antenna, p.id,  p.id,  s_stat.value AS statut, 
            COALESCE(g.genre, '--inconnu--') AS genre, 
            COALESCE(n.nationalite, '--inconnu--') AS nationalite,  
            COALESCE(prog.programme, '--inconnu--') AS programme,
            COALESCE(team.team, '--inconnu--') AS team 
            FROM patients p
            LEFT JOIN patients_information pi_stat ON pi_stat.pati_id = p.id
            LEFT JOIN suggestions s_stat ON s_stat.id = pi_stat.sugg_id 
            LEFT JOIN patients_information pi_antenna ON pi_antenna.pati_id = p.id 
            LEFT JOIN suggestions s_antenna ON s_antenna.id = pi_antenna.sugg_id
            LEFT JOIN 
            (
                SELECT 
                s.value AS genre,
                pi.pati_id
                FROM 
                patients_information pi 
                INNER JOIN information_template_element pitel ON pitel.id = pi.itel_id 
                INNER JOIN suggestions stel ON stel.id = pitel.suge_id 
                INNER JOIN suggestions s ON s.id = pi.sugg_id 
                WHERE stel.path_string LIKE '/patient/fiche/information-generale/genre%'
                AND '2020-12-31' BETWEEN COALESCE(pi.start, '1901-01-01' COLLATE utf8mb4_unicode_ci) AND COALESCE (pi.end, '2020-12-31')
                AND pi.deleted_at IS NULL
            ) g ON p.id = g.pati_id 		

            left join 
            (
                SELECT 
                s.value as nationalite,
                pi.pati_id
                from 
                patients_information pi 
                inner join information_template_element pitel on pitel.id = pi.itel_id 
                inner join suggestions stel on stel.id = pitel.suge_id 
                inner JOIN suggestions s on s.id = pi.sugg_id 
                where 
                stel.path_string like '/patient/fiche/information-generale/nationalite%'
                and '2020-12-31' between COALESCE(pi.start, '1901-01-01' COLLATE utf8mb4_unicode_ci) and COALESCE (pi.end, '2020-12-31')
                and pi.deleted_at is null
            ) n on p.id = n.pati_id

            left join 
            (
                SELECT 
                s.value as programme,
                pi.pati_id
                from 
                patients_information pi 
                inner join information_template_element pitel on pitel.id = pi.itel_id 
                inner join suggestions stel on stel.id = pitel.suge_id 
                inner JOIN suggestions s on s.id = pi.sugg_id 
                where 
                stel.path_string like '/patient/suivi/programme%'
                and '2020-12-31' between COALESCE(pi.start, '1901-01-01' COLLATE utf8mb4_unicode_ci) and COALESCE (pi.end, '2020-12-31')
                and pi.deleted_at is null
            ) prog on p.id = prog.pati_id

            left join 
            (
                SELECT 
                s.value as team,
                pi.pati_id
                from 
                patients_information pi 
                inner join information_template_element pitel on pitel.id = pi.itel_id 
                inner join suggestions stel on stel.id = pitel.suge_id 
                inner JOIN suggestions s on s.id = pi.sugg_id 
                where 
                stel.path_string like '/patient/suivi/equipes%'
                and '2020-12-31' between COALESCE(pi.start, '1901-01-01' COLLATE utf8mb4_unicode_ci) and COALESCE (pi.end, '2020-12-31')
                and pi.deleted_at is null
            ) team on p.id = team.pati_id

            WHERE p.deleted_at is null

            and s_stat.path_string like '/patient/fiche/statut-du-suivi/%'
            and '2020-12-31' between coalesce(pi_stat.start, '1901-01-01' COLLATE utf8mb4_unicode_ci) and coalesce(pi_stat.end, '2020-12-31')
            and pi_stat.deleted_at is null

            and s_antenna.path_string like '/patient/suivi/antenne/%'
            and '2020-12-31' between coalesce(pi_antenna.start, '1901-01-01' COLLATE utf8mb4_unicode_ci) and coalesce(pi_antenna.end, '2020-12-31')
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
