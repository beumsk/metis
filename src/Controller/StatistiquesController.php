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
    public $refYear;
    public $antennainit;
    public $antenna;
    public $current_quarter;
    public $quarterenddate;
    public $query_date;
    public $startDate;

    public function __construct(
        $quarterstartdate = null,
        $initDate = null,
        $currentDate = null,
        $refDate = null,
        $refYear = null,
        $antennainit = 'Bruxelles',
        $antenna = null,
        $current_quarter = null,
        $quarterenddate = null,
        $query_date = null,
        $startDate = null
    ) {
        $initDate = 'referencedatesh';
        $currentDate = '2022-11-24';
        $refDate = ($initDate === 'referencedatesh') ? date('Y-m-d') : $initDate;
        $refYear = date('Y');
        $antennainit = 'Bruxelles';
        $antenna = ($initDate === 'Liège') ? 'Liège' : 'Bruxelles';
        $current_quarter = ceil(date('n') / 3);
        $quarterstartdate = date('Y-m-d', strtotime(date('Y') . '-' . (($current_quarter * 3) - 2) . '-1'));
        $quarterenddate = date('Y-m-t', strtotime(date('Y') . '-' . (($current_quarter * 3)) . '-1'));
        $query_date = '2021-01-10';
        $startDate = date('Y-m-01', strtotime($query_date));
        $a_date = "2022-01-30";
        $endDate = date("Y-m-t", strtotime($a_date));
        $nextYear = date('Y', strtotime('+1 year'));
        $previousYear = date("Y", strtotime("-1 year"));
        $refyearwc = date('Y') . "%";
        $past = "1901-01-01";
        $nextyear0101 = $nextYear . "-01-01";




        $this->antennainit = $antennainit;
        $this->startDate = $startDate;
        $this->endDate = $endDate;
        $this->antenna = $antenna;
        $this->past = $past;
        $this->refDate = $refDate;
        $this->refyearwc = $refyearwc;
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
                header('Content-type: application/json');
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
                header('Content-type: application/json');
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
                header('Content-type: application/json');
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
                header('Content-type: application/json');
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
                header('Content-type: application/json');
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
                header('Content-type: application/json');
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
                header('Content-type: application/json');
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
                header('Content-type: application/json');
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
                header('Content-type: application/json');
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
                header('Content-type: application/json');
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
                header('Content-type: application/json');
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
                header('Content-type: application/json');
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
                header('Content-type: application/json');
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
                header('Content-type: application/json');
                array_push($resultJson, $row);
            }
            return $this->json($resultJson);
        } else {
            echo "0 results";
        }
        $conn->close();
    }
}
